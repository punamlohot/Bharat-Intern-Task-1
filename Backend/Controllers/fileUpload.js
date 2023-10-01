const File = require("../models/BlogContent");
const cloudinary = require("cloudinary").v2;


function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { 
        folder: folder,
        resource_type: "auto",

        // these 3 lines will help to keep the original filename in the database
        public_id: file.name,
        use_filename: true,
        unique_filename: false
    };

    console.log("temp file path", file.tempFilePath);

    if (quality) {
        options.quality = quality;
    }

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// imageUpload handler
exports.imageUpload = async (req, res) => {
    try {
    
        //data fetch
        const { desc, blogbody} = req.body;
        const file = req.files.imageFile;
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("File Type:", fileType);

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            });
        }

        //file format is supported
        console.log("Uploading to Cloudinary");
        const response = await uploadFileToCloudinary(file, "BharatBloggers");
        console.log(response);

        //Save entry in DB
        const fileData = await File.create({
            desc,
            blogbody,
            url: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded",
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
};


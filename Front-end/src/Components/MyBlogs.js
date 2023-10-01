import React from 'react'
import SingleBlog from './Single';
import { useState, useEffect } from 'react';


const MyBlogs = () => {

    const [Blogdata, setBlogdata] = useState([]);

    useEffect(() => {
        getBlogdata();
    }, [])

    const getBlogdata = async () => {
        try {
            const data = await fetch("http://localhost:5000/api/v1/readblogdata");
            const json = await data.json();
            setBlogdata(json);
            // console.log("Blogdata" ,json);
        }
        catch (error) {
            console.log("error fetching data :", error);
        }
    }

    return Blogdata === null ? (
        <h1 className='blank'>No Blogs Found</h1>
    ) : (
        <div className="bodyContainer container-fluid">

            {Blogdata.map((item) => (
                <SingleBlog
                    desc={item.desc}
                    blogbody={item.blogbody}
                    img = {item.imageFile}
                    createdAt={item.createdAt}
                    param={item._id}
                    key={item._id}
                />
            ))}

        </div>
    )
}
export default MyBlogs;
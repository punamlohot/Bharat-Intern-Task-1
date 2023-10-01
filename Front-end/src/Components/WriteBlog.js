
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WriteBlog = () => {
  const [desc, setDesc] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [blogbody, setBlogbody] = useState('');
  // const [comment,setComment] = useState('');
  const navigate = useNavigate();


  const handleBlogdata = async (e) => {

    // Create a FormData object to send the form data including the image file
    const formData = new FormData();
    formData.append('desc', desc);
    formData.append('imageFile', imageFile);
    formData.append('blogbody', blogbody);
    try {
      let blogdata = await fetch('http://localhost:5000/api/v1/blogdata', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for FormData
        },
      });
      console.log('result:', blogdata);
      const blogdataJSON = JSON.stringify(blogdata);
      localStorage.setItem('blogdata', blogdataJSON);
      alert("Blog Created Successfully Click On See all blogs to see your blog");
      Erase();
      //navigate('/Myblogs');
    }
    catch (error) {
      // Handle any errors that occur during the request
      console.error('Error sending request:', error);
    }
  };
  const Erase = () => {
    setImageFile(null);
    setDesc('');
    setBlogbody('');
  }

  const Preview = () => {
    alert("Preview called successfully");
  };

  const Seeall = () => {
    navigate("/Myblogs");
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-8' id='left'>
            <form encType="multipart/form-data" onSubmit={handleBlogdata}>

              <div className='container-fluid' id="blogTitlediv">
                <input type="text" placeholder="Blog Title..." id="Blogcaption" name="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} required />
              </div>


              <div className="#" id='Control-pane'>
                <input type='file' accept="image/*" name="imageFile" className='imginput' id='imginp' />
                {imageFile && <img src={imageFile} alt="Uploaded" style={{ maxWidth: '300px' }} />}
              </div>


              <div className='container-fluid' id="blogBodydiv">
                <textarea placeholder="Start Writing" id="blogbody" name="blogbody" value={blogbody} onChange={(e) => { setBlogbody(e.target.value) }} required></textarea>
              </div>
              
              <div className='container-fluid' id="Button-controls">
                <button type="submit" className="btn btn-success" id="btn1">Save&Publish</button>
                <button type="button" className="btn btn-success" id="btn2" onClick={Preview}>Preview</button>
                <button type="button" className="btn btn-success" id="btn3" onClick={Erase}>Clear All</button>
              </div>
            </form>
          </div>

          <div className='col-sm-4' id='right'>
            <button type="button" className="btn btn-outline-success m-3" id="btn4" onClick={handleBlogdata}> Publish</button>
            <button type='button' className="btn btn-outline-success" id="SeeBlog" onClick={Seeall}>See all blogs</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default WriteBlog;
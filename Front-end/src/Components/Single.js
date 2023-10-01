import React from "react";


const SingleBlog = ({ desc, blogbody, createdAt, param ,img}) => {

  const deleteBlog = async (id) => {
    let result = await fetch(`http://localhost:5000/api/v1/deleteblog/${param}`, {
      method: 'delete'
    });
    result = await result.json();
    if (result) {
        alert("Blog Deleted Kindly Refresh The Page");
      }
    else {
      alert("Blog Cannot Be Deleted");
    }
  }

  return (
    <div className="container mb-5" id="single">
      <button type="submit" className='btn btn-outline-dark' id="delete" onClick={() => deleteBlog({ param })}>
      <img src="https://clipground.com/images/delete-image-png-19.png" alt="delete" height="30px" width="40px" />
      </button>
      <div className='' id="UIBlogtitle">
        <h1 className="desc">{desc}</h1>
      </div>
      <img src= {img} alt="blogimg" height="200px" width="200px" id="Cloudinary-Image"/>
      <div className='m-3 p-3' id="UIBlogBody">
        <p className="bbody">{blogbody}</p>
      </div>
      <p className="m-3">{createdAt}</p>
    </div>
  )
}

export default SingleBlog;;
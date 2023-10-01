import React from 'react'

const Delete = () => {

    const deleteBlog = async(id)=>{
        let result = await fetch(`http://localhost:5000/api/v1/deleteblog/${id}`,{
        method:"Delete"
        });
        result = await result.json();
        if(result){
          alert("Blog deleted");
        }
      }

    return (
        <div className="btns">
            <button className="btn btn-primary" type="button" onClick={deleteBlog(id)}>Delete</button>
            <button className="btn btn-primary" type="button">Edit</button>
        </div>
    )
}

export default Delete;

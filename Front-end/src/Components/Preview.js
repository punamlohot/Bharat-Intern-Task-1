import React from "react";

const Preview = ({desc,blogbody,createdAt}) => {
  return (
    <div className="container-fluid" id="single">
    <div className='p-5' id="UIBlogtitle">
    <h1 className="desc">{desc}</h1>
    </div>
    <p className="bbody">{blogbody}</p>
    <p className="cat">{createdAt}</p>
    </div>
  )
}
export default Preview;
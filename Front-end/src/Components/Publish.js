import React from 'react'
//import SingleBlog from './Single';
import { useState,useEffect } from "react";

const Published = () => {
  const [cardArray, setCardArray] = useState([]);
  const [masterCards, setMasterCards] = useState([]);
  
 useEffect(()=>{
       
  getBlogData();},[])

  async function getBlogData(){
        try{
        const data = await fetch("http://localhost:5000/api/v1/readblogdata");
        const json = await data.json();
        console.log(json);
        // setCardArray(json|| []);
        // setMasterCards(json);
        // console.log(cardArray);
        // console.log(masterCards);
       }
        catch (error)
        {
          console.error("Error fetching data : " ,error);
        }
      }

return cardArray === null ? (
  <h1 className="Loader">Loading</h1>
) : (
  <>
    <div>
      <div className="bodyContainer container-fluid">
        
        {/* {cardArray.map((card) => (
          <SingleBlog {...card.json} key={card.json.id} />
        ))} */}
      </div>
    </div>
  </>
);
};

export default Published;
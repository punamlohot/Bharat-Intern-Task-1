import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='container-fluid' id="footer">
          <div className='social'>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src='https://clipartcraft.com/images/instagram-icon-transparent-neon.png'
              alt='insta' height='50' width='50' /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src='https://icon-library.com/images/facebook-icon-download/facebook-icon-download-17.jpg'
              alt='fb' height='55' width='55' /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/social-twitter-icon.png'
              alt='twitter' height='55' width='55' /></a>
            <h5 className='m-3'><a href=' # ' className='feedback-link'> Share Feedback</a></h5>
            <p className='ftext mt-5'>Powered By Bharat-Bloggers</p>
          </div>
        
       
        <div className='container-fluid' id="feed">
          <textarea placeholder="Share your valuable feedback"></textarea><br></br>
          <button className='btn btn-light'> Send</button>
        </div>
        </div>
    </>
  )
}

export default Footer;
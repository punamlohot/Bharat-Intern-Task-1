import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <>
      <div className='container-fluid' id="Body1">
        <div className='container-fluid' id="quote">
          <h2 className='' ><i>“When something is important enough, you do it even if the odds are not in your favor.”</i></h2>
          <h5 className='' id='author'><i>– Elon Musk</i></h5>
        </div>
        <div className='container-fluid' id="animdiv">
        <img src='https://www.99apptechnologies.com/wp-content/themes/99apptech/assets/images/vectors/vector21.png' alt='animimage' id='anim' height='50%' width='50%'/>
        </div>
        <div className='btn'>
          <Link className="text-dark mb-5" to={"/SignIn"}><button className='btn btn-success' id="bodybtn"><strong>Create Your First Blog</strong></button></Link>
          <marquee className='text-light p-5'>Create a unique and beautiful blog easily.</marquee>
        </div>
      </div>
      
      <div className='container-fluid' id="Body2">
        <div className="row">
          <div className="col-sm-6 mt-5">
            {/* <video className="p-3" width="800" height="500" controls autoplay muted>
          <source src="../Assets/pexels-kampus-production-7514233 (2160p).mp4" type="video/mp4"/>
          Your browser does not support the video tag.
          </video> */}
            <iframe title="videoGuide" width="500" height="315" id="IFrame"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1 ">
            </iframe>
          </div>
          <div className="col-sm-6 mt-5">
            <p className='text-success' id='feature'>A Visual Guide To Write Your First blog</p>
            <p className='text-dark'>"Blogging can serve multiple purposes.
              For one, it’s a great way to establish yourself as an authority on your area of expertise.
              It can also be an effective way to drive traffic to your website
              and educate people about the topics you’re passionate about.
              Additionally, a blog is the perfect place to showcase your writing. "</p>
          </div>
        </div>
      </div>

      <div className='container-fluid' id="Body3">
        <div className="row">
          <div className="col-sm-6" id="grid1">
            <p className='text-success' id='feature'>Choose the perfect design</p>
            <p className='text-dark'>"Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates
              all with flexible layouts and hundreds of background images
              or design something new"</p>
          </div>
          <div class="col-sm-6">
            <img id="featureimage" className="m-5" src="https://www.elegantthemes.com/blog/wp-content/uploads/2016/06/Feature-List-Sections-Layout-Pack-00.png" alt="feature" height="400" width="400" />
          </div>
        </div>
      </div>
      <div className='container-fluid' id="Body4">
        <div className="row">
          <div class="col-sm-6">
            <img id="featureimage" className="m-5" src="http://pluspng.com/img-png/web-development-png-web-development-1100.png" alt="feature" height="400" width="400" />
          </div>
          <div className="col-sm-6" id="grid2">
            <p className='text-success m-3' id='feature'>Get a domain</p>
            <p>Give your blog the perfect home.<br></br>
              Get a Testblog.com domain or buy a
              custom domain with just a few clicks.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid' id="Body5">
        <div className="row">
          <div className="col-sm-6" id='grid3'>
            <p className='text-success m-3' id='feature'>Hang onto your memories</p>
            <p className='text-dark m-3'>
              Save the moments that matter.<br></br>
              Blogger lets you safely store thousands of posts, photos, and more with Google.</p>
          </div>
          <div class="col-sm-6">
            <img id="featureimage" className="m-5" src="http://www.pngall.com/wp-content/uploads/2017/11/Collage-Frame-PNG-Picture.png" alt="feature" height="400" width="400" />
          </div>
        </div>
      </div>
      <div className='horizontal p-3'>
        <marquee className='text-light' id="marquee">Create a unique and beautiful blog easily.</marquee>
      </div>
      
      <img src='https://www.99apptechnologies.com/wp-content/themes/99apptech/assets/images/vectors/vector21.png' alt='animimage' id='anim' height="400" width=""/>
      
      <div className='container-fluid' id='Body6'>
        <p className='mt-2'>Join millions of others</p>
        <p>Whether sharing your expertise, breaking news, or whatever’s on your mind,
          you’re in good company on BharatBloggers.</p>
        <p>Sign up to discover why millions of people have published their passions here.</p>
        <div>
          <img className='m-2' src="https://icon-library.com/images/icon-for-users/icon-for-users-18.jpg" alt="locate" height="50" width="50" />
          <img className='m-2' src="http://clipartmag.com/images/location-icon-png-19.png" alt="locate" height="50" width="50" />
        </div>
        <Link className="" to={"/SignIn"}><button className='btn btn-success' id='bottombtn'><strong>Create Your Blog</strong></button></Link>

      </div>
    </>
  )
}

export default Body;
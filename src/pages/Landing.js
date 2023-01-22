import React from 'react'
import Logo from '../assets/images/logo.jpeg'
import About from '../assets/images/about.png'
import Hero from '../assets/images/hero.png'
import Admission from '../assets/images/admission.png'
import Why from '../assets/images/why.png'
import Student from '../assets/images/students.jpg'
import Determine from '../assets/images/determine.png'
import Client from '../assets/images/client.png'

import FaceBook from '../assets/images/fb.png'
import Twitter from '../assets/images/twitter.png'
import Instagram from '../assets/images/instagram.png'
import LinkedIn from '../assets/images/linkedin.png'
import { Link } from 'react-router-dom'

import Slider from 'react-slick'

import { Helmet } from 'react-helmet'

export default function Landing() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
      <Helmet>
        <title>Welcome to BigenKids</title>
      </Helmet>
    <div className="top_container">
        <header className="header_section">
        <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
                <Link to="/" className='links'>
                    <span >
                        <img style={{
                        borderRadius: '50%'
                    }}
                    width={80} src={Logo} />
                    </span>
                    <span className='px-2' 
                       style={{
                        fontSize: '20px'
                       }} >
                         BigenKids
                    </span>
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="w-100 d-flex ml-auto flex-column flex-lg-row align-items-center justify-content-end">
                <ul className="navbar-nav">
                    
                <li className="nav-item active mx-3">
                    <Link to="/">Home</Link>
                </li>
                
                <li className="nav-item active mx-3">
                    <Link to="#about" reloadDocument>About</Link>
                </li>

                <li className="nav-item active mx-3">
                    <Link to="#contact" reloadDocument>Contact</Link>
                </li>

                <li className="nav-item active mx-3">
                    <Link to="/signup/student">Student Registration</Link>
                </li>

                <li className="nav-item active mx-3">
                    <Link to="signup/teacher">Teacher Registration</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>
        </header>
        <section className="hero_section ">
        <div className="hero-container container">
        <div className="hero_detail-box">
            <h1>
            Best platform to study and get your doubts cleared
            </h1>
            <p>
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="hero_btn-continer">
                <Link className="call_to-btn btn_white-border" to="/signup/student">
                    Sign Up
                </Link>
            </div>
        </div>
        <div className="hero_img-container">
            <div>
            <img src={Hero} alt="" className="img-fluid" />
            </div>
        </div>
        </div>
        </section>
    </div>

   <div className="common_style">

       <section className="about_section" id="about">
       <div className="container">
           <div className="row">
           <div className="col-md-6">
               <div className="about_img-container">
               <img src={About} alt="" />
               </div>
           </div>
           <div className="col-md-6">
               <div className="about_detail-box">
               <h3>
                    About Our Platform
               </h3>
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               </p>
               <div className="">
                <Link className="call_to-btn btn_white-border" to="/signup/student">
                   Sign Up
                </Link>
               </div>
               </div>
           </div>
           </div>
       </div>
       </section>

       <section className="admission_section">
       <div className="container">
           <div className="row">
           <div className="col-md-6">
               <div className="admission_detail-box">
               <h3>
                    Registration Open
               </h3>
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               </p>
               <div className="">
                    <Link className="call_to-btn btn_white-border" to="/signup/student">
                        Sign Up
                    </Link>
               </div>
               </div>
           </div>
           <div className="col-md-6">
               <div className="admission_img-container">
               <img src={Admission} alt="" />
               </div>
           </div>
           </div>
       </div>
       </section>


       <section className="why_section">
       <div className="container">
           <div className="row">
           <div className="col-md-6">
               <div className="why_img-container">
               <img src={Why} alt="" />
               </div>
           </div>
           <div className="col-md-6">
               <div className="why_detail-box">
               <h3>
                   Why learn on BigenKids
               </h3>
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               </p>
               <div className="">
                     <Link className="call_to-btn btn_white-border" to="/signup/student">
                        Sign Up
                    </Link>
               </div>
               </div>
           </div>
           </div>
       </div>
       </section>



       <section className="determine_section">
       <div className="container">
           <div className="row">
           <div className="col-md-6">
               <div className="determine_detail-box">
               <h3>
                   Datermine the right for you
               </h3>
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               </p>
               <div className="">
                    <Link className="call_to-btn btn_white-border" to="/signup/student">
                        Sign Up
                    </Link>
               </div>
               </div>
           </div>
           <div className="col-md-6">
               <div className="determine_img-container">
               <img src={Determine} alt="" />
               </div>
           </div>
           </div>
       </div>
       </section>
   </div>

   <section className="client_section layout_padding">
       <h2 className="">
       Testimonial
       </h2>
       <div className="container">
       <Slider {...settings}>
               <div className="carousel-item active">
                   <div className="row">
                       <div className="col-md-3">
                           <div className="client_img-box">
                           <img src={Client} alt="" />
                           </div>
                       </div>
                       <div className="col-md-9">
                           <div className="client_detail-box">
                           <h5>
                               Alex Du
                           </h5>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                           </p>
                           </div>
                       </div>
                       </div>
               </div>
               <div className="carousel-item">
                   <div className="row">
                       <div className="col-md-3">
                           <div className="client_img-box">
                           <img src={Client} alt="" />
                           </div>
                       </div>
                       <div className="col-md-9">
                           <div className="client_detail-box">
                           <h5>
                               Alex Du
                           </h5>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                           </p>
                           </div>
                       </div>
                       </div>
               </div>
               <div className="carousel-item">
                   <div className="row">
                       <div className="col-md-3">
                           <div className="client_img-box">
                           <img src={Client} alt="" />
                           </div>
                       </div>
                       <div className="col-md-9">
                           <div className="client_detail-box">
                           <h5>
                               Alex Du
                           </h5>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                           </p>
                           </div>
                       </div>
                       </div>
               </div>
                </Slider>
       
       </div>
   </section>

   <section className="contact_section " id="contact">

       <div className="container">
       
       <div className="row">
           <div className="col-md-6"
           style={{
            padding: "18px",
            border: "3px solid #000",
            borderRadius: "10px"
           }}>
           <div className="d-flex justify-content-center d-md-block">
               <h2>
               Contact Us
               </h2>
           </div>
           <form action="">
               <div className="contact_form-container">
               <div>
                   <div>
                   <input type="text" placeholder="Name" />
                   </div>
                   <div>
                   <input type="email" placeholder="Email" />
                   </div>
                   <div>
                   <input type="text" placeholder="Phone Number" />
                   </div>
                   <div className="mt-5">
                   <input type="text" placeholder="Message" />
                   </div>
                   <div className="mt-5">
                   <button type="submit">
                       send
                   </button>
                   </div>
               </div>
   
               </div>
   
           </form>
           </div>
           <div className="col-md-6">
           <div className="contact_img-box">
               <img src={Student} alt="" />
           </div>
           </div>
       </div>
       </div>
   </section>

 <section className="info_section layout_padding-top">
   <div className="info_logo-box">
     <h2>
         BigenKids
     </h2>
   </div>
     <div className="container layout_padding2">
       <div className="row">
         <div className="col-md-3">
           <h5>
               About Us                                                                             
           </h5>
          <p>
             dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r 
          </p>
         </div>
         <div className="col-md-3">
           <h5>
               Contact Us
           </h5>
           <p>
               dolor sit amet, consectetur magna aliqua. quisdotempor incididunt ut e 
           </p>
         </div>
         <div className="col-md-5 ml-auto">
           <h5>
               Useful Link 
           </h5>
           <ul>
             <li>
               <a href="">
               Privacy Policy
               </a>
             </li>
             <li>
              <a href="">
              Terms of Service
              </a>
             </li>
             <li>
               <a href="">
               Refund Policy
               </a>
             </li>
           </ul>
         </div>
        
         {/* <div className="col-md-3">
      
           <div className="subscribe_container">
             <h5>
                 Newsletter
             </h5>
             <div className="form_container">
               <form action="">
                 <input type="email" placeholder="Enter your email" />
                 <button type="submit">
                   Subscribe
                 </button>
               </form>
             </div>
           </div>
           
         </div> */}
       </div>
     </div>
     <div className="container">
         <div className="social_container">
            
             <div className="social-box">
               <a href="">
                 <img src={FaceBook} alt="" />
               </a>
 
               <a href="">
                 <img src={Twitter} alt="" />
               </a>
               <a href="">
                 <img src={LinkedIn} alt="" />
               </a>
               <a href="">
                 <img src={Instagram} alt="" />
               </a>
             </div>
           </div>
     </div>
   </section>

<section className="container-fluid footer_section">
   <p>
   Copyright &copy; 2023 All rights reserved | Designed & Developed by <a href='https://cinevus.com/' target="_blank">cinevus.com</a>
   </p>
</section>
</div>
  )
}

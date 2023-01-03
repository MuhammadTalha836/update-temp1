import React from 'react'
import "../style/serviceTop.css";
import img1 from '../assets/Service__picture/1.jpg'
import img2 from '../assets/Service__picture/2.jpg'
import img3 from '../assets/Service__picture/3.jpg'
import { BsWhatsapp } from "react-icons/bs";
import logo from '../assets/img/logo.png'
export default function ServiceTop() {
    return (
        <>
            <div className='container serviceTop'>
                <div className='main__service__heading'><h2>Our Services</h2>
                    <div className="serviceMain__top__line"></div></div>
                <div className="service-images" data-aos="fade-left" data-aos-duration="800">
                    <img src={img1} alt="" className='img' />
                    <img src={img2} alt="" className='img' />
                    <img src={img3} alt="" className='img' />
                    <div className="service-content">
                        <div className="card ">
                            <div className='card-content'>

                                <h1 className='mb-2' style={{color:"#212135"}}>Professional Airbnb Cleaning</h1>
                                <div className="serviceTop_line"></div>
                                <p className='mb-4' style={{lineHeight:"23px",color:"gray"}}>Top: Professional Airbnb Cleaning: The first thing at time of checkin the guest observes is the cleaning of apartment and this is the only thing on which no guest can compromises. Maintaing high standard of cleaniness as per hotel standards requires lot of training and effort which becomes very expenisve, and compromising on this can lead to disastorous effect on Airbnb Business.
                                    With experince of years we are serving the hosts of Airbnb with expert cleaning. Our staff is specifically trained for providing hotel standard cleaning for airbnb apartments and we provide flexible packages as per volume of checkins which reduces any fixed liabilty on hosts of affording monthly cleaning services. We are now serving you in Jeddah, Dubai, Islamabad, Lahore, and Doha.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                <div className='whatsApp__button' data-aos="fade-up" data-aos-duration="800" style={{marginTop:"140px"}}>
                    <a target="_blank" href="" style={{ backgroundColor: 'rgb(240, 240, 60)', width: '240px' }} className="btn px-4 py-3 text-white d-flex align-items-center justify-content-between">
                        <span>Contact Now</span>
                        <BsWhatsapp color='white' size={28} className="whatsApp__icon" />
                    </a>
                </div>

        </>
    )
}

import React from 'react'
import "../style/serviceTop.css";
import img1 from '../assets/Service__picture/1.jpg'
import img2 from '../assets/Service__picture/2.jpg'
import img3 from '../assets/Service__picture/3.jpg'
export default function ServiceTop() {
    return (
        <div className='container serviceTop'>
            <div className="service-images" data-aos="fade-left" data-aos-duration="800">
                <img src={img1} alt="" className='img' />
                <img src={img3} alt="" className='img' />
                <img src={img3} alt="" className='img' />
                <div className="service-content">
                    <div className="card ">
                        <div className='card-content'>

                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus beatae voluptatem consequuntur, ea, minus aliquam nobis cupiditate neque est quas error labore hic illum reiciendis iure quod sunt magnam?</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

import React from 'react'
import './Main.scss'
import AOS from 'aos'
import Content from "../content/content";
import Phone from '../svg/phone'
import Arrow from "../svg/Arrow";

const Main = () => {
    AOS.init()
    return <div className='main_page'>
        <div className="front_img"/>
        <div id="sky"/>
        <div className="main_top">

            <div className="logo"
                 data-aos="flip-left"
                 data-aos-duration="1000"
                 data-aos-delay="2300">

                <span>Ray</span>
                <p>apartments</p>

            </div>

            <div className="phone" data-aos="fade-down" data-aos-delay="1700" data-aos-duration="1500">
                <div className="phone_icon">
                    <Phone/>
                </div>
                <a href="tel:+78005553535">8-800-555-35-35</a>
            </div>

        </div>
        <div className="main_content"
             data-aos="fade-up-right"
             data-aos-duration="3000"
             data-aos-delay="1400"
        >
            <h1><Content data="main_title"/></h1>
        </div>
        <div className="main_offer" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1500">
            <span><Content data="main_more"/></span>
            <div className="main_offer_arrow">
                <Arrow/>
            </div>
        </div>
    </div>
}

export default Main
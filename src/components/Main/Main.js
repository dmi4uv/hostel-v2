import React from 'react'
import './Main.scss'
import AOS from 'aos'
import Content from "../content/content";

const Main = () => {
       AOS.init()
    return <div className='main_page'>
        <div className="main_top">
            <div className="logo" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="2300" >
                <span>Ray</span>
                <p>apartments</p>
            </div>
            <div className="phone" data-aos="fade-down" data-aos-delay="1700" data-aos-duration="1500">
                <div className="phone_icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="24 / call / call-calling">
                            <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M10.8566 8.33796C11.3747 7.63975 11.5605 6.9039 10.9745 6.25437C9.65955 4.41439 8.77521 3.27655 8.22051 2.7286C7.16595 1.68687 5.43118 1.82778 4.51785 2.72771C4.0273 3.21107 3.86122 3.37706 3.35753 3.88867C0.551877 6.69583 2.26291 12.6301 6.81145 17.1831C11.359 21.7351 17.2926 23.447 20.1042 20.6339C20.569 20.1858 20.9625 19.7921 21.2729 19.464C22.1679 18.518 22.3038 16.8598 21.267 15.7825C20.7354 15.2302 19.6504 14.3885 17.733 13.017C17.1457 12.4919 16.4495 12.6057 15.8111 13.0245C15.504 13.226 15.2806 13.4297 14.8586 13.8521L14.0924 14.6188C13.9914 14.7198 12.621 14.0335 11.2908 12.7019C9.95978 11.3696 9.27396 9.99912 9.37441 9.89868L10.1412 9.13148C10.2751 8.99748 10.3391 8.9326 10.4211 8.84633C10.5921 8.6666 10.7337 8.5035 10.8566 8.33796ZM15.5058 16.033L16.2722 15.2662C16.5044 15.0337 16.6549 14.8908 16.7774 14.7923C18.457 15.9985 19.4298 16.7569 19.8271 17.1698C20.0657 17.4176 20.0286 17.8699 19.8212 18.0891C19.5342 18.3924 19.1614 18.7655 18.7038 19.2069C16.8858 21.0257 12.096 19.6437 8.22519 15.7692C4.35321 11.8934 2.97194 7.10285 4.77626 5.29755C5.27792 4.78804 5.43686 4.62918 5.92042 4.15271C6.10172 3.97407 6.59558 3.93395 6.81614 4.15182C7.2432 4.5737 8.0354 5.58805 9.20077 7.21139C9.14044 7.28629 9.06509 7.37093 8.97339 7.4673C8.90609 7.53804 8.85002 7.59488 8.72744 7.71758L7.96142 8.48402C6.65827 9.78706 7.76808 12.0048 9.87703 14.1158C11.9845 16.2254 14.2031 17.3364 15.5058 16.033ZM13.6551 2.0695C17.9784 2.59354 21.4064 6.02159 21.9305 10.3449L19.955 10.6741C19.5736 7.19178 16.8082 4.42636 13.3258 4.04494L13.6551 2.0695V2.0695ZM12.9963 6.02208C15.6378 6.25834 17.7416 8.36215 17.9779 11.0037L15.9961 11.334C15.912 9.53308 14.4669 8.08796 12.666 8.00386L12.9963 6.02208V6.02208Z" fill="white"/>
                        </g>
                    </svg>

                </div>
                <a href="tel:+78005553535">8-800-555-35-35</a>
            </div>
        </div>
        <div className="main_content"
             data-aos="fade-up"
             data-aos-duration="3000"
             data-aos-delay="1400"
        >
            <h1><Content data="main_title"/></h1>
        </div>
        <div className="main_offer" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1500">
            <span><Content data="main_more"/></span>
            <div className="main_offer_arrow">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="32" width="32" height="32" rx="16" transform="rotate(-90 0 32)" fill="white"/>
                    <path d="M20.3994 16.9533C20.7899 16.5627 20.7899 15.9296 20.3994 15.539L14.0354 9.17509C13.6449 8.78456 13.0118 8.78456 12.6212 9.17509C12.2307 9.56561 12.2307 10.1988 12.6212 10.5893L18.2781 16.2462L12.6212 21.903C12.2307 22.2935 12.2307 22.9267 12.6212 23.3172C13.0118 23.7077 13.6449 23.7077 14.0354 23.3172L20.3994 16.9533ZM10.8308 17.2462H19.6923V15.2462H10.8308V17.2462Z" fill="#636163"/>
                </svg>

            </div>
        </div>
    </div>
}

export default Main
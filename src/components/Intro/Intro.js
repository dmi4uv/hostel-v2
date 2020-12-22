import React,{useState} from 'react'
import './Intro.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Content from "../content/content";

const Intro = () => {

    const [opacity,setStyle] = useState()
    const [lineWidth,setLineWidth] = useState('intro_line')
    setTimeout(()=>{
        setStyle(0)
    },2000)

    let introStyle = {
        opacity: opacity
    }

    let lineStyle = lineWidth

    setTimeout( ()=> {
        setLineWidth('intro_line addWidth')
    },500)

    AOS.init()
    return <div className='intro' style={introStyle} data-aos-mirror="true" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
        <p><Content data="intro"/></p>


        <div className={lineStyle}/>
    </div>
}

export default Intro
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { motion, useTransform, useViewportScroll } from "framer-motion";
import backgroundimg from '../assets/LandingPage/backg.jpg';
import landingImage from  '../assets/LandingPage/final.jpg';
import Test from '../Parallax/Test';

const LandingPage = () => {

    const { scrollY } = useViewportScroll();
    const scaleRight = useTransform(scrollY, [0, 300], [1, 1.25]);
    const y1 = useTransform(scrollY, [300, 700], [0, 200]);
    const y2 = useTransform(scrollY, [300, 500], [0, -10]);

    const landing={
        backgroundImage:"url("+landingImage+")",
        height:'112.5vh',
        backgroundRepeat: 'no-repeat',
        };

    return (
        <div  style={landing}  >
            <div className='header-title'>Art that inspires you.</div>
            <div className='header-subtitle'>Discover art for home or office.</div>
            <div style={{ width: "100vw", height: "80vh", paddingTop: "4.2%" }}>
                <div
                    style={{
                        height: "80vh",
                        display: "flex",
                        position: "sticky",
                        top: "0px",
                        padding: 0
                    }}
                >
                    <motion.div
                        className="child"
                        style={{
                            height: "40rem",
                            scale: scaleRight,
                            padding: 0
                        }}
                    >
                        <img className="hero-image" src={backgroundimg} alt="mdo" />

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
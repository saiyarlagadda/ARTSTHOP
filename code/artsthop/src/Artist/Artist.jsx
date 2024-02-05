import React from 'react'
import './Artist.css'
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import landingImage from  '../assets/LandingPage/final.jpg';

const Artist = () => {

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [3200, 4000], [0, -250]);

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false
    });

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50
        }
    };

    const artistcontainer={
        backgroundImage:"url("+landingImage+")",
                height:'50rem',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'row',
                color: 'white',
                textAlign: 'justify'
                };

    return (
        <div style = {artistcontainer}  >
            <img className='artist-image' src='src/assets/images/images/artist.jpg' alt="artist image" height="80%" />
            <div className='artist-info'>
                <motion.div style={{ y: y1, x: 50 }}>
                    <label>Lily Brown</label>
                    <p className='artist-text'>Lily Brown is a British painter known for her vibrant abstract works.
                        With over 14 years of experience, she has gained recognition for her dynamic compositions and bold use of color.
                        Brown draws inspiration from her travels around the world and uses a variety of techniques, including layering
                        and texture-building, to create her distinctive style.</p>
                    <p className='artist-text'>Her pieces often explore the intersection of nature and
                        culture, and aim to evoke a sense of wonder and curiosity in the viewer. In addition to creating art, Lily is
                        passionate about teaching and mentoring emerging artists. She is a visiting professor at the Royal Academy of
                        Arts and has led workshops and residencies in several countries. She is also committed to philanthropic
                        activities and serves as a trustee for several art foundations.</p>
                    <p className='artist-text'>Brown's work has been exhibited in major
                        galleries and museums, including the Tate Modern and the National Gallery of Art in Washington, D.C.
                        Her paintings are held in private collections around the world, and she has received numerous awards and
                        honors. To learn more about Lily Brown and her work, please follow her on social media.</p>
                    <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 1, ease: 'anticipate' }}
                        ref={ref}
                    >
                        <div className='artist-socials'>
                            <img style={{ margin: 'auto' }} src='src/assets/Socials/instagram.png' alt="instagram icon" height='50' width='50' />
                            <img style={{ margin: 'auto' }} src='src/assets/Socials/youtube.png' alt="youtube icon" height='50' width='50' />
                            <img style={{ margin: 'auto' }} src='src/assets/Socials/tumblr.png' alt="tumblr icon" height='50' width='50' />
                            <img style={{ margin: 'auto' }} src='src/assets/Socials/pinterest.png' alt="pinterest icon" height='50' width='50' />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Artist
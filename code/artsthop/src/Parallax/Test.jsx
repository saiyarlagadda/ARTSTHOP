import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './Test.css'

const Test = () => {

    const { scrollY } = useScroll();

    const y2 = useTransform(scrollY, [700, 2000], [0, -250]);
    const y1 = useTransform(scrollY, [1100, 1300], [0, -250]);
    const y3 = useTransform(scrollY, [1350, 2650], [0, -250]);
    const y4 = useTransform(scrollY, [1750, 1950], [0, -250]);

    return (
        <div className='boxes'>
            <div className='box-container'>
                <motion.div className="box1" style={{ y: y1, x: 50 }} >
                <img style={{ objectFit: 'cover', height: '30rem', width: '30rem' }} src='src/assets/Paintings/62.webp' />
                </motion.div>
                <motion.div
                    className="box2"
                    style={{ y: y2, x: -50 }}
                ><img style={{ objectFit: 'cover', height: '30rem', width: '30rem' }} src='src/assets/Paintings/61.webp' /></motion.div>
                <p className='textbox'><p style={{ borderBottom: '1px solid black', margin: '0rem' }}>Bluff. Hand series</p> <br />
                    Among our body movements, there are hand actions that can even change the world. Such actions change thoughts, ours and others. These are gestures. Gestures appear first, before words. In essence, gestures are substitutes for words. Many gestures are used subconsciously, and reveal to us the essence much more vividly than just sounds. In this artwork, I have revealed the metaphor of a hand with a flower, which in unison reveals the essence without a face. More than million ink dots applied by hand were spent on the creation of the work. I master the art of patience, leaving no room for mistakes in this seemingly small artwork.</p>
            </div>
            <div className='box-container-two'>
                <motion.div className="box1" style={{ y: y3, x: 50 }} >
                <img style={{ objectFit: 'cover', height: '30rem', width: '30rem' }} src='src/assets/Paintings/43.webp' />
                </motion.div>
                <motion.div
                    className="box2"
                    style={{ y: y4, x: -50 }}
                ><img style={{ objectFit: 'cover', height: '30rem', width: '30rem' }} src='src/assets/Paintings/41.webp' /></motion.div>
                <p className='textbox'><p style={{ borderBottom: '1px solid black', margin: '0rem' }}>Desert</p> <br />
                    A muted color palette and careful rendering of details creates a warm scene. The background objects provide subtle accents, while the use of light and shadow creates a sense of depth and dimensionality. Overall, Desert is a beautiful example of elevating ordinary objects into works of art. Portrait and patterns, two of my favorite subjects are expressed in this artwork. Watercolor with golden and silver watercolor details.</p>
            </div>
        </div>
    )
}

export default Test
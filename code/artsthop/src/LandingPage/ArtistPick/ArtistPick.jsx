import React from 'react'
import Button from 'react-bootstrap/Button'
import './ArtistPick.css'
import ArtistCarousel from './ArtistCarousel/ArtistCarousel'
import Test from '../../Parallax/Test'
import Artist from '../../Artist/Artist'
import landingImage from  '../../assets/LandingPage/final.jpg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ArtistPick = () => {

  const artcontainer={
    backgroundImage:"url("+landingImage+")",
            height:'90vh',
            marginTop: '11rem',
            };

  const navigate = useNavigate();
  
  return (
    <div style = {artcontainer} >
      <label className='card-container subtext'>
        BEAUTIFY YOUR LIVING SPACE
      </label>
      <p className='card-container desctext'>Shop for exquisite art that reflects <br /> your personal style.</p>
      <Test />
      <div className='container-two'>
        <label className='card-container subtext'>
          BEAUTIFY YOUR LIVING SPACE
        </label>
        <p className='card-container desctext'>Shop for exquisite art that reflects <br /> your personal style.</p>
        <div className='card-container caros'><ArtistCarousel /></div>
        <div className='card-container art-button'><Button variant="dark" onClick={() => navigate('/products')}>See More</Button></div>
      </div>
      <Artist />
    </div>
  )
}

export default ArtistPick
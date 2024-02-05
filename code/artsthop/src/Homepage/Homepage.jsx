import React from 'react'
import ArtistPick from '../LandingPage/ArtistPick/ArtistPick'
import LandingPage from '../LandingPage/LandingPage'
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
        <LandingPage />
        <ArtistPick />
    </div>
  )
}

export default Homepage
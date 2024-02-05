import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './SeeMore.css'

const SeeMore = () => {

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // navigate(`/confirmation/${params.email}`)
    setTimeout(() => {
      navigate(`/confirmation/${params.email}`)
    }, 50);
  }, [])

  return (
    <div>SeeMore</div>
  )
}

export default SeeMore
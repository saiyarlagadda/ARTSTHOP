import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';
// import { SlHandbag } from 'react-icons/sl';
// import { productsListData } from '../../Data/productsdata';

const ProductDetails = ({ pid }) => {
    console.log('imageId', pid);
    const navigate = useNavigate();

    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
      console.log("useEffect called");
      const getImagesData = async () => {
        try {
          // const res = await axios.get('http://localhost:3000/getimage/TEST IMAGE 1',
          const res = await axios.get('http://localhost:3000/getall',
          );
          setImagesData(res.data);
          console.log('getting images', res.data)
  
        } catch (e) {
          console.log(e);
        }
      };
      getImagesData();
    }, []);

    return (<>
        {
            imagesData.map((img) => {
                if (pid == img.id) {
                    return (
                        <>
                            <div className='prod-cont'>
                                <div className='prod-title'>{img.title}</div>
                                <label className='prod-date'>{img.type}</label>
                                <div className='prod-price'>${img.price}</div>
                                <div className='prod-image'>
                                    <img style={{ border: '1px solid black' }} src={`${img.img1}`} height='100px' width='70px' alt='product image' />
                                </div>
                                <Button variant="dark" onClick={() => navigate('/products')} >Go back</Button>
                            </div>
                        </>
                    )
                }
            })
        }
    </>
    )
}

export default ProductDetails
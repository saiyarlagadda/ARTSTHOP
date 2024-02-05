import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ProductDesc.css'
// import { productsListData } from '../../Data/productsdata'

const ProductDesc = ({ pid, flag }) => {
  console.log(pid)

  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    const getImagesData = async () => {
      try {
        // const res = await axios.get('http://localhost:3000/getimage/TEST IMAGE 1',
        const res = await axios.get('http://localhost:3000/getall',
        );
        setImagesData(res.data);
        console.log('getting hello?', res.data)

      } catch (e) {
        console.log(e);
      }
    };
    getImagesData();
  }, []);

  return (
    <>
      {flag == 'desc' ? (
        imagesData.map((img) => {
          if (pid == img.id) {
            return (<div style={{ textAlign: 'justify', margin: '4rem', fontSize: '16px' }}>{img.description}<br /><br /><span style={{ fontWeight: 'bold' }}>Materials used: </span>{img.materials}</div>)
          }
        })
      ) : (
        imagesData.map((img) => {
          if (pid == img.id) {
            return (<div style={{ textAlign: 'justify', margin: '4rem', whiteSpace: 'pre', fontSize: '16px' }}>{img.items}</div>)
          }
        })
      )}
    </>
  )
}

export default ProductDesc
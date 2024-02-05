import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import './ViewProduct.css';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductDesc from './ProductDesc/ProductDesc';
import ProductImages from './ProductImages/ProductImages';
import axios from 'axios';
import { imgList } from '../Data/data';
import { Slide } from 'react-slideshow-image';
// import { productsListData } from '../Data/productsdata';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

const ViewProduct = () => {
    const navigate = useNavigate();

    const [texts, setTexts] = useState([]);
    const [pid, setPid] = useState();

    const params = useParams();

    useEffect(() => {
        setPid(params.id);
    }, []);

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

    const callBackend = () => {
        axios.get('http://localhost:4000/artsthop')
            .then(response => {
                setTexts(response.data);
                console.log(texts);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
    ];

    return (
        <>
            <div class="flex-container">
                <main className="view-main">
                    <div class="contents">
                        {imagesData.map((img) => {
                            if (pid == img.id) {
                                return (<img className="main-image" alt='product image' src={`${img.img1}`} />)
                            }
                        })}
                    </div>
                    <div class="content"><ProductDesc pid={pid} flag='desc' /></div>
                    <div class="contents">
                        {imagesData.map((img) => {
                            if (pid == img.id) {
                                return (<>
                                    <div class="content-bt">
                                        <img class="image-row" src={`${img.img3}`} alt="product image" />
                                    </div>
                                    <div class="content-bt">
                                        <img class="image-row" src={`${img.img4}`} alt="product image" />
                                    </div>
                                </>)
                            }
                        })}
                    </div>
                    <div class="content"><ProductDesc pid={pid} flag='items' /></div>
                </main>
                <aside>
                    <ProductDetails pid={pid} />
                </aside>
            </div>
        </>
    )
}

export default ViewProduct
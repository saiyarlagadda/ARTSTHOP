import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Item from '../ProductsList/Item'
import { SlHandbag } from 'react-icons/sl';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';
import './ProductList.css'
// import { productsListData } from '../Data/productsdata';

const ItemPage = ({ items, onAddToCart }) => {

  const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);

    return (
      <div className="card-img">
        <img
          id='product-img'
          onMouseOver={() => {
            imageRef.current.src = secondaryImg;
          }}
          onMouseOut={() => {
            imageRef.current.src = primaryImg;
          }}
          src={primaryImg}
          alt=""
          ref={imageRef}
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
    )
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to view more details
    </Tooltip>
  );

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

  return (
    <>
      <div >
        <div className='pageStyle'>
          <Row>
              {imagesData.map((eachImgData) => (
              <Col key={eachImgData.id} xs={12} md={6} lg={3} >
                <OverlayTrigger
                  placement="auto"
                  delay={{ show: 10, hide: 10 }}
                  overlay={renderTooltip}
                >
                  <div className="image-class">
                    <a href={`/view/${eachImgData.id}`}>
                      <ImageToggleOnMouseOver
                        primaryImg={eachImgData.img1}
                        secondaryImg={eachImgData.img2}
                        alt="product images" />
                    </a>
                    <div className="product-content">
                      <div className="prod-text">
                        <p style={{ marginBottom: 0 }}>{eachImgData.title}</p>
                        <label style={{ color: 'red' }}>${eachImgData.price}</label>
                      </div>
                      <Button className="prod-btn" variant="dark" onClick={() => onAddToCart(eachImgData)} ><SlHandbag /> Add to cart</Button>
                    </div>
                  </div>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}

export default ItemPage;
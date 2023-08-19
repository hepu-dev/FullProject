import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';

const Sider = () => {
  const { videoId } = useParams();
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://backend-imrz.onrender.com/api/products/${videoId}`)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [videoId]);

  return (
    <>
      <h2>Product List</h2>
      {productData.map(product => (
        <a
        key={product._id}
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        >
        <Card
          key={product._id}
          hoverable
          style={{ margin: '0 0 10px 0' }}
        >
          <p>
            <b style={{ fontSize: '17px' }}>{product.title}</b>
            <br />
            Price: {product.price} Rupiah
          </p>
        </Card>
        </a>
      ))}
    </>
  );
};

export default Sider;

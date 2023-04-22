import { One } from 'modules';
import React from 'react'
import { useParams } from 'react-router-dom';
import './style.css';

const Product = () => {
    let { id } = useParams();
    return (
        <div>
            {
                <One
                    cache="products"
                    id={id}
                    endpoint={`/products/${id}`}
                >
                    {
                        (data) => {
                            console.log(data);
                            return <div className='single'>
                                <h3>Name : {data.name}</h3>
                                <h3>Price : {data.price}</h3>
                                <h3>Description : {data.description}</h3>
                                <h3>Image</h3>
                                {
                                    data.productPictures.map(file => <img src={file.img} width="180px" height="180px" />)
                                }
                            </div>
                        }
                    }
                </One>
            }
        </div>
    )
}

export default Product
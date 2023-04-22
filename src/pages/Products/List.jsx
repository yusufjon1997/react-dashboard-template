import React, { useState } from 'react';
import { All } from 'modules';
import "./List.css"
import Single from 'pages/Single';
import { useMutate } from 'hooks';
import { Link } from 'react-router-dom';

const List = () => {
  const [product , setProduct] = useState({});

  const { mutate } = useMutate({ name: "products", method: "delete", endpoint: "/products/delete" })

  const deleteHandler = (productId) => {
    mutate({ id: productId });
  }
  

  const updateHandler = (product) => {
    setProduct(product);
  }


  const logoutHandler = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  return (
    <div>
      <All
        cache="products"
        endpoint={`/products`}
        params={{
          page : 23,
          sort : '-id'
        }}
      >
        {(data) => {
          return <div>
            {data.map(product => {
              // console.log(product)
              return <div className='product' key={product._id}>
                <div>
                  <h3>Name : {product.name}</h3>
                </div>
                <Link to={`${product._id}`} >Show more</Link>
                <button onClick={() => updateHandler(product)}>Update</button>
                <button onClick={() => deleteHandler(product._id)}>Delete</button>
              </div>
            })
            }
          </div>
        }}
      </All>
      {!Object.keys(product).length == 0  ? <Single isUpdate={true} values={product} /> : <Single />}
      {/* <Single /> */}
      <button onClick={logoutHandler}>LogOut</button>
    </div>
  )
}

export default List
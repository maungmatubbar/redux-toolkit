import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Store/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart);
  const removeCartItem = (product_id) => {
    //dispatch remove cart item
    dispatch(remove(product_id))
  }
  const cards = cartProducts.map((product, index) => (
    <div className="col-md-3 py-2" key={index}>
      <Card className=''>
        <div className="text-center">
          <Card.Img style={{ height: "120px", width: "150px" }} variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              ${product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='bg-transparent'>
            <Button variant="danger" className='justify-content-end' onClick={()=>removeCartItem(product.id)}>Remove Item</Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ))
  return (
    <>
      <h4 className='text-center'>Cart:</h4>
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Cart
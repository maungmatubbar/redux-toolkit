import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import { getProducts } from "../Store/productSlice";
import StatusCode from '../utils/StatusCode'
const Products = () => {
    const dispatch = useDispatch();
    const { data:products, status } = useSelector(state => state.products)
   
    //const [products, setProducts] = useState([])
    useEffect(() => {
       
        //dispatch an action for fetch products
        dispatch(getProducts())
        //api
        // fetch(`https://fakestoreapi.com/products`)
        //     .then(data => data.json())
        //     .then(result => setProducts(result))

    },[dispatch]);
    if(status === StatusCode.LOADING) {
        return (
            <div className="text-center py-3">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }
    if(status === StatusCode.ERROR) {
        return (
            <div className="py-3">
                <Alert key="danger" variant="danger">
                Something went wrong!!! Pleas try again later.
                </Alert>
            </div>
        )
    }
    const addToCart = (product) => {
        //dispatch an add action
        dispatch(add(product));
    }
    const cards = products.map(product =>(
        <div className="col-md-3 py-2" key={ product.id }>
            <Card key={product.id}>
                <div className="text-center">
                    <Card.Img style={{height:"120px", width: "150px"}} variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            ${product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='bg-transparent'>
                        <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    ))

    return (
        <>
            <div className="row">
                <h2 className='text-center'>Products</h2>
                {cards}
            </div>
        </>
    )
}

export default Products
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux"
import { rupiahFormat } from "../utils"

const Cart = () => {
    const {cart} = useSelector((root) => root)
    return (
        <>
           <Navbar /> 
           <div className="container">
            <div className="p-4">
                {
                cart?.map((p, index) => <div className="card" key={index}>
                    <div className="card-header">
                        <h5 className="card-title">{p?.product_name}</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                           
                            <div className="col-2">
                                <img src={p?.product_image} alt={p?.product_image} className="card-img-top" />
                            </div>
                            <div className="col-6">
                                <p className="card-text">Qty: {p?.qty}</p>
                                <p className="card-text">Price: {rupiahFormat(p?.price)}</p>
                                <p className="card-text">{p?.description}</p>
                            </div>
                            <div className="col-3">
                                <p className="card-text">Subtotal: {rupiahFormat(p?.price * p?.qty)}</p>
                                <a href="#" className="btn btn-danger"><i className= "fa fa-trash" /> Remove</a>
                            </div>
                        </div>
                    </div>
                    {
                        index == cart.length - 1 ? <div className="card-footer">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-success">Checkout</button>
                            </div>
                            <div className="col-6">
                                <p className="card-text">
                                    Payment: {
                                    rupiahFormat(cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0))
                                    }
                                </p>
                            </div>
                            </div>
                        </div> : null
                }
                </div>
                 )
                } 
            </div>
           </div>
        </>
    )
}

export default Cart
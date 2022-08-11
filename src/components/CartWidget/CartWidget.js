import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.scss"
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import {useState} from "react"

const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    
    };

    const {cartProducts, clear, removeFromCart} = useContext(CartContext)

    return(
        
        <div className="cart-widget">
            <ShoppingCartIcon   className="iconoCarrito"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}/>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cartProducts.map((producto)=>{
                    return(
                    <div className='item-cart-product' key={producto.id}>
                        <img src={`/assets/${producto.image}`} alt="" />
                        <div className='cart-product__details'>
                            <p>{producto.title}</p>
                        </div>
                        <div className='cart-product__details'>
                            <p>$ {producto.price}</p>
                        </div>
                        <div className='cart-product__action' >
                                <DeleteIcon onClick={() => removeFromCart(producto.id)}/>
                        </div>
                    </div>
                    )
                })}
                {cartProducts == 0 ? " " : <button className="botonVaciar" onClick={() => clear()}>Vaciar Carrito</button>}
            </Menu>
        </div>
    )
}

export default CartWidget;
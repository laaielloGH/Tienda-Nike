import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"
import products from "../../utils/productsMock"


const ItemListContainer = ({calzado}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        },2000) 
    })

    useEffect(() =>{
        getProducts
            .then((response)=>{
                setListProducts(response) 
            })
            .catch((err)=>{
                console.log("Hubo un fallo")
            })
            .finally(()=>{})
    }, [])

    
    return(
        <div>
            <h1 className="tituloNike">{calzado}</h1>
            <div className="listProducts">
                <ItemList dataProducts={listProducts}/>
            </div>
        </div>
    )
}

export default ItemListContainer;
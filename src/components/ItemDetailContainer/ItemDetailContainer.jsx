import { useEffect, useState } from "react"
import { getProduct } from "../../data/data"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState({})

    useEffect( () => {
        getProduct()
        .then ((data)=> setProducts(data))
    }, [])

    return (
        <div className="itemdetailcontainer">
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    )
}

export default ItemDetailContainer
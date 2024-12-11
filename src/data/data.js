const products = [
    {
        id: "1",
        name: "Remera Kloudd Gris",
        description: "Lorem",
        price: 500,
        stock: 10,
        image: "",
        category: "remera"
    },
    {
        id: "2",
        name: "Pantalon Kloudd Negro",
        description: "Lorem",
        price: 300,
        stock: 10,
        image: "",
        category: "pantalon"
    },
    {
        id: "3",
        name: "Buzo Negro Kloudd",
        description: "Lorem",
        price: 700,
        stock: 10,
        image: "",
        category: "buzo"
    },
    {
        id: "4",
        name: "Buzo Blanco Kloudd",
        description: "Lorem",
        price: 700,
        stock: 10,
        image: "",
        category: "buzo"
    },
    {
        id: "4",
        name: "Remera Blanco Kloudd",
        description: "Lorem",
        price: 700,
        stock: 10,
        image: "",
        category: "remera"
    }
]



/*
    const promesa = new Promise ((resolve, reject)=> {
        if(condicion){
        resolve ("se resolvio")
        } else {
        reject("se rechazo")
    }
})
*/

// Obtener productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
        //Simulamos un retraso de red
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

const getProduct = () => {
    return new Promise(() => {
        setTimeout(() => {
            const product = products.find( (product)=> product.id === "")
        }, 2000)
    })
}

export { getProducts, getProduct }
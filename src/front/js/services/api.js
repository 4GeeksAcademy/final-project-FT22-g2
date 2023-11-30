import React, {useState, useEffect} from "react"; //para la api de productos

const urlAPI = "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/";

//*********************** 
//API DE PRODUCTOS

 const filtrar = () => {

    const [tipo, setTipo] = useState([])
    const [search, setSearch] = useState("")
}

//funcion para traer los datos desde la api

const URLapi = "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos";

const filtrarData = async ({productos}) =>{
    const response = await fetch(URLapi)
    const data = await response.json()
    console.log(data)
    setTipo(data)
}

//funcion de busqueda

const buscar = (e) => {
    setSearch(e.target.value)   
}

//metodo de filtrado

/* let result = []
if (!search){
    result = tipo //que me muestre todo
}
else{
    result = tipo.filter((vino) =>
    vino.tipo.toLowerCase().includes(search.toLowerCase())
    )

    useEffect(() => {
        filtrarData()
    },
        []) */
    






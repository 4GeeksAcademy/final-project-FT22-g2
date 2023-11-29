import React, {useState, useEffect} from "react"; //para la api de productos

const urlAPI = "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/";

export const createUser = async (username, email, password) => {
    const user = {
        "username": username,
        "email": email,
        "password": password,
        "active": true
    };

    try {
        const response = await fetch(urlAPI + "users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            // Throw an error if the response status is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // If the response is OK, return the response JSON
        return response.json();
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error during fetch:", error);
        throw error;
    }
}

export const deleteUser = async () => {
    try {
        const response = await fetch(urlAPI + "users", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        });

        if (!response.ok) {
            // Throw an error if the response status is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // If the response is OK, return the response JSON
        return response.json();
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error during fetch:", error);
        throw error;
    }
}

<<<<<<< HEAD


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
    


=======
export const getCreatedUser = async () => {
    try {
        const response = await fetch(urlAPI + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        });
        if (!response.ok) {
            // Throw an error if the response status is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // If the response is OK, return the response JSON
        return response.json();
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error during fetch:", error);
        throw error;
    }
}
>>>>>>> 83f99a5aea2b75927aa39fe51a15a78c45e5ab5c

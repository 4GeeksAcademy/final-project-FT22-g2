import React from 'react';
import ModalRestaurarContraseña from '../front/js/component/ModalRestaurarContraseña.jsx'


function sendMail(){
    var params = {
        mail: document.getElementById('restaurarContraseña').value
    };

const service_ID = "service_n8cz62t";
const template_ID= "contact_form";
const api_public_key = 'cRqwKwjjvhCImx3XZ';

emailjs
.send(service_ID, template_ID, api_public_key, params)
.then((res) => {
        document.getElementById('mail').value = "";
        console.log(res);
        alert("Tu email fue enviado exitosamente");
    })
.catch((err) => console.log(err));
}


// Enviar el token al backend para verificar y restablecer la contraseña
fetch('https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });



export {sendMail} 
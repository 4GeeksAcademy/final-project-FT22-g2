import React, {useState} from "react";

const Reset_password = () => {
    const [password, setPassword] = useState('');

    const handleSubmitContraseña = async  (e) => {  
        e.preventDefault()


        try{
            const response = await fetch('https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/reset_password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: password })
            });

            if (!response.ok) {
                throw new Error('Error al cambiar la contraseña');
            }

            console.log('Contraseña cambiada con éxito');
        } catch (error) {
            console.error('Error al cambiar la contraseña:', error.message);
        }

    }
    

    return (

        <div classNameName="container">
            <form className="form-restaurar-contraseña" onSubmit={handleSubmitContraseña}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Usuario</label>
                    <input type="email" className="form-control" id="emailUsuario" aria-describedby="emailHelp" 
                    value= 'email' />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nueva Contraseña</label>
                    <input type="password" className="form-control" id="NuevaContraseña" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" 
                className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Reset_password;
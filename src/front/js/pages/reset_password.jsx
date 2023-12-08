import React from "react";

const Reset_password = () => {

    return (

        <div classNameName="container">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Usuario</label>
                    <input type="email" className="form-control" id="emailUsuario" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nueva Contraseña</label>
                    <input type="password" className="form-control" id="NuevaContraseña"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Reset_password;
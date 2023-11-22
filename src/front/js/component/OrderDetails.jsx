import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Detalles del Pedido</h4>

                            {/* Aquí iría el contenido del detalle del pedido */}

                            {/* Información adicional del pedido */}
                            <div className="border-top pt-3">
                                <h5 className="mb-3">Información Adicional</h5>
                                {/* Detalles adicionales del pedido */}
                            </div>

                            {/* Botón para proceder al siguiente paso */}
                            <Link to="/checkout" className="btn btn-primary mt-3">
                                Continuar con el Pago
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import MyModalConfirm from '../confirm/MyModalConfirm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Checkout() {
    const [showModal, setShowModal] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        cnpj: '',
        revenue: '',
    });

    const location = useLocation();

    const formData = location.state.formData;

    function handleButtonOpen(data: any) {
        setShowModal(true);
        setFormValues(data);
    }

    function handleModalClose() {
        setShowModal(false);
    }

    return (
        <div className="flex flex-col items-center justify-around pt-4 pb-4 bg-cinza">
            <h2 className="text-2xl font-bold text-uppercase text-cereja">Confirme seus dados</h2>
            {formData && (
                <div className="flex flex-col gap-2 mt-4 bg-white p-8">
                    <p className="font-semibold">Nome: {formData.name}</p>
                    <p className="font-semibold">Email: {formData.email}</p>
                    <p className="font-semibold">Telefone: {formData.phone}</p>
                    <p className="font-semibold">Estado: {formData.state}</p>
                    <p className="font-semibold">Cidade: {formData.city}</p>
                    <p className="font-semibold">CNPJ: {formData.cnpj}</p>
                    <p className="font-semibold">Faturamento: {formData.revenue}</p>
                </div>
            )}

            <div className="flex flex-row gap-4 mt-8">
                <button
                    className="bg-cereja text-white text-uppercase font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    type="button"
                    onClick={handleButtonOpen}
                >
                    Enviar
                </button>
                <button
                    className="bg-gray-500 text-white text-uppercase font-bold py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    type="button"
                    onClick={() => window.history.back()}
                >
                    Voltar
                </button>
            </div>
            <MyModalConfirm show={showModal} onHide={handleModalClose} formValues={formValues} />
            <ToastContainer />
        </div>
    );
}

export default Checkout;

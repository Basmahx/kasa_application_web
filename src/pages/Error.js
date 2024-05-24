import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ErrorPage.css";


function Error() {
    return (
        <div className='error-page'>
            <div className='content'>
                <span>404</span>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className='return'>Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}
 
export default Error;
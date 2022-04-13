import React from 'react';
import {Navigate} from 'react-router-dom';
import GlobalContext from '../GlobalContext'

function Protected({children}) {
    const { state } = React.useContext(GlobalContext)  
    return (
        <>
            {state.signin ? children: <Navigate to={'/login'}/>}
        </>
    );
}

export default Protected;

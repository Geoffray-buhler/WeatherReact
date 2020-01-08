import React, { } from 'react';
import Logo from '../asset/logo.svg';

const Logocomp = () => {
    return (
        <div>
            <h5 className="mt-2">Created by</h5>
            <img src={Logo} className="logo rotate-center m-n3" alt="Logo react custom"></img>
        </div>
    )
}

export default Logocomp;
import React from 'react';
// import logo from './logo.svg';
function Hallo(props) {
    return (
        <div className="Hallo">
            <h1>hallo {props.name}</h1>
            <p>selamat malam {props.name}</p>
        </div>
    );
}

function Selamat(props) {
    return (
        <div className="Selamat">
            
            <h1>Jika   {props.name} </h1>
            <p>maka Lakukan ini </p>
        </div>
    );
}

export default Hallo;
export {Selamat};

import React from "react";
import '../Assets/css/button-css.css';

function Button({text, isClicButton, manageClic}){
    return(
        <button
        className={isClicButton ? 'button-clic' : 'button-restart'}
        onClick={manageClic}>
            {text}
        </button>
    );
}

export default Button;
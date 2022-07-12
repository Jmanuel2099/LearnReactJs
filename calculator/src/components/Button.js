import React from "react";
import '../assets/css/Button.css'

function Button (Props){

    const isOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=')
    };

    return(
        <div 
        className={`button-container ${isOperator(Props.children) ? 'operator' : null}`.trimEnd()}
        onClick={ () => Props.click(Props.children) }
        >
            {Props.children}
        </div>
    );
}
export default Button;
import React from "react";
import '../assets/css/ButtonClear.css'

const ButtonClear = (Props) => (
     <div className='button-clear'
     onClick={Props.clickClear}>
        {Props.children}
     </div>
);

export default ButtonClear;
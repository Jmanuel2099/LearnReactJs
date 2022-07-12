import React from "react";
import '../assets/css/Display.css'

/*componet defined as arrow funtion,
in this case component is a const because the component will only display values and will have no logic. */
const Display = ({input}) => (
    <div className='input'>
        {input}
    </div>
);

export default Display;
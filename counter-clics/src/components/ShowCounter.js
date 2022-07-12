import React from "react";
import '../Assets/css/counter-css.css';

function ShowCounter ({ numClic }){
    return(
        <div className='sh-count'>
            {numClic}
        </div>
    );
}

export default ShowCounter;
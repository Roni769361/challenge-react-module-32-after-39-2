import React, { useState } from "react";

const Header =(props)=>{
    const {count, setCount} = props;
    // const heandlarr = () => {
    //     const newAdd = count+1;
    //     setCount(newAdd);
    // }
    return(
        <div>
            <h1>This Is Header Part: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increase Section</button>

        </div>
    )
}
export default Header;
import React from "react";
import Catagories from "../categoris/catagoris";

const Home =(props)=>{
    const {count} = props
    return(
        <div style={{border:"2px solid green"}}>
            <h1>This Is HOme Part : {count}</h1>
            <Catagories count={count}></Catagories>

        </div>
    )
}
export default Home;
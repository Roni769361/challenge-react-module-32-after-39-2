import React from "react";
import CatagoriesDetails from "../catagorisDetails/catagoriesDetails";

const Catagories =(props)=>{
    const {count} = props
    return(
        <div>
            <h2>This Is Catagories Part : </h2>
            <CatagoriesDetails count={count}></CatagoriesDetails>

        </div>
    )
}
export default Catagories;
import React from "react";

const ArrowFilter = (props) =>{
    return(
        <div className= "arrowFilter" onClick={()=>props.setSortByNumber(!props.sortByNumber)} >
          <span>{props.sortByNumber ? '#' : 'AZ'}</span> 
            <img src="/Iconos-imagenes/Arrow.svg"/>
        </div>
    )
}
export default ArrowFilter
import React from "react";
export default function Button(props){
    return(
        <button className={"btn btn-"+ props.type}>{props.children}</button>
    );
}

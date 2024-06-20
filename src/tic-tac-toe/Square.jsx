import React from "react";

const Square = (props) => {

  return (
    <div className="square" 
      onClick={props.onClick}
      style={{
        border: "1px solid",
        borderRadius: "2px",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"2px",
      }}>

      <h5>{props.value}</h5>

    </div>
  );
}

export default Square;
import React from 'react';
import "../Style/index.css";
import data from "../../data.json";

const listItems = data.everywhere.map(item =>
    <div style={{ margin: "2rem" }} className="align-column">
        <img style={{ height: "400px", width: "400px", borderRadius: "10px" }} src={item.src}></img>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>{item.title}</span>
    </div>
);

function Anywhere() {
    return (
        <div className="align-column" style={{ padding: "2rem" }}>
            <span className="bold" style={{ fontSize: "40px" }}>Chez vous, partout</span>
            <div className="align-row" style={{ justifyContent: "center" }}>
                {listItems}
            </div>
        </div>
    )
}

export default Anywhere;
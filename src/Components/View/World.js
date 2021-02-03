import React from 'react';
import "../Style/world.css";
import "../Style/index.css";
import data from "../../data.json";

const listItems = data.cities.map(item =>
    <div className="align-row" style={{ width: "500px", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
        <img style={{ height: "80px", width: "80px", borderRadius: "10px" }} src={item.src}></img>
        <div className="align-column horizon-flex" style={{ marginLeft: "1rem", flexDirection:'column' }}>
            <span className="bold">{item.title}</span>
            <span>{item.route} heures de route</span>
        </div>
    </div>
);

function World() {
    return (
        <div className="world-container align-row middle-row" >
            <div className="align-row" style={{ marginLeft: "4rem" }}>
                <div className="align-column" style={{ justifyContent: "center",  flexWrap:'wrap',flexDirection:'initial' }}>
                    {listItems}
                </div>
            </div>
        </div>
    )
}

export default World;
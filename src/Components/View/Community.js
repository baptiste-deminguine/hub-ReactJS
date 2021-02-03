import React from "react";
import data from "../../data.json";

const listItems = data.Community.map(item =>
    <div style={{ margin: "2rem" }}>
        <img style={{ height: "300px", width: "450px", borderRadius: "10px"}} src={item.src}></img>
        <h1 style={{ fontSize: "17px" }}>{item.title}</h1>
    </div>
);


function Community() {
    return (
        <div className="align-column" style={{ padding: "2rem" }}>
            <span className="bold" style={{ fontSize: "40px" }}>Rejoignez des millions d'hôtes sur Airbnb</span>
            <div className="align-row" style={{ justifyContent: "center" }}>
                {listItems}
            </div>
        </div>
    )
}

export default Community;
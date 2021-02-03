import React from 'react';
import data from "../../data.json";

const listItems = data.discover.map(item =>
    <div style={{ margin: "2rem" }}>
        <img style={{ height: "400px", width: "400px", borderRadius: "10px" }} src={item.src}></img>
        <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
        <span style={{ fontSize: "17px" }}>{item.description}</span>
    </div>
);

function Discover(props) {
    return (
        <div style={{ backgroundColor: "black", color: "white", padding: "2rem" }}>
            <h3 style={{ fontSize: "40px" }}>Découvrez le monde</h3>
            <span>Des activités uniques organisées par des experts locaux, en personne ou en ligne.</span>
            <div className="align-row" style={{ justifyContent: "center" }}>
                {listItems}
            </div>
        </div>
    )
}

export default Discover;
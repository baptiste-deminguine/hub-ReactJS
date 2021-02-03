import React from 'react';
import '../Style/index.css';
import '../Style/header.css';
import Logo from "../../Img/logo-airbnb.png";
import Icon from "../../Img/icon-world.jpg";
import SearchIcon from '@material-ui/icons/Search';

function TopHeader() {
    return (
        <div className="full topHeader align-row white">
            <img style={{height: "30px", width: "auto", marginLeft: "20px", marginTop: "1.5rem"}} src={Logo}/>
            <div style={{position: 'absolute', right: "0px", margin: "1em", marginTop: "1rem"}}>
                
                <span className="bold">Hébergements</span>
                <span className="bold">Expériences</span>
                <span className="bold" style={{marginRight: "4rem"}}>Expériences en ligne</span>
                <span className="bold">Devener hôte</span>
                <img src={Icon} style={{height: "20px", width: "20px"}}/>
                <span className="bold">connect</span>
            </div>
        </div>
    )
}

function Research(props) {
    return (
        <div className="research align-row" >
            <div className="align-column horizon-flex" style={{width: "35%"}}>
                <span>adresse</span>
                <span> Ou allez-vous ?</span>
            </div>

            <div className="align-column horizon-flex" style={{width: "20%"}}>
                <span>Arrivée</span>
                <span> Ajouter des dates</span>
            </div>

            <div className="align-column horizon-flex" style={{width: "20%"}}>
                <span>Départ</span>
                <span> Ajouter des dates</span>
            </div>

            <div className="align-column horizon-flex">
                <span>Voyageurs</span>
                <span> Ajouter des voyages</span>
            </div>

            <div className="align-column horizon-flex center-flex" style={{height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "rgb(228, 30, 91)", position: "absolute", right: "1rem", top: "0.4rem"}}>
                <SearchIcon style={{color: "white", fontSize: "25px"}}/>
            </div>


        </div>
    )
}

function Container() {
    return (
        <div className="container align-column white" style={{justifyContent: "center"}} >
            <div style={{marginLeft: "5rem"}} className="align-column">
                <span className="bold" style={{fontSize:"50px"}}>Voyager local</span>
                <span style={{marginLeft:"0.5rem", marginTop: "1rem", color:'black', backgroundColor:'white', width:'14%', textAlign:'center'}}>Decouvrir  les logements à proximités </span>
            </div>
        </div>
    )
}

function Header(props) {
    return (
        <div>
            <TopHeader/>
            <Research/>
            <Container/>
        </div>
    )
}

export default Header;
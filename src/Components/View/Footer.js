import React from 'react';
import "../Style/footer.css";
function Footer(props) {
    return (
        <div className="container-footer">
            <span className="bold">A propos</span>
            <div className="align-row">
                <div className="align-column footer">
                    <p>Fonctionnement d'Airbnb</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb for Work</p>
                </div>

                <div className="align-column footer">
                    <p>Newsroom</p>
                    <p>Airbnb Luxe</p>
                    <p>Jeux olympiques</p>
                </div>

                <div className="align-column footer">
                    <p>Investisseurs</p>
                    <p>HotelTonight</p>
                    <p>Carrières</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;
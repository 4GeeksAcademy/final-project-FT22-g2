import React from "react";
import heroUrl from "../../img/background-hero.jpeg"

import "../../styles/navbarHero.css";

const Hero = () => {
    return (
        <>

            <div className="container-fluid container-hero img-fluid p-5" style={{
                backgroundImage: `url(${heroUrl})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%"
            }}>
                <div className="container-hero-texts container-fluid">
                    <h3 className="hero--welcome">Bienvenido a</h3>
                    <h1 className="hero--title">El rincón del vino</h1>
                    <h5 className="hero--slogan"><i>“El placer de la elección, la alegría de la degustación”</i></h5>
                </div>
            </div>
        </>
    )
}

export default Hero;
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Header";
import Info from "../components/info";
// import Footer from "../components/footer";


function Home() {
    return (
        <div className="home-section">
            <Navbar />
            <Hero />
            <Info/>
        </div>
    );
}

export default Home;

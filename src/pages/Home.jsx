import React from "react";
import FormHome from "../components/FormHome";
import Footer from "../layout/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home__img-container">
        <img className="home__imgP" src="/images/p.png" alt="" />
        <img className="home__imgO" src="/images/pokeball.png" alt="" />
        <img className="home__imgKedex" src="/images/kedex.png" alt="" />
      </div>
      <div className="home__name">
        <h2 className="home__subtitle">Hi, trainer!</h2>
        <p className="home__text">Give me your name to start your journey!</p>
        <FormHome />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

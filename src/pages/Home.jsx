import React, { useState } from "react";
import FormHome from "../components/FormHome";
import Footer from "../layout/Footer";
import "../styles/Home.css";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleToggleAnimation = () => {
    setShowAnimation(!showAnimation);
  };

  return (
    <main className="home">
      <div className="home__img-container">
        <img className="home__imgP" src="/images/p.png" alt="" />
        <img
          className="home__imgO"
          src="/images/pokeball.png"
          alt=""
          onClick={handleToggleAnimation}
        />
        <img className="home__imgKedex" src="/images/kedex.png" alt="" />
      </div>
      <div className={`home__name ${showAnimation ? "" : "no-animation"}`}>
        <h2 className="home__subtitle">Hi, trainer!</h2>
        <p className="home__text">
          Give me your name <span> to start your journey!</span>
        </p>
      </div>
      <FormHome />
      <Footer />
    </main>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            asperiores! Neque accusantium tenetur architecto alias vel ad
            asperiores reiciendis eum quasi cum. Impedit rem recusandae
            similique eos facilis molestiae quis.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"BlockBuster Movies"} />
        <TitleCards title={"Only on Netlix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics For You"} />
      </div>
    </div>
  );
};

export default Home;

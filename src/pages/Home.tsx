import { FC } from "react";
import Main from "../components/HomeSections/Main/Main";
import WhyUs from "../components/HomeSections/WhyUs/WhyUs";
import Courses from "../components/HomeSections/Courses/Courses";
import Start from "../components/HomeSections/Start/Start";
import Cake from "../components/HomeSections/Cake/Cake";
import KidsTestomonial from "../components/HomeSections/Testomonial/KidsTestomonial";
import Projects from "../components/HomeSections/Projects/Projects";
import Pricing from "../components/HomeSections/Pricing/Pricing";
import GiveGift from "../components/HomeSections/GiveGift/GiveGift";
import ForSchools from "../components/HomeSections/Cards/ForSchools";
import ForBuisness from "../components/HomeSections/Cards/ForBuisness";
import AiAge from "../components/HomeSections/Cards/AiAge";
import ContactUs from "../components/HomeSections/ContactUs/ContactUs";
import KidsFAQ from "../components/HomeSections/FAQ/KidsFAQ";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div >
      <Main />
      <WhyUs />
      <Courses />
      <Start />
      <Cake /> 
      <KidsTestomonial />
      <div className={style.bg_container}>
        <Projects />
        <Pricing />
      </div>
      <GiveGift />
      <ForBuisness />
      <ForSchools />
      <AiAge />
      <KidsFAQ />
      <ContactUs />  

    </div>
  );
};

export default Home;

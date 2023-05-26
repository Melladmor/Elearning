import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import KidsNavbar from "./Navbar/Navbar";
import style from "./layout.module.scss";
import Home from "../../pages/Home";
import { useEffect, useState } from "react";
import NavbarMobile from "./Navbar/NavbarMobile";
import SignUpBtn from "../Buttons/SignUpBtn";
import NavbarFull from "./Navbar/NavbarFull";
import Logo from "../Shared/Logo/Logo";
import NavbarButtonsMobile from "./Navbar/NavbarButtonsMobile";

const KidsLayout = () => {
  const [noScroll, setNoScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleNavWidth = (value: boolean) => {
    setExpand(value);
  };

  const handleNoScroll = (value: boolean) => {
    setNoScroll(value);
  };

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  useEffect(() => {
    if (windowDimenion.winWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowDimenion.winWidth]);
  return (
    <>
      <div className={`${style.container} ${noScroll ? style.noscroll : ``}`}>
        {windowDimenion.winWidth < 991.98 ? (
          <div className={style.mobile_nav_container}>
            <div className={style.mobile_nav}>
              <div className={style.left}>
                <div className={style.logo_container}>
                  <Logo />
                </div>
                <NavbarMobile handleNoScroll={handleNoScroll} />
              </div>
              <div className={`${style.right} ${expand ? style.opened : ``}`}>
                <NavbarButtonsMobile handleNavWidth={handleNavWidth} />
              </div>
              <SignUpBtn />
            </div>
          </div>
        ) : (
          <div className={style.navbar}>
            <KidsNavbar handleNoScroll={handleNoScroll} />
          </div>
        )}
        <div className={style.body}>
          <Routes>
            <Route element={<Outlet />}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/kids" />} />
            </Route>
          </Routes>
        </div>
      </div>
      {noScroll ? null : <NavbarFull isFooter isMobile={isMobile} />}
    </>
  );
};

export default KidsLayout;

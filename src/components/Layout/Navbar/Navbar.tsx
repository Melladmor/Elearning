import { FC, useState } from "react";
import style from "./Navbar.module.scss";
import NavbarFooter from "./NavbarFooter";
import SignUpBtn from "../../Buttons/SignUpBtn";
import { ReactComponent as MiniLogo } from "../../../public/img/mini-logo.svg";
import { Trans, withTranslation } from "react-i18next";
import { Fade as Hamburger } from "hamburger-react";
import NavbarFull from "./NavbarFull";
import useScrollspy from "src/core/Hooks/useScrollspy";
import Logo from "../../Shared/Logo/Logo";

const SideBarItems = [
  { name: `WHY_US`, id: `section-why-us` },
  { name: `COURSES`, id: `section-courses` },
  { name: `START`, id: `section-start` },
  { name: `PROJECTS_NAV`, id: `section-projects` },
  { name: `PRICES`, id: `section-prices` },
  { name: `BUSINESS_NAV`, id: `section-business` },
  { name: `SCHOOLS_NAV`, id: `section-school` },
  { name: `AI_NAV`, id: `section-ai` },
  { name: `FAQ1`, id: `section-faq` },
  { name: `CONTACT_US`, id: `section-contact-us` },
];

type IProps = {
  handleNoScroll: (param: boolean) => void;
};

const KidsNavbar: FC<IProps> = ({ handleNoScroll }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSideBar = () => {
    setOpenSidebar(!openSidebar);
    handleNoScroll(!openSidebar);
  };

  const goTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ids = SideBarItems.map((item) => item.id);
  const activeId = useScrollspy(ids, 100);
  return (
    <div className={`${style.navbar} ${openSidebar ? style.navbar_opend : style.navbar_closed}`}>
      {openSidebar ? null : <SignUpBtn />}
      <div className={style.full_navbar}>
        <div className={style.navbar_upper}>
          {openSidebar ? <Logo /> : <MiniLogo />}
          <div className={style.navbar_btn}>
            <Hamburger
              size={23}
              color={`${openSidebar ? `#220859` : `#fff`}`}
              direction="right"
              toggled={openSidebar}
              toggle={() => handleToggleSideBar()}
            />
          </div>
          {openSidebar ? (
            <span className={style.menu_title}>
              <Trans>CLOSE</Trans>
            </span>
          ) : (
            <span className={style.menu_title}>
              <Trans>MENU</Trans>
            </span>
          )}
          <ul className={style.nav_items}>
            {SideBarItems.map(
              (item) =>
                item?.name && (
                  <li onClick={() => goTo(item.id)} className={`${activeId === item.id ? style.active : ``}`}>
                    <Trans>{item.name}</Trans>
                  </li>
                ),
            )}
          </ul>
        </div>
        {openSidebar ? (
          <div className={style.full_navbar_container}>
            <NavbarFull />
          </div>
        ) : null}
      </div>
      <div className={style.full_navbar_footer_container}>
        <NavbarFooter opened={openSidebar} />
      </div>
    </div>
  );
};

export default withTranslation()(KidsNavbar);

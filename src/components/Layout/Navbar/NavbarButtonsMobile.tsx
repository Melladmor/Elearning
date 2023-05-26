import style from "./NavbarButtonsMobile.module.scss";
import KidsContactUs from "../../Buttons/KidsContactUs";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuItem } from "primereact/menuitem";
import EnglishIcon from "../../../public/img/icons/english.svg";
import GermanyIcon from "../../../public/img/icons/germany.svg";
import TurkeyIcon from "../../../public/img/icons/turkey.svg";
import EmiratesIcon from "../../../public/img/icons/emirates.svg";
import { SpeedDial } from "primereact/speeddial";

import leftArrow from "../../../public/img/icons/upArrow.svg";

type IProps = {
  handleNavWidth: (param: boolean) => void;
};

const NavbarButtonsMobile: FC<IProps> = ({ handleNavWidth }) => {
  const selected = localStorage.getItem("i18nextLng") || "en";
  const [expand, setExpand] = useState(false);
  const [selectedLang, setSelectedLang] = useState(selected);
  const toggleContainer = () => {
    setExpand(!expand);
    handleNavWidth(!expand);
  };
  const { i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  const openLangMenu = () => {
    setExpand(!expand);
    handleNavWidth?.(expand);
    toggleContainer();
  };
  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event);
    document.body.dir = i18n.dir();
    setSelectedLang(event);
    openLangMenu();
  };
  const allLanguages: MenuItem[] = [
    {
      label: "Germany",
      data: "de",
      icon: <img src={GermanyIcon} width="40" height="40" alt="contact" />,
      command: (e) => {
        changeLanguage(e.item.data);
      },
    },
    {
      label: "Turkish",
      data: "tr",
      icon: <img src={TurkeyIcon} width="40" height="40" alt="contact" />,
      command: (e) => {
        changeLanguage(e.item.data);
      },
    },
    {
      label: "Arabic",
      data: "ar",
      icon: <img src={EmiratesIcon} width="40" height="40" alt="contact" />,
      command: (e) => {
        changeLanguage(e.item.data);
      },
    },
    {
      label: "English",
      data: "en",
      icon: <img src={EnglishIcon} width="40" height="40" alt="contact" />,
      command: (e) => {
        changeLanguage(e.item.data);
      },
    },
  ];
  const viewLanguage = allLanguages.filter((language) => language.data !== selectedLang)!;
  const displayFlag = () => {
    return allLanguages?.find((l) => l.data === selectedLang)?.icon;
  };
  return (
    <div className={style.container}>
      <img
        src={leftArrow}
        className={`${!expand ? style.expanded : style.up_left}`}
        width="11"
        height="11"
        alt="expand"
      />
      <div className={style.contact}>
        <SpeedDial
          hideOnClickOutside={false}
          model={viewLanguage}
          direction="left"
          style={{
            bottom: `0`,
            top: `0`,
            left: i18n.dir() === `rtl` ? `0` : `-300px`,
            right: i18n.dir() === `rtl` ? `-290px` : `30px`,
            zIndex: expand ? `100` : `0`,
            position: `fixed`,
          }}
          rotateAnimation={false}
          showIcon={displayFlag()}
          buttonClassName={style.lng_btn}
          onClick={openLangMenu}
        />
        <KidsContactUs opened={false} />
      </div>
    </div>
  );
};

export default NavbarButtonsMobile;
// 0px -245px 0px 50px

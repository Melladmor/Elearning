import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuItem } from "primereact/menuitem";
import EnglishIcon from "../../public/img/icons/english.svg";
import GermanyIcon from "../../public/img/icons/germany.svg";
import TurkeyIcon from "../../public/img/icons/turkey.svg";
import EmiratesIcon from "../../public/img/icons/emirates.svg";
import UpArrow from "../../public/img/icons/upArrow.svg";
import { SpeedDial } from "primereact/speeddial";
import style from "./Buttons.module.scss";

type IProps = {
  expanded?: (param: boolean) => void;
  opened: boolean;
};

const KidsLangSelector: FC<IProps> = ({ expanded, opened }) => {
  const { i18n } = useTranslation();
  const selected = localStorage.getItem("i18nextLng") || "en";
  const [selectedLang, setSelectedLang] = useState(selected);
  const [expandNavFooter, setExpandNavFooter] = useState(true);

  const openLangMenu = () => {
    setExpandNavFooter(!expandNavFooter);
    expanded?.(opened ? false : expandNavFooter);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event);
    document.body.dir = i18n.dir();
    setSelectedLang(event);
    openLangMenu();
    window.location.reload()
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
    <>
      {opened ? null : (
        <img
          src={UpArrow}
          className={`${!expandNavFooter ? style.expanded : style.up_arrow}`}
          width="11"
          height="11"
          alt="expand"
        />
      )}
      {opened ? (
        <div className={style.expanded_lng_container}>
          {allLanguages.map((lng) => (
            <button key={lng.id} className={style.lng_btn} onClick={() => changeLanguage(lng.data)}>
              {lng.icon}
            </button>
          ))}
        </div>
      ) : (
        <SpeedDial
          hideOnClickOutside={false}
          model={viewLanguage}
          direction="up"
          style={{
            bottom: `111px`,
            top: `auto`,
            left: opened ? `2.4%` : `32%`,
            right: `auto`,
          }}
          visible={opened ? false : true}
          rotateAnimation={false}
          showIcon={displayFlag()}
          buttonClassName={style.lng_btn}
          onClick={openLangMenu}
        />
      )}
    </>
  );
};

export default KidsLangSelector;

import { FC, useState } from "react";
import KidsLangSelector from "../../Buttons/KidsLangSelector";
import KidsContactUs from "../../Buttons/KidsContactUs";
import NavFooterSocial from "./NavFooterSocial";
import { Trans, withTranslation } from "react-i18next";
import style from "./NavbarFooter.module.scss";

type IProps = {
  opened: boolean;
  isFooter?: boolean;
  handleWidth?: (param: boolean) => void;
};

const NavbarFooter: FC<IProps> = ({ opened, handleWidth, isFooter }) => {
  const [expandNavFooter, setExpandNavFooter] = useState(false);
  const handleNavHieght = (value: boolean) => {
    setExpandNavFooter(value);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`
      ${style.container}
      ${expandNavFooter ? style.expand : style.not_expand}
      ${isFooter ? style.isFooter : null}
      ${opened ? style.opened : style.closed}
      `}
    >
      <KidsLangSelector expanded={handleNavHieght} opened={opened} />
      <KidsContactUs opened={opened} />
      {opened ? (
        <div className={style.social_container}>
          <NavFooterSocial />
        </div>
      ) : null}
      {isFooter ? (
        <div className={style.go_up}>
          <button className={style.go_up_button} onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15.109" height="8.377" viewBox="0 0 15.109 8.377">
              <path
                id="Path_49625"
                data-name="Path 49625"
                d="M-14235-22930l5.834,5.359,5.742-5.359"
                transform="translate(-14221.657 -22923.391) rotate(180)"
                fill="none"
                stroke="#220859"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
              />
            </svg>
          </button>
          <Trans>GO_UP</Trans>
        </div>
      ) : null}
    </div>
  );
};

export default withTranslation()(NavbarFooter);

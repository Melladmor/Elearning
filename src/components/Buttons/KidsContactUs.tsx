import style from "./Buttons.module.scss";
import ContactIcon from "../../public/img/icons/contact.svg";
import { Trans, withTranslation } from "react-i18next";

type IProps = {
  opened: boolean;
};

const KidsContactUs: React.FC<IProps> = ({ opened }) => {
  return (
    <div className={style.container}>
      <button className={style.contact_btn}>
        <span>
          <Trans>CONTACT_US</Trans>
        </span>
        <img src={ContactIcon} width="40" height="40" alt="contact" />
      </button>
      {opened && (
        <span>
          <Trans>CONTACT_US</Trans>
        </span>
      )}
    </div>
  );
};

export default withTranslation()(KidsContactUs);

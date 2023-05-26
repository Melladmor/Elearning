import { Trans, withTranslation } from "react-i18next";
import style from "./Cake.module.scss";
import strip from "../../../public/img/Group3.png";

const Cake = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>
          <Trans>CAKE1</Trans>
        </h2>
      </div>
      <div className={style.elements}>
        <div className={style.col1}>
          <div className={style.sec_1}>
            <span className={style.title}>
              <Trans>CAKE2</Trans>
            </span>
            <span className={style.body}>
              <Trans>CAKE3</Trans>
            </span>
          </div>
          <div className={style.sec_2}>
            <span className={style.title}>
              <Trans>CAKE4</Trans>
            </span>
            <span className={style.body}>
              <Trans>CAKE5</Trans>
            </span>
          </div>
          <div className={style.sec_3}>
            <span className={style.title}>
              <Trans>CAKE6</Trans>
            </span>
            <span className={style.body}>
              <Trans>CAKE7</Trans>
            </span>
          </div>
        </div>
        <div className={style.col3}>
          <div className={style.sec_1}>
            <span className={style.title}>
              <Trans>CAKE8</Trans>
            </span>
            <span className={style.body}>
              <Trans>CAKE9</Trans>
            </span>
          </div>
          <div className={style.sec_2}>
            <span className={style.title}>
              <Trans>CAKE10</Trans>
            </span>
            <span className={style.body}>
              <Trans>CAKE11</Trans>
            </span>
          </div>
          <div className={style.sec_3}>
            <span className={style.title}>
              <Trans>CAKE12</Trans>
            </span>
            <span className={style.body}>
              <Trans>CAKE13</Trans>
            </span>
          </div>
        </div>
      </div>
      <div className={style.mobile_elements}>
        <div className={style.mobile_section}>
          <span className={style.mobile_title}>
            <Trans>CAKE2</Trans>
          </span>
          <span className={style.mobile_body}>
            <Trans>CAKE3</Trans>
          </span>
        </div>
        <div className={style.mobile_section}>
          <span className={style.mobile_title}>
            <Trans>CAKE8</Trans>
          </span>
          <span className={style.mobile_body}>
            <Trans>CAKE9</Trans>
          </span>
        </div>
        <div className={style.mobile_section}>
          <span className={style.mobile_title}>
            <Trans>CAKE4</Trans>
          </span>
          <span className={style.mobile_body}>
            <Trans>CAKE5</Trans>
          </span>
        </div>
        <div className={style.mobile_section}>
          <span className={style.mobile_title}>
            <Trans>CAKE10</Trans>
          </span>
          <span className={style.mobile_body}>
            <Trans>CAKE11</Trans>
          </span>
        </div>
        <div className={style.mobile_section}>
          <span className={style.mobile_title}>
            <Trans>CAKE6</Trans>
          </span>
          <span className={style.mobile_body}>
            <Trans>CAKE7</Trans>
          </span>
        </div>
        <div className={style.mobile_section}>
          <span className={style.mobile_title}>
            <Trans>CAKE12</Trans>
          </span>
          <span className={style.mobile_body}>
            <Trans>CAKE13</Trans>
          </span>
        </div>
      </div>
      <img src={strip} width="auto" height="50" alt="box" className={style.strip} />
    </div>
  );
};

export default withTranslation()(Cake);

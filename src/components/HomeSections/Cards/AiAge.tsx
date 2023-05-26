import style from "./Cards.module.scss";
import Box1 from "../../../public/img/box/box1.png";
import Box2 from "../../../public/img/box/box2.png";
import Box3 from "../../../public/img/box/box3.png";
import { Trans, withTranslation } from "react-i18next";

const AiAge = () => {
  return (
    <div className={style.bg} id="section-ai">
      <div className={style.ai_container}>
        <div className={style.content}>
          <div className={style.ai_content}>
            <div className={style.title}>
              <h2>
                <Trans>AI1</Trans>
                <span>
                  <Trans>AI2</Trans>
                </span>
                <Trans>AI3</Trans>
              </h2>
              <p>
                <Trans>AI4</Trans>
              </p>
            </div>
            <div className={style.body}>
              <div className={style.box_con}>
                <img src={Box3} width="200" height="200" alt="box" />
                <img src={Box2} width="200" height="200" alt="box" />
                <img src={Box1} width="130" height="130" alt="box" />
                <img src={Box2} width="200" height="200" alt="box" />
              </div>
              <p>
                <Trans>AI_CARD1</Trans>
                <Trans>AI_CARD2</Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(AiAge);

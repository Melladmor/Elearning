import style from "./KidsGrid.module.scss";
import Kid1 from "../../../public/img/start-section-kids/kid1.png";
import Kid2 from "../../../public/img/start-section-kids/kid2.png";
import Kid3 from "../../../public/img/start-section-kids/kid3.png";
import Kid4 from "../../../public/img/start-section-kids/kid4.png";
import Kid5 from "../../../public/img/start-section-kids/kid5.png";

const KidsGrid = () => {
  return (
    <div className={style.container}>
      <div className={style.web}>
        <div className={style.fifth}>
          <div className={style.courses_container}>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
          </div>
          <div className={style.small_circle} />
          <img src={Kid5} width="175" height="auto" alt="child" />
          <div className={style.circle}>+7</div>
        </div>
        <div className={style.fourth}>
          <div className={style.courses_container}>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
          </div>
          <div className={style.small_circle} />
          <img src={Kid4} width="175" height="auto" alt="child" />
          <div className={style.circle}>+9</div>
        </div>
        <div className={style.third}>
          <div className={style.circle}>+11</div>
          <img src={Kid3} width="175" height="auto" alt="child" />
          <div className={style.small_circle} />
          <div className={style.courses_container}>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
          </div>
        </div>
        <div className={style.second}>
          <div className={style.circle}>+13</div>
          <img src={Kid2} width="175" height="auto" alt="child" />
          <div className={style.small_circle} />
          <div className={style.courses_container}>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
          </div>
        </div>
        <div className={style.first}>
          <div className={style.circle}>+15</div>
          <img src={Kid1} width="175" height="auto" alt="child" />
          <div className={style.small_circle} />
          <div className={style.courses_container}>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
            <span>Logical Thinking</span>
          </div>
        </div>
      </div>
      <div className={style.mobile}>
        <div className={style.first}>
          <div className={style.data}>
            <div className={style.courses_container}>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
            </div>
            <div className={style.small_circle} />
            <div className={style.circle}>+15</div>
          </div>
          <img src={Kid1} width="100" height="auto" alt="child" />
        </div>
        <div className={style.second}>
          <div className={style.data}>
            <div className={style.courses_container}>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
            </div>
            <div className={style.small_circle} />
            <div className={style.circle}>+13</div>
          </div>
          <img src={Kid2} width="100" height="auto" alt="child" />
        </div>
        <div className={style.third}>
          <div className={style.data}>
            <div className={style.courses_container}>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
            </div>
            <div className={style.small_circle} />
            <div className={style.circle}>+11</div>
          </div>
          <img src={Kid3} width="100" height="auto" alt="child" />
        </div>
        <div className={style.fourth}>
          <img src={Kid4} width="100" height="auto" alt="child" />
          <div className={style.data}>
            <div className={style.circle}>+9</div>
            <div className={style.small_circle} />
            <div className={style.courses_container}>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
            </div>
          </div>
        </div>
        <div className={style.fifth}>
          <img src={Kid5} width="100" height="auto" alt="child" />
          <div className={style.data}>
            <div className={style.circle}>+7</div>
            <div className={style.small_circle} />
            <div className={style.courses_container}>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
              <span>Logical Thinking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsGrid;

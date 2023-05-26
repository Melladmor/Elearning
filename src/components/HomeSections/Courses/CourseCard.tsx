import { FC } from "react";
import { IKidCourse } from "src/core/models/course.model";
import style from "./Courses.module.scss";
import { ReactComponent as Envelope } from "../../../public/img/icons/envelope.svg";
import { Trans, withTranslation } from "react-i18next";
import Python from "../../../public/img/courses/course1.png";
import Scratch from "../../../public/img/courses/course2.png";
import Web from "../../../public/img/courses/course3.png";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type IProps = {
  course: IKidCourse;
};

const CourseCard: FC<IProps> = ({ course }) => {
  return (
    <div
      className={`${style.course_card} ${
        course.theme === `blue`
          ? style.course_card_blue
          : course.theme === `orange`
          ? style.course_card_orange
          : course.theme === `yellow`
          ? style.course_card_yellow
          : null
      }`}
    >
      <div className={style.name}>{course.name}</div>
      <div className={style.tech_container}>
        {course.technologies.map((tech) => (
          <div className={style.tech}>{tech}</div>
        ))}
      </div>
      <div className={style.icon}>
        <img
          src={
            course.theme === `blue`
              ? Python
              : course.theme === `orange`
              ? Web
              : course.theme === `yellow`
              ? Scratch
              : Scratch
          }
          width="200"
          height="200"
          alt={course.name}
        />
      </div>
      <div className={style.description}>{course.description}</div>
      <div className={style.level_age}>
        <div className={style.age}>
          <Envelope />
          <span>+{course.age.to}</span>
        </div>
        <div className={style.level}>
          <Envelope />
          <span>{course.level}</span>
        </div>
      </div>
      <button type="button" className={style.button}>
        <div>
        <Trans>VIEW_COURSE</Trans>
        </div>
        <FontAwesomeIcon icon={faAngleRight as IconProp} className={style.icon_btn}/>

      </button>
    </div>
  );
};

export default withTranslation()(CourseCard);

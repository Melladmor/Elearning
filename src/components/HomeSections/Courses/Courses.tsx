/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import style from "./Courses.module.scss";
import { IKidCourse, AgeRange } from "src/core/models/course.model";
import Close from "../../../public/img/icons/close.svg";
import { ReactComponent as Arrow } from "../../../public/img/icons/upArrow.svg";
import CourseCard from "./CourseCard";
import { Trans, withTranslation } from "react-i18next";
import { getCoursesThunk } from "src/redux/features/courses.slice";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { FULFILLED } from "src/core/constants/generic-constant";
import SmallScreenSlide from "src/components/Shared/Slide/SmallScreenSlide";
import { SwiperSlide } from "swiper/react";
import SliderComponent from "src/components/Shared/Slide/SliderComponent";



const Courses: FC = () => {

  const [courses, setCourses] = useState<any>([]);
  const [activeRange, setActiveRange] = useState<AgeRange | null>(null);
  const dispatch = useAppDispatch();
  const coursesData = useAppSelector<IKidCourse[]>((state) => state.courses.courses);
  const getLanguage = () => localStorage.getItem("i18nextLng") || "en";
  useEffect(() => {
    dispatch(getCoursesThunk(getLanguage())).then((res) => {
      if (res.meta.requestStatus === FULFILLED && res?.payload) {
        setCourses(res.payload);
      }
    });
  }, [getLanguage()]);
  const ageRange = coursesData ? coursesData.map((course: IKidCourse) => course.age) : [];
  const uniqueArr = ageRange.filter((obj, index: number) => {
    const i = ageRange.findIndex((o: { from: any; to: any }) => o.from === obj.from && o.to === obj.to);
    return i === index;
  });
  const filterAge = (age: AgeRange | null, e: any) => {
    e?.stopPropagation();
    setActiveRange(age);
    if (age)
      setCourses(coursesData.filter((course: IKidCourse) => course.age.from === age.from && course.age.to === age.to));
    else setCourses(coursesData);
  };
  return (
    <div className={style.bg} id="section-courses">
      <div className={style.container}>
        <div className={style.title}>
          <h2>
            <Trans>COURSES1</Trans>
          </h2>
          <h4>
            <Trans>COURSES2</Trans>
            <br />
            <span>
              <Trans>COURSES3</Trans>
            </span>
            <Trans>COURSES4</Trans>
          </h4>
        </div>
      <div className={style.filter}>
        <button
          onClick={(e) => filterAge(null, e)}
          className={`${style.filter_btn} ${activeRange ? null : style.active_all}`}
        >
          <Trans>COURSES5</Trans>
        </button>
        {uniqueArr.map((age: AgeRange) => (
          <div className={style.button_container}>
            <button
              className={`${style.filter_btn} ${
                activeRange?.from === age.from && activeRange.to === age.to ? style.active_range : null
              }`}
              onClick={(e) => filterAge(age, e)}
            >
              <button onClick={(e) => filterAge(null, e)} className={style.unFilter}>
                <img src={Close} width="15" height="15" alt="close" />
              </button>
              {age.from} - {age.to}
            </button>
          </div>
        ))}
      </div>
      <div className={style.card_container}>
        {courses.map((course: IKidCourse) => (
          <CourseCard course={course} />
        ))}
      </div>


      
      <SliderComponent>
      {courses.map((course: IKidCourse) => (
          <CourseCard course={course} />
      ))}
      </SliderComponent>






        <div className={style.see_all}>
          <h5>
              <Trans>SEE_ALL</Trans>
          </h5>
          <div className={style.see_all_icon}>
            <Arrow />
          </div>
        </div>
        <div className={style.kid_path}>
          <p>
            <Trans>COURSES6</Trans>
            <br />
            <Trans>COURSES7</Trans>
            <span>
              <Trans>COURSES8</Trans>
            </span>
            <Trans>COURSES9</Trans>
          </p>
          <button type="button" className={style.kid_path_btn}>
            <span>
            <Trans>COURSES10</Trans>
            </span>
            <span>
              <Trans>COURSES8</Trans>
            </span>
            <span>
            <Trans>COURSES11</Trans>

            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Courses);

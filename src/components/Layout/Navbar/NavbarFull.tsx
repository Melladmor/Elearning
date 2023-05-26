/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import style from "./NavbarFull.module.scss";
import { Trans, withTranslation } from "react-i18next";
import { getCoursesThunk } from "src/redux/features/courses.slice";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import NavbarMobileFooter from "./NavbarMobileFooter";
import NavbarFooter from "./NavbarFooter";
import Logo from "../../Shared/Logo/Logo";

type IProps = {
  isFooter?: boolean;
  isMobile?: boolean;
};

const NavbarFull: FC<IProps> = ({ isFooter, isMobile }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.courses);
  const getLanguage = () => localStorage.getItem("i18nextLng") || "en";
  useEffect(() => {
    dispatch(getCoursesThunk(getLanguage()));
  }, [getLanguage()]);
  return (
    <div className={`${style.full_navbar_container} ${isFooter && style.isFooter}`}>
      {isFooter && isMobile && (
        <div className={style.up_section}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div className={style.go_up}>
            <Trans>GO_UP</Trans>
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
          </div>
        </div>
      )}
      <div className={style.full_navbar_container_grid}>
        <div className={style.column}>
          <div className={style.section}>
            <div className={style.section_head}>
              <span className={style.courses}>
                <Trans>COURSES</Trans>
              </span>
            </div>
            <div className={style.section_body}>{courses && courses.map((c) => <span>{c.name}</span>)}</div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.section}>
            <div className={style.section_head}>
              <span className={style.summer}>
                <Trans>SUMMER_BOOTCAMPS</Trans>
              </span>
            </div>
            <div className={style.section_body}>
              {courses && courses?.slice(0, 3).map((c) => <span>{c.name}</span>)}
              <span className={style.see_all}>
                <Trans>SEE_ALL</Trans>
              </span>
            </div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.section}>
            <div className={style.section_head}>
              <span className={style.sessions}>
                <Trans>FREE_TRAILER_SEEIONS</Trans>
              </span>
            </div>
            <div className={style.section_body}>
              <div className={style.event}>
                {courses &&
                  courses?.slice(0, 3).map((c, index) => (
                    <>
                      <span>{c.name}</span>
                      <span className={style.timing}>
                        <Trans>TIMING</Trans>
                      </span>
                    </>
                  ))}
                <span className={style.see_all}>
                  <Trans>SEE_ALL</Trans>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.section}>
            <div className={style.section_head}>
              <span className={style.pricing}>
                <Trans>PRICING</Trans>
              </span>
            </div>
            <div className={style.section_body}>
              <span>
                <Trans>COURSES_PRICING</Trans>
              </span>
              <span>
                <Trans>VIP</Trans>
              </span>
              <span>
                <Trans>DISCOUNT</Trans>
              </span>
              <span className={style.gift}>
                <div className={style.divider} />
                <span>
                  <Trans>GIFT</Trans>
                </span>
                <div className={style.divider} />
              </span>
              <span>
                <Trans>BUSINESS</Trans>
              </span>
              <span>
                <Trans>SCHOOLS</Trans>
              </span>
            </div>
          </div>
        </div>
        <div className={style.column_placeholder} />
        <div className={style.column}>
          <div className={style.section}>
            <div className={style.section_head}>
              <span className={style.why}>
                <Trans>WHY_US</Trans>
              </span>
            </div>
            <div className={style.section_body}>
              <span>
                <Trans>ABOUT_US</Trans>
              </span>
              <span>
                <Trans>WHAT_WE_TEACH</Trans>
              </span>
              <span>
                <Trans>HOW_WE_WORK</Trans>
              </span>
            </div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.section}>
            <div className={style.section_head}>
              <span className={style.outcomes}>
                <Trans>OUTCOMES</Trans>
              </span>
            </div>
            <div className={style.section_body}>
              <span>
                <Trans>OUR_GRADUATES</Trans>
              </span>
              <span>
                <Trans>PROJECTS</Trans>
              </span>
              <span>
                <Trans>TESTIMONIALS</Trans>
              </span>
            </div>
          </div>
        </div>
      </div>
      {isFooter ? (
        isMobile ? (
          <NavbarMobileFooter />
        ) : (
          <div className={style.social}>
            <NavbarFooter opened isFooter />
          </div>
        )
      ) : null}
    </div>
  );
};

export default withTranslation()(NavbarFull);

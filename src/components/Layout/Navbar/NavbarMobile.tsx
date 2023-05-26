/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Fade as Hamburger } from "hamburger-react";
import { Trans, withTranslation } from "react-i18next";
import style from "./NavbarMobile.module.scss";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getCoursesThunk } from "src/redux/features/courses.slice";
import NavbarMobileFooter from "./NavbarMobileFooter";

type IProps = {
  handleNoScroll: (param: boolean) => void;
};

const NavbarMobile: FC<IProps> = ({ handleNoScroll }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleToggleSideBar = () => {
    setVisible(!visible);
    handleNoScroll(!visible);
  };
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.courses);
  const getLanguage = () => localStorage.getItem("i18nextLng") || "en";
  useEffect(() => {
    dispatch(getCoursesThunk(getLanguage()));
  }, [getLanguage()]);
  return (
    <div>
      <Sidebar visible={visible} onHide={() => handleToggleSideBar()} fullScreen className={style.fullscreen}>
        <div className={style.content}>
          <div className={style.full_navbar_container_grid}>
            <div className={style.column}>
              <div className={style.section}>
                <div className={style.section_head}>
                  <span className={style.courses}>
                    <Trans>COURSES</Trans>
                  </span>
                </div>
                <div className={style.section_body}>
                  {courses &&
                    courses?.slice(0, 3).map((c) => (
                      <div key={c.name}>
                        <span>{c.name}</span>
                      </div>
                    ))}
                  <span className={style.see_all}>
                    <Trans>SEE_ALL</Trans>
                  </span>
                </div>
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
                  {courses &&
                    courses?.slice(0, 3).map((c) => (
                      <div key={c.name}>
                        <span>{c.name}</span>
                      </div>
                    ))}
                  <span className={style.see_all}>
                    <Trans>SEE_ALL</Trans>
                  </span>
                </div>
              </div>
            </div>
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
                  <span className={style.sessions}>
                    <Trans>FREE_TRAILER_SEEIONS</Trans>
                  </span>
                </div>
                <div className={style.section_body}>
                  {courses &&
                    courses?.slice(0, 3).map((c) => (
                      <div key={c.name} className={style.event}>
                        <span>{c.name}</span>
                        <span className={style.timing}>
                          <Trans>TIMING</Trans>
                        </span>
                      </div>
                    ))}
                  <span className={style.see_all}>
                    <Trans>SEE_ALL</Trans>
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
          </div>
          <NavbarMobileFooter />
        </div>
      </Sidebar>
      <Hamburger size={23} color={`#fff`} direction="right" toggled={visible} toggle={() => handleToggleSideBar()} />
    </div>
  );
};
export default withTranslation()(NavbarMobile);

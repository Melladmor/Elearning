import React, { RefAttributes, useEffect, useRef, useState } from 'react'
import style from './slider.module.scss'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next'
type Props = {
    children:any,
}

const SliderComponent = (props: Props) => {
    const [width ,setWidth] = useState(0)
    const {i18n} = useTranslation()
    const carousleRef = useRef<any>(null)
    useEffect(()=>{
        setWidth(carousleRef.current.scrollWidth - carousleRef.current.offsetWidth)
    },[carousleRef?.current?.scrollWidth ,carousleRef?.current?.offsetWidth])
    const contsrain = i18n?.language==='ar' ?{left:0,right:width}:{right:0 ,left:-width}

  return (
    <motion.div ref={carousleRef}  className={style.slider_motion}>
        <motion.div drag="x" dragConstraints={contsrain} className={style.carousel_motion}>
            {props.children}
        </motion.div>
    </motion.div>
  )
}

export default SliderComponent
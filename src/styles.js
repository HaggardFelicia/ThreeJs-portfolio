import { base } from "framer-motion/client";
import { smaa } from "three/examples/jsm/tsl/display/SMAANode.js";

const styles = {
    paddingX: "px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[60px] sm:text-[36px] xs:text-[30px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[28px] sm:text-[24px] xs:text-[18px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[40px] sm:text-[32px] xs:text-[30px] text-[36px]",
    sectionSubText:
      "sm:text-[14px] text-[12px] text-secondary uppercase tracking-wider",
  };
  
  export { styles };

  // 7xl 72px
  // 6xl 60px lg
  // 5xl 40px  base
  // 4xl 36px sm
  // 3xl 30px xs

  /*heroHeadText 
    lg from 80 t0 60
    base stays at 40
    sm 60 to 36
    xs 50 to 30
    */
     /*heroSubText 
    lg from 30 to 28
    base stays at 16
    sm 26 to 24
    xs 20 to 18
    */
     /*sectionHeadText 
    md from 60 t0 40
    base 38
    sm 50 to 36
    xs 40 to 32
    */
        /*sectionSubText 
    base 14 to 26
    sm 18 to 24
    */
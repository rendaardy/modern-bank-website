import styles from "../styles.js";
import { arrowUp } from "../assets/index.js";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      role="button"
    >
      <div
        className={`${styles.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row gap-2`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;

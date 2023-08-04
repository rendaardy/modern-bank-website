import { apple, bill, google } from "../assets/index.js";
import styles, { layout } from "../styles.js";

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute top-0 -left-1/4 z-[3] w-[50%] h-[50%] rounded-full white-gradient"></div>
        <div className="absolute bottom-0 -left-1/4 z-[0] w-[50%] h-[50%] rounded-full pink-gradient"></div>
      </div>
      <div className={`${layout.sectionInfo} flex-col`}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" />
          billing and invoices
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <div className="flex flex-row flex-wrap gap-5 sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple store"
            className="w-[128px] h-[42px] object-contain"
          />
          <img
            src={google}
            alt="google play"
            className="w-[128px] h-[42px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;

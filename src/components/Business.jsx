import { features } from "../constants.js";
import styles, { layout } from "../styles.js";
import Button from "./Button.jsx";

function FeatureCard({ id, icon, title, content }) {
  return (
    <div
      key={id}
      className="flex flex-row gap-3 p-6 rounded-[20px] feature-card"
    >
      <div
        className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex gap-1 flex-col">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23px] text-white">
          {title}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
}

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className="mt-10">Get Started</Button>
      </div>
      <div className={`${layout.sectionImg} flex-col gap-6`}>
        {features.map((feature) => {
          return (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Business;

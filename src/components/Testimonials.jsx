import { feedback } from "../constants.js";
import styles from "../styles.js";
import FeedbackCard from "./FeedbackCard.jsx";

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue-gradient bottom-40"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap md:gap-10 sm:gap-6 gap-0 sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard
            key={card.id}
            id={card.id}
            content={card.content}
            name={card.name}
            title={card.title}
            img={card.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

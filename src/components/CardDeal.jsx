import { card } from "../assets/index.js";
import styles, { layout } from "../styles.js";
import Button from "./Button.jsx";

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px} mt-5`}>
          Ipsum est obcaecati modi reiciendis nulla quisquam, molestias corrupti
          Commodi sed quisquam officia rem adipisci ducimus Nesciunt magni ut ea
          expedita magnam accusamus Velit molestias.
        </p>
        <Button className="mt-10">Get Started</Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default CardDeal;

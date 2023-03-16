import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy
          steps.{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Nulla sunt incididunt aliqua cupidatat mollit exercitation id
          cupidatat nostrud aliqua laboris incididunt pariatur sint. Ea nulla ea
          amet anim dolor tempor reprehenderit ullamco sunt cillum eu.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  );
};

export default CardDeal;

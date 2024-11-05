import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CTA,
  Footer,
  Navbar,
  Hero,
  Stats,
  Testimonials,
  CardDeal,
  Clients,
} from "./components";

const App = () => {
  return (
    <div className={` bg-black w-full overflow-hidden`}>
      <div className={` ${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-black`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-black`} >
        <div className={`${styles.boxWidth}`} >
              <Stats />
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials/>
              <Clients/>
              <CTA />
              <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;

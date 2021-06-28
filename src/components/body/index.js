import styles from "./body.module.scss";

const Body = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <h1> Why Qrates?</h1>
        <h2>
          Your music on vinyl <br></br> <span>without the barriers.</span>
        </h2>
        <p>
          Full-service pressing, a global retail network, customer support — and
          you keep up to 85% of profits. ↓
        </p>
      </div>
      <div className={styles.image}>
        <img
          src="https://qrates.com/assets/public/man_bring_records-50b972e75700979a248707b59fe6a4563c5f8fa47514a8a8d03699af03d2c8b6.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Body;

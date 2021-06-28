import { React, useState } from "react";
import styles from "./header.module.scss";
import Hamburger from "hamburger-react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);

  const lockScroll = () => {
    setIsDropdownShowing(!isDropdownShowing);
  };

  return (
    <div className={styles.container} lockScroll={lockScroll}>
      <div className={styles["container-flex"]}>
        <div className={styles.logo}>
          <img
            src="https://qrates.com/assets/common/logos/qrates-logo-ad8672a49aacf4d06a06690cfffa1fbb0a9b080f94021fb3fe3b97de14856d6a.svg"
            alt=""
          />
        </div>
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div className={styles["navbar-container"]}>
          <div className={styles.navbar}>
            <nav className={styles.navlist}>
              <ul>
                <li>Discover</li>
                <li>Search</li>
                <li>Why Qrates?</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>

              <div className={styles.navlinks}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/qratesinfo"
                  rel="noreferrer"
                >
                  <i>FACEBOOK</i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/qrates/"
                  rel="noreferrer"
                >
                  <i>INSTAGRAM</i>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/qrates_com"
                  rel="noreferrer"
                >
                  <i>HOME</i>
                </a>
              </div>

              <img
                className={styles.peace}
                src="https://qrates.com/assets/common/sticker/peace-266ee9757a11a94f805dc159ef943d415aad0cc30f8c05428027cb734d679546.png"
                alt=""
              />

              <div className={styles.buttons}>
                <button>Log In</button>

                <button className={styles.blackbutton}>Make a record</button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

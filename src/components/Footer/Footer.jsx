import "@stylesComponents/Footer.scss";
import { Link } from "react-router-dom";
import "fontsource-roboto";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.Footer}>
        <p className={styles.footerTitle}>
          © 2022 Pairaphrase LLC. All rights reserved
        </p>
        <div className={styles.footerLinks}>
          <Link to="/">Privacy policy and online security</Link>
          <Link to="/"> Terms </Link>
          <Link to="/"> Contact</Link>
          <Link to="/"> Report Issue</Link>
        </div>
      </div>
    </footer>
  );
}

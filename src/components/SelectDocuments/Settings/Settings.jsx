import { MdOutlineClose } from "react-icons/md";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./settings.module.scss";

export default function Settings({ settingToggleHandler }) {
  return (
    <div className={styles.settingsWrap}>
      <div className={styles.head}>
        <h4>Setting</h4>
        <MdOutlineClose onClick={() => settingToggleHandler()} />
      </div>
      <div className={styles.body}>
        <span className={styles.type}> Document Source:</span>
        <p>GermanText.txt</p>
        <span className={styles.type}> Translation Pair:</span>
        <p> German → English (US)</p>
        <span className={styles.type}>Domain/Group:</span>
        <p>tkxel.com/Public</p>
        <span className={styles.type}>Translation Engine:</span>
        <p>Microsoft</p>
        <p className={styles.check}>Spell Check </p>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
        <p className={styles.check}>Machine Translation </p>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
        <p className={styles.check}> Translation Lookup</p>
        <TextareaAutosize></TextareaAutosize>
      </div>
    </div>
  );
}

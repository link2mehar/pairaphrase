/* eslint-disable react/destructuring-assignment */
import styles from "./activityTab.module.scss";
import Text from "../../../assets/Images/textfile.svg";

export default function ActivityTab(props) {
  return (
    <div className={styles.ActivityTabWrapper}>
      <span className={styles.date}>{props.date}</span>

      <div className={styles.imgWrap}>
        <div className={styles.img}>
          <img src={props.Profile} alt="profile" />
        </div>
        <div className="pp-ml-12">
          <p className={styles.name}>
            {props.name}
            <span className={styles.edit}>
              {" "}
              {props.edit}
            </span>
          </p>
          <div className={styles.iconWrap}>
            <img className="pp-mr-6" src={Text} alt="texticon" />
            <p>{props.file}</p>
          </div>
        </div>
      </div>
      <div className={styles.canView}>
        <div className={styles.profileName}>
          {props.viewerImg && <img src={props.viewerImg} alt="profile" />}
          <p className={styles.Viewname}>{props.viewerName}</p>
        </div>
        <span className={styles.view}>{props.canView}</span>
      </div>
    </div>
  );
}

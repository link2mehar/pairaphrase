import { MdEdit } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import styles from "./detailTab.module.scss";
import Profile from "../../../assets/Images/profile.svg";
import uploaded from "../../../assets/Images/textuploded.png";

import Document from "../../../assets/Images/description.svg";

export default function DetailTab(props) {
  const [isDocumentSelected, setIsDocumentSelected] = useState(false);
  const documentToggleHandler = () => {
    setIsDocumentSelected(!isDocumentSelected);
  };
  return (
    <div className={styles.DetailTabWrapper}>
      {isDocumentSelected ? (
        <div className={styles.uploadedDocWrapper}>
          <div className={styles.Documents}>
            <img
              className={styles.image}
              src={uploaded}
              alt="uploaded document"
            />
            <div className={styles.overlay}>
              <div className={styles.EyesIcon}>
                <AiFillEye />
                Preview
              </div>
            </div>
          </div>
          <div className={styles.shareWithWrap}>
            <p>Shared With</p>
            <span>
              <img src={Profile} alt="ss" />
            </span>
            <img src={Profile} alt="ss" />
            <img src={Profile} alt="ss" />
            <img src={Profile} alt="ss" />
          </div>
          <div className={styles.Properties}>
            <p className={styles.title}> Document Properties</p>
            <ul>
              <li>
                <p>
                  Type
                  <span> .txt file</span>
                </p>
              </li>
              <li>
                <p>
                  Size
                  <span> 100KB</span>
                </p>
              </li>
              <li>
                <p>
                  Owner
                  <span> Adams</span>
                </p>
              </li>
              <li>
                <p>
                  Modified
                  <span> Mar 28, 2022 by Adams</span>
                </p>
              </li>

              <li>
                <p>
                  Opened
                  <span> 12:01 PM by me</span>
                </p>
              </li>
              <li>
                <p>
                  Created
                  <span> Mar 15, 2022 </span>
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.permission}>
            <p>
              Permission
              <MdEdit />
            </p>
            <p className="pp-mt-10">Viewers can download</p>
          </div>
        </div>
      ) : (
        <div className={styles.noDocument}>
          <img src={Document} alt="document" />
          <p>Please select file to view its details</p>
        </div>
      )}
    </div>
  );
}

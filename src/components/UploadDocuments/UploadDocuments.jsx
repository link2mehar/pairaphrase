import { useDropzone } from "react-dropzone";
import Word from "../../assets/Images/word.svg";
import excel from "../../assets/Images/excel.svg";
import powerpoint from "../../assets/Images/powerpoint.svg";
import styles from "./upload.module.scss";

export default function UploadDocuments({ handleUpload, uploadLoading }) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDrop: (files) => handleUpload(files)
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path}
      {" "}
      -
      {file.size}
      {" "}
      bytes
    </li>
  ));
  return (
    <div className={styles.dropContainer}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className={styles.dropFilesWrapper}>
          <p>Drag your documents here.</p>
          <span>you can upload Microsoft office files and more</span>
          <div className={styles.documentType}>
            <img src={powerpoint} alt="powerpoint" />
            <img src={excel} alt="excel" />
            <img src={Word} alt="word" />
          </div>
          <p className={` ${styles.loginWith}`}>OR</p>

          <button className="primary-btn" type="button" onClick={open}>
            {uploadLoading ? "Upoading..." : "Choose File"}
          </button>
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

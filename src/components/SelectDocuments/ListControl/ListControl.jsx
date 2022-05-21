/* eslint-disable react/destructuring-assignment */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import { IoBookmarkOutline } from "react-icons/io5";
import styles from "./listControl.module.scss";

export default function ListControl({ segment, index, number, onTargetChange }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        pt: 3,
        borderBottom: "1px solid rgba(0, 0, 0, 0.08);",
        pb: 3
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ display: "flex", alignItems: "baseline" }}>
          <div className={styles.container}>
            <input type="checkbox" />
            <span>{/* <IoBookmarkOutline /> */}</span>
            <h4 className={styles.number}>{number}</h4>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className={styles.sourceDocument}>
            <p>{segment.source}</p>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className={styles.translationDocument}>
            <textarea
              className={styles.edit__box}
              onChange={(e) => onTargetChange(e, index)}
              type="text"
              value={segment.target}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

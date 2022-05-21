import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import styles from "./documentDetail.module.scss";

export default function DocumentDetail() {
  return (
    <div className={styles.DocumentDetailWrap}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <h4>
              Segment
              {" "}
              <BsFillQuestionCircleFill />
            </h4>
          </Grid>
          <Grid item xs={5}>
            <h4>Source Document - German</h4>
          </Grid>
          <Grid item xs={5}>
            <h4>Translation - English (US)</h4>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

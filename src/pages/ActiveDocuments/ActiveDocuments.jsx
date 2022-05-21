import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { AiOutlineSearch } from "react-icons/ai";
import DocumentsListing from "../../components/DocumentsListing/DocumentsListing";
import styles from "./activeDocuments.module.scss";
import DocumentInfo from "../../components/DocumentInfo/DocumentInfo";

export default function ActiveDocuments() {
  return (
    <div className={styles.ActiveDocumentsWrapper}>
      <div className={styles.customGrid}>
        <div className={styles.searchWrap}>
          <h1>Active Documents</h1>
          <Box sx={{ "& > :not(style)": {} }}>
            <FormControl variant="standard">
              <Input
                sx={{
                  width: "285px",
                  background: "#F4F4F4",
                  borderRadius: "8px",
                  padding: "3px 12px 3px 16px",
                  "&:before, &:after": {
                    content: "unset"
                  }
                }}
                id="input-with-icon-adornment"
                startAdornment={(
                  <InputAdornment position="start">
                    <AiOutlineSearch />
                  </InputAdornment>
                )}
              />
            </FormControl>
          </Box>
        </div>
        <DocumentsListing />
      </div>
      <div className={styles.customGrid2}>
        <DocumentInfo />
      </div>
    </div>
  );
}

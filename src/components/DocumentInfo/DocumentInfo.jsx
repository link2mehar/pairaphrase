import * as React from "react";

import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import { MdOutlineClose } from "react-icons/md";

import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ActivityTab from "./ActivityTab/ActivityTab";
import Profile from "../../assets/Images/profile.svg";

import styles from "./documentInfo.module.scss";
import DetailTab from "./DetailTab/DetailTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function DocumentInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.DocumentInfoWrapper}>
      <div className={styles.head}>
        <p>Document Info</p>
        <MdOutlineClose />
      </div>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "rgba(0, 0, 0, 0.12);",
          fontSize: "8px"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { background: "#0872BA" }
          }}
          sx={{
            justifyContent: "center"
          }}
        >
          <Tab
            className={styles.customTab}
            label="Details"
            {...a11yProps(0)}
            sx={{
              fontSize: "14px",
              lineHeight: "16px",
              letterSpacing: "1.25px",
              color: "rgba(0, 0, 0, 0.87)",
              width: "155px",
              textTransform: "capitalize",
              "&.Mui-selected": {
                color: "#0872BA"
              }
            }}
          />
          <Tab
            className={styles.customTab}
            label="Activity"
            {...a11yProps(1)}
            sx={{
              fontSize: "14px",
              lineHeight: "16px",
              letterSpacing: "1.25px",
              color: "rgba(0, 0, 0, 0.87)",
              width: "155px",

              textTransform: "capitalize",
              "&.Mui-selected": {
                color: "#0872BA"
              }
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <DetailTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ActivityTab
          date="Mar 26, 2022"
          name="Adams"
          edit="edited an item"
          file="GermanText.txt"
          Profile={Profile}
        />
        <ActivityTab
          date="Mar 26, 2022"
          name="Adams"
          edit="edited an item"
          file="GermanText.txt"
          viewerName="Ayden Lucas"
          canView="Can View"
          Profile={Profile}
          viewerImg={Profile}
        />
        <ActivityTab
          date="Mar 26, 2022"
          name="Adams"
          edit="edited an item"
          file="GermanText.txt"
          Profile={Profile}
        />
      </TabPanel>
    </div>
  );
}

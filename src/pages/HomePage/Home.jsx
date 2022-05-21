import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputsFields from "@components/Inputs/InputsField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import UploadDocuments from "@components/UploadDocuments/UploadDocuments";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { reset,
  translationWizardThunk,
  detectLanguageThunk,
  fileThunk,
  translateFileThunk
} from "../../slices/translation-slice";
import Microsoft from "../../assets/Images/microsoft.svg";
import Dynamic from "../../assets/Images/dynamic.svg";
import styles from "./home.module.scss";
import "fontsource-roboto";

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

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tabsValue, setTabsValue] = useState(0);

  const [wizardOptions, setWizardOptions] = useState({
    text: "",
    to: "en-US",
    from: ""
  });
  const [fileUploadOptions, setFileUploadOptions] = useState({
    source: "",
    target: ""
  });

  const {
    detectedLanguage,
    translated,
    translatedFileId,
    translateStatus,
    translateLoading,
    uploadLoading
  } = useSelector((state) => state.translationWizard);
  let str = "";
  if (Array.isArray(translated)) {

    for (let i = 0; i < translated.length; i++) {
      str += translated[i].target;
    }
  }
  useEffect(() => {
    if (detectedLanguage) {
      setWizardOptions({
        ...wizardOptions,
        from: detectedLanguage
      });
    }
  }, [detectedLanguage]);
  useEffect(() => {
    if (translatedFileId && translateStatus && translateStatus.status === 200) {
      swal({
        title: "Good job!",
        text: "Your file has been accepted",
        icon: "success"
      });
      setTimeout(() => {
        navigate(`/translations/${translatedFileId}`);
        dispatch(reset());
      }, 1500);
    }

  }, [translateStatus]);

  let detectTimeout;
  const detectLanguageDebounce = () => {
    clearTimeout(detectTimeout);
    detectTimeout = setTimeout(() => {
      // dispatch language detect here
      dispatch(detectLanguageThunk(wizardOptions));
    }, 1000);
  };

  const handleChange = (event, newValue) => {
    setTabsValue(newValue);
  };
  const handlePaste = (e) => {
    // console.log(e.clipboardData.getData("Text"));
    const { name } = e.target;

    if (name === "text") {
      detectLanguageDebounce();
    }
    setWizardOptions({
      ...wizardOptions,
      [name]: e.clipboardData.getData("Text")
    });

  };

  const handleOptionsChange = (e) => {
    const { name, value } = e.target;

    if (name === "text") {
      detectLanguageDebounce();
    }
    setWizardOptions({
      ...wizardOptions,
      [name]: value
    });
  };

  const handleTranslate = () => {
    dispatch(translationWizardThunk(wizardOptions));
  };

  const handleUpload = (files) => {
    const data = { files, fileUploadOptions };
    dispatch(fileThunk(data));
  };

  const handleFileTranslation = () => {
    const data = { translatedFileId, fileUploadOptions };
    dispatch(translateFileThunk(data));
  };

  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.homeTitle}>Translate</h1>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "rgba(0, 0, 0, 0.12);" }}>
            <Tabs
              value={tabsValue}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                className={styles.customTab}
                label="Translation Wizard"
                {...a11yProps(0)}
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontFamily: "Roboto, sans-serif",
                  textTransform: "capitalize",

                  letterSpacing: "1.25px"
                }}
              />
              <Tab
                className={styles.customTab}
                label="Translate File"
                {...a11yProps(1)}
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontFamily: "Roboto, sans-serif",

                  textTransform: "capitalize",

                  letterSpacing: "1.25px"
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value={tabsValue} index={0}>
            <div className={styles.microsoftLogo}>
              <h3>
                {" "}
                Translation Wizard
                <Tooltip
                  arrow
                  title="You can upload Excel, PowerPoint, Word, Indesign (saved as .idml),
Mif, HTML and XML docs for translation into 57 languages.
When translating an old .doc, .xls or .ppt file: Please re-save your file
as an Office 2010 or higher file.s"
                  placement="top"
                >
                  <span>
                    <IoInformationCircleSharp color="#0872BA" />
                  </span>
                </Tooltip>
              </h3>
              <img src={Microsoft} alt="microsoftLogo" />
            </div>
            <p className={styles.remaining}> Remaining Words</p>
            <p className={styles.words}>5,000 / 600,000</p>
            <div className={styles.selection}>
              <Box sx={{ flexGrow: 1, alignItems: "center" }}>
                <div className={styles.inputWrapper}>
                  <div className={styles.input}>
                    <InputsFields
                      fieldName="from"
                      fieldValue={wizardOptions.from}
                      wizardOptions={wizardOptions}
                      setWizardOptions={setWizardOptions}
                      select="Auto-Detect"
                    />
                  </div>

                  <span className={styles.arrow}>
                    <FaExchangeAlt color="#9E9E9E" />
                  </span>
                  <div className={styles.input2}>
                    <InputsFields
                      fieldName="to"
                      wizardOptions={wizardOptions}
                      fieldValue={wizardOptions.to}
                      setWizardOptions={setWizardOptions}
                      select="English(US)"
                    />
                    <Button style={{ height: 40 }} onClick={handleTranslate} className="primary-btn">
                      Translate Text
                    </Button>
                  </div>
                </div>
              </Box>
            </div>
            <div className={styles.textAreaWrap}>
              <Box sx={{ flexGrow: 1, alignItems: "center" }}>
                <Grid container spacing={5} sx={{ alignItems: "center" }}>
                  <Grid item xs={6}>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Paste or type your text here, select your target language, then click translate."
                      className={styles.textArea}
                      name="text"
                      value={wizardOptions.text}
                      onChange={handleOptionsChange}
                      onPaste={handlePaste}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Translation..."
                      className={styles.textArea}
                      value={Array.isArray(translated) ? str : translated}
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
          </TabPanel>
          <TabPanel value={tabsValue} index={1}>
            <div className={styles.microsoftLogo}>
              <h3>
                Translate File
                <Tooltip
                  arrow
                  title="You can upload Excel, PowerPoint, Word, Indesign (saved as .idml),
Mif, HTML and XML docs for translation into 57 languages.
When translating an old .doc, .xls or .ppt file: Please re-save your file
as an Office 2010 or higher file.s"
                  placement="top"
                >
                  <span>
                    <IoInformationCircleSharp color="#0872BA" />
                  </span>
                </Tooltip>
              </h3>
              <img src={Dynamic} alt="microsoftLogo" />
            </div>
            <p className={styles.upload}>Upload Documents</p>
            <Box sx={{ flexGrow: 1, alignItems: "center" }}>
              <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item xs={12}>
                  <UploadDocuments handleUpload={handleUpload} uploadLoading={uploadLoading} />
                </Grid>
              </Grid>
            </Box>
            <div className={styles.selection}>
              <Box sx={{ flexGrow: 1, alignItems: "center" }}>
                <div className={styles.inputWrapper}>
                  <div className={styles.input}>
                    <InputsFields
                      fieldName="source"
                      fieldValue={fileUploadOptions.source}
                      wizardOptions={fileUploadOptions}
                      setWizardOptions={setFileUploadOptions}
                      select="Choose Document Lanaguage ..."
                    />
                  </div>

                  <span className={styles.arrow}>
                    <FaExchangeAlt color="#9E9E9E" />
                  </span>
                  <div className={styles.input2}>
                    <InputsFields
                      fieldName="target"
                      fieldValue={fileUploadOptions.target}
                      wizardOptions={fileUploadOptions}
                      setWizardOptions={setFileUploadOptions}
                      select="Choose Translation Lanaguage ..."
                    />
                    <Button
                      onClick={handleFileTranslation}
                      style={{ height: 40 }}
                      className="primary-btn"
                      disabled={uploadLoading}
                    >
                      {translateLoading ? "Translating..." : "Translate File"}
                    </Button>
                  </div>
                </div>
              </Box>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

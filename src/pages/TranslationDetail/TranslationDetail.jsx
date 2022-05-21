import CustomSeparator from "@components/BreadCrumbs/BreadCrumbs";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { AiOutlineSearch } from "react-icons/ai";
import InputsFields from "@components/Inputs/InputsField";
import { MdFeedback, MdMessage } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import SelectDocuments from "@components/SelectDocuments/SelectDocuments";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./translationDetail.module.scss";
import { fetchFileSegmantationThunk } from "../../slices/translation-slice";

export default function TranslationDetail() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(true);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { fileSegmentation } = useSelector((state) => state.translationWizard);

  const settingToggleHandler = () => {
    setIsSettingsVisible(!isSettingsVisible);
    setIsMessageVisible(false);
  };

  const messageToggleHandler = () => {
    setIsMessageVisible(!isMessageVisible);
    setIsSettingsVisible(false);
  };

  useEffect(() => {
    dispatch(fetchFileSegmantationThunk(id));
  }, []);

  return (
    <>
      <div className={styles.TranslationDetailWrapper}>
        <div>
          <h1>Translation Detail</h1>
          <CustomSeparator />
        </div>
        <Box sx={{ "& > :not(style)": {} }}>
          <FormControl>
            <Input
              sx={{
                width: "430px",
                background: "#EBEEF2",
                borderRadius: "8px",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "0.5px",
                color: "rgba(0, 0, 0, 0.5)",
                padding: "9px 12px 9px 16px",
                "&:before": {
                  content: "unset"
                }
              }}
              id="input-with-icon-adornment"
              startAdornment={(
                <InputAdornment position="start">
                  <AiOutlineSearch color="rgba(0, 0, 0, 0.5)" />
                </InputAdornment>
              )}
              placeholder="Enter keyword or phrase to search"
            />
          </FormControl>
        </Box>
        <div className={styles.iconsWrap}>
          <div className="pp-mr-16 pp-ml-12">
            <InputsFields
              select="Actions"
              sx={{
                border: "1px solid #BDBDBD",
                borderRadius: "8px !important"
              }}
            />
          </div>
          <div className={styles.icons}>
            <Tooltip title="Feedback" arrow placement="top">
              <span>
                <MdFeedback />
              </span>
            </Tooltip>

            <span role="button" tabIndex={0} onClick={settingToggleHandler}>
              <IoSettingsSharp />
            </span>
            <span role="button" tabIndex={0} onClick={messageToggleHandler}>
              <MdMessage />
            </span>
          </div>
        </div>
      </div>

      <SelectDocuments
        isSettingsVisible={isSettingsVisible}
        settingToggleHandler={settingToggleHandler}
        isMessageVisible={isMessageVisible}
        messageToggleHandler={messageToggleHandler}
        data={fileSegmentation}
      />
    </>
  );
}

/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import { MdInfo } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

import PaginationRounded from "@components/Pagination/Pagination";

import { useDispatch } from "react-redux";
import styles from "./selectDocuments.module.scss";
import DocumentDetail from "./DocumentDetail/DocumentDetail";

import ListControl from "./ListControl/ListControl";
import Settings from "./Settings/Settings";
import Message from "./Message/Message";
import { submitSegmentThunk } from "../../slices/translation-slice";

const match = [
  {
    title: "100% Match",
    desc: "You don't need to edit this text."
  },
  {
    title: "75-99% Match",
    desc: "You may have to edit a few words."
  },
  {
    title: "New translation",
    desc: "Please read carefully."
  },
  {
    title: "Repetition",
    desc: "Edit the first occurrence only."
  },
  {
    title: "Check Spelling",
    desc: "Dynamic spell check is ON."
  }
];

const listControlData = [
  {
    number: "1",
    sourceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu commodo fusce tortor urna, sem et neque purus accumsan. Malesuada eu vitae risus adipiscing varius sem adipiscing. Sed sit integer elit, fermentum lectus vitae, nunc. Eget eget dui porta tellus nullam sagittis mollis eget.",
    translateDesc:
      " Start with peace of mind To ensure that you reach your destination healthily and safely, the airport has implemented a comprehensive health protection concept in close cooperation with its partners.",
    color: "green"
  },
  {
    number: "2",
    sourceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu commodo fusce tortor urna, sem et neque purus accumsan. Malesuada eu vitae risus adipiscing varius sem adipiscing. Sed sit integer elit, fermentum lectus vitae, nunc. Eget eget dui porta tellus nullam sagittis mollis eget.",
    translateDesc:
      " Start with peace of mind To ensure that you reach your destination healthily and safely, the airport has implemented a comprehensive health protection concept in close cooperation with its partners.",
    color: "orange"
  },
  {
    number: "2",
    sourceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu commodo fusce tortor urna, sem et neque purus accumsan. Malesuada eu vitae risus adipiscing varius sem adipiscing. Sed sit integer elit, fermentum lectus vitae, nunc. Eget eget dui porta tellus nullam sagittis mollis eget.",
    translateDesc:
      " Start with peace of mind To ensure that you reach your destination healthily and safely, the airport has implemented a comprehensive health protection concept in close cooperation with its partners.",
    color: "red"
  }
];

export default function SelectDocuments({
  isSettingsVisible,
  settingToggleHandler,
  isMessageVisible,
  messageToggleHandler,
  data
}) {

  const dispatch = useDispatch();
  const [segments, setSegments] = useState([]);
  useEffect(() => {
    setSegments(data);
  }, [data]);
  const onTargetChange = (e, idx) => {
    const newValues = structuredClone(segments);
    newValues[idx].target = e.target.value;

    setSegments(newValues);
    console.log(newValues[idx]);
    delete newValues[idx].match;
    dispatch(submitSegmentThunk(newValues[idx]));
  };
  return (
    <div className={styles.container1}>
      <div className={styles.SelectDocuments}>
        <h3>Select and edit text within the highlighted areas</h3>
        <div className={styles.matchInfo}>
          {match.map((tooltip, index) => (
            <p key={index}>
              {tooltip.title}
              <Tooltip title={tooltip.desc} arrow placement="top">
                <span>
                  <MdInfo />
                </span>
              </Tooltip>
            </p>
          ))}
        </div>
        <DocumentDetail />
        <div className={styles.listingContainer}>
          {segments.map((segment, index) => (
            <ListControl
              key={index}
              index={index}
              number={index + 1}
              segment={segment}
              onTargetChange={onTargetChange}
              // color={data.color}
            />
          ))}
        </div>
        <div className={styles.pagination}>
          <PaginationRounded />
        </div>
      </div>
      {isSettingsVisible && (
        <Settings settingToggleHandler={settingToggleHandler} />
      )}
      {isMessageVisible && (
        <Message messageToggleHandler={messageToggleHandler} />
      )}
    </div>
  );
}

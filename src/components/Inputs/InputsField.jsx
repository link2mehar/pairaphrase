import * as React from "react";
import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./inputFields.module.scss";

const MenuProps = {
  PaperProps: {
    // style: {
    //   maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    //   width: 250
    // }
  }
};

const languages = [
  { label: "Arabic", code: "ar-AE" },
  { label: "Bosnian", code: "bs-Latn" },
  { label: "Bulgarian", code: "bg-BG" },
  { label: "Catalan", code: "ca-ES" },
  { label: "Chinese (Simplified)", code: "zh-CN" },
  { label: "Chinese (Traditional)", code: "zh-HK" },
  { label: "Croatian", code: "hr" },
  { label: "Czech", code: "cs-CZ" },
  { label: "Danish", code: "da-DK" },
  { label: "Dutch", code: "nl" },
  { label: "English (US)", code: "en-US" },
  { label: "English (GB)", code: "en-GB" },
  { label: "Estonian", code: "et-EE" },
  { label: "Finnish", code: "fi-FI" },
  { label: "French (Canada)", code: "fr-CA" },
  { label: "French (France)", code: "fr-FR" },
  { label: "German", code: "de-DE" },
  { label: "Greek", code: "el-GR" },
  { label: "Haitian Creole", code: "ht" },
  { label: "Hebrew", code: "he-IL" },
  { label: "Hindi", code: "hi-IN" },
  { label: "Hmong Daw", code: "mww" },
  { label: "Hungarian", code: "hu-HU" },
  { label: "Indonesian", code: "id-ID" },
  { label: "Italian", code: "it-IT" },
  { label: "Japanese", code: "ja-JP" },
  { label: "Kiswahili", code: "sw" },
  { label: "Korean", code: "ko-KR" },
  { label: "Latvian", code: "lv-LV" },
  { label: "Lithuanian", code: "lt-LT" },
  { label: "Malay", code: "ms-MY" },
  { label: "Maltese", code: "mt-MT" },
  { label: "Norwegian", code: "nb-NO" },
  { label: "Persian", code: "fa-IR" },
  { label: "Polish", code: "pl-PL" },
  { label: "Portuguese (BR)", code: "pt-BR" },
  { label: "Portuguese (PT)", code: "pt-PT" },
  { label: " Romanian", code: " ro-RO" },
  { label: " Russian", code: "ru-RU" },
  { label: "Serbian (Cyrillic)", code: " sr-Cyrl" },
  { label: "Serbian (Latin)", code: "sr-Latn" },
  { label: "Slovak", code: "sk-SK" },
  { label: "Slovenian", code: "sl-SI" },
  { label: "Spanish (Argentina)", code: "es-AR" },
  { label: "Spanish (Latin America)", code: "es-GT" },
  { label: "Spanish (Mexico)", code: "es-MX" },
  { label: "Spanish (Spain)", code: "es-ES" },
  { label: "Spanish (United States)", code: "es-US" },
  { label: "Swedish", code: "sv-SE" },
  { label: "Thai", code: "th-TH" },
  { label: "Turkish", code: "tr-TR" },
  { label: "Ukrainian", code: "uk-UA" },
  { label: "Urdu", code: "ur-PK" },
  { label: "Vietnamese", code: "vi-VN" },
  { label: "Welsh", code: "cy" },
  { label: "Yucatec Maya", code: "yua" }
];

export default function InputsFields({
  wizardOptions,
  fieldName,
  fieldValue,
  setWizardOptions,
  select
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWizardOptions({
      ...wizardOptions,
      [name]: value
    });
  };

  return (
    <div>
      <FormControl sx={{ mb: 3, width: "100%", mt: 3 }}>
        <Select
          className={styles.customSelect}
          displayEmpty
          name={fieldName}
          value={fieldValue}
          onChange={handleChange}
          //   input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected?.length === 0) {
              // eslint-disable-next-line react/destructuring-assignment
              return <p>{select}</p>;
            }

            const sel = languages.find((lang) => lang.code.toLowerCase().includes(selected && selected.toLowerCase()));
            return sel?.label;
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.label} value={lang.code}>
              {lang.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

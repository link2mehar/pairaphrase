import { useTranslation } from "react-i18next";
import { useModal } from "@hooks";

import "@stylesComponents/Language.scss";

export default function Language({ onClose }) {
  const { i18n } = useTranslation("translation", { useSuspense: false });
  const [modal, toggleModal] = useModal();
  const lang = `${i18n.language}`.split("-")[0];

  return (
    <span
      type="button"
      className="lang"
      onClick={toggleModal}
      role="button"
      tabIndex={0}
      data-open={modal}
    >
      {lang}
      {modal && (
        <span className="lang__options">
          {["es", "en-US"].map((language) => (
            <button
              key={language}
              type="button"
              className="lang__option"
              onClick={() => {
                i18n.changeLanguage(language);
                if (onClose) onClose();
              }}
            >
              {`${language}`.split("-")[0]}
            </button>
          ))}
        </span>
      )}
    </span>
  );
}

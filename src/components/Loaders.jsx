import { createPortal } from "react-dom";

import "@stylesComponents/Loader.scss";

export const Loader = ({ msg }) => (
  <div className="loader">
    {msg}
  </div>
);

export const LoaderPage = ({ msg = "" }) => {
  const root = document.querySelector("#loader-root");

  if (!root) throw new Error("There is no tag with the id \"loader-root\"");

  return createPortal(
    <div className="loader-page">
      <Loader msg={msg} />
    </div>,
    root
  );
};

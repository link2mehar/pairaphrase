import { useRef, useState } from "react";
import { Field, ErrorMessage } from "formik";
import withField from "@hoc/withField";

import "@stylesComponents/Input.scss";

import IconEye from "@icons/icon-eye.svg";

const Input = ({ error, field, meta, helpers, type, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <input
        id={props.id || props.name}
        className="input__input"
        data-error={error}
        type={(type === "password" && showPassword) ? "text" : type}
        {...field}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          className="input__show"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img src={IconEye} alt="" className="input__show-icon" />
        </button>
      )}
    </>
  );
};

const Area = ({ error, field, meta, helpers, ...props }) => (
  <textarea
    id={props.id || props.name}
    data-error={error}
    className="input__area"
    {...field}
    {...props}
  />
);

const FileInput = ({ error, field, meta, helpers, type, accept = "image/*", ...props }) => {
  const { profile, defaultValue, alt, ...remainingProps } = props;
  // eslint-disable-next-line no-unused-vars
  const { onChange, onBlur, value } = field;
  const handleSelectFile = (event) => {
    const { files } = event.target;
    helpers.setValue(props.multiple ? [...value, ...files] : files[0]);
  };

  if (profile) {
    return (
      <div className="input__profile">
        <img
          src={value ? URL.createObjectURL(value) : defaultValue}
          alt={value?.name || alt}
          className="input__profile-image"
        />
        <input
          id={props.id || props.name}
          className="input__file"
          data-error={error}
          type="file"
          accept={accept}
          onChange={handleSelectFile}
          onBlur={onBlur}
          {...remainingProps}
        />
      </div>
    );
  }

  return (
    <input
      id={props.id || props.name}
      className="input__file"
      data-error={error}
      type="file"
      accept={accept}
      onChange={handleSelectFile}
      onBlur={onBlur}
      {...remainingProps}
    />
  );
};

const SelectInput = ({ options = [], error, field, meta, helpers, ...props }) => {
  const selectRef = useRef(null);

  const handleCloseSelect = () => {
    if (selectRef.current.dataset.active) {
      delete selectRef.current.dataset.active;
    } else {
      selectRef.current.dataset.active = true;
    }
  };

  const handleSelect = (event) => {
    const option = event.target;
    if (!option.classList.contains("input__select")) {
      const valueSelected = option.dataset.value;
      if (props.onSelect) props.onSelect(valueSelected);
      helpers.setValue(valueSelected);
      selectRef.current.dataset.active = false;
    } else {
      handleCloseSelect();
      selectRef.current.lastElementChild.scrollTo(0, 0);
    }
  };

  return (
    <div
      ref={selectRef}
      className="input__select"
      onClick={handleSelect}
      role="button"
      tabIndex={0}
    >
      <p className="input__select-value">
        {options.find(({ value }) => (value === meta.value))?.label || props.withoutValue}
      </p>
      <div className="input__select-options" onMouseLeave={handleCloseSelect}>
        {options.map((option) => (
          <span
            key={option.value}
            data-value={option.value}
            className="input__select-option"
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Checkbox = ({ children, label, label2 = null, ...props }) => (
  <label htmlFor={props.id} data-checked={props.checked} className="input input--check">
    {props.value ? (
      <Field type="checkbox" value={props.value} id={props.id} name={props.name} className="input__checkbox" />
    ) : (
      <Field type="checkbox" id={props.id} name={props.name} className="input__checkbox" />
    )}
    <ErrorMessage component="span" name={props.name} className="input__checkbox-error" />
    <span className="input__text input__text--check">
      {label}
      {children}
      {label2}
    </span>
  </label>
);

export const Radio = ({ children, name, checked, value, ...props }) => (
  <label
    htmlFor={props.id}
    data-checked={checked}
    data-payment={props.payment}
    className="input input--radio"
    onClick={props.onSelect}
  >
    <Field type="radio" id={props.id} name={name} value={value} className="input__radio" />
    <ErrorMessage component="span" name={name} className="input__radio-error" />
    <span className="input__text input__text--radio">
      {props.label}
      {children}
      {props.label2}
    </span>
  </label>
);

export const TextArea = withField(Area);
export const Select = withField(SelectInput);
export const File = withField(FileInput);

export default withField(Input);

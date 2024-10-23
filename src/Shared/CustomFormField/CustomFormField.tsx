import { useField } from "formik";
import styles from "./CustomFormField.module.scss";
import { Input } from "antd";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeFilled } from "@ant-design/icons";

interface CustomFormFieldProps {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const CustomFormField = ({ required, ...props }: CustomFormFieldProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [field, meta] = useField(props);
  const classnames = require("classnames");

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const inputType = () => {
    if (props.type === "password") return visible ? "text" : "password";
    return "text";
  };

  return (
    <div>
      <Input
        {...field}
        {...props}
        placeholder={props.placeholder}
        type={inputType()}
        status={meta.touched && meta.error ? "error" : ""}
        className={classnames(
          styles.input,
          meta.touched && meta.error && styles.errorInput
        )}
        onBlur={() => setVisible(false)}
        suffix={
          props.type === "password" &&
          (visible ? (
            <EyeFilled onClick={toggleVisibility} />
          ) : (
            <EyeInvisibleOutlined onClick={toggleVisibility} />
          ))
        }
      />
      {meta.touched && meta.error && (
        <p className={styles.errorMessage}>{meta.error}</p>
      )}
    </div>
  );
};

export default CustomFormField;

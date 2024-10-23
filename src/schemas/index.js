import * as yup from "yup";

const passwordRules = /^(?=.*[0-9])(?=.*[\W_])(?=.*[A-Z])(?=.*[a-z]).{5,}$/;
export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required field"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, {
      message:
        "Password must contain 1 uppercase, 1 lowercase, 1 number, and 1 symbol.",
    })
    .required("Required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must be matching")
    .required("Required field"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().required("Required field"),
  password: yup.string().required("Required field"),
});

import { Form, Formik, FormikHelpers } from "formik";
import { signUpSchema } from "../../schemas";
import { SignUpInitialValues } from "../../types";
import FLoatingPixelsBackground from "../../Shared/FloatingPixelsBackground/FloatingPixelsBackground";
import styles from "./SignUp.module.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { signin } from "../../routes";
import CustomFormField from "../../Shared/CustomFormField/CustomFormField";

const SignUp = () => {
  const initialValues: SignUpInitialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (
    values: SignUpInitialValues,
    { setSubmitting }: FormikHelpers<SignUpInitialValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <FLoatingPixelsBackground>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signUpSchema}
      >
        {() => (
          <Form>
            <div className={styles.container}>
              <p className={styles.title}>Welcome to Pixelcraft Studio</p>

              <div className={styles.fieldsContainer}>
                <CustomFormField
                  name="email"
                  type="text"
                  placeholder="Email"
                  required
                />
                <CustomFormField
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <CustomFormField
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
                <Button
                  block
                  htmlType="submit"
                  size="large"
                  type="primary"
                  className={styles.submitButton}
                >
                  Sign Up
                </Button>

                <div className={styles.links}>
                  <span className={styles.alreadyHaveAnAccount}>
                    Already have an account?
                  </span>
                  &nbsp;
                  <Link className={styles.signInLink} to={signin}>
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </FLoatingPixelsBackground>
  );
};

export default SignUp;

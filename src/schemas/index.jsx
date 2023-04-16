import * as Yup from "yup";

// const signuppasswordRegex =
//   /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(
      passwordRegex,
      "Password must include an uppercase letter, a number, and a special character"
    )
    .required("Please enter your password"),
});

export const loginpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(
      passwordRegex,
      "Password must include an uppercase letter, a number, and a special character"
    )
    .required("Please enter your password"),
});

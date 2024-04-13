import * as yup from "yup";

const registerFormSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Minimum first name length is 2")
    .max(200, "Maximum first name length is 200"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Minimum last name length is 2")
    .max(200, "Maximum last name length is 200"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide valid email address")
    .min(5, "Minimum email length is 5")
    .max(200, "Maximum email length is 200"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum password length is 8")
    .max(100, "Maximum password length is 100"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

type registerFormSchemaType = yup.InferType<typeof registerFormSchema>;

export { registerFormSchema, type registerFormSchemaType };

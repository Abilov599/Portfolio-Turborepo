import * as yup from "yup";

const loginFormSchema = yup.object({
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
  rememberMe: yup.boolean().optional().default(false),
});

type loginFormSchemaType = yup.InferType<typeof loginFormSchema>;

export { loginFormSchema, type loginFormSchemaType };

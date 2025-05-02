import * as yup from "yup";

export const ContactUsInitialValues = {
  contact_fname: "",
  contact_lname: "",
  contact_email: "",
  contact_phone: "",
  contact_message: "",
};

export const ContactUsValidationSchema = yup.object({
  contact_fname: yup.string().required("First name is required"),
  contact_lname: yup.string().required("Last name is required"),
  contact_email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  contact_phone: yup
    .string()
    .matches(/^[0-9+]+$/, "Phone number can only contain numbers and +")
    .required("Phone number is required"),
  contact_message: yup.string().required("Message is required"),
});

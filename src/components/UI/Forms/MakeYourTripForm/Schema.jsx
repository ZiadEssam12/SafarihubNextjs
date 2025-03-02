import * as Yup from "yup";

const initialValues = {
  fName: "",
  lName: "",
  nationality: "",
  phone: "",
  email: "",

  adults: 1,
  children: 0,
  infants: 0,

  duration: 1,
  from: new Date(),
  to: new Date(),
  month: new Date().getMonth() + 1,
  tripOption: "option1",

  budgetMin: 1,
  budgetMax: 0,
  additionalInformation: "",
};

const validationSchema = Yup.object({
  duration: Yup.number().typeError("Duration must be a number"),
  from: Yup.date().typeError("From must be a date"),
  to: Yup.date().typeError("To must be a date"),
  month: Yup.number(),
  tripOption: Yup.string(),

  fName: Yup.string()
    .required("First Name is Required")
    .typeError("First Name must be a string"),
  lName: Yup.string()
    .required("Last Name is Required")
    .typeError("Last Name must be a string"),
  nationality: Yup.string(),
  phone: Yup.string().required("Phone is Required"),
  email: Yup.string().email().required("Email is Required"),
  adults: Yup.number().min(1).required("Adults is Required"),
  children: Yup.number().typeError("Budget Min must be a number"),
  infants: Yup.number().typeError("Budget Min must be a number"),

  budgetMin: Yup.number()
    .min(1, "Budget min must be greater than or equal to 1")
    .required("Budget Min is Required")
    .typeError("Budget Min must be a number"),
  budgetMax: Yup.number()
    .min(
      Yup.ref("budgetMin"),
      "Maximum Budget must be greater than or equal to minimum budget "
    )
    .typeError("Budget max must be a number"),
  additionalInformation: Yup.string(),
});

export { initialValues, validationSchema };

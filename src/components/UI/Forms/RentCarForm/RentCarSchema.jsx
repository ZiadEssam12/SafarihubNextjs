import * as Yup from "yup";

export const RentCarDefaultValues = {
  pickUpDate: "",
  pickUpTime: "12:00", // Set default time here instead
  pickUpLocation: "",
  dropOffLocation: "",
  name: "",
  email: "",
  phone: "",
  numOfAdult: 1,
  numOfChildren: 0,
};

export const RentCarSchema = Yup.object().shape({
  pickUpDate: Yup.date()
    .min(new Date(), "Pick up date must be today or later")
    .required("Pick up date is required"),
  pickUpTime: Yup.string().required("Pick up time is required"),
  pickUpLocation: Yup.string().required("Pick up location is required"),
  dropOffLocation: Yup.string().required("Drop off location is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  numOfAdult: Yup.number().min(1).required("Number of adults is required"),
  numOfChildren: Yup.number().min(0).required("Number of children is required"),
});

"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  contact_fname: "",
  contact_lname: "",
  contact_email: "",
  contact_phone: "",
  contact_message: "",
};

function submitForm(values) {
  console.log(values);
}

const validationSchema = Yup.object({
  contact_fname: Yup.string().required("First name is required"),
  contact_lname: Yup.string().required("Last name is required"),
  contact_email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  contact_phone: Yup.string()
    .matches(/^[0-9+]+$/, "Phone number can only contain numbers and +")
    .required("Phone number is required"),
  contact_message: Yup.string().required("Message is required"),
});

export default function ContactUsForm() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full text-[#8D8D8D]  grid grid-cols-2 gap-x-12 gap-y-6"
    >
      {/* first name */}
      <div className="col-span-1">
        <label
          htmlFor="contact_fname"
          className={`${
            formik.touched.contact_fname &&
            formik.errors.contact_fname &&
            "text-red-500"
          } ${
            formik.touched.contact_fname &&
            !formik.errors.contact_fname &&
            "text-darkBlue"
          } font-medium text-xs`}
        >
          First Name
        </label>
        <input
          type="text"
          name="contact_fname"
          id="contact_fname"
          className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
          {...formik.getFieldProps("contact_fname")}
        />
        {formik.touched.contact_fname && formik.errors.contact_fname ? (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.contact_fname}
          </div>
        ) : null}
      </div>
      {/* end first name */}

      {/* Last name */}
      <div className="col-span-1">
        <label
          htmlFor="contact_lname"
          className={`${
            formik.touched.contact_lname &&
            formik.errors.contact_lname &&
            "text-red-500"
          } ${
            formik.touched.contact_lname &&
            !formik.errors.contact_lname &&
            "text-darkBlue"
          } font-medium text-xs`}
        >
          Last Name
        </label>
        <input
          type="text"
          name="contact_lname"
          id="contact_lname"
          className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
          {...formik.getFieldProps("contact_lname")}
        />
        {formik.touched.contact_lname && formik.errors.contact_lname ? (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.contact_lname}
          </div>
        ) : null}
      </div>
      {/* end Last name */}

      {/* Email name */}
      <div className="col-span-1">
        <label
          htmlFor="contact_email"
          className={`${
            formik.touched.contact_email &&
            formik.errors.contact_email &&
            "text-red-500"
          } ${
            formik.touched.contact_email &&
            !formik.errors.contact_email &&
            "text-darkBlue"
          } font-medium text-xs`}
        >
          Email
        </label>
        <input
          type="email"
          name="contact_email"
          id="contact_email"
          className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
          {...formik.getFieldProps("contact_email")}
        />

        {formik.touched.contact_email && formik.errors.contact_email ? (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.contact_email}
          </div>
        ) : null}
      </div>
      {/* end Email name */}

      {/* phone  */}
      <div className="col-span-1">
        <label
          htmlFor="contact_phone"
          className={`${
            formik.touched.contact_phone &&
            formik.errors.contact_phone &&
            "text-red-500"
          } ${
            formik.touched.contact_phone &&
            !formik.errors.contact_phone &&
            "text-darkBlue"
          } font-medium text-xs`}
        >
          Phone
        </label>
        <input
          type="tel"
          name="contact_phone"
          id="contact_phone"
          pattern="[0-9]{10,15}"
          inputMode="numeric"
          className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
          {...formik.getFieldProps("contact_phone")}
        />
        {formik.touched.contact_phone && formik.errors.contact_phone ? (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.contact_phone}
          </div>
        ) : null}
      </div>
      {/* end phone name */}

      {/* message */}
      <div className="col-span-2">
        <label
          htmlFor="contact_message"
          className={`${
            formik.touched.contact_message &&
            formik.errors.contact_message &&
            "text-red-500"
          } ${
            formik.touched.contact_message &&
            !formik.errors.contact_message &&
            "text-darkBlue"
          } font-medium text-xs`}
        >
          Message
        </label>
        <textarea
          name="contact_message"
          id="contact_message"
          className="w-full pl-0  border-[0px]  focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue placeholder:text-[14px] font-normal"
          placeholder="Type your message here..."
          {...formik.getFieldProps("contact_message")}
        />
        {formik.touched.contact_message && formik.errors.contact_message ? (
          <div className="text-red-500 text-xs">
            {formik.errors.contact_message}
          </div>
        ) : null}
      </div>

      <div className="col-span-2 flex items-center justify-end">
        <button
          type="submit"
          className="bg-[#011C2B] w-[200px] h-[54px] rounded-md text-white font-medium"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

// import { useFormik } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   contact_fname: Yup.string().required("First name is required"),
//   contact_lname: Yup.string().required("Last name is required"),
//   contact_email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   contact_phone: Yup.string()
//     .matches(/^[0-9+]+$/, "Phone number can only contain numbers and +")
//     .required("Phone number is required"),
//   contact_message: Yup.string().required("Message is required"),
// });
//
// const initialValues = {
//   contact_fname: "",
//   contact_lname: "",
//   contact_email: "",
//   contact_phone: "",
//   contact_message: "",
// };

// export default function ContactUsForm() {
//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: submitForm,
//   });

//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className="w-full text-[#8D8D8D] grid grid-cols-2 gap-x-12 gap-y-6"
//     >
//       {/* first name */}
//       <div className="col-span-1">
//         <label htmlFor="contact_fname" className="font-medium text-xs">
//           First Name
//         </label>
//         <input
//           type="text"
//           name="contact_fname"
//           id="contact_fname"
//           className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.contact_fname}
//         />
// {formik.touched.contact_fname && formik.errors.contact_fname ? (
//   <div className="text-red-500 text-xs">
//     {formik.errors.contact_fname}
//   </div>
// ) : null}
//       </div>
//       {/* end first name */}

//       {/* Last name */}
//       <div className="col-span-1">
//         <label htmlFor="contact_lname" className="font-medium text-xs">
//           Last Name
//         </label>
//         <input
//           type="text"
//           name="contact_lname"
//           id="contact_lname"
//           className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.contact_lname}
//         />
//         {formik.touched.contact_lname && formik.errors.contact_lname ? (
//           <div className="text-red-500 text-xs">
//             {formik.errors.contact_lname}
//           </div>
//         ) : null}
//       </div>
//       {/* end Last name */}

//       {/* Email */}
//       <div className="col-span-1">
//         <label htmlFor="contact_email" className="font-medium text-xs">
//           Email
//         </label>
//         <input
//           type="email"
//           name="contact_email"
//           id="contact_email"
//           className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.contact_email}
//         />
//         {formik.touched.contact_email && formik.errors.contact_email ? (
//           <div className="text-red-500 text-xs">
//             {formik.errors.contact_email}
//           </div>
//         ) : null}
//       </div>
//       {/* end Email */}

//       {/* Phone */}
//       <div className="col-span-1">
//         <label htmlFor="contact_phone" className="font-medium text-xs">
//           Phone
//         </label>
//         <input
//           type="tel"
//           name="contact_phone"
//           id="contact_phone"
//           pattern="[0-9+]*"
//           inputMode="numeric"
//           className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.contact_phone}
//         />
//         {formik.touched.contact_phone && formik.errors.contact_phone ? (
//           <div className="text-red-500 text-xs">
//             {formik.errors.contact_phone}
//           </div>
//         ) : null}
//       </div>
//       {/* end Phone */}

//       {/* Message */}
//       <div className="col-span-2">
//         <label htmlFor="contact_message" className="font-medium text-xs">
//           Message
//         </label>
//         <textarea
//           name="contact_message"
//           id="contact_message"
//           className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue placeholder:text-[14px] font-normal"
//           placeholder="Type your message here..."
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.contact_message}
//         />
//         {formik.touched.contact_message && formik.errors.contact_message ? (
//           <div className="text-red-500 text-xs">
//             {formik.errors.contact_message}
//           </div>
//         ) : null}
//       </div>
//       {/* end Message */}

//       <div className="col-span-2 flex items-center justify-end">
//         <button
//           type="submit"
//           className="bg-[#011C2B] w-[200px] h-[54px] rounded-md text-white font-medium"
//         >
//           Send Message
//         </button>
//       </div>
//     </form>
//   );
// }

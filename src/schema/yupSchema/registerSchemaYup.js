import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup.string().required("Name is required"),
  email: yup.string().email("Invalid Email").required("Email is Required"),
  phone: yup.string().min(11).max(14).required("Phone number is Required"),
  occupation: yup.string().required("Occupation is Required"),
  address: yup.object().shape({
    country: yup.string().required("Country is Required"),
    division: yup.string().required("Division is Required"),
    fullAddress: yup.string().required("Full Address is Required"),
  }),
  gender: yup.string().required("Gender Address is Required"),
  age: yup.number().required("Age Address is Required"),
});

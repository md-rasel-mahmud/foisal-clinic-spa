// add doctor information
export const inputField = [
  {
    type: "text",
    label: "First Name",
    name: "firstName",
    responsive: { xs: 12, sm: 6, md: 4 },
  },
  {
    type: "text",
    label: "Last Name",
    name: "lastName",
    responsive: { xs: 12, sm: 6, md: 4 },
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    responsive: { xs: 12, sm: 6, md: 4 },
  },
  {
    type: "text",
    label: "Address",
    name: "address",
    responsive: { xs: 12 },
    multiline: true,
    rows: 3,
  },
  {
    type: "text",
    label: "Phone Number",
    name: "phoneNumber",
    responsive: { xs: 12, sm: 6, md: 4 },
  },
  {
    type: "text",
    label: "Experience",
    name: "experience",
    adornment: { position: "end", value: "Years" },
    responsive: { xs: 12, sm: 6, md: 4 },
  },
  {
    type: "file",
    label: "Select a  Picture",
    name: "picture",
    responsive: { xs: 12, sm: 6, md: 4 },
  },
  {
    type: "select",
    label: "Specialization",
    name: "specialization",
    responsive: { xs: 12, sm: 6 },

    options: [
      { value: "Cardiologist", label: "Cardiologist" },
      { value: "Dentist", label: "Dentist" },
      { value: "ENT Specialist", label: "ENT Specialist" },
      { value: "Gynecologist", label: "Gynecologist" },
      { value: "Neurologist", label: "Neurologist" },
    ],
  },
  {
    type: "date-picker",
    label: "Birth Date",
    name: "birthDate",
    responsive: { xs: 12, sm: 6 },
  },
  {
    type: "radio",
    label: "Gender",
    name: "gender",
    responsive: { xs: 12, sm: 6 },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
  },
  {
    type: "text",
    label: "Qualification",
    name: "qualification",
    responsive: { xs: 12, sm: 6 },
  },
  {
    type: "number",
    label: "Fee",
    name: "fee",
    adornment: { position: "start", value: "BDT" },
    responsive: { xs: 12, sm: 6 },
  },
  {
    type: "number",
    label: "Rating",
    name: "rating",
    responsive: { xs: 12, sm: 6 },
  },
];

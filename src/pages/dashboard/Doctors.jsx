import { AddCircleOutline } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaArrowRight, FaCloudUploadAlt } from "react-icons/fa";
import { inputField } from "../../helper/addDoctorInputInfo";
import { doctorData } from "../../helper/doctorData";

const Doctors = () => {
  const [open, setOpen] = useState(false);

  // modal actions
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // hook form
  const { control, handleSubmit } = useForm();
  const formSubmit = (data) => console.log(data);

  return (
    <Stack gap={2}>
      {/* Modal Add doctor  */}
      <Box>
        <Button
          onClick={handleClickOpen}
          color="primary"
          variant="outlined"
          startIcon={<AddCircleOutline />}
        >
          Add Doctor
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle my={1}>Add Doctor</DialogTitle>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box component="form" onSubmit={handleSubmit(formSubmit)}>
              <DialogContent>
                <DialogContentText mb={2}>
                  <Divider textAlign="left">
                    Fill The Doctor Information
                  </Divider>
                </DialogContentText>

                <Grid spacing={2} container>
                  {inputField.map((field, index) => {
                    if (
                      field.type === "text" ||
                      field.type === "number" ||
                      field.type === "email"
                    ) {
                      return (
                        <Grid key={index} item {...field.responsive}>
                          <Controller
                            name={field.name}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                              <TextField
                                key={field.name}
                                type={field.type}
                                label={field.label}
                                name={field.name}
                                value={value}
                                onChange={onChange}
                                multiline={field.multiline}
                                rows={field.rows}
                                InputProps={
                                  field?.adornment && {
                                    startAdornment: (
                                      <InputAdornment position="end">
                                        {field.adornment?.value}
                                      </InputAdornment>
                                    ),
                                  }
                                }
                                fullWidth
                              />
                            )}
                          />
                        </Grid>
                      );
                    }
                    if (field.type === "select") {
                      return (
                        <Grid key={index} item {...field.responsive}>
                          <Controller
                            name={field.name}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                  {field.label}
                                </InputLabel>
                                <Select
                                  labelId={field.id}
                                  id={field.name}
                                  value={value}
                                  label={field.label}
                                  onChange={onChange}
                                >
                                  {field?.options?.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            )}
                          />
                        </Grid>
                      );
                    }
                    if (field.type === "file") {
                      return (
                        <Grid
                          item
                          key={index}
                          {...field.responsive}
                          spacing={2}
                          color="darkgrey"
                        >
                          <Controller
                            name={field.name}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                              <Button
                                variant="outlined"
                                component="label"
                                size="large"
                                color="inherit"
                                startIcon={<FaCloudUploadAlt />}
                                fullWidth
                                sx={{ height: "100%" }}
                              >
                                Image
                                <Box
                                  component="input"
                                  hidden
                                  accept="image/*"
                                  type="file"
                                  onChange={onChange}
                                  value={value}
                                />
                              </Button>
                            )}
                          />
                        </Grid>
                      );
                    }
                    if (field.type === "date-picker") {
                      return (
                        <Grid key={index} item {...field.responsive}>
                          <Controller
                            name={field.name}
                            control={control}
                            render={({ field: { onChange, value, ref } }) => (
                              <DatePicker
                                label={field.label}
                                inputRef={ref}
                                inputFormat="YYYY-MM-DD"
                                openTo="year"
                                views={["year", "month", "day"]}
                                value={value}
                                renderInput={(props) => (
                                  <TextField {...props} />
                                )}
                                onChange={(dateValue) =>
                                  onChange(new Date(dateValue))
                                }
                                fullWidth
                              />
                            )}
                          />
                        </Grid>
                      );
                    }
                    if (field.type === "radio") {
                      return (
                        <Grid key={index} item {...field.responsive}>
                          <Controller
                            name={field.name}
                            control={control}
                            render={({ field: { onChange, value, ref } }) => (
                              <FormControl>
                                <FormLabel>{field.label}</FormLabel>
                                <RadioGroup
                                  row
                                  onChange={onChange}
                                  value={value}
                                >
                                  {field.options?.map((option, index) => (
                                    <FormControlLabel
                                      key={index}
                                      inputRef={ref}
                                      value={option.value}
                                      control={<Radio />}
                                      label={option.label}
                                    />
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            )}
                          />
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained">
                  Add
                </Button>
              </DialogActions>
            </Box>
          </LocalizationProvider>
        </Dialog>
      </Box>

      {/* card  */}
      <Grid container spacing={2}>
        {doctorData.map((doctor, index) => (
          <Grid item key={index} sx={12} md={6} lg={4}>
            <Card>
              <CardMedia component="img" height="194" image={doctor.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {doctor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {doctor.qualification}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  endIcon={<FaArrowRight />}
                  variant="contained"
                  color="primary"
                >
                  Book Appointment
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Doctors;

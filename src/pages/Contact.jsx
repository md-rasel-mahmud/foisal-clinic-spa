import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/yupSchema/contactSchemaYup";

const Contact = () => {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);
  return (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
    >
      <Typography variant="h4" textTransform="uppercase" color="secondary.main">
        Contact Us
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        bgcolor={blueGrey[50]}
        padding={4}
        sx={{ borderRadius: ".5rem" }}
        width={"40%"}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6}>
            <Controller
              name="fullName"
              control={control}
              render={({
                fieldState: { error },
                field: { value, onChange },
              }) => (
                <TextField
                  error={error}
                  helperText={error && error.message}
                  id="name"
                  label="Name"
                  variant="outlined"
                  name="fullName"
                  fullWidth
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              control={control}
              name="email"
              render={({
                fieldState: { error },
                field: { onChange, value },
              }) => (
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  name="email"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  error={error}
                  helperText={error && error.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="phone"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="phone"
                  label="Phone Number"
                  variant="outlined"
                  type="number"
                  name="phone"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  error={error}
                  helperText={error && error.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="location"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="location"
                  label="Location"
                  variant="outlined"
                  name="location"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  error={error}
                  helperText={error && error.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="description"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="outlined-multiline-static"
                  label="Write Description"
                  multiline
                  rows={4}
                  fullWidth
                  onChange={onChange}
                  value={value}
                  error={error}
                  helperText={error && error.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              color="primary"
              size="large"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Contact;

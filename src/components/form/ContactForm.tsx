import React, { useState } from "react";
import {
  Checkbox,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import VButton from "../buttons/VButton";
import CustomTextField from "../input/CustomTextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  id: string;
  label: string;
  value: string;
  required: boolean;
}

interface Props {
  onSubmit: (email: string, message: string, isChecked: boolean) => void;
}

const ContactForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData[]>([
    { id: "name", label: "How can I contact you?", value: "", required: true },
    { id: "email", label: "Phone/email", value: "", required: true },
    { id: "message", label: "Add a message", value: "", required: true },
  ]);

  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const updatedFormData = formData.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setFormData(updatedFormData);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const missingFields = formData.filter(
      (field) => field.required && !field.value.trim()
    );

    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } else {
      const email = formData.find((field) => field.id === "email")!.value;
      const message = formData.find((field) => field.id === "message")!.value;
      onSubmit(email, message, isChecked);

      const initialFormData = formData.map((field) => ({
        ...field,
        value: "",
      }));
      setFormData(initialFormData);

      toast.success("Form submitted successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((field) => (
        <CustomTextField
          key={field.id}
          id={field.id}
          label={field.label}
          value={field.value}
          required={field.required}
          fullWidth
          onChange={(event) => handleInputChange(event, field.id)}
        />
      ))}
      <Box display="flex" alignItems="center">
        <Checkbox
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            if (e.target.checked) {
              handleDialogOpen();
            }
          }}
          sx={{
            "& .MuiSvgIcon-root": {
              width: 32,
              height: 32,
              color: "white.main",
              marginTop: "2rem",
            },
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "form.light",
            fontSize: "1rem",
            fontStyle: "normal",
            letterSpacing: "0.4px",
            marginTop: "2rem",
          }}
        >
          I agree to the processing of personal data.
        </Typography>
      </Box>
      <Box>
        <VButton
          type="submit"
          variant="contained"
          sx={{
            width: "17rem",
            padding: "1.5rem  1.5rem",
            color: "quaternary.dark",
            marginTop: "2rem",
            fontSize: "1.125rem",
            fontWeight: 800,
            borderRadius: "1rem",
            backgroundColor: "white.main",
            marginBottom: { xs: "2rem", sm: "2rem", md: "9.375rem" },
            "&:hover": {
              backgroundColor: "white.main",
            },
          }}
        >
          Send
        </VButton>
        <ToastContainer />
      </Box>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is the content of the dialog.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default ContactForm;

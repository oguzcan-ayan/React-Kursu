import { object, string} from 'yup';

const requiredField = "This area must be fulfilled.";

const contactSchema = object({
    password: string().min(5, "Password should be at least 5 characters.").required(requiredField),
    email: string().email("Please indicate a valid e-mail.").required(requiredField),
    message: string().min(5, "Message should be at least 5 characters.").required(requiredField)
  });


export default contactSchema;  
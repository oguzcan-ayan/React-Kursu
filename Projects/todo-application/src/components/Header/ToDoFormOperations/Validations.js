import * as Yup from 'yup';

const validations = Yup.object().shape({
    text : Yup.string().required("This field must be fulfilled.")
});

export default validations;
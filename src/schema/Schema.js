import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    password:yup.string().min(6).max(32).required("Password is required"),
    phone:yup.string().required("Phone is required")
});
export const signUpSchema = yup.object().shape({
    password:yup.string().min(6).max(32).required("Password is required"),
    phone:yup.string().required("Phone is required"),
    email:yup.string().email("Email is not valid").required("Email is required"),
    name:yup.string().required("Name is required"),
    city:yup.string().required("City is required"),
    country:yup.object().required('Country is required'),
    gender:yup.object().required('Gender is required'),
    date_of_birth:yup.string().required('Date of birth is required'),
    post_code:yup.string().required('Post code is required'),
    address:yup.string().required('Address is required'),
    bioData:yup.string().required('Bio data is required'),
});
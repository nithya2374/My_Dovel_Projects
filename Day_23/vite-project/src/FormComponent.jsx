import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormComponent.css';

const LoginForm = () => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number')
      .required('Phone number is required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values, actions) => {
    console.log('✔️ Submitted →', values);
    actions.setSubmitting(false);
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Login</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <label htmlFor="name">Full Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
            <ErrorMessage name="name" component="span" className="error" />

            <label htmlFor="phone">Phone Number</label>
            <Field
              type="text"
              id="phone"
              name="phone"
              placeholder="1234567890"
            />
            <ErrorMessage name="phone" component="span" className="error" />

            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
            <ErrorMessage name="email" component="span" className="error" />

            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="••••••"
            />
            <ErrorMessage name="password" component="span" className="error" />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

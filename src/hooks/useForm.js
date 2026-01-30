import { useState } from 'react';

export const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate if function provided
    let validationErrors = {};
    if (validate) {
      validationErrors = validate(values);
    }

    if (Object.keys(validationErrors).length === 0) {
      callback();
      // Optional: Reset form or keep values? User might want to resend.
      // setIsSubmitting(false); // Managed by callback
    } else {
      setErrors(validationErrors);
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setIsSubmitting
  };
};

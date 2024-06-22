// src/pages/TripDetailsPage.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TripDetailsPage = () => {
  const formik = useFormik({
    initialValues: {
      destination: '',
      duration: '',
      budget: '',
    },
    validationSchema: Yup.object({
      destination: Yup.string().required('Required'),
      duration: Yup.number().required('Required'),
      budget: Yup.number().required('Required'),
    }),
    onSubmit: values => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <div>
      <h2>Trip Details</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Destination
          <input
            type="text"
            name="destination"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.destination}
          />
          {formik.touched.destination && formik.errors.destination ? (
            <div>{formik.errors.destination}</div>
          ) : null}
        </label>
        <br />
        <label>
          Duration
          <input
            type="number"
            name="duration"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.duration}
          />
          {formik.touched.duration && formik.errors.duration ? (
            <div>{formik.errors.duration}</div>
          ) : null}
        </label>
        <br />
        <label>
          Budget
          <input
            type="number"
            name="budget"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.budget}
          />
          {formik.touched.budget && formik.errors.budget ? (
            <div>{formik.errors.budget}</div>
          ) : null}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TripDetailsPage;

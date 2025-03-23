import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be less than 50 characters")
      .required("Number is required"),
  });
  return (
    <div className={style.formWrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
          };
          addContact(newContact);
          resetForm();
        }}
      >
        <Form  className={style.form}>
          <div  className={style.formGroup}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name"  className={style.input}/>
            <ErrorMessage name="name" component="div" className={style.error} />
          </div>
          <div className={style.formGroup}> 
            <label htmlFor="number">Number</label>
            <Field type="text" id="number" name="number" className={style.input}/>
            <ErrorMessage name="number" component="div" className={style.error} />
          </div>

          <button type="submit" className={style.submitButton}>Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
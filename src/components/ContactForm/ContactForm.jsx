import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import { useRef } from "react";

const FeedBackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .transform((value) => {
      return value
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    })
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format 111-11-11")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };

    onAddContact(newContact);
    console.log(newContact);
    actions.resetForm();
  };

  const inputRef = useRef();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedBackSchema}
      >
        {({ setFieldValue }) => (
          <Form>
            <Field
              type="text"
              name="name"
              onChange={(e) => {
                const value = e.target.value
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ");
                setFieldValue("name", value);
              }}
            />
            <ErrorMessage name="name" component="span" />
            <label htmlFor="number">Phone Number</label>
            <Field name="number">
              {({ field }) => (
                <MaskedInput
                  {...field}
                  mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
                  placeholder="111-11-11"
                />
              )}
            </Field>
            <ErrorMessage name="number" component="span" />
            <button type="submit">Ad contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;

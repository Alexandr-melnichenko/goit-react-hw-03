import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

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

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="name" />
          <Field type="text" name="number" />
          <button type="submit">Ad contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

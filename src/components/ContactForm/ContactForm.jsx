import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const formData = {
      name,
      number,
    };
    onAddContact(formData);
    form.reset();
  };
  return (
    <div className={styles.divform}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formname}>
          <span>Name</span>
          <input className={styles.input} name="name" type="text" />
        </label>
        <label className={styles.formname}>
          <span>Number</span>
          <input className={styles.input} name="number" type="text" />
        </label>
        <button className={styles.addbtn}>Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;

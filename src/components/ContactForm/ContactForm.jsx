import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <label className={styles.formname}>
        <span>Name</span>
        <input className={styles.input} name="name" type="text" />
      </label>
      <label className={styles.formname}>
        <span>Number</span>
        <input className={styles.input} name="name" type="text" />
      </label>
      <button className={styles.addbtn}>Add contact</button>
    </form>
  );
};

export default ContactForm;

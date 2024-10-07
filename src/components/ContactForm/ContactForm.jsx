import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.divform}>
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
    </div>
  );
};

export default ContactForm;

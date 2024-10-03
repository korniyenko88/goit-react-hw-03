import styles from "./Contact.module.css"

const Contact = ({name, number}) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>🙍‍♂️{name}</span>
      <span>📞{number}</span>
      <button className={styles.btn} type="button">
        Delate
      </button>
    </li>
  );
}

export default Contact;

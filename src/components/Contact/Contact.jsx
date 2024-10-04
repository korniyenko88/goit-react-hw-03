import styles from "./Contact.module.css"

const Contact = ({name, number}) => {
  return (
    <li className={styles.item}>
      <div className={styles.iteminfo}>
        <span className={styles.name}>🙍‍♂️{name}</span>
        <span>📞{number}</span>
      </div>
      <button className={styles.btn} type="button">
        Delate
      </button>
    </li>
  );
}

export default Contact;

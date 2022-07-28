import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text : PropTypes.string.isRequired,
}

//App.js에서 받아오기 위함.
export default Button
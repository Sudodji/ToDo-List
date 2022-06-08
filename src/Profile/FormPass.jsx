import styles from "./Profile.module.css";
import { changePassword } from "../apiService/apiService";

const FormPass = ({ oldPass, newPass, setOldPass, setNewPass }) => {
  const handleClickChangePassword = (e) => {
    e.preventDefault();
    changePassword(oldPass, newPass);
    setOldPass("");
    setNewPass("");
  };
  return (
    <form>
      <label className={styles.check_label}>
        Старый пароль
        <input
          type="password"
          value={oldPass}
          onChange={(event) => setOldPass(event.target.value)}
        />
      </label>
      <label className={styles.check_label}>
        Новый пароль
        <input
          type="password"
          value={newPass}
          onChange={(event) => setNewPass(event.target.value)}
        />
      </label>
      <div className={styles.check_label}>
        <button onClick={handleClickChangePassword}>Изменить пароль</button>
      </div>
    </form>
  );
};
export default FormPass;

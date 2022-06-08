import { NavLink } from "react-router-dom";
import { changeProfile } from "../apiService/apiService";
import styles from "./Profile.module.css";

const FormInfo = ({ userProfile, setUserProfile }) => {
  const handleClickChangeProfile = (e) => {
    e.preventDefault();
    changeProfile(userProfile);
  };

  return (
    <form>
      <label className={styles.check_label}>
        Почта
        <input
          type="text"
          value={userProfile.email}
          onChange={(event) =>
            setUserProfile((prev) => ({ ...prev, email: event.target.value }))
          }
        />
      </label>
      <label className={styles.check_label}>
        Имя
        <input
          type="text"
          value={userProfile.name}
          onChange={(event) =>
            setUserProfile((prev) => ({ ...prev, name: event.target.value }))
          }
        />
      </label>
      <label className={styles.check_label}>
        Возраст
        <input
          type="number"
          value={userProfile.age}
          onChange={(event) =>
            setUserProfile((prev) => ({ ...prev, age: event.target.value }))
          }
        />
      </label>
      <div className={styles.button_wrapper}>
        <NavLink to="/todo"> Назад</NavLink>
        <button onClick={handleClickChangeProfile}>Сохранить</button>
      </div>
    </form>
  );
};
export default FormInfo;

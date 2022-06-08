import React, { useState, useEffect } from "react";
import { getProfile } from "../apiService/apiService";
import FormInfo from "./FormInfo";
import FormPass from "./FormPass";

const stylesWrapper = {
  div: {
    display: "flex",
    justifyContent: "center",
  },
};
const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  useEffect(() => {
    getProfile().then((data) => {
      setUserProfile({
        email: data.email,
        name: data.name,
        age: data.age,
      });
    });
  }, []);
  return (
    <div style={stylesWrapper.div}>
      <FormInfo userProfile={userProfile} setUserProfile={setUserProfile} />
      <FormPass
        oldPass={oldPass}
        setOldPass={setOldPass}
        newPass={newPass}
        setNewPass={setNewPass}
      />
    </div>
  );
};

export default Profile;

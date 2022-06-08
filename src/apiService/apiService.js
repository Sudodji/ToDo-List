const dataToken = localStorage.getItem("token");
const request = (url, method, body, dataToken) => {
  let newData = body;
  newData = JSON.stringify(body);

  return fetch(url, {
    method,
    body: newData,
    headers: {
      "Content-Type": "application/json",
      authorization: dataToken,
    },
  }).then((response) => {
    return response.json();
  });
};

const signIn = (password, email) => {
  request("http://localhost:3005/auth/sign-in", "POST", {
    password: password,
    email: email,
  })
    .then((res) => {
      console.log(res, "res");
      localStorage.setItem("token", res.token);
    })
    .catch((e) => {
      console.log(e, "error");
    });
};

const signUp = (password, email) => {
  request("http://localhost:3005/auth/sign-up", "POST", {
    password: password,
    email: email,
  })
    .then((res) => {
      console.log(res, "res");
      localStorage.setItem("token", res.token);
    })
    .catch((e) => {
      console.log(e, "error");
    });
};

const postToDo = (todoTitle, setTodos) => {
  request(
    "http://localhost:3005/todo",
    "POST",
    {
      body: todoTitle,
    },
    dataToken
  ).then((todo) => {
    setTodos((prev) => [...prev, todo]);
  });
};

const getToDoList = () => {
  return request(
    "http://localhost:3005/todo/list",
    "GET",
    undefined,
    dataToken
  );
};

const deleteToDo = (id, setTodos) => {
  request(
    `http://localhost:3005/todo/${id}`,
    "DELETE",
    undefined,
    dataToken
  ).then(() => {
    setTodos((prev) => prev.filter((elem) => id !== elem.id));
  });
};

const completeToDo = (id, status) => {
  return request(
    `http://localhost:3005/todo/${id}`,
    "PATCH",
    {
      status: status === "DONE" ? "PENDING" : "DONE",
    },
    dataToken
  );
};
const getProfile = async () => {
  return request(
    "http://localhost:3005/profile/me",
    "GET",
    undefined,
    dataToken
  );
};
const changeProfile = (userProfile) => {
  request(
    "http://localhost:3005/profile/me",
    "PATCH",
    {
      email: userProfile.email,
      name: userProfile.name,
      age: userProfile.age,
    },
    dataToken
  );
};
const changePassword = (oldPass, newPass) => {
  request(
    "http://localhost:3005/profile/me/password",
    "PATCH",
    {
      oldPassword: oldPass,
      newPassword: newPass,
    },
    dataToken
  );
};

export {
  signIn,
  signUp,
  postToDo,
  getToDoList,
  deleteToDo,
  completeToDo,
  getProfile,
  changeProfile,
  changePassword,
};

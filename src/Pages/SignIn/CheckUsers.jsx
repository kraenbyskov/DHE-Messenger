const CheckUsers = (GetAllUsers, data) => {
  return new Promise((resolve, reject) => {
    let ErrorMessage = "";

    for (let User of GetAllUsers.Data) {
      if (User.Email.toLowerCase() === data.email.toLowerCase()) {
        if (User.Password === data.password) {
          localStorage.setItem("Username", User.FirstName);
          break;
        } else {
          ErrorMessage = "You have enter the wrong password";
          break;
        }
      } else {
        ErrorMessage = "There is no user with that E-mail";
      }
    }
    resolve(ErrorMessage);
    reject("Something was wrong");
  });
};

export default CheckUsers;

import { firebase } from "../Global/Firebase/config";

const GetUserData = (user, SetUserData) => {
  if (user) {
    const ref = firebase.firestore().collection("Users").doc(user.displayName);
    ref.get().then((doc) => {
      if (doc.exists) {
        SetUserData(doc.data());
      } else {
        console.log("No such document!");
      }
    });
  }
};

export default GetUserData;

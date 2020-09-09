import { firebase } from "../../Global/Firebase/config";
import "firebase/auth";

const GetUsers = (collection) => {
  return new Promise((resolve, reject) => {
    const ref = firebase.firestore().collection(collection);
    const onCollection = (querySnapshot) => {
      const Data = [];
      querySnapshot.forEach((doc) => {
        const { Email, Password, FirstName } = doc.data();
        Data.push({
          id: doc.id,
          Email,
          Password,
          FirstName,
        });
        resolve({ Data });
      });
    };

    ref.onSnapshot(onCollection);
  });
};

export default GetUsers;

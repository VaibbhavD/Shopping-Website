import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../firebase/FirebaseConfig";

export const Loginfun = async (email, password) => {
  return signInWithEmailAndPassword(Auth, email, password);
};

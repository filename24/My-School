import { StatusCode } from "@types";
import FirebaseTools from "@utils/Firebase";
import RequestHandler from "@utils/RequestHandler"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default RequestHandler.get(async (req, res) => {
  switch (req.query.type) {
    case 'google':
      const firebase = new FirebaseTools()
      firebase.authGoogle()

      break;
    case 'facebook':

      break;

    case 'github':

      break;

    default:
      res.status(StatusCode.NotFound).json({
        data: 'Unknown authorization type allowed: google, facebook, github',
        code: StatusCode.NotFound
      })
      break;
  }
})
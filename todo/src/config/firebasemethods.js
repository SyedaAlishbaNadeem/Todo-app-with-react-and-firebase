import app from './firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase,ref, push, set, onValue } from "firebase/database";










const auth = getAuth(app);
const database = getDatabase(app);


let signUpUser = (obj) => {
  let { email, password, contact, userName } = obj;

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password, userName, contact)
      .then((userCredential) => {
        //if user get authenticate anf registered in firebase it will go in success
        const user = userCredential.user;
        // with ref we are making refrence
        const reference = ref(database, `users/${user.uid}`);
        // obj.id = user.uid;

        // with set with are sending things to data base and check with resolve that either data went there or not
        set(reference, {
email: email,
 password: password,
 userName : userName,
 uid: user.uid,
        }
          
          )
          .then(() => {
            resolve("user created successfully and send to database");
          })
          .catch((err) => {
                  reject(err);
          });
  
      })

      .catch((err) => {
          reject(err);
      });
  
  });
};














// create log in function now.......................


let loginUser = (obj) => {
  let { email, password, userName, contact } = obj;

  return new Promise ((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password, userName, contact)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const reference = ref(database, `users/${user.uid}`);

        //data is param to receive any data inside we can use any param abc etc its receving data from the object we sent from set in upper function
        // .val() is used for the proper data shown on console or screen
        //exist ( is firebase methods and check if data exist tor not gives the true false)
        onValue(reference, (e)=>{
          console.log(e.val());
         let status =  e.exists()
         console.log(status);
         if (status) {
            resolve (e.val());
         } else {
            reject ("Data not found")
         }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
     reject(errorMessage);
      });
  });
};








//send to do values to the firebase ......................

let sendTodos =(obj, uid)=>{
  const postListRef = ref(database, `todos/${uid}` );
  const newPostRef = push(postListRef);
  set(newPostRef, obj );

}


// let getData= () => {
//   const db = getDatabase();
//   const starCountRef = ref(db, 'students/');
//   onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
// console.log(data);
//   });

// }



//get todo list on the page get
//to get the data make function on the page you want to get



export { signUpUser, loginUser , sendTodos};


 
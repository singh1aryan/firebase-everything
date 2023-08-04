import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../../helper/firebase";
import { collection, doc, setDoc, getDoc, query, getDocs } from "firebase/firestore";

import { redirect } from 'next/navigation';

import { getAuth } from "firebase/auth";

export default function Home() {


  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // ...
  } else {
    // No user is signed in.
    // redirect to the login page.
    redirect('/login');
  }



  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [users, setUsers] = useState([]);

  async function getUsers() {
    // console.log(db);
    const colRef = collection(db, "users");
    const q = query(colRef);

    const res = await getDocs(q);

    var a = [];

    res.docs.forEach((doc) => {
      console.log(doc.data());
      a.push(doc.data())
    });

    setUsers(a)

  }

  return (
    <div className="bg-white w-full h-100">
      <div>Firebase</div>

      <button>Add data</button>

      <button onClick={getUsers} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Get users</button>
      {
        users.map((user) => (<div>{user.name}</div>))
      }
    </div>);
}
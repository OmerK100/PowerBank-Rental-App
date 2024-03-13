import functions, { firestore } from 'firebase-functions/v2';
import firebaseApp from './FirebaseConfig.mjs';
import { getFirestore, updateDoc, getDoc, doc, arrayUnion } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const startRental = functions.https.onRequest(async (request, response) => {

  //const userUID = request.query.uid;
  //const location = request.query.location;
  const userUID = "iZBba3TVzqQMxsWHeA7xAAldtRj2";
  const d = new Date();
  const rental = {
    date: d.getDate(),
    time: d.getTime(),
    location: "technion",
    cost: 0,
    ongoing: true
  };

  await updateDoc(doc(db, "users", userUID), {
    rentals: arrayUnion(rental)
  });

  response.send("ghdfd");

});

const stopRental = functions.https.onRequest(async (request, response) => {

  //const userUID = request.query.uid;
  //const location = request.query.location;
  const userUID = "iZBba3TVzqQMxsWHeA7xAAldtRj2";

  const obj = await getDoc(doc(db, "users", userUID));

  const rentalArrLast = obj.data().rentals[obj.data().rentals.length - 1];

  if (rentalArrLast.ongoing === true) {
    const d = new Date();
    // stop ongoing rental, calculate price
    const rental = {
      date: d.getDate(),
      time: calcTime(oldTime, newTime),
      location: rentalArrLast.location,
      cost: 10, // calculate price
      ongoing: false
    }
  }




  response.send("ggg");

  //console.log(rentalArray.data());

  /*const d = new Date();
  const rental = {
    date: d.getDate(),
    time: d.getTime(),
    location: "technion",
    cost: 0,
    ongoing: true
  };

  await updateDoc(doc(db, "users", userUID), {
    rentals: arrayUnion(rental)
  });*/

});

function calcTime(oldTime, newTime) {
  return newTime - oldTime;
}

//module.exports = { makeRental};

export { startRental, stopRental };

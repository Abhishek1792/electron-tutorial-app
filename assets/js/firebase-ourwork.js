import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'
import { getFirestore, collection, doc, getDocs, getDoc } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'
import firebaseConfig from '../../config/firebase-config.json' assert { type: "json" };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("db", db)
const querySnapshot = await getDocs(collection(db, "ourwork"));
console.log("querySnapshot", querySnapshot)

var numbers = [];
querySnapshot.forEach((doc) => {
    numbers.push(doc.data())
})

var adsadshasdhask = document.querySelector('#ourworkId');
adsadshasdhask.innerHTML = '<ul>' + numbers.map(function (object) {
    return '<li>' + object?.backgroundImage + '</li>';
}).join('') + '</ul>';


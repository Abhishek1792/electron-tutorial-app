import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'
import { getFirestore, collection, doc, getDocs, getDoc } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'
import firebaseConfig from '../../config/firebase-config.json' assert { type: "json" };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "about"));

var numbers = [];
querySnapshot.forEach((doc) => {
    numbers.push(doc.data())
})
if (navigator.onLine) {

    localStorage.setItem("aboutObj", JSON.stringify(numbers));
}

const aboutArr = [...JSON.parse(localStorage.getItem("aboutObj"))];

var adsadshasdhask = document.querySelector('#app');
adsadshasdhask.innerHTML = '<ul>' + aboutArr.map(function (object) {
    return '<li>' + object?.backgroundImage + '</li>';
}).join('') + '</ul>';
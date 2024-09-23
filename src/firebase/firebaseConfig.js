import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBa3TurvV9Gyu5KIwNSisGAg6u6sePncbQ",
    authDomain: "baitapbuoi5-lab2.firebaseapp.com",
    projectId: "baitapbuoi5-lab2",
    storageBucket: "baitapbuoi5-lab2.appspot.com",
    messagingSenderId: "978100299048",
    appId: "1:978100299048:web:375aa419a1f7070fea5c1d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
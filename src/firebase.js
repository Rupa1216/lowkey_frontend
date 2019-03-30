import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYSj_VPC2aeB5SxMG0IuA2Mc-mxDdRBtc",
    authDomain: "lowkey-frontend.firebaseapp.com",
    databaseURL: "https://lowkey-frontend.firebaseio.com",
    projectId: "lowkey-frontend",
    storageBucket: "lowkey-frontend.appspot.com",
    messagingSenderId: "317408630309"
};

app.initializeApp(config);

export default app;
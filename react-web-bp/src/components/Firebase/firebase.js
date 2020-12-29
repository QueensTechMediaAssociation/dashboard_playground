import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
    apiKey: "AIzaSyBU4tDLAWOzSZzl6GEnKbT7capb7M6TwPQ",
    authDomain: "dashboard-c4dff.firebaseapp.com",
    projectId: "dashboard-c4dff",
    storageBucket: "dashboard-c4dff.appspot.com",
    messagingSenderId: "866550374005",
    appId: "1:866550374005:web:f811653939e60d9cd6a23c",
    measurementId: "G-HD2B7FB6KT"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        //app.analytics();
    }


    emailSignUp = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    logEmailSignUp = (email) =>
        app.analytics().logEvent('user_signup', {user_email: email})
    
    emailSignIn = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    
    signOut = () =>
        this.auth.signOut();

    resetPWD = email => this.auth.sendPasswordResetEmail(email);

    updatePWD = password =>
        this.auth.currentUser.updatePassword(password);


}

export default Firebase;
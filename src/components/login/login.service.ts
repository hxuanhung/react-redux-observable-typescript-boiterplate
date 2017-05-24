import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs/Observable';
import * as types from '../../constants/types';

export const login = async (): firebase.Promise<any> => {
  initFirebase();
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope(`gist`);
  return await firebase
    .auth()
    .signInWithPopup(provider);

};

const initFirebase = async () => {
  const config = {
    apiKey: 'AIzaSyCMlcDAcmY8kWLUhPxCZU1fKDCwaDuo1bw',
    authDomain: 'megastars-a7b57.firebaseapp.com',
    databaseURL: 'https://megastars-a7b57.firebaseio.com',
    projectId: 'megastars-a7b57',
    storageBucket: 'megastars-a7b57.appspot.com',
  };

  await firebase.initializeApp(config);
};

import { combineEpics } from 'redux-observable';
import { epics as loginEpics } from '../components/login';

const rootEpic = combineEpics(loginEpics);

export default rootEpic;

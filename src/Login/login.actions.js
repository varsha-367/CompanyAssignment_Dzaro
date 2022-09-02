import { SETLOGINCRED} from './login.types';

export const loginCredential = (username, password) => {
    return {
        type: SETLOGINCRED,
        payload: { username, password } ,
    }
}
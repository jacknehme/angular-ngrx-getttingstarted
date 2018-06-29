import { User } from '../user';

export interface UserState {
    maskUserName: boolean;
}

export function reducer(state, action) {
    switch (action.type) {
        case 'MASK_USER_NAME':
            return {
                ...state,
                maskUserName: action.payload
            };
        default:
            return state;
    }
}

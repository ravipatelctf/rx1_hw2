import { ADD_PROFILE, REMOVE_PROFILE, CALCULATE_AVERAGE_AGE  } from "./actions";

const initialState = { profiles: [] }

const profileReducer = ( state = initialState, action) => {
    switch(action.type) {
        case ADD_PROFILE:
            return { ...state, profiles: [...state.profiles, action.payload] };
        case REMOVE_PROFILE:
            return { ...state, profiles: state.profiles.filter((profile) => profile.id !== action.payload) };
        case CALCULATE_AVERAGE_AGE:
            const avgAge = state.profiles.reduce((acc, curr) => {
                acc += curr.age / state.profiles.length;
                return acc;
            }, 0);
            return { ...state, averageAge: avgAge };
        default:
            state;
    }
}

export default profileReducer;
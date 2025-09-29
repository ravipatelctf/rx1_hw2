

export const ADD_PROFILE = "profile/added";
export const REMOVE_PROFILE = "profile/removed";
export const CALCULATE_AVERAGE_AGE = "profile/calculateAverageAge";


export const addProfile = (profile) => {
    return {
        type: ADD_PROFILE,
        payload: profile
    };
}

export const removeProfile = (profileId) => {
    return {
        type: REMOVE_PROFILE,
        payload: profileId
    };
}

export const calculateAverageAge = () => {
    return {
        type: CALCULATE_AVERAGE_AGE,
    }
}
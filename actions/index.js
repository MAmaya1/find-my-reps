import axios from 'axios';
import { GOOGLE_KEY } from 'react-native-dotenv';

export const GET_REPS_START = 'GET_REPS_START';
export const GET_REPS_SUCCESS = 'GET_REPS_SUCCESS';
export const GET_REPS_FAILURE = 'GET_REPS_FAILURE';

export const getReps = address => dispatch => {
    dispatch({ type: GET_REPS_START });
    return axios
        .get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${GOOGLE_KEY}&address=${address}`)
        .then(res => {
            dispatch({
                type: GET_REPS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log('ERROR ===>', err)
            dispatch({
                type: GET_REPS_FAILURE,
                payload: err.response.data.error
            })
        })
}
import axios from 'axios';

export const GetData = (URL) => {
    return  axios.get(URL);
}


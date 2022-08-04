import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {
        data
    } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '95af1b8df9msha64293a1959214dp149ff2jsn5fc939b342c7',
        },
    });

    return data;
}

// export const options = {
//     method: 'GET',
//     url: 'https://bayut.p.rapidapi.com/properties/list',
//     params: {
//         locationExternalIDs: '5002',
//         purpose: 'for-rent',
//         hitsPerPage: '6',  
//     },
//     headers: {
//         'X-RapidAPI-Key': '95af1b8df9msha64293a1959214dp149ff2jsn5fc939b342c7',
//         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//     }
// };
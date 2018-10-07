import axios from 'axios';

export const list = (page, lang) => {
    return axios(`/data/${lang}/${page}.json`, {});
};

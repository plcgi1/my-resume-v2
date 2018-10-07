import axios from 'axios';

export const list = (lang) => {
    return axios(`/data/${lang}/pages.json`, {});
};

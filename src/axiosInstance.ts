// src/axiosConfig.ts
import axios from 'axios';
import { store } from './stores'; // Assurez-vous que le chemin d'importation est correct
import { setExpired } from './stores/slices/authTokenSlice';

const axiosInstance = axios.create({
  baseURL: 'https://your.api/baseurl', // Remplacez par votre URL de base d'API
  // Vous pouvez ajouter d'autres configurations par défaut ici
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const state = store.getState();
    const token = state.authToken.token;

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        ...config.headers,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Retournez directement les données
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Dispatch l'action setExpired si le token est expiré
      store.dispatch(setExpired());
    }

    // Vous pouvez choisir de retourner une erreur personnalisée ou l'erreur complète
    // Retournez directement l'objet d'erreur (si vous avez besoin de l'objet de réponse complet)
    return Promise.reject(error.response ? error.response.data : error.message);
  }
);

export default axiosInstance;

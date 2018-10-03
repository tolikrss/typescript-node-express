import axios from 'axios';

const apiPrefix = 'http://localhost:3999';

const axiosClient = axios.create( {
    baseURL: apiPrefix,
} );

export const getAllFilms = ( ...args: any[] ): Promise<any[]> => axiosClient.get( '/films', ...args ).then( res => res.data );

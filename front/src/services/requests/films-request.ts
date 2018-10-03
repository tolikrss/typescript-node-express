import axios from 'axios';

export const getAllFilms = ( ...args: any[] ): Promise<any> => axios.get( '/', ...args );
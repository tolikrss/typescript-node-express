import { Schema } from './schema';

export class FilmData extends Schema<FilmData> {
    public title: string;
    public releaseYear?: number;
    public format?: string;
    public stars?: Array<any>;
}
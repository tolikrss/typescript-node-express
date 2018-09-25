import { Schema, model, Document, Model } from 'mongoose';
import { FilmData } from '../../types/film.model';

export interface IFilmDoc extends Document {
    title: string;
    releaseYear?: number;
    format?: string;
    stars?: Array<any>;
}

const schema = new Schema( {
    title: { type: String, required: true },
    releaseYear: { type: Number },
    format: { type: String },
    stars: { type: Array }
} );

export const Film: Model<IFilmDoc> = model<IFilmDoc>( 'Film', schema );
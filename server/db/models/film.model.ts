import * as mongoose from 'mongoose';


const FilmSchema = new mongoose.Schema( {
    title: { type: String, required: true },
    releaseYear: { type: Number },
    format: { type: String },
    stars: { type: Array }
} );

export const Film = mongoose.model( 'Film', FilmSchema );
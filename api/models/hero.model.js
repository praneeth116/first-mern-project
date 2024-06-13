import mongoose from "mongoose";

const Schema2 = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
            unique: true
        },
        place: {
            type: String,
            required:true,
            unique: true
        },
        year: {
            type: Number,
            required: true,
        }
    }, {timestamps: true}
);

const SuperHero = mongoose.model('Hero', Schema2);

export default SuperHero;
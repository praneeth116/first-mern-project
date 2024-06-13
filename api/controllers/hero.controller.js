import SuperHero from "../models/hero.model.js";

const hero = async(req, res, next) => {
    const {name, place, year} = req.body;
    const newHero = new SuperHero({name, place, year});

    try{
        await newHero.save();
        res.status(200).json({bitch: "SuperHero created successfully!"});

    }catch(error){
        next(error);
    }
}

export default hero;
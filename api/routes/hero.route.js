import express from 'express';
import hero from '../controllers/hero.controller.js';

const router = express.Router();

router.post("/create",hero);

export default router;
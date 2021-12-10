import express from "express";
import routers from "../routes/routes";

import dotenv from 'dotenv';

import cors from 'cors';

dotenv.config()

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        
        this. corsHandler();
        this.Routes();
    }

    private Routes() {
        this.app.use(routers)
    }

    private corsHandler() {
        const allowedOrigins = ['http://localhost:3333'];
        const options: cors.CorsOptions = {
            origin: allowedOrigins
        }
        this.app.use(cors(options))
        this.app.use(express.json())
    }

} 

export default new App().app
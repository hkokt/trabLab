import express, { Application, json } from "express";
import router from "./router";

export default class App {

    public server: Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware(): void {
        this.server.use(json());
    }

    private router(): void {
        this.server.use(router);
    }

}
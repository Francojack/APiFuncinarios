import dotenv from 'dotenv';
import express from 'express';
import homeRouts from './src/routes/homeRouts';

class App {
  constructor() {
    this.app;
    this.middlwares;
    this.routes;
  }

  middlwares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouts);

  }
}

export default new App().app;

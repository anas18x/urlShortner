import express from "express";
import { Router } from "express";
import { URL } from "../models/url.models.js";
import generateShortURL from "../controllers/url.controllers.js";


Router.post(/url,generateShortURL)
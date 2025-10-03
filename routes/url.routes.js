import express from "express";
import { Router } from "express";
import { URL } from "../models/url.models.js";
const urlRouter = Router()
import { generateShortURL } from "../controllers/url.controllers.js";
import { redirectURL } from "../controllers/url.controllers.js";

urlRouter.post("/url",generateShortURL);
urlRouter.get("/:shortId",redirectURL)

export default urlRouter;
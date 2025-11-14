import express from "express";
import { Router } from "express";
const urlRouter = Router()
import { generateShortURL } from "../controllers/url.controllers.js";
import { redirectURL } from "../controllers/url.controllers.js";
import { urlValidator } from "../middlewares/urlValidator.middleware.js";
import { shortIDValidator } from "../middlewares/urlValidator.middleware.js";


urlRouter.post("/url",urlValidator,generateShortURL);
urlRouter.get("/:shortId",shortIDValidator,redirectURL)

export default urlRouter;
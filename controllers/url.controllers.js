import { nanoid } from "nanoid";
import { URL } from "../models/url.models.js";

async function generateShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ msg: "url not found" });
  }
  const findURL = await URL.findOne({ redirectURL: body.url })
  if(findURL){
    return res.status(200).json({ shortUrl: `http://localhost:3000/${findURL.shortId}` });
  }
  const shortID = nanoid(8);
  try {
      await URL.create({
      shortId: shortID,
      redirectURL: body.url,
  });
  } catch (error) {
     res.status(400).json({msg:"error while saving data"})
  }

  return res.status(200).json({shortUrl: `http://localhost:3000/${shortID}`});
}


async function redirectURL(req, res) {
  try {
    const shortId = req.params.shortId;
    const response = await URL.findOne({ shortId });
    if (!response) res.send("URL not Found");
    res.redirect(response.redirectURL);
  } catch (error) {
    console.log(error, "Error while redirecting");
  }
}

export { generateShortURL, redirectURL };

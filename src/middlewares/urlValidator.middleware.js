import {z} from "zod"

export const urlValidator =  (req, res, next) => {
  const requiredUrl = z.string().url().refine((val) => {
  try {
    const u = new URL(val);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}, { message: "Only HTTP(S) URLs are allowed" });

 const parsedData = requiredUrl.safeParse(req.body.url)
 if(!parsedData.success){
    return res.status(400).json({
        error: parsedData.error.format()
    })
 }

 req.validatedData = parsedData.data
 next()

}


export const shortIDValidator =  (req,res,next) => {
    const requiredShortId = z.object({
    shortId: z.string()
    .min(4, "Short ID must be at least 4 characters")
    .max(20, "Short ID must be at most 20 characters")
    .regex(/^[a-zA-Z0-9_-]+$/, "Short ID can only contain letters, numbers, - and _")
   })

    const parsedData = requiredShortId.safeParse(req.params)
    if(!parsedData.success){
    return res.status(400).json({
        error: parsed.error.flatten().fieldErrors
    })
 }

 req.validatedData = parsedData.data
 next()

}

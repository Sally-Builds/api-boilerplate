import { NextFunction, Request, Response, Router } from "express";
import BadRequestError from "../../errors/BadRequestError";


const router = Router();


router.get('/', (_, res: Response, next: NextFunction) => {
    throw new BadRequestError('This is a bad request Error')
    res.status(200).json({ data: "Success" })
})

export default router
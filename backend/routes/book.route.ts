import express, { NextFunction, Router, Response, Request } from "express";
import { all } from "../controllers/book.controller";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  all(req, res).catch(next);
});

export default router;

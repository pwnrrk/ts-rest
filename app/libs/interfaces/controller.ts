import { Request, Response } from "express";

type Controller = {
  [key: string]: (req: Request, res: Response) => void;
};

export default Controller;

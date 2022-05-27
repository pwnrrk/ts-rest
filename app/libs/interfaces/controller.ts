import { Request, Response } from "express";
type Controller = {
  [key: string]: (req: Request, res: Response) => void | Promise<void>;
};

export default Controller;

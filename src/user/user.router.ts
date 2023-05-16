import express from "express";
import type { Request,Response } from "express";
import { body,validationResult } from "express-validator";


import * as UserService from "./user.service"

export const userRouter = express.Router();

// GET: List of all Users

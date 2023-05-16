import * as express from "express";
import type { Request,Response } from "express";
import { body,validationResult } from "express-validator";


import * as UserService from "./user.service"
import { request } from "http";

export const userRouter = express.Router();

// GET: List of all Users
userRouter.get("/", async(request: Request, response:Response) =>{
    try{
        const users = await UserService.listUser()
        return response.status(200).json(users)
    }catch(error:any){
        return response.status(500).json(error.message);
    }
})

userRouter.get("/:id",async (request:Request, response:Response)=>{
    const id : number = parseInt(request.params.id, 10);
    try{
        const user = await UserService.findOneUser(id)
        if(user){
            return response.status(200).json(user);
        }
        return response.status(404).json("User could not be found");
    }
    catch(error: any){
        return response.status(500).json(error.message);
    }
})
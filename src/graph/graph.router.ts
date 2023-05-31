import  express from 'express';
import {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';
import * as GraphService from './graph.service';
import {request} from 'http';

const graphRouter = express.Router();

graphRouter.get('/', async (request: Request, response: Response) => {
    try {
        const graph = await GraphService.listGraph();
        response.status(200).json(graph);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

graphRouter.post('/', async (request: Request, response: Response) => {
const errors = validationResult(request);
if(!errors.isEmpty()){
    return response.status(400).json({errors: errors.array()});
}
    try {
        const graph = request.body;
        const newGraph = await GraphService.createGraph(graph);
       return response.status(201).json(newGraph);
        
    }
    catch (err) {
     return   response.status(500).send(err.message);
    }
});
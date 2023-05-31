import { db } from "../utils/db.server";

type Graph_Table = {
    graphValue_x: string;
    graphValue_y: string;
    dataCircle: string;
    dataScatter: string;
    dataRadar: string,
    graphType: string;
}


export const listGraph = async (): Promise<Graph_Table[]> =>{
    return db.graph_Table.findMany({
        select:{
            graphValue_x:true,
            graphValue_y: true,
            dataCircle: true,
            dataScatter: true,
            dataRadar: true,
            graphType: true
        }
    })
}

export const createGraph = async (graph: Graph_Table): Promise<Graph_Table> =>{
    const {graphValue_x, graphValue_y, dataCircle, dataScatter, dataRadar, graphType} = graph;
        return db.graph_Table.create({
            data:{
                graphValue_x,
                graphValue_y,
                dataCircle,
                dataScatter,
                dataRadar,
                graphType
            }
        }, 
        {
            select:{
                graphValue_x:true,
                graphValue_y: true,
                dataCircle: true,
                dataScatter: true,
                dataRadar: true,
                graphType: true
            }
        })
}

export const deleteGraph = async (graph: Graph_Table): Promise<Graph_Table> =>{
    const {graphValue_x, graphValue_y, dataCircle, dataScatter, dataRadar, graphType} = graph;
        return db.graph_Table.delete({
            where:{
                graphValue_x,
                graphValue_y,
                dataCircle,
                dataScatter,
                dataRadar,
                graphType
            }
        }, 
        {
            select:{
                graphValue_x:true,
                graphValue_y: true,
                dataCircle: true,
                dataScatter: true,
                dataRadar: true,
                graphType: true
            }
        })
}

export const updateGraph = async (graph: Graph_Table): Promise<Graph_Table> =>{
    const {graphValue_x, graphValue_y, dataCircle, dataScatter, dataRadar, graphType} = graph;
        return db.graph_Table.update({
            where:{
                graphValue_x,
                graphValue_y,
                dataCircle,
                dataScatter,
                dataRadar,
                graphType
            }
        },
        {
            data:{
                graphValue_x,
                graphValue_y,
                dataCircle,
                dataScatter,
                dataRadar,
                graphType
        }, 
        
             select:{
                graphValue_x:true,
                graphValue_y: true,
                dataCircle: true,
                dataScatter: true,
                dataRadar: true,
                graphType: true
            }
        })
    }
          
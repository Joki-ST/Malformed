import { group } from "console";
import { db } from "../src/utils/db.server";


enum GraphType {
    BarGraph,
    LineGraph,
    CircleGraph,
    ScatterGraph,
    RadarGraph
}



type User_Table = {
 username: string;
 password: string;
}



type Graph = {
    graphValue_x: string;
    graphValue_y: string;
    dataCircle: string;
    dataScatter: string;
    dataRadar: string,
    graphType: string;
}

type User_has_Graph ={
    userId: number;
    graphId: number;
}


async function seed() {
    await Promise.all(
        createUsers().map((user)=>{
            return db.user_Table.create({
                data:{
                    username:user.username,
                    password:user.password
                },
            })
        }
    ));
    const user = db.user_Table.findMany();

    await Promise.all(
        createGraph().map((graph)=>{
            return db.graph.create({
                data:{
                    graphValue_x: graph.graphValue_x,
                    graphValue_y: graph.graphValue_y,
                    dataCircle: graph.dataCircle,
                    dataScatter: graph.dataScatter,
                    dataRadar: graph.dataRadar,
                    graphType: graph.graphType
                }

            })
        })

    )
}

function createUsers(): Array<User_Table>{
    return [
        {
            'username':'a Espada',
            'password':'xxxxxxxxx'
        },
        {
            'username':'OKI',
            'password':'xxxxxxxxx'
        }]
}

function createGraph(): Array<Graph>{
    return [
        {
            'graphValue_x' : "1",
            'graphValue_y' : "2",
            'dataCircle' : "adsasdsa",
            'dataScatter' : "asdsadad",
            'dataRadar': "assaaasaas",
            'graphType' : "BarGraph"
        },
        {
            'graphValue_x' : "1",
            'graphValue_y' : "2",
            'dataCircle' : "adsasdsa",
            'dataScatter' : "asdsadad",
            'dataRadar': "assaaasaas",
            'graphType' : "BarGraph"
        }
    ]
}

seed();
import { db } from "../utils/db.server";


type User_Table ={
    id: number;
    username: string;
    email: string;
}



export const listUser = async (): Promise<User_Table[]> =>{
    return db.user_Table.findMany({
        select:{
            id:true,
            username: true,
            email:true,
        }
    })
}

export const findOneUser =async (id:number):Promise<User_Table> => {
    return db.user_Table.findUnique({
        where:{
            id:id
        }
    })
    
}
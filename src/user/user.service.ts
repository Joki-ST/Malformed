import { db } from "../utils/db.server";


type User_Table ={
    id: number;
    username: string;
    password: string;
    email: string;
}



export const listUser = async (): Promise<User_Table[]> =>{
    return db.user_Table.findMany({
        select:{
            id:true,
            username: true,
            password: true,
            email:true,
        }
    })
}

export const findOneUser =async (id:number):Promise<User_Table> => {
    return db.user_Table.findUnique({
        where:{
            id:id
        },
        select:{
            id:true,
            username:true,
            password: true,
            email:true
        }
    })
    
}

export const createUser = async (user: Omit<User_Table,"id">): Promise<User_Table> =>{
    const {username, password, email} = user;
    return db.user_Table.create({
        data:{
            username,
            password,
            email,
        },
        select:{
            id: true,
            username:true,
            password:true,
            email:true
        }
    })
}

export const updateUser = async (user: Omit<User_Table,"id">,id:number): Promise<User_Table> => {
    const {username,email} = user;
    return db.user_Table.update({
        where:{
            id,
        },
        data:{
            username,
            email
        },
        select:{
            id:true,
            username:true,
            password:true,
            email:true,
        }
    })
}
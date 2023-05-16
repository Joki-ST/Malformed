import { db} from "src/utils/db.server";


type User_Table ={
    id: number;
    username: string;
    //email: string;
}



export const listUser = async (): Promise<User_Table[]> =>{
    return db.user_Table.findMany({
        select:{
            id:true,
            username: true,
            //email:true,
        }
    })
}
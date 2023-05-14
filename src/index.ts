import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    //await prisma.user_Table.deleteMany();
    /*
    await prisma.user_Table.create({
        data:{
            username: 'Jovan',
            password: 'xxxxxxx'
        }
    })
    const allUser = await prisma.user_Table.findMany()
    console.log(allUser);
    */
    const allUser = await prisma.user_Table.findMany()
}

main()
.then(async() =>{
    await prisma.$disconnect()
})
.catch(async(e)=>{
    console.error(e)
    await prisma.$disconnect
    process.exit(1)
})

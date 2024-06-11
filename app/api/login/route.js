import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const POST = async (req) => {   
    try{
        const {email,password} = await req.json()
        const userExist = await prisma.users.findFirst({
            where:{
                email:email,
                password:password
            }
        })
        if(!userExist){
            return new Response(null,{status:404})
        }
        else{
            return new Response(null,{status:200})
        }
    }catch(err){
        console.log(err)
        return new Response(null,{status:500})
    }
}
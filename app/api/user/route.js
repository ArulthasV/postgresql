import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const POST = async (req) => {   
    try{
        const {email,password} = await req.json()
        const userExist = await prisma.users.findUnique({
            where:{
                email:email
            }
        })
        if(!userExist){
            const result = await prisma.users.create({
                data:{
                    email,
                    password
                }
            })
            return new Response(null,{status:201})
        }
        else{
            return new Response(null,{status:400})
        }
    }catch(err){
        console.log(err)
        return new Response(null,{status:500})
    }
}
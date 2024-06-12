import { pool } from "@utils/database"

export const POST = async (req) => {   
    try{
        const {email,password} = await req.json()
        const userExist = await pool.query('select * from users where email=$1 and password=$2',[email,password])
        if(userExist.rows.length>0){
            return new Response(null,{status:200})
        }
        else{
            return new Response(null,{status:404})
        }
    }catch(err){
        console.log(err)
        return new Response(null,{status:500})
    }
}
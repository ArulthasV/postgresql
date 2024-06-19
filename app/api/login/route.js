import { pool } from "@utils/database"
import bcrypt from "bcrypt"

export const POST = async (req) => {   
    try{
        const {email,password} = await req.json()
        const userExist = await pool.query('select * from users where email=$1',[email])
        if(userExist.rows.length>0){
            const user = userExist.rows[0]
            const isPasswordValid = await bcrypt.compare(password,user.password)
            if(isPasswordValid){
                return new Response(null,{status:200})
            }
            else{
                return new Response(null,{status:404})
            }
        }
        else{
            return new Response(null,{status:404})
        }
    }catch(err){
        console.log(err)
        return new Response(null,{status:500})
    }
}
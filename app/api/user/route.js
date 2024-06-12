import {pool} from "@utils/database"

export const POST = async (req) => {   
    try{
        const {email,password} = await req.json()
        const userExist = await pool.query('select * from users where email=$1',[email])
        
        if(userExist.rows.length>0){
            return new Response(null,{status:409})
        }
        else{
            const result = await pool.query('insert into users(email,password) values($1,$2)',[email,password])
            return new Response(null,{status:201})
        }
    }catch(err){
        console.log(err)
        return new Response(null,{status:500})
    }
}
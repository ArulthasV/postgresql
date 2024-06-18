import { pool } from "@utils/database";

export const POST = async (req) => {
    try{    
        const data = await req.json()
        const result = await pool.query('select dpg.find_supplier($1)',[data.organizationId])
        if(result.rows.length>0){
            return new Response(null,{status:409})
        }
        else{
            await pool.query('select dpg.insert_supplier($1)',[data])
            return new Response(null,{status:201})
        }


    }catch(err){
        return new Response(null,{status:500})
    }
}
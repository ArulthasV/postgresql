import { pool } from "@utils/database";

export const POST = async (req) => {
    let code,org_id,org_name
    try{    
        const data = await req.json()
        const result = await pool.query('CALL "Jaffna_dev"."SP_JAT_REF_SUPPLIER_FIND_SUPPLIER"($1,$2,$3,$4)',[data.organizationId,code,org_id,org_name])
        if(result.rowCount){
            return new Response(null,{status:409})
        }
        else{
            await pool.query('CALL "Jaffna_dev"."SP_JAT_REF_SUPPLIER_INSERT"($1)',[data])
            return new Response(null,{status:201})
        }

    }catch(err){
        console.log(err.message);
        return new Response(null,{status:500})
    }
}
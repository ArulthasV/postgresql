import { pool } from "@utils/database"

export const GET = async ( req,{params} ) => {
    try{
        let data
        const {code} = params
        const result = await pool.query('CALL "Jaffna_dev"."SP_JAT_REF_SUPPLIER_GET_ONE_SUPPLIER"($1,$2)',[code,data])
        return new Response(JSON.stringify(result),{status:200})
    }catch(err){
        console.log(err.message);
        return new Response(null,{status:500})       
    }
}
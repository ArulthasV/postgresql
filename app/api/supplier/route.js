import { pool } from "@utils/database";

export const POST = async (req) => {
    try{   
        const client = await pool.connect();
        console.log('Database connected successfully');
        client.release(); 
        // const data = await req.json()
        // const result = await pool.query('SELECT "Jaffna_dev"."FN_JAT_REF_SUPPLIER_FIND_SUPPLIER"($1)',[data.organizationId])
        // console.log(result);
        // if(result.rows.length>0){
        //     return new Response(null,{status:409})
        // }
        // else{
        //     await pool.query('SELECT "Jaffna_dev"."FN_JAT_REF_SUPPLIER_INSERT"($1)',[data])
        //     return new Response(null,{status:201})
        // }


    }catch(err){
        console.log(err.message);
        return new Response(null,{status:500})
    }
}
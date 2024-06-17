import { pool } from "@utils/database";

export const POST = async (req) => {
    try{    
        const {
            accountName,
            accountNumber,
            address,
            bank,
            branch,
            contactPerson,
            email,
            employeeEmail,
            employeeForContact,
            employeeRelationType,
            mobile,
            organizationId,
            payType,
            productType,
            status,
            supplierName,
            telephone,
            website

        } = await req.json()
        const result = await pool.query('select * from dpg.ref_supplier where organization_id=$1',[organizationId])
        if(result.rows.length>0){
            return new Response(null,{status:409})
        }
        else{
            await pool.query('insert into dpg.ref_supplier(supplier_name,address,organization_id,product_type,contact_person,telephone_no,mobile_no,email,website,pay_type,employee_for_contact,employee_relation_type,employee_email,status,acc_name,acc_number,bank,branch) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)',[supplierName,address,organizationId,productType,contactPerson,telephone,mobile,email,website,payType,employeeForContact,employeeRelationType,employeeEmail,status,accountName,accountNumber,bank,branch])
            return new Response(null,{status:201})
        }


    }catch(err){
        return new Response(null,{status:500})
    }
}
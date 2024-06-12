import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { pool } from "@utils/database";

const handler = NextAuth({
  providers: [
    CredentialsProvider({

      async authorize(credentials) {

        const res = await fetch(`${process.env.NextAuth_URL}/api/login`, {
          method: 'POST',
          body: JSON.stringify({email:credentials.email,password:credentials.password}),
          headers: { "Content-Type": "application/json" }
        })
       
        if (res.status === 200) {      
          return credentials
        }
        else{
          return null
        }
        
      },
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if(user.csrfToken){
        return true
      }
      else{
        try {
          const userExists = await pool.query('select * from googleusers where provider=$1',[account.provider])
  
          if (userExists.rows.length === 0) {
            const name = user.name
            const email = user.email
            const image = user.image
            const provider = account.provider

            const result = await pool.query('insert into googleusers(name,email,image,provider) values($1,$2,$3,$4)',[name,email,image,provider])
          }
  
          return true;
        } catch (error) {
          console.log("Error checking if user exists: ", error.message);
          return false;
        }
      }

    },
  },
});

export { handler as GET, handler as POST };

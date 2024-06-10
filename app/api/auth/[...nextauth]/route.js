import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

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
        username: { label: "Email", type: "email" },
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
          const userExists = await prisma.googleusers.findUnique({
            where:{
              provider:account.provider
            }
          })
  
          if (!userExists) {
            const name = user.name
            const email = user.email
            const image = user.image
            const provider = account.provider

            const result = await prisma.googleusers.create({
              data:{
                name,
                email,
                image,
                provider
              }
            })
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

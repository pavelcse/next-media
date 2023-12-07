import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Email", type: "email", placeholder: "Enter email" },
          password: { label: "Password", type: "password", placeholder: "Password" }
        },
        async authorize(credentials, req) {
          if(!credentials?.username || !credentials?.password) return null;
  
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.username
            }
          });
    
          if(!user) return null;
          const passMatch = await bcrypt.compare(credentials.password, user.password!);
          return passMatch ? user : null;
        }
      }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
      ],
      session: {
        strategy: 'jwt'
      }
  }
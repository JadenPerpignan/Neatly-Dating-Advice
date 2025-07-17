import NextAuth from "next-auth";
import type { NextAuthOptions, SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

// Only import Prisma-related modules at runtime, not during build
let PrismaAdapter: any;
let prisma: any;

if (typeof window === 'undefined') {
  // Server-side only
  try {
    PrismaAdapter = require("@auth/prisma-adapter").PrismaAdapter;
    prisma = require("./prisma").prisma;
  } catch (error) {
    console.warn('Prisma not available during build:', error);
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter && prisma ? PrismaAdapter(prisma) : undefined,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || !prisma) {
          return null;
        }
        
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
          if (user && await compare(credentials.password, user.password)) {
            return user;
          }
        } catch (error) {
          console.error('Auth error:', error);
        }
        return null;
      },
    }),
    // OAuth providers can be added here later
  ],
  session: { strategy: "jwt" as SessionStrategy },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

import { NextAuthOptions } from "next-auth";  
import Google from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    database: process.env.DATABASE_URL,
    secret: process.env.SECRET,
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async session(session, user) {
            session.user.id = user.id;
            return session;
        }
    },
};
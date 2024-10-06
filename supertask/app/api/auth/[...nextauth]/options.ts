import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';


export const AuthOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'email', type: 'text', placeholder: 'Dav**@gmail.com'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                const email = credentials?.email;
                const password = credentials?.password;
                const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                  });
                const user = await res.json();
                if (res.status == 200) {
                    return user;
                }
                else{
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/Auth/loginPage',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
              token = {
                ...token,
                ...user,
              };
            }
            return token;
        },
    }
}
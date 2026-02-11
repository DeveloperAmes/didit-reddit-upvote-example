// import { Auth } from "@auth/core";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import PostgresAdapter from "@auth/pg-adapter";
import { db } from "./db";

// const request = new Request("https://example.com")
// const response = await Auth(request, {...})

// console.log(response instanceof Response) // true

export const { auth, handlers, signOut, signIn } = NextAuth({
  adapter: PostgresAdapter(db),
  providers: [GitHub],
  trustHost: true,
  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id;
      return session;
    },
  },
});

import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import Provider from 'next-auth/providers/';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GithubID!,
      clientSecret: process.env.GithubSecret!,
    }),
    DiscordProvider({
      clientId: process.env.DiscordID!,
      clientSecret: process.env.DiscordSecret!,
      authorization:
        'https://discord.com/api/oauth2/authorize?scope=email+identify+guilds.members.read',
    }),
    GoogleProvider({
      clientId: process.env.GoogleID!,
      clientSecret: process.env.GoogleSecret!,
    }),
    FacebookProvider({
      clientId: process.env.FacebookID!,
      clientSecret: process.env.FacebookSecret!,
    }),
  ],
  theme: {
    logo: '/icons/school.png',
    colorScheme: 'auto',
    brandColor: '#0369a1',
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },

    async signIn({ account, profile }) {
      if (account.provider === 'google') {
        return Boolean(profile.email_verified && profile.email?.endsWith('@gmail.com'));
      }
      return true;
    },
  },
});

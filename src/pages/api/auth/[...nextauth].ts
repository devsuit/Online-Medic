import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Replace with your own logic (e.g., database validation)
        const user = await fetchUserFromDatabase(credentials?.email, credentials?.password);
        if (user) {
          return user; // Return user object if valid
        }
        return null; // Return null if invalid
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

async function fetchUserFromDatabase(email: string, password: string) {
  // Example logic to check user credentials against the database
  if (email === 'test@example.com' && password === 'password123') {
    return { id: 1, name: 'Test User', email };
  }
  return null;
}

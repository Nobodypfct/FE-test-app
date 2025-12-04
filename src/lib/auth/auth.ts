import { betterAuth } from 'better-auth'

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  session: {
    freshAge: 60 * 5, // 5 minutes (the session is fresh if created within the last 5 minutes)
  },
})

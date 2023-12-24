import { authMiddleware } from "@clerk/nextjs";

 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes:[     // these are the routes that do not need authentication or sign in sign up
        '/',
         '/events/:id',
         '/api/webhook/clerk',
         '/api/webhook/stripe',
         '/api/uploadthing'
    ],

    ignoredRoutes: [      // these are the routes clerk will ignore
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ]

});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 
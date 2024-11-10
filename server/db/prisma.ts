// PrismaClient is a special object we use to communicate with our database. 
// It provides methods to query, update, and delete data in our database. 
import { PrismaClient } from '@prisma/client'

// This block extends TypeScript's type definitions
// It tells TypeScript that the global object can have a prisma property
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined  // The prisma property can be either a PrismaClient instance or undefined
    }
  }
}

// Create a variable to hold our Prisma instance
let prisma: PrismaClient

// Check if we're in production environment
if (process.env.NODE_ENV === 'production') {
  // In production: Always create a new Prisma instance
  prisma = new PrismaClient()
} else {
  // In development: We want to reuse the same Prisma instance across all files
  // This prevents creating multiple database connections every time we save a file

  // Check if we already have a Prisma instance on the global object
  if (!(global as any).prisma) {
    // If no instance exists, create one and attach it to the global object
    (global as any).prisma = new PrismaClient()
  }

  // Use the existing Prisma instance from the global object
  prisma = (global as any).prisma
}

export { prisma };

/*
?## WHY THIS FILE EXISTS:
This file prevents multiple `PrismaClient` instances in development, where hot-reloading might cause numerous database connections that can slow down or crash the database. In production, this isn't an issue because hot-reloading doesn’t occur.

?## FILE FLOW:
1. Extend TypeScript's global types using `declare global` to add a `prisma` property to `global`.
2. Check the environment: 
   - **Production**: Always create a new `PrismaClient` instance.
   - **Development**: Reuse the same instance by attaching it to `global`.
3. Export `prisma` for shared access throughout the app.

?### TypeScript Notes:
- **`declare global`**: Extends global types, adding `prisma` to the `global` object.
- **`(global as any)`**: A type assertion that allows assigning `prisma` to `global`, bypassing strict TypeScript checks.
*/

import { prisma } from '@/server/db/prisma';

interface User {
  name: string
  email: string
  password: string
}

export const getUserByEmail = async (email: string) => {
  try {
    const foundUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return foundUser;
  } catch (error) {
    console.error(error);
    return null;
  }
}
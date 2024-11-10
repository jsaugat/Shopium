import { prisma } from '@/server/db/prisma';

export const getStoreById = async (id: string) => {
  const store =  await prisma.store.findUnique({
    where: {
      id,
    },
  });
  return store;
}
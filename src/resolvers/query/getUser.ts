import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getUser: QueryResolvers['getUser'] = async (
  parent,
  args,
  context
) => {
  return prisma.user.findUnique({
    where: {
      id: context.user?.id,
    },
  });
};

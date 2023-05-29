import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const updateUser: MutationResolvers['updateUser'] = async (
  parent,
  args,
  context
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error('Not Found Error.');
  }

  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: args.input.name,
    },
  });
};

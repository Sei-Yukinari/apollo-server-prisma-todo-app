import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const addTodo: MutationResolvers['addTodo'] = async (
  parent,
  args,
  context
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }
  return prisma.todo.create({
    data: {
      title: args.input.title,
      status: 'pending',
      userId: userId,
    },
    include: {
      user: true,
    },
  });
};

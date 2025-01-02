import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clearkUserId: user.id,
      },
    });

    if (loggedInUser) return loggedInUser;

    const newUser = await db.user.create({
      data: {
        clearkUserId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailID: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {}
};

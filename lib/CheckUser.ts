import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const checkUser = async () => {
    const user = await currentUser();
    console.log(user);

    //Check for current logged in user
    if (!user) {
        return null;
    }

    //Check if the user is already in database
    const loggedInUser = await db.user.findUnique({
        where: {
            clerkUserId: user.id
        },
    });
    //If user in database, return user
    if (loggedInUser) {
        return loggedInUser;
    }
    //ifnot in db, create new user
    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        },
    });

    return newUser;
};
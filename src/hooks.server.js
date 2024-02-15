import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const handle = async ({event, resolve}) => {
    prisma.example.findMany();
    return resolve(event);
};
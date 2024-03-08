import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const pragib = await prisma.person.upsert({
        where: { email: 'pragib@gmail.com' },
        update: {},
        create: {
            email: 'pragib@gmail.com',
            password: 'PraGib123',
            role: 'user',
            activatedAt: new Date(),
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

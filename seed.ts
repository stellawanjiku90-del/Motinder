import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main(){
  const hash=await bcrypt.hash('ChangeMe123!',12);
  await prisma.user.upsert({where:{email:'admin@motinder.local'},update:{role:'ADMIN'},create:{email:'admin@motinder.local',passwordHash:hash,firstName:'Motinder',lastName:'Admin',dateOfBirth:new Date('1990-01-01'),role:'ADMIN',emailVerified:true,phoneVerified:true,discoverable:false,interestedIn:[],languages:['English'],interests:[]}});
  console.log('Seeded admin@motinder.local / ChangeMe123!');
}
main().finally(()=>prisma.$disconnect());

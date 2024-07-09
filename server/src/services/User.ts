import { User } from "../types"
import {prisma } from "./index"

export async function NewUser({email,name,password}:User) {
   let userAlreadyExist=await prisma.user.findFirst({where:{
      email:email
   }})
if(userAlreadyExist) {throw new Error("User already register")}else{

   const newUser =await  prisma.user.create({data:{
      email,
      name , 
      password
   }})   
   
   return newUser
}
}
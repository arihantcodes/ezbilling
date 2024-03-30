"use server"

import  User  from "@/lib/models/user.model"

import ConnectDB from "@/lib/db"

export async function createuser(user:any){
    try {
        await ConnectDB()
        const newUser = await User.create(user)
   
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log("Error: ", error);
    }
}
'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { error } from "console"
import { connectedToDB } from "../database"
import User from "../database/models/user.model"
import Event from "../database/models/event.model"
import Order from "../database/models/order.model"
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate-path"
// function to create user

export const createUser = async(user: CreateUserParams)=>{

    try{
       await connectedToDB(); // connecting to database
       const newUser =  await User.create(user); 
       return JSON.parse(JSON.stringify(newUser))
    }catch(error){
        handleError(error)
    }
}

export const updateUser  =async (clerkId: string ,user: UpdateUserParams) => {
    try{
        await connectedToDB();
        const updatedUser = await User.findOneAndUpdate({clerkId},user,{new: true });
     if(!updatedUser){
        throw new Error("Unable to update");
     }
     return JSON.parse(JSON.stringify(updatedUser))

    } catch(error){
        handleError(error);
    }
    
}

export async function deleteUser(clerkId: string) {
    try {
      await connectedToDB()
  
      // Find user to delete
      const userToDelete = await User.findOne({ clerkId })
  
      if (!userToDelete) {
        throw new Error('User not found')
      }
  
      // Unlink relationships
      await Promise.all([
        // Update the 'events' collection to remove references to the user
        Event.updateMany(
          { _id: { $in: userToDelete.events } },
          { $pull: { organizer: userToDelete._id } }
        ),
  
        // Update the 'orders' collection to remove references to the user
        Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
      ])
  
      // Delete user
      const deletedUser = await User.findByIdAndDelete(userToDelete._id)
      revalidatePath('/')
  
      return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
      handleError(error)
    }
  }
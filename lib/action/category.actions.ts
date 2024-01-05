"use server"

import { CreateCategoryParams } from "@/public/types"
import { connectToDatabase } from "../database"
import Category from "../database/models/category.model";
import { handleError } from "../utils";

// for creating category
// takes categorName object as parameter from the dropdown page
export const createCategory=async ({ categoryName }: CreateCategoryParams) => {
    try {
        await connectToDatabase();

        const newCategory =  await Category.create({ name: categoryName }) // for creating a category in databse 
        return JSON.parse(JSON.stringify(newCategory));  // returning a json object
    } catch (error) {
        handleError(error);
    }
}

// for fetching all the categories from the database
export const getAllCategories= async () => {
    try {
        await connectToDatabase();

        const categories =  await Category.find(); 
        return JSON.parse(JSON.stringify(categories));  
    } catch (error) {
        handleError(error);
    }
}
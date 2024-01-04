'use client'
// dropdown component for our form for adding category or delect one category

import React, { startTransition, useState } from 'react'
// alert dialog box
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// dropdown select
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { ICategory } from '@/lib/database/models/category.model';
import { Input } from '../ui/input';
  


type DropdownProps= {
    value: string
    onChangeHandler?: ()=> void 
}


const Dropdown = ({value , onChangeHandler}: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]); // for adding categories and storing them
  const [newCategory, setnewCategory] = useState(""); // for creating new category and storing them
 // for adding the catgeory
  const handleAddCategory= ()=>{

  }
  return (
      <Select onValueChange={onChangeHandler}>
    <SelectTrigger className="select-field">
      <SelectValue placeholder="Category" />
    </SelectTrigger>
    <SelectContent>
      {categories.length > 0 && categories.map((category)=>(
          <SelectItem key={category._id} value={category._id} className='select-item p-regular-14'>
              {category.name}
          </SelectItem>
      )) }
      {/* Alert Dialog for creating a category */}
  <AlertDialog>
    <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500'>
      Add New Category
    </AlertDialogTrigger>
      <AlertDialogContent className='bg-white'>
        <AlertDialogHeader>
          <AlertDialogTitle>New Category</AlertDialogTitle>
            <AlertDialogDescription>
              <Input type='text' placeholder='Category Name' className='input-field mt-3' onChange={(e)=>setnewCategory(e.target.value)} />
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=> startTransition(handleAddCategory)}>Add</AlertDialogAction> {/* function for adding category to the database*/}
        </AlertDialogFooter>
      </AlertDialogContent>
  </AlertDialog>


    </SelectContent>
  </Select>

   )
}

export default Dropdown
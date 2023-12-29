// contains schema model for the user creation

import  {Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";
import { STRING_LITERAL_DROP_BUNDLE } from "next/dist/shared/lib/constants";

const UserSchema = new Schema({
     clerkId: { type: String, required: true , unique: true },
     email: {type: String, required: true, unique: true},
     username: {type: String, required: true, unique: true},
     firsName: {type: String, required: true },
     lastName: {type: String, required: true},
     photo:{ type: String, required: true},
})

const User = models.User || model('User', UserSchema) ; // check for an model already in database if not then create a new model

export default User;
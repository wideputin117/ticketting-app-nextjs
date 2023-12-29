// setup for database
import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URL;

// caching the connection 
let cached = (global as any).mongoose || {conn: null, promise: null} ;

export const connectToDatabase =async () => {
    if(cached.conn) return cached.conn; // checks for an cached connection i.e if the connection is cached 
    if(!MONGODB_URI){                   // check for connection string
        throw new Error('MongoDB_URI is missing');
    }
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, 
{bufferCommands: false, })

// assigning cached.promise to cached.conn and returning it;
cached.conn = await cached.promise;
console.log(cached.conn);
console.log("connected to db");
return cached.conn;

}

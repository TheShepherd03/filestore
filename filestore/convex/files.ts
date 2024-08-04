
import {ConvexError, v} from "convex/values";
import {mutation, query} from "./_generated/server";


export const createFile=mutation({
    args:{
        fileName:v.string(),
    },
    async handler(ctx,args){
        const identity=await ctx.auth.getUserIdentity();
        console.log('Your address is ',identity?.address);
        console.log('Your phoneNumber is ',identity?.phoneNumber)
        console.log('Your name is ',identity?.name)
        if(!identity){
            throw new ConvexError("Log in to perform this functionality");
        }
        await ctx.db.insert("files",{
            fileName:args.fileName,
        });
    },
});

export const getFiles=query(
    {
        args:{},
        async handler(ctx,args){
            return ctx.db.query('files').collect()
        }
    }
)
//it is same as try catch block

export const catchAsyncError = (passedFunction)=>(req,res,next)=>{
    Promise.resolve(passedFunction(req,res,next)).catch(next); //now this catch next call's the next middleware that it Error.js file
}
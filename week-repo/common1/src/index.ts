import { z } from "zod";
export const signupInput = z.object({
    username: z.string(),
    password: z.string()
})
console.log("hi there");

export type SignupParams = z.infer<typeof signupInput>;

export function  isOdd(num:number) {
    if(num%2 ==0){
        return true;
    }
    return false;
}
export function firstEl(arr:string[]):string{
    return arr[0];
}
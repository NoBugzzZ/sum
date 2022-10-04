import { ArgsType,FuncType } from "./type";

const sum:FuncType<number>=(...args)=>{
  return args.reduce((prev,curr)=>prev+curr,0);
}

export default sum;
export interface Todo{
    id:number,
    text:string,
}

export interface GlobalButton{
    title:string,
    onClick?:()=>void;
    type?:"button"|"submit"|"rest";
    className?:string,
}
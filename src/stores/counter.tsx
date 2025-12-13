export function counterReducer(state=0,action:any)
{
    if(action.type === "UPDATE")
    {
        return state+1;
    }else if(action.type === "DELETE")
    {
        return state - 1;
    }
    else
    {
        return state;
    }
}

export const increase = (val) =>(
    {
        type: "INCREMENT",
        payload: val
    }
);

export const decrease = (val) =>(
    {
        type: "DECREMENT",
        payload: val
    }
);
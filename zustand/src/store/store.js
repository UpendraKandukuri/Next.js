import { create } from "zustand"

export const useCounterStore  = create((set)=>(
    {
     count :0,
    increment :(value)=>set((state)=>{return {count: state.count + value}}),
    decrement : (value)=>set((state)=> ({count:state.count-value}))
})
)
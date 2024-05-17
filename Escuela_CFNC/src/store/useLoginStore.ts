import { create } from "zustand";

//porque se llama store ?
interface IloginStore{
    user:string|null
    isLoggedIn:boolean
    login:(user:string)=> void
    logout: () => void
}

export const useLoginStore = create<IloginStore>((set) => ({
    user:null,
    isLoggedIn:false,
    login: (user:string) => {set({user, isLoggedIn: true})},
    logout: () => {set({user:null, isLoggedIn: false})}
})) 
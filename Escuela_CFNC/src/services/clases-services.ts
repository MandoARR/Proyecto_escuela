import { IClases } from "../store/IClases"

const BASE_URL =  'https://backend-subs-control.onrender.com/api/clase'

export async function getClases(){
    const response = await fetch(BASE_URL)
    const data = response.json()

    return data
}

export async function postClases(body:IClases){
    const response = await fetch(BASE_URL,{
        method: 'POST',
        body : JSON.stringify(body),//payload
        headers: {
            "Content-Type": "application/json"
          }
    })
    const data = response.json()

    return data
}

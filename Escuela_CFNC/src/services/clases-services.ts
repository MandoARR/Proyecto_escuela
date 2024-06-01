import { IClases } from "../store/IClases"

const BASE_URL =  'https://backend-subs-control.onrender.com/api/clase'

export async function postClases(body:IClases){
    const response = await fetch(BASE_URL,{
        method: 'POST',
        body : JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
          }
    })
    const data = response.json()

    return data
}

export async function deleteClases(id:string) {
    const response = await fetch(BASE_URL + '/' + id, {
        method: 'DELETE',
    })
    const data = await response.json();
    return data;
}
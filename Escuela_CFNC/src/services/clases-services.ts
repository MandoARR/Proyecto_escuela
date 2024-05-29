import { IEstudiantes } from "../store/IClases"

const BASE_URL =  'https://backend-subs-control.onrender.com/api/clase'

export async function getStudents(){
    const response = await fetch(BASE_URL)
    const data = response.json()

    return data
}

export async function postStudents(body:IEstudiantes){
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

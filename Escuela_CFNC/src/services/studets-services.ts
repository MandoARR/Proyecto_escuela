import { IEstudiantes } from "../store/IEstudiantes"

const BASE_URL =  'https://backend-subs-control.onrender.com/api/alumno'

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

export async function putStudents(body : IEstudiantes){

}

export async function deleteStudent(id:Int16Array) {
    
}
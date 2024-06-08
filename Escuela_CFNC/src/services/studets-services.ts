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
    const response = await fetch(BASE_URL + '/' + body.id,{
        method: 'PUT',
        body : JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
          }
    })
    const data = response.json()

    return data
}

{/*EJEMPLO DE URL PARA ELIMINAR ALUMNO, ESTE UUID ES DE UNA CUENTA QUE SE BORRARA EN AUTOMATICO
https://backend-subs-control.onrender.com/api/alumno
?uuid=462e3cd2-5227-4310-bf55-2db76027ca08 */}

export async function deleteStudent(id:string) {
    const response = await fetch(BASE_URL +'/'+ id, {
        method: 'DELETE',
    })
    const data = await response.json();
    return data;
}
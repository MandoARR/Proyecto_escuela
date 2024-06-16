import { ISuscripciones } from "../store/ISuscripciones"

const BASE_URL =  'https://backend-subs-control.onrender.com/api/suscripcion'
export async function getSuscriptions(){
    const response = await fetch(BASE_URL)
    const data = response.json()
    return data
}


export async function postSuscriptions(body:ISuscripciones){
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

export async function putSuscriptions(body : ISuscripciones){
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

export async function deleteSuscriptions(id:string) {
    const response = await fetch(BASE_URL +'/'+ id, {
        method: 'DELETE',
    })
    const data = await response.json();
    return data;
}
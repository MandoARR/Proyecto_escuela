import { IPagos } from "../store/IPagos"

const BASE_URL =  'https://backend-subs-control.onrender.com/api/pago'
export async function getPayment (){
    const response = await fetch(BASE_URL)
    const data = response.json()
    return data
}


export async function postPayment (body:IPagos){
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

export async function putPayment (body : IPagos){
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

export async function deletePayment (id:string) {
    const response = await fetch(BASE_URL +'/'+ id, {
        method: 'DELETE',
    })
    const data = await response.json();
    return data;
}
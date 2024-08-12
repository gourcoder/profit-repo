const SERVER = "http://localhost:8989";
export const URLS = {
    REGISTER : `${SERVER}/profitology/register`,
    LOGIN : `${SERVER}/profitology/login`
}
class ApiCallService
{
    getCall(url)
    {
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then(response=>response.json())
                .then(res=>resolve(res))
                .catch(err=>reject(err))
        })
    }
    postCall(url,data)
    {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method : "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response=>response.json())
                .then(res=>resolve(res))
                .catch(err=>reject(err))
        })
    }

    getCallWithToken(url,token)
    {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                headers:{
                    'Authorization' : 'Bearer '+token
                }
            })
                .then(response=>response.json())
                .then(res=>resolve(res))
                .catch(err=>reject(err))
        })
    }
    postCallWithToken(url,token,data)
    {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method : "POST",
                headers:{
                    'content-type': 'application/json',
                    'Authorization' : 'Bearer '+token
                },
                body: JSON.stringify(data)
            })
                .then(response=>response.json())
                .then(res=>resolve(res))
                .catch(err=>reject(err))
        })
    }
}

export default new ApiCallService();

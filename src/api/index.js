import { API_URLS } from "../utils/constants"

const customFetch=async (url,{body,...customConfig})=>{
    const headers={
        'Content-type': 'application/json; charset=UTF-8',
    }

    const config={
        ...customConfig,
        headers:{
            ...headers,
            ...customConfig.headers,
        }
    }

    try {
        let response=await fetch(url,config).then((response)=>response.json());
        return {
            data:response,
        }


    } catch (error) {
        console.log(error);
        return{
            message:error.message,
            success:false
        }
        
    }
}

export const getAlbums=()=>{
    return customFetch(API_URLS.albums(),{
        method:'get'
    });
}

export const createAlbum=(body)=>{
    return customFetch(API_URLS.albums(),{
        method:'post',
        body:JSON.stringify(body),
    });
}

export const removeAlbum=(id)=>{
    return customFetch(API_URLS.Delete(),{
        method:'delete'
    })
}

export const updateAlbum=(body)=>{
    return customFetch(API_URLS.update(body.id),{
        method:'PUT',
        body:JSON.stringify(body),
    })
}
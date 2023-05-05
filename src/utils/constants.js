const API_ROOT='https://jsonplaceholder.typicode.com/posts';

export const API_URLS={
    albums:()=>`${API_ROOT}`,
    Delete:(id)=>`${API_ROOT}/id`,
    update:(id)=>`${API_ROOT}/${id}`
    
}
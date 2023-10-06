const enpoint = `${import.meta.env.VITE_URI_FETCH}/producto`;

export const getAll = async() =>{
    let res = await (await fetch(enpoint)).json();
    return res;
}
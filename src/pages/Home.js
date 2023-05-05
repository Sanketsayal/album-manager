import { useEffect, useState } from "react";
import { createAlbum, getAlbums, removeAlbum, updateAlbum } from "../api";
import { Left, Right } from "../components";


function Home(){

    const [albums,setAlbums]=useState([]);

    useEffect(()=>{
        const fetchAlbums=async ()=>{
            const response=await getAlbums();
            setAlbums(response.data)
        }

        fetchAlbums();
    },[])

    const handleCreate=async (body)=>{
        let{data}=await createAlbum(body);
        let album={
            ...body,
            id:data.id,
        };
        setAlbums([album,...albums]);
    }

    const handleUpdate=async (body)=>{
        await updateAlbum(body);
        let index=albums.findIndex((album)=>album.id==body.id)
        let newAlbum=[...albums];
        newAlbum[index]=body;
        console.log(newAlbum)
        setAlbums(newAlbum);
        console.log(albums);
    }

    const handleDelete=async (id)=>{
        await removeAlbum()
        let newAlbum=albums.filter((album)=>album.id!=id)
        setAlbums(newAlbum);
    }

    return(
        <div className="home">
            <Left create={handleCreate} deleteAlbum={handleDelete} update={handleUpdate} />
            <Right albums={albums}/>
        </div>
        
    )
}

export default Home;
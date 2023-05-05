import { useState } from 'react';
import styles from '../styles/left.module.css';

function Left(props){
    const {create,deleteAlbum}=props;
    const [title,setTitle]=useState('');
    const [userId,setUserId]=useState(0);
    const [body,setBody]=useState('');
    const [id,setId]=useState(0);


    return(
        <div className={styles.left}>
            <div className={styles.update}>
                <h2>Add Album</h2> 
                <input type='text' placeholder='User Id' onChange={(e)=>setUserId(e.target.value)} />
                <input type='text' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' placeholder='Body' onChange={(e)=>setBody(e.target.value)} />
                <button onClick={()=>props.create({title,userId,body})}>Add</button>
            </div>
            <hr />
            <div className={styles.update}>
                <h2>Update Album</h2> 
                <input type='text' placeholder='Id of Album' onChange={(e)=>setId(e.target.value)} />
                <input type='text' placeholder='New Title' onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' placeholder='New body' onChange={(e)=>setBody(e.target.value)} />
                <input type='text' placeholder='userId' onChange={(e)=>setUserId(e.target.value)} />
                <button onClick={()=>props.update({id,title,body,userId})}>Update</button>
            </div>
            <hr />
            <div className={styles.update}>
                <h2>Delete Album</h2> 
                <input type='text' placeholder='Id of Album' onChange={(e)=>setId(e.target.value)} />
                <button onClick={()=>props.deleteAlbum(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Left;
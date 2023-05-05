import styles from '../styles/right.module.css';

function Right({albums}){

    return(
        <div className={styles.right}>
            <div className={styles.albumList}>
                <table bgcolor='black'>
                    <thead bgcolor='green' >
                        <tr >
                            <th>Id</th>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody bgcolor='white'>
                        {albums.map((album)=>{
                            return(
                                <tr key={`album-${album.id}`}>
                                    <td>{album.id}</td>
                                    <td>{album.userId}</td>
                                    <td>{album.title}</td>
                                    <td></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Right;
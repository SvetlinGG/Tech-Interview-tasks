import { useState } from "react";

function AlbumList() {
    const [albumList, setAlbumList] = useState(albums);

    function toggleLike(id) {
        // Напиши логиката тук
        setAlbumList(prev =>
        prev.map(album =>
            album.id === id ? { ...album, liked: !album.liked } : album
        )
    );
    }

    return (
        <div>
            {albumList.map(album => (
                <div key={album.id}>
                    <h3>{album.title}</h3>

                    <button onClick={() => toggleLike(album.id)}>
                        {album.liked ? "Unlike" : "Like"}
                    </button>
                </div>
            ))}
        </div>
    );
}
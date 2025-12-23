import { useDispatch, useSelector } from "react-redux";
import { css } from "../../../styled-system/css";
import SongItem from "../../components/song-Item";
import type { RootState } from "../../store";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchSongs } from "../../store/songSlice";
import type { Song } from '../../types'

export default function List() {
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector((state: RootState) => state.songs)
    const [list,setList] = useState<Song[]>([])
    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch])
    useEffect(()=>{
        if(data){
            setList(data )
        }
    },[data])
    return (
        <>
            <div className={css({
                display: 'flex',
                gap: '4'
            })}>
                <p>Songs</p>
                <p>Albums</p>
                <p>Artists</p>
                <p>Favorites</p>
            </div>
            {loading && <p><Loader2 className={css({ animation: "spin 1s linear infinite" })} /></p>}
            {error && <p>{error}</p>}
            {data && <div className={css({
                display: 'grid',
                width: "full",
                gridTemplateColumns: { lg: 'repeat(4,minmax(0,1fr))', md: 'repeat(2,minmax(0,1fr))', sm: 'repeat(1,minmax(0,1fr))' },
                gap: '2',
                margin: "auto"
            })}>
                {list.map(item => <SongItem title={item.title} artist={item.artist} album={item.album} genre={item.genre} albumArt={item.secure_url} />)}
            </div>}
        </>
    )
}
import { css } from "../../../styled-system/css";
import SongItem from "../../components/song-Item";

export default function List(){
    return(
        <>
        <div className={css({
            display:'flex',
            gap:'4'
        })}>
            <p>Songs</p>
            <p>Albums</p>
            <p>Artists</p>
            <p>Favorites</p>
        </div>
                <div className={css({
            display:'grid',
            width:"full",
            gridTemplateColumns:{lg:'repeat(4,minmax(0,1fr))', md:'repeat(2,minmax(0,1fr))',sm:'repeat(1,minmax(0,1fr))'},
            gap:'2',
            margin:"auto"
        })}>
            <SongItem title={""} artist={""} album={""} genre={""} albumArt={""} />
            <SongItem title={""} artist={""} album={""} genre={""} albumArt={""} />
            <SongItem title={""} artist={""} album={""} genre={""} albumArt={""} />
            <SongItem title={""} artist={""} album={""} genre={""} albumArt={""} />
            <SongItem title={""} artist={""} album={""} genre={""} albumArt={""} />
            <SongItem title={""} artist={""} album={""} genre={""} albumArt={""} />
            <SongItem title={""} artist={""} album={""} genre={""} albumArt={""} />
        </div>
        </>
    )
}
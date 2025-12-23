import { css } from "../../../styled-system/css/css";
import type { SyntheticEvent } from "react";
import type { AlbumItemProps } from "./types";

export default function AlbumItem({...props}:AlbumItemProps){
    const fallbackAlbumArt = "/image.png";

    function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
        if (event.currentTarget.src.endsWith(fallbackAlbumArt)) return;
        event.currentTarget.src = fallbackAlbumArt;
    }

    return(
        <div className={css({border:'solid', rounded:'xl'})}>
            <img
                src={props.albumArt}
                onError={handleImageError}
                className={css({width:'full', objectFit:'cover', roundedTop:'xl',objectPosition:'center'})}
            />
            <div  className={css({marginTop:'4',paddingX:'2', paddingBottom:'2',display:'flex', flexDirection:'column', gap:'2'})}>
            <p className={css({fontSize:'xl'})}>{props.title}</p>
            <p>{props.artist}</p>
            <div className={css({display:'flex',justifyContent:'space-between'})}>
                <p>{props.totalSongs}</p>
                <p className={css({backgroundColor:'ActiveCaption',color:"Background", rounded:'xl',paddingX:'2'})}>{props.genre}</p>
            </div>
            </div>
        </div>
    )
}
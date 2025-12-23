import { Pencil, Trash2 } from "lucide-react";
import { css } from "../../../styled-system/css/css";
import type { SongItemProps } from "./types";

export default function SongItem({...props}:SongItemProps){
    return(
        <div className={css({border:'solid', rounded:'xl'})}>
            <img src={props.albumArt} className={css({width:'full', objectFit:'cover', roundedTop:'xl',objectPosition:'center'})}/>
            <div  className={css({marginTop:'4',paddingX:'2', paddingBottom:'2',display:'flex', flexDirection:'column', gap:'2'})}>
                <div className={css({display:'flex', justifyContent:'space-between'})}>
            <p className={css({fontSize:'xl'})}>{props.title}</p>
                    <div className={css({ display: 'flex', gap:'4' })}><Pencil onClick={props.onEdit}/><Trash2 /></div>
                </div>
            <p>{props.artist}</p>
            <div className={css({display:'flex',justifyContent:'space-between'})}>
                <p>{props.album}</p>
                <p className={css({backgroundColor:'ActiveCaption',color:"Background", rounded:'xl',paddingX:'2'})}>{props.genre}</p>
            </div>
            </div>
        </div>
    )
}
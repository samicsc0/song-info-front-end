import { css } from "../../../styled-system/css/css";
import type { ArtistItemProps } from "./types";

export default function ArtistItem({...props}:ArtistItemProps){
   return(
        <div className={css({border:'solid', rounded:'xl'})}>
            <img src={props.photo} className={css({width:'full', objectFit:'cover', roundedTop:'xl',objectPosition:'center'})}/>
            <div  className={css({marginTop:'4',paddingX:'2', paddingBottom:'2',display:'flex', flexDirection:'column', gap:'2'})}>
            <p>{props.title}</p>
            <div className={css({display:'flex',justifyContent:'space-between'})}>
                <p>{props.totalSongs}</p>
            </div>
            </div>
        </div>
    )
}
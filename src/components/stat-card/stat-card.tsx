import type { StatCardProps } from "./types";
import { css } from "../../../styled-system/css/css";

export default function StatCards({...props}:StatCardProps){
    return(
        <div className={css({
            border:"solid",
            rounded:'md',
            padding:'10',
            shadow:"xl",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        })}>
            <div>
            <p className={css({
                fontWeight:"light"
            })}>{props.title}</p>
            <p className={css({
                fontSize:"3xl",
                fontWeight:'bold'
            })}>{props.stat}</p>
            </div>
            <div className={css({
                backgroundColor:'blue.500',
                padding:'4',
                rounded:"full"
            })}>
                <props.icon/>
            </div>
        </div>
    )
}
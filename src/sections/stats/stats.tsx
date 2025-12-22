import {  Music, Users, Disc3, ListMusic  } from "lucide-react";
import StatCards from "../../components/stat-card";
import { css } from "../../../styled-system/css/css";

export default function Stats(){
    return(
        <div className={css({
            display:'grid',
            gridTemplateColumns:{lg:'repeat(4,minmax(0,1fr))', md:'repeat(2,minmax(0,1fr))',sm:'repeat(1,minmax(0,1fr))'},
            gap:'16px'
        })}>
            <StatCards title={"Total Songs"} stat={5} icon={Music} />
            <StatCards title={"Total Artists"} stat={4} icon={Users} />
            <StatCards title={"Genres"} stat={3} icon={ListMusic} />
            <StatCards title={"Albums"} stat={2} icon={Disc3} />
        </div>
    )
}
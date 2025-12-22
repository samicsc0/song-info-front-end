import {  Music, Users, Disc3, ListMusic  } from "lucide-react";
import StatCards from "../../components/stat-card";
import { css } from "../../../styled-system/css/css";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchStat } from "../../store/statSlice";
import { useEffect } from "react";

export default function Stats(){
    const dispatch = useDispatch()
    const {data,loading} = useSelector((state:RootState)=>state.stats)
    useEffect(()=>{
        dispatch(fetchStat())
    },[dispatch])
    return(
        <div className={css({
            display:'grid',
            gridTemplateColumns:{lg:'repeat(4,minmax(0,1fr))', md:'repeat(2,minmax(0,1fr))',sm:'repeat(1,minmax(0,1fr))'},
            gap:'16px',
            width:"94%",
            margin:"auto"
        })}>
            <StatCards title={"Total Songs"} stat={data?data.totalSongs:0} icon={Music} isLoading={loading}/>
            <StatCards title={"Total Artists"} stat={data ? data.totalArtists : 0} icon={Users} isLoading={loading} />
            <StatCards title={"Genres"} stat={data ? data.totalGenres : 0} icon={ListMusic} isLoading={loading} />
            <StatCards title={"Albums"} stat={data ? data.totalAlbums : 0} icon={Disc3} isLoading={loading} />
        </div>
    )
}
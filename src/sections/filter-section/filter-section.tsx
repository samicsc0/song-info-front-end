import { Filter } from "lucide-react"
import { useState } from "react"
import { css } from "../../../styled-system/css/css"

export default function FilterSection(){
    const [search,setSearch] = useState('')
    return(
        <div className={css({
                    width:'full',
                    display:'flex',
                    gap:"12"
                })}>
            <input
                placeholder="Search Song..."
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                className={css({
                    width:'3/4',
                    border:'solid',
                    paddingY:'4'
                })}
            />
            <select className={css({
                    border:'solid',
                    paddingY:'4'
                })}>
                <p><Filter className="w-4 h-4" />
            Filter by Genre</p>
                <option>Blues</option>
                <option>Rock</option>
                <option>Indie</option>
                <option>Jazz</option>
            </select>
        </div>
    )
}
// Import the React icon component from lucide-react (not the core icon data)
import { Play } from "lucide-react"
import { css } from "../../../styled-system/css"
export default function Header(){
    return(
        <div className={css({width:'100vw'})}>    
           <div className={css({
            display:'flex',
            gap:'5px',
            alignItems:'center',
            padding:'10px'
        })}>
            <Play size={40}/>
            <div className={css({
            display:'flex',
            flexDirection:'column',
            gap:'2px'
        })}>
            <h1>Music Store</h1>
            <p>List of your favorite songs.</p>
            </div>
        </div>
        <hr className={css({width:'full'})}/>
        </div>
    )
}
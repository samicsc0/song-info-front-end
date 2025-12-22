import { css } from "../../../styled-system/css/css";
import { Header } from "../../components/header";
import FilterSection from "../../sections/filter-section";
import Stats from "../../sections/stats";

export default function Landing(){
    return(
        <div className={css({
            display:'flex',
            flexDirection:'column',
            gap:'24px'
        })}>
            <Header />
            <Stats />
            <FilterSection />
        </div>
    )
}
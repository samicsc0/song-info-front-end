import  envConfig  from "../config"

async function getAllSongs(){
    const res= await fetch(`${envConfig.BASE_URL}/song`)
    if(!res.ok){
        throw new Error("Fetching songs failed")
    }
    return res.json()
}
async function getStats(){
    const res = await fetch(`${envConfig.BASE_URL}/song/stat`)
    if(!res.ok){
        throw new Error("Fetching songs failed")
    }
    return res.json()
}
export {getAllSongs,getStats}
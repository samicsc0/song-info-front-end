interface SongItemProps{
    _id:string,
    title:string,
    artist:string,
    album:string,
    genre:string,
    albumArt:string
    onEdit:()=>void
}
export {SongItemProps}
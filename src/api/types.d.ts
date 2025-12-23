interface AddSongParams {
    "title": string,
    "artist": string,
    "album": string,
    "genre": string,
    "secure_url": string
}
interface EditSongParams{
    _id?: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    secure_url: string;
}
export { AddSongParams,EditSongParams }
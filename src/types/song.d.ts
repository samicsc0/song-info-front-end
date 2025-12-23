interface Song{
    _id?:string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    secure_url: string;
    createdAt?: string;
    updatedAt?: string;
}
export {Song}
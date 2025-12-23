import { useDispatch, useSelector } from "react-redux";
import { css } from "../../../styled-system/css";
import SongItem from "../../components/song-Item";
import type { RootState } from "../../store";
import { Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { fetchSongs } from "../../store/songSlice";
import type { Song } from '../../types'
import EditSong from "../../components/edit-song";
import AlbumItem from "../../components/album-item";

type ListProps = {
    search?: string;
};

export default function List({ search = "" }: ListProps) {
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector((state: RootState) => state.songs)
    const [edit, setEdit] = useState<Song | null>(null)
    const [selected, setSelected] = useState<'songs' | 'albums' | 'artists' | 'genres'>('songs')
    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch])
    const albums = useMemo(() => {
        const albumMap = new Map<string, { title: string, artist: string, genre: string, albumArt: string, totalSongs: number }>();
        data.forEach(item => {
            if (!item.album) return;
            if (albumMap.has(item.album)) {
                const album = albumMap.get(item.album)!;
                album.totalSongs += 1;
                return;
            }
            albumMap.set(item.album, { title: item.album, artist: item.artist, genre: item.genre, albumArt: item.secure_url, totalSongs: 1 });
        });
        return Array.from(albumMap.values());
    }, [data]);

    const artists = useMemo(() => {
        const artistMap = new Map<string, { name: string, totalSongs: number, sampleGenre: string, albumArt: string }>();
        data.forEach(item => {
            if (!item.artist) return;
            if (artistMap.has(item.artist)) {
                const artist = artistMap.get(item.artist)!;
                artist.totalSongs += 1;
                return;
            }
            artistMap.set(item.artist, { name: item.artist, totalSongs: 1, sampleGenre: item.genre, albumArt: item.secure_url });
        });
        return Array.from(artistMap.values());
    }, [data]);

    const genres = useMemo(() => {
        const genreMap = new Map<string, { name: string, totalSongs: number }>();
        data.forEach(item => {
            if (!item.genre) return;
            if (genreMap.has(item.genre)) {
                const genre = genreMap.get(item.genre)!;
                genre.totalSongs += 1;
                return;
            }
            genreMap.set(item.genre, { name: item.genre, totalSongs: 1 });
        });
        return Array.from(genreMap.values());
    }, [data]);

    const songsFiltered = useMemo(() => {
        const term = search.trim().toLowerCase();
        if (!term) return data;
        return data.filter(item => item.title.toLowerCase().includes(term));
    }, [data, search]);

    const filteredItems = useMemo(() => {
        switch (selected) {
            case 'albums':
                return albums;
            case 'artists':
                return artists;
            case 'genres':
                return genres;
            default:
                return songsFiltered;
        }
    }, [albums, artists, genres, selected, songsFiltered]);

    const optionClass = (key: typeof selected) => css({
        paddingX: '3',
        paddingY: '2',
        cursor: 'pointer',
        borderBottomWidth: selected === key ? '2px' : '0px',
        borderColor: 'blue.500',
        color: selected === key ? 'blue.600' : 'inherit',
        fontWeight: selected === key ? 'semibold' : 'normal'
    });

    return (
        <>
            <div className={css({
                display: 'flex',
                gap: '4',
                borderBottomWidth: '1px',
                borderColor: 'gray.200',
                marginBottom: '4'
            })}>
                <p className={optionClass('songs')} onClick={() => setSelected('songs')}>Songs</p>
                <p className={optionClass('albums')} onClick={() => setSelected('albums')}>Albums</p>
                <p className={optionClass('artists')} onClick={() => setSelected('artists')}>Artists</p>
                <p className={optionClass('genres')} onClick={() => setSelected('genres')}>Genres</p>
            </div>
            {loading && <p><Loader2 className={css({ animation: "spin 1s linear infinite" })} /></p>}
            {error && <p>{error}</p>}
            {filteredItems && <div className={css({
                display: 'grid',
                width: "full",
                gridTemplateColumns: { lg: 'repeat(4,minmax(0,1fr))', md: 'repeat(2,minmax(0,1fr))', sm: 'repeat(1,minmax(0,1fr))' },
                gap: '2',
                margin: "auto"
            })}>
                {selected === 'albums' && albums.map(item => (
                    <AlbumItem key={item.title} title={item.title} artist={item.artist} genre={item.genre} totalSongs={item.totalSongs} albumArt={item.albumArt} />
                ))}
                {selected === 'artists' && artists.map(item => (
                    <div key={item.name} className={css({ border: 'solid', rounded: 'xl', padding: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
                        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                            <p className={css({ fontSize: 'xl', fontWeight: 'semibold' })}>{item.name}</p>
                            <p className={css({ backgroundColor: 'ActiveCaption', color: "Background", rounded: 'xl', paddingX: '2' })}>{item.sampleGenre}</p>
                        </div>
                        <p>{item.totalSongs} songs</p>
                    </div>
                ))}
                {selected === 'genres' && genres.map(item => (
                    <div key={item.name} className={css({ border: 'solid', rounded: 'xl', padding: '4', display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                        <p className={css({ fontSize: 'xl', fontWeight: 'semibold' })}>{item.name}</p>
                        <p>{item.totalSongs} songs</p>
                    </div>
                ))}
                {selected === 'songs' && songsFiltered.map(item => <SongItem key={item._id} title={item.title} artist={item.artist} album={item.album} genre={item.genre} albumArt={item.secure_url} onEdit={() => setEdit(item)} _id={item._id!} />)}
            </div>}
            {edit && <EditSong song={edit} onClose={() => setEdit(null)} />}
        </>
    )
}
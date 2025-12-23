import { useEffect, useState, type SyntheticEvent } from "react";
import { css } from "../../../styled-system/css";
import type { AddSongProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../store/songSlice";
import type { RootState } from "../../store";

export default function AddSong({ ...props }: AddSongProps) {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.songs);
    const [value, setValues] = useState<{ title: string, artist: string, album: string, genre: string, secure_url: string }>({ title: '', artist: '', album: '', genre: '', secure_url: '' });
    const [submitState, setSubmitState] = useState<"idle" | "pending" | "success" | "error">("idle");

    function onSubmitHandler(event: SyntheticEvent) {
        event.preventDefault();
        setSubmitState("pending");
        dispatch(addSong(value));
    }

    useEffect(() => {
        if (submitState === "pending" && !loading) {
            if (error) {
                setSubmitState("error");
                setTimeout(() => {
                    setSubmitState("idle")
                }, 3000);
            } else {
                setSubmitState("success");
                setValues({ title: '', artist: '', album: '', genre: '', secure_url: '' });
            }
        }
    }, [loading, error, submitState]);
    return (
        <div
            className={css({
                position: 'fixed',
                inset: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: { base: '4', md: '6' },
                backgroundColor: 'rgba(0,0,0,0.45)',
                zIndex: '50'
            })}
        >
            <div
                className={css({
                    backgroundColor: 'white',
                    color: 'black',
                    padding: { base: '6', md: '10' },
                    width: 'full',
                    maxWidth: '640px',
                    borderRadius: 'xl',
                    boxShadow: 'lg',
                    maxHeight: '90vh',
                    overflowY: 'auto'
                })}
                onClick={(event) => event.stopPropagation()}
            >
                <h1>Add a new Song</h1>
                <form className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4',
                    marginY: '16'
                })} onSubmit={onSubmitHandler}>
                    <input placeholder="Song title" value={value.title} disabled={loading} className={css({ border: 'solid', paddingY: '2' })} onChange={(event) => { setValues((prev) => ({ ...prev, title: event.target.value })) }} required />
                    <input placeholder="Artist" value={value.artist} disabled={loading} className={css({ border: 'solid', paddingY: '2' })} onChange={(event) => { setValues((prev) => ({ ...prev, artist: event.target.value })) }} required />
                    <input placeholder="Album" value={value.album} disabled={loading} className={css({ border: 'solid', paddingY: '2' })} onChange={(event) => { setValues((prev) => ({ ...prev, album: event.target.value })) }} required />
                    <input placeholder="Genre" value={value.genre} disabled={loading} className={css({ border: 'solid', paddingY: '2' })} onChange={(event) => { setValues((prev) => ({ ...prev, genre: event.target.value })) }} required />
                    <input placeholder="Link to Album Art" value={value.secure_url} disabled={loading} className={css({ border: 'solid', paddingY: '2' })} onChange={(event) => { setValues((prev) => ({ ...prev, secure_url: event.target.value })) }} required />
                    <div className={css({
                        minHeight: '6',
                        color: submitState === "error" ? 'red' : 'green'
                    })}>
                        {loading && "Submitting..."}
                        {!loading && submitState === "error" && (error ?? "Failed to add song")}
                        {!loading && submitState === "success" && "Song added successfully"}
                    </div>
                    <div className={css({
                        display: 'flex',
                        gap: '4'
                    })}>
                        <button className={css({
                            color: 'white'
                        })} onClick={() => props.onClose()} type="button">Cancel</button>
                        <button className={css({
                            color: 'white'
                        })} type="submit" disabled={loading}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
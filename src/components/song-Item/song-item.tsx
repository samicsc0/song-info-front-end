import { Pencil, Trash2 } from "lucide-react";
import { css } from "../../../styled-system/css/css";
import type { SongItemProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useEffect, useState, type SyntheticEvent } from "react";
import { deleteSong } from "../../store/songSlice";

export default function SongItem({ ...props }: SongItemProps) {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.songs);
    const [submitState, setSubmitState] = useState<"idle" | "pending" | "success" | "error">("idle");
    const fallbackAlbumArt = "/image.png";

    function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
        if (event.currentTarget.src.endsWith(fallbackAlbumArt)) return;
        event.currentTarget.src = fallbackAlbumArt;
    }

    useEffect(() => {
        if (submitState === "pending" && !loading) {
            if (error) {
                alert("Failed to delete the song.")
            } else {
                setSubmitState("success");
            }
        }
    }, [loading, error, submitState]);
    function onDeleteHanlder() {
        setSubmitState("pending");
        dispatch(deleteSong(props._id))
    }
    return (
        <div className={css({ border: 'solid', rounded: 'xl' })}>
            <img
                src={props.albumArt}
                onError={handleImageError}
                className={css({ width: 'full', objectFit: 'cover', roundedTop: 'xl', objectPosition: 'center' })}
            />
            <div className={css({ marginTop: '4', paddingX: '2', paddingBottom: '2', display: 'flex', flexDirection: 'column', gap: '2' })}>
                <div className={css({ display: 'flex', justifyContent: 'space-between' })}>
                    <p className={css({ fontSize: 'xl' })}>{props.title}</p>
                    <div className={css({ display: 'flex', gap: '4' })}><Pencil onClick={props.onEdit} /><Trash2 onClick={onDeleteHanlder} /></div>
                </div>
                <p>{props.artist}</p>
                <div className={css({ display: 'flex', justifyContent: 'space-between' })}>
                    <p>{props.album}</p>
                    <p className={css({ backgroundColor: 'ActiveCaption', color: "Background", rounded: 'xl', paddingX: '2' })}>{props.genre}</p>
                </div>
            </div>
        </div>
    )
}
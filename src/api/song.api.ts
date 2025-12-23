import envConfig from "../config"
import type { AddSongParams, EditSongParams } from "./types"

async function getAllSongs() {
    const res = await fetch(`${envConfig.BASE_URL}/song`)
    if (!res.ok) {
        throw new Error("Fetching songs failed")
    }
    return res.json()
}
async function getStats() {
    const res = await fetch(`${envConfig.BASE_URL}/song/stat`)
    if (!res.ok) {
        throw new Error("Fetching songs failed")
    }
    return res.json()
}
async function addSong({ ...params }: AddSongParams) {
    const res = await fetch(`${envConfig.BASE_URL}/song`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
    })
    if (!res.ok) {
        throw new Error("Adding song failed")
    }
    return res.json()
}
async function editSong({ ...params }: EditSongParams) {
    const res = await fetch(`${envConfig.BASE_URL}/song/${params._id}`, {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
    })
    if (!res.ok) {
        throw new Error("Editing song failed")
    }
    return res.json()
}
async function deleteSong(id: string) {
    const res = await fetch(`${envConfig.BASE_URL}/song/${id}`, {
        method: "DELETE", headers: { "Content-Type": "application/json" }
    })
    if (!res.ok) {
        throw new Error("Deleting song failed")
    }
    if (res.status === 204) {
        return { data: null }
    }
    return res.json()
}
export { getAllSongs, getStats, addSong, editSong, deleteSong }
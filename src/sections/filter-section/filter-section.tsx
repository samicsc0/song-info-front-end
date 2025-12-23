import { Filter, Plus } from "lucide-react"
import { useState } from "react"
import { css } from "../../../styled-system/css"
import AddSong from "../../components/add-song"

export default function FilterSection() {
    const [search, setSearch] = useState("")
    const [showDialog, setShowDialog] = useState(false)

    return (
        <>
            <div
                className={css({
                    width: "full",
                    display: "flex",
                    flexDirection: { base: "column", md: "row" },
                    gap: "4",
                    alignItems: { md: "center" },
                })}
            >
                <input
                    placeholder="Search song..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={css({
                        flex: 1,
                        border: "solid",
                        borderColor: "gray.300",
                        rounded: "md",
                        paddingX: "4",
                        paddingY: "3",
                        _focus: {
                            outline: "none",
                            borderColor: "blue.500",
                        },
                    })}
                />

                <div
                    className={css({
                        display: "flex",
                        gap: "3",
                        width: { base: "full", md: "auto" },
                    })}
                >
                    <div
                        className={css({
                            position: "relative",
                            flex: { base: 1, md: "none" },
                        })}
                    >
                        <Filter
                            size={16}
                            className={css({
                                position: "absolute",
                                left: "3",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "gray.500",
                                pointerEvents: "none",
                            })}
                        />

                        <select
                            className={css({
                                width: "full",
                                paddingLeft: "9",
                                paddingRight: "4",
                                paddingY: "3",
                                border: "solid",
                                borderColor: "gray.300",
                                rounded: "md",
                                background: "white",
                            })}
                        >
                            <option value="">All genres</option>
                            <option>Blues</option>
                            <option>Rock</option>
                            <option>Indie</option>
                            <option>Jazz</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setShowDialog(true)}
                        className={css({
                            display: "flex",
                            alignItems: "center",
                            gap: "2",
                            paddingX: "4",
                            paddingY: "3",
                            rounded: "md",
                            background: "blue.600",
                            color: "white",
                            fontWeight: "medium",
                            _hover: {
                                background: "blue.700",
                            },
                        })}
                    >
                        <Plus size={16} />
                        Add Song
                    </button>
                </div>
            </div>

            {showDialog && <AddSong onClose={() => setShowDialog(false)} />}
        </>
    )
}

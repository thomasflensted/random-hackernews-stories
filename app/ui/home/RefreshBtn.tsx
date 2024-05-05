'use client'
import { IoMdRefresh } from "react-icons/io"

const RefreshBtn = ({ revalidate }: { revalidate: () => void }) => {
    return (
        <button onClick={() => revalidate()} className="flex gap-2 items-center border rounded-md px-4 py-2 my-5">
            <IoMdRefresh />
            <p className="text-xs">Give me 10 fresh stories</p>
        </button>
    )
}
export default RefreshBtn
'use client'

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa"

const BackBtn = () => {

    const { back } = useRouter();

    return (
        <button onClick={() => back()} className="flex gap-1 mt-4 border px-2 py-1 rounded items-center">
            <FaArrowLeft className="text-xs text-blue-600" />
            <p className="text-xs text-blue-600">Go Back</p>
        </button>
    )
}
export default BackBtn
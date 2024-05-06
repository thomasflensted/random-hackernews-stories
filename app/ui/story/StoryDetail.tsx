import { ReactNode } from "react"

const StoryDetail = ({ text, children }: { text?: string, children: ReactNode, }) => {
    return (
        <div className="flex gap-2 items-center">
            {children}
            {text && <p className="text-xs text-gray-600 font-medium">{text}</p>}
        </div>
    )
}
export default StoryDetail
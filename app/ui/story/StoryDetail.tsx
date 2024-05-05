import Link from "next/link"
import { ReactNode } from "react"

type StoryDetailProps = {
    text: string,
    children: ReactNode,
    isLink?: boolean,
    user?: string
}

const StoryDetail = ({ text, children, isLink, user }: StoryDetailProps) => {
    return (
        <div className="flex gap-2 items-center">
            {children}
            <p className="text-xs text-gray-600 font-medium">
                {!isLink && text}
                {isLink && <Link className="underline" href={"/user/" + user + "?page=1"}>Submitted by {user}</Link>}
            </p>
        </div>
    )
}
export default StoryDetail

// {isLink && <p className="text-xs text-gray-600 font-medium">Submitted by <Link className="underline" href={"/user/" + user + "?page=1"}>{user}</Link></p>}

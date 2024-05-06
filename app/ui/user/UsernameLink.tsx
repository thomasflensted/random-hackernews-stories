import { FaArrowUp } from "react-icons/fa"
import Heading from "../global/Heading"

const UsernameLink = ({ id }: { id: string }) => {
    return (
        <a target="_blank" href={"https://news.ycombinator.com/user?id=" + id} className="underline text-blue-600 flex items-center gap-1">
            <Heading text={id} />
            <FaArrowUp className="text-blue-600 text-xs rotate-45" />
        </a>
    )
}
export default UsernameLink
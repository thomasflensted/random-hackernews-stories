import { FaRegCheckCircle, FaRegComment, FaRegFolderOpen, FaRegHeart, FaRegStar } from "react-icons/fa"
import StoryDetail from "./StoryDetail"
import { formatDate, formatScore } from "@/app/lib/helpers";
import Link from "next/link";
import { StoryWithUserScore } from "@/app/lib/types";

const StoryDetails = ({ story, highestScoringUser }: { story: StoryWithUserScore, highestScoringUser: string }) => {

    const iconStyle = "text-blue-500";
    const commentString = `${story.descendants} ${story.descendants === 1 ? 'comment' : 'comments'}`;

    return (
        <>
            <StoryDetail text={formatDate(story.time)}>
                <FaRegCheckCircle className={iconStyle} />
            </StoryDetail>
            <StoryDetail>
                <FaRegFolderOpen className={iconStyle} />
                <p className="text-xs text-gray-600 font-medium">Submitted by:&nbsp;
                    <Link className="text-xs text-gray-600 font-medium underline" href={'/user/' + story.by}>{story.by}</Link>
                </p>
            </StoryDetail>
            <StoryDetail text={`${story.by}'s karma: ${formatScore(story.userScore)} ${story.by === highestScoringUser ? ' 🥇' : ''}`}>
                <FaRegStar className={iconStyle} />
            </StoryDetail>
            <StoryDetail>
                <FaRegComment className={iconStyle} />
                <p className="text-xs text-gray-600 font-medium">
                    <a target="_blank" className="text-xs text-gray-600 font-medium underline" href={'https://news.ycombinator.com/item?id=' + story.id}>{commentString}</a>
                    &nbsp;on Hackernews
                </p>
            </StoryDetail>
            <StoryDetail text={"Story score: " + formatScore(story.score)}>
                <FaRegHeart className={iconStyle} />
            </StoryDetail>
        </>
    )
}
export default StoryDetails
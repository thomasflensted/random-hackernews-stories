import { StoryWithUserScore } from "../../lib/types"
import StoryDetail from "./StoryDetail"
import { LuArrowUpCircle } from "react-icons/lu";
import { formatDate, formatScore } from "../../lib/helpers";
import { FaRegFolderOpen, FaRegHeart, FaRegCheckCircle } from "react-icons/fa";
import PercentageBar from "./PercentageBar";

const StoryCard = ({ story, highestScore }: { story: StoryWithUserScore, highestScore?: number }) => {

    const iconStyle = "text-blue-500";
    const scoreAsPctString = highestScore ? `${Math.round(story.score / highestScore * 100).toString()}%` : '0';

    return (
        <div className="border py-3 px-5 flex flex-col gap-2.5 rounded-md">
            <a href={story.url} target="_blank" className="flex-grow underline font-medium text-sm overflow-hidden whitespace-nowrap text-ellipsis text-blue-700">
                {story.title}
            </a>
            <StoryDetail text={formatDate(story.time)}>
                <FaRegCheckCircle className={iconStyle} />
            </StoryDetail>
            <StoryDetail text={"Submitted by: " + story.by} isLink={true} user={story.by}>
                <FaRegFolderOpen className={iconStyle} />
            </StoryDetail>
            <StoryDetail text={"User karma: " + formatScore(story.userScore)}>
                <FaRegHeart className={iconStyle} />
            </StoryDetail>
            <StoryDetail text={"Story score: " + formatScore(story.score)}>
                <LuArrowUpCircle className={iconStyle} />
            </StoryDetail>
            {highestScore && <PercentageBar width={scoreAsPctString} />}
        </div>
    )
}
export default StoryCard
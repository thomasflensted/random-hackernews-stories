import { StoryWithUserScore } from "../../lib/types";
import StoryLink from "./StoryLink";
import PercentageBar from "./PercentageBar";
import StoryDetails from "./StoryDetails";

type StoryCardProps = {
    story: StoryWithUserScore,
    highestScore: number,
    highestScoringUser: string
}

const StoryCard = ({ story, highestScore, highestScoringUser }: StoryCardProps) => {

    const scoreAsPctString = `${Math.round(story.score / highestScore * 100)}%`;
    const storyUrl = story.url ? story.url : "https://news.ycombinator.com/item?id=" + story.id;

    return (
        <div className="border py-3 px-5 flex flex-col gap-2.5 rounded-md">
            <StoryLink url={storyUrl} title={story.title} />
            <StoryDetails story={story} highestScoringUser={highestScoringUser} />
            <PercentageBar width={scoreAsPctString} />
        </div>
    )
}
export default StoryCard
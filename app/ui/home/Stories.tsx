import { notFound } from "next/navigation";
import { getTopStories } from "../../lib/data";
import StoryCard from "../story/StoryCard";

export async function Stories() {

    const topStories = await getTopStories();
    if (!topStories) notFound();

    topStories.sort((a, b) => a.score > b.score ? 1 : -1);
    const highestScore = topStories[topStories.length - 1].score;
    const highestScoringUser = [...topStories].sort((a, b) => b.userScore > a.userScore ? 1 : -1)[0].by;

    return (
        <>
            {topStories.map(story =>
                <StoryCard
                    key={story.id}
                    story={story}
                    highestScore={highestScore}
                    highestScoringUser={highestScoringUser} />
            )}
        </>
    )
}

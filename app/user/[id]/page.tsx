import { getUserStories } from "@/app/lib/data";
import Heading from "@/app/ui/home/Heading"
import StoryCard from "@/app/ui/story/StoryCard";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {

    const storiesByUser = await getUserStories(params.id);
    if (!storiesByUser) notFound();

    return (
        <div className="w-full flex flex-col items-center">
            <Heading text={"Submissions"} margin="my-5" />
            <main className="grid grid-cols-2 w-1/2 gap-2">
                {storiesByUser.map(story =>
                    <StoryCard
                        key={story.id}
                        story={story} />
                )}
            </main>
        </div>
    )
}
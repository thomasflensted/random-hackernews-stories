import { Suspense } from "react"
import { Stories } from "./Stories"
import { StoryCardSkeleton } from "../skeletons/Skeletons"

const StoryBlock = () => {
    return (
        <main className="flex flex-col md:grid grid-cols-2 md:w-2/3 w-11/12 gap-1 mt-6">
            <Suspense fallback={<StoryCardSkeleton />}>
                <Stories />
            </Suspense>
        </main>
    )
}
export default StoryBlock
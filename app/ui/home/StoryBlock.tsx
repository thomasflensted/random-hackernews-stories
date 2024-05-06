import { Suspense } from "react"
import { Stories } from "./Stories"
import { StoryCardSkeleton } from "../skeletons/Skeletons"

const StoryBlock = () => {
    return (
        <main className="grid grid-cols-2 w-2/3 gap-1">
            <Suspense fallback={<StoryCardSkeleton />}>
                <Stories />
            </Suspense>
        </main>
    )
}
export default StoryBlock
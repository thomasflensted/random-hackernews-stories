import { UserSkeleton } from "@/app/ui/skeletons/Skeletons"
import User from "@/app/ui/user/User"
import { ReactNode, Suspense } from "react"

const layout = ({ children, params }: { children: ReactNode, params: { id: string } }) => {
    return (
        <div className="w-full flex items-center flex-col">
            <Suspense fallback={<UserSkeleton />}>
                <User userId={params.id} />
            </Suspense>
            {children}
        </div>
    )
}
export default layout
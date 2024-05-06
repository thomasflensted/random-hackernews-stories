import Heading from "@/app/ui/global/Heading";
import { UserSkeleton } from "@/app/ui/skeletons/Skeletons";
import BackBtn from "@/app/ui/user/BackBtn";
import User from "@/app/ui/user/User";
import { Suspense } from "react";

export default async function page({ params }: { params: { id: string } }) {
    return (
        <div className="w-full flex flex-col items-center">
            <Heading text="User Overview" margin="my-5" size="text-lg" />
            <Suspense fallback={<UserSkeleton />}>
                <User userId={params.id} />
            </Suspense>
            <BackBtn />
        </div>
    )
}
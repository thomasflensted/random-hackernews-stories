import { notFound } from "next/navigation";
import { getUserDetails } from "../../lib/data";
import { formatScore } from "../../lib/helpers";
import UserDetail from "./UserDetail";
import Heading from "../home/Heading";

export default async function User({ userId }: { userId: string }) {

    const userDetails = await getUserDetails(userId)
    if (!userDetails) notFound();

    const date = new Date(userDetails.created * 1000).toLocaleString().split(",")[0];

    return (
        <div className="border py-3 px-5 flex flex-col gap-2.5 rounded-md mt-6 w-1/5">
            <Heading text={userDetails.id} />
            <UserDetail title="Total submissions" info={formatScore(userDetails.submitted.length)} />
            <UserDetail title="Karma" info={formatScore(userDetails.karma)} />
            <UserDetail title="User since" info={date} />
        </div>
    )
}
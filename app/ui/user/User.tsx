import { notFound } from "next/navigation";
import { getUserDetails } from "../../lib/data";
import { formatScore } from "../../lib/helpers";
import UserDetail from "./UserDetail";
import UsernameLink from "./UsernameLink";
import DOMPurify from "isomorphic-dompurify";
import Bio from "./Bio";

export default async function User({ userId }: { userId: string }) {

    const userDetails = await getUserDetails(userId)
    if (!userDetails) notFound();

    const date = new Date(userDetails.created * 1000).toLocaleDateString('dk').split(",")[0];

    return (
        <div className="border py-3 px-5 flex flex-col gap-2.5 rounded-md w-1/4">
            <UsernameLink id={userDetails.id} />
            <UserDetail title="Total submissions" info={formatScore(userDetails.submitted.length)} />
            <UserDetail title="Karma" info={formatScore(userDetails.karma)} />
            <UserDetail title="User since" info={date} />
            {userDetails.about && <Bio rawBio={userDetails.about} />}
        </div>
    )
}
import RefreshBtn from "./ui/home/RefreshBtn";
import { revalidatePath } from "next/cache";

import StoryBlock from "./ui/home/StoryBlock";
import Heading from "./ui/global/Heading";

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center">
      <Heading text="10 Random Stories From HackerNews" margin="my-5" size="text-lg" />
      <StoryBlock />
      <RefreshBtn revalidate={async () => {
        'use server'
        revalidatePath('/')
      }} />
    </div>
  );
}

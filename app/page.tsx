import RefreshBtn from "./ui/home/RefreshBtn";
import { revalidatePath } from "next/cache";
import Heading from "./ui/home/Heading";
import StoryBlock from "./ui/home/StoryBlock";

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

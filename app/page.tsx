import RefreshBtn from "./ui/home/RefreshBtn";
import { revalidatePath } from "next/cache";
import StoryBlock from "./ui/home/StoryBlock";

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center">
      <StoryBlock />
      <RefreshBtn revalidate={async () => {
        'use server'
        revalidatePath('/')
      }} />
    </div>
  );
}

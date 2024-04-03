import { Banner } from "@/components/banner";
import { RecommendMenu } from "@/components/recommend-menu";
import "@/lib/styles/patterns.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <RecommendMenu />
    </div>
  );
}

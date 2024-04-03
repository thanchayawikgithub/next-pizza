import { Banner } from "@/components/banner";
import { MenuList } from "@/components/menu-list";
import "@/lib/styles/patterns.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <MenuList />
      <div>sd</div>
    </div>
  );
}

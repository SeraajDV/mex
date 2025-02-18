import Link from "next/link";
import Search from "./search";
import PopularTags from './popular-tags';
import Recommendations from './recommendations';

export const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="text-text_gray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>&copy; 2025 Mex</span>
      </div>
    </div>
  );
};

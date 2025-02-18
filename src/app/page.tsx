import Link from "next/link";

import Feed from "@/components/feed";
import Share from "@/components/share";

const Homepage = () => {
  return (
    <div className="">
      <div className="px-4 pt-4 flex justify-between text-text_gray font-bold border-b-[1px] border-border_gray">
        <Link
          href="/"
          className="flex items-center border-b-4 border-icon_purple pb-3"
        >
          For you
        </Link>
        <Link href="/" className="flex items-center pb-3">
          Following
        </Link> 
        <Link href="/" className="hidden items-center pb-3 md:flex">
          React.js
        </Link>
        <Link href="/" className="hidden items-center pb-3 md:flex">
          JavaScript
        </Link>
        <Link href="/" className="hidden items-center pb-3 md:flex">
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;

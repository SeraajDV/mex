import Image from "./image";

const Search = () => {
  return (
    <div className="bg-input_gray rounded-full flex items-center gap-4 px-4 py-2">
      <Image path="icons/explore.svg" alt="serach" w={16} h={16} />
      <input type="text" placeholder="Search" className="bg-transparent outline-none placeholder:text-text_gray" />
    </div>
  );
};

export default Search;

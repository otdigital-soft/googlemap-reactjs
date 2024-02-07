import Select from "components/select";
import { useState } from "react";
import { SortbyIcon } from "utils/imgImport";

const sortbyOptions = [
  {
    value: "relevant",
    label: "Relevant",
  },
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "following",
    label: "Following",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
];

const SortBy = () => {
  const [sortby, setSortby] = useState("");
  return (
    <div className="flex items-center">
      <img src={SortbyIcon} alt="sortby" />
      <span className="text-gray-600 font-semibold whitespace-nowrap px-1">
        SortBy:
      </span>
      <Select
        options={sortbyOptions}
        selected={sortby}
        callback={setSortby}
        className="border-none bg-transparent mt-0 text-blue-600 font-semibold pl-0 pr-5 py-0 text-lg"
        id="sortby"
      />
    </div>
  );
};

export default SortBy;

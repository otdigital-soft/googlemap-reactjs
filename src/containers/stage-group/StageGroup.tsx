import Radio from "components/radio";

const StageGroup = () => {
  return (
    <>
      <h3 className="pb-2 font-semibold text-gray-900 dark:text-white">
        Stage
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 flex ">
        <li className="w-full">
          <Radio id="stage-all" label="All" color="red" name="stage-input" />
        </li>
        <li className="w-full">
          <Radio id="stage-all" label="201" color="blue" name="stage-input" />
        </li>
        <li className="w-full">
          <Radio id="stage-all" label="102" color="green" name="stage-input" />
        </li>
      </ul>
    </>
  );
};

export default StageGroup;

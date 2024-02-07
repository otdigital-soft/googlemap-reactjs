import styled from "@emotion/styled";
type Option = {
  value: string;
  label: string;
};
interface SelectProps {
  id: string;
  selected: string;
  callback: (value: string) => void;
  options: Array<Option>;
  className?: string;
  placeholder?: string;
}

const SelectWrapper = styled.select`
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
`;
const Select = ({
  selected,
  callback,
  id,
  options,
  placeholder,
  className,
}: SelectProps) => {
  return (
    <SelectWrapper
      id={id}
      className={`bg-gray-50 border border-gray-400 text-[#63676D] mt-2 text-sm font-semibold rounded-md focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      defaultValue={"DEFAULT"}
      onChange={({ target: { value } }) => callback(value)}>
      {placeholder && (
        <option value="DEFAULT" disabled>
          {placeholder}
        </option>
      )}
      {options.map(
        (option, idx) => (
          <option
            value={option.value}
            key={idx}
            className="capitalize"
            selected={selected === option.value}>
            {option.label}
          </option>
        ),
        this
      )}
    </SelectWrapper>
  );
};

export default Select;

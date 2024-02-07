import Input from "components/input";
import { SearchIcon } from "utils/imgImport";

interface SearchInputProps {
  keyDown: (val: string) => void;
}
const SearchInput = ({ keyDown }: SearchInputProps) => {
  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      //@ts-ignore
      keyDown(event.target.value);
    }
  };
  return (
    <Input
      id="lead-search"
      placeholder="Search"
      required={false}
      icon={SearchIcon}
      keyDown={handleKeyPress}
    />
  );
};

export default SearchInput;

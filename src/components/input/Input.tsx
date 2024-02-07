type InputProps = {
  id: string;
  placeholder: string;
  required: boolean;
  icon: string;
  keyDown?: (e: React.KeyboardEvent) => void;
};

const Input = ({ id, placeholder, required, icon, keyDown }: InputProps) => {
  return (
    <>
      <div className="relative">
        <input
          type="search"
          id={id}
          className="block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-md bg-gray-50 focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onKeyDown={keyDown}
          required={required}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <img src={icon} className="w-6 h-6" alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Input;

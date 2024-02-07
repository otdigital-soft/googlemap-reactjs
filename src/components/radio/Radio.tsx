type RadioProps = {
  name: string;
  id: string;
  label: string;
  color: string;
};

const Radio = ({ id, name, label, color }: RadioProps) => {
  return color !== "" ? (
    <>
      <div className="flex items-center mr-4">
        <input
          id={id}
          type="radio"
          name={name}
          className={`w-6 h-6 text-${color}-600 bg-gray-100 border-gray-300 focus:ring-${color}-500 dark:focus:ring-${color}-600 dark:ring-offset-gray-800 focus:ring-2 `}
        />
        <label
          htmlFor={id}
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
      </div>
    </>
  ) : null;
};

export default Radio;

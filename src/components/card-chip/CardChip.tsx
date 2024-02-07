type CardChipProps = {
  text: string;
  icon: string;
};

const CardChip = ({ text, icon }: CardChipProps) => {
  return (
    <div className="flex items-center py-2 px-2 bg-white border border-gray-600 border-opacity-20 rounded-md">
      {icon && <img src={icon} alt="icon" className="mr-2" />}
      <span className="font-semibold text-[11.2px] leading-[14px]">{text}</span>
    </div>
  );
};
export default CardChip;

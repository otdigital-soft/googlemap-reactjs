type CardMediaProps = {
  image: string;
  title: string;
};
export const CardMedia = ({ image, title }: CardMediaProps) => {
  return <img className="w-full" src={image} alt={title} />;
};

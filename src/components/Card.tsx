import { Link } from 'react-router-dom';
import Heading from '~~/Heading';

type CardProps = {
  img: string;
  header: string;
  description: string;
};

const defaultProps: CardProps = {
  img: '',
  header: '',
  description: ''
};

const Card = ({ img, header, description }: CardProps) => {
  return (
    <Link to="/search">
      <div className="h-full p-4 transition-colors duration-300 rounded bg-cod-gray-400 hover:bg-mine-shaft-500">
        <div className="mb-4">
          <img src={img} alt="" className="object-cover object-center w-full h-full rounded" />
        </div>
        <Heading size="base" className="mb-1">
          {header}
        </Heading>
        <p className="text-sm text-silver-chalice line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

Card.defaultProps = defaultProps;
export default Card;
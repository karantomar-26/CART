
import { Link } from 'react-router-dom'

function Card({ product }: { product: { title: string; image: string; id: Number } }) {
  return (
    <Link to={`/details/${product.id}`} className="border overflow-hidden rounded-lg p-2 w-[20%] h-[35vh] flex items-center flex-col">
      <div className="hover:scale-110 w-[70%] h-[35vh] bg-contain bg-center bg-no-repeat" style={{
          backgroundImage: `url(${product.image})`,
          
        }}>
        
      </div>
      <h1 className="hover:text-blue-400 mt-[5%]">{product.title}</h1>
    </Link>
  );
}

export default Card;

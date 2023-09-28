import { Link } from "react-router-dom";

const Card = ({ card}) => {
  const { id, imgSrc, category, title, bgColor } = card || {};

  return (
    
   
     <Link to={`/cards/${id}`} >
      <div  style={{ backgroundColor: bgColor }} className={` h-96 relative flex flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={imgSrc} className=" h-56 object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p  style={{ backgroundColor: bgColor }} className="block font-sans  text-2xl  font-medium leading-relaxed text-blue-gray-900 antialiased">
              {category.text}
            </p>
          </div>
          <p style={{ color: title.bgColor }} className="block text-2xl font-bold leading-normal text-gray-700 antialiased opacity-75">
            {title.text}
          </p>
        </div>
      </div>
     </Link>
    
    
  );
};

export default Card;

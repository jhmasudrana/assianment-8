// eslint-disable-next-line react/prop-types
const DonationDetails = ({card}) => {
  const { bgColor, imgSrc, category,  title, price } = card || {};

  return (
    <div>
 <div style={{ backgroundColor: bgColor }} className="  h-40 my-2  flex w-[500px]  flex-row rounded-xl">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none">
    <img 
      src={imgSrc}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h2 style={{ backgroundColor: bgColor }} className="w-20 text-center ">{category.text}</h2>
    <h4  className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title.text}
    </h4>
    <p style={{ color: title.bgColor }} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      ${price}
    </p>
    <a className="inline-block" href="#">
      <button style={{ color: title.bgColor }}
        className="flex  items-center gap-2 rounded-lg py-2 px-3 text-center align-middle  text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
        
      </button>
    </a>
  </div>
</div>
    </div>

  );
};

export default DonationDetails;

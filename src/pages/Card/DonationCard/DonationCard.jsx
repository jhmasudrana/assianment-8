import swal from "sweetalert";

const DonationCard = ({ card }) => {
  const { id, imgSrc, description, price } = card || {};
  console.log(id);
  const handelAddDonation = () => {
    const addDonationArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (!donationItems) {
      addDonationArray.push(card);
      localStorage.setItem("donation", JSON.stringify(addDonationArray));
      swal("donation add", "donation added successfully!", "success");
    } else {
      const exits = donationItems.find((card) => card.id == id);

      if (!exits) {
        addDonationArray.push(...donationItems, card);
        localStorage.setItem("donation", JSON.stringify(addDonationArray));
        swal("donation add", "donation added successfully!", "success");

      } else {
        swal("error", "no duplicate!", "error");
      }
    }
  };
  
  return (


    <div>
      <div className="  w-[1200px]  flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="    overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="w-[1200px] h-full relative " src={imgSrc} alt="" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-bold	 text-3xl leading-snug tracking-normal text-blue-gray-900 antialiased">
            {card?.title?.text}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div className="  p-6 pt-0">
          <button
            onClick={handelAddDonation}
            className=" bottom-96  absolute select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Donate-$
            
            {price}
          </button>
        </div>
      </div>
    </div> 
    
  );
};

export default DonationCard;

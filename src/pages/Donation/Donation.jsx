import { useEffect, useState } from "react";

import DonationDetails from "./DonationDetails";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No Data  Found");
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <p>{noFound}</p>
      ) : (
        <div>
          <div className=" grid grid-cols-2 ">
            {isShow
              ? donation.map((card) => (
                  <DonationDetails key={card.id} card={card}></DonationDetails>
                ))
              : donation
                  .slice(0, 4)
                  .map((card) => (
                    <DonationDetails
                      key={card.id}
                      card={card}
                    ></DonationDetails>
                  ))}
          </div>
         { donation.length > 4 &&  <button
            onClick={() => setIsShow(!isShow)}
            className=" rounded px-5 bg-green-600 block mx-auto"
          >
            {isShow ? "see less": "see more.."}
          </button>}
        </div>
      )}
    </div>
  );
};

export default Donation;

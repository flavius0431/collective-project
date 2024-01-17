import { NGOProps } from "@/utils/types/ngoProps";
import NGOCard from "./NGOCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDonations } from "@/apis/donationHApi";

const DonationCards = () => {
  const navigate = useNavigate();
  const [ngos, setNgos] = useState<NGOProps[]>([]);
  useEffect(() => {
    (async () => {
      setNgos(await getAllDonations("admin", "admin"));
    })();
  }, [ngos]);

  const onVolunteerClick = () => {
    navigate("/volunteer");
  };

  return (
    <div className="items-center lg:max-w-[715px] 2xl:max-w-[1069px]">
      <div className="flex flex-wrap">
        {ngos.map((ngo, index) => (
          <div key={index} className="m-2 ">
            <NGOCard
              ngo={ngo}
              onDonateClick={onVolunteerClick}
              onContactClick={onVolunteerClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCards;

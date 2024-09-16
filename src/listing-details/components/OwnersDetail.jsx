import React from "react";
import { Button } from "../../components/ui/button";
import Service from "../../components/shared/Service";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function OwnersDetail({ carDetail }) {
  const { user } = useUser();
  const navigation = useNavigate();

  const OnMessageOwnerButtonClick = async () => {
    const userId = user.primaryEmailAddress.emailAddress.split("@")[0];
    const ownerUserId = carDetail?.createdBy.split("@")[0];

    try {
      await Service.CreateSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}

    try {
      await Service.CreateSendBirdUser(
        ownerUserId,
        carDetail?.userName,
        carDetail?.userImageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}

    try {
      const resp = await Service.CreateSendBirdChannel(
        [userId, ownerUserId],
        carDetail?.listingTitle
      );
      console.log(resp);
      console.log("Channel Created");
      navigate("/profile");
    } catch (e) {}
  };

  console.log(carDetail);
  return (
    <div className="p-10 border rounded-xl shadow-md my-7">
      <h2 className="font-medium text-2xl my-3">Owner / Deals</h2>
      <img
        src={carDetail?.userImageUrl}
        className="w-[70px] h-[70px] rounded-full"
      />
      <h2 className="mt-2 font-bold text-xl">{carDetail?.userName}</h2>
      <h2 className="mt-2 text-gray-500">{carDetail?.createdBy}</h2>

      <Button
        className="w-full mt-6"
        onClick={OnMessageOwnerButtonClick}
      >
        Message Owner
      </Button>
    </div>
  );
}

export default OwnersDetail;

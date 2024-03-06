import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api/api-client";
import MangeHotelForm from "../forms/ManageHotelForm/MangeHotelForm";
import { useAppContext } from "../context/AppContext";

const EditHotel = () => {
  const { hotelId } = useParams();
  const {showToast} = useAppContext();

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

 const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {
      showToast({message: "Hotel Saved!", type: "SUCCESS"})
    },  
    onError: () => {
      showToast({message: "Error Saving Hotel", type: "ERROR"})
    }
 })

 const handleSave = (hoteFormData: FormData) => {
    mutate(hoteFormData)
 }

  return <MangeHotelForm hotel= {hotel}  onSave={handleSave} isLoading={isLoading} />;
};

export default EditHotel;

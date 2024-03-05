import { useMutation } from "react-query";
import MangeHotelForm from "../forms/ManageHotelForm/MangeHotelForm";
import { useAppContext } from "../context/AppContext";
import * as apiClient from "../api/api-client";

const AddHotel = () => {
  const { showToast } = useAppContext();
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel!", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return <MangeHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;

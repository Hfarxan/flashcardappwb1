import { useState } from "react";
import { toast } from "react-toastify";

const useFlashCardPage = () => {
  const [isRemoving, setIsRemoving] = useState(false);

  const updateCardStatus = async (id, newStatus) => {
    const updatedData = { status: newStatus };
    try {
      const response = await fetch("http://localhost:3001/cards/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      console.log(response);

      if (response.status == 200) {
        toast(`Status Updated to ${newStatus}`);
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message ?? e.data.message);
    }
  };

  const removeCard = async (id) => {
    try {
      setIsRemoving(true);
      const response = await fetch(`http://localhost:3001/cards/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message ?? e.data.message);
    }
    setIsRemoving(false);
  };

  return { updateCardStatus, removeCard, isRemoving };
};

export default useFlashCardPage;

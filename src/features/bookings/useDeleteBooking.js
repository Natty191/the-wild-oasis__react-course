import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteBooking,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: () => {
      toast.error("There was an error deleting booking");
    },
  });

  return { deleteBooking, isDeleting, error };
}

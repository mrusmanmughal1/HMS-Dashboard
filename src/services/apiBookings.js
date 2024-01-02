import { getToday } from "../helpers/helper";
import { PAGE_SIZE } from "../utils/GlobalConstants";
import supabase from "./supabase";

export const getBookings = async ({ filters, page }) => {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at , startDate ,endDate,numNights, numGuests, status,totalPrice ,cabins(name),guests(fullName,email)",
      { count: "exact" }
    );
  if (filters !== null) query = query.eq(filters.field, filters.value);
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error(error.message);
  }
  return { data, count };
};

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("* ,cabins(name),guests(fullName,email,nationalID)", {
      count: "exact",
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getUpdateCheckin = async (id, obj) => {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();
  if (error) {
    throw new Error(error);
  }
  return data;
};

export const getDeleteBooking = async (id) => {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
};

// get the booking according to the Date

export const getBookingbyDate = async (date) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));
  if (error) {
    console.error(error);
    throw new Error("Booking");
  }
  return data;
};
//get stays
export const getStaysAfterDate = async (date) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*,guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());
  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
};

//Today activity

export const getTodayActivity = async () => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*,guests(fullName)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.check-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

    if (error) {
      console.error(error);
      throw new Error("Booking could not be deleted");
    }
  return data;
};

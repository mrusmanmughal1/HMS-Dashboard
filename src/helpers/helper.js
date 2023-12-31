import { formatDistance, parseISO } from "date-fns";

import { differenceInDays } from 'date-fns/esm';

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));
  
export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');


    export const getToday=(options={})=>{

      const today = new Date();

      if(options?.end)
        today.setUTCDate(23,59,59,999)
        else today.setUTCHours(0,0,0,0)
        return today.toISOString()
      
    }
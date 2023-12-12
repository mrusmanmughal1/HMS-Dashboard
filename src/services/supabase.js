import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qkxdiajcjfphijhrlcha.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreGRpYWpjamZwaGlqaHJsY2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5NTExNzMsImV4cCI6MjAxNzUyNzE3M30.MM5QuGbNUQtaCRXSxsocjiMh-XVbjBOINKKDzCvNTEo";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

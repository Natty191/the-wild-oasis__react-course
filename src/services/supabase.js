import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://enviwnwyreqdjmqcyirt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVudml3bnd5cmVxZGptcWN5aXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NzQ3MDQsImV4cCI6MjAxMTE1MDcwNH0.kZtAOhA_uQKtJfdc1Jwa-dhSeuMugno1wbk50b51PI0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

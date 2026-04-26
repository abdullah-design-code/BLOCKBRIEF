import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://djytcpkqjwidbtoglpki.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqeXRjcGtxandpZGJ0b2dscGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNzk5MjQsImV4cCI6MjA5Mjc1NTkyNH0.j7QTEGcTtvhMpWoP4AySEDk_s2HiZsEEkRE3jr1Oz2c";

export const supabase = createClient(supabaseUrl, supabaseKey);

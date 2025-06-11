import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ufweessqlmazphqyletf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmd2Vlc3NxbG1henBocXlsZXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MjUyMzAsImV4cCI6MjA2NTIwMTIzMH0.VrLUzQ9FKz3waLBYRGfOkZVbnekp6-BtmqDSST2y_wc";

const client = createClient(supabaseUrl, supabaseKey);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      supabase: client,
    },
  };
});

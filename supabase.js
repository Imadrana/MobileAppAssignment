import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://your-project-url.supabase.cohttps://dldmtiedrwzaitvumydb.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-keyeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsZG10aWVkcnd6YWl0dnVteWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NDM2ODgsImV4cCI6MjA1ODUxOTY4OH0.F2ZNB6N5ov5uauzNtLETdiF5_NFVIqLWbqt8Rlp8dNc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

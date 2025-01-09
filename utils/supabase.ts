import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient("https://gmkmabyamgfnokjqdztq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdta21hYnlhbWdmbm9ranFkenRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMzQxNTksImV4cCI6MjA1MTgxMDE1OX0.gViy7J8j8qNkWU7iSriKj_C2ZoKH4QgDkbVq_mDEEp8");

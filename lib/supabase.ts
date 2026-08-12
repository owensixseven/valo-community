import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration')
}

// Client-side Supabase client (for public data and auth)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client (for admin operations)
if (supabaseServiceKey) {
  export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)
}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pfqpktnhvpbzoqdbnrgv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcXBrdG5odnBiem9xZGJucmd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3ODE2MDUsImV4cCI6MjEwNjM1NzYwNX0.rrb6A8Kg5UYC_3zpGX3JusMZmRW0MAZ_HSoScfXurV8"

export const supabase = createClient(supabaseUrl, supabaseKey)

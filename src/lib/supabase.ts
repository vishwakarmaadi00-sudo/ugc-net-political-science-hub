import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pfqpktnhvpbzoqdbnrgv.supabase.co"
const supabaseKey = "sb_publishable_VK4m5fR1J5aLT5a1uQlM5g_4I5k5O6e"

export const supabase = createClient(supabaseUrl, supabaseKey)

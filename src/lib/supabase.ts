
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://heoqbgvgjvlvzubdrbjo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlb3FiZ3ZnanZsdnp1YmRyYmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MDg0NzYsImV4cCI6MjA2MDQ4NDQ3Nn0.lmWVhREB-XO_PXYwJLJ8zjo0NNC_3yAAUX1RRWJsx1I'

export const supabase = createClient(supabaseUrl, supabaseKey)

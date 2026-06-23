import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nvjbnxdhepmefwqtgdit.supabase.co';
const supabaseKey = 'sb_publishable_Ntc1oJAvevYtqY01TuHMTg_2y-H-E6V';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
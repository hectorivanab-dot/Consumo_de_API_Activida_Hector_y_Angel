import { supabase } from '../config/supabase';

export async function syncData() {
  try {

    const payload = {
      bateria: 80,
      red: '4G'
    };

    const { data, error } = await supabase
      .from('telemetry_logs')
      .insert([
        {
          device_os: 'Android',
          payload,
          status_code: 200
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    return data;

  } catch (error) {
    console.error(error);
    return [];
  }
}
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export async function getProfiles() {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) throw error;
  return data;
}

export async function getProjects() {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) throw error;
  return data;
}

export async function getAllocations() {
  const { data, error } = await supabase.from('allocations').select('*');
  if (error) throw error;
  return data;
}

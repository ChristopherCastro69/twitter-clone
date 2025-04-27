import { supabase } from "../services/supabase/supabaseClient";

export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error };
  }
  return { data };
};

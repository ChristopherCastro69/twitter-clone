import { supabase } from "../services/supabase/supabaseClient";

export const registerUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return { error };
  }
  return { data };
};
export default registerUser;

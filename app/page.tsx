import { getUser } from '@/utils/supabase/queries';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function Dashboard() {
  const supabase = createClient();
  const [user] = await Promise.all([getUser(supabase)]);

  if (!user) {
    redirect('http://localhost:3000/dashboard/main');
  } else {
    return redirect('http://localhost:3000/dashboard/main');
  }
}

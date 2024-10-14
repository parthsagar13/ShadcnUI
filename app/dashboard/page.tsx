import { getUser } from '@/utils/supabase/queries';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function Dashboard() {
  const supabase = createClient();
  const [user] = await Promise.all([getUser(supabase)]);

  if (!user) {
    redirect('http://localhoast:3000/shadcn-nextjs-boilerplate/dashboard/main');
  } else {
    return redirect(
      'http://horizon-ui.com/shadcn-nextjs-boilerplate/dashboard/signin'
    );
  }
}

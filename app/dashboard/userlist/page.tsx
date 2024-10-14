import Userlist from '@/components/dashboard/userlist'
import React from 'react'
import { getUserDetails, getUser } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';


export default async function UserList() {
  const supabase = createClient();

  const [user, userDetails] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase)
  ]);

  return (
    <Userlist user={user}/>
  )
}


"use client"
import DashboardLayout from '@/components/layout';
import MainDashboardTable from '@/components/dashboard/main/cards/MainDashboardTable';
import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AddEditUser } from './AddEditUser';
interface Props {
  user: User | null | undefined;
}

const tableDataUserReports = [
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'thomas@gmail.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:29', 
   lastsigned: '06 Nov, 2023 11:29', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'markwilliam@hotmail.com', 
   provider: 'Email',
   created: '06 Nov, 2023 11:21', 
   lastsigned: '06 Nov, 2023 11:21', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
  {
   checked:'',
   email: 'vlad@simmmple.com', 
   provider: 'Google',
   created: '06 Nov, 2023 11:33', 
   lastsigned: '06 Nov, 2023 11:33', 
   uuid: 'f3f42fc419-ce32-49fc-92df...',
  }, 
 ];

export default function Userlist(props: Props) {

  return (
    <DashboardLayout
      user={props?.user}
      title="Subscription Page"
      description="Manage your subscriptions"
    >
      <div className="h-full w-full">
        <div className="mb-5 flex gap-5 justify-end flex-col xl:flex-row w-full text-zinc-950 dark:text-white">
        {/* <Button
          className="flex h-full max-h-full w-full items-center justify-center rounded-lg py-4 text-base font-medium md:ms-4 md:w-[200px]"
          onClick={() => setisDlgOpen(true)}
        >
          Create New User
        </Button> */}
        <AddEditUser/>
        </div>
        <div className="h-full w-full rounded-lg dark:text-white  ">
            <MainDashboardTable tableData={tableDataUserReports} />
        </div>
      </div>
      {/* {isDlgOpen && <AddEditUser/>} */}
    </DashboardLayout>
  );
}

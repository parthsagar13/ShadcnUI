
import DashboardLayout from '@/components/layout';
import { User } from '@supabase/supabase-js';
interface Props {
  user: User | null | undefined;
}

export default function Userlist(props: Props) {
  return (
    <DashboardLayout
      user={props?.user}
      title="Subscription Page"
      description="Manage your subscriptions"
    >
      <div className="h-full w-full">
        <div className="mb-5 flex gap-5 flex-col xl:flex-row w-full text-zinc-950 dark:text-white">
          {/* <MainChart /> */}
          smcasclaskmclal
        </div>
        <div className="h-full w-full rounded-lg ">
           hii parth
          {/* <MainDashboardTable tableData={tableDataUserReports} /> */}
        </div>
      </div>
    </DashboardLayout>
  );
}

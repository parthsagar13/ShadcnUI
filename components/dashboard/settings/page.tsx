import Settings from '@/components/dashboard/settings';
import { redirect } from 'next/navigation';

export default async function SettingsPage() {
  
  return <Settings userDetails={""} user={null} />;
}

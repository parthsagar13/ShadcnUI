import { redirect } from 'next/navigation';

export default async function Dashboard() {

  if (true) {
    redirect('http://localhost:3000/dashboard/main');
  } 
}

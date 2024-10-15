import Main from '@/components/dashboard/main';

export default async function Account() {

  // if (!user) {
  //   return redirect('/dashboard/signin');
  // }

  return <Main user={null} userDetails={""} />;
}

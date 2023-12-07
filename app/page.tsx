import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session?.user!.name}</h1>
    </main>
  )
}

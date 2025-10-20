import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId) {
    return <div>로그인이 필요합니다. Sign in 해주세요.</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <p>
        환영합니다, {user?.firstName} {user?.lastName}!
      </p>
      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
    </div>
  )
}

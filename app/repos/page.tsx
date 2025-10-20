'use client'

import { useUser } from '@clerk/nextjs'

export default function DashboardClientPage() {
  const { user } = useUser()

  if (!user) {
    return <div>로그인이 필요합니다.</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard (Client-side)</h1>
      <p>이 페이지는 클라이언트 컴포넌트 방식으로 사용자 정보를 불러옵니다.</p>
      <p>
        환영합니다, {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
    </div>
  )
}

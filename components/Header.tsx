'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-red-900 py-4 px-8">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center font-bold">
          <Link href="/">
            <div className="text-lg text-white">Clerk App</div>
          </Link>
        </div>

        <div className="flex items-center font-bold">
          {/* 로그인 안 한 상태 */}
          <SignedOut>
            <div className="text-gray-300 hover:text-white mr-4 cursor-pointer">
              <SignInButton />
            </div>
            <div className="text-gray-300 hover:text-white mr-4 cursor-pointer">
              <SignUpButton />
            </div>
          </SignedOut>

          {/* 로그인 한 상태 */}
          <SignedIn>
            <Link href="/repos" className="text-gray-300 hover:text-white mr-4">
              Repos
            </Link>
            <Link
              href="/courses"
              className="text-gray-300 hover:text-white mr-4"
            >
              Courses
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-white mr-4"
            >
              Dashboard-S
            </Link>
            <Link
              href="/dashboard-c"
              className="text-gray-300 hover:text-white mr-4"
            >
              Dashboard-C
            </Link>
            <div className="text-gray-300 hover:text-white mr-4">
              <UserButton />
            </div>
            <div className="text-gray-300 hover:text-white mr-4 cursor-pointer">
              <SignOutButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

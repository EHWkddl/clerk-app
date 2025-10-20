export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">Welcome Home</h1>

      <div className="space-y-5">
        <div className="rounded-xl bg-gray-100 p-6">
          <a
            href="https://clerk.com/"
            target="_blank"
            className="text-xl text-blue-700 font-bold"
          >
            clerk.com
          </a>
          <p className="mt-2">
            This is a demo of Clerk authentication. Clerk is more than a
            "sign-in box." Integrate complete user management UIs and APIs,
            purpose-built for React, Next.js, and the Modern Web.
          </p>
        </div>

        <div className="rounded-xl bg-gray-100 p-6">
          <a
            href="https://api.github.com/"
            target="_blank"
            className="text-xl text-blue-700 font-bold"
          >
            api.github.com
          </a>
          <p className="mt-2">Explore github repositories using Fetch API</p>
        </div>

        <div className="rounded-xl bg-gray-100 p-6">
          <a href="/api/courses" className="text-xl text-blue-700 font-bold">
            Backend API
          </a>
          <p className="mt-2">
            Provide Backend API service that provide extensive courses
            information in web development
          </p>
        </div>
      </div>
    </>
  )
}

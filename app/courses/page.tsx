async function getRepos() {
  const res = await fetch('https://api.github.com/repositories?since=100', {
    next: { revalidate: 60 },
  })
  return res.json()
}

export default async function ReposPage() {
  const repos = await getRepos()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Public GitHub Repositories</h1>
      <ul className="space-y-2">
        {repos.slice(0, 10).map((repo: any) => (
          <li key={repo.id} className="bg-gray-100 p-3 rounded">
            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-700 font-semibold"
            >
              {repo.full_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

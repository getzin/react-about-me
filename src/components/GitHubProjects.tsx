import { useEffect, useState } from "react";
import { fetchGitHubRepositories } from "../api/fetchGitHubRepositories";

import type { Repository } from "../types/github";

export default function GitHubProjects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function loadRepositories() {
      const repos = await fetchGitHubRepositories("getzin");

      setRepositories(repos);
    }

    loadRepositories();
  }, []);

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">GitHub Projects</h2>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <div key={repo.id} className="bg-zinc-800 rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold">{repo.name}</h3>

            <p className="text-zinc-400 mb-3">
              {repo.description || "Keine Beschreibung vorhanden."}
            </p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">
                {repo.language || "Unbekannt"}
              </span>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

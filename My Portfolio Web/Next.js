import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);
  const githubUsername = "KingBenice"; // Replace with your GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchRepos();
  }, [githubUsername]);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <Head>
        <title>{githubUsername}'s Portfolio</title>
      </Head>
      <header className="text-center py-10">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold mt-4">{githubUsername}'s Portfolio</h1>
        <p className="text-gray-400">Full-Stack Developer | Open Source Enthusiast</p>
      </header>
      
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {error ? (
          <p className="text-red-400">Error fetching repositories: {error}</p>
        ) : repos === null ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {repos.map((repo) => (
              <div key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{repo.name}</h3>
                <p className="text-gray-400">{repo.description || "No description available."}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-2 inline-block"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="text-center mt-10 text-gray-500">
        <p>Made with ❤️ by {githubUsername}</p>
        <p>
          <a href={`mailto:${githubUsername}@example.com`} className="text-blue-400 hover:underline">Email</a> |
          <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> GitHub</a>
        </p>
      </footer>
    </div>
  );
}

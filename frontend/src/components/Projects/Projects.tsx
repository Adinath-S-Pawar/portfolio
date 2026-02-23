import React, { useState, useEffect } from 'react';
import './Projects.css';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const pinnedRepos = ['Securix', 'DocuMate', 'Websocket-Kanban-board', 'Customised-Virtual-File-System', 'vedaz-booking', 'Rhythmic'];
  useEffect(() => {
    const fetchRepos = async () => {
  try {
    const response = await fetch('https://api.github.com/users/Adinath-S-Pawar/repos?per_page=50');
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    const filtered = data.filter((repo: Repo) => pinnedRepos.includes(repo.name));
    setRepos(filtered);
  } catch (err: any) {
    setError(err.message || 'Error fetching repositories');
  } finally {
    setLoading(false);
  }
};

    fetchRepos();
  }, []);

  const formatName = (name: string) => {
    return name.replace(/-/g, ' ');
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Featured Projects</h2>
        <div className="heading-underline"></div>

        {error && (
          <div className="projects-error">
            <p>{error}</p>
          </div>
        )}

        {!error && loading && (
          <div className="projects-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="project-card skeleton">
                <div className="skeleton-title"></div>
                <div className="skeleton-desc"></div>
                <div className="skeleton-desc short"></div>
                <div className="skeleton-badges">
                  <div className="skeleton-badge"></div>
                  <div className="skeleton-icons"></div>
                </div>
                <div className="skeleton-button"></div>
              </div>
            ))}
          </div>
        )}

        {!error && !loading && (
          <div className="projects-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{formatName(repo.name)}</h3>
                  <p className="project-description">
                    {repo.description || "No description available"}
                  </p>

                  <div className="project-meta">
                    {repo.language && (
                      <span className="language-badge">{repo.language}</span>
                    )}
                    <div className="project-stats">
                      <span className="stat">⭐ {repo.stargazers_count}</span>
                      <span className="stat">🍴 {repo.forks_count}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
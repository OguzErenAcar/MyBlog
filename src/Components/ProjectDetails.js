import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDetails } from "../Redux/Slices/projectDetailsSlice";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [readme, setReadme] = useState(null);
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    dispatch(fetchDetails(projectName))
      .then((result) => {
        if (result.payload) {
          setReadme(result.payload.readme);
          setRepo(result.payload.repo);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [dispatch, projectName]);

  if (loading) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-header">
          <div className="skeleton" style={{ height: 40, width: '40%', marginBottom: 16 }}></div>
          <div className="skeleton" style={{ height: 20, width: '60%', marginBottom: 12 }}></div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div className="skeleton" style={{ height: 28, width: 70, borderRadius: 14 }}></div>
            <div className="skeleton" style={{ height: 28, width: 90, borderRadius: 14 }}></div>
          </div>
        </div>
        <div className="project-detail-content">
          <div className="skeleton" style={{ height: 20, width: '90%', marginBottom: 12 }}></div>
          <div className="skeleton" style={{ height: 20, width: '75%', marginBottom: 12 }}></div>
          <div className="skeleton" style={{ height: 20, width: '85%', marginBottom: 12 }}></div>
          <div className="skeleton" style={{ height: 20, width: '60%', marginBottom: 12 }}></div>
          <div className="skeleton" style={{ height: 150, width: '100%', marginBottom: 12 }}></div>
          <div className="skeleton" style={{ height: 20, width: '70%', marginBottom: 12 }}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-empty">
          <h2>Project not found</h2>
          <p>The project "{projectName}" could not be loaded.</p>
          <Link to="/Projects" className="project-detail-back">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <Link to="/Projects" className="project-detail-back">← Back to Projects</Link>

      <div className="project-detail-header">
        <h1 className="project-detail-title">{repo?.name || projectName}</h1>
        {repo?.description && (
          <p className="project-detail-desc">{repo.description}</p>
        )}
        <div className="project-detail-meta">
          {repo?.language && (
            <span className="project-detail-badge">{repo.language}</span>
          )}
          {repo?.stars > 0 && (
            <span className="project-detail-badge">★ {repo.stars}</span>
          )}
          {repo?.forks > 0 && (
            <span className="project-detail-badge">⑂ {repo.forks}</span>
          )}
          {repo?.topics?.map((t) => (
            <span key={t} className="project-detail-topic">{t}</span>
          ))}
        </div>
        {repo?.html_url && (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-detail-github-btn"
          >
            View on GitHub →
          </a>
        )}
      </div>

      <div className="project-detail-content">
        {readme ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
        ) : (
          <div className="project-detail-no-readme">
            <p>This project does not have a README file.</p>
            {repo?.description && (
              <p>{repo.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;

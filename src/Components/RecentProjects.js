import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProjectsList, fetchDetails } from "../Redux/Slices/projectListSlice";
import { useNavigate } from "react-router-dom";

function RecentProjects() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProjectsList()).then((res) => {
      if (!res.payload) { setLoading(false); return; }
      const repos = res.payload
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 8);

      let completed = 0;
      repos.forEach((repo) => {
        dispatch(fetchDetails(repo.name)).then((item) => {
          let image = "";
          if (item.payload?.Readme) {
            try {
              const str = item.payload.Readme.split("![")[1];
              const matches = str.match(/\(([^)]+)\)/);
              if (matches) image = matches[1];
            } catch (e) {}
          }
          setProjects((prev) => [
            ...prev,
            { name: repo.name, image, description: repo.description || "" },
          ]);
          completed++;
          if (completed === repos.length) setLoading(false);
        });
      });
    });
  }, [dispatch]);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };
  const handleMouseUp = () => setIsMouseDown(false);
  const handleMouseLeave = () => setIsMouseDown(false);
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = x - startX;
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <div id="RecentProjects">
        <div className="subTitleDiv">
          <h2>Recent Projects</h2>
          <div className="line"></div>
        </div>
        <div className="recent-slider-wrapper">
          <div
            className="recent-slider"
            ref={itemsRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {loading &&
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="recent-card">
                  <div className="skeleton recent-card-img-skeleton"></div>
                  <div className="skeleton" style={{ height: 16, width: '70%', marginTop: 10 }}></div>
                </div>
              ))}
            {projects.map((project) => (
              <div
                key={project.name}
                className="recent-card"
                onClick={() => navigate("/Projects/" + project.name)}
              >
                <img
                  src={project.image || "/images/defaultproject.jpg"}
                  alt={project.name}
                  className="recent-card-img"
                />
                <div className="recent-card-overlay">
                  <span className="recent-card-name">{project.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button id="recentButton" onClick={() => navigate("/Projects")} style={{ marginLeft: 0 }}>
            See all projects →
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;

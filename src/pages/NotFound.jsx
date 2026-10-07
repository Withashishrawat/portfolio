import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found page-section">
      <div className="container">
        <h1 className="error-code gradient-text">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-desc">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

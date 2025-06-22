import PageWrapper from '../components/PageWrapper';
import './NotFound.css';

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
    </PageWrapper>
  );
}
import PageWrapper from '../components/PageWrapper';
export default function NotFound() {
  return (
    <PageWrapper>
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
    </div>
    </PageWrapper>
  );
}
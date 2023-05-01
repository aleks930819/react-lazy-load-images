import { useEffect, useState, lazy, Suspense } from 'react';

const Posts = lazy(() => import('./components/Posts'));

const App = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('../src/posts.json');
      const data = await response.json();
      setJsonData(data);
    }
    fetchPosts();
  }, []);

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '2rem',
          }}
        >
          Loading...
        </div>
      }
    >
      <Posts jsonData={jsonData} />
    </Suspense>
  );
};

export default App;

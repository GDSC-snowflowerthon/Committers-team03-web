import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RecoilRoot} from 'recoil';
import {useEffect, useRef} from 'react';

function QueryClientProviderMonitor({children}) {
  const prevQueryClientRef = useRef<QueryClient | null>(null);

  useEffect(() => {
    if (prevQueryClientRef.current !== queryClient) {
      prevQueryClientRef.current = queryClient;
    }
  }, []);

  return children;
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <QueryClientProviderMonitor>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </QueryClientProviderMonitor>
    </QueryClientProvider>
);

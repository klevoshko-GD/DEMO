import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Landing = () => (
  <main className="min-h-screen flex items-center justify-center p-8 bg-background text-foreground">
    <div className="max-w-md text-center space-y-4">
      <h1 className="text-2xl font-semibold">shadcn Figma Storybook</h1>
      <p className="text-muted-foreground text-sm">
        Components live in Storybook. Run <code className="font-mono">npm run storybook</code>.
      </p>
    </div>
  </main>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
);

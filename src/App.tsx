import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <main className="z-10 text-center px-4 max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-dark text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            KunciGaji GitHub Page Is Live!
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Vite <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">React TS</span> Tailwind
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Beautifully crafted modern frontend stack, deployed seamlessly with GitHub Actions to GitHub Pages.
          </p>
        </div>

        {/* Counter Card */}
        <div className="relative group mx-auto max-w-sm">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl transition-transform hover:scale-[1.02]">
            <p className="text-slate-300 mb-6 font-medium">Test interactive states</p>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="w-full py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-primary-dark to-primary hover:to-blue-600 focus:ring-4 focus:ring-primary/30 transition-all shadow-[0_0_20px_rgba(170,59,255,0.3)] hover:shadow-[0_0_25px_rgba(170,59,255,0.5)] active:scale-95 border border-white/10"
            >
              count is {count}
            </button>
            <p className="mt-4 text-sm text-slate-500">
              Click the button to test React state.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-slate-500 text-sm mt-12 mb-4">
          Edit <code className="px-2 py-1 rounded bg-slate-800/50 border border-slate-700 font-mono text-primary/80">src/App.tsx</code> and save to test HMR.
        </p>
      </main>
    </div>
  );
}

export default App;

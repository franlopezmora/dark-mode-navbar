export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold">Welcome to Next.js!</h1>
      <p className="mt-3 text-2xl">Get started by editing <code className="rounded bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-1 text-lg">src/app/page.jsx</code></p>
      <div className="mt-10 flex space-x-6">
        <a
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100
                     dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
        >
          <h2 className="mb-2 text-2xl font-semibold">Deploy &rarr;</h2>
          <p className="m-0 text-center text-sm opacity-50">Instantly deploy your Next.js app to a shareable URL</p>
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100
                     dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
        >
          <h2 className="mb-2 text-2xl font-semibold">Docs &rarr;</h2>
          <p className="m-0 text-center text-sm opacity-50">Find in-depth information about Next.js features and API.</p>
        </a>
      </div>
    </main>
  );
}

import { T } from 'gt-next';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <T>
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-lg text-gray-600">This is the about page.</p>
      </T>
    </main>
  );
}

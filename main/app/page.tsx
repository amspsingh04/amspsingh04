export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Portfolio</h1>
        <p className="mt-4 text-gray-700">
          Hi, I'm a web developer passionate about building clean and efficient web applications.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-500">About Me</h2>
          <p className="mt-2 text-gray-600">
            I'm experienced in modern web technologies like React, Next.js, and Tailwind CSS. I love creating solutions
            that make people's lives easier.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-500">Projects</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>🔗 <a href="#" className="text-blue-500 hover:underline">Project 1</a>: A task management app</li>
            <li>🔗 <a href="#" className="text-blue-500 hover:underline">Project 2</a>: A portfolio website</li>
            <li>🔗 <a href="#" className="text-blue-500 hover:underline">Project 3</a>: A blog platform</li>
          </ul>
        </section>

        <footer className="mt-12 text-gray-500">
          <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}

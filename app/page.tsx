import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-purple-300 to-purple-100">
      <div className="continer mx-auto px-4 py-16">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-purple-700 text-6xl">Inventory Mangment</h1>
          <p className="mt-4 text-gray-600 text-2xl">
            Paragraphs are the building blocks of papers. Many students define
            paragraphs in terms of length: a paragraph is a group of at least
            five sentences, a paragraph is half a page long, etc.
          </p>
          <Link
            className="bg-purple-700 mt-4 text-white px-8 py-3 rounded-lg"
            href="/sign-in"
          >
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

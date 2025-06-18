// components/Breadcrumbs.js
'use client';

export default function Breadcrumbs({ currentPage }) {
  const paths = [
    { name: 'Home', url: '/' },
    { name: currentPage, url: `/${currentPage.toLowerCase().replace(' ', '-')}` }
  ];

  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex text-sm text-gray-600 list-none">
        {paths.map((path, index) => (
          <li key={index} className="mr-2">
            {index === paths.length - 1 ? (
              path.name
            ) : (
              <a href={path.url} className="text-blue-600 hover:underline">
                {path.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { services } from '../data/services';

const fuse = new Fuse(services, {
  keys: ['title', 'description', 'category', 'keywords'],
  threshold: 0.3,
  includeScore: true
});

interface SearchProps {
  lang?: string;
}

export default function Search({ lang = 'en' }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearch = (value: string) => {
    setQuery(value);
    setIsSearching(true);
    
    if (value.length > 2) {
      const searchResults = fuse.search(value);
      setResults(searchResults.map(result => result.item));
    } else {
      setResults([]);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsSearching(false);
    searchInputRef.current?.focus();
  };

  const getPlaceholder = () => {
    switch(lang) {
      case 'rw':
        return 'Shakisha serivisi za Leta...';
      case 'fr':
        return 'Rechercher les services gouvernementaux...';
      default:
        return 'Search for government services...';
    }
  };

  return (
    <div className="search-container p-6">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <input
            ref={searchInputRef}
            type="text"
            placeholder={getPlaceholder()}
            className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg pr-12 text-gray-900 dark:text-white"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <a 
          href="/get-access"
          className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {lang === 'rw' ? 'Shakisha' : lang === 'fr' ? 'Rechercher' : 'Search'}
        </a>
      </div>

      {results.length > 0 && (
        <div className="mt-6 space-y-4 animate-fade-in">
          {results.map((service, index) => (
            <a href="/get-access" key={index} className="block">
              <div className="glass-card p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {service.description}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {query.length > 0 && results.length === 0 && (
        <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
          {lang === 'rw' 
            ? 'Nta gisubizo kibonetse' 
            : lang === 'fr'
            ? 'Aucun résultat trouvé'
            : 'No results found'}
        </div>
      )}
    </div>
  );
}
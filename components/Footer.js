'use client';
export function Footer(){
    return(
        <footer class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Riyaz Ansari —
      <a href="https://twitter.com/ri7az" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@ri7az</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="ml-3 text-gray-400" href="https://www.twitter.com/ri7az">
        <svg fill="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-400" href="https://www.linkedin.com/in/abdul-riyaz-ansari-99bbb220a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    );
}
export function Hero(){
    return(
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-10 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
     
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-pink-500 text-white">
          <span class="text-2xl ">RA</span>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white text-lg">Riyaz Ansari</h2>
            <div class="w-12 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
            <p class="text-base text-gray-400">Passionate engineer with a knack for problem-solving, indulging in exercise to stay sharp. Enjoys diving into books and dedicated to game development as a creative outlet.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">As a meticulous engineer, I thrive on dissecting complex problems and devising innovative solutions. Exercise is not just a hobby but a cornerstone of my routine, fostering mental clarity and resilience. With a voracious appetite for knowledge, I immerse myself in diverse books, savoring the insights they offer. My true passion lies in game development, where I channel my creativity, culminating in the thrill of crafting immersive experiences for others to enjoy.</p>
          <a class="text-pink-400 inline-flex items-center cursor-pointer hover:text-white ">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}
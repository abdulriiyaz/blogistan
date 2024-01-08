import Image from 'next/image'
export function Navbar(){
    return(
        <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <Image
                className='rounded-full hover:animate-ping'
                src='https://avatars.githubusercontent.com/u/45689131?v=4'
                width={70}
                height={70}
                alt='profile photo'
                />  
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white" href="https://www.github.com/abdulriiyaz">Github</a>
      <a class="mr-5 hover:text-white" href="https://www.codewars.com/users/abdulriiyaz">Codewars</a>
    </nav>
  </div>
</header>
    );
}
export default function Header() {
  return (
    <header className='h-20 mb-28 text-lg flex justify-center sm:justify-end gap-x-14 flex-wrap items-center '>
      <div className='cursor-pointer'>Home</div>
      <div className='cursor-pointer'>
        <a href='#about-me'>About Me</a>
      </div>
      <div className='cursor-pointer'>
        <a href='#projects'>Projects</a>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <header className='h-20 mb-28 text-lg flex justify-center sm:justify-end gap-x-14 flex-wrap items-center '>
      <div className='cursor-pointer scroll-smooth'>
        <a href='#hello'>Home</a>
      </div>
      <div className='cursor-pointer'>About Me</div>
      <div className='cursor-pointer'>Projects</div>
    </header>
  );
}

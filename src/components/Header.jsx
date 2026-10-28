const Header = ({ className = "" }) => {
  return (
    <header className={`flex items-center justify-between ${className}`}>
        <h1 className='text-[13px] sm:text-sm font-medium tracking-[0.08em]'>TIC-TAC-TOE</h1>
        <div className='size-8 pointer-coarse:size-11' />
    </header>
  )
}

export default Header;
const ScoreBoard = ({
  className = "",
  circle = 0,
  draw = 0,
  cross = 0
}) => {
  return (
    <div className={`flex gap-1.5 sm:gap-2 ${className}`}>
      {[["Circle", circle], ["Draw", draw], ["Cross", cross]].map(([lable, score]) => (
      <div
        key={lable}
        className='flex-1 rounded-md bg-pill py-1.5 text-[11px] sm:text-xs text-center text-pill-ink'
      >
        {lable}
        <div className='text-[15px] sm:text-base font-medium text-ink'>{score}</div>
      </div>
    ))}</div>
  )
}

export default ScoreBoard;
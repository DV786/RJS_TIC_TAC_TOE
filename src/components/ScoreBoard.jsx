const ScoreBoard = ({
  circle = 0,
  draw = 0,
  cross = 0
}) => {
  return (
    <div className='flex w-[min(100%,28rem)] gap-1.5 sm:gap-2'>
      {[["Circle", circle], ["Draw", draw], ["Cross", cross]].map(([lable, score]) => (
      <div
        key={lable}
        className='flex-1 rounded-md bg-pill py-1.5 text-[11px] text-center text-pill-ink'
      >
        {lable}
        <div className='text-[15px] font-medium text-ink'>{score}</div>
      </div>
    ))}</div>
  )
}

export default ScoreBoard;
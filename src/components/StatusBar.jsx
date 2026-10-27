const StatusBar = ({ status, notice }) => {
  return (
    <div className='text-center'>
        <p role='status' className='min-h-6 text-sm text-muted'>{notice}</p>
        <h2 className='text-xl font-medium text-accent'>{status}</h2>
    </div>
  )
}

export default StatusBar
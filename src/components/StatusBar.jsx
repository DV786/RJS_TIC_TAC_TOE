const StatusBar = ({ status, notice, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
        <p role='status' className='min-h-6 text-sm text-muted'>{notice}</p>
        <h2 className='text-xl sm:text-2xl font-medium text-accent'>{status}</h2>
    </div>
  )
}

export default StatusBar
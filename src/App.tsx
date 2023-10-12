import dayjs from 'dayjs'
import './App.css'

function App() {

  const fromDate = dayjs()
  const toDate = dayjs().add(7, 'years')

  // array of weeks from date to date
  const weeks = Array.from({ length: toDate.diff(fromDate, 'week') + 1 }, (_, i) => fromDate.add(i, 'week'))


  return (
    <div className='flex flex-row flex-wrap gap-1 justify-center items-center'>
      {weeks.map((week, idx) => {
        return <div key={week.toISOString()}
          className='w-10 h-10 bg-primary m-auto'
        >{idx + 1}</div>
      })}
    </div>
  )
}

export default App

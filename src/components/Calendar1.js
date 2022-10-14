
import Calendar from 'react-calendar';
import '../style/calendar.css';

export const Calendar1 =(props)=> {

  return (
    <>
     {/* <div className='app'> */}
      <div className='calendar-container'>
    <Calendar onChange={props.setDate} value={props.date} />
      </div>
        {/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {props.date.toDateString()}
      </p> */}
    {/* </div> */}
    </>
  );
}

import moment from 'moment';
import { FadeLoader } from 'react-spinners';
import {useState, CSSProperties} from 'react';

const override: CSSProperties = {
    display: "center",
    margin: "0 auto",
    borderColor: "hsl(46.82, 100%, 50%, 1)",
  };
  
// First day of week is Monday
  moment.updateLocale("en", { week: {
    dow: 1,
    doy: 7  
  }});

function AppScheduler() {
    const [scheduler, setScheduler] = useState([]) 
    // var days = [];
    // var hours = [];
    
    // const setDays = () => {
    //     for (let i = 0; i < 7; i++){
    //         days.push(parseInt(moment().startOf('week').add(i, 'days').format("DD")));
    // }}

    // const setHour = () => {
    //     for (let i = 7; i < 24; i++){
    //         hours.push(i + ":00");
    // }}

    // const setStartArray = () =>{
    //     setDays()
    //     setHour()
    // }

    return (
    <main>
        <div className="Scheduler">
            {/* {setStartArray()} */}
            {scheduler.length !== 0 ? 
                <div>
                    <FadeLoader
                        color={'hsl(46.82, 100%, 50%, 1)'}
                        loading={true}
                        cssOverride={override}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        />
                </div>
            :
            <div className="stages-container-row">
                {console.log(moment().format("DD"))}
                {console.log(moment().startOf('week').format("DD"))}
                {console.log(moment().endOf('week').format("DD"))}
                {/* <div class="stages">
                {days.map((data, i) =>{
                    return( 
                    <div class="stage">{data}</div>
                )
                })}
                </div>
                <div class="timing-container-column">
                    <div class="timings">
                        <div class="time">/</div>
                        {hours.map((data, i) =>{
                            return( 
                            <div class="stage">{data}</div>
                        )
                        })} 
                    </div>
                </div> */}
            </div>
            }
        </div>
    </main>
)
}

export default AppScheduler
import moment from 'moment';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';
import React, { useCallback, useState, CSSProperties, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate, useLocation } from "react-router-dom";


const override: CSSProperties = {
    display: "center",
    margin: "0 auto",
    borderColor: "hsl(46.82, 100%, 50%, 1)",
};

// First day of week is Monday
moment.updateLocale("en", {
    week: {
        dow: 1,
        doy: 7
    }
});

function AppScheduler() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    // useEffect(() => {
    //     // alert("Вы записались")
    //   }, []); 

    const isLogin = () => {
        const ansv = cookies.get("jwt_token")
        console.log(ansv !== undefined)
        return (ansv !== undefined)
    }

    const [scheduler, setScheduler] = useState([])
    const [loading, setLoad] = useState(true)
    const [day, setDay] = useState([])
    const [schedule, setSchedule] = useState([])

    const baseURLCards = 'http://www.ggsport.somee.com/SchedulePublic?startPeriod=2024-05-27&endPeriod=2024-06-02'

    const baseURL = 'http://www.ggsport.somee.com/SchedulePublic/SighUpSchedule/'

    function getscheduleURL() {
        axios.get(baseURLCards)
            .then((res) => {
                console.log(res)
                for (var i = 0; i < res.data.length; i++) {
                    // const abc = [...cards, res.data[i]]
                    var abc = schedule
                    abc.push(res.data[i])
                    setSchedule(abc)
                    console.log(abc)
                }
                console.log()
            })

    }

    const setDays = () => {
        for (let i = 0; i < 7; i++) {
            var abc = day
            abc.push(parseInt(moment().startOf('week').add(i, 'days').format("DD")))
            setDay(abc)
            // console.log(abc)
            // days.push(parseInt(moment().startOf('week').add(i, 'days').format("DD")));
        }
    }

    const signUpExercise = (event, id) => {
        event.preventDefault()
        const jsonToken = {
            headers: {
                "accept": "*/*",
                "Authorization": "Bearer " + cookies.get("jwt_token")
            }
        }
        console.log(jsonToken)
        axios.patch(baseURL + id, jsonToken)
            .then((res) => {
                // console.log(res)
                // for (var i = 0; i < res.data.length; i++) {
                //     // const abc = [...cards, res.data[i]]
                //     var abc = schedule
                //     abc.push(res.data[i])
                //     setSchedule(abc)
                //     // console.log(abc)
                // }
                alert("Вы записались")
            }).catch(function (err) {
                alert(err)
            })
        // alert("Вы записались")
    }

    useEffect(() => {
        setDays();
        getscheduleURL();
        // console.log(day);
        console.log()
        setLoad(false);
    }, []);


    return (
        <main>
            <div className="Scheduler">
                {/* {setStartArray()} */}
                {loading ?
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

                        {schedule.map((data, i) => {
                            return (
                                <div className='Block'>
                                    <div class="name">{data.exercise.name}</div>
                                    <div class="name">День - {moment(data.startExercise).format("DD.MM.YYYY")}</div>
                                    <div class="name">Время занятий - {moment(data.startExercise).format("HH:mm")} - {moment(data.endExcercise).format("HH:mm")}</div>
                                    <form>
                                        <button  type="button" onClick={event => signUpExercise(event, data.id)}>Записаться</button>
                                    </form>
                                    <br />
                                </div>

                            )
                        })}

                    </div>
                }
            </div>
        </main>
    )
}

export default AppScheduler
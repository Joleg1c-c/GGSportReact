import moment from 'moment';
import { FadeLoader } from 'react-spinners';
import React, { useCallback, useState, CSSProperties, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';


const currentDate = new Date();
const views: SchedulerTypes.ViewType[] = ['week', 'workWeek'];

const schedulerData = [
    { startDate: '2024-06-01T09:45', endDate: '2024-06-01T11:00', title: 'Meeting' },
    { startDate: '2024-06-01T12:00', endDate: '2024-06-01T13:30', title: 'Go to a gym' },
  ];

// const intervalLabel = { 'aria-label': 'Interval' };

// const onContentReady = (e: SchedulerTypes.ContentReadyEvent) => {
//   e.component.scrollTo(new Date());
// };

// const onAppointmentClick = (e: SchedulerTypes.AppointmentClickEvent) => {
//   e.cancel = true;
// };

// const onAppointmentDblClick = (e: SchedulerTypes.AppointmentDblClickEvent) => {
//   e.cancel = true;
// };

const formatTimeScaleDate = date => moment(date).format('hh:mm:ss');

const onAppointmentClick = () =>{
    console.log("sadasdasd")
}   

const TimeScaleLabel = (
    { formatDate, ...restProps },
  ) => <WeekView.TimeScaleLabel {...restProps} formatDate={formatTimeScaleDate} />;

const Appointment = ({
    children, style, ...restProps
  }) => (
      <Appointments.Appointment
      {...restProps}
      style={{
          ...style,
          backgroundColor: 'hsl(46.82, 100%, 50%, 1)',
          borderRadius: '8px',
        }}
        >
      {/* {onClick={onAppointmentClick}} */}
      {children}
    </Appointments.Appointment>
  );

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
    const onAppointmentClick = () =>{
        console.log("sadasdasd")
    }

    useEffect(() => {
        onAppointmentClick();
      }, [AppointmentTooltip]);
    
    const [scheduler, setScheduler] = useState([]) 
    
    // старт
    // const [showCurrentTimeIndicator, setShowCurrentTimeIndicator] = useState(true);
    // const [shadeUntilCurrentTime, setShadeUntilCurrentTime] = useState(true);
    // const [updateInterval, setUpdateInterval] = useState(10);

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

                {/* Scheduler */}
                <Paper>
                    <Scheduler
                        data={schedulerData}
                        locale={"ru-RU"}
                        height={660}
                        firstDayOfWeek={1}
                    >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={19}
                        timeScaleLabelComponent={TimeScaleLabel}
                    />
                    <Appointments
                        appointmentComponent={Appointment}
                    />
                    <AppointmentTooltip
                        // onVisibilityChange
                    />
                    </Scheduler>
                </Paper>
                {/* <React.Fragment>
                    <Scheduler
                        dataSource={data}
                        views={views}
                        // locale="ru-RU"
                        defaultCurrentView="week"
                        // showCurrentTimeIndicator={showCurrentTimeIndicator}
                        // indicatorUpdateInterval={updateInterval * 1000}
                        showAllDayPanel={false}
                        // shadeUntilCurrentTime={shadeUntilCurrentTime}
                        defaultCurrentDate={currentDate}
                        // editing={false}
                        height={600}
                        onContentReady={onContentReady}
                        onAppointmentClick={onAppointmentClick}
                        onAppointmentDblClick={onAppointmentDblClick}
                    >
                        {/* <Resource
                            dataSource={moviesData}
                            fieldExpr="movieId"
                        /> */}
                    {/* </Scheduler> */}
                    {/* <div className="options">
                        <div className="column">
                        <div className="option">
                            <div className="label">Current time indicator </div>
                            {' '}
                            <div className="value">
                            <Switch
                                id="show-indicator"
                                value={showCurrentTimeIndicator}
                                onValueChanged={onShowCurrentTimeIndicatorChanged}
                            />
                            </div>
                        </div>
                        <div className="option">
                            <div className="label">Shading until current time </div>
                            {' '}
                            <div className="value">
                            <Switch
                                id="allow-shading"
                                value={shadeUntilCurrentTime}
                                onValueChanged={onShadeUntilCurrentTimeChanged}
                            />
                            </div>
                        </div>
                        </div>
                        {' '}
                        <div className="column">
                        <div className="option">
                            <div className="label">Update position in </div>
                            {' '}
                            <div className="value">
                            <NumberBox
                                min={1}
                                max={1200}
                                value={updateInterval}
                                step={10}
                                showSpinButtons={true}
                                width={100}
                                format="#0 s"
                                inputAttr={intervalLabel}
                                onValueChanged={onUpdateIntervalChanged}
                            />
                            </div>
                        </div>
                        </div>
                    </div> */}
                    {/* </React.Fragment> */}
            </div>
            }
        </div>
    </main>
)
}

export default AppScheduler
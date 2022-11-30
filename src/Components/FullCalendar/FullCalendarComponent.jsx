import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "../../Stylesheets/fullCalendar.css"
// import { INITIAL_EVENTS, createEventId } from './event-utils'

export const DemoApp = () => {
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
    return (
      
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={false}
            selectable={false}
            selectMirror={false}
            dayMaxEvents={true}
            // weekends={this.state.weekendsVisible}
          
            eventContent={renderEventContent} // custom render function
            
            events={[{
              title: "sogo",
              start: '2022-11-11T12:30:00'
            },
            {
              title: "sogo",
              start: '2022-11-21T12:30:00'
            }]}
          />
    )
  
  }
 


export class DemoAppTwo extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: ''
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContentr} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        
        
        <div className='demo-app-sidebar-section'>
          <ul>
            {this.state.currentEvents.map(renderSidebarEventr)}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  


  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContentr(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEventr(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}
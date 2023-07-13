import React, { useState } from "react";
import classes from './Home.module.scss'
import img from '../../Assets/Images/person.png'
import { H1, H2, Type } from "./Home.styled";
import moment from "moment";

function Home() {

 const[day,setday]=useState<number>()
 const[hours,sethours]=useState<number>()
 const[minutes,setminutes]=useState<number>()
 const[seconds,setseconds]=useState<number>()
const[display,setDisplay] = useState<string>()


setInterval(()=>{
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    var now = moment(date)
    
    var event = moment('2023-09-26 08:54:06');
    
    
    var days = event.diff(now, 'days');
    setday(days)
    var hours = now.diff(event, 'hours');
    sethours(hours)
    var minutes = now.diff(event, 'minutes');
    setminutes(minutes)
    var seconds = event.diff(now, 'seconds');
    setseconds(seconds)
    setDisplay(moment(seconds*1000).format('hh:mm:ss'))
    
},1000)
  
    return <div className={classes.parent}>
        <div className={classes.left_child}>
            <div className={classes.information}>
                <H1 className={classes.h}>Hi There</H1><br/>
                <H2 className={classes.temp}>I'am <div>Tapan Agrawal</div></H2><br/>
                <Type className={classes.type}>Full-Stack Developer</Type>
            </div>
           
           <div className={classes.event}>
               <H2>Time Left for OpenAi event!!</H2>
                {/* <div><div>days:</div>{day}</div>
                <div><div>hours:</div>hours:{hours}</div>
                <div><div>minutes:</div>{minutes}</div>
                <div><div>second:</div>{seconds}</div> */}
                <div>{day}Days</div>
                <div className={classes.time}>{display}</div>
           </div>
        </div>
        <div className={classes.right_child}>
            <img src={img} />
        </div>

    </div>;
}

export default Home;

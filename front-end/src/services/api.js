import Data from "../assets/data";
import { useState, useEffect } from "react";


var Main_data = Data.USER_MAIN_DATA[1];
//console.log(Main_data);
var Activity = Data.USER_ACTIVITY[1];
//console.log(Activity);
var Average_session = Data.USER_AVERAGE_SESSIONS[1];
//console.log(Average_session);
var Performance = Data.USER_PERFORMANCE[1];
//console.log(Performance);

export {Main_data, Activity, Average_session, Performance} 



const url = "http://localhost:3000/user/";

const Mock = true;

export function GetName(id) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (Mock === true) {
      fetch(`${Data}user${id}.json`)
        .then((response) => response.json())
        .then((result) => setName(result.data.userInfos.firstName));
    } else {
      fetch(url + id)
        .then((response) => response.json())
        .then((result) => setName(result.data.userInfos.firstName));
    }
  }, [id]);

  return name;
}
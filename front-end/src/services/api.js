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

export { Main_data, Activity, Average_session, Performance }



const url = "http://localhost:3000/user/";

const FetchBackEnd = true;

export function GetName(id) {
    const [name, setName] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(url+id)
                .then((response) => response.json())
                .then((result) => setName(result.data.userInfos.firstName));
        } else {
            if (id === "12") {
                setName(Data.USER_MAIN_DATA[0].userInfos.firstName);
            } else {
                setName(Data.USER_MAIN_DATA[1].userInfos.firstName);
            }
        }
    }, [id]);

    return name;
}

export function GetKeyData(id) {
    const [keyData, setKeyData] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(url+id)
                .then((response) => response.json())
                .then((result) => setKeyData(result.data.keyData));
        } else {
            if (id === "12") {
                setKeyData(Data.USER_MAIN_DATA[0].keyData);
            } else {
                setKeyData(Data.USER_MAIN_DATA[1].keyData);
            }
        }
    }, [id]);

    return keyData;
}

export function GetActivityData(id) {
    const [activity, setActivity] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(`${url+id}/activity`)
                .then((response) => response.json())
                .then((result) => setActivity(result.data.sessions));
        } else {
            if (id === "12") {
                setActivity(Data.USER_ACTIVITY[0].sessions);
            } else {
                setActivity(Data.USER_ACTIVITY[1].sessions);
            }
        }
    }, [id]);

    return activity;
}

export function GetSessionData(id) {
    const [session, setSession] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(`${url+id}/average-sessions`)
                .then((response) => response.json())
                .then((result) => setSession(result.data.sessions));
        } else {
            if (id === "12") {
                setSession(Data.USER_AVERAGE_SESSIONS[0].sessions);
            } else {
                setSession(Data.USER_AVERAGE_SESSIONS[1].sessions);
            }
        }
    }, [id]);

    return session;
}

export function GetScore(id) {
    const [score, setScore] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(url+id)
                .then((response) => response.json())
                .then((result) => {
                if (result.data.todayScore !== undefined){
                    setScore(result.data.todayScore);
                }
                if (result.data.score !== undefined){
                    setScore(result.data.score);
                }});
        } else {
            if (id === "12") {
                if (Data.USER_MAIN_DATA[0].todayScore !== undefined){
                    setScore(Data.USER_MAIN_DATA[0].todayScore);
                }
                if (Data.USER_MAIN_DATA[0].score !== undefined){
                    setScore(Data.USER_MAIN_DATA[0].score);
                }
            } else {
                if (Data.USER_MAIN_DATA[1].todayScore !== undefined){
                    setScore(Data.USER_MAIN_DATA[1].todayScore);
                }
                if (Data.USER_MAIN_DATA[1].score !== undefined){
                    setScore(Data.USER_MAIN_DATA[1].score);
                }
            }
        }
    }, [id]);

    return score;
}

export function GetPerformance(id) {
    const [performance, setPerformance] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(`${url+id}/performance`)
                .then((response) => response.json())
                .then((result) => setPerformance(result.data.data));
        } else {
            if (id === "12") {
                setPerformance(Data.USER_PERFORMANCE[0].data);
            } else {
                setPerformance(Data.USER_PERFORMANCE[1].data);
            }
        }
    }, [id]);

    return performance;
}

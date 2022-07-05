import Data from "../data";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/user/";

//If you want to fetch from back-end, change to "true". Otherwise change to "false"
var FetchBackEnd = true;


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

/**
 * @description get the user name
 * @param {number} id id of user
 * @returns name of user
 */
export function GetName(id) {
    const [name, setName] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(url + id)
                .then(handleErrors)
                .then((result) => {
                    setName(result.data.userInfos.firstName)
                })
                .catch((error) => {
                    console.log(error)
                });
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

/**
 * @description get the user keydata
 * @param {number} id id of user
 * @returns user keydatas
 */
export function GetKeyData(id) {
    const [keyData, setKeyData] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(url + id)
                .then(handleErrors)
                .then((result) => {
                    setKeyData(result.data.keyData)
                })
                .catch((error) => {
                    console.log(error)
                });;
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

/**
 * @description get the user activities datas
 * @param {*} id id of user
 * @returns user activities datas
 */





export function GetActivityData(id) {
    const [activity, setActivity] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(`${url + id}/activity`)
                .then(handleErrors)
                .then((result) => {
                    setActivity(result.data.sessions)
                })
                .catch((error) => {
                    console.log(error)
                });;
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

/**
 * @description get the user sessions datas
 * @param {*} id id of user
 * @returns user sessions datas
 */
export function GetSessionData(id) {
    const [session, setSession] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(`${url + id}/average-sessions`)
                .then(handleErrors)
                .then((result) => {
                    setSession(result.data.sessions)
                })
                .catch((error) => {
                    console.log(error)
                });;
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

/**
 * @description get the user score
 * @param {*} id id of user
 * @returns user score
 */
export function GetScore(id) {
    const [score, setScore] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(url + id)
                .then(handleErrors)
                .then((result) => {
                    if (result.data.todayScore !== undefined) {
                        setScore(result.data.todayScore);
                    }
                    if (result.data.score !== undefined) {
                        setScore(result.data.score);
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        } else {
            if (id === "12") {
                if (Data.USER_MAIN_DATA[0].todayScore !== undefined) {
                    setScore(Data.USER_MAIN_DATA[0].todayScore);
                }
                if (Data.USER_MAIN_DATA[0].score !== undefined) {
                    setScore(Data.USER_MAIN_DATA[0].score);
                }
            } else {
                if (Data.USER_MAIN_DATA[1].todayScore !== undefined) {
                    setScore(Data.USER_MAIN_DATA[1].todayScore);
                }
                if (Data.USER_MAIN_DATA[1].score !== undefined) {
                    setScore(Data.USER_MAIN_DATA[1].score);
                }
            }
        }
    }, [id]);

    return score;
}

/**
 * @description get the user performance
 * @param {*} id id of user
 * @returns user performance
 */
export function GetPerformance(id) {
    const [performance, setPerformance] = useState("");

    useEffect(() => {
        if (FetchBackEnd === true) {
            fetch(`${url + id}/performance`)
                .then(handleErrors)
                .then((result) => setPerformance(result.data.data))
                .catch((error) => {
                    console.log(error)
                });
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
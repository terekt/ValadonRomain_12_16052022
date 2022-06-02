import Data from "../assets/data";


var Main_data = Data.USER_MAIN_DATA[0];
//console.log(Main_data);
var Activity = Data.USER_ACTIVITY[0];
//console.log(Activity);
var Average_session = Data.USER_AVERAGE_SESSIONS[0];
//console.log(Average_session);
var Performance = Data.USER_PERFORMANCE[0];
//console.log(Performance);

async function getID() {

    /*let data = await fetch('http://localhost:3000/user/18')
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            const id = data.data.id;
            const score = data.data.score;
            const keyData = data.data.keyData;
            const firstName = data.data.userInfos.firstName;
            return [id, score, keyData, firstName];
            return data;
        })
        .catch(error => {
            console.error(error);
        });*/
}

export default getID;
export {Main_data, Activity, Average_session, Performance} 

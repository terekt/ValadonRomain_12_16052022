async function getID() {

    let data = await fetch('http://localhost:3000/user/18')
        .then(response => response.json())
        .then(data => {
            /*console.log(data.data);
            const id = data.data.id;
            const score = data.data.score;
            const keyData = data.data.keyData;
            const firstName = data.data.userInfos.firstName;
            return [id, score, keyData, firstName];*/
            return data;
        })
        .catch(error => {
            console.error(error);
        });
}

export default getID;

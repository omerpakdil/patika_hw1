import axios from "axios";

async function getData(userId){
    const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
    return users;
}

export default getData;
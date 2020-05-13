import React, {useEffect, useContext} from "react";
// import Card from "./Card"
import { UserContext } from "../../utils/UserContext";

function AddEvent (){
    const [user, dispatch] = useContext(UserContext)
	console.log(user)

	useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				return res.json(res)

			})
			.then(data => {
				console.log(data);
				dispatch({
					type: "GET_USER",
					payload: data
				})

			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

    }, []);
    
    // return (

    // )
}

export default AddEvent;
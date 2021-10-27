import React, { useContext } from "react";
//5.import variable UserContext yg telah dibuat caru createCOntext
import { UserContext } from "../contexts/UserContext";

function UserList() {
	const {user} = useContext(UserContext)
	
				return (
					<div>
						<h4>Data context:</h4>
						<h3>Nama: {user.nama}</h3>
						<h3>Batch: {user.batch}</h3>
					</div>
				);

}

export default UserList;

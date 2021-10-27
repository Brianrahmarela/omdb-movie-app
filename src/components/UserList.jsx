import React from "react";
//5.import variable UserContext yg telah dibuat caru createCOntext
import { UserContext } from "../contexts/UserContext";

function UserList() {
	return (
		//6.consumer digunakan utk mengambil data dari provider
		//7.di dlm tag consumer, beri arrow function & destructuring data yg ingin diambil
		<UserContext.Consumer>
			{(userContext) => {
				const { user } = userContext;
				return (
					<div>
						<h4>Data context:</h4>
						<h3>Nama: {user.nama}</h3>
						<h3>Batch: {user.batch}</h3>
					</div>
				);
			}}
		</UserContext.Consumer>
	);
}

export default UserList;

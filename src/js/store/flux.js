import { resolvePath } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			
			getContacts: () => {

				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/sprdesign")
					.then(resp => {
						if (!resp.ok) throw Error(resp.statusText);
						return resp.json();
					})
					.then(data => {
						console.log(data);

						// Set the retrieved contacts data in the store
						setStore({ contacts: data });
					})
					.catch(error => {
						console.log(error);
					});
			},

			addContacts: (contactData) => {

				const url = "https://playground.4geeks.com/apis/fake/contact/";
				const request = {
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(contactData)
				};

				fetch(url, request)
					.then(resp => {
						if (!resp.ok) throw Error(resp.statusText);
						return resp.json();
					})
					.then(data => {
						console.log(data);
						getActions().getContacts();
					})
					.catch(error => {
						console.log(error);
					});
			},

			deleteContacts: (id) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
				const request = {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json'
					},
					
				};

				fetch(url, request)
					.then(resp => {
						if (!resp.ok) throw Error(resp.statusText);
						return resp.json();
					})
					.then(data => {
						console.log(data);
						actions.getContacts();
					})
					.catch(error => {
						console.log(error);
					});
			},
			
			editContact: (contactId, contactData) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(contactData),
				})
				.then(resp => {
					if (resp.ok) {
						getActions().getContacts();
					} else {
						console.error("Error al actualizar el contacto. Estado:", resp.statusText);
					}
				})
				.catch(error => {
					console.error("Error updating contact:", error);
				});
			},
			
		},
	}
};


export default getState;

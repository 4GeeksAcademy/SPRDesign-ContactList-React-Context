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
			contacts:[],
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

			/*getContacts () => {
				fetch ('https://playground.4geeks.com/apis/fake/contact/agenda/sprdesign')
			}*/
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
						resolve("Operación Exitosa")
					})
					.catch(error => {
						console.log(error);
					});
			},

			},
		}
	};


export default getState;

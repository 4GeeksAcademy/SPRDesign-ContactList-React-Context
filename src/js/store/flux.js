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
			]
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
			
			addContacts: () => {
				const store = getStore();
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda/sprdesign";
				const request = {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					}
				};
			
				fetch(url, request)
					.then(resp => {
						if (!resp.ok) throw Error(res.statusText);
						return resp.json();
					})
					.then(data => {
						console.log(data);
						setStore({ contacts: data });
					})
					.catch(error => {
						console.log(error);
					});
			},

			},
		}
	};


export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
			tipo: "",
			categoria: "",
			user: null,
			token: localStorage.getItem("token"),
			product: {},
			shoppingCart: JSON.parse(window.localStorage.getItem("shoppingCart")) || [],

			//productos
			search: "",
			productos: [],
			productosFiltrados: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			createUser: async (username, email, password) => {
				const opts = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						"username": username,
						"email": email,
						"password": password,
						"active": true
					})
				};
				try {
					const result = await fetch("https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/users", opts)
					console.log(result)
				} catch {
					console.log("Error de registro [flux]", error)
				}
			},

			login: async (email, password) => {
				console.log(email, password);
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						"email": email,
						"password": password,
					}),
				};
				const res = await fetch("https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/login", opts);
				if (res.status < 200 || res.status >= 300) {
					throw new Error("There was an error signing in");
				}
				const data = await res.json();

				localStorage.setItem("token", data.token);
				localStorage.setItem("user_id", data.user_id);

				console.log("USER INFO HERE", data)

				return true;
			},

			//fetch de productos para la busqueda
			getProduct: () => {

				fetch("https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos"
				).then(resp => resp.json())
					.then(data => {
						setStore({ productos: data });

					})
					.catch(error => console.log("error desde getProduct", error))
			},

			handleSearch: (e) => {
				setStore({ search: e.target.value })

			},
			setShoppingCart: (shoppingCart) => {
				window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
				setStore({
					...getStore(),
					shoppingCart
				})
			},
			fetchProduct: async (id) => {
				const product = await fetch(`https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos/${id}`).then(res => res.json())
				setStore({
					...getStore(),
					product
				})
			},

			productosFiltrados: () => {
				let store = getStore();
				let productos = getStore()?.productos?.filter((producto) =>
					producto?.nombre?.toLowerCase().includes(store?.search?.toLocaleLowerCase()) ||
					producto?.tipo?.toLowerCase().includes(store?.search?.toLowerCase())
				)
				setStore({ productosFiltrados: productos })
				console.log("estos son los productos filtrados", getStore().productosFiltrados)
			},
			setTipo: (tipo) => setStore({ tipo }),
			setCategoria: (category) => setStore({ categoria: category }),

			//fetch para restaurar contraseña

			restaurar_contraseña: async (email) => {
				try {
					const response = await fetch(`https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/reset_password`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ email: email }),
					});

					if (response.ok) {
						const data = await response.json();
						const token = data.token;
						const resetUrl = `https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/reset_password/${token}`; // URL con el token

					}
					else {
						throw new Error('Error al obtener el token');
					}
				}catch(error) {
						console.error(error);
					}

				}
		


		}
		}
	};



	export default getState;

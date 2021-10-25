export default {
    namespaced: true,
    state: () => {
        return {
            carts: [],
            foods: [
                {
                    "name": "FirstFood",
                    "price": 1500,
                    "info": "First",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 1
                },
                {
                    "name": "SecondFood",
                    "price": 1500,
                    "info": "Second",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 2
                },
                {
                    "name": "ThirdFood",
                    "price": 1500,
                    "info": "Third",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 3
                },
                {
                    "name": "FourthFood",
                    "price": 1500,
                    "info": "Fourth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 4
                },
                {
                    "name": "FifthFood",
                    "price": 1500,
                    "info": "Fifth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 5
                },
                {
                    "name": "SixthFood",
                    "price": 1500,
                    "info": "Sixth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 6
                },
                {
                    "name": "SeventhFood",
                    "price": 1500,
                    "info": "Fifth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 7
                },
                {
                    "name": "EighthFood",
                    "price": 1500,
                    "info": "Fifth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 8
                },
                {
                    "name": "NinthFood",
                    "price": 1500,
                    "info": "Fifth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 9
                },
                {
                    "name": "tenthFood",
                    "price": 1500,
                    "info": "Fifth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 10
                },
                {
                    "name": "EleventhFood",
                    "price": 1500,
                    "info": "Fifth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 11
                },
                {
                    "name": "TwelfthFood",
                    "price": 1500,
                    "info": "Fifth",
                    "image": "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
                    "count": 1,
                    "id": 12
                }
            ] 
        }  
    },
    getters: {
        totalPrice(state) {
            let total = 0;
            state.carts.forEach(item => {
                console.log("item : ", item)
                
                total += item.food.price * item.quantity;
                console.log("total" , total)
                
            })
            return total;
        }
    },
    mutations: {
        addToCart(state, { food, quantity }) {
            let addCart = state.carts.find(item => {
                return item.food.id === food.id;
            });

            if (addCart) {
                addCart.quantity += quantity;
                return;
            }

            state.carts.push(
                { food, quantity }
            )
        },
        removeToCart(state, food) {
            state.carts.splice(this.carts.indexOf(food))
        }
    },
    actions: {
        addCart({ commit }, { food, quantity }) {
            commit('food/addToCart', { food, quantity }, { root: true });
        },
        removeCart({ commit }, { food, quantity } ) {
            commit('food/removeToCart', { food, quantity }, { root: true });
        }
    }
}
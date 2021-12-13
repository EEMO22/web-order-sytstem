import http from '../api/interceptor';
import jwt from '../util/jwt';
import router from '../router/index'

export default {
    namespaced: true,
    state: {
        count: 0,
        loginUserId: '',
        loginUserData: '',
        maskedUser: {
            maskedAge: '',
            maskedPhone: '',
        },
        token: {
            accessToken: jwt.getToken(),
        },
        isAuthenticated: !!jwt.getToken(),
    },
    mutations: {
        logout: function(state = {}) {
            state.token.accessToken = '';
            state.isAuthenticated = false;
            state.loginUserId = '';
            state.loginUserData = '';
            state.maskedUser.maskedAge = '';
            state.maskedUser.maskedPhone = '';
            jwt.destroyToken();
            // location.reload();
            router.push('/');
        },
        login: function(state, payload = {}) {
            const bearerToken = `Bearer ${payload.accessToken}`;
            console.log('Bearer Token on login mutation:', bearerToken);
            state.token.accessToken = bearerToken;
            state.isAuthenticated = true;
            jwt.saveToken(bearerToken);
        },
        loginUserId: function(state, payload = {}) {
            console.log('payload on loginUserId:', payload);
            const userAcc = payload.userAcc;
            state.loginUserId = userAcc;
            console.log('state on loginUserId:', state.loginUserId);
        },
        loginUserData: function(state, payload = {}) {
            console.log('payload on loginUserData:', payload);
            const userData = payload.userData;
            state.loginUserData = userData;
            console.log('state on loginUserData:', state.loginUserData);
        },
        maskedUser: function(state, payload = {}) {
            console.log('payload on maskedUser mutation: ', payload);
            const maskedAge = payload.maskedAge.replace((/^(.{4})/), "$1. ");
            const maskedPhone = payload.maskedPhone;
            state.maskedUser.maskedAge = maskedAge;
            state.maskedUser.maskedPhone = maskedPhone;
            console.log('state on maskedUser: ', state.maskedUser);
        }
    },
    actions: {
        maskedUser: function (context) {
            return new Promise((resolve, reject) => {
                http
                .get('api/users/maskedUser')
                .then(response => {
                    console.log('response.data[0] on maskedUser actions: ', response.data[0]);
                    if (response.status == 200) {
                        context.commit('maskedUser', {
                            maskedAge: response.data[0].maskedAge,
                            maskedPhone: response.data[0].maskedPhone,
                        });
                    }
                    resolve(response);
                })
                .catch (error => {
                    reject(error);
                })
            })
        },
        updateUser: function (context, payload) {
            return new Promise((resolve, reject) => {
                console.log('payload on updateUser action:', payload);
                const updateData = {
                    user_acc: payload.acc,
                    user_name: payload.firstName,
                    user_password: payload.password,
                    user_phone: payload.phoneNumber,
                    user_age: payload.birthDay,
                }
                http
                .post('/api/users/update', updateData)
                .then(response => {
                    const userData = response.data[0].user_name;
                    console.log('updatedUserName', userData);
                    if (response.status == 200) {
                        alert('변경 사항이 저장되었습니다.');
                        context.commit('loginUserData', {
                            userData
                        })
                    }
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
            })
        },
        signup: function (context, payload) {
            console.log('payload:', payload)
            console.log('name:' , payload.firstName)
            const userData = {
                user_acc: payload.acc,
                user_name: payload.firstName,
                user_password: payload.password,
                user_phone: payload.phoneNumber,
                user_age: payload.birthDay,
            }
            return new Promise((resolve, reject) => {
                http
                .post('/api/users/signup', userData)
                .then(response => {
                    console.log('userData on signup actions', response);
                    const { data } = response;
                    if (data.success === true) {
                        alert('환영합니다!');
                        context.commit('login', {
                            success: data.success,
                            accessToken: data.token,
                        });
                        context.commit('loginUserId', {
                            userAcc: response.data.user_acc
                        });
                        context.commit('loginUserName', {
                            userName: response.data.user_name,
                        });
                        resolve(response);
                    } else {
                        alert('이미 등록된 아이디 입니다!');
                    }
                })
                .catch(error => {
                    reject(error);
                })
            })
        },
        login: function(context, payload) {
            let loginData = {
                user_acc: payload.user_acc,
                user_password: payload.user_password,
            }
            return new Promise((resolve, reject) => {
                http
                    .post('/api/users/login', loginData)
                    .then(response => {
                        const { data } = response;
                        if (data.success === false) {
                            alert('아이디 또는 비밀번호가 잘못 입력되었습니다.');
                        } else {
                            context.commit('login', {
                                success: data.success,
                                accessToken: data.token,
                            })
                            resolve(response);
                            console.log('loginusername:', response.data.user_name);
                            context.commit('loginUserId', {
                                userAcc: loginData.user_acc
                            });
                            context.commit('loginUserName', {
                                userName: response.data.user_name,
                            });
                        }
                    })
                    .catch(error => {
                        reject(error);
                    })
                })
        },
        logout: function(context, payload) {
            return new Promise(resolve => {
                setTimeout(function () {
                    context.commit('logout', payload);
                    resolve({});
                }, 1000);
            })
        },
    },
    getters: {
        getAccessToken: function(state) {
            return state.token.accessToken
        },
        isAuthenticated: function(state) {
            return state.isAuthenticated;
        },
        getUserId: function(state) {
            return state.loginUserId;
        },
        getUserData: function(state) {
            return state.loginUserData;
        },
        getMaskedUser: function(state) {
            return state.maskedUser;
        }
    }
};

const base_url = ""
const google_api_key =""
const geolocation_base_url=""
import RnBgTask from 'react-native-bg-thread';
import { getStoredState } from 'redux-persist'
import Utils from '../Utils'
const endPoints = {
    login: 'login',
    getNotifications: 'auth/notification',
    register: 'signup',
    sendAgain: 'resend/activation/code',
    verifyEmail: 'signup/activate/',
    getUser: 'auth/user',
    updateProfile: 'auth/update-profile',
    postPrayer: 'post',
    UpdatePrayer: 'post/',
    homeData: 'home',
    search: 'search-by-name',
    changePassword: 'auth/change-password',
    logout: 'auth/logout',
    contact: 'contact-us',
    categories: 'categories',
    product: 'menu-by-category/',
    recoverPassword: 'password/create',
    verifyToken: 'password/find/',
    resetPassword: 'password/reset',
    orderPlace: 'place-order',
    getOrders: 'get-orders',
    readNotifications: 'notification/read/',
    getArticle: "auth/article",
    getCBT: "auth/cbt",
    unlockCBT: "auth/cbt/",
    contactUs: "contact-us",
    getUser: "auth/user",
    updateUser: "auth/user",
    getPosts: "post",
    getComments: "auth/comment",
    deleteComments: "auth/comment/",
    deletePost:"post/",
    getCategories: "category/prayer",

}
const getMessage = (data, callback) => {
    RnBgTask.runInBackground(() => {
        if (data.message) {
            if (Array.isArray(data.message) === true) {
                callback(data.message[0])
            } else {
                callback(data.message)
            }
        } else if (data.hasOwnProperty('errors')) {
            callback(data.errors[0])
        } else {
            callback('Something went wrong, try again later')
        }
    })
}

export default Api = {
    endPoints: endPoints,
    get: (endpoint, success, error, optional) => {
        RnBgTask.runInBackground(() => {
            getStoredState(Utils.persistConfig)
                .then(state => {
                    let url = base_url + endpoint
                    let headers = {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                    }
                    if (state.UserReducer.authData.access_token != null) {
                        headers['Authorization'] = 'Bearer ' + state.UserReducer.authData.access_token
                    }
                    let config = {
                        method: 'GET',
                        headers: new Headers(headers)
                    }
                    console.log(config, url, "get request")
                    fetch(url, config)
                        .then(d => {
                            console.log(d)
                            d.json()
                                .then(data => {
                                    switch (d.status) {
                                        case 200: {
                                            success(data)
                                            break;
                                        }
                                        case 201: {
                                            success(data)
                                            break;
                                        }
                                        case 403: {
                                            getMessage(data, optional)
                                            
                                            break;
                                        }
                                        default: {
                                            getMessage(data, error)
                                            break
                                        }

                                    }
                                }).catch(e => {
                                    getMessage(e, error)
                                })
                        })
                        .catch(e => {
                            getMessage(e, error)
                        })
                })
        })

    },
    delete: (endpoint, success, error, optional) => {
        RnBgTask.runInBackground(() => {
            getStoredState(Utils.persistConfig)
                .then(state => {
                    let url = base_url + endpoint
                    let headers = {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                    }
                    if (state.UserReducer.authData.access_token != null) {
                        headers['Authorization'] = 'Bearer ' + state.UserReducer.authData.access_token
                    }
                    let config = {
                        method: 'DELETE',
                        headers: new Headers(headers)
                    }
                    fetch(url, config)
                        .then(d => {
                            console.log(d)
                            d.json()
                                .then(data => {
                                    switch (d.status) {
                                        case 200: {
                                            success(data)
                                            break;
                                        }
                                        case 201: {
                                            success(data)
                                            break;
                                        }
                                        case 403: {
                                            getMessage(data, optional)
                                            
                                            break;
                                        }
                                        default: {
                                            getMessage(data, error)
                                            break
                                        }

                                    }
                                }).catch(e => {
                                    getMessage(e, error)
                                })
                        })
                        .catch(e => {
                            getMessage(e, error)
                        })
                })
        })

    },
    post: (endpoint, data, success, error, op, formdata = false) => {
        RnBgTask.runInBackground(() => {

            getStoredState(Utils.persistConfig)
                .then(state => {
                    let url = base_url + endpoint
                    // let headers = {
                    //     "Content-Type": formdata ? "multipart/form-data" : "application/json",
                    //     "X-Requested-With": "XMLHttpRequest",

                    // }

                    let headers = {
                        'Content-Type': formdata == true ? 'multipart/form-data' : 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                    }
                    if (state.UserReducer.authData.access_token != null) {
                        console.log(state.UserReducer.authData.access_token)
                        headers['Authorization'] = 'Bearer ' + state.UserReducer.authData.access_token
                    }
                    let dataToSend = JSON.stringify(data)
                    let config = {
                        method: 'POST',
                        headers: headers,
                        body: formdata ? data : dataToSend
                    }
                    console.log(config, url, "post request")
                    fetch(url, config)
                        .then(d => {
                            d.json()
                                .then(data => {
                                    console.log(data)
                                    console.log(d)

                                    switch (d.status) {
                                        case 200: {
                                            success(data)
                                            break;
                                        }
                                        case 201: {
                                            success(data)
                                            break;
                                        }
                                        case 401: {
                                           
                                                getMessage(data, error)
                                                

                                            break;
                                        }
                                        case 402:{
                                            if (op) {
                                                getMessage(data, op)
                                            } else {
                                                getMessage(data, error)

                                            }

                                            break;
                                        }
                                        default: {
                                            getMessage(data, error)
                                            break
                                        }

                                    }
                                }).catch(e => {
                                    getMessage(e, error)
                                })
                        })
                        .catch(e => {
                            console.log('error is in main catch ', e)
                            getMessage(e, error)
                        })
                })
        })
    },
    put: (endpoint, data, success, error, op) => {
        RnBgTask.runInBackground(() => {

            getStoredState(Utils.persistConfig)
                .then(state => {
                    let url = base_url + endpoint
                    let headers = {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                    if (state.UserReducer.authData.access_token != null) {
                        console.log(state.UserReducer.authData.access_token)
                        headers['Authorization'] = 'Bearer ' + state.UserReducer.authData.access_token
                    }
                    let dataToSend = JSON.stringify(data)
                    let config = {
                        method: 'PUT',
                        headers: new Headers(headers),
                        body: dataToSend
                    }
                    fetch(url, config)
                        .then(d => {
                            d.json()
                                .then(data => {
                                    console.log(data)
                                    console.log(d)

                                    switch (d.status) {
                                        case 200: {
                                            success(data)
                                            break;
                                        }
                                        case 201: {
                                            success(data)
                                            break;
                                        }
                                        case 401: {
                                            if (op) {
                                                getMessage(data, op)
                                            } else {
                                                getMessage(data, error)
                                                
                                            }

                                            break;
                                        }
                                        default: {
                                            getMessage(data, error)
                                            break
                                        }

                                    }
                                }).catch(e => {
                                    getMessage(e, error)
                                })
                        })
                        .catch(e => {
                            console.log('error is in main catch ', e)
                            getMessage(e, error)
                        })
                })
        })
    },
    getgoogleApi: (url, success, error) => {
        fetch(url)
            .then(d => {
                console.log(d)
                d.json()
                    .then(data => {
                        switch (d.status) {
                            case 200: {
                                success(data)
                                break;
                            }
                            case 201: {
                                success(data)
                                break;
                            }
                            default: {
                                getMessage(data, error)

                            }
                        }
                    }).catch(e => {
                        getMessage(e, error)
                    })
            }).catch(e => {
                getMessage(e, error)
            })
    },
    google: {
        apiKey: google_api_key,
        geocodeBaseUrl: geolocation_base_url,
        endPoints: {
            latlngToAddress: 'geocode/json?latlng=',
            searchPlace: 'place/textsearch/json?input=',
            searchPlaceEndString: '&inputtype=textquery&fields=formatted_address&key=',
        }
    },
    getMessage: getMessage
}

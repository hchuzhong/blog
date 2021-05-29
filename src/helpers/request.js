import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = '//blog-server.hunger-valley.com'
// axios.defaults.baseURL = '//localhost:3006'

export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: type,
        }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }
        if (localStorage.token) {
            axios.defaults.headers.common['Authorization'] = localStorage.token
        }

        axios(option).then(res => {
            console.log(res.data)
            if (res.data.status === 'ok') {
                if (res.data.token) {
                    localStorage.token = res.data.token
                }
                resolve(res.data)
            } else {
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err => {
            Message.error('网络异常')
            console.log(err)
            reject({ msg: '网络异常' })
        })
    })
}


// request('auth/login', 'POST', {username: 'hunger', password: '123456'})
// .then(data => {
//     console.log(data)
// })

/**
 * token 的作用：与后端进行校验，服务器发给客户端 token,客户端下次发送请求的时候要带上
 *
 * jwt 鉴权原理
 * 好处
 * 服务端不需要存储 cookie 或者 session 的信息，每次都是计算出来的
 * cookie 和 session 在小程序或者跨域中可能用不了或者用不上
 */
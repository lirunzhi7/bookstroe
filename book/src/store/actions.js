//使用axios需要先引进来
import axios from 'axios'
//设置默认路径
// axios.defaults.baseURL=''
export function getbanner({commit},option){
    axios.get('https://www.easy-mock.com/mock/5c6d1bd863a457265eb1155c/myvue/myvue').then((respons)=>{
        option(respons.data)
    })
}
export function gethotbook({commit},option){
    axios.get('https://www.easy-mock.com/mock/5c6d1c699fd14610cae17df1/hotbook/book').then((respons)=>{
        option(respons.data)
    })
}
export function getitem({commit},option){
    axios.get('https://www.easy-mock.com/mock/5c6d1ca09fd14610cae17e19/listdata/listdata').then((respons)=>{
        option(respons.data)
    })
}
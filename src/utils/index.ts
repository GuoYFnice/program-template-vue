// 对一些操作进行工具函数封装
/*
* 设置setLocalStorage
* */
export function setLocalStorage (key:string, value:object) {
    window.localStorage.setItem(key, window.JSON.stringify(value))
}
/*
* 获取getLocalStorage
* */
export function getLocalStorage (key:string) {
    return window.JSON.parse(window.localStorage.getItem(key) || '[]')
}
/*
* 设置setSessionStorage
* */
export function setSessionStorage (key:string, value:object) {
    window.sessionStorage.setItem(key, window.JSON.stringify(value))
}
/*
* 获取getSessionStorage
* */
export function getSessionStorage (key:string) {
    return window.JSON.parse(window.sessionStorage.getItem(key) || '[]')
}

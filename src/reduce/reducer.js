export default (state, action) => {
    // 对象解构注意要同名
    const { type, payload } = action
    switch (type) {
        case "CLICK":
            return {
                ...state,
                show: payload
            }
        case "CLICK2":
            return {
                ...state,
                show2: payload
            }
        case "ChangeInput":
            return {
                ...state,
                username: payload,
                // username: username + payload // 相当于对象值覆盖
            }
        case "ChangePwd":
            console.log('ok', payload)
            return {
                ...state,
                pwd: [...payload] // 相当于对象值覆盖
            }
        default:
            return state;

    }
}
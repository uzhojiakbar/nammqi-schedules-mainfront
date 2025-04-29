import { useMutation } from "react-query";
import { instance } from "./Api/api";
import getNotify from "./Hooks/notify"
const { notify, dismiss } = getNotify();


export const registerUser = async (data) => {
    const res = await instance.post("/api/auth/register", data);
    return res.data;
};

export const useRgister = () => {
    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            notify('ok', 'mofaqqiyatli')
            console.log(data)
        },
        onError: (error) => {
            notify('err', error?.response?.data?.message || 'xatolik yuz berdi')
        }
    })
}

// LOGIN
export const loginuser = async (data) => {
    const res = await instance.post('/api/auth/login', data)
    return res.data
}
export const useLogin = () => {
    return useMutation({
        mutationFn: loginuser,
        onSuccess: (data) => {
            notify('ok', 'profilega kirish mofaqqiyatli kechdi')
        },
        onError: (error) => {
            notify('err', 'xatolik yuz berdi')
        }
    })
}

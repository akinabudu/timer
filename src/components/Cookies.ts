import Cookie from "js-cookie";


export const SetCookies = (name: string, value: string) => {
    Cookie.set(name, value,{
        expires: 1,
        sameSite: "strict",
        secure: true
    });
};

export const GetCookies = (name: string) => {
    return Cookie.get(name);
}

export const RemoveCookies = (name: string) => {
    Cookie.remove(name);
}
export const armazenarLS = (key: any, value: any) => {
    localStorage.setItem(key, value)
}

export const consultarLS = (key: any) => {
    return localStorage.getItem(key)
}

export const excluirLS = (key: any) => {
    localStorage.removeItem(key)
}


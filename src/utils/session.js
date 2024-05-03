
export const setSession = (value) => {
    localStorage.setItem("session", value)

}

export function getSession() {
    if (typeof window !== 'undefined') {
        let session = localStorage.getItem('session')
        return session
    }
}


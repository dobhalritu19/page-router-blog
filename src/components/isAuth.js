
import { getSession } from "@/utils/session"
import { useEffect } from "react"

export default function isAuth(Component) {
    return function IsAuth(props) {
        const auth = getSession();
        useEffect(() => {
            if (auth == "false") {
                window.location.href = "/"
            }
        }, [auth]);


        if (auth == "false") {
            return null;
        }

        return <Component {...props} />;
    };
}
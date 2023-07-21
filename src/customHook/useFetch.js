import { useEffect, useState } from "react";

function useFetch(request) {

    let [data, setData] = useState(null)
    let [pending, setPending] = useState(true)
    let [error, setError] = useState(null)

    useEffect(() => {
        console.log("fetch starts");

        setTimeout(() => {
            fetch(request)
                .then((x) => {
                    if (x.ok === true) {
                        console.log("The data from the first promise :" + x);
                        return x.json()
                    }
                    else {
                        throw Error("Data not found")
                    }
                })
                .then((y) => { setData(y); setPending(false) })
                .catch((e) => { setError(e.message); setPending(false) })
        },
            2000);
    }, [])

    return { data, pending, error }
}
export default useFetch
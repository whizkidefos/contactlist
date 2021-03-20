import Link from "next/link";
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFout = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, [])

    return ( 
        <div className="not-found container">
            <h1>Opps!</h1>
            <h3>That page cannot be found...</h3>
            <Link href="/" className="btn">Go back to home page</Link>
        </div>
     );
}
 
export default NotFout;
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { contacts: data }
    }
}

const Contacts = ({ contacts }) => {
    return (
        <div className="container">
            <h1>All Contacts</h1>

           
                {contacts.map(person => (
                    
                        <div className="person-container">
                            <Link href={"/contacts/" + person.id} key={person.id}>
                                <a className="person">
                                    <h4>{person.name}</h4>
                                    <small>{person.username}</small>
                                </a>
                            </Link>
                        </div>
                    
                ))}
            
        </div>
    );
}
 
export default Contacts;
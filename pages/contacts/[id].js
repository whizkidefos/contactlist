export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(person => {
        return {
            params: { id: person.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    // const res = await fetch('https://jsonplaceholder.typicode.com/users' + id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { person: data }
    }
}

const Details = ({ person }) => {
    return ( 
        <div className="container">
            <h1>Contact Details</h1>
            <br/>
            <h3><strong>Name:</strong> { person.name }</h3>
            <p><strong>Username:</strong> { person.username }</p>
            <p><strong>Email:</strong> { person.email }</p>
            <p><strong>Website:</strong> { person.website }</p>
            <p><strong>Phone:</strong> { person.phone }</p>
            <p><strong>City:</strong> { person.address.city }</p>
        </div>
     );
}
 
export default Details;
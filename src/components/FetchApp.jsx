import { useEffect } from "react"
import { UseFetch } from "../Hooks/UseFetch"

export const FetchApp = () => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    const { data, isLoading, errors, fetchData } = UseFetch()


    useEffect(() => {
        fetchData(url, 'GET')
    }, [])

    return (
        <>
            <h2>Lista de usuarios:</h2>
            {isLoading
                ? <h4>Cargando...</h4>
                : errors
                    ? <h4>Ha ocurrido un error</h4>
                    : <table className="table">
                        <thead>
                            <tr><th>#</th><th>Name</th><th>Email</th><th>Phone</th></tr>
                        </thead>
                        <tbody>
                            {data.map(user => (
                                <tr key={user.id}><th scope="row">{user.id}</th><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td></tr>
                            ))}
                        </tbody>
                    </table>
            }
        </>
    )
}
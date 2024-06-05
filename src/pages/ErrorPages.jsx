import { Link, useRouteError } from "react-router-dom";


const ErrorPages = () => {
    const {error, status} = useRouteError()
    return (
        <div className="container flex flex-col justify-center items-center h-screen text-center py-32">
            <h1 className="text-7xl font-extrabold mb-8">
                Error {status||404}
                <p className="lg:text-3xl">{error?.message}</p>
                <button className="custom-btn mt-8">
                    <Link to="/">Home pages</Link>
                </button>
            </h1>
        </div>
    );
};

export default ErrorPages;
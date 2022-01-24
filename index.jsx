
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

const movies = [
    {
        title: "The Matrix",
        plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against ots controllers.",
        year: 1999
    },
    {
        title: "The Color Purple",
        plot: "A black southern woman (Whoopi Goldberg) struggles to find her identity after suffering years abuse from her father and other 40 years old men",
        year: 1985
    }
]

function FrontPage() {
    return <div>
        <h1>Kristiania Movie Database</h1>
        <ul>
            <li><Link to="/movies">List Movies</Link></li>
            <li><Link to="/movies/new">New Movie</Link></li>
        </ul>
    </div>;
}

function ListMovies() {
    return <div>
        <h1>List movies</h1>
        {movies.map(m =>
            <div>
                <h2>{m.title} {m.year}</h2>
                <div>{m.plot}</div>
            </div>)}
    </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/movies/new" element={<h1>New movie</h1>}/>
            <Route path="/movies" element={<ListMovies/>}/>
        </Routes>
    </BrowserRouter>;
}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);
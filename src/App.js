import * as React from 'react';


const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: ' Jordan Walke ',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: ' Dan Abramov, Andrew Clark ',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

function App() {
    return (
        <div>
            <h1>My Hacker Stories</h1>  {/* Header */}

            <Search/>

            <hr/>

            <List/>
        </div>
    );
}

/**
 * Component function which holds the logic for the search bar
 * @returns {JSX.Element} search bar label and input box
 */
function Search() {

    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text"/>
        </div>
    )
}

/**
 * Component function which contains the logic for the list
 * @returns {JSX.Element}
 */
function List() {
    return (
        <ul>
            {list.map(function (item) {
                return (
                    <li key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default App;

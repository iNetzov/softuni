import { html } from "../../node_modules/lit-html/lit-html.js";


const guestUserNavigation = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

const loggedUserNavigation = (username) => html`
<div id="profile">
    <a>Welcome ${username}</a>
    <a href="/my-listing">My Listings</a>
    <a href="/create">Create Listing</a>
    <a href="/logout">Logout</a>
</div>
`;

const navigationTemplate = (user) => html`
<nav>
    <a class="active" href="/">Home</a>
    <a href="/listing">All Listings</a>
    <a href="/search">By Year</a>
    ${user 
        ?loggedUserNavigation(user.username)
        :guestUserNavigation(user)
    }
</nav>`

//destroctor from ctx user 
export const renderNavigation = ({user}) => {
    return navigationTemplate(user);
}
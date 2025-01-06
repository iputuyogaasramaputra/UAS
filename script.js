const app = document.getElementById('content');
let blogs = [];

function loadPage(page) {
    switch (page) {
        case 'home':
            app.innerHTML = `
                <h2>Welcome to BlogSphere</h2>
                <p>Discover amazing blogs or share your own.</p>
                <ul class="blog-list">
                    ${blogs.map((blog, index) => `
                        <li>
                            <h2>${blog.title}</h2>
                            <p>${blog.content}</p>
                            <div class="actions">
                                <button class="update-btn" onclick="editBlog(${index})">Edit</button>
                                <button class="delete-btn" onclick="deleteBlog(${index})">Delete</button>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            `;
            break;
        case 'create':
            app.innerHTML = `
                <h2>Create a New Blog</h2>
                <form onsubmit="createBlog(event)">
                    <label for="title">Title:</label>
                    <input type="text" id="title" required />

                    <label for="content">Content:</label>
                    <textarea id="content" rows="5" required></textarea>

                    <button type="submit">Create</button>
                </form>
            `;
            break;
        case 'login':
            app.innerHTML = `
                <h2>Login</h2>
                <form id="loginForm">
                    <label for="email">Email:</label>
                    <input type="email" id="email" required />

                    <label for="password">Password:</label>
                    <input type="password" id="password" required />

                    <button type="submit">Login</button>
                </form>
            `;
            break;
        case 'register':
            app.innerHTML = `
                <h2>Register</h2>
                <form id="registerForm">
                    <label for="username">Username:</label>
                    <input type="text" id="username" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" required />

                    <label for="password">Password:</label>
                    <input type="password" id="password" required />

                    <button type="submit">Register</button>
                </form>
            `;
            break;
        default:
            app.innerHTML = `<h2>Page not found</h2>`;
            break;
    }
}

function createBlog(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    blogs.push({ title, content });
    loadPage('home');
}

function editBlog(index) {
    const blog = blogs[index];
    app.innerHTML = `
        <h2>Edit Blog</h2>
        <form onsubmit="updateBlog(event, ${index})">
            <label for="title">Title:</label>
            <input type="text" id="title" value="${blog.title}" required />

            <label for="content">Content:</label>
            <textarea id="content" rows="5" required>${blog.content}</textarea>

            <button type="submit">Update</button>
        </form>
    `;
}

function updateBlog(event, index) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    blogs[index] = { title, content };
    loadPage('home');
}

function deleteBlog(index) {
    blogs.splice(index, 1);
    loadPage('home');
}

document.getElementById('link-home').addEventListener('click', () => loadPage('home'));
document.getElementById('link-create').addEventListener('click', () => loadPage('create'));
document.getElementById('link-login').addEventListener('click', () => loadPage('login'));
document.getElementById('link-register').addEventListener('click', () => loadPage('register'));

loadPage('home');

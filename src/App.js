import { Component } from 'react';
import { Title } from './components/Title/Title';
import './App.scss';

const DEFAULT_POSTS = [
    {
        id: 1,
        title: 'Welcome to our App!',
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
        repellat labore rem vel, quis voluptates commodi mollitia
        officiis molestias totam.`,
        amount: 23
    },
    {
        id: 2,
        title: 'Hello World',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing.`,
        amount: 45
    },
    {
        id: 3,
        title: 'Last post!',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis vero rem harum ex labore, ratione repellendus? Doloremque, maiores perspiciatis!`,
        amount: 100
    }
];

export class App extends Component {
    state = {
        posts: DEFAULT_POSTS,
        postAmount: 3,
        showPosts: true,
        login: ''
    };

    handleRemovePost(postId) {
        const { posts } = this.state;

        const filtredPosts = posts.filter(p => p.id !== postId);

        this.setState({ posts: filtredPosts, postAmount: filtredPosts.length });
    }

    handleTogglePosts = () => {
        this.setState(prevState => {
            return {
                showPosts: !prevState.showPosts
            };
        });
    };

    handleChangeInput = e => {
        this.setState({ login: e.target.value });
    };

    render() {
        const { posts, showPosts, postAmount, login } = this.state;

        return (
            <div className="app">
                <button type="button" onClick={this.handleTogglePosts}>
                    {showPosts ? 'Hide posts' : 'Show posts'}
                </button>

                <div>
                    <span>Post amount (a lot of text here):</span>{' '}
                    <span>{postAmount}</span>
                </div>

                <div>
                    <input
                        type="text"
                        name="login"
                        placeholder="Login"
                        autoComplete="off"
                        value={login}
                        onChange={this.handleChangeInput}
                    />
                </div>

                {showPosts &&
                    posts.map((post, i) => (
                        <div className="post" key={i}>
                            <Title amount={post.amount}>{post.title}</Title>
                            <p>{post.text}</p>
                            <button
                                onClick={() => this.handleRemovePost(post.id)}
                            >
                                Remove post #{post.id}
                            </button>
                        </div>
                    ))}
            </div>
        );
    }
}

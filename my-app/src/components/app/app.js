import React, { useState } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status_filter/post-status_filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add_form/post-add_form';
import './app.css';

const App = () => {
    const [data, setData] = useState([
        {
            label: 'Учу React!',
            important: false,
            like: false,
            id: 1,
        },

        {
            label: 'Получается отлично ;)',
            important: false,
            like: false,
            id: 2,
        },

        {
            label: 'Не хочу останавливаться',
            important: false,
            like: false,
            id: 3,
        },
    ]);

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    let maxID = 4;

    const DeleteElementPost = (id) => {
        const index = data.findIndex((el) => el.id === id);
        let newArr = [...data.slice(0, index), ...data.slice(index + 1)];
        setData(newArr);
    };

    const addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: maxID++,
        };

        let newArr = [...data, newItem];
        setData(newArr);
    };

    const onToggleImp = (id) => {
        const index = data.findIndex((el) => el.id === id);
        const oldEl = data[index];
        const newItem = { ...oldEl, important: !oldEl.important };
        let newArr = [
            ...data.slice(0, index),
            newItem,
            ...data.slice(index + 1),
        ];
        setData(newArr);
    };

    const onToggleLike = (id) => {
        const index = data.findIndex((el) => el.id === id);
        const oldEl = data[index];
        const newItem = { ...oldEl, like: !oldEl.like };
        const newArr = [
            ...data.slice(0, index),
            newItem,
            ...data.slice(index + 1),
        ];
        console.log(data);
        setData(newArr);
    };

    const searchPost = (items, term) => {
        if (term.length === 0) return items;

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    };

    const onUpdateSearch = (term) => {
        setTerm(term);
    };

    const filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter((item) => item.like);
        } else {
            return items;
        }
    };

    const onFilterSel = (filter) => {
        setFilter(filter);
    };

    const liked = data.filter((i) => i.like).length;
    const allPost = data.length;

    const visiblePosts = filterPost(searchPost(data, term), filter);
    return (
        <div className="app">
            <AppHeader liked={liked} allPost={allPost} />
            <div className="search-panel d-flex">
                <SearchPanel onUpdateSearch={onUpdateSearch} props={term} />
                <PostStatusFilter filter={filter} onFilterSel={onFilterSel} />
            </div>
            <PostList
                posts={visiblePosts}
                onDelete={DeleteElementPost}
                onToggleImp={onToggleImp}
                onToggleLike={onToggleLike}
            />
            <PostAddForm onAdd={addItem} />
        </div>
    );
};

export default App;

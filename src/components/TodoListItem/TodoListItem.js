import React from 'react';

import './TodoListItem.css';
import Chrat from '../Chart';


class TodoListItem extends React.Component {

    render() {
        const { name, html_url, important, onToggleImportant, language, pushed_at } = this.props;
        let classNames = 'todo-list-item';

        if (important) {
            classNames += ' important'
        }

        let updateDate = () => {
            let date = Math.round((new Date - Date.parse(pushed_at)) / 1000 / 60 / 60);
            switch (true) {
                case date <= 24:
                    return date + ' hours ago';
                case date >= 24 && date / 24 < 31:
                    return Math.round(date / 24) + ' days ago';
                case date / 24 > 31:
                    return 'on ' + new Date(pushed_at).toLocaleString('en', { day: 'numeric', }) + ' ' + new Date(pushed_at).toLocaleString('en', { month: 'short', });
                default:
                    return date;
            }
        }

        return (
            <div className={classNames}>
                <div
                    className="todo-list-label"
                >
                    <a href={html_url} className='name'>{name}</a>
                    <p>
                        <span className='language'>
                            <span className={`dot ${language}`}></span>
                            <span>{language}</span>
                        </span>
                        <span className='date'>{'Updated ' + updateDate()}</span>
                    </p>
                </div>
                <div className='todo-list-label'>
                    <button
                        className="btn btn-outline-secondary btn-important"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                   Star
                </button>

                    <Chrat name={name} />
                </div>

            </div>

        );
    }
}

export default TodoListItem;
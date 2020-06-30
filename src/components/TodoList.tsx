import {
    CheckOutlined,
    DeleteOutlined,
    EditOutlined,
    UndoOutlined,
} from '@ant-design/icons';
import React, { FC } from 'react';
import { ITodo, ModalType } from '../models/todo';
import styles from '../views/Todo/index.module.scss';
import { Empty } from 'antd';

interface ITodoListProps {
    lists: ITodo[],
    updateText: (id: number, text: string) => void;
    toggleDone: (id: number) => void,
    deleteTodo: (id: number) => void,
    onShowModal: (type: ModalType, id: number) => void;
}
const TodoList: FC<ITodoListProps> = (props) => {

    const { lists, toggleDone, deleteTodo, onShowModal } = props;

    return (
        <ul className={styles.list}>
            {
                lists.length ? (lists.map((todo, index) =>
                    <li key={index}>
                        <div className={styles.item}>
                            <span className={styles.content}>{todo.text}</span>
                            <div>
                                <EditOutlined
                                    className={styles.icon}
                                    onClick={() => onShowModal(ModalType.Edit, todo.id)}
                                />
                                {todo.done ? (
                                    <UndoOutlined
                                        className={styles.icon}
                                        onClick={() => toggleDone(todo.id)}
                                    />
                                ) : (
                                        <CheckOutlined
                                            className={styles.icon}
                                            onClick={() => toggleDone(todo.id)}
                                        />
                                    )}
                                <DeleteOutlined
                                    className={styles.icon}
                                    onClick={() => deleteTodo(todo.id)}
                                />
                            </div>
                        </div>
                    </li>
                )) : (
                        <Empty className={styles.noData} />
                    )
            }
        </ul >
    );
}

export default TodoList;

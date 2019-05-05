import React from 'react';

export default class Todo extends React.Component {
  state = {
    todo: ''
  }

  render() {
    // StoreのTodoからリストを生成
    const list = this.props.todo.todoList.map(e => <li key={e.id}>{e.todo}</li>);

    return (
      <div>
        <input type="text" onChange={elm => this.setState({ todo: elm.target.value })} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>追加</button>
        <button onClick={() => this.props.delTodo(this.state.todo)}>削除</button>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}
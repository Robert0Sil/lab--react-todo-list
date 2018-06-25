class Todo extends React.Component {
    
    constructor(props) {
      super(props);
      this.state={todos:[]};
    }
    
    save() {
      var todos = [...this.state.todos];
      todos.push(this.newText.value);
      this.setState({todos});
    }

    render(){
        return(
            <div className="list">
              <h1> TO-DO List</h1>
              <input type="text" ref={(ip) => {this.newText = ip}}/>
              <button onClick={this.save.bind(this)} className="btn btn-primary glyphicon glyphicon-floppy-saved">Save
              </button>
              <ul>
                {this.state.todos.map(function(todo) {
                      return <li>{todo}</li>
                 })}
                
              </ul>
            </div>
        )
    }
};

ReactDOM.render(<Todo/>, document.getElementById('app'));

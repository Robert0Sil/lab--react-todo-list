import React, { Component } from 'react';
import TareaItem from './TareaItem';

class Tareas extends Component {
    constructor(args) {
        super(args);
        this.state = {
            tareas: [
                'Correr',
                'Oir Musica',
                'Cocinar'
            ],
            deleted: false
        }
    }

    addTarea(event) {
        let actTareas = this.state.tareas;
        let textBox = event.target.previousElementSibling;

        if (textBox.value) {
            actTareas.push(textBox.value);
            textBox.value = '';

            this.setState({
                tareas: actTareas
            });
        }
    }

    rmvTarea(event) {
        let actTarea = event.target.textContent;
        let Tareasact = this.state.tareas.filter((tarea) => {
            return actTarea !== tarea;
        });

        this.setState({
            tareas: Tareasact
        });

        !this.state.deleted && this.setState({
            deleted: true
        });
    }

    render() {
        let TareaItem = 'tarea-item';
        let conta = 'mas-de-tres';
        let tareaItems = this.state.tareas.map((tarea, i) => {
            return <p onClick={this.rmvTarea.bind(this)}
                className={TareaItem}
                key={TareaItem + i}>{/*<button id="old-tarea">Eliminar Tarea
                </button>*/}<input type="checkbox" />{tarea}</p>;
        });
        let tareasLength = this.state.tareas.length;

        if (tareasLength < 3) {
            conta = 'menos-de-tres';
        } else if (tareasLength === 3) {
            conta = 'igual-tres';
        }

        return (
            <div className="App">
              <header className="App-header">
                <h1 className="App-title">Todo List</h1>
                <nav className="nav-add">
                    <input type="text" id="input-add" />
                    <button id="new-tarea"
                        onClick={this.addTarea.bind(this)}>Nueva Tarea</button>
                </nav>
                <input type="date"/>
              </header>
                <h4>Listado de Tareas</h4>
                <p>{this.state.deleted && 'Tarea Eliminada !!!'}</p>
                <p className={conta} ><b>Total de Tareas:
                </b> {this.state.tareas.length}</p>

                  <p>
                    {tareaItems}
                  </p>
                  <p>Para eliminar alguna tarea,
                    sólo da click sobre la tarea que quieres eliminar
                  </p>
            </div>
        );
    }
}

export default Tareas ;

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done:false
}]

const todoReducer = (state = initialState, action) => {
    if(action?.type==='add'){
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar agua',
    done:false
}

const todoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, todoAction)
console.log(todos)

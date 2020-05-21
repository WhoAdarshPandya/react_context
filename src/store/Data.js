import {createStore, action} from 'easy-peasy'
export const TodoModel = {
    todos:[ {id:4,name:'ok',completed:false }],
    addTodo : action((state,payload)=>{
        state.todos.push(payload)
    }),
    removeTodo : action((state,payload)=> {
        console.log("in delete")
        console.log(payload.id)
        let news  = state.todos.filter(todo => todo.id!==payload.id?todo:null)
        console.log(news)
    })
}

export const storeModel = {
    todos : TodoModel
}

export const store = createStore(storeModel)
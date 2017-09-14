import * as firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// firebase
const config = {
  apiKey: 'AIzaSyC608UR1qe6rdqhNesR5hFdhbxBJhFYFd8',
  authDomain: 'kanban-65a60.firebaseapp.com',
  databaseURL: 'https://kanban-65a60.firebaseio.com',
  projectId: 'kanban-65a60'
}
const db = firebase.initializeApp(config).database()

export const store = new Vuex.Store({
  state: {
    tasks: [],
    dummy: 'Ini data dummy'
  }, // state

  mutations: {
    getAllTasks (state) {
      db.ref('todo').on('value', snapshot => {
        state.tasks = []
        for (var i in snapshot.val()) {
          state.tasks.push(snapshot.val()[i])
        }
      })
    }
  }, // mutations

  actions: {
    test () {
      return 'aaa'
    },
    newTask (store, payload) {
      let data = {
        assignedto: payload.assignedto,
        desc: payload.desc,
        point: payload.point,
        task: payload.task,
        status: 1
      }
      db.ref('todo').push(data)
    },

    deleteTask (state, payload) {
      db.ref('todo/payload').remove()
    }
  }, // actions

  getters: {
    todoList (state) {
      return state.tasks.filter(todo => {
        // return 'aaa'
        return todo.status === 1
      })
    },
    progressList (state) {
      return state.tasks.filter(progress => {
        return progress.status === 2
      })
    },
    testingList (state) {
      return state.tasks.filter(test => {
        return test.status === 3
      })
    },
    doneList (state) {
      return state.tasks.filter(done => {
        return done.status === 4
      })
    }
  } // getters
})

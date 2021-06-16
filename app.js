const app = Vue.createApp({})
app.component('todo', {
  data() {
    return {
      todos: [],
      value: ""
    }
  },
  methods: {
      handleSubmit(e){
          e.preventDefault();
            this.todos.push(this.value)
            this.value = ""
      }
  },
  template: `
  <form v-on:submit="handleSubmit">
    <input v-model="value"/>
    <button type="submit">Submit</button>
  </form>
    
  <ul v-for="todo in todos">
    <li>{{todo}}</li>
  </ul>
  `
})
app.mount('#root')
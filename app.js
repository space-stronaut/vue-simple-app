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
  <form v-on:submit="handleSubmit" class="d-flex mt-5">
    <input v-model="value" placeholder="Masukkan Kegiatan" class="form-control"/>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    
  <div v-for="todo in todos" class="mb-2 mt-3">
    <div class="alert alert-primary" role="alert">
        {{todo}}
    </div>
  </div>
  `
})
app.mount('#root')
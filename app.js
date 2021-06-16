const app = Vue.createApp({})
app.component('Todo', {
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
      },
      hapus(e){
            delete this.todos[e]
      }
  },
  template: `
  <form v-on:submit="handleSubmit" class="d-flex mt-5 ">
    <input v-model="value" placeholder="Masukkan Kegiatan" style="width : 300px" class="form-control" required/>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    
  <div v-for="(value,index) in todos" class="mb-2 mt-3 d-flex justify-content-evenly">
    <div class="alert alert-primary alert-dismissible fade show" style="width : 300px;" role="alert">
        {{value}}
        <button v-on:click="hapus(index)" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
  `
}).mount('#root')
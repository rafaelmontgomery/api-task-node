import Task from '../models/Task';


// TODO: ADD VALIDATIONS IN METHODS
class TaskController {

    //Get
    async index(req, res) {

        console.log("index");
    
        //Lista Tasks
        const tasks = await Task.findAll();         

        return res.json(tasks);
       
      }

      //Post
      async store(req, res) {

        console.log(req.body);    
      
        // Cria nova tarefa
        const newTask = await Task.create(req.body);
    
        //retorna nova tarefa criada
        return res.json(newTask);
      }

      //Put
      async update(req, res) 
      {

        console.log(req.params);    

        const { id } = req.params;       
    
        // Obtem tarefa 
        const task = await Task.findByPk(id);     
    
        //atualiza tarefa
        const newTask = await task.update(req.body);
    
        //retorna tarefa atualizada
        return res.json(newTask);
    
      }

      //Delete
      async delete(req, res) {

        console.log(req.params);  

        const { id } = req.params;       
    
        // Obtem tarefa 
        const task = await Task.findByPk(id); 
    
        //atualiza tarefa
        await task.destroy();
    
        //retorna 
        return res.json({ status: "ok" });
    
      }
}

export default new TaskController();
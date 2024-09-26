import { Injectable } from "@nestjs/common";

export interface User {
    name: string,
    age: number
}
@Injectable()
export class TaskService{

    private tasks = []
    getTasks(){
        return this.tasks
    }

    getTask(id: number){
        return this.tasks.find(task => task.id === id)
    }
    createTasks(task: any){
        this.tasks.push(task)
        return task
    }

    updateTasks(){
        return "update"
    }

   deleteTasks(){
        return "delete"
    }

    updateTaskStatus(){
        return "update 2"
    }
}
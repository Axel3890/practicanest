import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TaskService } from "./tasks.service";

@Controller("/tasks")
export class TaskController{
    taskService: TaskService
    constructor(taskService: TaskService){
        this.taskService = taskService;
    }
    @Get()
    getAllTasks(){
        return this.taskService.getTasks();
    }

    @Post()
    createTasks(@Body() task: any){
        return this.taskService.createTasks(task);
    }

    @Put()
    updateTasks(){
        return this.taskService.updateTasks();
    }

    @Delete()
    deleteTasks(){
        return this.taskService.deleteTasks();
    }
    @Patch()
    patchTasks(){
        return this.taskService.updateTaskStatus();
    }


}

import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response) =>{
    const list = await Todo.findAll();

    res.json({
        list:list
    });
}

export const add = async (req: Request, res: Response) =>{
    if(req.body.title){

        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });

        res.status(201).json({item: newTodo});

    } else{
        res.json({error: 'OS DADOS NÃO FORAM ENVIADOS'});

    }
}

export const update = async () =>{
    
}

export const remove = async () =>{
    
}

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

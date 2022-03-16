import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response) =>{
    const list = await Todo.findAll();

    res.json({
        list:listyou
    });
}

export const add = async () =>{
    
}

export const update = async () =>{
    
}

export const remove = async () =>{
    
}

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

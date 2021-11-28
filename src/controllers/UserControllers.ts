import { Request, Response } from "express";
import EmailService from "../services/EmailService";


const users = [
  { name: 'Caio', email: 'caio.nascimento_@outlook.com'},
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  
  async create(req: Request, res: Response) { 
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: 'Caio Rodrigues', email: 'caio.nascimento_@outlook.com'},
      message: { subject: 'Bem-Vindo ao sistema', body: 'Seja bem-vindo' }
    });

    return res.send();
  }
};
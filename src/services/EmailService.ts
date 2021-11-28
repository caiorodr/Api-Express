interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]; // não é obrigatorio
}
// Data Tranfer Object
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(resquest: IMessageDTO): void;
}

class EmailService implements IEmailService{
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email Enviado para ${to.name}: ${message.subject}`); // tamplate string ` 
  }
}

export default EmailService;
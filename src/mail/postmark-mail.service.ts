import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export default class PostmarkMailServive implements MailService {
  sendEmail(): string {
    return 'Postmark Mail';
  }
}

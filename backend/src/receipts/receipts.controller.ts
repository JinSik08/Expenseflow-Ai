import { Controller, Get } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';

@Controller('receipts')
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Get()
  getReceipts() {
    return {
      message: 'Receipts endpoint working',
    };
  }
}
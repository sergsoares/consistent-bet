import { Module } from '@nestjs/common';
import { DatabaseModule } from '@consistent-bets/database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './payments/payments.module';
import { BetableModule } from './purchasables/purchasables.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    TransactionsModule,
    BetableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

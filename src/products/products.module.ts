import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    NatsModule,
    // ClientsModule.register([
    //   {
    //     // name: PRODUCT_SERVICE,
    //     name: NATS_SERVICE,
    //     // transport: Transport.TCP,
    //     transport: Transport.NATS,
    //     options: {
    //       // host: envs.productMsHost,
    //       // port: envs.productMsPort,
    //       servers: envs.natsService,
    //     },
    //   },
    // ]),
  ],
})
export class ProductsModule {}

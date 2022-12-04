import {Module} from '@nestjs/common';
import {CroissantedService} from './croissanted.service';
import {CroissantedController} from './croissanted.controller';
import {PrismaService} from "../prisma.service";

@Module({
    providers: [CroissantedService, PrismaService],
    exports: [CroissantedService],
    controllers: [CroissantedController]
})
export class CroissantedModule {
}

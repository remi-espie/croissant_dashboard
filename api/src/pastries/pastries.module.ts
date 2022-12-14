import {Module} from "@nestjs/common";
import {PrismaService} from "src/prisma.service";
import {PastriesController} from "./pastries.controller";
import {PastriesService} from "./pastries.service";

@Module({
    providers: [PastriesService, PrismaService],
    exports: [PastriesService],
    controllers: [PastriesController],
})
export class PastriesModule {
}

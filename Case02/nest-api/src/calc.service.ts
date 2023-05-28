import { Injectable } from "@nestjs/common";

@Injectable()
export class CalcService{
    postDados(): string{
        return 'Salvar Dados!';
    }

    getDados(): string{
        return 'Pegar Dados!';
    }
}
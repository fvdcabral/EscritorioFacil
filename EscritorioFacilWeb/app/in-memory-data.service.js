"use strict";
class InMemoryDataService {
    createDb() {
        let estados = [
            { id: 1, nome: 'Rio de Janeiro', uf: 'RJ', isAtivo: true },
            { id: 2, nome: 'São Paulo', uf: 'SP', isAtivo: true }
        ];
        return { estados };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
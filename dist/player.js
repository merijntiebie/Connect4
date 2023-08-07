"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, discColor) {
        this.name = name;
        this.discColor = discColor;
    }
    getDiscColor() {
        return this.discColor;
    }
    getName() {
        return this.name;
    }
}
exports.Player = Player;

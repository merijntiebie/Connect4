class Player {
  private discColor: string;

  private name: string;

  constructor(name: string, discColor: string) {
    this.name = name;
    this.discColor = discColor;
  }

  getDiscColor(): string {
    return this.discColor;
  }

  getName(): string {
    return this.name;
  }
}

export { Player };

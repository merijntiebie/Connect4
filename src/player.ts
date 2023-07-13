class Player {
  private discColor: string;

  constructor(discColor: string) {
    this.discColor = discColor;
  }

  getDiscColor(): string {
    return this.discColor;
  }

}

export { Player };

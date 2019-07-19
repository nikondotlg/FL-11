class Fighter {
  constructor({
    name,
    damage,
    hp,
    agility
  }) {
    this._name = name;
    this._damage = damage;
    this._hp = hp;
    this._totalHp = hp;
    this._agility = agility;
    this._wins = 0;
    this._losses = 0;
  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage;
  }

  getAgility() {
    return this._agility;
  }

  getHealth() {
    return this._hp;
  }

  attack(defender) {
    const max = 100;
    const dodgeRate = max - defender.getAgility();
    const result = Math.floor(Math.random() * max);
    if (result <= dodgeRate) {
      defender.dealDamage(this._damage);
      console.log(`${this._name} make ${this._damage} damage to ${defender.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`)
    }
  }

  logCombatHistory() {
    console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`)
  }

  heal(amount) {
    if (amount > this._totalHp) {
      this._hp = this._totalHp;
    } else {
      this._hp += amount;
    }
  }

  dealDamage(amount) {
    if (this._hp - amount < 0) {
      this._hp = 0;
      return this._hp;
    } else {
      this._hp -= amount;
      return this._hp;
    }
  }

  addWin() {
    this._wins++;
  }

  addLoss() {
    this._losses++;
  }
}

function battle(player1, player2) {
  if (player1.getHealth() <= 0 || player2.getHealth() <= 0) {
    if (player1.getHealth() <= 0) {
      return `${player1._name} is dead and can't fight.`;
    } else if (player2._hp <= 0) {
      return `${player2._name} is dead and can't fight.`;
    }
  }

  while (player1.getHealth() > 0 && player2.getHealth() > 0) {
    player1.attack(player2);
    if (player2.getHealth() <= 0) {
      player2.addLoss();
      player1.addWin();
    }
    player2.attack(player1);
    if (player1.getHealth() <= 0) {
      player1.addLoss();
      player2.addWin();
    }
  }
}

const myFighter = new Fighter({
  name: 'Rick',
  damage: 20,
  hp: 100,
  agility: 25
});

const myFighter2 = new Fighter({
  name: 'Morty',
  damage: 30,
  hp: 90,
  agility: 20
});
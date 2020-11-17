class MapSite {
  public enter() {
    console.log('go');
  }
}

/**
 * Комната
 */
class Room extends MapSite {
  roomNumber: number;
  
  constructor(number: number) {
    super();
    this.roomNumber = number;
    
    return this;
  }

  public getSide() {
    return '1'
  }

  public setSide() {
    return '2'
  }
}

/**
 * Стена
 */
class Wall extends MapSite {
  public otherSideFrom() {

  }
}

/**
 * Набор комант
 */
class Maze {
  public addRoom() {

  }
}

/**
 * Игра в лабиринт
 */
function game() {
  const maze = new Maze();
  const room1 = new Room(1);
  const room2 = new Room(2);

  console.log(room2);
}

game();
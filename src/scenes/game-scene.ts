import { Input } from 'phaser';
import { getGameWidth, getGameHeight } from '../helpers';
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
  physics: undefined,
};

function addKeys<T extends string>(
  keyboard: Phaser.Input.Keyboard.KeyboardPlugin,
  mapping: Record<T, number>,
): Record<T, Phaser.Input.Keyboard.Key> {
  return keyboard.addKeys(mapping) as Record<T, Phaser.Input.Keyboard.Key>;
}

class MapObject {
  constructor(
    readonly x: number,
    readonly y: number,
    // in cells
    readonly size: Phaser.Structs.Size,
    readonly color: number,
  ) { }
}

class CheckeredMap {
  // private readonly objects: MapObject[] = [];
  private readonly map: (MapObject | undefined)[][];
  constructor(readonly size: Phaser.Structs.Size, readonly objects: MapObject[]) {
    this.map = new Array(size.width);
    for (let i = 0; i < size.width; i++) {
      this.map[i] = new Array(size.height);
    }
    objects.forEach((object) => {
      for (let i = 0; i < object.size.width; i++) {
        for (let j = 0; j < object.size.height; j++) {
          this.map[i + object.x][j + object.y] = object;
        }
      }
    });
    objects.sort((o1, o2) => (o1.y == o2.y ? o1.x - o2.x : o1.y - o2.y));
  }
  draw(factory: Phaser.GameObjects.GameObjectFactory) {
    this.objects.forEach((obj) => {
      for (let i = 0; i < obj.size.width; i++) {
        const x = obj.x + i;
        for (let j = 0; j < obj.size.height; j++) {
          const y = obj.y + j;
          factory.rectangle(100 * x - 50, 100 * y - 50, 100, 100, obj.color);
        }
      }
    });
  }
}

export class GameScene extends Phaser.Scene {
  public speed = 200;

  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  private image: Phaser.GameObjects.Sprite;

  constructor() {
    super(sceneConfig);
  }

  public create(): void {
    const grid = this.add.grid(1000, 500, 1000, 1000, 100, 100, null, null, 0xff0000);

    const map = new CheckeredMap(new Phaser.Structs.Size(10, 10), [new MapObject(1, 1, new Phaser.Structs.Size(1, 1), 0xa00000), new MapObject(4, 3, new Phaser.Structs.Size(2, 1), 0xf0f000)]);
    map.objects.forEach((obj) => {
      for (let i = 0; i < obj.size.width; i++) {
        const x = obj.x + i;
        for (let j = 0; j < obj.size.height; j++) {
          const y = obj.y + j;
          this.add.rectangle(100 * x - 50, 100 * y - 50, 100, 100, obj.color);
        }
      }
    });
    // Add a player sprite that can be moved around. Place him in the middle of the screen.
    this.image = this.add.sprite(getGameWidth(this) / 2, getGameHeight(this) / 2, 'man');

    // This is a nice helper Phaser provides to create listeners for some of the most common keys.
    this.cursorKeys = addKeys(this.input.keyboard, {
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
      shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    });

    // for (let i = 0; i < 10; i++) {
    // for (let j = 0; j < 10; j++) {
    // }
    // }
    //this.input.keyboard.createCursorKeys();
  }

  public update(time: number, delta: number): void {
    // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
    const velocity = new Phaser.Math.Vector2(0, 0);
    if (this.cursorKeys.left.isDown) {
      velocity.x -= 1;
    }
    if (this.cursorKeys.right.isDown) {
      velocity.x += 1;
    }
    if (this.cursorKeys.up.isDown) {
      velocity.y -= 1;
    }
    if (this.cursorKeys.down.isDown) {
      velocity.y += 1;
    }

    // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.
    const normalizedVelocity = velocity.normalize();
    this.image.x += velocity.x * 10;
    this.image.y += velocity.y * 10;
  }
}

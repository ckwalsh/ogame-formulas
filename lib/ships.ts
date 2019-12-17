import {
  AssetType,
  Ship,
  ShipCategory,
  ShipCargo,
  ShipDrive,
  ShipDriveBase,
  DriveTechs,
  PlayerClass,
  ServerProbeStorage,
  HyperspaceTech
} from "./if";

const LIGHT_FIGHTER: Readonly<Ship> = {
  id: 204,
  type: AssetType.Ship,
  name: "Light Fighter",
  combat: true,
  metal: 3000,
  crystal: 1000,
  deuterium: 0,
  shieldBase: 10,
  weaponBase: 50,
  combustionDrive: { speed: 12500, fuel: 20 },
  cargoBase: 50
};
const HEAVY_FIGHTER: Readonly<Ship> = {
  id: 205,
  type: AssetType.Ship,
  name: "Heavy Fighter",
  combat: true,
  metal: 6000,
  crystal: 4000,
  deuterium: 0,
  shieldBase: 25,
  weaponBase: 150,
  impulseDrive: { speed: 10000, fuel: 75 },
  cargoBase: 100
};
const CRUISER: Readonly<Ship> = {
  id: 206,
  type: AssetType.Ship,
  name: "Cruiser",
  combat: true,
  metal: 20000,
  crystal: 7000,
  deuterium: 2000,
  shieldBase: 50,
  weaponBase: 400,
  impulseDrive: { speed: 15000, fuel: 300 },
  cargoBase: 800
};
const BATTLESHIP: Readonly<Ship> = {
  id: 207,
  type: AssetType.Ship,
  name: "Battleship",
  combat: true,
  metal: 45000,
  crystal: 15000,
  deuterium: 0,
  shieldBase: 200,
  weaponBase: 1000,
  hyperspaceDrive: { speed: 10000, fuel: 500 },
  cargoBase: 1500
};
const BATTLECRUISER: Readonly<Ship> = {
  id: 215,
  type: AssetType.Ship,
  name: "Battlecruiser",
  combat: true,
  metal: 30000,
  crystal: 40000,
  deuterium: 15000,
  shieldBase: 400,
  weaponBase: 700,
  hyperspaceDrive: { speed: 10000, fuel: 250 },
  cargoBase: 750
};
const BOMBER: Readonly<Ship> = {
  id: 211,
  type: AssetType.Ship,
  name: "Bomber",
  combat: true,
  metal: 50000,
  crystal: 25000,
  deuterium: 15000,
  shieldBase: 500,
  weaponBase: 1000,
  impulseDrive: { speed: 4000, fuel: 700 },
  hyperspaceDrive: { minLevel: 8, speed: 5000, fuel: 700 },
  cargoBase: 750
};
const DESTROYER: Readonly<Ship> = {
  id: 213,
  type: AssetType.Ship,
  name: "Destroyer",
  combat: true,
  metal: 60000,
  crystal: 50000,
  deuterium: 15000,
  shieldBase: 500,
  weaponBase: 2000,
  hyperspaceDrive: { speed: 5000, fuel: 1000 },
  cargoBase: 2000
};
const DEATHSTAR: Readonly<Ship> = {
  id: 214,
  type: AssetType.Ship,
  name: "Deathstar",
  combat: true,
  metal: 5000000,
  crystal: 4000000,
  deuterium: 1000000,
  shieldBase: 50000,
  weaponBase: 200000,
  hyperspaceDrive: { speed: 100, fuel: 1 },
  cargoBase: 1000000
};
const REAPER: Readonly<Ship> = {
  id: 218,
  type: AssetType.Ship,
  name: "Reaper",
  combat: true,
  metal: 85000,
  crystal: 55000,
  deuterium: 20000,
  shieldBase: 700,
  weaponBase: 2800,
  hyperspaceDrive: { speed: 10000, fuel: 900 },
  cargoBase: 7000
};
const PATHFINDER: Readonly<Ship> = {
  id: 219,
  type: AssetType.Ship,
  name: "Pathfinder",
  combat: true,
  metal: 8000,
  crystal: 15000,
  deuterium: 8000,
  shieldBase: 100,
  weaponBase: 200,
  hyperspaceDrive: { speed: 10000, fuel: 300 },
  cargoBase: 12000,
};
const SMALL_CARGO: Readonly<Ship> = {
  id: 202,
  type: AssetType.Ship,
  name: "Small Cargo",
  transport: true,
  metal: 2000,
  crystal: 2000,
  deuterium: 0,
  shieldBase: 10,
  weaponBase: 5,
  combustionDrive: { speed: 5000, fuel: 10 },
  impulseDrive: { minLevel: 5, speed: 10000, fuel: 20 },
  cargoBase: 5000,
};
const LARGE_CARGO: Readonly<Ship> = {
  id: 203,
  type: AssetType.Ship,
  name: "Large Cargo",
  transport: true,
  metal: 6000,
  crystal: 6000,
  deuterium: 0,
  shieldBase: 25,
  weaponBase: 5,
  combustionDrive: { speed: 7500, fuel: 50 },
  cargoBase: 25000,
};
const COLONY_SHIP: Readonly<Ship> = {
  id: 208,
  type: AssetType.Ship,
  name: "Colony Ship",
  metal: 10000,
  crystal: 20000,
  deuterium: 10000,
  shieldBase: 100,
  weaponBase: 50,
  impulseDrive: { speed: 2500, fuel: 1000 },
  cargoBase: 7500,
};
const RECYCLER: Readonly<Ship> = {
  id: 209,
  type: AssetType.Ship,
  name: "Recycler",
  recycler: true,
  metal: 10000,
  crystal: 6000,
  deuterium: 2000,
  shieldBase: 10,
  weaponBase: 1,
  combustionDrive: { speed: 2000, fuel: 300 },
  impulseDrive: { speed: 4000, fuel: 600 },
  hyperspaceDrive: { speed: 6000, fuel: 900 },
  cargoBase: 20000,
};
const ESPIONAGE_PROBE: Readonly<Ship> = {
  id: 210,
  type: AssetType.Ship,
  name: "Espionage Probe",
  espionageProbe: true,
  metal: 0,
  crystal: 1000,
  deuterium: 0,
  shieldBase: 0.01,
  weaponBase: 0.01,
  combustionDrive: { speed: 100000000, fuel: 1 },
  cargoBase: 5,
};
const SOLAR_SATELLITE: Readonly<Ship> = {
  id: 212,
  type: AssetType.Ship,
  name: "Solar Satellite",
  immobile: true,
  metal: 0,
  crystal: 2000,
  deuterium: 500,
  shieldBase: 1,
  weaponBase: 1,
  cargoBase: 0,
};
const CRAWLER: Readonly<Ship> = {
  id: 217,
  type: AssetType.Ship,
  name: "Crawler",
  immobile: true,
  metal: 2000,
  crystal: 2000,
  deuterium: 1000,
  shieldBase: 1,
  weaponBase: 1,
  cargoBase: 0,
};

/**
 * Calculate the speed of a ship, given its base speed, the type of drive used,
 * drive techs, and player class.
 * 
 * The formula used is as follows:
 * 
 * ```
 * DriveTechMult = {
 *   Combustion: 1,
 *   Impulse: 2,
 *   Hyperspace: 3,
 * }
 *
 * ClassBonus = {
 *   General: {
 *     Combat Ship: 10,
 *     Recycler: 10,
 *     Other: 0,
 *   },
 *   Collector: {
 *     Transport Ship: 10,
 *     Other: 0,
 *   },
 *   Discoverer: 0,
 * }
 *
 * Speed = BaseSpeed * (10 + DriveTechLevel * DriveTechMult + ClassBonus) / 10
 * ```
 */
export function getShipSpeed(
  shipInfo: Readonly<ShipDrive & ShipCategory>,
  techs: Readonly<DriveTechs>,
  playerClass?: PlayerClass
): number {
  if (shipInfo.immobile) {
    return 0;
  }
  let [base, bonus] = _getBaseDriveAndBonus(shipInfo, techs);

  if (playerClass) {
    switch (playerClass) {
      case PlayerClass.General:
        if (shipInfo.combat) {
          bonus += 10;
        } else if (shipInfo.recycler) {
          bonus += 10;
        }
        break;
      case PlayerClass.Collector:
        if (shipInfo.transport) {
          bonus += 10;
        }
        break;
      case PlayerClass.Discoverer:
        break;
    }
  }

  return (base.speed * (bonus + 10)) / 10;
}

/**
 * Calculate the storage capacity of a ship, given its base storage, the
 * player's hyperspace tech, the server settings, and player class.
 * 
 * The formula used is as follows:
 * 
 * ```
 * ClassBonus = {
 *   Collector: {
 *     Transport Ship: 25,
 *     Other: 0,
 *   },
 *   General: 0,
 *   Discoverer: 0,
 * }
 *
 * Storage = FLOOR(BaseStorage * (100 + HyperspaceTechLevel * 5 + ClassBonus) / 100);
 * ```
 */
export function getShipStorage(
  shipInfo: Readonly<ShipCargo & ShipCategory>,
  techs: Readonly<HyperspaceTech>,
  server: Readonly<ServerProbeStorage>,
  playerClass?: PlayerClass,
): number {
  if (shipInfo.espionageProbe && !server.probeStorage) {
    return 0;
  }
  const { cargoBase } = shipInfo;
  const { hyperspaceTech } = techs;
  let bonus = hyperspaceTech * 5;
  if (playerClass) {
    switch (playerClass) {
      case PlayerClass.Collector:
        if (shipInfo.transport) {
          bonus += 25;
        }
        break;
      case PlayerClass.General:
      case PlayerClass.General:
        break;
    }
  }

  return Math.floor(cargoBase * (bonus + 100) / 100);
}

/**
 * @ignore
 */
function _getBaseDriveAndBonus(
  drive: Readonly<ShipDrive>,
  techs: Readonly<DriveTechs>
): [ShipDriveBase, number] {
  const { combustionDrive, impulseDrive, hyperspaceDrive } = drive;
  let base = combustionDrive;
  let bonus = techs.combustionDrive;
  if (
    impulseDrive &&
    (!impulseDrive.minLevel || techs.impulseDrive > impulseDrive.minLevel)
  ) {
    base = impulseDrive;
    bonus = techs.impulseDrive * 2;
  }
  if (
    hyperspaceDrive &&
    (!hyperspaceDrive.minLevel ||
      techs.hyperspaceDrive > hyperspaceDrive.minLevel)
  ) {
    base = hyperspaceDrive;
    bonus = techs.hyperspaceDrive * 3;
  }

  if (!base) {
    throw new Error("Unable to determine drive");
  }

  return [base, bonus];
}

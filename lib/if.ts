interface ShipBase {
  id: number;
  type: 'SHIP';
  name: string;
  metal: number;
  crystal: number;
  deuterium: number;
  energy?: number;
  shieldBase: number;
  weaponBase: number;
  rapidfire?: Map<number, number>;
}

export interface ShipCategory {
  combat?: boolean,
  transport?: boolean,
  recycler?: boolean,
  espionageProbe?: boolean,
  immobile?: boolean,
}

export interface ShipDriveBase {
  minLevel?: number;
  speed: number;
  fuel: number
}

export interface ShipDrive {
  combustionDrive?: ShipDriveBase;
  impulseDrive?: ShipDriveBase;
  hyperspaceDrive?: ShipDriveBase;
}

export interface ShipCargo {
  cargoBase: number;
}

export type Ship = ShipBase & ShipCategory & ShipDrive & ShipCargo;

interface Defense {
  type: 'DEFENSE';
}

export interface DriveTechs {
  combustionDrive: number;
  impulseDrive: number;
  hyperspaceDrive: number;
}

export interface HyperspaceTech {
  hyperspaceTech: number,
}

type Techs = DriveTechs & HyperspaceTech;

interface Building {
  type: 'BUILDING';
}

export enum PlayerClass {
  Collector = 'Collector',
  General = 'General',
  Discoverer = 'Discoverer',
}

export interface ServerProbeStorage {
  probeStorage?: boolean
}

type Server = ServerProbeStorage;

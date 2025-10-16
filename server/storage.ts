export interface IStorage {
  // Storage interface methods will be added as needed
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize storage
  }
}

export const storage = new MemStorage();

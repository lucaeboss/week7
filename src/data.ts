import { Identity } from "./Identity";
export class Data<R extends Identity> {
    private rows: Map<number, R> = new Map();
  
    add(row: R): void {
      this.rows.set(row.id, row); // Assuming R has an "id" property
    }
  
    update(id: number, updates: Partial<R>): void {
      const row = this.rows.get(id);
      if (row) {
        // Apply updates to row properties
        Object.assign(row, updates);
      } else {
        throw new Error(`Row with ID ${id} not found`);
      }
    }
  
    delete(row: R): void {
      this.rows.delete(row.id); // Assuming R has an "id" property
    }
  
    get(id: number): R | undefined{
      return this.rows.get(id);
    }
  }
  
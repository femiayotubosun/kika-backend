import { AfterUpdate, Column } from 'typeorm';

export abstract class TimeStampped {
  @Column({ default: Date.now().toString() })
  created_at: string;

  @Column({ nullable: true })
  updated_at: string;

  @AfterUpdate()
  updateTime(): void {
    this.updated_at = Date.now().toString();
  }
}

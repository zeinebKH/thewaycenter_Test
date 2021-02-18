export class Todos {
    id: number;
    title: string;
    description: string;
    StartDate: Date;
    DueDate: Date;
    Status: string;
  
  
    constructor(
                id: number,
                title: string = '',
                description: string = '',
                StartDate: Date ,
                DueDate: Date ,
                Status: string = '') {
      this.id = id;              
      this.title = title;
      this.description = description;
      this.StartDate = StartDate;
      this.DueDate = DueDate;
      this.Status = status;
    }
  }
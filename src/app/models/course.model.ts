export interface ICourse {
  id?: number;
  name?: string;
  description?: string;
  passcode?: string;
  activated?: boolean;
  slug?: string;
}

export class Course implements ICourse {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public passcode?: string,
    public activated?: boolean
  ) {
    this.activated = this.activated || false;
  }
}

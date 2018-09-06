
export class RI {
    user_id = 0;
    RIid = 0;
    amount = 0;
    type = '';
    status = '';
    submitted = '';
    resolved = '';
    resolver = '';

  constructor(user_id?: number, RIid?: number, amount?: number , type?: string, status? : string,
     submitted?: string,  resolved? : string, resolver?: string) {

    user_id && (this.user_id = user_id);
    RIid && (this.RIid = RIid);
    amount && (this.amount = amount);
    type && (this.type = type);
    status && (this.status = status);
    submitted && (this.submitted = submitted);
    resolved && (this.resolved = resolved);
    resolver && (this.resolver = resolver);

  }
}
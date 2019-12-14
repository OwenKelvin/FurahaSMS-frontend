import { UrlSegment, UrlMatchResult } from '@angular/router';

export const digitsMatcher = (url: UrlSegment[]): UrlMatchResult => {

  if (url.length === 0) {
    return null;
  }

  const reg = /^\d$/;
  const param = url[0].toString();

  if (param.match(reg)) {
    return ({ consumed: url, posParams: { id: url[0] } });
  }
  return null;
};

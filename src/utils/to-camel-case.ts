import { IDataImage, IImage } from '../interfaces/image';
const _ = require('lodash');
// import { mapKeys, camelCase } from 'lodash';
// import _ from 'lodash';

function toCamelCase(array: IDataImage[]): IImage[]  {
  return array.map((obj: IDataImage) => {
    return _.mapKeys(obj, function(value: any, key: string) {
      return _.camelCase(key);
    })
  })
};

export default toCamelCase;

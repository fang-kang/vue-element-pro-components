/**
 * 过滤对象的方法
 * @param obj
 * @param filterFunc 判断key是否被过滤掉的方法 接受 value,key俩参数
 * @returns {{[p: string]: *}}
 */
export function filterObject(obj, filterFunc) {
  const result = Object.keys(obj)
    .filter((key) => {
      if (filterFunc) {
        return filterFunc(obj[key], key);
      }
      return true;
    })
    .reduce((before, key) => {
      return {
        ...before,
        [key]: obj[key],
      };
    }, {});
  return result;
}

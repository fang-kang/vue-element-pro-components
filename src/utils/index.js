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

/**
 * 根据数组获取数组中的值
 * @param {*} array
 * @param {*} value
 * @param {*} valueKey
 * @param {*} labelKey
 * @returns
 */
export function getArrayValue(
  array,
  value,
  valueKey = "value",
  labelKey = "name",
  defaultValue = ""
) {
  if (!Array.isArray(array)) {
    throw new Error("Type requires an array");
  }
  const obj = array.find((item) => String(item[valueKey]) === String(value));
  return obj ? obj[labelKey] : defaultValue;
}

/**
 * Remove an item from an array.
 * @param {*} arr
 * @param {*} item
 * @returns
 */
export function removeArray(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Remove array by index
 * @param {*} arr
 * @param {*} index
 * @returns
 */
export function removeArrayByIndex(arr, index) {
  if (index > -1) {
    return arr.splice(index, 1);
  } else {
    return arr;
  }
}

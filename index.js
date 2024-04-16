
// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const mappedArr = [];
    myEach(collection, function(item) {
      mappedArr.push(callback(item));
    });
    return mappedArr;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
    myEach(collection, function(item) {
      if (acc === undefined) {
        acc = item;
      } else {
        acc = callback(acc, item);
      }
    });
    return acc;
  }
  
  // myFind
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const filteredArr = [];
    myEach(collection, function(item) {
      if (predicate(item)) {
        filteredArr.push(item);
      }
    });
    return filteredArr;
  }
  
  // mySize
  function mySize(collection) {
    let count = 0;
    myEach(collection, function() {
      count++;
    });
    return count;
  }
  
  // myFirst
  function myFirst(array, n) {
    if (n) {
      return array.slice(0, n);
    }
    return array[0];
  }
  
  // myLast
  function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    }
    return array[array.length - 1];
  }
  
  // Object Functions
  
  // myKeys
  function myKeys(object) {
    const keysArr = [];
    for (let key in object) {
      keysArr.push(key);
    }
    return keysArr;
  }
  
  // myValues
  function myValues(object) {
    const valuesArr = [];
    for (let key in object) {
      valuesArr.push(object[key]);
    }
    return valuesArr;
  }
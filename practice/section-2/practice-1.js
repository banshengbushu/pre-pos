function count_same_elements(collection) {
  var result = [];
  var count = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] == collection[i+1]) {
      count++;
      var element = collection[i];
    }else {
      result.push({key:element, count:count+1});
      count = 0;
    }
  }
  return result;
}

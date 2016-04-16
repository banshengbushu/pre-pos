function count_same_elements(collection) {
  var result = [];
  var count = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] == collection[i+1]) {
      count++;
    }else {
            var element = collection[i].split("-");
            if (element[1] == null) {
                      result.push({key:element[0],count:count+1});
                      count = 0;
            }else {
                var element = collection[i].split("-");
                result.push({key:element[0],count:parseInt(element[1])});
              }
          }
}
  return result;
}

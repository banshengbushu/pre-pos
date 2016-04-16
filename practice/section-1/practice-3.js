function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection_b.value.length; j++) {
      if (collection_a[i] == collection_b.value[j]) {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}

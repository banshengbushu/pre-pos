function create_updated_collection(collection_a, object_b) {
   var collection_c = creatCollection_c(collection_a, object_b);
  return equalElement(collection_c,object_b);
}

function creatCollection_c(collection_a, object_b) {
    var collection_c = [];
    var count = 0;
    for (var i = 0; i < collection_a.length; i++) {
        if (collection_a[i] == collection_a[i+1]) {
            count++;
            var element = collection_a[i];
        }else {
            collection_c.push({key:element, count:count+1});
            count = 0;
        }
    }
    return collection_c;
}


function equalElement(collection_c,object_b) {
    for(var i = 0; i < object_b.value.length; i++) {
        for(var j = 0; j < collection_c.length; j++) {
            if(object_b.value[i] == collection_c[j].key && collection_c[j].count >= 3) {
                collection_c[j].count -= Math.floor(collection_c[j].count/3);
            }
        }
    }
    return collection_c;
}

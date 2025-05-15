const searchControl = new L.Control.Search({
  layer: L.layerGroup([marker1, marker2, /* outros markers */]),
  initial: false,
  zoom: 16,
  marker: false
});

map.addControl(searchControl);

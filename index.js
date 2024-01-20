import {Feature, Map, Overlay, View} from 'ol/index.js';
import {Draw, Modify, Snap} from 'ol/interaction.js';
import {OSM, Vector as VectorSource, TileWMS} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {GeoJSON} from 'ol/format.js';
import WKT from 'ol/format/WKT.js';
import {useGeographic} from 'ol/proj.js';

globalThis.ol = {
  Feature, Map, Overlay, View,
  Draw, Modify, Snap,
  OSM, VectorSource, TileWMS,
  TileLayer, VectorLayer,
  GeoJSON,
  WKT,
  useGeographic,

}

import {v4} from 'uuid';

globalThis.uuid = {v4}

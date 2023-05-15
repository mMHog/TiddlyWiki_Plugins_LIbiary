"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js"(exports2, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"(exports2, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"(exports2, module2) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js"(exports2, module2) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js"(exports2, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"(exports2, module2) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"(exports2, module2) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js"(exports2, module2) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js"(exports2, module2) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js"(exports2, module2) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js"(exports2, module2) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js"(exports2, module2) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"(exports2, module2) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js"(exports2, module2) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js"(exports2, module2) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js"(exports2, module2) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = hashDelete;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js"(exports2, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js"(exports2, module2) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js"(exports2, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module2.exports = hashSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js"(exports2, module2) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js"(exports2, module2) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"(exports2, module2) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js"(exports2, module2) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js"(exports2, module2) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module2.exports = listCacheDelete;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js"(exports2, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js"(exports2, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js"(exports2, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module2.exports = listCacheSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js"(exports2, module2) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js"(exports2, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module2.exports = Map;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js"(exports2, module2) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js"(exports2, module2) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js"(exports2, module2) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js"(exports2, module2) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = mapCacheDelete;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js"(exports2, module2) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js"(exports2, module2) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js"(exports2, module2) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module2.exports = mapCacheSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js"(exports2, module2) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheAdd.js"(exports2, module2) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module2.exports = setCacheAdd;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheHas.js"(exports2, module2) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module2.exports = setCacheHas;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_SetCache.js"(exports2, module2) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module2.exports = SetCache;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFindIndex.js"(exports2, module2) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module2.exports = baseFindIndex;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNaN.js"(exports2, module2) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module2.exports = baseIsNaN;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_strictIndexOf.js"(exports2, module2) {
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module2.exports = strictIndexOf;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOf.js"(exports2, module2) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module2.exports = baseIndexOf;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludes.js"(exports2, module2) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module2.exports = arrayIncludes;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludesWith.js"(exports2, module2) {
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    module2.exports = arrayIncludesWith;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cacheHas.js"(exports2, module2) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module2.exports = cacheHas;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js"(exports2, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module2.exports = Set2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js"(exports2, module2) {
    function noop() {
    }
    module2.exports = noop;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToArray.js"(exports2, module2) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module2.exports = setToArray;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createSet.js"(exports2, module2) {
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module2.exports = createSet;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUniq.js"(exports2, module2) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module2.exports = baseUniq;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniq.js"(exports2, module2) {
    var baseUniq = require_baseUniq();
    function uniq2(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    module2.exports = uniq2;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js"(exports2, module2) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module2.exports = now;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js"(exports2, module2) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module2.exports = trimmedEndIndex;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js"(exports2, module2) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module2.exports = baseTrim;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js"(exports2, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module2.exports = isSymbol;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js"(exports2, module2) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = toNumber;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js"(exports2, module2) {
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module2.exports = debounce2;
  }
});

// src/CommandPaletteWidget.ts
var CommandPaletteWidget_exports = {};
__toCommonJS(CommandPaletteWidget_exports);
var import_uniq = __toESM(require_uniq());
var import_debounce = __toESM(require_debounce());
var Widget = require("$:/core/modules/widgets/widget.js").widget;
var CommandPaletteWidget = class extends Widget {
  actions = [];
  triggers = [];
  currentResults = [];
  typeField = "command-palette-type";
  nameField = "command-palette-name";
  captionField = "command-palette-caption";
  hintField = "command-palette-hint";
  modeField = "command-palette-mode";
  userInputField = "command-palette-user-input";
  caretField = "command-palette-caret";
  immediateField = "command-palette-immediate";
  triggerField = "command-palette-trigger";
  currentSelection = 0;
  symbolProviders = {};
  blockProviderChange = false;
  defaultSettings = {
    maxResults: 15,
    maxResultHintSize: 45,
    neverBasic: false,
    showHistoryOnOpen: true,
    escapeGoesBack: true,
    alwaysPassSelection: false,
    theme: "$:/plugins/linonetwo/commandpalette/Compact.css"
  };
  settings = {};
  commandHistoryPath = "$:/plugins/linonetwo/commandpalette/CommandPaletteHistory";
  settingsPath = "$:/plugins/linonetwo/commandpalette/CommandPaletteSettings";
  searchStepsPath = "$:/plugins/linonetwo/commandpalette/CommandPaletteSearchSteps";
  customCommandsTag = "$:/tags/CommandPaletteCommand";
  themesTag = "$:/tags/CommandPaletteTheme";
  currentResolver = () => {
  };
  currentProvider = () => {
  };
  searchSteps = [];
  isIMEOpen = false;
  constructor(parseTreeNode, options) {
    super(parseTreeNode, options);
    this.initialise(parseTreeNode, options);
    this.onInput = (0, import_debounce.default)(this.onInput, 300);
  }
  actionStringBuilder(text) {
    return (e) => this.invokeActionString(text, this, e);
  }
  actionStringInput(action, hint, _e) {
    this.blockProviderChange = true;
    this.allowInputFieldSelection = true;
    this.hint.innerText = hint;
    this.input.value = "";
    this.currentProvider = () => {
    };
    this.currentResolver = (e) => {
      this.invokeActionString(action, this, e, { commandpaletteinput: this.input.value });
      this.closePalette();
    };
    this.showResults([]);
    this.onInput(this.input.value);
  }
  invokeFieldMangler(tiddler, message, parameter, e) {
    const action = `<$fieldmangler tiddler="${tiddler}">
			<$action-sendmessage $message="${message}" $param="${parameter}"/>
			</$fieldmangler>`;
    this.invokeActionString(action, this, e);
  }
  tagOperation(_event, hintTiddler, hintTag, filter, allowNoSelection, message) {
    this.blockProviderChange = true;
    if (allowNoSelection)
      this.allowInputFieldSelection = true;
    this.currentProvider = this.historyProviderBuilder(hintTiddler);
    this.currentResolver = (_e) => {
      if (this.currentSelection === 0)
        return;
      const tiddler = this.getDataFromResultDiv(this.currentResults[this.currentSelection - 1], "name");
      this.currentProvider = (terms) => {
        this.currentSelection = 0;
        this.hint.innerText = hintTag;
        if (tiddler) {
          const searches = filter(tiddler, terms);
          this.showResults(
            searches.map((s) => {
              return { name: s };
            })
          );
        }
      };
      this.input.value = "";
      this.onInput(this.input.value);
      this.currentResolver = (e) => {
        if (!allowNoSelection && this.currentSelection === 0)
          return;
        let tag = this.input.value;
        if (this.currentSelection !== 0) {
          tag = this.getDataFromResultDiv(this.currentResults[this.currentSelection - 1], "name");
        }
        this.invokeFieldMangler(tiddler, message, tag, e);
        if (e.getModifierState("Shift")) {
          this.onInput(this.input.value);
        } else {
          this.closePalette();
        }
      };
    };
    this.input.value = "";
    this.onInput(this.input.value);
  }
  refreshThemes(e) {
    this.themes = this.getTiddlersWithTag(this.themesTag);
    let found = false;
    for (const theme of this.themes) {
      const themeName = theme.fields.title;
      if (themeName === this.settings.theme) {
        found = true;
        this.addTagIfNecessary(themeName, "$:/tags/Stylesheet", e);
      } else {
        this.invokeFieldMangler(themeName, "tm-remove-tag", "$:/tags/Stylesheet", e);
      }
    }
    if (found)
      return;
    this.addTagIfNecessary(this.defaultSettings.theme, "$:/tags/Stylesheet", e);
  }
  addTagIfNecessary(tiddler, tag, e) {
    if (this.hasTag(tiddler, tag))
      return;
    this.invokeFieldMangler(tiddler, "tm-add-tag", tag, e);
  }
  hasTag(tiddler, tag) {
    return !!$tw.wiki.getTiddler(tiddler)?.fields?.tags?.includes(tag);
  }
  refreshCommands() {
    this.actions = [];
    this.actions.push(
      {
        name: "Refresh Command Palette",
        action: (_e) => {
          this.refreshCommandPalette();
          this.promptCommand("");
        },
        keepPalette: true
      },
      { name: "Explorer", action: (e) => this.explorer(e), keepPalette: true },
      { name: "History", caption: "\u67E5\u770B\u5386\u53F2\u8BB0\u5F55", action: (_e) => this.showHistory(), keepPalette: true },
      { name: "New Command Wizard", caption: "\u4EA4\u4E92\u5F0F\u521B\u5EFA\u65B0\u547D\u4EE4", action: (_e) => this.newCommandWizard(), keepPalette: true },
      {
        name: "Add tag to tiddler",
        caption: "\u5411\u6761\u76EE\u6DFB\u52A0\u6807\u7B7E",
        action: (e) => this.tagOperation(
          e,
          "\u9009\u62E9\u4E00\u4E2A\u6761\u76EE\u6765\u6DFB\u52A0\u6807\u7B7E",
          "\u9009\u62E9\u4E00\u4E2A\u6807\u7B7E\u6765\u6DFB\u52A0 (\u21E7\u23CE \u53EF\u4EE5\u591A\u6B21\u6DFB\u52A0)",
          (tiddler, terms) => $tw.wiki.filterTiddlers(
            `[!is[system]tags[]] [is[system]tags[]] -[[${tiddler}]tags[]] +[${$tw.utils.pinyinfuse ? "pinyinfuse" : "search"}[${terms}]]`
          ),
          true,
          "tm-add-tag"
        ),
        keepPalette: true
      },
      {
        name: "Remove tag",
        caption: "\u53BB\u9664\u6807\u7B7E",
        action: (e) => this.tagOperation(
          e,
          "\u9009\u62E9\u4E00\u4E2A\u6761\u76EE\u6765\u53BB\u9664\u6807\u7B7E",
          "\u9009\u62E9\u4E00\u4E2A\u6807\u7B7E\u6765\u53BB\u9664 (\u21E7\u23CE \u53EF\u4EE5\u53BB\u9664\u591A\u6B21)",
          (tiddler, terms) => $tw.wiki.filterTiddlers(`[[${tiddler}]tags[]] +[${$tw.utils.pinyinfuse ? "pinyinfuse" : "search"}[${terms}]]`),
          false,
          "tm-remove-tag"
        ),
        keepPalette: true
      }
    );
    const commandTiddlers = this.getTiddlersWithTag(this.customCommandsTag);
    for (const tiddler of commandTiddlers) {
      if (!tiddler.fields[this.typeField] === void 0)
        continue;
      const name = tiddler.fields[this.nameField];
      if (typeof name !== "string")
        throw new Error(`\u547D\u4EE4\u83DC\u5355\u6761\u76EE ${tiddler.fields.title} \u7F3A\u5931 ${this.nameField} \u5B57\u6BB5`);
      const caption = this.translateCaption(tiddler.fields[this.captionField]);
      const type = tiddler.fields[this.typeField];
      let text = this.translateCaption(tiddler.fields.text);
      if (text === void 0)
        text = "";
      const textFirstLine = (text.match(/^.*/) ?? [""])[0];
      const hint = this.translateCaption(tiddler.fields[this.hintField] ?? tiddler.fields[this.nameField] ?? "");
      if (type === "shortcut") {
        ``;
        const trigger = tiddler.fields[this.triggerField];
        if (trigger === void 0)
          continue;
        this.triggers.push({ name, caption, trigger, text, hint });
        continue;
      }
      if (!tiddler.fields[this.nameField] === void 0)
        continue;
      if (type === "prompt") {
        const immediate = !!tiddler.fields[this.immediateField];
        const caret = Number(tiddler.fields[this.caretField]) ?? 0;
        const action = { name, caption, hint, action: () => this.promptCommand(textFirstLine, caret), keepPalette: !immediate, immediate };
        this.actions.push(action);
        continue;
      }
      if (type === "prompt-basic") {
        const caret = Number(tiddler.fields[this.caretField]) ?? 0;
        const action = { name, caption, hint, action: () => this.promptCommandBasic(textFirstLine, caret, hint), keepPalette: true };
        this.actions.push(action);
        continue;
      }
      if (type === "message") {
        this.actions.push({ name, caption, hint, action: (e) => this.tmMessageBuilder(textFirstLine)(e), keepPalette: false });
        continue;
      }
      if (type === "actionString") {
        const userInput = tiddler.fields[this.userInputField] !== void 0 && tiddler.fields[this.userInputField] === "true";
        if (userInput) {
          this.actions.push({ name, caption, hint, action: (e) => this.actionStringInput(text, hint, e), keepPalette: true });
        } else {
          this.actions.push({ name, caption, hint, action: (e) => this.actionStringBuilder(text)(e), keepPalette: false });
        }
        continue;
      }
      if (type === "history") {
        const mode = tiddler.fields[this.modeField];
        this.actions.push({
          name,
          caption,
          hint,
          action: (e) => this.commandWithHistoryPicker(textFirstLine, hint, mode).handler(e),
          keepPalette: true
        });
        continue;
      }
    }
  }
  translateCaption(caption) {
    return $tw.wiki.renderText("text/plain", "text/vnd.tiddlywiki", caption);
  }
  newCommandWizard() {
    this.blockProviderChange = true;
    this.input.value = "";
    this.hint.innerText = "\u547D\u4EE4\u540D";
    let name = "";
    let type = "";
    let hint = "";
    const messageStep = () => {
      this.input.value = "";
      this.hint.innerText = "\u8F93\u5165\u4FE1\u606F";
      this.currentResolver = (e) => {
        this.tmMessageBuilder("tm-new-tiddler", {
          title: "$:/" + name,
          tags: this.customCommandsTag,
          [this.typeField]: type,
          [this.nameField]: name,
          [this.hintField]: hint,
          text: this.input.value
        })(e);
        this.closePalette();
      };
    };
    const hintStep = () => {
      this.input.value = "";
      this.hint.innerText = "\u8F93\u5165\u63D0\u793A\u6587\u672C";
      this.currentResolver = (_e) => {
        hint = this.input.value;
        messageStep();
      };
    };
    const typeStep = () => {
      this.input.value = "";
      this.hint.innerText = "Enter type (prompt, prompt-basic, message, actionString, history)";
      this.currentResolver = (e) => {
        type = this.input.value;
        if (type === "history") {
          hintStep();
        } else {
          this.tmMessageBuilder("tm-new-tiddler", {
            title: "$:/" + name,
            tags: this.customCommandsTag,
            [this.typeField]: type,
            [this.nameField]: name
          })(e);
          this.closePalette();
        }
      };
    };
    this.currentProvider = (_terms) => {
    };
    this.currentResolver = (_e) => {
      if (this.input.value.length === 0)
        return;
      name = this.input.value;
      typeStep();
    };
    this.showResults([]);
  }
  explorer(_e) {
    this.blockProviderChange = true;
    this.input.value = "$:/";
    this.lastExplorerInput = "$:/";
    this.hint.innerText = "Explorer (\u21E7\u23CE to add multiple)";
    this.currentProvider = (terms) => this.explorerProvider("$:/", terms);
    this.currentResolver = (e) => {
      if (this.currentSelection === 0)
        return;
      this.getActionFromResultDiv(this.currentResults[this.currentSelection - 1])?.(e);
    };
    this.onInput();
  }
  explorerProvider(url, _terms) {
    const switchFolder = (url2) => {
      this.input.value = url2;
      this.lastExplorerInput = this.input.value;
      this.currentProvider = (terms) => this.explorerProvider(url2, terms);
      this.onInput();
    };
    if (!this.input.value.startsWith(url)) {
      this.input.value = this.lastExplorerInput;
    }
    this.lastExplorerInput = this.input.value;
    this.currentSelection = 0;
    const search = this.input.value.substr(url.length);
    const tiddlers = $tw.wiki.filterTiddlers(`[removeprefix[${url}]splitbefore[/]sort[]${$tw.utils.pinyinfuse ? "pinyinfuse" : "search"}[${search}]]`);
    const folders = [];
    const files = [];
    for (const tiddler of tiddlers) {
      if (tiddler.endsWith("/")) {
        folders.push({ name: tiddler, action: (_e) => switchFolder(`${url}${tiddler}`) });
      } else {
        files.push({
          name: tiddler,
          action: (e) => {
            this.navigateTo(`${url}${tiddler}`);
            if (!e.getModifierState("Shift")) {
              this.closePalette();
            }
          }
        });
      }
    }
    let topResult;
    if (url !== "$:/") {
      const splits = url.split("/");
      splits.splice(-2);
      const parent = splits.join("/") + "/";
      topResult = { name: "..", action: (_e) => switchFolder(parent) };
      this.showResults([topResult, ...folders, ...files]);
      return;
    }
    this.showResults([...folders, ...files]);
  }
  setSetting(name, value) {
    if (typeof value === "string") {
      if (value === "true")
        value = true;
      if (value === "false")
        value = false;
    }
    this.settings[name] = value;
    $tw.wiki.setTiddlerData(this.settingsPath, this.settings);
  }
  refreshSettings() {
    this.settings = $tw.wiki.getTiddlerData(this.settingsPath, { ...this.defaultSettings });
    for (const property in this.defaultSettings) {
      if (!this.defaultSettings.hasOwnProperty(property))
        continue;
      const ownProperty = property;
      if (this.settings[ownProperty] === void 0) {
        this.settings[ownProperty] = this.defaultSettings[ownProperty];
      }
    }
    for (const property in this.settings) {
      if (!this.settings.hasOwnProperty(property))
        continue;
      const ownProperty = property;
      if (typeof this.settings[ownProperty] !== "string")
        continue;
      if (this.settings[ownProperty].toLowerCase() === "true")
        this.settings[ownProperty] = true;
      if (this.settings[ownProperty].toLowerCase() === "false")
        this.settings[ownProperty] = false;
    }
  }
  getTiddlersWithTag(tag) {
    const tiddlers = $tw.wiki.getTiddlersWithTag(tag);
    return tiddlers.map((t) => $tw.wiki.getTiddler(t));
  }
  render(parent, nextSibling) {
    this.parentDomNode = parent;
    this.execute();
    if ($tw.utils.pinyinfuse === void 0) {
      console.warn("\u9700\u8981\u5B89\u88C5 linonetwo/pinyin-fuzzy-search \u63D2\u4EF6\u4EE5\u83B7\u5F97\u6A21\u7CCA\u641C\u7D22\u548C\u62FC\u97F3\u641C\u7D22\u7684\u80FD\u529B");
    }
    this.history = $tw.wiki.getTiddlerData(this.commandHistoryPath, { history: [] }).history;
    $tw.rootWidget.addEventListener("open-command-palette", (e) => {
      $tw.hooks.invokeHook("th-open-command-palette", e);
      this.openPalette(e, e.param);
    });
    $tw.rootWidget.addEventListener("open-command-palette-selection", (e) => this.openPaletteSelection(e));
    $tw.rootWidget.addEventListener("insert-command-palette-result", (e) => this.insertSelectedResult());
    $tw.rootWidget.addEventListener("command-palette-switch-history", (e) => this.handleSwitchHistory(e, true));
    $tw.rootWidget.addEventListener("command-palette-switch-history-back", (e) => this.handleSwitchHistory(e, false));
    const inputAndMainHintWrapper = this.createElement("div", { className: "inputhintwrapper" });
    this.div = this.createElement("div", { className: "commandpalette" }, { display: "none" });
    this.mask = this.createElement("div", { className: "commandpalette-masklayer" }, { opacity: "0" });
    this.input = this.createElement("input", { type: "text" });
    this.hint = this.createElement("div", { className: "commandpalettehint commandpalettehintmain" });
    inputAndMainHintWrapper.append(this.input, this.hint);
    this.scrollDiv = this.createElement("div", { className: "cp-scroll" });
    this.div.append(inputAndMainHintWrapper, this.scrollDiv);
    this.input.addEventListener("keydown", (e) => this.onKeyDown(e));
    this.input.addEventListener("input", () => this.onInput(this.input.value));
    this.input.addEventListener(
      "compositionstart",
      () => {
        this.isIMEOpen = true;
      },
      false
    );
    this.input.addEventListener(
      "compositionend",
      () => {
        this.isIMEOpen = false;
      },
      false
    );
    document.addEventListener("click", (e) => this.onClick(e));
    parent.insertBefore(this.mask, nextSibling);
    parent.insertBefore(this.div, nextSibling);
    this.refreshCommandPalette();
    this.symbolProviders[">"] = { searcher: (terms) => this.actionProvider(terms), resolver: (e) => this.actionResolver(e) };
    this.symbolProviders["\u300B"] = this.symbolProviders[">"];
    this.symbolProviders["##"] = { searcher: (terms) => this.tagListProvider(terms), resolver: (e) => this.tagListResolver(e) };
    this.symbolProviders["#"] = { searcher: (terms) => this.tagProvider(terms), resolver: (e) => this.defaultResolver(e) };
    this.symbolProviders["?"] = { searcher: (terms) => this.helpProvider(terms), resolver: (e) => this.helpResolver(e) };
    this.symbolProviders["\uFF1F"] = this.symbolProviders["?"];
    this.symbolProviders["["] = { searcher: (terms, hint) => this.filterProvider(terms, hint), resolver: (e) => this.filterResolver(e) };
    this.symbolProviders["+"] = { searcher: (terms) => this.createTiddlerProvider(terms), resolver: (e) => this.createTiddlerResolver(e) };
    this.symbolProviders["|"] = { searcher: (terms) => this.settingsProvider(terms), resolver: (e) => this.settingsResolver(e) };
    this.currentResults = [];
    this.currentProvider = () => {
    };
  }
  helpProvider(_terms) {
    this.currentSelection = 0;
    this.hint.innerText = "Help";
    const searches = [
      { name: "\u76F4\u63A5\u6253\u5B57\u662F\u641C\u7D22\u6761\u76EE\u6807\u9898\u548C\u5185\u5BB9\uFF1B\u800C\u4EE5\u4E0B\u8FF0\u7279\u6B8A\u5B57\u7B26\u5F00\u5934\u53EF\u4EE5\u6267\u884C\u7279\u6B8A\u641C\u7D22", action: () => this.promptCommand("") },
      { name: "> \u67E5\u770B\u548C\u641C\u7D22\u547D\u4EE4\u5217\u8868", action: () => this.promptCommand(">") },
      { name: "+ \u521B\u5EFA\u6761\u76EE\uFF0C\u5148\u8F93\u5165\u6761\u76EE\u540D\uFF0C\u7136\u540E\u53EF\u4EE5\u5E26\u4E0A#\u6253\u6807\u7B7E", action: () => this.promptCommand("+") },
      { name: "# \u5217\u51FA\u5E26\u6807\u7B7E\u7684\u6761\u76EE\uFF08\u6807\u7B7E\u4E0D\u53EF\u5305\u542B\u7A7A\u683C\uFF0C\u7528\u7A7A\u683C\u9694\u5F00\u591A\u4E2A#\u5F00\u5934\u7684\u6807\u7B7E\uFF0C\u4E0D\u5E26#\u7684\u4F5C\u4E3A\u641C\u7D22\u8BCD\uFF09", action: () => this.promptCommand("#") },
      { name: "## \u641C\u7D22\u6807\u7B7E\u5217\u8868", action: () => this.promptCommand("##", 2) },
      { name: "[ \u7B5B\u9009\u5668\u8BED\u53E5", action: () => this.promptCommand("[") },
      { name: "| \u547D\u4EE4\u83DC\u5355\u8BBE\u7F6E", action: () => this.promptCommand("|") },
      { name: "\\ \u89C4\u907F\u7B2C\u4E00\u4E2A\u5B57\u7B26\u662F\u4E0A\u8FF0\u547D\u4EE4\u5B57\u7B26\u7684\u60C5\u51B5\uFF0C\u4F8B\u5982\u300C\\#\u300D\u53EF\u641C\u6807\u9898\u4EE5\u300C#\u300D\u8D77\u5934\u7684\u6761\u76EE", action: () => this.promptCommand("\\") },
      { name: "? \u6253\u5F00\u5E2E\u52A9", action: () => this.promptCommand("?") }
    ];
    this.showResults(searches);
  }
  parseCommand(text) {
    let terms = "";
    let resolver;
    let provider;
    const shortcut = this.triggers.find((t) => text.startsWith(t.trigger));
    if (shortcut === void 0) {
      const providerSymbol = Object.keys(this.symbolProviders).sort((a, b) => -a.length + b.length).find((symbol) => text.startsWith(symbol));
      if (providerSymbol === void 0) {
        resolver = this.defaultResolver;
        provider = this.defaultProvider;
        terms = text;
      } else {
        provider = this.symbolProviders[providerSymbol].searcher;
        resolver = this.symbolProviders[providerSymbol].resolver;
        terms = text.replace(providerSymbol, "");
      }
    } else {
      resolver = (e) => {
        const inputWithoutShortcut = this.input.value.substr(shortcut.trigger.length);
        this.invokeActionString(shortcut.text, this, e, { commandpaletteinput: inputWithoutShortcut });
        this.closePalette();
      };
      provider = (_terms) => {
        this.hint.innerText = shortcut.hint;
        this.showResults([]);
      };
    }
    return { resolver, provider, terms };
  }
  refreshSearchSteps() {
    this.searchSteps = [];
    const steps = $tw.wiki.getTiddlerData(this.searchStepsPath).steps;
    for (const step of steps) {
      this.searchSteps.push(
        this.searchStepBuilder(
          $tw.utils.pinyinfuse ? step.filter : step.filterFallback,
          Number($tw.utils.pinyinfuse ? step.caret : step.caretFallback),
          step.hint
        )
      );
    }
  }
  refreshCommandPalette() {
    this.refreshSettings();
    this.refreshThemes();
    this.refreshCommands();
    this.refreshSearchSteps();
  }
  handleSwitchHistory(event, forward) {
    if (!this.isOpened) {
      this.openPalette(event);
    }
    this.onKeyDown(
      new KeyboardEvent("keydown", {
        bubbles: false,
        cancelable: true,
        key: forward ? "ArrowDown" : "ArrowUp",
        shiftKey: false
      })
    );
    const onCtrlKeyUp = (keyUpEvent) => {
      if (!keyUpEvent.ctrlKey) {
        this.currentResolver(keyUpEvent);
        window.removeEventListener("keyup", onCtrlKeyUp);
      }
    };
    window.addEventListener("keyup", onCtrlKeyUp);
  }
  updateCommandHistory(command) {
    this.history = [.../* @__PURE__ */ new Set([command.name, ...this.history])];
    $tw.wiki.setTiddlerData(this.commandHistoryPath, { history: this.history });
  }
  historyProviderBuilder(hint, mode) {
    return (_terms) => {
      this.currentSelection = 0;
      this.hint.innerText = hint;
      let results;
      if (mode !== void 0 && mode === "drafts") {
        results = $tw.wiki.filterTiddlers("[has:field[draft.of]]");
      } else if (mode !== void 0 && mode === "story") {
        results = $tw.wiki.filterTiddlers("[list[$:/StoryList]]");
      } else {
        results = this.getHistory();
      }
      results = results.map((r) => {
        return { name: r };
      });
      this.showResults(results);
    };
  }
  commandWithHistoryPicker(message, hint, mode) {
    const handler = (_e) => {
      this.blockProviderChange = true;
      this.allowInputFieldSelection = true;
      this.currentProvider = provider;
      this.currentResolver = resolver;
      this.input.value = "";
      this.onInput(this.input.value);
    };
    const provider = this.historyProviderBuilder(hint, mode);
    const resolver = (_e) => {
      if (this.currentSelection === 0)
        return;
      const title = this.getDataFromResultDiv(this.currentResults[this.currentSelection - 1], "name");
      this.parentWidget.dispatchEvent({
        type: message,
        param: title,
        tiddlerTitle: title
      });
      this.closePalette();
    };
    return {
      handler,
      provider,
      resolver
    };
  }
  onInput(text = "") {
    if (this.blockProviderChange) {
      this.currentProvider(text);
      this.setSelectionToFirst();
      return;
    }
    const { resolver, provider, terms } = this.parseCommand(text);
    this.currentResolver = resolver;
    this.currentProvider = provider;
    this.currentProvider(terms);
    this.setSelectionToFirst();
  }
  onClick(event) {
    if (this.isOpened && !this.div.contains(event.target)) {
      this.closePalette();
    }
  }
  openPaletteSelection(event) {
    const selection = this.getCurrentSelection();
    this.openPalette(event, selection);
  }
  openPalette(_e, selection) {
    this.currentProvider("");
    this.isOpened = true;
    this.allowInputFieldSelection = false;
    this.goBack = void 0;
    this.blockProviderChange = false;
    const activeElement = this.getActiveElement();
    this.previouslyFocused = {
      element: activeElement,
      start: activeElement.selectionStart,
      end: activeElement.selectionEnd,
      caretPos: activeElement.selectionEnd
    };
    this.input.value = "";
    if (selection !== void 0) {
      this.input.value = selection;
    }
    if (this.settings.alwaysPassSelection) {
      this.input.value += this.getCurrentSelection();
    }
    this.currentSelection = 0;
    this.onInput(this.input.value);
    this.div.style.display = "flex";
    this.mask.style.opacity = "0.6";
    this.input.focus();
  }
  insertSelectedResult() {
    if (!this.isOpened)
      return;
    if (this.currentSelection === 0)
      return;
    const previous = this.previouslyFocused;
    const previousValue = previous.element.value;
    if (previousValue === void 0)
      return;
    const selection = this.getDataFromResultDiv(this.currentResults[this.currentSelection - 1], "name");
    if (!selection)
      return;
    if (previous.start === previous.end) {
      this.previouslyFocused.element.value = previousValue.substring(0, previous.start) + selection + previousValue.substring(previous.start);
    } else {
      this.previouslyFocused.element.value = previousValue.substring(0, previous.start) + selection + previousValue.substring(previous.end);
    }
    this.previouslyFocused.caretPos = previous.start + selection.length;
    this.closePalette();
  }
  closePalette() {
    this.div.style.display = "none";
    this.mask.style.opacity = "0";
    this.isOpened = false;
    this.focusAtCaretPosition(this.previouslyFocused.element, this.previouslyFocused.caretPos);
  }
  onKeyDown(e) {
    switch (e.key) {
      case "Escape": {
        if (!this.settings.escapeGoesBack || this.goBack === void 0) {
          this.closePalette();
        } else {
          this.goBack();
          this.goBack = void 0;
        }
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        e.stopPropagation();
        let sel = this.currentSelection - 1;
        if (sel === 0) {
          if (!this.allowInputFieldSelection) {
            sel = this.currentResults.length;
          }
        } else if (sel < 0) {
          sel = this.currentResults.length;
        }
        this.setSelection(sel);
        break;
      }
      case "ArrowDown": {
        e.preventDefault();
        e.stopPropagation();
        let sel = (this.currentSelection + 1) % (this.currentResults.length + 1);
        if (!this.allowInputFieldSelection && sel === 0 && this.currentResults.length > 0) {
          sel = 1;
        }
        this.setSelection(sel);
        break;
      }
      case "Enter": {
        e.preventDefault();
        e.stopPropagation();
        this.validateSelection(e);
        break;
      }
    }
  }
  addResult(result, id) {
    const resultDiv = this.createElement("div", { className: "commandpaletteresult" });
    const titleDiv = this.createElement("div", { className: "commandpalettetitle", innerText: result.caption || result.name });
    resultDiv.appendChild(titleDiv);
    if (result.hint !== void 0) {
      const hint = this.createElement("div", { className: "commandpalettehint", innerText: result.hint });
      resultDiv.appendChild(hint);
    }
    resultDiv.dataset.result = JSON.stringify(result);
    if (result.action != void 0) {
      resultDiv.onabort = result.action;
    }
    this.currentResults.push(resultDiv);
    resultDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.setSelection(id + 1);
      this.validateSelection(e);
    });
    resultDiv.addEventListener("contextmenu", (e) => {
      e.stopPropagation();
      if (e.ctrlKey && e.button === 0) {
        e.preventDefault();
        this.setSelection(id + 1);
        this.validateSelection(e);
      }
    });
    this.scrollDiv.appendChild(resultDiv);
  }
  getDataFromResultDiv(resultDiv, key) {
    return JSON.parse(resultDiv.dataset.result ?? "{}")[key];
  }
  getActionFromResultDiv(resultDiv) {
    return resultDiv.onabort;
  }
  validateSelection(e) {
    if (!this.isIMEOpen) {
      this.currentResolver(e);
    }
  }
  defaultResolver(e) {
    if (e.getModifierState("Shift")) {
      this.input.value = "+" + this.input.value;
      this.createTiddlerResolver(e);
      return;
    }
    if (this.currentSelection === 0)
      return;
    const selectionTitle = this.getDataFromResultDiv(this.currentResults[this.currentSelection - 1], "name");
    this.closePalette();
    this.navigateTo(selectionTitle);
  }
  navigateTo(title) {
    if (title) {
      this.parentWidget.dispatchEvent({
        type: "tm-navigate",
        param: title,
        navigateTo: title
      });
    }
  }
  showHistory() {
    this.hint.innerText = "\u5386\u53F2\u8BB0\u5F55";
    this.currentProvider = (terms) => {
      let results;
      if (terms.length === 0) {
        results = this.getHistory();
      } else {
        if ($tw.utils.pinyinfuse) {
          results = $tw.utils.pinyinfuse(this.getHistory(), terms).map((item) => item.item);
        } else {
          results = this.getHistory().filter((item) => item.toLowerCase().includes(terms));
        }
      }
      this.showResults(
        results.map((title) => {
          return {
            name: title,
            action: () => {
              this.navigateTo(title);
              this.closePalette();
            }
          };
        })
      );
    };
    this.currentResolver = (e) => {
      if (this.currentSelection === 0)
        return;
      this.getActionFromResultDiv(this.currentResults[this.currentSelection - 1])?.(e);
    };
    this.input.value = "";
    this.blockProviderChange = true;
    this.onInput(this.input.value);
  }
  setSelectionToFirst() {
    let sel = 1;
    if (this.allowInputFieldSelection || this.currentResults.length === 0) {
      sel = 0;
    }
    this.setSelection(sel);
  }
  setSelection(id) {
    this.currentSelection = id;
    for (let index = 0; index < this.currentResults.length; index++) {
      const selected = this.currentSelection === index + 1;
      this.currentResults[index].className = selected ? "commandpaletteresult commandpaletteresultselected" : "commandpaletteresult";
    }
    if (this.currentSelection === 0) {
      this.scrollDiv.scrollTop = 0;
      return;
    }
    const scrollHeight = this.scrollDiv.offsetHeight;
    const scrollPos = this.scrollDiv.scrollTop;
    const selectionPos = Number(this.currentResults[this.currentSelection - 1]?.offsetTop ?? 0);
    const selectionHeight = Number(this.currentResults[this.currentSelection - 1]?.offsetHeight ?? 0);
    if (selectionPos < scrollPos || selectionPos >= scrollPos + scrollHeight) {
      let a = selectionPos;
      let b = selectionPos - scrollHeight + selectionHeight;
      a = Math.abs(a - scrollPos);
      b = Math.abs(b - scrollPos);
      if (a < b) {
        this.scrollDiv.scrollTop = selectionPos;
      } else {
        this.scrollDiv.scrollTop = selectionPos - scrollHeight + selectionHeight;
      }
    }
  }
  getHistory() {
    const historyData = $tw.wiki.getTiddlerData("$:/HistoryList") ?? [];
    const [first, second, ...rest] = (0, import_uniq.default)([...historyData.reverse().map((x) => x.title), ...$tw.wiki.filterTiddlers("[list[$:/StoryList]]")]).filter(
      (t) => this.tiddlerOrShadowExists(t)
    );
    return [second, first, ...rest];
  }
  tiddlerOrShadowExists(title) {
    return $tw.wiki.tiddlerExists(title) || $tw.wiki.isShadowTiddler(title);
  }
  defaultProvider(terms) {
    this.hint.innerText = "\u23CE\u641C\u7D22\u6761\u76EE\uFF08\u21E7\u23CE \u521B\u5EFA\u6761\u76EE\uFF09\uFF08\uFF1F\u95EE\u53F7\u67E5\u770B\u5E2E\u52A9\uFF09";
    let searches;
    if (terms.startsWith("\\"))
      terms = terms.substr(1);
    if (terms.length === 0) {
      if (this.settings.showHistoryOnOpen) {
        searches = this.getHistory().map((s) => {
          return { name: s, hint: "\u5386\u53F2\u8BB0\u5F55" };
        });
      } else {
        searches = [];
      }
    } else {
      searches = (0, import_uniq.default)(this.searchSteps.reduce((accumulator, current) => [...accumulator, ...current(terms)], []));
    }
    this.showResults(searches);
  }
  searchStepBuilder(filter, caret, hint) {
    return (terms) => {
      const search = filter.substring(0, caret) + terms + filter.substring(caret);
      const results = $tw.wiki.filterTiddlers(search).map((s) => {
        return { name: s, hint };
      });
      return results;
    };
  }
  tagListProvider(terms) {
    this.currentSelection = 0;
    this.hint.innerText = "\u641C\u7D22\u6807\u7B7E\u5217\u8868";
    let searches;
    if (terms.length === 0) {
      searches = $tw.wiki.filterTiddlers("[!is[system]tags[]][is[system]tags[]][all[shadows]tags[]]");
    } else {
      searches = $tw.wiki.filterTiddlers(
        $tw.utils.pinyinfuse ? `[all[]tags[]!is[system]pinyinfuse[${terms}]][all[]tags[]is[system]pinyinfuse[${terms}]][all[shadows]tags[]pinyinfuse[${terms}]]` : `[all[]tags[]!is[system]search[${terms}]][all[]tags[]is[system]search[${terms}]][all[shadows]tags[]search[${terms}]]`
      );
    }
    searches = searches.map((s) => {
      return { name: s };
    });
    this.showResults(searches);
  }
  tagListResolver(_e) {
    if (this.currentSelection === 0) {
      const input = this.input.value.substring(2);
      const exist = $tw.wiki.filterTiddlers("[tag[" + input + "]]");
      if (!exist)
        return;
      this.input.value = "##" + input;
      return;
    }
    const result = this.currentResults[this.currentSelection - 1];
    this.input.value = "##" + result.innerText;
    this.onInput(this.input.value);
  }
  tagProvider(terms) {
    this.currentSelection = 0;
    this.hint.innerText = "\u7528\u300C#\u6807\u7B7E #\u6807\u7B7E2\u300D\u641C\u7D22\u6761\u76EE";
    let tiddlerNameSearchResults = [];
    if (terms.length > 0) {
      const { tags, searchTerms, tagsFilter } = this.parseTags(this.input.value);
      const taggedTiddlers = $tw.wiki.filterTiddlers(tagsFilter);
      if (taggedTiddlers.length > 0) {
        if (tags.length === 1) {
          const tag = tags[0];
          const tagTiddlerExists = this.tiddlerOrShadowExists(tag);
          if (tagTiddlerExists && searchTerms.some((s) => tag.includes(s)))
            tiddlerNameSearchResults.push(tag);
        }
        tiddlerNameSearchResults = [...tiddlerNameSearchResults, ...taggedTiddlers];
      }
    }
    this.showResults(
      tiddlerNameSearchResults.map((tiddlerName) => {
        return { name: tiddlerName };
      })
    );
  }
  parseTags(input) {
    const splits = input.split(" ").filter((s) => s !== "");
    const tags = [];
    const searchTerms = [];
    for (const split of splits) {
      if (split.startsWith("#")) {
        tags.push(split.substr(1));
        continue;
      }
      searchTerms.push(split);
    }
    let tagsFilter = `[all[tiddlers+system+shadows]${tags.reduce((a, c) => {
      return a + "tag[" + c + "]";
    }, "")}]`;
    if (searchTerms.length > 0) {
      tagsFilter = tagsFilter.substring(0, tagsFilter.length - 1);
      tagsFilter += `${$tw.utils.pinyinfuse ? "pinyinfuse" : "search"}[${searchTerms.join(" ")}]]`;
    }
    return { tags, searchTerms, tagsFilter };
  }
  settingsProvider(_terms) {
    this.currentSelection = 0;
    this.hint.innerText = "Select the setting you want to change";
    const isNumerical = (terms) => terms.length > 0 && terms.match(/\D/gm) === null;
    const isBoolean = (terms) => terms.length > 0 && terms.match(/(true\b)|(false\b)/gim) !== null;
    this.showResults([
      { name: "Theme (currently " + this.settings.theme?.match?.(/[^/]*$/), action: () => this.promptForThemeSetting() },
      this.settingResultBuilder("Max results", "maxResults", "Choose the maximum number of results", isNumerical, "Error: value must be a positive integer"),
      this.settingResultBuilder(
        "Show history on open",
        "showHistoryOnOpen",
        "Chose whether to show the history when you open the palette",
        isBoolean,
        "Error: value must be 'true' or 'false'"
      ),
      this.settingResultBuilder(
        "Escape to go back",
        "escapeGoesBack",
        "Chose whether ESC should go back when possible",
        isBoolean,
        "Error: value must be 'true' or 'false'"
      ),
      this.settingResultBuilder(
        "Use selection as search query",
        "alwaysPassSelection",
        "Chose your current selection is passed to the command palette",
        isBoolean,
        "Error: value must be 'true' or 'false'"
      ),
      this.settingResultBuilder(
        "Never Basic",
        "neverBasic",
        "Chose whether to override basic prompts to show filter operation",
        isBoolean,
        "Error: value must be 'true' or 'false'"
      ),
      this.settingResultBuilder(
        "Field preview max size",
        "maxResultHintSize",
        "Choose the maximum hint length for field preview",
        isNumerical,
        "Error: value must be a positive integer"
      )
    ]);
  }
  settingResultBuilder(name, settingName, hint, validator, errorMessage) {
    return { name: name + " (currently " + this.settings[settingName] + ")", action: () => this.promptForSetting(settingName, hint, validator, errorMessage) };
  }
  settingsResolver(e) {
    if (this.currentSelection === 0)
      return;
    this.goBack = () => {
      this.input.value = "|";
      this.blockProviderChange = false;
      this.onInput(this.input.value);
    };
    this.getActionFromResultDiv(this.currentResults[this.currentSelection - 1])?.(e);
  }
  promptForThemeSetting() {
    this.blockProviderChange = true;
    this.allowInputFieldSelection = false;
    this.currentProvider = (_terms) => {
      this.currentSelection = 0;
      this.hint.innerText = "\u9009\u62E9\u4E00\u4E2A\u4E3B\u9898";
      const defaultValue = this.defaultSettings.theme;
      const results = [
        {
          name: "\u6062\u590D\u9ED8\u8BA4\u503C: " + defaultValue.match(/[^/]*$/),
          action: () => {
            this.setSetting("theme", defaultValue);
            this.refreshThemes();
          }
        }
      ];
      for (const theme of this.themes) {
        const name = theme.fields.title;
        const shortName = name.match(/[^/]*$/);
        const action = () => {
          this.setSetting("theme", name);
          this.refreshThemes();
        };
        results.push({ name: shortName, action });
      }
      this.showResults(results);
    };
    this.currentResolver = (e) => {
      this.getActionFromResultDiv(this.currentResults[this.currentSelection - 1])?.(e);
    };
    this.input.value = "";
    this.onInput(this.input.value);
  }
  promptForSetting(settingName, hint, validator, errorMessage) {
    this.blockProviderChange = true;
    this.allowInputFieldSelection = true;
    this.currentProvider = (terms) => {
      this.currentSelection = 0;
      this.hint.innerText = hint;
      const defaultValue = this.defaultSettings[settingName];
      const results = [{ name: "Revert to default value: " + defaultValue, action: () => this.setSetting(settingName, defaultValue) }];
      if (!validator(terms)) {
        results.push({ name: errorMessage, action: () => {
        } });
      }
      this.showResults(results);
    };
    this.currentResolver = (e) => {
      if (this.currentSelection === 0) {
        const input = this.input.value;
        if (validator(input)) {
          this.setSetting(settingName, input);
          this.goBack = void 0;
          this.blockProviderChange = false;
          this.allowInputFieldSelection = false;
          this.promptCommand("|");
        }
      } else {
        const action = this.getActionFromResultDiv(this.currentResults[this.currentSelection - 1]);
        if (action != void 0) {
          action(e);
          this.goBack = void 0;
          this.blockProviderChange = false;
          this.allowInputFieldSelection = false;
          this.promptCommand("|");
        }
      }
    };
    this.input.value = this.settings[settingName];
    this.onInput(this.input.value);
  }
  showResults(results) {
    for (const current of this.currentResults) {
      current.remove();
    }
    this.currentResults = [];
    let resultCount = 0;
    for (const result of results) {
      this.addResult(result, resultCount);
      resultCount++;
      if (resultCount >= (this.settings.maxResults ?? this.defaultSettings.maxResults))
        break;
    }
  }
  tmMessageBuilder(message, parameters = {}) {
    return (e) => {
      const event = {
        type: message,
        paramObject: parameters,
        event: e
      };
      this.parentWidget.dispatchEvent(event);
    };
  }
  actionProvider(terms) {
    this.currentSelection = 0;
    this.hint.innerText = "\u67E5\u770B\u548C\u641C\u7D22\u547D\u4EE4\u5217\u8868";
    let results;
    if (terms.length === 0) {
      results = this.getCommandHistory();
    } else {
      if ($tw.utils.pinyinfuse) {
        results = $tw.utils.pinyinfuse(this.actions, terms.toLowerCase(), ["name", "caption"]).map((item) => item.item);
      } else {
        results = this.actions.filter(
          (item) => item.name.toLowerCase().includes(terms.toLowerCase()) || item.caption?.toLowerCase()?.includes(terms.toLowerCase())
        );
      }
    }
    this.showResults(results);
  }
  filterProvider(terms, hint) {
    this.currentSelection = 0;
    this.hint.innerText = hint === void 0 ? "\u7B5B\u9009\u5668\u8BED\u53E5" : hint;
    terms = "[" + terms;
    const fields = $tw.wiki.filterTiddlers("[fields[]]");
    const results = $tw.wiki.filterTiddlers(terms).map((r) => {
      return { name: r };
    });
    const insertResult = (index, result) => results.splice(index + 1, 0, result);
    for (let index = 0; index < results.length; index++) {
      const initialResult = results[index];
      let alreadyMatched = false;
      let date = "Invalid Date";
      if (initialResult.name.length === 17) {
        date = $tw.utils.parseDate(initialResult.name).toLocaleString();
      }
      if (date !== "Invalid Date") {
        results[index].hint = date;
        results[index].action = () => {
        };
        alreadyMatched = true;
      }
      const isTag = $tw.wiki.getTiddlersWithTag(initialResult.name).length > 0;
      if (isTag) {
        if (alreadyMatched) {
          insertResult(index, { ...results[index] });
          index += 1;
        }
        results[index].action = () => this.promptCommand("#" + initialResult.name);
        results[index].hint = "Tag";
        alreadyMatched = true;
      }
      const isTiddler = this.tiddlerOrShadowExists(initialResult.name);
      if (isTiddler) {
        if (alreadyMatched) {
          insertResult(index, { ...results[index] });
          index += 1;
        }
        results[index].action = () => {
          this.navigateTo(initialResult.name);
          this.closePalette();
        };
        results[index].hint = "Tiddler";
        alreadyMatched = true;
      }
      const isField = fields.includes(initialResult.name);
      if (isField) {
        if (alreadyMatched) {
          insertResult(index, { ...results[index] });
          index += 1;
        }
        let parsed;
        try {
          parsed = $tw.wiki.parseFilter(this.input.value);
        } catch {
        }
        const foundTitles = [];
        for (const node of parsed || []) {
          if (node.operators.length !== 2)
            continue;
          if (node.operators[0].operator === "title" && node.operators[1].operator === "fields") {
            foundTitles.push(node.operators[0].operand);
          }
        }
        let hint2 = "Field";
        if (foundTitles.length === 1) {
          hint2 = $tw.wiki.getTiddler(foundTitles[0]).fields[initialResult.name];
          if (hint2 instanceof Date) {
            hint2 = hint2.toLocaleString();
          }
          hint2 = hint2.toString().replace(/(\r\n|\n|\r)/gm, "");
          const maxSize = (this.settings.maxResultHintSize ?? this.defaultSettings.maxResultHintSize) - 3;
          if (hint2.length > maxSize) {
            hint2 = hint2.substring(0, maxSize);
            hint2 += "...";
          }
        }
        results[index].hint = hint2;
        results[index].action = () => {
        };
        alreadyMatched = true;
      }
    }
    this.showResults(results);
  }
  filterResolver(e) {
    if (this.currentSelection === 0)
      return;
    this.getActionFromResultDiv(this.currentResults[this.currentSelection - 1])?.(e);
    e.stopPropagation();
  }
  helpResolver(e) {
    if (this.currentSelection === 0)
      return;
    this.getActionFromResultDiv(this.currentResults[this.currentSelection - 1])?.(e);
    e.stopPropagation();
  }
  createTiddlerProvider(_terms) {
    this.currentSelection = 0;
    this.hint.innerText = "\u521B\u5EFA\u6761\u76EE\uFF0C\u7A7A\u683C\u9694\u5F00\u53EF\u4EE5\u7528#\u6253\u591A\u4E2A\u6807\u7B7E";
    this.showResults([]);
  }
  createTiddlerResolver(e) {
    let { tags, searchTerms } = this.parseTags(this.input.value.substring(1));
    const title = searchTerms.join(" ");
    tags = tags.join(" ");
    this.tmMessageBuilder("tm-new-tiddler", { title, tags })(e);
    this.closePalette();
  }
  promptCommand(value, caret) {
    this.blockProviderChange = false;
    this.input.value = value;
    this.input.focus();
    if (caret !== void 0) {
      this.input.setSelectionRange(caret, caret);
    }
    this.onInput(this.input.value);
  }
  promptCommandBasic(value, caret, hint) {
    if (this.settings.neverBasic === true) {
      this.promptCommand(value, caret);
      return;
    }
    this.input.value = "";
    this.blockProviderChange = true;
    this.currentProvider = this.basicProviderBuilder(value, caret, hint);
    this.onInput(this.input.value);
  }
  basicProviderBuilder(value, caret, hint) {
    const start = value.substr(0, caret);
    const end = value.substr(caret);
    return (input) => {
      const { resolver, provider, terms } = this.parseCommand(start + input + end);
      const backgroundProvider = provider;
      backgroundProvider(terms, hint);
      this.currentResolver = resolver;
    };
  }
  getCommandHistory() {
    this.history = this.history.filter((h) => this.actions.some((a) => a.name === h));
    const results = this.history.map((h) => this.actions.find((a) => a.name === h));
    while (results.length <= (this.settings.maxResults ?? this.defaultSettings.maxResults)) {
      const nextDefaultAction = this.actions.find((a) => !results.includes(a));
      if (nextDefaultAction === void 0)
        break;
      results.push(nextDefaultAction);
    }
    return results;
  }
  actionResolver(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.currentSelection === 0)
      return;
    const result = this.actions.find((a) => a.name === this.getDataFromResultDiv(this.currentResults[this.currentSelection - 1], "name"));
    if (result == void 0)
      return;
    if (result.keepPalette) {
      const currentInput = this.input.value;
      this.goBack = () => {
        this.input.value = currentInput;
        this.blockProviderChange = false;
        this.onInput(this.input.value);
      };
    }
    this.updateCommandHistory(result);
    result.action?.(e);
    if (result.immediate) {
      this.validateSelection(e);
      return;
    }
    if (!result.keepPalette) {
      this.closePalette();
    }
  }
  getCurrentSelection() {
    const selection = window.getSelection().toString();
    if (selection !== "")
      return selection;
    const activeElement = this.getActiveElement();
    if (activeElement === void 0 || activeElement.selectionStart === void 0)
      return "";
    if (activeElement.selectionStart > activeElement.selectionEnd) {
      return activeElement.value.substring(activeElement.selectionStart, activeElement.selectionEnd);
    } else {
      return activeElement.value.substring(activeElement.selectionEnd, activeElement.selectionStart);
    }
  }
  getActiveElement(element = document.activeElement) {
    const shadowRoot = element.shadowRoot;
    const contentDocument = element.contentDocument;
    if (shadowRoot?.activeElement) {
      return this.getActiveElement(shadowRoot.activeElement);
    }
    if (contentDocument?.activeElement) {
      return this.getActiveElement(contentDocument.activeElement);
    }
    return element;
  }
  focusAtCaretPosition(element, caretPos) {
    if (element !== null) {
      element.value = element.value;
      if (element.createTextRange) {
        const range = element.createTextRange();
        range.move("character", caretPos);
        range.select();
        return true;
      } else {
        if (element.selectionStart || element.selectionStart === 0) {
          element.focus();
          element.setSelectionRange(caretPos, caretPos);
          return true;
        } else {
          element.focus();
          return false;
        }
      }
    }
  }
  createElement(name, proprieties, styles) {
    const element = this.document.createElement(name);
    for (const [propriety, value] of Object.entries(proprieties || {})) {
      element[propriety] = value;
    }
    for (const [style, value] of Object.entries(styles != void 0 || {})) {
      element.style[style] = value;
    }
    return element;
  }
  refresh() {
    return false;
  }
};
exports.commandpalettewidget = CommandPaletteWidget;

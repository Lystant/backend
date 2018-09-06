[{
    "$__": "InternalCache {\n  strictMode: true,\n  selected: undefined,\n  shardval: undefined,\n  saveError: undefined,\n  validationError: undefined,\n  adhocPaths: undefined,\n  removing: undefined,\n  inserting: undefined,\n  version: undefined,\n  getters: {},\n  _id: undefined,\n  populate: undefined,\n  populated: undefined,\n  wasPopulated: false,\n  scope: undefined,\n  activePaths: \n   StateMachine {\n     paths: { password: 'init', username: 'init', _id: 'init' },\n     states: \n      { ignore: {},\n        default: {},\n        init: [Object],\n        modify: {},\n        require: {} },\n     stateNames: [ 'require', 'modify', 'init', 'default', 'ignore' ] },\n  ownerDocument: undefined,\n  fullPath: undefined,\n  emitter: EventEmitter { domain: null, _events: {}, _eventsCount: 0, _maxListeners: 0 } }"
}, {
    "isNew": "false"
}, {
    "errors": "undefined"
}, {
    "_doc": "{ password: '1234',\n  username: 'satyajit',\n  _id: 5760f21597aceb8bc2580be2 }"
}, {
    "db": "NativeConnection {\n  base: \n   Mongoose {\n     connections: [ [Circular] ],\n     plugins: [],\n     models: { accounts: [Object] },\n     modelSchemas: { accounts: [Object] },\n     options: { pluralization: true } },\n  collections: \n   { accounts: \n      NativeCollection {\n        collection: [Object],\n        opts: [Object],\n        name: 'accounts',\n        collectionName: 'accounts',\n        conn: [Circular],\n        queue: [],\n        buffer: false,\n        emitter: [Object] } },\n  models: \n   { accounts: \n      { [Function: model]\n        hooks: [Object],\n        base: [Object],\n        modelName: 'accounts',\n        model: [Function: model],\n        db: [Circular],\n        discriminators: undefined,\n        schema: [Object],\n        collection: [Object],\n        Query: [Object],\n        '$__insertMany': [Function],\n        insertMany: [Function] } },\n  config: { autoIndex: true },\n  replica: false,\n  hosts: null,\n  host: 'localhost',\n  port: 27017,\n  user: undefined,\n  pass: undefined,\n  name: 'user',\n  options: \n   { db: { forceServerObjectId: false, w: 1 },\n     auth: {},\n     server: { socketOptions: {}, auto_reconnect: true },\n     replset: { socketOptions: {} },\n     mongos: undefined },\n  otherDbs: [],\n  _readyState: 1,\n  _closeCalled: false,\n  _hasOpened: true,\n  _listening: false,\n  db: \n   Db {\n     domain: null,\n     _events: \n      { close: [Function],\n        error: [Function],\n        reconnect: [Function],\n        timeout: [Function],\n        open: [Function],\n        parseError: [Function] },\n     _eventsCount: 6,\n     _maxListeners: undefined,\n     s: \n      { databaseName: 'user',\n        dbCache: {},\n        children: [],\n        topology: [Object],\n        options: [Object],\n        logger: [Object],\n        bson: BSON {},\n        authSource: undefined,\n        readPreference: undefined,\n        bufferMaxEntries: -1,\n        parentDb: null,\n        pkFactory: undefined,\n        nativeParser: undefined,\n        promiseLibrary: [Function: Promise],\n        noListener: false,\n        readConcern: undefined },\n     serverConfig: [Getter],\n     bufferMaxEntries: [Getter],\n     databaseName: [Getter],\n     _listening: true } }"
}, {
    "discriminators": "undefined"
}, {
    "__v": "undefined"
}, {
    "id": "'5760f21597aceb8bc2580be2'"
}, {
    "_id": "5760f21597aceb8bc2580be2"
}, {
    "username": "'satyajit'"
}, {
    "password": "'1234'"
}, {
    "schema": "Schema {\n  obj: { password: [Function: String], username: [Function: String] },\n  paths: \n   { password: \n      SchemaString {\n        enumValues: [],\n        regExp: null,\n        path: 'password',\n        instance: 'String',\n        validators: [],\n        setters: [],\n        getters: [],\n        options: [Object],\n        _index: null },\n     username: \n      SchemaString {\n        enumValues: [],\n        regExp: null,\n        path: 'username',\n        instance: 'String',\n        validators: [],\n        setters: [],\n        getters: [],\n        options: [Object],\n        _index: null },\n     _id: \n      ObjectId {\n        path: '_id',\n        instance: 'ObjectID',\n        validators: [],\n        setters: [Object],\n        getters: [],\n        options: [Object],\n        _index: null,\n        defaultValue: [Function: defaultId] },\n     __v: \n      SchemaNumber {\n        path: '__v',\n        instance: 'Number',\n        validators: [],\n        setters: [],\n        getters: [],\n        options: [Object],\n        _index: null } },\n  subpaths: {},\n  virtuals: { id: VirtualType { path: 'id', getters: [Object], setters: [], options: {} } },\n  singleNestedPaths: {},\n  nested: {},\n  inherits: {},\n  callQueue: \n   [ [ 'pre', [Object] ],\n     [ 'pre', [Object] ],\n     [ 'pre', [Object] ],\n     [ 'pre', [Object] ] ],\n  _indexes: [],\n  methods: {},\n  statics: {},\n  tree: \n   { password: [Function: String],\n     username: [Function: String],\n     _id: { type: [Object], auto: true },\n     id: VirtualType { path: 'id', getters: [Object], setters: [], options: {} },\n     __v: [Function: Number] },\n  _requiredpaths: [],\n  discriminatorMapping: undefined,\n  _indexedpaths: undefined,\n  query: {},\n  childSchemas: [],\n  s: \n   { hooks: Kareem { _pres: {}, _posts: {} },\n     kareemHooks: \n      { count: true,\n        find: true,\n        findOne: true,\n        findOneAndUpdate: true,\n        findOneAndRemove: true,\n        insertMany: true,\n        update: true,\n        updateMany: true,\n        updateOne: true } },\n  options: \n   { retainKeyOrder: false,\n     typeKey: 'type',\n     id: true,\n     noVirtualId: false,\n     _id: true,\n     noId: false,\n     validateBeforeSave: true,\n     read: null,\n     shardKey: null,\n     autoIndex: null,\n     minimize: true,\n     discriminatorKey: '__t',\n     versionKey: '__v',\n     capped: false,\n     bufferCommands: true,\n     strict: true,\n     pluralization: true },\n  '$globalPluginsApplied': true }"
}, {
    "collection": "NativeCollection {\n  collection: \n   Collection {\n     s: \n      { pkFactory: [Object],\n        db: [Object],\n        topology: [Object],\n        dbName: 'user',\n        options: [Object],\n        namespace: 'user.accounts',\n        readPreference: null,\n        slaveOk: false,\n        serializeFunctions: undefined,\n        raw: undefined,\n        promoteLongs: undefined,\n        promoteValues: undefined,\n        promoteBuffers: undefined,\n        internalHint: null,\n        collectionHint: null,\n        name: 'accounts',\n        promiseLibrary: [Function: Promise],\n        readConcern: undefined } },\n  opts: { bufferCommands: true, capped: false },\n  name: 'accounts',\n  collectionName: 'accounts',\n  conn: \n   NativeConnection {\n     base: \n      Mongoose {\n        connections: [Object],\n        plugins: [],\n        models: [Object],\n        modelSchemas: [Object],\n        options: [Object] },\n     collections: { accounts: [Circular] },\n     models: { accounts: [Object] },\n     config: { autoIndex: true },\n     replica: false,\n     hosts: null,\n     host: 'localhost',\n     port: 27017,\n     user: undefined,\n     pass: undefined,\n     name: 'user',\n     options: \n      { db: [Object],\n        auth: {},\n        server: [Object],\n        replset: [Object],\n        mongos: undefined },\n     otherDbs: [],\n     _readyState: 1,\n     _closeCalled: false,\n     _hasOpened: true,\n     _listening: false,\n     db: \n      Db {\n        domain: null,\n        _events: [Object],\n        _eventsCount: 6,\n        _maxListeners: undefined,\n        s: [Object],\n        serverConfig: [Getter],\n        bufferMaxEntries: [Getter],\n        databaseName: [Getter],\n        _listening: true } },\n  queue: [],\n  buffer: false,\n  emitter: \n   EventEmitter {\n     domain: null,\n     _events: {},\n     _eventsCount: 0,\n     _maxListeners: undefined } }"
}, {
    "$__original_save": "{ [Function] numAsyncPres: 1 }"
}, {
    "save": "[Function: wrappedPointCut]"
}, {
    "_pres": "{ '$__original_save': \n   [ { [Function: fn] isAsync: false },\n     { [Function: fn] isAsync: true } ],\n  '$__original_validate': [ { [Function: fn] isAsync: true } ],\n  '$__original_remove': [ { [Function: fn] isAsync: true } ] }"
}, {
    "_posts": "{ '$__original_save': [],\n  '$__original_validate': [],\n  '$__original_remove': [] }"
}, {
    "$__original_validate": "{ [Function] numAsyncPres: 1 }"
}, {
    "validate": "[Function: wrappedPointCut]"
}, {
    "$__original_remove": "{ [Function] numAsyncPres: 1 }"
}, {
    "remove": "[Function: wrappedPointCut]"
}, {
    "$__handleSave": "[Function]"
}, {
    "$__save": "[Function]"
}, {
    "$__delta": "[Function]"
}, {
    "$__version": "[Function]"
}, {
    "increment": "[Function: increment]"
}, {
    "$__where": "[Function: _where]"
}, {
    "model": "[Function: model]"
}, {
    "on": "[Function]"
}, {
    "once": "[Function]"
}, {
    "emit": "[Function]"
}, {
    "listeners": "[Function]"
}, {
    "removeListener": "[Function]"
}, {
    "setMaxListeners": "[Function]"
}, {
    "removeAllListeners": "[Function]"
}, {
    "addListener": "[Function]"
}, {
    "$__buildDoc": "[Function]"
}, {
    "toBSON": "[Function]"
}, {
    "init": "[Function]"
}, {
    "$__storeShard": "[Function]"
}, {
    "hook": "[Function: hook]"
}, {
    "$pre": "[Function: pre]"
}, {
    "$post": "[Function: post]"
}, {
    "removePre": "[Function: removePre]"
}, {
    "removePost": "[Function: removePost]"
}, {
    "_lazySetupHooks": "[Function: _lazySetupHooks]"
}, {
    "update": "[Function: update]"
}, {
    "set": "[Function]"
}, {
    "$__shouldModify": "[Function]"
}, {
    "$__set": "[Function]"
}, {
    "getValue": "[Function]"
}, {
    "setValue": "[Function]"
}, {
    "get": "[Function]"
}, {
    "$__path": "[Function]"
}, {
    "markModified": "[Function]"
}, {
    "unmarkModified": "[Function]"
}, {
    "$ignore": "[Function]"
}, {
    "modifiedPaths": "[Function]"
}, {
    "isModified": "[Function]"
}, {
    "$isDefault": "[Function]"
}, {
    "isDirectModified": "[Function]"
}, {
    "isInit": "[Function]"
}, {
    "isSelected": "[Function: isSelected]"
}, {
    "$__validate": "[Function]"
}, {
    "validateSync": "[Function]"
}, {
    "invalidate": "[Function]"
}, {
    "$markValid": "[Function]"
}, {
    "$isValid": "[Function]"
}, {
    "$__reset": "[Function: reset]"
}, {
    "$__dirty": "[Function]"
}, {
    "$__setSchema": "[Function]"
}, {
    "$__getArrayPathsToValidate": "[Function]"
}, {
    "$__getAllSubdocs": "[Function]"
}, {
    "$__handleReject": "[Function: handleReject]"
}, {
    "$toObject": "[Function]"
}, {
    "toObject": "[Function]"
}, {
    "toJSON": "[Function]"
}, {
    "inspect": "[Function]"
}, {
    "toString": "[Function]"
}, {
    "equals": "[Function]"
}, {
    "populate": "[Function: populate]"
}, {
    "execPopulate": "[Function]"
}, {
    "populated": "[Function]"
}, {
    "depopulate": "[Function]"
}, {
    "$__fullPath": "[Function]"
}]

=== === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===


[{
    "$__": "\"InternalCache {\\n  strictMode: true,\\n  selected: undefined,\\n  shardval: undefined,\\n  saveError: undefined,\\n  validationError: undefined,\\n  adhocPaths: undefined,\\n  removing: undefined,\\n  inserting: undefined,\\n  version: undefined,\\n  getters: {},\\n  _id: undefined,\\n  populate: undefined,\\n  populated: undefined,\\n  wasPopulated: false,\\n  scope: undefined,\\n  activePaths: \\n   StateMachine {\\n     paths: { password: 'init', username: 'init', _id: 'init' },\\n     states: \\n      { ignore: {},\\n        default: {},\\n        init: [Object],\\n        modify: {},\\n        require: {} },\\n     stateNames: [ 'require', 'modify', 'init', 'default', 'ignore' ] },\\n  ownerDocument: undefined,\\n  fullPath: undefined,\\n  emitter: EventEmitter { domain: null, _events: {}, _eventsCount: 0, _maxListeners: 0 } }\""
}, {
    "isNew": "\"false\""
}, {
    "errors": "\"undefined\""
}, {
    "_doc": "\"{ password: '1234',\\n  username: 'satyajit',\\n  _id: 5760f21597aceb8bc2580be2 }\""
}, {
    "db": "\"NativeConnection {\\n  base: \\n   Mongoose {\\n     connections: [ [Circular] ],\\n     plugins: [],\\n     models: { accounts: [Object] },\\n     modelSchemas: { accounts: [Object] },\\n     options: { pluralization: true } },\\n  collections: \\n   { accounts: \\n      NativeCollection {\\n        collection: [Object],\\n        opts: [Object],\\n        name: 'accounts',\\n        collectionName: 'accounts',\\n        conn: [Circular],\\n        queue: [],\\n        buffer: false,\\n        emitter: [Object] } },\\n  models: \\n   { accounts: \\n      { [Function: model]\\n        hooks: [Object],\\n        base: [Object],\\n        modelName: 'accounts',\\n        model: [Function: model],\\n        db: [Circular],\\n        discriminators: undefined,\\n        schema: [Object],\\n        collection: [Object],\\n        Query: [Object],\\n        '$__insertMany': [Function],\\n        insertMany: [Function] } },\\n  config: { autoIndex: true },\\n  replica: false,\\n  hosts: null,\\n  host: 'localhost',\\n  port: 27017,\\n  user: undefined,\\n  pass: undefined,\\n  name: 'user',\\n  options: \\n   { db: { forceServerObjectId: false, w: 1 },\\n     auth: {},\\n     server: { socketOptions: {}, auto_reconnect: true },\\n     replset: { socketOptions: {} },\\n     mongos: undefined },\\n  otherDbs: [],\\n  _readyState: 1,\\n  _closeCalled: false,\\n  _hasOpened: true,\\n  _listening: false,\\n  db: \\n   Db {\\n     domain: null,\\n     _events: \\n      { close: [Function],\\n        error: [Function],\\n        reconnect: [Function],\\n        timeout: [Function],\\n        open: [Function],\\n        parseError: [Function] },\\n     _eventsCount: 6,\\n     _maxListeners: undefined,\\n     s: \\n      { databaseName: 'user',\\n        dbCache: {},\\n        children: [],\\n        topology: [Object],\\n        options: [Object],\\n        logger: [Object],\\n        bson: BSON {},\\n        authSource: undefined,\\n        readPreference: undefined,\\n        bufferMaxEntries: -1,\\n        parentDb: null,\\n        pkFactory: undefined,\\n        nativeParser: undefined,\\n        promiseLibrary: [Function: Promise],\\n        noListener: false,\\n        readConcern: undefined },\\n     serverConfig: [Getter],\\n     bufferMaxEntries: [Getter],\\n     databaseName: [Getter],\\n     _listening: true } }\""
}, {
    "discriminators": "\"undefined\""
}, {
    "__v": "\"undefined\""
}, {
    "id": "\"'5760f21597aceb8bc2580be2'\""
}, {
    "_id": "\"5760f21597aceb8bc2580be2\""
}, {
    "username": "\"'satyajit'\""
}, {
    "password": "\"'1234'\""
}, {
    "schema": "\"Schema {\\n  obj: { password: [Function: String], username: [Function: String] },\\n  paths: \\n   { password: \\n      SchemaString {\\n        enumValues: [],\\n        regExp: null,\\n        path: 'password',\\n        instance: 'String',\\n        validators: [],\\n        setters: [],\\n        getters: [],\\n        options: [Object],\\n        _index: null },\\n     username: \\n      SchemaString {\\n        enumValues: [],\\n        regExp: null,\\n        path: 'username',\\n        instance: 'String',\\n        validators: [],\\n        setters: [],\\n        getters: [],\\n        options: [Object],\\n        _index: null },\\n     _id: \\n      ObjectId {\\n        path: '_id',\\n        instance: 'ObjectID',\\n        validators: [],\\n        setters: [Object],\\n        getters: [],\\n        options: [Object],\\n        _index: null,\\n        defaultValue: [Function: defaultId] },\\n     __v: \\n      SchemaNumber {\\n        path: '__v',\\n        instance: 'Number',\\n        validators: [],\\n        setters: [],\\n        getters: [],\\n        options: [Object],\\n        _index: null } },\\n  subpaths: {},\\n  virtuals: { id: VirtualType { path: 'id', getters: [Object], setters: [], options: {} } },\\n  singleNestedPaths: {},\\n  nested: {},\\n  inherits: {},\\n  callQueue: \\n   [ [ 'pre', [Object] ],\\n     [ 'pre', [Object] ],\\n     [ 'pre', [Object] ],\\n     [ 'pre', [Object] ] ],\\n  _indexes: [],\\n  methods: {},\\n  statics: {},\\n  tree: \\n   { password: [Function: String],\\n     username: [Function: String],\\n     _id: { type: [Object], auto: true },\\n     id: VirtualType { path: 'id', getters: [Object], setters: [], options: {} },\\n     __v: [Function: Number] },\\n  _requiredpaths: [],\\n  discriminatorMapping: undefined,\\n  _indexedpaths: undefined,\\n  query: {},\\n  childSchemas: [],\\n  s: \\n   { hooks: Kareem { _pres: {}, _posts: {} },\\n     kareemHooks: \\n      { count: true,\\n        find: true,\\n        findOne: true,\\n        findOneAndUpdate: true,\\n        findOneAndRemove: true,\\n        insertMany: true,\\n        update: true,\\n        updateMany: true,\\n        updateOne: true } },\\n  options: \\n   { retainKeyOrder: false,\\n     typeKey: 'type',\\n     id: true,\\n     noVirtualId: false,\\n     _id: true,\\n     noId: false,\\n     validateBeforeSave: true,\\n     read: null,\\n     shardKey: null,\\n     autoIndex: null,\\n     minimize: true,\\n     discriminatorKey: '__t',\\n     versionKey: '__v',\\n     capped: false,\\n     bufferCommands: true,\\n     strict: true,\\n     pluralization: true },\\n  '$globalPluginsApplied': true }\""
}, {
    "collection": "\"NativeCollection {\\n  collection: \\n   Collection {\\n     s: \\n      { pkFactory: [Object],\\n        db: [Object],\\n        topology: [Object],\\n        dbName: 'user',\\n        options: [Object],\\n        namespace: 'user.accounts',\\n        readPreference: null,\\n        slaveOk: false,\\n        serializeFunctions: undefined,\\n        raw: undefined,\\n        promoteLongs: undefined,\\n        promoteValues: undefined,\\n        promoteBuffers: undefined,\\n        internalHint: null,\\n        collectionHint: null,\\n        name: 'accounts',\\n        promiseLibrary: [Function: Promise],\\n        readConcern: undefined } },\\n  opts: { bufferCommands: true, capped: false },\\n  name: 'accounts',\\n  collectionName: 'accounts',\\n  conn: \\n   NativeConnection {\\n     base: \\n      Mongoose {\\n        connections: [Object],\\n        plugins: [],\\n        models: [Object],\\n        modelSchemas: [Object],\\n        options: [Object] },\\n     collections: { accounts: [Circular] },\\n     models: { accounts: [Object] },\\n     config: { autoIndex: true },\\n     replica: false,\\n     hosts: null,\\n     host: 'localhost',\\n     port: 27017,\\n     user: undefined,\\n     pass: undefined,\\n     name: 'user',\\n     options: \\n      { db: [Object],\\n        auth: {},\\n        server: [Object],\\n        replset: [Object],\\n        mongos: undefined },\\n     otherDbs: [],\\n     _readyState: 1,\\n     _closeCalled: false,\\n     _hasOpened: true,\\n     _listening: false,\\n     db: \\n      Db {\\n        domain: null,\\n        _events: [Object],\\n        _eventsCount: 6,\\n        _maxListeners: undefined,\\n        s: [Object],\\n        serverConfig: [Getter],\\n        bufferMaxEntries: [Getter],\\n        databaseName: [Getter],\\n        _listening: true } },\\n  queue: [],\\n  buffer: false,\\n  emitter: \\n   EventEmitter {\\n     domain: null,\\n     _events: {},\\n     _eventsCount: 0,\\n     _maxListeners: undefined } }\""
}, {
    "$__original_save": "\"{ [Function] numAsyncPres: 1 }\""
}, {
    "save": "\"[Function: wrappedPointCut]\""
}, {
    "_pres": "\"{ '$__original_save': \\n   [ { [Function: fn] isAsync: false },\\n     { [Function: fn] isAsync: true } ],\\n  '$__original_validate': [ { [Function: fn] isAsync: true } ],\\n  '$__original_remove': [ { [Function: fn] isAsync: true } ] }\""
}, {
    "_posts": "\"{ '$__original_save': [],\\n  '$__original_validate': [],\\n  '$__original_remove': [] }\""
}, {
    "$__original_validate": "\"{ [Function] numAsyncPres: 1 }\""
}, {
    "validate": "\"[Function: wrappedPointCut]\""
}, {
    "$__original_remove": "\"{ [Function] numAsyncPres: 1 }\""
}, {
    "remove": "\"[Function: wrappedPointCut]\""
}, {
    "$__handleSave": "\"[Function]\""
}, {
    "$__save": "\"[Function]\""
}, {
    "$__delta": "\"[Function]\""
}, {
    "$__version": "\"[Function]\""
}, {
    "increment": "\"[Function: increment]\""
}, {
    "$__where": "\"[Function: _where]\""
}, {
    "model": "\"[Function: model]\""
}, {
    "on": "\"[Function]\""
}, {
    "once": "\"[Function]\""
}, {
    "emit": "\"[Function]\""
}, {
    "listeners": "\"[Function]\""
}, {
    "removeListener": "\"[Function]\""
}, {
    "setMaxListeners": "\"[Function]\""
}, {
    "removeAllListeners": "\"[Function]\""
}, {
    "addListener": "\"[Function]\""
}, {
    "$__buildDoc": "\"[Function]\""
}, {
    "toBSON": "\"[Function]\""
}, {
    "init": "\"[Function]\""
}, {
    "$__storeShard": "\"[Function]\""
}, {
    "hook": "\"[Function: hook]\""
}, {
    "$pre": "\"[Function: pre]\""
}, {
    "$post": "\"[Function: post]\""
}, {
    "removePre": "\"[Function: removePre]\""
}, {
    "removePost": "\"[Function: removePost]\""
}, {
    "_lazySetupHooks": "\"[Function: _lazySetupHooks]\""
}, {
    "update": "\"[Function: update]\""
}, {
    "set": "\"[Function]\""
}, {
    "$__shouldModify": "\"[Function]\""
}, {
    "$__set": "\"[Function]\""
}, {
    "getValue": "\"[Function]\""
}, {
    "setValue": "\"[Function]\""
}, {
    "get": "\"[Function]\""
}, {
    "$__path": "\"[Function]\""
}, {
    "markModified": "\"[Function]\""
}, {
    "unmarkModified": "\"[Function]\""
}, {
    "$ignore": "\"[Function]\""
}, {
    "modifiedPaths": "\"[Function]\""
}, {
    "isModified": "\"[Function]\""
}, {
    "$isDefault": "\"[Function]\""
}, {
    "isDirectModified": "\"[Function]\""
}, {
    "isInit": "\"[Function]\""
}, {
    "isSelected": "\"[Function: isSelected]\""
}, {
    "$__validate": "\"[Function]\""
}, {
    "validateSync": "\"[Function]\""
}, {
    "invalidate": "\"[Function]\""
}, {
    "$markValid": "\"[Function]\""
}, {
    "$isValid": "\"[Function]\""
}, {
    "$__reset": "\"[Function: reset]\""
}, {
    "$__dirty": "\"[Function]\""
}, {
    "$__setSchema": "\"[Function]\""
}, {
    "$__getArrayPathsToValidate": "\"[Function]\""
}, {
    "$__getAllSubdocs": "\"[Function]\""
}, {
    "$__handleReject": "\"[Function: handleReject]\""
}, {
    "$toObject": "\"[Function]\""
}, {
    "toObject": "\"[Function]\""
}, {
    "toJSON": "\"[Function]\""
}, {
    "inspect": "\"[Function]\""
}, {
    "toString": "\"[Function]\""
}, {
    "equals": "\"[Function]\""
}, {
    "populate": "\"[Function: populate]\""
}, {
    "execPopulate": "\"[Function]\""
}, {
    "populated": "\"[Function]\""
}, {
    "depopulate": "\"[Function]\""
}, {
    "$__fullPath": "\"[Function]\""
}]



[{
    "$__": "\"InternalCache {\\n  strictMode: true,\\n  selected: undefined,\\n  shardval: undefined,\\n  saveError: undefined,\\n  validationError: undefined,\\n  adhocPaths: undefined,\\n  removing: undefined,\\n  inserting: undefined,\\n  version: undefined,\\n  getters: {},\\n  _id: undefined,\\n  populate: undefined,\\n  populated: undefined,\\n  wasPopulated: false,\\n  scope: undefined,\\n  activePaths: \\n   StateMachine {\\n     paths: { password: 'init', username: 'init', _id: 'init' },\\n     states: \\n      { ignore: {},\\n        default: {},\\n        init: [Object],\\n        modify: {},\\n        require: {} },\\n     stateNames: [ 'require', 'modify', 'init', 'default', 'ignore' ] },\\n  ownerDocument: undefined,\\n  fullPath: undefined,\\n  emitter: EventEmitter { domain: null, _events: {}, _eventsCount: 0, _maxListeners: 0 } }\""
}, {
    "isNew": "\"false\""
}, {
    "errors": "\"undefined\""
}, {
    "_doc": "\"{ password: '1234',\\n  username: 'satyajit',\\n  _id: 5760f21597aceb8bc2580be2 }\""
}, {
    "extra": "\"'hello'\""
}, {
    "db": "\"NativeConnection {\\n  base: \\n   Mongoose {\\n     connections: [ [Circular] ],\\n     plugins: [],\\n     models: { accounts: [Object] },\\n     modelSchemas: { accounts: [Object] },\\n     options: { pluralization: true } },\\n  collections: \\n   { accounts: \\n      NativeCollection {\\n        collection: [Object],\\n        opts: [Object],\\n        name: 'accounts',\\n        collectionName: 'accounts',\\n        conn: [Circular],\\n        queue: [],\\n        buffer: false,\\n        emitter: [Object] } },\\n  models: \\n   { accounts: \\n      { [Function: model]\\n        hooks: [Object],\\n        base: [Object],\\n        modelName: 'accounts',\\n        model: [Function: model],\\n        db: [Circular],\\n        discriminators: undefined,\\n        schema: [Object],\\n        collection: [Object],\\n        Query: [Object],\\n        '$__insertMany': [Function],\\n        insertMany: [Function] } },\\n  config: { autoIndex: true },\\n  replica: false,\\n  hosts: null,\\n  host: 'localhost',\\n  port: 27017,\\n  user: undefined,\\n  pass: undefined,\\n  name: 'user',\\n  options: \\n   { db: { forceServerObjectId: false, w: 1 },\\n     auth: {},\\n     server: { socketOptions: {}, auto_reconnect: true },\\n     replset: { socketOptions: {} },\\n     mongos: undefined },\\n  otherDbs: [],\\n  _readyState: 1,\\n  _closeCalled: false,\\n  _hasOpened: true,\\n  _listening: false,\\n  db: \\n   Db {\\n     domain: null,\\n     _events: \\n      { close: [Function],\\n        error: [Function],\\n        reconnect: [Function],\\n        timeout: [Function],\\n        open: [Function],\\n        parseError: [Function] },\\n     _eventsCount: 6,\\n     _maxListeners: undefined,\\n     s: \\n      { databaseName: 'user',\\n        dbCache: {},\\n        children: [],\\n        topology: [Object],\\n        options: [Object],\\n        logger: [Object],\\n        bson: BSON {},\\n        authSource: undefined,\\n        readPreference: undefined,\\n        bufferMaxEntries: -1,\\n        parentDb: null,\\n        pkFactory: undefined,\\n        nativeParser: undefined,\\n        promiseLibrary: [Function: Promise],\\n        noListener: false,\\n        readConcern: undefined },\\n     serverConfig: [Getter],\\n     bufferMaxEntries: [Getter],\\n     databaseName: [Getter],\\n     _listening: true } }\""
}, {
    "discriminators": "\"undefined\""
}, {
    "__v": "\"undefined\""
}, {
    "id": "\"'5760f21597aceb8bc2580be2'\""
}, {
    "_id": "\"5760f21597aceb8bc2580be2\""
}, {
    "username": "\"'satyajit'\""
}, {
    "password": "\"'1234'\""
}, {
    "schema": "\"Schema {\\n  obj: { password: [Function: String], username: [Function: String] },\\n  paths: \\n   { password: \\n      SchemaString {\\n        enumValues: [],\\n        regExp: null,\\n        path: 'password',\\n        instance: 'String',\\n        validators: [],\\n        setters: [],\\n        getters: [],\\n        options: [Object],\\n        _index: null },\\n     username: \\n      SchemaString {\\n        enumValues: [],\\n        regExp: null,\\n        path: 'username',\\n        instance: 'String',\\n        validators: [],\\n        setters: [],\\n        getters: [],\\n        options: [Object],\\n        _index: null },\\n     _id: \\n      ObjectId {\\n        path: '_id',\\n        instance: 'ObjectID',\\n        validators: [],\\n        setters: [Object],\\n        getters: [],\\n        options: [Object],\\n        _index: null,\\n        defaultValue: [Function: defaultId] },\\n     __v: \\n      SchemaNumber {\\n        path: '__v',\\n        instance: 'Number',\\n        validators: [],\\n        setters: [],\\n        getters: [],\\n        options: [Object],\\n        _index: null } },\\n  subpaths: {},\\n  virtuals: { id: VirtualType { path: 'id', getters: [Object], setters: [], options: {} } },\\n  singleNestedPaths: {},\\n  nested: {},\\n  inherits: {},\\n  callQueue: \\n   [ [ 'pre', [Object] ],\\n     [ 'pre', [Object] ],\\n     [ 'pre', [Object] ],\\n     [ 'pre', [Object] ] ],\\n  _indexes: [],\\n  methods: {},\\n  statics: {},\\n  tree: \\n   { password: [Function: String],\\n     username: [Function: String],\\n     _id: { type: [Object], auto: true },\\n     id: VirtualType { path: 'id', getters: [Object], setters: [], options: {} },\\n     __v: [Function: Number] },\\n  _requiredpaths: [],\\n  discriminatorMapping: undefined,\\n  _indexedpaths: undefined,\\n  query: {},\\n  childSchemas: [],\\n  s: \\n   { hooks: Kareem { _pres: {}, _posts: {} },\\n     kareemHooks: \\n      { count: true,\\n        find: true,\\n        findOne: true,\\n        findOneAndUpdate: true,\\n        findOneAndRemove: true,\\n        insertMany: true,\\n        update: true,\\n        updateMany: true,\\n        updateOne: true } },\\n  options: \\n   { retainKeyOrder: false,\\n     typeKey: 'type',\\n     id: true,\\n     noVirtualId: false,\\n     _id: true,\\n     noId: false,\\n     validateBeforeSave: true,\\n     read: null,\\n     shardKey: null,\\n     autoIndex: null,\\n     minimize: true,\\n     discriminatorKey: '__t',\\n     versionKey: '__v',\\n     capped: false,\\n     bufferCommands: true,\\n     strict: true,\\n     pluralization: true },\\n  '$globalPluginsApplied': true }\""
}, {
    "collection": "\"NativeCollection {\\n  collection: \\n   Collection {\\n     s: \\n      { pkFactory: [Object],\\n        db: [Object],\\n        topology: [Object],\\n        dbName: 'user',\\n        options: [Object],\\n        namespace: 'user.accounts',\\n        readPreference: null,\\n        slaveOk: false,\\n        serializeFunctions: undefined,\\n        raw: undefined,\\n        promoteLongs: undefined,\\n        promoteValues: undefined,\\n        promoteBuffers: undefined,\\n        internalHint: null,\\n        collectionHint: null,\\n        name: 'accounts',\\n        promiseLibrary: [Function: Promise],\\n        readConcern: undefined } },\\n  opts: { bufferCommands: true, capped: false },\\n  name: 'accounts',\\n  collectionName: 'accounts',\\n  conn: \\n   NativeConnection {\\n     base: \\n      Mongoose {\\n        connections: [Object],\\n        plugins: [],\\n        models: [Object],\\n        modelSchemas: [Object],\\n        options: [Object] },\\n     collections: { accounts: [Circular] },\\n     models: { accounts: [Object] },\\n     config: { autoIndex: true },\\n     replica: false,\\n     hosts: null,\\n     host: 'localhost',\\n     port: 27017,\\n     user: undefined,\\n     pass: undefined,\\n     name: 'user',\\n     options: \\n      { db: [Object],\\n        auth: {},\\n        server: [Object],\\n        replset: [Object],\\n        mongos: undefined },\\n     otherDbs: [],\\n     _readyState: 1,\\n     _closeCalled: false,\\n     _hasOpened: true,\\n     _listening: false,\\n     db: \\n      Db {\\n        domain: null,\\n        _events: [Object],\\n        _eventsCount: 6,\\n        _maxListeners: undefined,\\n        s: [Object],\\n        serverConfig: [Getter],\\n        bufferMaxEntries: [Getter],\\n        databaseName: [Getter],\\n        _listening: true } },\\n  queue: [],\\n  buffer: false,\\n  emitter: \\n   EventEmitter {\\n     domain: null,\\n     _events: {},\\n     _eventsCount: 0,\\n     _maxListeners: undefined } }\""
}, {
    "$__original_save": "\"{ [Function] numAsyncPres: 1 }\""
}, {
    "save": "\"[Function: wrappedPointCut]\""
}, {
    "_pres": "\"{ '$__original_save': \\n   [ { [Function: fn] isAsync: false },\\n     { [Function: fn] isAsync: true } ],\\n  '$__original_validate': [ { [Function: fn] isAsync: true } ],\\n  '$__original_remove': [ { [Function: fn] isAsync: true } ] }\""
}, {
    "_posts": "\"{ '$__original_save': [],\\n  '$__original_validate': [],\\n  '$__original_remove': [] }\""
}, {
    "$__original_validate": "\"{ [Function] numAsyncPres: 1 }\""
}, {
    "validate": "\"[Function: wrappedPointCut]\""
}, {
    "$__original_remove": "\"{ [Function] numAsyncPres: 1 }\""
}, {
    "remove": "\"[Function: wrappedPointCut]\""
}, {
    "$__handleSave": "\"[Function]\""
}, {
    "$__save": "\"[Function]\""
}, {
    "$__delta": "\"[Function]\""
}, {
    "$__version": "\"[Function]\""
}, {
    "increment": "\"[Function: increment]\""
}, {
    "$__where": "\"[Function: _where]\""
}, {
    "model": "\"[Function: model]\""
}, {
    "on": "\"[Function]\""
}, {
    "once": "\"[Function]\""
}, {
    "emit": "\"[Function]\""
}, {
    "listeners": "\"[Function]\""
}, {
    "removeListener": "\"[Function]\""
}, {
    "setMaxListeners": "\"[Function]\""
}, {
    "removeAllListeners": "\"[Function]\""
}, {
    "addListener": "\"[Function]\""
}, {
    "$__buildDoc": "\"[Function]\""
}, {
    "toBSON": "\"[Function]\""
}, {
    "init": "\"[Function]\""
}, {
    "$__storeShard": "\"[Function]\""
}, {
    "hook": "\"[Function: hook]\""
}, {
    "$pre": "\"[Function: pre]\""
}, {
    "$post": "\"[Function: post]\""
}, {
    "removePre": "\"[Function: removePre]\""
}, {
    "removePost": "\"[Function: removePost]\""
}, {
    "_lazySetupHooks": "\"[Function: _lazySetupHooks]\""
}, {
    "update": "\"[Function: update]\""
}, {
    "set": "\"[Function]\""
}, {
    "$__shouldModify": "\"[Function]\""
}, {
    "$__set": "\"[Function]\""
}, {
    "getValue": "\"[Function]\""
}, {
    "setValue": "\"[Function]\""
}, {
    "get": "\"[Function]\""
}, {
    "$__path": "\"[Function]\""
}, {
    "markModified": "\"[Function]\""
}, {
    "unmarkModified": "\"[Function]\""
}, {
    "$ignore": "\"[Function]\""
}, {
    "modifiedPaths": "\"[Function]\""
}, {
    "isModified": "\"[Function]\""
}, {
    "$isDefault": "\"[Function]\""
}, {
    "isDirectModified": "\"[Function]\""
}, {
    "isInit": "\"[Function]\""
}, {
    "isSelected": "\"[Function: isSelected]\""
}, {
    "$__validate": "\"[Function]\""
}, {
    "validateSync": "\"[Function]\""
}, {
    "invalidate": "\"[Function]\""
}, {
    "$markValid": "\"[Function]\""
}, {
    "$isValid": "\"[Function]\""
}, {
    "$__reset": "\"[Function: reset]\""
}, {
    "$__dirty": "\"[Function]\""
}, {
    "$__setSchema": "\"[Function]\""
}, {
    "$__getArrayPathsToValidate": "\"[Function]\""
}, {
    "$__getAllSubdocs": "\"[Function]\""
}, {
    "$__handleReject": "\"[Function: handleReject]\""
}, {
    "$toObject": "\"[Function]\""
}, {
    "toObject": "\"[Function]\""
}, {
    "toJSON": "\"[Function]\""
}, {
    "inspect": "\"[Function]\""
}, {
    "toString": "\"[Function]\""
}, {
    "equals": "\"[Function]\""
}, {
    "populate": "\"[Function: populate]\""
}, {
    "execPopulate": "\"[Function]\""
}, {
    "populated": "\"[Function]\""
}, {
    "depopulate": "\"[Function]\""
}, {
    "$__fullPath": "\"[Function]\""
}]

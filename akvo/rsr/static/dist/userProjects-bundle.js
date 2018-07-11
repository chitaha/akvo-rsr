webpackJsonp([ 1 ], {
    0: function(module, exports, __webpack_require__) {
        "use strict";
        var _react = __webpack_require__(1);
        var _react2 = _interopRequireDefault(_react);
        var _reactDom = __webpack_require__(37);
        var _reactDom2 = _interopRequireDefault(_reactDom);
        var _App = __webpack_require__(735);
        var _App2 = _interopRequireDefault(_App);
        var _redux = __webpack_require__(197);
        var _reduxSaga = __webpack_require__(738);
        var _reduxSaga2 = _interopRequireDefault(_reduxSaga);
        var _reactRedux = __webpack_require__(184);
        var _reduxDevtoolsExtension = __webpack_require__(754);
        var _reducer = __webpack_require__(755);
        var _sagas = __webpack_require__(772);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var sagaMiddleware = (0, _reduxSaga2.default)();
        var reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
        var store = void 0;
        if (reduxDevTools) {
            store = (0, _redux.createStore)(_reducer.reducer, (0, _redux.compose)((0, _redux.applyMiddleware)(sagaMiddleware), reduxDevTools));
        } else {
            store = (0, _redux.createStore)(_reducer.reducer, (0, _redux.applyMiddleware)(sagaMiddleware));
        }
        sagaMiddleware.run(_sagas.watcherSaga);
        document.addEventListener("DOMContentLoaded", function() {
            _reactDom2.default.render(_react2.default.createElement(_reactRedux.Provider, {
                store: store
            }, _react2.default.createElement(_App2.default, null)), document.getElementById("userProjects"));
        });
    },
    735: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _react = __webpack_require__(1);
        var _react2 = _interopRequireDefault(_react);
        var _reactRedux = __webpack_require__(184);
        var _utils = __webpack_require__(736);
        var _const = __webpack_require__(737);
        var c = _interopRequireWildcard(_const);
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var IsRestricted = function IsRestricted(_ref) {
            var _ = _ref._, is_restricted = _ref.is_restricted, onChangeIsRestricted = _ref.onChangeIsRestricted;
            return _react2.default.createElement("span", null, _react2.default.createElement("label", null, _react2.default.createElement("input", {
                id: "is_restricted",
                type: "checkbox",
                checked: is_restricted,
                onChange: onChangeIsRestricted
            }), _("restrict_access")));
        };
        var Project = function Project(_ref2) {
            var _ = _ref2._, project = _ref2.project, user_projects = _ref2.user_projects, is_restricted = _ref2.is_restricted, onChangeProjectSelected = _ref2.onChangeProjectSelected;
            var checked = user_projects && (0, _utils.inArray)(project.id, user_projects), disabled = is_restricted ? "" : "disabled", projectSelected = checked ? " projectSelected" : "", trClassName = disabled + projectSelected, idClassName = disabled + " id";
            return _react2.default.createElement("tr", {
                key: project.id,
                id: project.id,
                onClick: onChangeProjectSelected,
                className: trClassName
            }, _react2.default.createElement("td", null, _react2.default.createElement("input", {
                id: project.id,
                type: "checkbox",
                checked: checked,
                disabled: !is_restricted,
                readOnly: true
            })), _react2.default.createElement("td", {
                className: idClassName
            }, project.id), _react2.default.createElement("td", null, project.title || _("no_title")));
        };
        var SelectAll = function SelectAll(_ref3) {
            var _ = _ref3._, selectAll = _ref3.selectAll, onChangeProjectSelectAll = _ref3.onChangeProjectSelectAll, is_restricted = _ref3.is_restricted;
            var disabled = is_restricted ? false : true, className = "selectAllProjects" + (is_restricted ? "" : " disabled");
            return _react2.default.createElement("div", {
                className: is_restricted ? undefined : "disabled"
            }, _react2.default.createElement("button", {
                onClick: onChangeProjectSelectAll,
                disabled: disabled,
                className: className
            }, selectAll ? _("check_all_projects") : _("uncheck_all_projects")));
        };
        var Error = function Error(_ref4) {
            var _ = _ref4._, error = _ref4.error;
            return error ? _react2.default.createElement("div", null, _("an_error_occured") + error.message) : null;
        };
        var Projects = function Projects(_ref5) {
            var _ = _ref5._, error = _ref5.error, all_projects = _ref5.all_projects, user_projects = _ref5.user_projects, is_restricted = _ref5.is_restricted, selectAll = _ref5.selectAll, onChangeIsRestricted = _ref5.onChangeIsRestricted, onChangeProjectSelectAll = _ref5.onChangeProjectSelectAll, onChangeProjectSelected = _ref5.onChangeProjectSelected;
            var className = is_restricted ? "" : "disabled";
            return _react2.default.createElement("span", null, _react2.default.createElement(Error, {
                _: _,
                error: error
            }), _react2.default.createElement(IsRestricted, {
                _: _,
                is_restricted: is_restricted,
                onChangeIsRestricted: onChangeIsRestricted
            }), _react2.default.createElement(SelectAll, {
                _: _,
                selectAll: selectAll,
                onChangeProjectSelectAll: onChangeProjectSelectAll,
                is_restricted: is_restricted
            }), _react2.default.createElement("table", null, _react2.default.createElement("thead", null, _react2.default.createElement("tr", null, _react2.default.createElement("th", {
                className: className
            }, _("grant_access")), _react2.default.createElement("th", {
                className: className
            }, _("project_id")), _react2.default.createElement("th", {
                className: className
            }, _("project_title")))), _react2.default.createElement("tbody", null, all_projects.map(function(project) {
                return _react2.default.createElement(Project, {
                    _: _,
                    key: project.id,
                    project: project,
                    user_projects: user_projects,
                    is_restricted: is_restricted,
                    onChangeProjectSelected: onChangeProjectSelected
                });
            }))));
        };
        var App = function(_React$Component) {
            _inherits(App, _React$Component);
            function App(props) {
                _classCallCheck(this, App);
                var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
                _this.toggleProjectSelected = _this.toggleProjectSelected.bind(_this);
                _this.toggleIsRestricted = _this.toggleIsRestricted.bind(_this);
                _this.toggleProjectSelectAll = _this.toggleProjectSelectAll.bind(_this);
                _this._ = _this._.bind(_this);
                return _this;
            }
            _createClass(App, [ {
                key: "_",
                value: function _(s) {
                    return this.props.strings && this.props.strings[s];
                }
            }, {
                key: "toggleIsRestricted",
                value: function toggleIsRestricted(e) {
                    e.stopPropagation();
                    this.props.onUpdateIsRestricted(e.target.checked);
                }
            }, {
                key: "toggleProjectSelectAll",
                value: function toggleProjectSelectAll(e) {
                    e.stopPropagation();
                    this.props.onUpdateSelectAll();
                }
            }, {
                key: "toggleProjectSelected",
                value: function toggleProjectSelected(e) {
                    e.stopPropagation();
                    var target = e.currentTarget;
                    if (!target.classList.contains("disabled")) {
                        var id = parseInt(target.getAttribute("id"));
                        this.props.onUpdateProjectSelection(id);
                    }
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    var userId = (0, _utils.dataFromElement)("user-to-restrict").id;
                    this.props.setStore({
                        userId: userId
                    });
                    var strings = (0, _utils.dataFromElement)("user-projects-text");
                    this.props.setStore({
                        strings: strings
                    });
                    this.props.onFetchUserProjects(userId);
                }
            }, {
                key: "render",
                value: function render() {
                    var _props = this.props, is_restricted = _props.is_restricted, selectAll = _props.selectAll, all_projects = _props.all_projects, user_projects = _props.user_projects, error = _props.error;
                    return all_projects ? _react2.default.createElement(Projects, {
                        _: this._,
                        error: error,
                        is_restricted: is_restricted,
                        selectAll: selectAll,
                        all_projects: all_projects,
                        user_projects: user_projects,
                        onChangeIsRestricted: this.toggleIsRestricted,
                        onChangeProjectSelectAll: this.toggleProjectSelectAll,
                        onChangeProjectSelected: this.toggleProjectSelected
                    }) : _react2.default.createElement("div", null, (0, _utils._)("loading"));
                }
            } ]);
            return App;
        }(_react2.default.Component);
        var mapStateToProps = function mapStateToProps(state) {
            var fetching = state.fetching, error = state.error, all_projects = state.all_projects, is_restricted = state.is_restricted, selectAll = state.selectAll, user_projects = state.user_projects, strings = state.strings;
            return {
                fetching: fetching,
                error: error,
                all_projects: all_projects,
                is_restricted: is_restricted,
                selectAll: selectAll,
                user_projects: user_projects,
                strings: strings
            };
        };
        var mapDispatchToProps = function mapDispatchToProps(dispatch) {
            return {
                onFetchUserProjects: function onFetchUserProjects(userId) {
                    return dispatch({
                        type: c.API_GET_INIT,
                        data: {
                            userId: userId
                        }
                    });
                },
                setStore: function setStore(data) {
                    return dispatch({
                        type: c.SET_STORE,
                        data: data
                    });
                },
                onUpdateProjectSelection: function onUpdateProjectSelection(projectId) {
                    return dispatch({
                        type: c.UPDATE_PROJECT_SELECTION,
                        data: {
                            projectId: projectId
                        }
                    });
                },
                onUpdateIsRestricted: function onUpdateIsRestricted(is_restricted) {
                    return dispatch({
                        type: c.UPDATE_IS_RESTRICTED,
                        data: {
                            is_restricted: is_restricted
                        }
                    });
                },
                onUpdateSelectAll: function onUpdateSelectAll() {
                    return dispatch({
                        type: c.UPDATE_SELECT_ALL_PROJECTS
                    });
                }
            };
        };
        exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
    },
    736: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.dataFromElement = exports.inArray = exports.endpoints = undefined;
        var _store = __webpack_require__(304);
        var _store2 = _interopRequireDefault(_store);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var endpoints = exports.endpoints = {
            user_projects_access: function user_projects_access(id) {
                return "/rest/v1/user_projects_access/" + id + "/?format=json";
            }
        };
        var inArray = exports.inArray = function inArray(obj, arr) {
            return arr && arr.indexOf(obj) !== -1;
        };
        var dataFromElement = exports.dataFromElement = function dataFromElement(elementName) {
            return JSON.parse(document.getElementById(elementName).innerHTML);
        };
    },
    737: function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var SET_STORE = exports.SET_STORE = "SET_STORE", API_GET_INIT = exports.API_GET_INIT = "API_GET_INIT", API_GET_SUCCESS = exports.API_GET_SUCCESS = "API_GET_SUCCESS", API_GET_FAILURE = exports.API_GET_FAILURE = "API_GET_FAILURE", API_PUT_INIT = exports.API_PUT_INIT = "API_PUT_INIT", API_PUT_SUCCESS = exports.API_PUT_SUCCESS = "API_PUT_SUCCESS", API_PUT_FAILURE = exports.API_PUT_FAILURE = "API_PUT_FAILURE", UPDATE_PROJECT_SELECTION = exports.UPDATE_PROJECT_SELECTION = "UPDATE_PROJECT_SELECTION", UPDATE_IS_RESTRICTED = exports.UPDATE_IS_RESTRICTED = "UPDATE_IS_RESTRICTED", UPDATE_SELECT_ALL_PROJECTS = exports.UPDATE_SELECT_ALL_PROJECTS = "UPDATE_SELECT_ALL_PROJECTS";
    },
    738: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.utils = exports.effects = exports.detach = exports.CANCEL = exports.delay = exports.throttle = exports.takeLatest = exports.takeEvery = exports.buffers = exports.channel = exports.eventChannel = exports.END = exports.runSaga = undefined;
        var _runSaga = __webpack_require__(739);
        Object.defineProperty(exports, "runSaga", {
            enumerable: true,
            get: function get() {
                return _runSaga.runSaga;
            }
        });
        var _channel = __webpack_require__(747);
        Object.defineProperty(exports, "END", {
            enumerable: true,
            get: function get() {
                return _channel.END;
            }
        });
        Object.defineProperty(exports, "eventChannel", {
            enumerable: true,
            get: function get() {
                return _channel.eventChannel;
            }
        });
        Object.defineProperty(exports, "channel", {
            enumerable: true,
            get: function get() {
                return _channel.channel;
            }
        });
        var _buffers = __webpack_require__(748);
        Object.defineProperty(exports, "buffers", {
            enumerable: true,
            get: function get() {
                return _buffers.buffers;
            }
        });
        var _sagaHelpers = __webpack_require__(744);
        Object.defineProperty(exports, "takeEvery", {
            enumerable: true,
            get: function get() {
                return _sagaHelpers.takeEvery;
            }
        });
        Object.defineProperty(exports, "takeLatest", {
            enumerable: true,
            get: function get() {
                return _sagaHelpers.takeLatest;
            }
        });
        Object.defineProperty(exports, "throttle", {
            enumerable: true,
            get: function get() {
                return _sagaHelpers.throttle;
            }
        });
        var _utils = __webpack_require__(740);
        Object.defineProperty(exports, "delay", {
            enumerable: true,
            get: function get() {
                return _utils.delay;
            }
        });
        Object.defineProperty(exports, "CANCEL", {
            enumerable: true,
            get: function get() {
                return _utils.CANCEL;
            }
        });
        var _io = __webpack_require__(743);
        Object.defineProperty(exports, "detach", {
            enumerable: true,
            get: function get() {
                return _io.detach;
            }
        });
        var _middleware = __webpack_require__(751);
        var _middleware2 = _interopRequireDefault(_middleware);
        var _effects = __webpack_require__(752);
        var effects = _interopRequireWildcard(_effects);
        var _utils2 = __webpack_require__(753);
        var utils = _interopRequireWildcard(_utils2);
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = _middleware2.default;
        exports.effects = effects;
        exports.utils = utils;
    },
    739: function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            exports.runSaga = runSaga;
            var _utils = __webpack_require__(740);
            var _proc = __webpack_require__(741);
            var _proc2 = _interopRequireDefault(_proc);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var RUN_SAGA_SIGNATURE = "runSaga(storeInterface, saga, ...args)";
            var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
            function runSaga(storeInterface, saga) {
                for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    args[_key - 2] = arguments[_key];
                }
                var iterator = void 0;
                if (_utils.is.iterator(storeInterface)) {
                    if (process.env.NODE_ENV === "development") {
                        (0, _utils.log)("warn", "runSaga(iterator, storeInterface) has been deprecated in favor of " + RUN_SAGA_SIGNATURE);
                    }
                    iterator = storeInterface;
                    storeInterface = saga;
                } else {
                    (0, _utils.check)(saga, _utils.is.func, NON_GENERATOR_ERR);
                    iterator = saga.apply(undefined, args);
                    (0, _utils.check)(iterator, _utils.is.iterator, NON_GENERATOR_ERR);
                }
                var _storeInterface = storeInterface, subscribe = _storeInterface.subscribe, dispatch = _storeInterface.dispatch, getState = _storeInterface.getState, context = _storeInterface.context, sagaMonitor = _storeInterface.sagaMonitor, logger = _storeInterface.logger, onError = _storeInterface.onError;
                var effectId = (0, _utils.uid)();
                if (sagaMonitor) {
                    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _utils.noop;
                    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _utils.noop;
                    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _utils.noop;
                    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _utils.noop;
                    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _utils.noop;
                    sagaMonitor.effectTriggered({
                        effectId: effectId,
                        root: true,
                        parentEffectId: 0,
                        effect: {
                            root: true,
                            saga: saga,
                            args: args
                        }
                    });
                }
                var task = (0, _proc2.default)(iterator, subscribe, (0, _utils.wrapSagaDispatch)(dispatch), getState, context, {
                    sagaMonitor: sagaMonitor,
                    logger: logger,
                    onError: onError
                }, effectId, saga.name);
                if (sagaMonitor) {
                    sagaMonitor.effectResolved(effectId, task);
                }
                return task;
            }
        }).call(exports, __webpack_require__(3));
    },
    740: function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.check = check;
            exports.hasOwn = hasOwn;
            exports.remove = remove;
            exports.deferred = deferred;
            exports.arrayOfDeffered = arrayOfDeffered;
            exports.delay = delay;
            exports.createMockTask = createMockTask;
            exports.autoInc = autoInc;
            exports.makeIterator = makeIterator;
            exports.log = log;
            exports.deprecate = deprecate;
            var sym = exports.sym = function sym(id) {
                return "@@redux-saga/" + id;
            };
            var TASK = exports.TASK = sym("TASK");
            var HELPER = exports.HELPER = sym("HELPER");
            var MATCH = exports.MATCH = sym("MATCH");
            var CANCEL = exports.CANCEL = sym("CANCEL_PROMISE");
            var SAGA_ACTION = exports.SAGA_ACTION = sym("SAGA_ACTION");
            var SELF_CANCELLATION = exports.SELF_CANCELLATION = sym("SELF_CANCELLATION");
            var konst = exports.konst = function konst(v) {
                return function() {
                    return v;
                };
            };
            var kTrue = exports.kTrue = konst(true);
            var kFalse = exports.kFalse = konst(false);
            var noop = exports.noop = function noop() {};
            var ident = exports.ident = function ident(v) {
                return v;
            };
            function check(value, predicate, error) {
                if (!predicate(value)) {
                    log("error", "uncaught at check", error);
                    throw new Error(error);
                }
            }
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            function hasOwn(object, property) {
                return is.notUndef(object) && hasOwnProperty.call(object, property);
            }
            var is = exports.is = {
                undef: function undef(v) {
                    return v === null || v === undefined;
                },
                notUndef: function notUndef(v) {
                    return v !== null && v !== undefined;
                },
                func: function func(f) {
                    return typeof f === "function";
                },
                number: function number(n) {
                    return typeof n === "number";
                },
                string: function string(s) {
                    return typeof s === "string";
                },
                array: Array.isArray,
                object: function object(obj) {
                    return obj && !is.array(obj) && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object";
                },
                promise: function promise(p) {
                    return p && is.func(p.then);
                },
                iterator: function iterator(it) {
                    return it && is.func(it.next) && is.func(it.throw);
                },
                iterable: function iterable(it) {
                    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
                },
                task: function task(t) {
                    return t && t[TASK];
                },
                observable: function observable(ob) {
                    return ob && is.func(ob.subscribe);
                },
                buffer: function buffer(buf) {
                    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
                },
                pattern: function pattern(pat) {
                    return pat && (is.string(pat) || (typeof pat === "undefined" ? "undefined" : _typeof(pat)) === "symbol" || is.func(pat) || is.array(pat));
                },
                channel: function channel(ch) {
                    return ch && is.func(ch.take) && is.func(ch.close);
                },
                helper: function helper(it) {
                    return it && it[HELPER];
                },
                stringableFunc: function stringableFunc(f) {
                    return is.func(f) && hasOwn(f, "toString");
                }
            };
            var object = exports.object = {
                assign: function assign(target, source) {
                    for (var i in source) {
                        if (hasOwn(source, i)) {
                            target[i] = source[i];
                        }
                    }
                }
            };
            function remove(array, item) {
                var index = array.indexOf(item);
                if (index >= 0) {
                    array.splice(index, 1);
                }
            }
            var array = exports.array = {
                from: function from(obj) {
                    var arr = Array(obj.length);
                    for (var i in obj) {
                        if (hasOwn(obj, i)) {
                            arr[i] = obj[i];
                        }
                    }
                    return arr;
                }
            };
            function deferred() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var def = _extends({}, props);
                var promise = new Promise(function(resolve, reject) {
                    def.resolve = resolve;
                    def.reject = reject;
                });
                def.promise = promise;
                return def;
            }
            function arrayOfDeffered(length) {
                var arr = [];
                for (var i = 0; i < length; i++) {
                    arr.push(deferred());
                }
                return arr;
            }
            function delay(ms) {
                var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                var timeoutId = void 0;
                var promise = new Promise(function(resolve) {
                    timeoutId = setTimeout(function() {
                        return resolve(val);
                    }, ms);
                });
                promise[CANCEL] = function() {
                    return clearTimeout(timeoutId);
                };
                return promise;
            }
            function createMockTask() {
                var _ref;
                var running = true;
                var _result = void 0, _error = void 0;
                return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
                    return running;
                }, _ref.result = function result() {
                    return _result;
                }, _ref.error = function error() {
                    return _error;
                }, _ref.setRunning = function setRunning(b) {
                    return running = b;
                }, _ref.setResult = function setResult(r) {
                    return _result = r;
                }, _ref.setError = function setError(e) {
                    return _error = e;
                }, _ref;
            }
            function autoInc() {
                var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return function() {
                    return ++seed;
                };
            }
            var uid = exports.uid = autoInc();
            var kThrow = function kThrow(err) {
                throw err;
            };
            var kReturn = function kReturn(value) {
                return {
                    value: value,
                    done: true
                };
            };
            function makeIterator(next) {
                var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
                var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                var isHelper = arguments[3];
                var iterator = {
                    name: name,
                    next: next,
                    throw: thro,
                    return: kReturn
                };
                if (isHelper) {
                    iterator[HELPER] = true;
                }
                if (typeof Symbol !== "undefined") {
                    iterator[Symbol.iterator] = function() {
                        return iterator;
                    };
                }
                return iterator;
            }
            function log(level, message) {
                var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                if (typeof window === "undefined") {
                    console.log("redux-saga " + level + ": " + message + "\n" + (error && error.stack || error));
                } else {
                    console[level](message, error);
                }
            }
            function deprecate(fn, deprecationWarning) {
                return function() {
                    if (process.env.NODE_ENV === "development") log("warn", deprecationWarning);
                    return fn.apply(undefined, arguments);
                };
            }
            var updateIncentive = exports.updateIncentive = function updateIncentive(deprecated, preferred) {
                return deprecated + " has been deprecated in favor of " + preferred + ", please update your code";
            };
            var internalErr = exports.internalErr = function internalErr(err) {
                return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
            };
            var createSetContextWarning = exports.createSetContextWarning = function createSetContextWarning(ctx, props) {
                return (ctx ? ctx + "." : "") + "setContext(props): argument " + props + " is not a plain object";
            };
            var wrapSagaDispatch = exports.wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
                return function(action) {
                    return dispatch(Object.defineProperty(action, SAGA_ACTION, {
                        value: true
                    }));
                };
            };
            var cloneableGenerator = exports.cloneableGenerator = function cloneableGenerator(generatorFunc) {
                return function() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }
                    var history = [];
                    var gen = generatorFunc.apply(undefined, args);
                    return {
                        next: function next(arg) {
                            history.push(arg);
                            return gen.next(arg);
                        },
                        clone: function clone() {
                            var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
                            history.forEach(function(arg) {
                                return clonedGen.next(arg);
                            });
                            return clonedGen;
                        },
                        return: function _return(value) {
                            return gen.return(value);
                        },
                        throw: function _throw(exception) {
                            return gen.throw(exception);
                        }
                    };
                };
            };
        }).call(exports, __webpack_require__(3));
    },
    741: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.TASK_CANCEL = exports.CHANNEL_END = exports.NOT_ITERATOR_ERROR = undefined;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        exports.default = proc;
        var _utils = __webpack_require__(740);
        var _scheduler = __webpack_require__(742);
        var _io = __webpack_require__(743);
        var _channel = __webpack_require__(747);
        var _buffers = __webpack_require__(748);
        function _defineEnumerableProperties(obj, descs) {
            for (var key in descs) {
                var desc = descs[key];
                desc.configurable = desc.enumerable = true;
                if ("value" in desc) desc.writable = true;
                Object.defineProperty(obj, key, desc);
            }
            return obj;
        }
        var NOT_ITERATOR_ERROR = exports.NOT_ITERATOR_ERROR = "proc first argument (Saga function result) must be an iterator";
        var CHANNEL_END = exports.CHANNEL_END = {
            toString: function toString() {
                return "@@redux-saga/CHANNEL_END";
            }
        };
        var TASK_CANCEL = exports.TASK_CANCEL = {
            toString: function toString() {
                return "@@redux-saga/TASK_CANCEL";
            }
        };
        var matchers = {
            wildcard: function wildcard() {
                return _utils.kTrue;
            },
            default: function _default(pattern) {
                return (typeof pattern === "undefined" ? "undefined" : _typeof(pattern)) === "symbol" ? function(input) {
                    return input.type === pattern;
                } : function(input) {
                    return input.type === String(pattern);
                };
            },
            array: function array(patterns) {
                return function(input) {
                    return patterns.some(function(p) {
                        return matcher(p)(input);
                    });
                };
            },
            predicate: function predicate(_predicate) {
                return function(input) {
                    return _predicate(input);
                };
            }
        };
        function matcher(pattern) {
            return (pattern === "*" ? matchers.wildcard : _utils.is.array(pattern) ? matchers.array : _utils.is.stringableFunc(pattern) ? matchers.default : _utils.is.func(pattern) ? matchers.predicate : matchers.default)(pattern);
        }
        function forkQueue(name, mainTask, cb) {
            var tasks = [], result = void 0, completed = false;
            addTask(mainTask);
            function abort(err) {
                cancelAll();
                cb(err, true);
            }
            function addTask(task) {
                tasks.push(task);
                task.cont = function(res, isErr) {
                    if (completed) {
                        return;
                    }
                    (0, _utils.remove)(tasks, task);
                    task.cont = _utils.noop;
                    if (isErr) {
                        abort(res);
                    } else {
                        if (task === mainTask) {
                            result = res;
                        }
                        if (!tasks.length) {
                            completed = true;
                            cb(result);
                        }
                    }
                };
            }
            function cancelAll() {
                if (completed) {
                    return;
                }
                completed = true;
                tasks.forEach(function(t) {
                    t.cont = _utils.noop;
                    t.cancel();
                });
                tasks = [];
            }
            return {
                addTask: addTask,
                cancelAll: cancelAll,
                abort: abort,
                getTasks: function getTasks() {
                    return tasks;
                },
                taskNames: function taskNames() {
                    return tasks.map(function(t) {
                        return t.name;
                    });
                }
            };
        }
        function createTaskIterator(_ref) {
            var context = _ref.context, fn = _ref.fn, args = _ref.args;
            if (_utils.is.iterator(fn)) {
                return fn;
            }
            var result = void 0, error = void 0;
            try {
                result = fn.apply(context, args);
            } catch (err) {
                error = err;
            }
            if (_utils.is.iterator(result)) {
                return result;
            }
            return error ? (0, _utils.makeIterator)(function() {
                throw error;
            }) : (0, _utils.makeIterator)(function() {
                var pc = void 0;
                var eff = {
                    done: false,
                    value: result
                };
                var ret = function ret(value) {
                    return {
                        done: true,
                        value: value
                    };
                };
                return function(arg) {
                    if (!pc) {
                        pc = true;
                        return eff;
                    } else {
                        return ret(arg);
                    }
                };
            }());
        }
        var wrapHelper = function wrapHelper(helper) {
            return {
                fn: helper
            };
        };
        function proc(iterator) {
            var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function() {
                return _utils.noop;
            };
            var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.noop;
            var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils.noop;
            var parentContext = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
            var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
            var parentEffectId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            var name = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "anonymous";
            var cont = arguments[8];
            (0, _utils.check)(iterator, _utils.is.iterator, NOT_ITERATOR_ERROR);
            var effectsString = "[...effects]";
            var runParallelEffect = (0, _utils.deprecate)(runAllEffect, (0, _utils.updateIncentive)(effectsString, "all(" + effectsString + ")"));
            var sagaMonitor = options.sagaMonitor, logger = options.logger, onError = options.onError;
            var log = logger || _utils.log;
            var logError = function logError(err) {
                var message = err.sagaStack;
                if (!message && err.stack) {
                    message = err.stack.split("\n")[0].indexOf(err.message) !== -1 ? err.stack : "Error: " + err.message + "\n" + err.stack;
                }
                log("error", "uncaught at " + name, message || err.message || err);
            };
            var stdChannel = (0, _channel.stdChannel)(subscribe);
            var taskContext = Object.create(parentContext);
            next.cancel = _utils.noop;
            var task = newTask(parentEffectId, name, iterator, cont);
            var mainTask = {
                name: name,
                cancel: cancelMain,
                isRunning: true
            };
            var taskQueue = forkQueue(name, mainTask, end);
            function cancelMain() {
                if (mainTask.isRunning && !mainTask.isCancelled) {
                    mainTask.isCancelled = true;
                    next(TASK_CANCEL);
                }
            }
            function cancel() {
                if (iterator._isRunning && !iterator._isCancelled) {
                    iterator._isCancelled = true;
                    taskQueue.cancelAll();
                    end(TASK_CANCEL);
                }
            }
            cont && (cont.cancel = cancel);
            iterator._isRunning = true;
            next();
            return task;
            function next(arg, isErr) {
                if (!mainTask.isRunning) {
                    throw new Error("Trying to resume an already finished generator");
                }
                try {
                    var result = void 0;
                    if (isErr) {
                        result = iterator.throw(arg);
                    } else if (arg === TASK_CANCEL) {
                        mainTask.isCancelled = true;
                        next.cancel();
                        result = _utils.is.func(iterator.return) ? iterator.return(TASK_CANCEL) : {
                            done: true,
                            value: TASK_CANCEL
                        };
                    } else if (arg === CHANNEL_END) {
                        result = _utils.is.func(iterator.return) ? iterator.return() : {
                            done: true
                        };
                    } else {
                        result = iterator.next(arg);
                    }
                    if (!result.done) {
                        runEffect(result.value, parentEffectId, "", next);
                    } else {
                        mainTask.isMainRunning = false;
                        mainTask.cont && mainTask.cont(result.value);
                    }
                } catch (error) {
                    if (mainTask.isCancelled) {
                        logError(error);
                    }
                    mainTask.isMainRunning = false;
                    mainTask.cont(error, true);
                }
            }
            function end(result, isErr) {
                iterator._isRunning = false;
                stdChannel.close();
                if (!isErr) {
                    iterator._result = result;
                    iterator._deferredEnd && iterator._deferredEnd.resolve(result);
                } else {
                    if (result instanceof Error) {
                        Object.defineProperty(result, "sagaStack", {
                            value: "at " + name + " \n " + (result.sagaStack || result.stack),
                            configurable: true
                        });
                    }
                    if (!task.cont) {
                        if (result instanceof Error && onError) {
                            onError(result);
                        } else {
                            logError(result);
                        }
                    }
                    iterator._error = result;
                    iterator._isAborted = true;
                    iterator._deferredEnd && iterator._deferredEnd.reject(result);
                }
                task.cont && task.cont(result, isErr);
                task.joiners.forEach(function(j) {
                    return j.cb(result, isErr);
                });
                task.joiners = null;
            }
            function runEffect(effect, parentEffectId) {
                var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                var cb = arguments[3];
                var effectId = (0, _utils.uid)();
                sagaMonitor && sagaMonitor.effectTriggered({
                    effectId: effectId,
                    parentEffectId: parentEffectId,
                    label: label,
                    effect: effect
                });
                var effectSettled = void 0;
                function currCb(res, isErr) {
                    if (effectSettled) {
                        return;
                    }
                    effectSettled = true;
                    cb.cancel = _utils.noop;
                    if (sagaMonitor) {
                        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
                    }
                    cb(res, isErr);
                }
                currCb.cancel = _utils.noop;
                cb.cancel = function() {
                    if (effectSettled) {
                        return;
                    }
                    effectSettled = true;
                    try {
                        currCb.cancel();
                    } catch (err) {
                        logError(err);
                    }
                    currCb.cancel = _utils.noop;
                    sagaMonitor && sagaMonitor.effectCancelled(effectId);
                };
                var data = void 0;
                return _utils.is.promise(effect) ? resolvePromise(effect, currCb) : _utils.is.helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : _utils.is.iterator(effect) ? resolveIterator(effect, effectId, name, currCb) : _utils.is.array(effect) ? runParallelEffect(effect, effectId, currCb) : (data = _io.asEffect.take(effect)) ? runTakeEffect(data, currCb) : (data = _io.asEffect.put(effect)) ? runPutEffect(data, currCb) : (data = _io.asEffect.all(effect)) ? runAllEffect(data, effectId, currCb) : (data = _io.asEffect.race(effect)) ? runRaceEffect(data, effectId, currCb) : (data = _io.asEffect.call(effect)) ? runCallEffect(data, effectId, currCb) : (data = _io.asEffect.cps(effect)) ? runCPSEffect(data, currCb) : (data = _io.asEffect.fork(effect)) ? runForkEffect(data, effectId, currCb) : (data = _io.asEffect.join(effect)) ? runJoinEffect(data, currCb) : (data = _io.asEffect.cancel(effect)) ? runCancelEffect(data, currCb) : (data = _io.asEffect.select(effect)) ? runSelectEffect(data, currCb) : (data = _io.asEffect.actionChannel(effect)) ? runChannelEffect(data, currCb) : (data = _io.asEffect.flush(effect)) ? runFlushEffect(data, currCb) : (data = _io.asEffect.cancelled(effect)) ? runCancelledEffect(data, currCb) : (data = _io.asEffect.getContext(effect)) ? runGetContextEffect(data, currCb) : (data = _io.asEffect.setContext(effect)) ? runSetContextEffect(data, currCb) : currCb(effect);
            }
            function resolvePromise(promise, cb) {
                var cancelPromise = promise[_utils.CANCEL];
                if (_utils.is.func(cancelPromise)) {
                    cb.cancel = cancelPromise;
                } else if (_utils.is.func(promise.abort)) {
                    cb.cancel = function() {
                        return promise.abort();
                    };
                }
                promise.then(cb, function(error) {
                    return cb(error, true);
                });
            }
            function resolveIterator(iterator, effectId, name, cb) {
                proc(iterator, subscribe, dispatch, getState, taskContext, options, effectId, name, cb);
            }
            function runTakeEffect(_ref2, cb) {
                var channel = _ref2.channel, pattern = _ref2.pattern, maybe = _ref2.maybe;
                channel = channel || stdChannel;
                var takeCb = function takeCb(inp) {
                    return inp instanceof Error ? cb(inp, true) : (0, _channel.isEnd)(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
                };
                try {
                    channel.take(takeCb, matcher(pattern));
                } catch (err) {
                    return cb(err, true);
                }
                cb.cancel = takeCb.cancel;
            }
            function runPutEffect(_ref3, cb) {
                var channel = _ref3.channel, action = _ref3.action, resolve = _ref3.resolve;
                (0, _scheduler.asap)(function() {
                    var result = void 0;
                    try {
                        result = (channel ? channel.put : dispatch)(action);
                    } catch (error) {
                        if (channel || resolve) return cb(error, true);
                        logError(error);
                    }
                    if (resolve && _utils.is.promise(result)) {
                        resolvePromise(result, cb);
                    } else {
                        return cb(result);
                    }
                });
            }
            function runCallEffect(_ref4, effectId, cb) {
                var context = _ref4.context, fn = _ref4.fn, args = _ref4.args;
                var result = void 0;
                try {
                    result = fn.apply(context, args);
                } catch (error) {
                    return cb(error, true);
                }
                return _utils.is.promise(result) ? resolvePromise(result, cb) : _utils.is.iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
            }
            function runCPSEffect(_ref5, cb) {
                var context = _ref5.context, fn = _ref5.fn, args = _ref5.args;
                try {
                    var cpsCb = function cpsCb(err, res) {
                        return _utils.is.undef(err) ? cb(res) : cb(err, true);
                    };
                    fn.apply(context, args.concat(cpsCb));
                    if (cpsCb.cancel) {
                        cb.cancel = function() {
                            return cpsCb.cancel();
                        };
                    }
                } catch (error) {
                    return cb(error, true);
                }
            }
            function runForkEffect(_ref6, effectId, cb) {
                var context = _ref6.context, fn = _ref6.fn, args = _ref6.args, detached = _ref6.detached;
                var taskIterator = createTaskIterator({
                    context: context,
                    fn: fn,
                    args: args
                });
                try {
                    (0, _scheduler.suspend)();
                    var _task = proc(taskIterator, subscribe, dispatch, getState, taskContext, options, effectId, fn.name, detached ? null : _utils.noop);
                    if (detached) {
                        cb(_task);
                    } else {
                        if (taskIterator._isRunning) {
                            taskQueue.addTask(_task);
                            cb(_task);
                        } else if (taskIterator._error) {
                            taskQueue.abort(taskIterator._error);
                        } else {
                            cb(_task);
                        }
                    }
                } finally {
                    (0, _scheduler.flush)();
                }
            }
            function runJoinEffect(t, cb) {
                if (t.isRunning()) {
                    var joiner = {
                        task: task,
                        cb: cb
                    };
                    cb.cancel = function() {
                        return (0, _utils.remove)(t.joiners, joiner);
                    };
                    t.joiners.push(joiner);
                } else {
                    t.isAborted() ? cb(t.error(), true) : cb(t.result());
                }
            }
            function runCancelEffect(taskToCancel, cb) {
                if (taskToCancel === _utils.SELF_CANCELLATION) {
                    taskToCancel = task;
                }
                if (taskToCancel.isRunning()) {
                    taskToCancel.cancel();
                }
                cb();
            }
            function runAllEffect(effects, effectId, cb) {
                var keys = Object.keys(effects);
                if (!keys.length) {
                    return cb(_utils.is.array(effects) ? [] : {});
                }
                var completedCount = 0;
                var completed = void 0;
                var results = {};
                var childCbs = {};
                function checkEffectEnd() {
                    if (completedCount === keys.length) {
                        completed = true;
                        cb(_utils.is.array(effects) ? _utils.array.from(_extends({}, results, {
                            length: keys.length
                        })) : results);
                    }
                }
                keys.forEach(function(key) {
                    var chCbAtKey = function chCbAtKey(res, isErr) {
                        if (completed) {
                            return;
                        }
                        if (isErr || (0, _channel.isEnd)(res) || res === CHANNEL_END || res === TASK_CANCEL) {
                            cb.cancel();
                            cb(res, isErr);
                        } else {
                            results[key] = res;
                            completedCount++;
                            checkEffectEnd();
                        }
                    };
                    chCbAtKey.cancel = _utils.noop;
                    childCbs[key] = chCbAtKey;
                });
                cb.cancel = function() {
                    if (!completed) {
                        completed = true;
                        keys.forEach(function(key) {
                            return childCbs[key].cancel();
                        });
                    }
                };
                keys.forEach(function(key) {
                    return runEffect(effects[key], effectId, key, childCbs[key]);
                });
            }
            function runRaceEffect(effects, effectId, cb) {
                var completed = void 0;
                var keys = Object.keys(effects);
                var childCbs = {};
                keys.forEach(function(key) {
                    var chCbAtKey = function chCbAtKey(res, isErr) {
                        if (completed) {
                            return;
                        }
                        if (isErr) {
                            cb.cancel();
                            cb(res, true);
                        } else if (!(0, _channel.isEnd)(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
                            var _response;
                            cb.cancel();
                            completed = true;
                            var response = (_response = {}, _response[key] = res, _response);
                            cb(_utils.is.array(effects) ? [].slice.call(_extends({}, response, {
                                length: keys.length
                            })) : response);
                        }
                    };
                    chCbAtKey.cancel = _utils.noop;
                    childCbs[key] = chCbAtKey;
                });
                cb.cancel = function() {
                    if (!completed) {
                        completed = true;
                        keys.forEach(function(key) {
                            return childCbs[key].cancel();
                        });
                    }
                };
                keys.forEach(function(key) {
                    if (completed) {
                        return;
                    }
                    runEffect(effects[key], effectId, key, childCbs[key]);
                });
            }
            function runSelectEffect(_ref7, cb) {
                var selector = _ref7.selector, args = _ref7.args;
                try {
                    var state = selector.apply(undefined, [ getState() ].concat(args));
                    cb(state);
                } catch (error) {
                    cb(error, true);
                }
            }
            function runChannelEffect(_ref8, cb) {
                var pattern = _ref8.pattern, buffer = _ref8.buffer;
                var match = matcher(pattern);
                match.pattern = pattern;
                cb((0, _channel.eventChannel)(subscribe, buffer || _buffers.buffers.fixed(), match));
            }
            function runCancelledEffect(data, cb) {
                cb(!!mainTask.isCancelled);
            }
            function runFlushEffect(channel, cb) {
                channel.flush(cb);
            }
            function runGetContextEffect(prop, cb) {
                cb(taskContext[prop]);
            }
            function runSetContextEffect(props, cb) {
                _utils.object.assign(taskContext, props);
                cb();
            }
            function newTask(id, name, iterator, cont) {
                var _done, _ref9, _mutatorMap;
                iterator._deferredEnd = null;
                return _ref9 = {}, _ref9[_utils.TASK] = true, _ref9.id = id, _ref9.name = name, 
                _done = "done", _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, 
                _mutatorMap[_done].get = function() {
                    if (iterator._deferredEnd) {
                        return iterator._deferredEnd.promise;
                    } else {
                        var def = (0, _utils.deferred)();
                        iterator._deferredEnd = def;
                        if (!iterator._isRunning) {
                            iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
                        }
                        return def.promise;
                    }
                }, _ref9.cont = cont, _ref9.joiners = [], _ref9.cancel = cancel, _ref9.isRunning = function isRunning() {
                    return iterator._isRunning;
                }, _ref9.isCancelled = function isCancelled() {
                    return iterator._isCancelled;
                }, _ref9.isAborted = function isAborted() {
                    return iterator._isAborted;
                }, _ref9.result = function result() {
                    return iterator._result;
                }, _ref9.error = function error() {
                    return iterator._error;
                }, _ref9.setContext = function setContext(props) {
                    (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)("task", props));
                    _utils.object.assign(taskContext, props);
                }, _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
            }
        }
    },
    742: function(module, exports) {
        "use strict";
        exports.__esModule = true;
        exports.asap = asap;
        exports.suspend = suspend;
        exports.flush = flush;
        var queue = [];
        var semaphore = 0;
        function exec(task) {
            try {
                suspend();
                task();
            } finally {
                release();
            }
        }
        function asap(task) {
            queue.push(task);
            if (!semaphore) {
                suspend();
                flush();
            }
        }
        function suspend() {
            semaphore++;
        }
        function release() {
            semaphore--;
        }
        function flush() {
            release();
            var task = void 0;
            while (!semaphore && (task = queue.shift()) !== undefined) {
                exec(task);
            }
        }
    },
    743: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.asEffect = exports.takem = exports.detach = undefined;
        exports.take = take;
        exports.put = put;
        exports.all = all;
        exports.race = race;
        exports.call = call;
        exports.apply = apply;
        exports.cps = cps;
        exports.fork = fork;
        exports.spawn = spawn;
        exports.join = join;
        exports.cancel = cancel;
        exports.select = select;
        exports.actionChannel = actionChannel;
        exports.cancelled = cancelled;
        exports.flush = flush;
        exports.getContext = getContext;
        exports.setContext = setContext;
        exports.takeEvery = takeEvery;
        exports.takeLatest = takeLatest;
        exports.throttle = throttle;
        var _utils = __webpack_require__(740);
        var _sagaHelpers = __webpack_require__(744);
        var IO = (0, _utils.sym)("IO");
        var TAKE = "TAKE";
        var PUT = "PUT";
        var ALL = "ALL";
        var RACE = "RACE";
        var CALL = "CALL";
        var CPS = "CPS";
        var FORK = "FORK";
        var JOIN = "JOIN";
        var CANCEL = "CANCEL";
        var SELECT = "SELECT";
        var ACTION_CHANNEL = "ACTION_CHANNEL";
        var CANCELLED = "CANCELLED";
        var FLUSH = "FLUSH";
        var GET_CONTEXT = "GET_CONTEXT";
        var SET_CONTEXT = "SET_CONTEXT";
        var TEST_HINT = "\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)";
        var effect = function effect(type, payload) {
            var _ref;
            return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
        };
        var detach = exports.detach = function detach(eff) {
            (0, _utils.check)(asEffect.fork(eff), _utils.is.object, "detach(eff): argument must be a fork effect");
            eff[FORK].detached = true;
            return eff;
        };
        function take() {
            var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
            if (arguments.length) {
                (0, _utils.check)(arguments[0], _utils.is.notUndef, "take(patternOrChannel): patternOrChannel is undefined");
            }
            if (_utils.is.pattern(patternOrChannel)) {
                return effect(TAKE, {
                    pattern: patternOrChannel
                });
            }
            if (_utils.is.channel(patternOrChannel)) {
                return effect(TAKE, {
                    channel: patternOrChannel
                });
            }
            throw new Error("take(patternOrChannel): argument " + String(patternOrChannel) + " is not valid channel or a valid pattern");
        }
        take.maybe = function() {
            var eff = take.apply(undefined, arguments);
            eff[TAKE].maybe = true;
            return eff;
        };
        var takem = exports.takem = (0, _utils.deprecate)(take.maybe, (0, _utils.updateIncentive)("takem", "take.maybe"));
        function put(channel, action) {
            if (arguments.length > 1) {
                (0, _utils.check)(channel, _utils.is.notUndef, "put(channel, action): argument channel is undefined");
                (0, _utils.check)(channel, _utils.is.channel, "put(channel, action): argument " + channel + " is not a valid channel");
                (0, _utils.check)(action, _utils.is.notUndef, "put(channel, action): argument action is undefined");
            } else {
                (0, _utils.check)(channel, _utils.is.notUndef, "put(action): argument action is undefined");
                action = channel;
                channel = null;
            }
            return effect(PUT, {
                channel: channel,
                action: action
            });
        }
        put.resolve = function() {
            var eff = put.apply(undefined, arguments);
            eff[PUT].resolve = true;
            return eff;
        };
        put.sync = (0, _utils.deprecate)(put.resolve, (0, _utils.updateIncentive)("put.sync", "put.resolve"));
        function all(effects) {
            return effect(ALL, effects);
        }
        function race(effects) {
            return effect(RACE, effects);
        }
        function getFnCallDesc(meth, fn, args) {
            (0, _utils.check)(fn, _utils.is.notUndef, meth + ": argument fn is undefined");
            var context = null;
            if (_utils.is.array(fn)) {
                var _fn = fn;
                context = _fn[0];
                fn = _fn[1];
            } else if (fn.fn) {
                var _fn2 = fn;
                context = _fn2.context;
                fn = _fn2.fn;
            }
            if (context && _utils.is.string(fn) && _utils.is.func(context[fn])) {
                fn = context[fn];
            }
            (0, _utils.check)(fn, _utils.is.func, meth + ": argument " + fn + " is not a function");
            return {
                context: context,
                fn: fn,
                args: args
            };
        }
        function call(fn) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }
            return effect(CALL, getFnCallDesc("call", fn, args));
        }
        function apply(context, fn) {
            var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            return effect(CALL, getFnCallDesc("apply", {
                context: context,
                fn: fn
            }, args));
        }
        function cps(fn) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }
            return effect(CPS, getFnCallDesc("cps", fn, args));
        }
        function fork(fn) {
            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
            }
            return effect(FORK, getFnCallDesc("fork", fn, args));
        }
        function spawn(fn) {
            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = arguments[_key4];
            }
            return detach(fork.apply(undefined, [ fn ].concat(args)));
        }
        function join() {
            for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                tasks[_key5] = arguments[_key5];
            }
            if (tasks.length > 1) {
                return all(tasks.map(function(t) {
                    return join(t);
                }));
            }
            var task = tasks[0];
            (0, _utils.check)(task, _utils.is.notUndef, "join(task): argument task is undefined");
            (0, _utils.check)(task, _utils.is.task, "join(task): argument " + task + " is not a valid Task object " + TEST_HINT);
            return effect(JOIN, task);
        }
        function cancel() {
            for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                tasks[_key6] = arguments[_key6];
            }
            if (tasks.length > 1) {
                return all(tasks.map(function(t) {
                    return cancel(t);
                }));
            }
            var task = tasks[0];
            if (tasks.length === 1) {
                (0, _utils.check)(task, _utils.is.notUndef, "cancel(task): argument task is undefined");
                (0, _utils.check)(task, _utils.is.task, "cancel(task): argument " + task + " is not a valid Task object " + TEST_HINT);
            }
            return effect(CANCEL, task || _utils.SELF_CANCELLATION);
        }
        function select(selector) {
            for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
                args[_key7 - 1] = arguments[_key7];
            }
            if (arguments.length === 0) {
                selector = _utils.ident;
            } else {
                (0, _utils.check)(selector, _utils.is.notUndef, "select(selector,[...]): argument selector is undefined");
                (0, _utils.check)(selector, _utils.is.func, "select(selector,[...]): argument " + selector + " is not a function");
            }
            return effect(SELECT, {
                selector: selector,
                args: args
            });
        }
        function actionChannel(pattern, buffer) {
            (0, _utils.check)(pattern, _utils.is.notUndef, "actionChannel(pattern,...): argument pattern is undefined");
            if (arguments.length > 1) {
                (0, _utils.check)(buffer, _utils.is.notUndef, "actionChannel(pattern, buffer): argument buffer is undefined");
                (0, _utils.check)(buffer, _utils.is.buffer, "actionChannel(pattern, buffer): argument " + buffer + " is not a valid buffer");
            }
            return effect(ACTION_CHANNEL, {
                pattern: pattern,
                buffer: buffer
            });
        }
        function cancelled() {
            return effect(CANCELLED, {});
        }
        function flush(channel) {
            (0, _utils.check)(channel, _utils.is.channel, "flush(channel): argument " + channel + " is not valid channel");
            return effect(FLUSH, channel);
        }
        function getContext(prop) {
            (0, _utils.check)(prop, _utils.is.string, "getContext(prop): argument " + prop + " is not a string");
            return effect(GET_CONTEXT, prop);
        }
        function setContext(props) {
            (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)(null, props));
            return effect(SET_CONTEXT, props);
        }
        function takeEvery(patternOrChannel, worker) {
            for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
                args[_key8 - 2] = arguments[_key8];
            }
            return fork.apply(undefined, [ _sagaHelpers.takeEveryHelper, patternOrChannel, worker ].concat(args));
        }
        function takeLatest(patternOrChannel, worker) {
            for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
                args[_key9 - 2] = arguments[_key9];
            }
            return fork.apply(undefined, [ _sagaHelpers.takeLatestHelper, patternOrChannel, worker ].concat(args));
        }
        function throttle(ms, pattern, worker) {
            for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
                args[_key10 - 3] = arguments[_key10];
            }
            return fork.apply(undefined, [ _sagaHelpers.throttleHelper, ms, pattern, worker ].concat(args));
        }
        var createAsEffectType = function createAsEffectType(type) {
            return function(effect) {
                return effect && effect[IO] && effect[type];
            };
        };
        var asEffect = exports.asEffect = {
            take: createAsEffectType(TAKE),
            put: createAsEffectType(PUT),
            all: createAsEffectType(ALL),
            race: createAsEffectType(RACE),
            call: createAsEffectType(CALL),
            cps: createAsEffectType(CPS),
            fork: createAsEffectType(FORK),
            join: createAsEffectType(JOIN),
            cancel: createAsEffectType(CANCEL),
            select: createAsEffectType(SELECT),
            actionChannel: createAsEffectType(ACTION_CHANNEL),
            cancelled: createAsEffectType(CANCELLED),
            flush: createAsEffectType(FLUSH),
            getContext: createAsEffectType(GET_CONTEXT),
            setContext: createAsEffectType(SET_CONTEXT)
        };
    },
    744: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.throttleHelper = exports.takeLatestHelper = exports.takeEveryHelper = exports.throttle = exports.takeLatest = exports.takeEvery = undefined;
        var _takeEvery = __webpack_require__(745);
        var _takeEvery2 = _interopRequireDefault(_takeEvery);
        var _takeLatest = __webpack_require__(749);
        var _takeLatest2 = _interopRequireDefault(_takeLatest);
        var _throttle = __webpack_require__(750);
        var _throttle2 = _interopRequireDefault(_throttle);
        var _utils = __webpack_require__(740);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var deprecationWarning = function deprecationWarning(helperName) {
            return "import { " + helperName + " } from 'redux-saga' has been deprecated in favor of import { " + helperName + " } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield " + helperName + " will return task descriptor to your saga and execute next lines of code.";
        };
        var takeEvery = (0, _utils.deprecate)(_takeEvery2.default, deprecationWarning("takeEvery"));
        var takeLatest = (0, _utils.deprecate)(_takeLatest2.default, deprecationWarning("takeLatest"));
        var throttle = (0, _utils.deprecate)(_throttle2.default, deprecationWarning("throttle"));
        exports.takeEvery = takeEvery;
        exports.takeLatest = takeLatest;
        exports.throttle = throttle;
        exports.takeEveryHelper = _takeEvery2.default;
        exports.takeLatestHelper = _takeLatest2.default;
        exports.throttleHelper = _throttle2.default;
    },
    745: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.default = takeEvery;
        var _fsmIterator = __webpack_require__(746);
        var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
        var _io = __webpack_require__(743);
        var _channel = __webpack_require__(747);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function takeEvery(patternOrChannel, worker) {
            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }
            var yTake = {
                done: false,
                value: (0, _io.take)(patternOrChannel)
            };
            var yFork = function yFork(ac) {
                return {
                    done: false,
                    value: _io.fork.apply(undefined, [ worker ].concat(args, [ ac ]))
                };
            };
            var action = void 0, setAction = function setAction(ac) {
                return action = ac;
            };
            return (0, _fsmIterator2.default)({
                q1: function q1() {
                    return [ "q2", yTake, setAction ];
                },
                q2: function q2() {
                    return action === _channel.END ? [ _fsmIterator.qEnd ] : [ "q1", yFork(action) ];
                }
            }, "q1", "takeEvery(" + (0, _fsmIterator.safeName)(patternOrChannel) + ", " + worker.name + ")");
        }
    },
    746: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.qEnd = undefined;
        exports.safeName = safeName;
        exports.default = fsmIterator;
        var _utils = __webpack_require__(740);
        var done = {
            done: true,
            value: undefined
        };
        var qEnd = exports.qEnd = {};
        function safeName(patternOrChannel) {
            if (_utils.is.channel(patternOrChannel)) {
                return "channel";
            } else if (Array.isArray(patternOrChannel)) {
                return String(patternOrChannel.map(function(entry) {
                    return String(entry);
                }));
            } else {
                return String(patternOrChannel);
            }
        }
        function fsmIterator(fsm, q0) {
            var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "iterator";
            var updateState = void 0, qNext = q0;
            function next(arg, error) {
                if (qNext === qEnd) {
                    return done;
                }
                if (error) {
                    qNext = qEnd;
                    throw error;
                } else {
                    updateState && updateState(arg);
                    var _fsm$qNext = fsm[qNext](), q = _fsm$qNext[0], output = _fsm$qNext[1], _updateState = _fsm$qNext[2];
                    qNext = q;
                    updateState = _updateState;
                    return qNext === qEnd ? done : output;
                }
            }
            return (0, _utils.makeIterator)(next, function(error) {
                return next(null, error);
            }, name, true);
        }
    },
    747: function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            exports.UNDEFINED_INPUT_ERROR = exports.INVALID_BUFFER = exports.isEnd = exports.END = undefined;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.emitter = emitter;
            exports.channel = channel;
            exports.eventChannel = eventChannel;
            exports.stdChannel = stdChannel;
            var _utils = __webpack_require__(740);
            var _buffers = __webpack_require__(748);
            var _scheduler = __webpack_require__(742);
            var CHANNEL_END_TYPE = "@@redux-saga/CHANNEL_END";
            var END = exports.END = {
                type: CHANNEL_END_TYPE
            };
            var isEnd = exports.isEnd = function isEnd(a) {
                return a && a.type === CHANNEL_END_TYPE;
            };
            function emitter() {
                var subscribers = [];
                function subscribe(sub) {
                    subscribers.push(sub);
                    return function() {
                        return (0, _utils.remove)(subscribers, sub);
                    };
                }
                function emit(item) {
                    var arr = subscribers.slice();
                    for (var i = 0, len = arr.length; i < len; i++) {
                        arr[i](item);
                    }
                }
                return {
                    subscribe: subscribe,
                    emit: emit
                };
            }
            var INVALID_BUFFER = exports.INVALID_BUFFER = "invalid buffer passed to channel factory function";
            var UNDEFINED_INPUT_ERROR = exports.UNDEFINED_INPUT_ERROR = "Saga was provided with an undefined action";
            if (process.env.NODE_ENV !== "production") {
                exports.UNDEFINED_INPUT_ERROR = UNDEFINED_INPUT_ERROR += "\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ";
            }
            function channel() {
                var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers.buffers.fixed();
                var closed = false;
                var takers = [];
                (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);
                function checkForbiddenStates() {
                    if (closed && takers.length) {
                        throw (0, _utils.internalErr)("Cannot have a closed channel with pending takers");
                    }
                    if (takers.length && !buffer.isEmpty()) {
                        throw (0, _utils.internalErr)("Cannot have pending takers with non empty buffer");
                    }
                }
                function put(input) {
                    checkForbiddenStates();
                    (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
                    if (closed) {
                        return;
                    }
                    if (!takers.length) {
                        return buffer.put(input);
                    }
                    for (var i = 0; i < takers.length; i++) {
                        var cb = takers[i];
                        if (!cb[_utils.MATCH] || cb[_utils.MATCH](input)) {
                            takers.splice(i, 1);
                            return cb(input);
                        }
                    }
                }
                function take(cb) {
                    checkForbiddenStates();
                    (0, _utils.check)(cb, _utils.is.func, "channel.take's callback must be a function");
                    if (closed && buffer.isEmpty()) {
                        cb(END);
                    } else if (!buffer.isEmpty()) {
                        cb(buffer.take());
                    } else {
                        takers.push(cb);
                        cb.cancel = function() {
                            return (0, _utils.remove)(takers, cb);
                        };
                    }
                }
                function flush(cb) {
                    checkForbiddenStates();
                    (0, _utils.check)(cb, _utils.is.func, "channel.flush' callback must be a function");
                    if (closed && buffer.isEmpty()) {
                        cb(END);
                        return;
                    }
                    cb(buffer.flush());
                }
                function close() {
                    checkForbiddenStates();
                    if (!closed) {
                        closed = true;
                        if (takers.length) {
                            var arr = takers;
                            takers = [];
                            for (var i = 0, len = arr.length; i < len; i++) {
                                arr[i](END);
                            }
                        }
                    }
                }
                return {
                    take: take,
                    put: put,
                    flush: flush,
                    close: close,
                    get __takers__() {
                        return takers;
                    },
                    get __closed__() {
                        return closed;
                    }
                };
            }
            function eventChannel(subscribe) {
                var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers.buffers.none();
                var matcher = arguments[2];
                if (arguments.length > 2) {
                    (0, _utils.check)(matcher, _utils.is.func, "Invalid match function passed to eventChannel");
                }
                var chan = channel(buffer);
                var close = function close() {
                    if (!chan.__closed__) {
                        if (unsubscribe) {
                            unsubscribe();
                        }
                        chan.close();
                    }
                };
                var unsubscribe = subscribe(function(input) {
                    if (isEnd(input)) {
                        close();
                        return;
                    }
                    if (matcher && !matcher(input)) {
                        return;
                    }
                    chan.put(input);
                });
                if (chan.__closed__) {
                    unsubscribe();
                }
                if (!_utils.is.func(unsubscribe)) {
                    throw new Error("in eventChannel: subscribe should return a function to unsubscribe");
                }
                return {
                    take: chan.take,
                    flush: chan.flush,
                    close: close
                };
            }
            function stdChannel(subscribe) {
                var chan = eventChannel(function(cb) {
                    return subscribe(function(input) {
                        if (input[_utils.SAGA_ACTION]) {
                            cb(input);
                            return;
                        }
                        (0, _scheduler.asap)(function() {
                            return cb(input);
                        });
                    });
                });
                return _extends({}, chan, {
                    take: function take(cb, matcher) {
                        if (arguments.length > 1) {
                            (0, _utils.check)(matcher, _utils.is.func, "channel.take's matcher argument must be a function");
                            cb[_utils.MATCH] = matcher;
                        }
                        chan.take(cb);
                    }
                });
            }
        }).call(exports, __webpack_require__(3));
    },
    748: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.buffers = exports.BUFFER_OVERFLOW = undefined;
        var _utils = __webpack_require__(740);
        var BUFFER_OVERFLOW = exports.BUFFER_OVERFLOW = "Channel's Buffer overflow!";
        var ON_OVERFLOW_THROW = 1;
        var ON_OVERFLOW_DROP = 2;
        var ON_OVERFLOW_SLIDE = 3;
        var ON_OVERFLOW_EXPAND = 4;
        var zeroBuffer = {
            isEmpty: _utils.kTrue,
            put: _utils.noop,
            take: _utils.noop
        };
        function ringBuffer() {
            var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var overflowAction = arguments[1];
            var arr = new Array(limit);
            var length = 0;
            var pushIndex = 0;
            var popIndex = 0;
            var push = function push(it) {
                arr[pushIndex] = it;
                pushIndex = (pushIndex + 1) % limit;
                length++;
            };
            var take = function take() {
                if (length != 0) {
                    var it = arr[popIndex];
                    arr[popIndex] = null;
                    length--;
                    popIndex = (popIndex + 1) % limit;
                    return it;
                }
            };
            var flush = function flush() {
                var items = [];
                while (length) {
                    items.push(take());
                }
                return items;
            };
            return {
                isEmpty: function isEmpty() {
                    return length == 0;
                },
                put: function put(it) {
                    if (length < limit) {
                        push(it);
                    } else {
                        var doubledLimit = void 0;
                        switch (overflowAction) {
                          case ON_OVERFLOW_THROW:
                            throw new Error(BUFFER_OVERFLOW);

                          case ON_OVERFLOW_SLIDE:
                            arr[pushIndex] = it;
                            pushIndex = (pushIndex + 1) % limit;
                            popIndex = pushIndex;
                            break;

                          case ON_OVERFLOW_EXPAND:
                            doubledLimit = 2 * limit;
                            arr = flush();
                            length = arr.length;
                            pushIndex = arr.length;
                            popIndex = 0;
                            arr.length = doubledLimit;
                            limit = doubledLimit;
                            push(it);
                            break;

                          default:                        }
                    }
                },
                take: take,
                flush: flush
            };
        }
        var buffers = exports.buffers = {
            none: function none() {
                return zeroBuffer;
            },
            fixed: function fixed(limit) {
                return ringBuffer(limit, ON_OVERFLOW_THROW);
            },
            dropping: function dropping(limit) {
                return ringBuffer(limit, ON_OVERFLOW_DROP);
            },
            sliding: function sliding(limit) {
                return ringBuffer(limit, ON_OVERFLOW_SLIDE);
            },
            expanding: function expanding(initialSize) {
                return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
            }
        };
    },
    749: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.default = takeLatest;
        var _fsmIterator = __webpack_require__(746);
        var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
        var _io = __webpack_require__(743);
        var _channel = __webpack_require__(747);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function takeLatest(patternOrChannel, worker) {
            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }
            var yTake = {
                done: false,
                value: (0, _io.take)(patternOrChannel)
            };
            var yFork = function yFork(ac) {
                return {
                    done: false,
                    value: _io.fork.apply(undefined, [ worker ].concat(args, [ ac ]))
                };
            };
            var yCancel = function yCancel(task) {
                return {
                    done: false,
                    value: (0, _io.cancel)(task)
                };
            };
            var task = void 0, action = void 0;
            var setTask = function setTask(t) {
                return task = t;
            };
            var setAction = function setAction(ac) {
                return action = ac;
            };
            return (0, _fsmIterator2.default)({
                q1: function q1() {
                    return [ "q2", yTake, setAction ];
                },
                q2: function q2() {
                    return action === _channel.END ? [ _fsmIterator.qEnd ] : task ? [ "q3", yCancel(task) ] : [ "q1", yFork(action), setTask ];
                },
                q3: function q3() {
                    return [ "q1", yFork(action), setTask ];
                }
            }, "q1", "takeLatest(" + (0, _fsmIterator.safeName)(patternOrChannel) + ", " + worker.name + ")");
        }
    },
    750: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.default = throttle;
        var _fsmIterator = __webpack_require__(746);
        var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
        var _io = __webpack_require__(743);
        var _channel = __webpack_require__(747);
        var _buffers = __webpack_require__(748);
        var _utils = __webpack_require__(740);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function throttle(delayLength, pattern, worker) {
            for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                args[_key - 3] = arguments[_key];
            }
            var action = void 0, channel = void 0;
            var yActionChannel = {
                done: false,
                value: (0, _io.actionChannel)(pattern, _buffers.buffers.sliding(1))
            };
            var yTake = function yTake() {
                return {
                    done: false,
                    value: (0, _io.take)(channel)
                };
            };
            var yFork = function yFork(ac) {
                return {
                    done: false,
                    value: _io.fork.apply(undefined, [ worker ].concat(args, [ ac ]))
                };
            };
            var yDelay = {
                done: false,
                value: (0, _io.call)(_utils.delay, delayLength)
            };
            var setAction = function setAction(ac) {
                return action = ac;
            };
            var setChannel = function setChannel(ch) {
                return channel = ch;
            };
            return (0, _fsmIterator2.default)({
                q1: function q1() {
                    return [ "q2", yActionChannel, setChannel ];
                },
                q2: function q2() {
                    return [ "q3", yTake(), setAction ];
                },
                q3: function q3() {
                    return action === _channel.END ? [ _fsmIterator.qEnd ] : [ "q4", yFork(action) ];
                },
                q4: function q4() {
                    return [ "q2", yDelay ];
                }
            }, "q1", "throttle(" + (0, _fsmIterator.safeName)(pattern) + ", " + worker.name + ")");
        }
    },
    751: function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            exports.__esModule = true;
            exports.default = sagaMiddlewareFactory;
            var _utils = __webpack_require__(740);
            var _channel = __webpack_require__(747);
            var _runSaga = __webpack_require__(739);
            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) {
                    if (keys.indexOf(i) >= 0) continue;
                    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                    target[i] = obj[i];
                }
                return target;
            }
            function sagaMiddlewareFactory() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var _ref$context = _ref.context, context = _ref$context === undefined ? {} : _ref$context, options = _objectWithoutProperties(_ref, [ "context" ]);
                var sagaMonitor = options.sagaMonitor, logger = options.logger, onError = options.onError;
                if (_utils.is.func(options)) {
                    if (process.env.NODE_ENV === "production") {
                        throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead");
                    } else {
                        throw new Error("You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from 'redux-saga'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ");
                    }
                }
                if (logger && !_utils.is.func(logger)) {
                    throw new Error("`options.logger` passed to the Saga middleware is not a function!");
                }
                if (process.env.NODE_ENV === "development" && options.onerror) {
                    throw new Error("`options.onerror` was removed. Use `options.onError` instead.");
                }
                if (onError && !_utils.is.func(onError)) {
                    throw new Error("`options.onError` passed to the Saga middleware is not a function!");
                }
                if (options.emitter && !_utils.is.func(options.emitter)) {
                    throw new Error("`options.emitter` passed to the Saga middleware is not a function!");
                }
                function sagaMiddleware(_ref2) {
                    var getState = _ref2.getState, dispatch = _ref2.dispatch;
                    var sagaEmitter = (0, _channel.emitter)();
                    sagaEmitter.emit = (options.emitter || _utils.ident)(sagaEmitter.emit);
                    sagaMiddleware.run = _runSaga.runSaga.bind(null, {
                        context: context,
                        subscribe: sagaEmitter.subscribe,
                        dispatch: dispatch,
                        getState: getState,
                        sagaMonitor: sagaMonitor,
                        logger: logger,
                        onError: onError
                    });
                    return function(next) {
                        return function(action) {
                            if (sagaMonitor && sagaMonitor.actionDispatched) {
                                sagaMonitor.actionDispatched(action);
                            }
                            var result = next(action);
                            sagaEmitter.emit(action);
                            return result;
                        };
                    };
                }
                sagaMiddleware.run = function() {
                    throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware");
                };
                sagaMiddleware.setContext = function(props) {
                    (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)("sagaMiddleware", props));
                    _utils.object.assign(context, props);
                };
                return sagaMiddleware;
            }
        }).call(exports, __webpack_require__(3));
    },
    752: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var _io = __webpack_require__(743);
        Object.defineProperty(exports, "take", {
            enumerable: true,
            get: function get() {
                return _io.take;
            }
        });
        Object.defineProperty(exports, "takem", {
            enumerable: true,
            get: function get() {
                return _io.takem;
            }
        });
        Object.defineProperty(exports, "put", {
            enumerable: true,
            get: function get() {
                return _io.put;
            }
        });
        Object.defineProperty(exports, "all", {
            enumerable: true,
            get: function get() {
                return _io.all;
            }
        });
        Object.defineProperty(exports, "race", {
            enumerable: true,
            get: function get() {
                return _io.race;
            }
        });
        Object.defineProperty(exports, "call", {
            enumerable: true,
            get: function get() {
                return _io.call;
            }
        });
        Object.defineProperty(exports, "apply", {
            enumerable: true,
            get: function get() {
                return _io.apply;
            }
        });
        Object.defineProperty(exports, "cps", {
            enumerable: true,
            get: function get() {
                return _io.cps;
            }
        });
        Object.defineProperty(exports, "fork", {
            enumerable: true,
            get: function get() {
                return _io.fork;
            }
        });
        Object.defineProperty(exports, "spawn", {
            enumerable: true,
            get: function get() {
                return _io.spawn;
            }
        });
        Object.defineProperty(exports, "join", {
            enumerable: true,
            get: function get() {
                return _io.join;
            }
        });
        Object.defineProperty(exports, "cancel", {
            enumerable: true,
            get: function get() {
                return _io.cancel;
            }
        });
        Object.defineProperty(exports, "select", {
            enumerable: true,
            get: function get() {
                return _io.select;
            }
        });
        Object.defineProperty(exports, "actionChannel", {
            enumerable: true,
            get: function get() {
                return _io.actionChannel;
            }
        });
        Object.defineProperty(exports, "cancelled", {
            enumerable: true,
            get: function get() {
                return _io.cancelled;
            }
        });
        Object.defineProperty(exports, "flush", {
            enumerable: true,
            get: function get() {
                return _io.flush;
            }
        });
        Object.defineProperty(exports, "getContext", {
            enumerable: true,
            get: function get() {
                return _io.getContext;
            }
        });
        Object.defineProperty(exports, "setContext", {
            enumerable: true,
            get: function get() {
                return _io.setContext;
            }
        });
        Object.defineProperty(exports, "takeEvery", {
            enumerable: true,
            get: function get() {
                return _io.takeEvery;
            }
        });
        Object.defineProperty(exports, "takeLatest", {
            enumerable: true,
            get: function get() {
                return _io.takeLatest;
            }
        });
        Object.defineProperty(exports, "throttle", {
            enumerable: true,
            get: function get() {
                return _io.throttle;
            }
        });
    },
    753: function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var _utils = __webpack_require__(740);
        Object.defineProperty(exports, "TASK", {
            enumerable: true,
            get: function get() {
                return _utils.TASK;
            }
        });
        Object.defineProperty(exports, "SAGA_ACTION", {
            enumerable: true,
            get: function get() {
                return _utils.SAGA_ACTION;
            }
        });
        Object.defineProperty(exports, "noop", {
            enumerable: true,
            get: function get() {
                return _utils.noop;
            }
        });
        Object.defineProperty(exports, "is", {
            enumerable: true,
            get: function get() {
                return _utils.is;
            }
        });
        Object.defineProperty(exports, "deferred", {
            enumerable: true,
            get: function get() {
                return _utils.deferred;
            }
        });
        Object.defineProperty(exports, "arrayOfDeffered", {
            enumerable: true,
            get: function get() {
                return _utils.arrayOfDeffered;
            }
        });
        Object.defineProperty(exports, "createMockTask", {
            enumerable: true,
            get: function get() {
                return _utils.createMockTask;
            }
        });
        Object.defineProperty(exports, "cloneableGenerator", {
            enumerable: true,
            get: function get() {
                return _utils.cloneableGenerator;
            }
        });
        var _io = __webpack_require__(743);
        Object.defineProperty(exports, "asEffect", {
            enumerable: true,
            get: function get() {
                return _io.asEffect;
            }
        });
        var _proc = __webpack_require__(741);
        Object.defineProperty(exports, "CHANNEL_END", {
            enumerable: true,
            get: function get() {
                return _proc.CHANNEL_END;
            }
        });
    },
    754: function(module, exports, __webpack_require__) {
        "use strict";
        var compose = __webpack_require__(197).compose;
        exports.__esModule = true;
        exports.composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
            if (arguments.length === 0) return undefined;
            if (typeof arguments[0] === "object") return compose;
            return compose.apply(null, arguments);
        };
        exports.devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
            return function(noop) {
                return noop;
            };
        };
    },
    755: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.reducer = reducer;
        var _const = __webpack_require__(737);
        var c = _interopRequireWildcard(_const);
        var _pull = __webpack_require__(756);
        var _pull2 = _interopRequireDefault(_pull);
        var _utils = __webpack_require__(736);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }
        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        }
        var initialState = {
            selectAll: true,
            fetching: false,
            error: null,
            userId: null,
            is_restricted: false,
            all_projects: [],
            user_projects: [],
            original_is_restricted: null,
            original_projects: null
        };
        function reducer() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
            var action = arguments[1];
            switch (action.type) {
              case c.SET_STORE:
                {
                    var data = action.data;
                    return _extends({}, state, data);
                }

              case c.API_GET_INIT:
                {
                    return _extends({}, state, {
                        fetching: true,
                        error: null
                    });
                }

              case c.API_GET_SUCCESS:
                {
                    var _action$data = action.data, all_projects = _action$data.all_projects, user_projects = _action$data.user_projects;
                    return _extends({}, state, {
                        fetching: false,
                        all_projects: all_projects,
                        user_projects: user_projects && user_projects.projects || [],
                        is_restricted: user_projects && user_projects.is_restricted || false
                    });
                }

              case c.API_GET_FAILURE:
                {
                    return _extends({}, state, {
                        fetching: false,
                        all_projects: [],
                        user_projects: [],
                        error: action.error
                    });
                }

              case c.API_PUT_INIT:
                {
                    return _extends({}, state, {
                        fetching: true,
                        error: null
                    });
                }

              case c.API_PUT_SUCCESS:
                {
                    var _user_projects = action.data.user_projects;
                    return _extends({}, state, {
                        fetching: false,
                        is_restricted: _user_projects.is_restricted,
                        original_is_restricted: null,
                        user_projects: _user_projects.projects,
                        original_projects: null
                    });
                }

              case c.API_PUT_FAILURE:
                {
                    var new_state = _extends({}, state, {
                        fetching: false,
                        original_is_restricted: null,
                        original_projects: null,
                        error: action.error
                    });
                    if (state.original_is_restricted !== null) {
                        new_state.is_restricted = state.original_is_restricted;
                    }
                    if (state.original_projects !== null) {
                        new_state.user_projects = state.original_projects;
                    }
                    return new_state;
                }

              case c.UPDATE_PROJECT_SELECTION:
                {
                    var projectId = action.data.projectId;
                    var original_projects = state.user_projects && [].concat(_toConsumableArray(state.user_projects));
                    var _user_projects2 = state.user_projects && [].concat(_toConsumableArray(state.user_projects));
                    (0, _utils.inArray)(projectId, _user_projects2) ? (0, _pull2.default)(_user_projects2, projectId) : _user_projects2.push(projectId);
                    return _extends({}, state, {
                        original_projects: original_projects,
                        user_projects: _user_projects2
                    });
                }

              case c.UPDATE_IS_RESTRICTED:
                {
                    var is_restricted = action.data.is_restricted;
                    return _extends({}, state, {
                        is_restricted: is_restricted,
                        original_is_restricted: state.is_restricted
                    });
                }

              case c.UPDATE_SELECT_ALL_PROJECTS:
                {
                    var _original_projects = state.user_projects && [].concat(_toConsumableArray(state.user_projects));
                    var _user_projects3 = void 0, _state = _extends({}, state), selectAll = _state.selectAll;
                    if (selectAll) {
                        _user_projects3 = state.all_projects.map(function(project) {
                            return project.id;
                        });
                    } else {
                        _user_projects3 = [];
                    }
                    selectAll = !selectAll;
                    return _extends({}, state, {
                        selectAll: selectAll,
                        original_projects: _original_projects,
                        user_projects: _user_projects3
                    });
                }

              default:
                {
                    return state;
                }
            }
        }
    },
    756: function(module, exports, __webpack_require__) {
        var baseRest = __webpack_require__(757), pullAll = __webpack_require__(764);
        var pull = baseRest(pullAll);
        module.exports = pull;
    },
    757: function(module, exports, __webpack_require__) {
        var identity = __webpack_require__(439), overRest = __webpack_require__(758), setToString = __webpack_require__(760);
        function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
        }
        module.exports = baseRest;
    },
    758: function(module, exports, __webpack_require__) {
        var apply = __webpack_require__(759);
        var nativeMax = Math.max;
        function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? func.length - 1 : start, 0);
            return function() {
                var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
                while (++index < length) {
                    array[index] = args[start + index];
                }
                index = -1;
                var otherArgs = Array(start + 1);
                while (++index < start) {
                    otherArgs[index] = args[index];
                }
                otherArgs[start] = transform(array);
                return apply(func, this, otherArgs);
            };
        }
        module.exports = overRest;
    },
    759: function(module, exports) {
        function apply(func, thisArg, args) {
            switch (args.length) {
              case 0:
                return func.call(thisArg);

              case 1:
                return func.call(thisArg, args[0]);

              case 2:
                return func.call(thisArg, args[0], args[1]);

              case 3:
                return func.call(thisArg, args[0], args[1], args[2]);
            }
            return func.apply(thisArg, args);
        }
        module.exports = apply;
    },
    760: function(module, exports, __webpack_require__) {
        var baseSetToString = __webpack_require__(761), shortOut = __webpack_require__(763);
        var setToString = shortOut(baseSetToString);
        module.exports = setToString;
    },
    761: function(module, exports, __webpack_require__) {
        var constant = __webpack_require__(762), defineProperty = __webpack_require__(328), identity = __webpack_require__(439);
        var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
                configurable: true,
                enumerable: false,
                value: constant(string),
                writable: true
            });
        };
        module.exports = baseSetToString;
    },
    762: function(module, exports) {
        function constant(value) {
            return function() {
                return value;
            };
        }
        module.exports = constant;
    },
    763: function(module, exports) {
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var nativeNow = Date.now;
        function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
                var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) {
                        return arguments[0];
                    }
                } else {
                    count = 0;
                }
                return func.apply(undefined, arguments);
            };
        }
        module.exports = shortOut;
    },
    764: function(module, exports, __webpack_require__) {
        var basePullAll = __webpack_require__(765);
        function pullAll(array, values) {
            return array && array.length && values && values.length ? basePullAll(array, values) : array;
        }
        module.exports = pullAll;
    },
    765: function(module, exports, __webpack_require__) {
        var arrayMap = __webpack_require__(434), baseIndexOf = __webpack_require__(766), baseIndexOfWith = __webpack_require__(770), baseUnary = __webpack_require__(356), copyArray = __webpack_require__(771);
        var arrayProto = Array.prototype;
        var splice = arrayProto.splice;
        function basePullAll(array, values, iteratee, comparator) {
            var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
            if (array === values) {
                values = copyArray(values);
            }
            if (iteratee) {
                seen = arrayMap(array, baseUnary(iteratee));
            }
            while (++index < length) {
                var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
                while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
                    if (seen !== array) {
                        splice.call(seen, fromIndex, 1);
                    }
                    splice.call(array, fromIndex, 1);
                }
            }
            return array;
        }
        module.exports = basePullAll;
    },
    766: function(module, exports, __webpack_require__) {
        var baseFindIndex = __webpack_require__(767), baseIsNaN = __webpack_require__(768), strictIndexOf = __webpack_require__(769);
        function baseIndexOf(array, value, fromIndex) {
            return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        module.exports = baseIndexOf;
    },
    767: function(module, exports) {
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
            var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
            while (fromRight ? index-- : ++index < length) {
                if (predicate(array[index], index, array)) {
                    return index;
                }
            }
            return -1;
        }
        module.exports = baseFindIndex;
    },
    768: function(module, exports) {
        function baseIsNaN(value) {
            return value !== value;
        }
        module.exports = baseIsNaN;
    },
    769: function(module, exports) {
        function strictIndexOf(array, value, fromIndex) {
            var index = fromIndex - 1, length = array.length;
            while (++index < length) {
                if (array[index] === value) {
                    return index;
                }
            }
            return -1;
        }
        module.exports = strictIndexOf;
    },
    770: function(module, exports) {
        function baseIndexOfWith(array, value, fromIndex, comparator) {
            var index = fromIndex - 1, length = array.length;
            while (++index < length) {
                if (comparator(array[index], value)) {
                    return index;
                }
            }
            return -1;
        }
        module.exports = baseIndexOfWith;
    },
    771: function(module, exports) {
        function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array(length));
            while (++index < length) {
                array[index] = source[index];
            }
            return array;
        }
        module.exports = copyArray;
    },
    772: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getIsRestricted = exports.getUserProjects = exports.getUserId = undefined;
        exports.fetchData = fetchData;
        exports.putData = putData;
        exports.getSaga = getSaga;
        exports.putSaga = putSaga;
        exports.watcherSaga = watcherSaga;
        __webpack_require__(773);
        var _effects = __webpack_require__(752);
        var _axios = __webpack_require__(774);
        var _axios2 = _interopRequireDefault(_axios);
        var _const = __webpack_require__(737);
        var c = _interopRequireWildcard(_const);
        var _utils = __webpack_require__(324);
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var _marked = regeneratorRuntime.mark(getSaga), _marked2 = regeneratorRuntime.mark(putSaga), _marked3 = regeneratorRuntime.mark(watcherSaga);
        function callAxios(config) {
            return (0, _axios2.default)(config).then(function(response) {
                return {
                    response: response
                };
            }).catch(function(error) {
                return {
                    error: error
                };
            });
        }
        function fetchData(userId) {
            var config = {
                method: "get",
                url: "/rest/v1/user_projects_access/" + userId + "/"
            };
            return callAxios(config);
        }
        function putData(userId, is_restricted, user_projects) {
            var config = {
                method: "put",
                headers: {
                    "X-CSRFToken": (0, _utils.getCookie)("csrftoken")
                },
                url: "/rest/v1/user_projects_access/" + userId + "/",
                data: {
                    user_projects: {
                        is_restricted: is_restricted,
                        projects: user_projects
                    }
                }
            };
            return callAxios(config);
        }
        function getSaga(action) {
            var userId, _ref, response, error;
            return regeneratorRuntime.wrap(function getSaga$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        userId = action.data.userId;
                        _context.next = 3;
                        return (0, _effects.call)(fetchData, userId);

                      case 3:
                        _ref = _context.sent;
                        response = _ref.response;
                        error = _ref.error;
                        if (!response) {
                            _context.next = 11;
                            break;
                        }
                        _context.next = 9;
                        return (0, _effects.put)({
                            type: c.API_GET_SUCCESS,
                            data: response.data
                        });

                      case 9:
                        _context.next = 13;
                        break;

                      case 11:
                        _context.next = 13;
                        return (0, _effects.put)({
                            type: c.API_GET_FAILURE,
                            error: error
                        });

                      case 13:
                      case "end":
                        return _context.stop();
                    }
                }
            }, _marked, this);
        }
        var getUserId = exports.getUserId = function getUserId(state) {
            return state.userId;
        };
        var getUserProjects = exports.getUserProjects = function getUserProjects(state) {
            return state.user_projects;
        };
        var getIsRestricted = exports.getIsRestricted = function getIsRestricted(state) {
            return state.is_restricted;
        };
        function putSaga(action) {
            var userId, is_restricted, user_projects, _ref2, response, error;
            return regeneratorRuntime.wrap(function putSaga$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return (0, _effects.put)({
                            type: c.API_PUT_INIT
                        });

                      case 2:
                        _context2.next = 4;
                        return (0, _effects.select)(getUserId);

                      case 4:
                        userId = _context2.sent;
                        _context2.next = 7;
                        return (0, _effects.select)(getIsRestricted);

                      case 7:
                        is_restricted = _context2.sent;
                        _context2.next = 10;
                        return (0, _effects.select)(getUserProjects);

                      case 10:
                        user_projects = _context2.sent;
                        _context2.next = 13;
                        return (0, _effects.call)(putData, userId, is_restricted, user_projects);

                      case 13:
                        _ref2 = _context2.sent;
                        response = _ref2.response;
                        error = _ref2.error;
                        if (!response) {
                            _context2.next = 21;
                            break;
                        }
                        _context2.next = 19;
                        return (0, _effects.put)({
                            type: c.API_PUT_SUCCESS,
                            data: response.data
                        });

                      case 19:
                        _context2.next = 23;
                        break;

                      case 21:
                        _context2.next = 23;
                        return (0, _effects.put)({
                            type: c.API_PUT_FAILURE,
                            error: error
                        });

                      case 23:
                      case "end":
                        return _context2.stop();
                    }
                }
            }, _marked2, this);
        }
        function watcherSaga() {
            return regeneratorRuntime.wrap(function watcherSaga$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return (0, _effects.takeLatest)(c.API_GET_INIT, getSaga);

                      case 2:
                        _context3.next = 4;
                        return (0, _effects.takeLatest)(c.UPDATE_PROJECT_SELECTION, putSaga);

                      case 4:
                        _context3.next = 6;
                        return (0, _effects.takeLatest)(c.UPDATE_SELECT_ALL_PROJECTS, putSaga);

                      case 6:
                        _context3.next = 8;
                        return (0, _effects.takeLatest)(c.UPDATE_IS_RESTRICTED, putSaga);

                      case 8:
                      case "end":
                        return _context3.stop();
                    }
                }
            }, _marked3, this);
        }
    },
    773: function(module, exports) {
        !function(global) {
            "use strict";
            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var undefined;
            var $Symbol = typeof Symbol === "function" ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || "@@iterator";
            var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
            var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
            var inModule = typeof module === "object";
            var runtime = global.regeneratorRuntime;
            if (runtime) {
                if (inModule) {
                    module.exports = runtime;
                }
                return;
            }
            runtime = global.regeneratorRuntime = inModule ? module.exports : {};
            function wrap(innerFn, outerFn, self, tryLocsList) {
                var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                var generator = Object.create(protoGenerator.prototype);
                var context = new Context(tryLocsList || []);
                generator._invoke = makeInvokeMethod(innerFn, self, context);
                return generator;
            }
            runtime.wrap = wrap;
            function tryCatch(fn, obj, arg) {
                try {
                    return {
                        type: "normal",
                        arg: fn.call(obj, arg)
                    };
                } catch (err) {
                    return {
                        type: "throw",
                        arg: err
                    };
                }
            }
            var GenStateSuspendedStart = "suspendedStart";
            var GenStateSuspendedYield = "suspendedYield";
            var GenStateExecuting = "executing";
            var GenStateCompleted = "completed";
            var ContinueSentinel = {};
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}
            var IteratorPrototype = {};
            IteratorPrototype[iteratorSymbol] = function() {
                return this;
            };
            var getProto = Object.getPrototypeOf;
            var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
            if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                IteratorPrototype = NativeIteratorPrototype;
            }
            var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
            GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
            GeneratorFunctionPrototype.constructor = GeneratorFunction;
            GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
            function defineIteratorMethods(prototype) {
                [ "next", "throw", "return" ].forEach(function(method) {
                    prototype[method] = function(arg) {
                        return this._invoke(method, arg);
                    };
                });
            }
            runtime.isGeneratorFunction = function(genFun) {
                var ctor = typeof genFun === "function" && genFun.constructor;
                return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
            };
            runtime.mark = function(genFun) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                } else {
                    genFun.__proto__ = GeneratorFunctionPrototype;
                    if (!(toStringTagSymbol in genFun)) {
                        genFun[toStringTagSymbol] = "GeneratorFunction";
                    }
                }
                genFun.prototype = Object.create(Gp);
                return genFun;
            };
            runtime.awrap = function(arg) {
                return {
                    __await: arg
                };
            };
            function AsyncIterator(generator) {
                function invoke(method, arg, resolve, reject) {
                    var record = tryCatch(generator[method], generator, arg);
                    if (record.type === "throw") {
                        reject(record.arg);
                    } else {
                        var result = record.arg;
                        var value = result.value;
                        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                            return Promise.resolve(value.__await).then(function(value) {
                                invoke("next", value, resolve, reject);
                            }, function(err) {
                                invoke("throw", err, resolve, reject);
                            });
                        }
                        return Promise.resolve(value).then(function(unwrapped) {
                            result.value = unwrapped;
                            resolve(result);
                        }, reject);
                    }
                }
                var previousPromise;
                function enqueue(method, arg) {
                    function callInvokeWithMethodAndArg() {
                        return new Promise(function(resolve, reject) {
                            invoke(method, arg, resolve, reject);
                        });
                    }
                    return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                }
                this._invoke = enqueue;
            }
            defineIteratorMethods(AsyncIterator.prototype);
            AsyncIterator.prototype[asyncIteratorSymbol] = function() {
                return this;
            };
            runtime.AsyncIterator = AsyncIterator;
            runtime.async = function(innerFn, outerFn, self, tryLocsList) {
                var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
                return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                    return result.done ? result.value : iter.next();
                });
            };
            function makeInvokeMethod(innerFn, self, context) {
                var state = GenStateSuspendedStart;
                return function invoke(method, arg) {
                    if (state === GenStateExecuting) {
                        throw new Error("Generator is already running");
                    }
                    if (state === GenStateCompleted) {
                        if (method === "throw") {
                            throw arg;
                        }
                        return doneResult();
                    }
                    context.method = method;
                    context.arg = arg;
                    while (true) {
                        var delegate = context.delegate;
                        if (delegate) {
                            var delegateResult = maybeInvokeDelegate(delegate, context);
                            if (delegateResult) {
                                if (delegateResult === ContinueSentinel) continue;
                                return delegateResult;
                            }
                        }
                        if (context.method === "next") {
                            context.sent = context._sent = context.arg;
                        } else if (context.method === "throw") {
                            if (state === GenStateSuspendedStart) {
                                state = GenStateCompleted;
                                throw context.arg;
                            }
                            context.dispatchException(context.arg);
                        } else if (context.method === "return") {
                            context.abrupt("return", context.arg);
                        }
                        state = GenStateExecuting;
                        var record = tryCatch(innerFn, self, context);
                        if (record.type === "normal") {
                            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                            if (record.arg === ContinueSentinel) {
                                continue;
                            }
                            return {
                                value: record.arg,
                                done: context.done
                            };
                        } else if (record.type === "throw") {
                            state = GenStateCompleted;
                            context.method = "throw";
                            context.arg = record.arg;
                        }
                    }
                };
            }
            function maybeInvokeDelegate(delegate, context) {
                var method = delegate.iterator[context.method];
                if (method === undefined) {
                    context.delegate = null;
                    if (context.method === "throw") {
                        if (delegate.iterator.return) {
                            context.method = "return";
                            context.arg = undefined;
                            maybeInvokeDelegate(delegate, context);
                            if (context.method === "throw") {
                                return ContinueSentinel;
                            }
                        }
                        context.method = "throw";
                        context.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return ContinueSentinel;
                }
                var record = tryCatch(method, delegate.iterator, context.arg);
                if (record.type === "throw") {
                    context.method = "throw";
                    context.arg = record.arg;
                    context.delegate = null;
                    return ContinueSentinel;
                }
                var info = record.arg;
                if (!info) {
                    context.method = "throw";
                    context.arg = new TypeError("iterator result is not an object");
                    context.delegate = null;
                    return ContinueSentinel;
                }
                if (info.done) {
                    context[delegate.resultName] = info.value;
                    context.next = delegate.nextLoc;
                    if (context.method !== "return") {
                        context.method = "next";
                        context.arg = undefined;
                    }
                } else {
                    return info;
                }
                context.delegate = null;
                return ContinueSentinel;
            }
            defineIteratorMethods(Gp);
            Gp[toStringTagSymbol] = "Generator";
            Gp[iteratorSymbol] = function() {
                return this;
            };
            Gp.toString = function() {
                return "[object Generator]";
            };
            function pushTryEntry(locs) {
                var entry = {
                    tryLoc: locs[0]
                };
                if (1 in locs) {
                    entry.catchLoc = locs[1];
                }
                if (2 in locs) {
                    entry.finallyLoc = locs[2];
                    entry.afterLoc = locs[3];
                }
                this.tryEntries.push(entry);
            }
            function resetTryEntry(entry) {
                var record = entry.completion || {};
                record.type = "normal";
                delete record.arg;
                entry.completion = record;
            }
            function Context(tryLocsList) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ];
                tryLocsList.forEach(pushTryEntry, this);
                this.reset(true);
            }
            runtime.keys = function(object) {
                var keys = [];
                for (var key in object) {
                    keys.push(key);
                }
                keys.reverse();
                return function next() {
                    while (keys.length) {
                        var key = keys.pop();
                        if (key in object) {
                            next.value = key;
                            next.done = false;
                            return next;
                        }
                    }
                    next.done = true;
                    return next;
                };
            };
            function values(iterable) {
                if (iterable) {
                    var iteratorMethod = iterable[iteratorSymbol];
                    if (iteratorMethod) {
                        return iteratorMethod.call(iterable);
                    }
                    if (typeof iterable.next === "function") {
                        return iterable;
                    }
                    if (!isNaN(iterable.length)) {
                        var i = -1, next = function next() {
                            while (++i < iterable.length) {
                                if (hasOwn.call(iterable, i)) {
                                    next.value = iterable[i];
                                    next.done = false;
                                    return next;
                                }
                            }
                            next.value = undefined;
                            next.done = true;
                            return next;
                        };
                        return next.next = next;
                    }
                }
                return {
                    next: doneResult
                };
            }
            runtime.values = values;
            function doneResult() {
                return {
                    value: undefined,
                    done: true
                };
            }
            Context.prototype = {
                constructor: Context,
                reset: function(skipTempReset) {
                    this.prev = 0;
                    this.next = 0;
                    this.sent = this._sent = undefined;
                    this.done = false;
                    this.delegate = null;
                    this.method = "next";
                    this.arg = undefined;
                    this.tryEntries.forEach(resetTryEntry);
                    if (!skipTempReset) {
                        for (var name in this) {
                            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                                this[name] = undefined;
                            }
                        }
                    }
                },
                stop: function() {
                    this.done = true;
                    var rootEntry = this.tryEntries[0];
                    var rootRecord = rootEntry.completion;
                    if (rootRecord.type === "throw") {
                        throw rootRecord.arg;
                    }
                    return this.rval;
                },
                dispatchException: function(exception) {
                    if (this.done) {
                        throw exception;
                    }
                    var context = this;
                    function handle(loc, caught) {
                        record.type = "throw";
                        record.arg = exception;
                        context.next = loc;
                        if (caught) {
                            context.method = "next";
                            context.arg = undefined;
                        }
                        return !!caught;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        var record = entry.completion;
                        if (entry.tryLoc === "root") {
                            return handle("end");
                        }
                        if (entry.tryLoc <= this.prev) {
                            var hasCatch = hasOwn.call(entry, "catchLoc");
                            var hasFinally = hasOwn.call(entry, "finallyLoc");
                            if (hasCatch && hasFinally) {
                                if (this.prev < entry.catchLoc) {
                                    return handle(entry.catchLoc, true);
                                } else if (this.prev < entry.finallyLoc) {
                                    return handle(entry.finallyLoc);
                                }
                            } else if (hasCatch) {
                                if (this.prev < entry.catchLoc) {
                                    return handle(entry.catchLoc, true);
                                }
                            } else if (hasFinally) {
                                if (this.prev < entry.finallyLoc) {
                                    return handle(entry.finallyLoc);
                                }
                            } else {
                                throw new Error("try statement without catch or finally");
                            }
                        }
                    }
                },
                abrupt: function(type, arg) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                            var finallyEntry = entry;
                            break;
                        }
                    }
                    if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                        finallyEntry = null;
                    }
                    var record = finallyEntry ? finallyEntry.completion : {};
                    record.type = type;
                    record.arg = arg;
                    if (finallyEntry) {
                        this.method = "next";
                        this.next = finallyEntry.finallyLoc;
                        return ContinueSentinel;
                    }
                    return this.complete(record);
                },
                complete: function(record, afterLoc) {
                    if (record.type === "throw") {
                        throw record.arg;
                    }
                    if (record.type === "break" || record.type === "continue") {
                        this.next = record.arg;
                    } else if (record.type === "return") {
                        this.rval = this.arg = record.arg;
                        this.method = "return";
                        this.next = "end";
                    } else if (record.type === "normal" && afterLoc) {
                        this.next = afterLoc;
                    }
                    return ContinueSentinel;
                },
                finish: function(finallyLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.finallyLoc === finallyLoc) {
                            this.complete(entry.completion, entry.afterLoc);
                            resetTryEntry(entry);
                            return ContinueSentinel;
                        }
                    }
                },
                catch: function(tryLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.tryLoc === tryLoc) {
                            var record = entry.completion;
                            if (record.type === "throw") {
                                var thrown = record.arg;
                                resetTryEntry(entry);
                            }
                            return thrown;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(iterable, resultName, nextLoc) {
                    this.delegate = {
                        iterator: values(iterable),
                        resultName: resultName,
                        nextLoc: nextLoc
                    };
                    if (this.method === "next") {
                        this.arg = undefined;
                    }
                    return ContinueSentinel;
                }
            };
        }(function() {
            return this;
        }() || Function("return this")());
    },
    774: function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(775);
    },
    775: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        var bind = __webpack_require__(777);
        var Axios = __webpack_require__(779);
        var defaults = __webpack_require__(780);
        function createInstance(defaultConfig) {
            var context = new Axios(defaultConfig);
            var instance = bind(Axios.prototype.request, context);
            utils.extend(instance, Axios.prototype, context);
            utils.extend(instance, context);
            return instance;
        }
        var axios = createInstance(defaults);
        axios.Axios = Axios;
        axios.create = function create(instanceConfig) {
            return createInstance(utils.merge(defaults, instanceConfig));
        };
        axios.Cancel = __webpack_require__(797);
        axios.CancelToken = __webpack_require__(798);
        axios.isCancel = __webpack_require__(794);
        axios.all = function all(promises) {
            return Promise.all(promises);
        };
        axios.spread = __webpack_require__(799);
        module.exports = axios;
        module.exports.default = axios;
    },
    776: function(module, exports, __webpack_require__) {
        "use strict";
        var bind = __webpack_require__(777);
        var isBuffer = __webpack_require__(778);
        var toString = Object.prototype.toString;
        function isArray(val) {
            return toString.call(val) === "[object Array]";
        }
        function isArrayBuffer(val) {
            return toString.call(val) === "[object ArrayBuffer]";
        }
        function isFormData(val) {
            return typeof FormData !== "undefined" && val instanceof FormData;
        }
        function isArrayBufferView(val) {
            var result;
            if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
                result = ArrayBuffer.isView(val);
            } else {
                result = val && val.buffer && val.buffer instanceof ArrayBuffer;
            }
            return result;
        }
        function isString(val) {
            return typeof val === "string";
        }
        function isNumber(val) {
            return typeof val === "number";
        }
        function isUndefined(val) {
            return typeof val === "undefined";
        }
        function isObject(val) {
            return val !== null && typeof val === "object";
        }
        function isDate(val) {
            return toString.call(val) === "[object Date]";
        }
        function isFile(val) {
            return toString.call(val) === "[object File]";
        }
        function isBlob(val) {
            return toString.call(val) === "[object Blob]";
        }
        function isFunction(val) {
            return toString.call(val) === "[object Function]";
        }
        function isStream(val) {
            return isObject(val) && isFunction(val.pipe);
        }
        function isURLSearchParams(val) {
            return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
        }
        function trim(str) {
            return str.replace(/^\s*/, "").replace(/\s*$/, "");
        }
        function isStandardBrowserEnv() {
            if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
                return false;
            }
            return typeof window !== "undefined" && typeof document !== "undefined";
        }
        function forEach(obj, fn) {
            if (obj === null || typeof obj === "undefined") {
                return;
            }
            if (typeof obj !== "object") {
                obj = [ obj ];
            }
            if (isArray(obj)) {
                for (var i = 0, l = obj.length; i < l; i++) {
                    fn.call(null, obj[i], i, obj);
                }
            } else {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        fn.call(null, obj[key], key, obj);
                    }
                }
            }
        }
        function merge() {
            var result = {};
            function assignValue(val, key) {
                if (typeof result[key] === "object" && typeof val === "object") {
                    result[key] = merge(result[key], val);
                } else {
                    result[key] = val;
                }
            }
            for (var i = 0, l = arguments.length; i < l; i++) {
                forEach(arguments[i], assignValue);
            }
            return result;
        }
        function extend(a, b, thisArg) {
            forEach(b, function assignValue(val, key) {
                if (thisArg && typeof val === "function") {
                    a[key] = bind(val, thisArg);
                } else {
                    a[key] = val;
                }
            });
            return a;
        }
        module.exports = {
            isArray: isArray,
            isArrayBuffer: isArrayBuffer,
            isBuffer: isBuffer,
            isFormData: isFormData,
            isArrayBufferView: isArrayBufferView,
            isString: isString,
            isNumber: isNumber,
            isObject: isObject,
            isUndefined: isUndefined,
            isDate: isDate,
            isFile: isFile,
            isBlob: isBlob,
            isFunction: isFunction,
            isStream: isStream,
            isURLSearchParams: isURLSearchParams,
            isStandardBrowserEnv: isStandardBrowserEnv,
            forEach: forEach,
            merge: merge,
            extend: extend,
            trim: trim
        };
    },
    777: function(module, exports) {
        "use strict";
        module.exports = function bind(fn, thisArg) {
            return function wrap() {
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i];
                }
                return fn.apply(thisArg, args);
            };
        };
    },
    778: function(module, exports) {
        module.exports = function(obj) {
            return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
        };
        function isBuffer(obj) {
            return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
        }
        function isSlowBuffer(obj) {
            return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
        }
    },
    779: function(module, exports, __webpack_require__) {
        "use strict";
        var defaults = __webpack_require__(780);
        var utils = __webpack_require__(776);
        var InterceptorManager = __webpack_require__(791);
        var dispatchRequest = __webpack_require__(792);
        function Axios(instanceConfig) {
            this.defaults = instanceConfig;
            this.interceptors = {
                request: new InterceptorManager(),
                response: new InterceptorManager()
            };
        }
        Axios.prototype.request = function request(config) {
            if (typeof config === "string") {
                config = utils.merge({
                    url: arguments[0]
                }, arguments[1]);
            }
            config = utils.merge(defaults, {
                method: "get"
            }, this.defaults, config);
            config.method = config.method.toLowerCase();
            var chain = [ dispatchRequest, undefined ];
            var promise = Promise.resolve(config);
            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });
            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });
            while (chain.length) {
                promise = promise.then(chain.shift(), chain.shift());
            }
            return promise;
        };
        utils.forEach([ "delete", "get", "head", "options" ], function forEachMethodNoData(method) {
            Axios.prototype[method] = function(url, config) {
                return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url
                }));
            };
        });
        utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
            Axios.prototype[method] = function(url, data, config) {
                return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url,
                    data: data
                }));
            };
        });
        module.exports = Axios;
    },
    780: function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            var utils = __webpack_require__(776);
            var normalizeHeaderName = __webpack_require__(781);
            var DEFAULT_CONTENT_TYPE = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function setContentTypeIfUnset(headers, value) {
                if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
                    headers["Content-Type"] = value;
                }
            }
            function getDefaultAdapter() {
                var adapter;
                if (typeof XMLHttpRequest !== "undefined") {
                    adapter = __webpack_require__(782);
                } else if (typeof process !== "undefined") {
                    adapter = __webpack_require__(782);
                }
                return adapter;
            }
            var defaults = {
                adapter: getDefaultAdapter(),
                transformRequest: [ function transformRequest(data, headers) {
                    normalizeHeaderName(headers, "Content-Type");
                    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                        return data;
                    }
                    if (utils.isArrayBufferView(data)) {
                        return data.buffer;
                    }
                    if (utils.isURLSearchParams(data)) {
                        setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                        return data.toString();
                    }
                    if (utils.isObject(data)) {
                        setContentTypeIfUnset(headers, "application/json;charset=utf-8");
                        return JSON.stringify(data);
                    }
                    return data;
                } ],
                transformResponse: [ function transformResponse(data) {
                    if (typeof data === "string") {
                        try {
                            data = JSON.parse(data);
                        } catch (e) {}
                    }
                    return data;
                } ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function validateStatus(status) {
                    return status >= 200 && status < 300;
                }
            };
            defaults.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            };
            utils.forEach([ "delete", "get", "head" ], function forEachMethodNoData(method) {
                defaults.headers[method] = {};
            });
            utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
                defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
            });
            module.exports = defaults;
        }).call(exports, __webpack_require__(3));
    },
    781: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        module.exports = function normalizeHeaderName(headers, normalizedName) {
            utils.forEach(headers, function processHeader(value, name) {
                if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                    headers[normalizedName] = value;
                    delete headers[name];
                }
            });
        };
    },
    782: function(module, exports, __webpack_require__) {
        (function(process) {
            "use strict";
            var utils = __webpack_require__(776);
            var settle = __webpack_require__(783);
            var buildURL = __webpack_require__(786);
            var parseHeaders = __webpack_require__(787);
            var isURLSameOrigin = __webpack_require__(788);
            var createError = __webpack_require__(784);
            var btoa = typeof window !== "undefined" && window.btoa && window.btoa.bind(window) || __webpack_require__(789);
            module.exports = function xhrAdapter(config) {
                return new Promise(function dispatchXhrRequest(resolve, reject) {
                    var requestData = config.data;
                    var requestHeaders = config.headers;
                    if (utils.isFormData(requestData)) {
                        delete requestHeaders["Content-Type"];
                    }
                    var request = new XMLHttpRequest();
                    var loadEvent = "onreadystatechange";
                    var xDomain = false;
                    if (process.env.NODE_ENV !== "test" && typeof window !== "undefined" && window.XDomainRequest && !("withCredentials" in request) && !isURLSameOrigin(config.url)) {
                        request = new window.XDomainRequest();
                        loadEvent = "onload";
                        xDomain = true;
                        request.onprogress = function handleProgress() {};
                        request.ontimeout = function handleTimeout() {};
                    }
                    if (config.auth) {
                        var username = config.auth.username || "";
                        var password = config.auth.password || "";
                        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
                    }
                    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
                    request.timeout = config.timeout;
                    request[loadEvent] = function handleLoad() {
                        if (!request || request.readyState !== 4 && !xDomain) {
                            return;
                        }
                        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                            return;
                        }
                        var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                        var responseData = !config.responseType || config.responseType === "text" ? request.responseText : request.response;
                        var response = {
                            data: responseData,
                            status: request.status === 1223 ? 204 : request.status,
                            statusText: request.status === 1223 ? "No Content" : request.statusText,
                            headers: responseHeaders,
                            config: config,
                            request: request
                        };
                        settle(resolve, reject, response);
                        request = null;
                    };
                    request.onerror = function handleError() {
                        reject(createError("Network Error", config, null, request));
                        request = null;
                    };
                    request.ontimeout = function handleTimeout() {
                        reject(createError("timeout of " + config.timeout + "ms exceeded", config, "ECONNABORTED", request));
                        request = null;
                    };
                    if (utils.isStandardBrowserEnv()) {
                        var cookies = __webpack_require__(790);
                        var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
                        if (xsrfValue) {
                            requestHeaders[config.xsrfHeaderName] = xsrfValue;
                        }
                    }
                    if ("setRequestHeader" in request) {
                        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                                delete requestHeaders[key];
                            } else {
                                request.setRequestHeader(key, val);
                            }
                        });
                    }
                    if (config.withCredentials) {
                        request.withCredentials = true;
                    }
                    if (config.responseType) {
                        try {
                            request.responseType = config.responseType;
                        } catch (e) {
                            if (config.responseType !== "json") {
                                throw e;
                            }
                        }
                    }
                    if (typeof config.onDownloadProgress === "function") {
                        request.addEventListener("progress", config.onDownloadProgress);
                    }
                    if (typeof config.onUploadProgress === "function" && request.upload) {
                        request.upload.addEventListener("progress", config.onUploadProgress);
                    }
                    if (config.cancelToken) {
                        config.cancelToken.promise.then(function onCanceled(cancel) {
                            if (!request) {
                                return;
                            }
                            request.abort();
                            reject(cancel);
                            request = null;
                        });
                    }
                    if (requestData === undefined) {
                        requestData = null;
                    }
                    request.send(requestData);
                });
            };
        }).call(exports, __webpack_require__(3));
    },
    783: function(module, exports, __webpack_require__) {
        "use strict";
        var createError = __webpack_require__(784);
        module.exports = function settle(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) {
                resolve(response);
            } else {
                reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
            }
        };
    },
    784: function(module, exports, __webpack_require__) {
        "use strict";
        var enhanceError = __webpack_require__(785);
        module.exports = function createError(message, config, code, request, response) {
            var error = new Error(message);
            return enhanceError(error, config, code, request, response);
        };
    },
    785: function(module, exports) {
        "use strict";
        module.exports = function enhanceError(error, config, code, request, response) {
            error.config = config;
            if (code) {
                error.code = code;
            }
            error.request = request;
            error.response = response;
            return error;
        };
    },
    786: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        function encode(val) {
            return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        module.exports = function buildURL(url, params, paramsSerializer) {
            if (!params) {
                return url;
            }
            var serializedParams;
            if (paramsSerializer) {
                serializedParams = paramsSerializer(params);
            } else if (utils.isURLSearchParams(params)) {
                serializedParams = params.toString();
            } else {
                var parts = [];
                utils.forEach(params, function serialize(val, key) {
                    if (val === null || typeof val === "undefined") {
                        return;
                    }
                    if (utils.isArray(val)) {
                        key = key + "[]";
                    } else {
                        val = [ val ];
                    }
                    utils.forEach(val, function parseValue(v) {
                        if (utils.isDate(v)) {
                            v = v.toISOString();
                        } else if (utils.isObject(v)) {
                            v = JSON.stringify(v);
                        }
                        parts.push(encode(key) + "=" + encode(v));
                    });
                });
                serializedParams = parts.join("&");
            }
            if (serializedParams) {
                url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
            }
            return url;
        };
    },
    787: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        var ignoreDuplicateOf = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
        module.exports = function parseHeaders(headers) {
            var parsed = {};
            var key;
            var val;
            var i;
            if (!headers) {
                return parsed;
            }
            utils.forEach(headers.split("\n"), function parser(line) {
                i = line.indexOf(":");
                key = utils.trim(line.substr(0, i)).toLowerCase();
                val = utils.trim(line.substr(i + 1));
                if (key) {
                    if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                        return;
                    }
                    if (key === "set-cookie") {
                        parsed[key] = (parsed[key] ? parsed[key] : []).concat([ val ]);
                    } else {
                        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
                    }
                }
            });
            return parsed;
        };
    },
    788: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
            var msie = /(msie|trident)/i.test(navigator.userAgent);
            var urlParsingNode = document.createElement("a");
            var originURL;
            function resolveURL(url) {
                var href = url;
                if (msie) {
                    urlParsingNode.setAttribute("href", href);
                    href = urlParsingNode.href;
                }
                urlParsingNode.setAttribute("href", href);
                return {
                    href: urlParsingNode.href,
                    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
                    host: urlParsingNode.host,
                    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
                    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
                    hostname: urlParsingNode.hostname,
                    port: urlParsingNode.port,
                    pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
                };
            }
            originURL = resolveURL(window.location.href);
            return function isURLSameOrigin(requestURL) {
                var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
            };
        }() : function nonStandardBrowserEnv() {
            return function isURLSameOrigin() {
                return true;
            };
        }();
    },
    789: function(module, exports) {
        "use strict";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function E() {
            this.message = "String contains an invalid character";
        }
        E.prototype = new Error();
        E.prototype.code = 5;
        E.prototype.name = "InvalidCharacterError";
        function btoa(input) {
            var str = String(input);
            var output = "";
            for (var block, charCode, idx = 0, map = chars; str.charAt(idx | 0) || (map = "=", 
            idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                charCode = str.charCodeAt(idx += 3 / 4);
                if (charCode > 255) {
                    throw new E();
                }
                block = block << 8 | charCode;
            }
            return output;
        }
        module.exports = btoa;
    },
    790: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
            return {
                write: function write(name, value, expires, path, domain, secure) {
                    var cookie = [];
                    cookie.push(name + "=" + encodeURIComponent(value));
                    if (utils.isNumber(expires)) {
                        cookie.push("expires=" + new Date(expires).toGMTString());
                    }
                    if (utils.isString(path)) {
                        cookie.push("path=" + path);
                    }
                    if (utils.isString(domain)) {
                        cookie.push("domain=" + domain);
                    }
                    if (secure === true) {
                        cookie.push("secure");
                    }
                    document.cookie = cookie.join("; ");
                },
                read: function read(name) {
                    var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
                    return match ? decodeURIComponent(match[3]) : null;
                },
                remove: function remove(name) {
                    this.write(name, "", Date.now() - 864e5);
                }
            };
        }() : function nonStandardBrowserEnv() {
            return {
                write: function write() {},
                read: function read() {
                    return null;
                },
                remove: function remove() {}
            };
        }();
    },
    791: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        function InterceptorManager() {
            this.handlers = [];
        }
        InterceptorManager.prototype.use = function use(fulfilled, rejected) {
            this.handlers.push({
                fulfilled: fulfilled,
                rejected: rejected
            });
            return this.handlers.length - 1;
        };
        InterceptorManager.prototype.eject = function eject(id) {
            if (this.handlers[id]) {
                this.handlers[id] = null;
            }
        };
        InterceptorManager.prototype.forEach = function forEach(fn) {
            utils.forEach(this.handlers, function forEachHandler(h) {
                if (h !== null) {
                    fn(h);
                }
            });
        };
        module.exports = InterceptorManager;
    },
    792: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        var transformData = __webpack_require__(793);
        var isCancel = __webpack_require__(794);
        var defaults = __webpack_require__(780);
        var isAbsoluteURL = __webpack_require__(795);
        var combineURLs = __webpack_require__(796);
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) {
                config.cancelToken.throwIfRequested();
            }
        }
        module.exports = function dispatchRequest(config) {
            throwIfCancellationRequested(config);
            if (config.baseURL && !isAbsoluteURL(config.url)) {
                config.url = combineURLs(config.baseURL, config.url);
            }
            config.headers = config.headers || {};
            config.data = transformData(config.data, config.headers, config.transformRequest);
            config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
            utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function cleanHeaderConfig(method) {
                delete config.headers[method];
            });
            var adapter = config.adapter || defaults.adapter;
            return adapter(config).then(function onAdapterResolution(response) {
                throwIfCancellationRequested(config);
                response.data = transformData(response.data, response.headers, config.transformResponse);
                return response;
            }, function onAdapterRejection(reason) {
                if (!isCancel(reason)) {
                    throwIfCancellationRequested(config);
                    if (reason && reason.response) {
                        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
                    }
                }
                return Promise.reject(reason);
            });
        };
    },
    793: function(module, exports, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__(776);
        module.exports = function transformData(data, headers, fns) {
            utils.forEach(fns, function transform(fn) {
                data = fn(data, headers);
            });
            return data;
        };
    },
    794: function(module, exports) {
        "use strict";
        module.exports = function isCancel(value) {
            return !!(value && value.__CANCEL__);
        };
    },
    795: function(module, exports) {
        "use strict";
        module.exports = function isAbsoluteURL(url) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };
    },
    796: function(module, exports) {
        "use strict";
        module.exports = function combineURLs(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        };
    },
    797: function(module, exports) {
        "use strict";
        function Cancel(message) {
            this.message = message;
        }
        Cancel.prototype.toString = function toString() {
            return "Cancel" + (this.message ? ": " + this.message : "");
        };
        Cancel.prototype.__CANCEL__ = true;
        module.exports = Cancel;
    },
    798: function(module, exports, __webpack_require__) {
        "use strict";
        var Cancel = __webpack_require__(797);
        function CancelToken(executor) {
            if (typeof executor !== "function") {
                throw new TypeError("executor must be a function.");
            }
            var resolvePromise;
            this.promise = new Promise(function promiseExecutor(resolve) {
                resolvePromise = resolve;
            });
            var token = this;
            executor(function cancel(message) {
                if (token.reason) {
                    return;
                }
                token.reason = new Cancel(message);
                resolvePromise(token.reason);
            });
        }
        CancelToken.prototype.throwIfRequested = function throwIfRequested() {
            if (this.reason) {
                throw this.reason;
            }
        };
        CancelToken.source = function source() {
            var cancel;
            var token = new CancelToken(function executor(c) {
                cancel = c;
            });
            return {
                token: token,
                cancel: cancel
            };
        };
        module.exports = CancelToken;
    },
    799: function(module, exports) {
        "use strict";
        module.exports = function spread(callback) {
            return function wrap(arr) {
                return callback.apply(null, arr);
            };
        };
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdXNlclByb2plY3RzLWJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzLXNyYy91c2VyLXByb2plY3RzLWFjY2Vzcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy1zcmMvdXNlci1wcm9qZWN0cy1hY2Nlc3MvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NjcmlwdHMtc3JjL3VzZXItcHJvamVjdHMtYWNjZXNzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMtc3JjL3VzZXItcHJvamVjdHMtYWNjZXNzL2NvbnN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtc2FnYS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9ydW5TYWdhLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9wcm9jLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvc2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvaW8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9zYWdhSGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VFdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL2ZzbUl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9zYWdhSGVscGVycy90YWtlTGF0ZXN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9taWRkbGV3YXJlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtc2FnYS9saWIvZWZmZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LXNhZ2EvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMtc3JjL3VzZXItcHJvamVjdHMtYWNjZXNzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvcHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvcHVsbEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVB1bGxBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMtc3JjL3VzZXItcHJvamVjdHMtYWNjZXNzL3NhZ2FzLmpzIiwid2VicGFjazovLy8uL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL34vaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIl0sIm5hbWVzIjpbIndlYnBhY2tKc29ucCIsIjAiLCJtb2R1bGUiLCJleHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9yZWFjdCIsIl9yZWFjdDIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3JlYWN0RG9tIiwiX3JlYWN0RG9tMiIsIl9BcHAiLCJfQXBwMiIsIl9yZWR1eCIsIl9yZWR1eFNhZ2EiLCJfcmVkdXhTYWdhMiIsIl9yZWFjdFJlZHV4IiwiX3JlZHV4RGV2dG9vbHNFeHRlbnNpb24iLCJfcmVkdWNlciIsIl9zYWdhcyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwic2FnYU1pZGRsZXdhcmUiLCJyZWR1eERldlRvb2xzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsIndhdGNoZXJTYWdhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJnZXRFbGVtZW50QnlJZCIsIjczNSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX3V0aWxzIiwiX2NvbnN0IiwiYyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwibmV3T2JqIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJJc1Jlc3RyaWN0ZWQiLCJfcmVmIiwiXyIsImlzX3Jlc3RyaWN0ZWQiLCJvbkNoYW5nZUlzUmVzdHJpY3RlZCIsImlkIiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIlByb2plY3QiLCJfcmVmMiIsInByb2plY3QiLCJ1c2VyX3Byb2plY3RzIiwib25DaGFuZ2VQcm9qZWN0U2VsZWN0ZWQiLCJpbkFycmF5IiwiZGlzYWJsZWQiLCJwcm9qZWN0U2VsZWN0ZWQiLCJ0ckNsYXNzTmFtZSIsImlkQ2xhc3NOYW1lIiwib25DbGljayIsImNsYXNzTmFtZSIsInJlYWRPbmx5IiwidGl0bGUiLCJTZWxlY3RBbGwiLCJfcmVmMyIsInNlbGVjdEFsbCIsIm9uQ2hhbmdlUHJvamVjdFNlbGVjdEFsbCIsInVuZGVmaW5lZCIsIkVycm9yIiwiX3JlZjQiLCJlcnJvciIsIm1lc3NhZ2UiLCJQcm9qZWN0cyIsIl9yZWY1IiwiYWxsX3Byb2plY3RzIiwibWFwIiwiQXBwIiwiX1JlYWN0JENvbXBvbmVudCIsInRoaXMiLCJfdGhpcyIsImdldFByb3RvdHlwZU9mIiwidG9nZ2xlUHJvamVjdFNlbGVjdGVkIiwiYmluZCIsInRvZ2dsZUlzUmVzdHJpY3RlZCIsInRvZ2dsZVByb2plY3RTZWxlY3RBbGwiLCJzIiwic3RyaW5ncyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvblVwZGF0ZUlzUmVzdHJpY3RlZCIsIm9uVXBkYXRlU2VsZWN0QWxsIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJvblVwZGF0ZVByb2plY3RTZWxlY3Rpb24iLCJjb21wb25lbnREaWRNb3VudCIsInVzZXJJZCIsImRhdGFGcm9tRWxlbWVudCIsInNldFN0b3JlIiwib25GZXRjaFVzZXJQcm9qZWN0cyIsIl9wcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJmZXRjaGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiQVBJX0dFVF9JTklUIiwiZGF0YSIsIlNFVF9TVE9SRSIsInByb2plY3RJZCIsIlVQREFURV9QUk9KRUNUX1NFTEVDVElPTiIsIlVQREFURV9JU19SRVNUUklDVEVEIiwiVVBEQVRFX1NFTEVDVF9BTExfUFJPSkVDVFMiLCJjb25uZWN0IiwiNzM2IiwiZW5kcG9pbnRzIiwiX3N0b3JlIiwiX3N0b3JlMiIsInVzZXJfcHJvamVjdHNfYWNjZXNzIiwiYXJyIiwiaW5kZXhPZiIsImVsZW1lbnROYW1lIiwiSlNPTiIsInBhcnNlIiwiaW5uZXJIVE1MIiwiNzM3IiwiQVBJX0dFVF9TVUNDRVNTIiwiQVBJX0dFVF9GQUlMVVJFIiwiQVBJX1BVVF9JTklUIiwiQVBJX1BVVF9TVUNDRVNTIiwiQVBJX1BVVF9GQUlMVVJFIiwiNzM4IiwidXRpbHMiLCJlZmZlY3RzIiwiZGV0YWNoIiwiQ0FOQ0VMIiwiZGVsYXkiLCJ0aHJvdHRsZSIsInRha2VMYXRlc3QiLCJ0YWtlRXZlcnkiLCJidWZmZXJzIiwiY2hhbm5lbCIsImV2ZW50Q2hhbm5lbCIsIkVORCIsInJ1blNhZ2EiLCJfcnVuU2FnYSIsImdldCIsIl9jaGFubmVsIiwiX2J1ZmZlcnMiLCJfc2FnYUhlbHBlcnMiLCJfaW8iLCJfbWlkZGxld2FyZSIsIl9taWRkbGV3YXJlMiIsIl9lZmZlY3RzIiwiX3V0aWxzMiIsIjczOSIsInByb2Nlc3MiLCJfcHJvYyIsIl9wcm9jMiIsIlJVTl9TQUdBX1NJR05BVFVSRSIsIk5PTl9HRU5FUkFUT1JfRVJSIiwic3RvcmVJbnRlcmZhY2UiLCJzYWdhIiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpdGVyYXRvciIsImlzIiwiZW52IiwiTk9ERV9FTlYiLCJsb2ciLCJjaGVjayIsImZ1bmMiLCJhcHBseSIsIl9zdG9yZUludGVyZmFjZSIsInN1YnNjcmliZSIsImdldFN0YXRlIiwiY29udGV4dCIsInNhZ2FNb25pdG9yIiwibG9nZ2VyIiwib25FcnJvciIsImVmZmVjdElkIiwidWlkIiwiZWZmZWN0VHJpZ2dlcmVkIiwibm9vcCIsImVmZmVjdFJlc29sdmVkIiwiZWZmZWN0UmVqZWN0ZWQiLCJlZmZlY3RDYW5jZWxsZWQiLCJhY3Rpb25EaXNwYXRjaGVkIiwicm9vdCIsInBhcmVudEVmZmVjdElkIiwiZWZmZWN0IiwidGFzayIsIndyYXBTYWdhRGlzcGF0Y2giLCJuYW1lIiwiNzQwIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJzb3VyY2UiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaGFzT3duIiwicmVtb3ZlIiwiZGVmZXJyZWQiLCJhcnJheU9mRGVmZmVyZWQiLCJjcmVhdGVNb2NrVGFzayIsImF1dG9JbmMiLCJtYWtlSXRlcmF0b3IiLCJkZXByZWNhdGUiLCJzeW0iLCJUQVNLIiwiSEVMUEVSIiwiTUFUQ0giLCJTQUdBX0FDVElPTiIsIlNFTEZfQ0FOQ0VMTEFUSU9OIiwia29uc3QiLCJ2Iiwia1RydWUiLCJrRmFsc2UiLCJpZGVudCIsInByZWRpY2F0ZSIsIm9iamVjdCIsInByb3BlcnR5Iiwibm90VW5kZWYiLCJ1bmRlZiIsImYiLCJudW1iZXIiLCJuIiwic3RyaW5nIiwiYXJyYXkiLCJpc0FycmF5IiwicHJvbWlzZSIsInAiLCJ0aGVuIiwiaXQiLCJuZXh0IiwidGhyb3ciLCJpdGVyYWJsZSIsInQiLCJvYnNlcnZhYmxlIiwib2IiLCJidWZmZXIiLCJidWYiLCJpc0VtcHR5IiwidGFrZSIsInB1dCIsInBhdHRlcm4iLCJwYXQiLCJjaCIsImNsb3NlIiwiaGVscGVyIiwic3RyaW5nYWJsZUZ1bmMiLCJpdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJmcm9tIiwiZGVmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwdXNoIiwibXMiLCJ2YWwiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVubmluZyIsIl9yZXN1bHQiLCJfZXJyb3IiLCJpc1J1bm5pbmciLCJyZXN1bHQiLCJzZXRSdW5uaW5nIiwiYiIsInNldFJlc3VsdCIsInIiLCJzZXRFcnJvciIsInNlZWQiLCJrVGhyb3ciLCJlcnIiLCJrUmV0dXJuIiwiZG9uZSIsInRocm8iLCJpc0hlbHBlciIsInJldHVybiIsImxldmVsIiwiY29uc29sZSIsInN0YWNrIiwiZm4iLCJkZXByZWNhdGlvbldhcm5pbmciLCJ1cGRhdGVJbmNlbnRpdmUiLCJkZXByZWNhdGVkIiwicHJlZmVycmVkIiwiaW50ZXJuYWxFcnIiLCJjcmVhdGVTZXRDb250ZXh0V2FybmluZyIsImN0eCIsImFjdGlvbiIsImNsb25lYWJsZUdlbmVyYXRvciIsImdlbmVyYXRvckZ1bmMiLCJoaXN0b3J5IiwiZ2VuIiwiYXJnIiwiY2xvbmUiLCJjbG9uZWRHZW4iLCJmb3JFYWNoIiwiX3JldHVybiIsIl90aHJvdyIsImV4Y2VwdGlvbiIsIjc0MSIsIlRBU0tfQ0FOQ0VMIiwiQ0hBTk5FTF9FTkQiLCJOT1RfSVRFUkFUT1JfRVJST1IiLCJwcm9jIiwiX3NjaGVkdWxlciIsIl9kZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcyIsImRlc2NzIiwiZGVzYyIsInRvU3RyaW5nIiwibWF0Y2hlcnMiLCJ3aWxkY2FyZCIsIl9kZWZhdWx0IiwiaW5wdXQiLCJTdHJpbmciLCJwYXR0ZXJucyIsInNvbWUiLCJtYXRjaGVyIiwiX3ByZWRpY2F0ZSIsImZvcmtRdWV1ZSIsIm1haW5UYXNrIiwiY2IiLCJ0YXNrcyIsImNvbXBsZXRlZCIsImFkZFRhc2siLCJhYm9ydCIsImNhbmNlbEFsbCIsImNvbnQiLCJyZXMiLCJpc0VyciIsImNhbmNlbCIsImdldFRhc2tzIiwidGFza05hbWVzIiwiY3JlYXRlVGFza0l0ZXJhdG9yIiwicGMiLCJlZmYiLCJyZXQiLCJ3cmFwSGVscGVyIiwicGFyZW50Q29udGV4dCIsIm9wdGlvbnMiLCJlZmZlY3RzU3RyaW5nIiwicnVuUGFyYWxsZWxFZmZlY3QiLCJydW5BbGxFZmZlY3QiLCJsb2dFcnJvciIsInNhZ2FTdGFjayIsInNwbGl0Iiwic3RkQ2hhbm5lbCIsInRhc2tDb250ZXh0IiwibmV3VGFzayIsImNhbmNlbE1haW4iLCJ0YXNrUXVldWUiLCJlbmQiLCJpc0NhbmNlbGxlZCIsIl9pc1J1bm5pbmciLCJfaXNDYW5jZWxsZWQiLCJydW5FZmZlY3QiLCJpc01haW5SdW5uaW5nIiwiX2RlZmVycmVkRW5kIiwiX2lzQWJvcnRlZCIsImpvaW5lcnMiLCJqIiwibGFiZWwiLCJlZmZlY3RTZXR0bGVkIiwiY3VyckNiIiwicmVzb2x2ZVByb21pc2UiLCJydW5Gb3JrRWZmZWN0IiwicmVzb2x2ZUl0ZXJhdG9yIiwiYXNFZmZlY3QiLCJydW5UYWtlRWZmZWN0IiwicnVuUHV0RWZmZWN0IiwiYWxsIiwicmFjZSIsInJ1blJhY2VFZmZlY3QiLCJydW5DYWxsRWZmZWN0IiwiY3BzIiwicnVuQ1BTRWZmZWN0IiwiZm9yayIsImpvaW4iLCJydW5Kb2luRWZmZWN0IiwicnVuQ2FuY2VsRWZmZWN0Iiwic2VsZWN0IiwicnVuU2VsZWN0RWZmZWN0IiwiYWN0aW9uQ2hhbm5lbCIsInJ1bkNoYW5uZWxFZmZlY3QiLCJmbHVzaCIsInJ1bkZsdXNoRWZmZWN0IiwiY2FuY2VsbGVkIiwicnVuQ2FuY2VsbGVkRWZmZWN0IiwiZ2V0Q29udGV4dCIsInJ1bkdldENvbnRleHRFZmZlY3QiLCJzZXRDb250ZXh0IiwicnVuU2V0Q29udGV4dEVmZmVjdCIsImNhbmNlbFByb21pc2UiLCJtYXliZSIsInRha2VDYiIsImlucCIsImlzRW5kIiwiYXNhcCIsImNwc0NiIiwiY29uY2F0IiwiX3JlZjYiLCJkZXRhY2hlZCIsInRhc2tJdGVyYXRvciIsInN1c3BlbmQiLCJfdGFzayIsImpvaW5lciIsImlzQWJvcnRlZCIsInRhc2tUb0NhbmNlbCIsImtleXMiLCJjb21wbGV0ZWRDb3VudCIsInJlc3VsdHMiLCJjaGlsZENicyIsImNoZWNrRWZmZWN0RW5kIiwiY2hDYkF0S2V5IiwiX3Jlc3BvbnNlIiwicmVzcG9uc2UiLCJzbGljZSIsIl9yZWY3Iiwic2VsZWN0b3IiLCJfcmVmOCIsIm1hdGNoIiwiZml4ZWQiLCJwcm9wIiwiX2RvbmUiLCJfcmVmOSIsIl9tdXRhdG9yTWFwIiwiNzQyIiwicXVldWUiLCJzZW1hcGhvcmUiLCJleGVjIiwicmVsZWFzZSIsInNoaWZ0IiwiNzQzIiwidGFrZW0iLCJzcGF3biIsIklPIiwiVEFLRSIsIlBVVCIsIkFMTCIsIlJBQ0UiLCJDQUxMIiwiQ1BTIiwiRk9SSyIsIkpPSU4iLCJTRUxFQ1QiLCJBQ1RJT05fQ0hBTk5FTCIsIkNBTkNFTExFRCIsIkZMVVNIIiwiR0VUX0NPTlRFWFQiLCJTRVRfQ09OVEVYVCIsIlRFU1RfSElOVCIsInBheWxvYWQiLCJwYXR0ZXJuT3JDaGFubmVsIiwic3luYyIsImdldEZuQ2FsbERlc2MiLCJtZXRoIiwiX2ZuIiwiX2ZuMiIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiX2xlbjQiLCJfa2V5NCIsIl9sZW41IiwiX2tleTUiLCJfbGVuNiIsIl9rZXk2IiwiX2xlbjciLCJfa2V5NyIsIndvcmtlciIsIl9sZW44IiwiX2tleTgiLCJ0YWtlRXZlcnlIZWxwZXIiLCJfbGVuOSIsIl9rZXk5IiwidGFrZUxhdGVzdEhlbHBlciIsIl9sZW4xMCIsIl9rZXkxMCIsInRocm90dGxlSGVscGVyIiwiY3JlYXRlQXNFZmZlY3RUeXBlIiwiNzQ0IiwiX3Rha2VFdmVyeSIsIl90YWtlRXZlcnkyIiwiX3Rha2VMYXRlc3QiLCJfdGFrZUxhdGVzdDIiLCJfdGhyb3R0bGUiLCJfdGhyb3R0bGUyIiwiaGVscGVyTmFtZSIsIjc0NSIsIl9mc21JdGVyYXRvciIsIl9mc21JdGVyYXRvcjIiLCJ5VGFrZSIsInlGb3JrIiwiYWMiLCJzZXRBY3Rpb24iLCJxMSIsInEyIiwicUVuZCIsInNhZmVOYW1lIiwiNzQ2IiwiZnNtSXRlcmF0b3IiLCJlbnRyeSIsImZzbSIsInEwIiwidXBkYXRlU3RhdGUiLCJxTmV4dCIsIl9mc20kcU5leHQiLCJxIiwib3V0cHV0IiwiX3VwZGF0ZVN0YXRlIiwiNzQ3IiwiVU5ERUZJTkVEX0lOUFVUX0VSUk9SIiwiSU5WQUxJRF9CVUZGRVIiLCJlbWl0dGVyIiwiQ0hBTk5FTF9FTkRfVFlQRSIsImEiLCJzdWJzY3JpYmVycyIsInN1YiIsImVtaXQiLCJsZW4iLCJjbG9zZWQiLCJ0YWtlcnMiLCJjaGVja0ZvcmJpZGRlblN0YXRlcyIsIl9fdGFrZXJzX18iLCJfX2Nsb3NlZF9fIiwibm9uZSIsImNoYW4iLCJ1bnN1YnNjcmliZSIsIjc0OCIsIkJVRkZFUl9PVkVSRkxPVyIsIk9OX09WRVJGTE9XX1RIUk9XIiwiT05fT1ZFUkZMT1dfRFJPUCIsIk9OX09WRVJGTE9XX1NMSURFIiwiT05fT1ZFUkZMT1dfRVhQQU5EIiwiemVyb0J1ZmZlciIsInJpbmdCdWZmZXIiLCJsaW1pdCIsIm92ZXJmbG93QWN0aW9uIiwicHVzaEluZGV4IiwicG9wSW5kZXgiLCJpdGVtcyIsImRvdWJsZWRMaW1pdCIsImRyb3BwaW5nIiwic2xpZGluZyIsImV4cGFuZGluZyIsImluaXRpYWxTaXplIiwiNzQ5IiwieUNhbmNlbCIsInNldFRhc2siLCJxMyIsIjc1MCIsImRlbGF5TGVuZ3RoIiwieUFjdGlvbkNoYW5uZWwiLCJ5RGVsYXkiLCJzZXRDaGFubmVsIiwicTQiLCI3NTEiLCJzYWdhTWlkZGxld2FyZUZhY3RvcnkiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfcmVmJGNvbnRleHQiLCJvbmVycm9yIiwic2FnYUVtaXR0ZXIiLCI3NTIiLCI3NTMiLCI3NTQiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiZGV2VG9vbHNFbmhhbmNlciIsIjc1NSIsIl9wdWxsIiwiX3B1bGwyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyMiIsImluaXRpYWxTdGF0ZSIsIm9yaWdpbmFsX2lzX3Jlc3RyaWN0ZWQiLCJvcmlnaW5hbF9wcm9qZWN0cyIsIl9hY3Rpb24kZGF0YSIsInByb2plY3RzIiwibmV3X3N0YXRlIiwiX3VzZXJfcHJvamVjdHMzIiwiX3N0YXRlIiwiNzU2IiwiYmFzZVJlc3QiLCJwdWxsQWxsIiwicHVsbCIsIjc1NyIsImlkZW50aXR5Iiwib3ZlclJlc3QiLCJzZXRUb1N0cmluZyIsInN0YXJ0IiwiNzU4IiwibmF0aXZlTWF4IiwiTWF0aCIsIm1heCIsInRyYW5zZm9ybSIsIm90aGVyQXJncyIsIjc1OSIsInRoaXNBcmciLCI3NjAiLCJiYXNlU2V0VG9TdHJpbmciLCJzaG9ydE91dCIsIjc2MSIsImNvbnN0YW50IiwiNzYyIiwiNzYzIiwiSE9UX0NPVU5UIiwiSE9UX1NQQU4iLCJuYXRpdmVOb3ciLCJEYXRlIiwibm93IiwiY291bnQiLCJsYXN0Q2FsbGVkIiwic3RhbXAiLCJyZW1haW5pbmciLCI3NjQiLCJiYXNlUHVsbEFsbCIsInZhbHVlcyIsIjc2NSIsImFycmF5TWFwIiwiYmFzZUluZGV4T2YiLCJiYXNlSW5kZXhPZldpdGgiLCJiYXNlVW5hcnkiLCJjb3B5QXJyYXkiLCJhcnJheVByb3RvIiwiaXRlcmF0ZWUiLCJjb21wYXJhdG9yIiwic2VlbiIsImZyb21JbmRleCIsImNvbXB1dGVkIiwiNzY2IiwiYmFzZUZpbmRJbmRleCIsImJhc2VJc05hTiIsInN0cmljdEluZGV4T2YiLCI3NjciLCJmcm9tUmlnaHQiLCI3NjgiLCI3NjkiLCI3NzAiLCI3NzEiLCI3NzIiLCJnZXRJc1Jlc3RyaWN0ZWQiLCJnZXRVc2VyUHJvamVjdHMiLCJnZXRVc2VySWQiLCJmZXRjaERhdGEiLCJwdXREYXRhIiwiZ2V0U2FnYSIsInB1dFNhZ2EiLCJfYXhpb3MiLCJfYXhpb3MyIiwiX21hcmtlZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfbWFya2VkMiIsIl9tYXJrZWQzIiwiY2FsbEF4aW9zIiwiY29uZmlnIiwiY2F0Y2giLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiWC1DU1JGVG9rZW4iLCJnZXRDb29raWUiLCJ3cmFwIiwiZ2V0U2FnYSQiLCJfY29udGV4dCIsInByZXYiLCJzZW50Iiwic3RvcCIsInB1dFNhZ2EkIiwiX2NvbnRleHQyIiwid2F0Y2hlclNhZ2EkIiwiX2NvbnRleHQzIiwiNzczIiwiZ2xvYmFsIiwiT3AiLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJpbk1vZHVsZSIsInJ1bnRpbWUiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwiR3AiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlY29yZCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsInJldmVyc2UiLCJwb3AiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsImNoYXJBdCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiRnVuY3Rpb24iLCI3NzQiLCI3NzUiLCJBeGlvcyIsImRlZmF1bHRzIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwicmVxdWVzdCIsImV4dGVuZCIsImF4aW9zIiwiaW5zdGFuY2VDb25maWciLCJtZXJnZSIsIkNhbmNlbCIsIkNhbmNlbFRva2VuIiwiaXNDYW5jZWwiLCJwcm9taXNlcyIsInNwcmVhZCIsIjc3NiIsImlzQnVmZmVyIiwiaXNBcnJheUJ1ZmZlciIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsImlzQXJyYXlCdWZmZXJWaWV3IiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaXNVbmRlZmluZWQiLCJpc09iamVjdCIsImlzRGF0ZSIsImlzRmlsZSIsImlzQmxvYiIsImlzRnVuY3Rpb24iLCJpc1N0cmVhbSIsInBpcGUiLCJpc1VSTFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRyaW0iLCJzdHIiLCJyZXBsYWNlIiwiaXNTdGFuZGFyZEJyb3dzZXJFbnYiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwibCIsImFzc2lnblZhbHVlIiwiNzc3IiwiNzc4IiwiaXNTbG93QnVmZmVyIiwiX2lzQnVmZmVyIiwicmVhZEZsb2F0TEUiLCI3NzkiLCJJbnRlcmNlcHRvck1hbmFnZXIiLCJkaXNwYXRjaFJlcXVlc3QiLCJpbnRlcmNlcHRvcnMiLCJ0b0xvd2VyQ2FzZSIsImNoYWluIiwidW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMiLCJpbnRlcmNlcHRvciIsInVuc2hpZnQiLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInB1c2hSZXNwb25zZUludGVyY2VwdG9ycyIsImZvckVhY2hNZXRob2ROb0RhdGEiLCJmb3JFYWNoTWV0aG9kV2l0aERhdGEiLCI3ODAiLCJub3JtYWxpemVIZWFkZXJOYW1lIiwiREVGQVVMVF9DT05URU5UX1RZUEUiLCJDb250ZW50LVR5cGUiLCJzZXRDb250ZW50VHlwZUlmVW5zZXQiLCJnZXREZWZhdWx0QWRhcHRlciIsImFkYXB0ZXIiLCJYTUxIdHRwUmVxdWVzdCIsInRyYW5zZm9ybVJlcXVlc3QiLCJzdHJpbmdpZnkiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInRpbWVvdXQiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwibWF4Q29udGVudExlbmd0aCIsInZhbGlkYXRlU3RhdHVzIiwic3RhdHVzIiwiY29tbW9uIiwiQWNjZXB0IiwiNzgxIiwibm9ybWFsaXplZE5hbWUiLCJwcm9jZXNzSGVhZGVyIiwidG9VcHBlckNhc2UiLCI3ODIiLCJzZXR0bGUiLCJidWlsZFVSTCIsInBhcnNlSGVhZGVycyIsImlzVVJMU2FtZU9yaWdpbiIsImNyZWF0ZUVycm9yIiwiYnRvYSIsInhockFkYXB0ZXIiLCJkaXNwYXRjaFhoclJlcXVlc3QiLCJyZXF1ZXN0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwibG9hZEV2ZW50IiwieERvbWFpbiIsIlhEb21haW5SZXF1ZXN0Iiwib25wcm9ncmVzcyIsImhhbmRsZVByb2dyZXNzIiwib250aW1lb3V0IiwiaGFuZGxlVGltZW91dCIsImF1dGgiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiQXV0aG9yaXphdGlvbiIsIm9wZW4iLCJwYXJhbXMiLCJwYXJhbXNTZXJpYWxpemVyIiwiaGFuZGxlTG9hZCIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVVSTCIsInJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJoYW5kbGVFcnJvciIsImNvb2tpZXMiLCJ4c3JmVmFsdWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZWFkIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uRG93bmxvYWRQcm9ncmVzcyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJ1cGxvYWQiLCJjYW5jZWxUb2tlbiIsIm9uQ2FuY2VsZWQiLCJzZW5kIiwiNzgzIiwiNzg0IiwiZW5oYW5jZUVycm9yIiwiY29kZSIsIjc4NSIsIjc4NiIsImVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZWRQYXJhbXMiLCJwYXJ0cyIsInNlcmlhbGl6ZSIsInBhcnNlVmFsdWUiLCJ0b0lTT1N0cmluZyIsIjc4NyIsImlnbm9yZUR1cGxpY2F0ZU9mIiwicGFyc2VkIiwicGFyc2VyIiwibGluZSIsInN1YnN0ciIsIjc4OCIsInN0YW5kYXJkQnJvd3NlckVudiIsIm1zaWUiLCJ0ZXN0IiwidXNlckFnZW50IiwidXJsUGFyc2luZ05vZGUiLCJvcmlnaW5VUkwiLCJyZXNvbHZlVVJMIiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsInByb3RvY29sIiwiaG9zdCIsInNlYXJjaCIsImhhc2giLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVxdWVzdFVSTCIsIm5vblN0YW5kYXJkQnJvd3NlckVudiIsIjc4OSIsImNoYXJzIiwiRSIsImJsb2NrIiwiY2hhckNvZGUiLCJpZHgiLCJjaGFyQ29kZUF0IiwiNzkwIiwid3JpdGUiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsImNvb2tpZSIsInRvR01UU3RyaW5nIiwiUmVnRXhwIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiNzkxIiwiaGFuZGxlcnMiLCJ1c2UiLCJlamVjdCIsImZvckVhY2hIYW5kbGVyIiwiaCIsIjc5MiIsInRyYW5zZm9ybURhdGEiLCJpc0Fic29sdXRlVVJMIiwiY29tYmluZVVSTHMiLCJ0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkIiwidGhyb3dJZlJlcXVlc3RlZCIsImJhc2VVUkwiLCJjbGVhbkhlYWRlckNvbmZpZyIsIm9uQWRhcHRlclJlc29sdXRpb24iLCJvbkFkYXB0ZXJSZWplY3Rpb24iLCJyZWFzb24iLCI3OTMiLCJmbnMiLCI3OTQiLCJfX0NBTkNFTF9fIiwiNzk1IiwiNzk2IiwicmVsYXRpdmVVUkwiLCI3OTciLCI3OTgiLCJleGVjdXRvciIsInByb21pc2VFeGVjdXRvciIsInRva2VuIiwiNzk5IiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiJBQUFBQSxlQUFjO0lBRVJDLEdBQ0EsU0FBVUMsUUFBUUMsU0FBU0M7UUFFaEM7UUNFRCxJQUFBQyxTQUFBRCxvQkFBQTtRREVDLElBQUlFLFVBQVVDLHVCQUF1QkY7UUNEdEMsSUFBQUcsWUFBQUosb0JBQUE7UURLQyxJQUFJSyxhQUFhRix1QkFBdUJDO1FDSHpDLElBQUFFLE9BQUFOLG9CQUFBO1FET0MsSUFBSU8sUUFBUUosdUJBQXVCRztRQ0xwQyxJQUFBRSxTQUFBUixvQkFBQTtRQUNBLElBQUFTLGFBQUFULG9CQUFBO1FEVUMsSUFBSVUsY0FBY1AsdUJBQXVCTTtRQ1QxQyxJQUFBRSxjQUFBWCxvQkFBQTtRQUNBLElBQUFZLDBCQUFBWixvQkFBQTtRQUVBLElBQUFhLFdBQUFiLG9CQUFBO1FBQ0EsSUFBQWMsU0FBQWQsb0JBQUE7UURlQyxTQUFTRyx1QkFBdUJZO1lBQU8sT0FBT0EsT0FBT0EsSUFBSUMsYUFBYUQ7Z0JBQVFFLFNBQVNGOzs7UUNaeEYsSUFBTUcsa0JBQWlCLEdBQUFSLFlBQUFPO1FBSXZCLElBQU1FLGdCQUFnQkMsT0FBT0MsZ0NBQWdDRCxPQUFPQztRQUVwRSxJQUFJQztRQUNKLElBQUlILGVBQWU7WUFDZkcsU0FBUyxHQUFBZCxPQUFBZSxhQUFZQyxtQkFBUyxHQUFBaEIsT0FBQWlCLFVBQVEsR0FBQWpCLE9BQUFrQixpQkFBZ0JSLGlCQUFpQkM7ZUFDcEU7WUFDSEcsU0FBUSxHQUFBZCxPQUFBZSxhQUFZQyxtQkFBUyxHQUFBaEIsT0FBQWtCLGlCQUFnQlI7O1FBR2pEQSxlQUFlUyxJQUFJQztRQUVuQkMsU0FBU0MsaUJBQWlCLG9CQUFvQjtZQUMxQ0MsbUJBQVNDLE9BQ0w5QixRQUFBZSxRQUFBZ0IsY0FBQ3RCLFlBQUF1QjtnQkFBU1osT0FBT0E7ZUFDYnBCLFFBQUFlLFFBQUFnQixjQUFDMUIsTUFBQVUsU0FBRCxRQUVKWSxTQUFTTSxlQUFlOzs7SUQwQjFCQyxLQUNBLFNBQVV0QyxRQUFRQyxTQUFTQztRQUVoQztRQUVBcUMsT0FBT0MsZUFBZXZDLFNBQVM7WUFDM0J3QyxPQUFPOztRQUdYLElBQUlDLGVBQWU7WUFBYyxTQUFTQyxpQkFBaUJDLFFBQVFDO2dCQUFTLEtBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRCxNQUFNRSxRQUFRRCxLQUFLO29CQUFFLElBQUlFLGFBQWFILE1BQU1DO29CQUFJRSxXQUFXQyxhQUFhRCxXQUFXQyxjQUFjO29CQUFPRCxXQUFXRSxlQUFlO29CQUFNLElBQUksV0FBV0YsWUFBWUEsV0FBV0csV0FBVztvQkFBTVosT0FBT0MsZUFBZUksUUFBUUksV0FBV0ksS0FBS0o7OztZQUFpQixPQUFPLFNBQVVLLGFBQWFDLFlBQVlDO2dCQUFlLElBQUlELFlBQVlYLGlCQUFpQlUsWUFBWUcsV0FBV0Y7Z0JBQWEsSUFBSUMsYUFBYVosaUJBQWlCVSxhQUFhRTtnQkFBYyxPQUFPRjs7O1FFckVqaUIsSUFBQWxELFNBQUFELG9CQUFBO1FGeUVDLElBQUlFLFVBQVVDLHVCQUF1QkY7UUV4RXRDLElBQUFVLGNBQUFYLG9CQUFBO1FBQ0EsSUFBQXVELFNBQUF2RCxvQkFBQTtRQUVBLElBQUF3RCxTQUFBeEQsb0JBQUE7UUY2RUMsSUU3RVd5RCxJRjZFSEMsd0JBQXdCRjtRQUVoQyxTQUFTRSx3QkFBd0IzQztZQUFPLElBQUlBLE9BQU9BLElBQUlDLFlBQVk7Z0JBQUUsT0FBT0Q7bUJBQVk7Z0JBQUUsSUFBSTRDO2dCQUFhLElBQUk1QyxPQUFPLE1BQU07b0JBQUUsS0FBSyxJQUFJbUMsT0FBT25DLEtBQUs7d0JBQUUsSUFBSXNCLE9BQU9pQixVQUFVTSxlQUFlQyxLQUFLOUMsS0FBS21DLE1BQU1TLE9BQU9ULE9BQU9uQyxJQUFJbUM7OztnQkFBVVMsT0FBTzFDLFVBQVVGO2dCQUFLLE9BQU80Qzs7O1FBRWxRLFNBQVN4RCx1QkFBdUJZO1lBQU8sT0FBT0EsT0FBT0EsSUFBSUMsYUFBYUQ7Z0JBQVFFLFNBQVNGOzs7UUFFdkYsU0FBUytDLGdCQUFnQkMsVUFBVVo7WUFBZSxNQUFNWSxvQkFBb0JaLGNBQWM7Z0JBQUUsTUFBTSxJQUFJYSxVQUFVOzs7UUFFaEgsU0FBU0MsMkJBQTJCQyxNQUFNTDtZQUFRLEtBQUtLLE1BQU07Z0JBQUUsTUFBTSxJQUFJQyxlQUFlOztZQUFnRSxPQUFPTixnQkFBZ0JBLFNBQVMsbUJBQW1CQSxTQUFTLGNBQWNBLE9BQU9LOztRQUV6TyxTQUFTRSxVQUFVQyxVQUFVQztZQUFjLFdBQVdBLGVBQWUsY0FBY0EsZUFBZSxNQUFNO2dCQUFFLE1BQU0sSUFBSU4sVUFBVSxvRUFBb0VNOztZQUFlRCxTQUFTZixZQUFZakIsT0FBT2tDLE9BQU9ELGNBQWNBLFdBQVdoQjtnQkFBYWtCO29CQUFlakMsT0FBTzhCO29CQUFVdEIsWUFBWTtvQkFBT0UsVUFBVTtvQkFBTUQsY0FBYzs7O1lBQVcsSUFBSXNCLFlBQVlqQyxPQUFPb0MsaUJBQWlCcEMsT0FBT29DLGVBQWVKLFVBQVVDLGNBQWNELFNBQVNLLFlBQVlKOztRRXJGbGUsSUFBTUssZUFBZSxTQUFmQSxhQUFlQztZQUFnRCxJQUE3Q0MsSUFBNkNELEtBQTdDQyxHQUFHQyxnQkFBMENGLEtBQTFDRSxlQUFlQyx1QkFBMkJILEtBQTNCRztZQUN0QyxPQUNJN0UsUUFBQWUsUUFBQWdCLGNBQUEsY0FDSS9CLFFBQUFlLFFBQUFnQixjQUFBLGVBQ0kvQixRQUFBZSxRQUFBZ0IsY0FBQTtnQkFDSStDLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xDLFNBQVNKO2dCQUNUSyxVQUFVSjtnQkFFYkYsRUFBRTs7UUFNbkIsSUFBTU8sVUFBVSxTQUFWQSxRQUFVQztZQUEyRSxJQUF4RVIsSUFBd0VRLE1BQXhFUixHQUFHUyxVQUFxRUQsTUFBckVDLFNBQVNDLGdCQUE0REYsTUFBNURFLGVBQWVULGdCQUE2Q08sTUFBN0NQLGVBQWVVLDBCQUE4QkgsTUFBOUJHO1lBQ3pELElBQU1OLFVBQVVLLGtCQUFpQixHQUFBaEMsT0FBQWtDLFNBQVFILFFBQVFOLElBQUlPLGdCQUNqREcsV0FBV1osZ0JBQWdCLEtBQUssWUFDaENhLGtCQUFrQlQsVUFBVSxxQkFBb0IsSUFDaERVLGNBQWNGLFdBQVdDLGlCQUN6QkUsY0FBY0gsV0FBWTtZQUM5QixPQUNJeEYsUUFBQWUsUUFBQWdCLGNBQUE7Z0JBQ0lpQixLQUFLb0MsUUFBUU47Z0JBQ2JBLElBQUlNLFFBQVFOO2dCQUNaYyxTQUFTTjtnQkFDVE8sV0FBV0g7ZUFFWDFGLFFBQUFlLFFBQUFnQixjQUFBLFlBQ0kvQixRQUFBZSxRQUFBZ0IsY0FBQTtnQkFDSStDLElBQUlNLFFBQVFOO2dCQUNaQyxNQUFLO2dCQUNMQyxTQUFTQTtnQkFDVFEsV0FBV1o7Z0JBQ1hrQixVQUFVO2lCQUdsQjlGLFFBQUFlLFFBQUFnQixjQUFBO2dCQUFJOEQsV0FBV0Y7ZUFBY1AsUUFBUU4sS0FDckM5RSxRQUFBZSxRQUFBZ0IsY0FBQSxZQUFLcUQsUUFBUVcsU0FBU3BCLEVBQUU7O1FBS3BDLElBQU1xQixZQUFZLFNBQVpBLFVBQVlDO1lBQStELElBQTVEdEIsSUFBNERzQixNQUE1RHRCLEdBQUd1QixZQUF5REQsTUFBekRDLFdBQVdDLDJCQUE4Q0YsTUFBOUNFLDBCQUEwQnZCLGdCQUFvQnFCLE1BQXBCckI7WUFDekQsSUFBTVksV0FBV1osZ0JBQWdCLFFBQVEsTUFDckNpQixZQUFZLHVCQUF1QmpCLGdCQUFnQixLQUFLO1lBQzVELE9BQ0k1RSxRQUFBZSxRQUFBZ0IsY0FBQTtnQkFBSzhELFdBQVdqQixnQkFBZ0J3QixZQUFZO2VBQ3hDcEcsUUFBQWUsUUFBQWdCLGNBQUE7Z0JBQVE2RCxTQUFTTztnQkFBMEJYLFVBQVVBO2dCQUFVSyxXQUFXQTtlQUNyRUssWUFBWXZCLEVBQUUsd0JBQXdCQSxFQUFFOztRQU16RCxJQUFNMEIsUUFBUSxTQUFSQSxNQUFRQztZQUFrQixJQUFmM0IsSUFBZTJCLE1BQWYzQixHQUFHNEIsUUFBWUQsTUFBWkM7WUFDaEIsT0FBT0EsUUFBUXZHLFFBQUFlLFFBQUFnQixjQUFBLGFBQU00QyxFQUFFLHNCQUFzQjRCLE1BQU1DLFdBQWlCOztRQUd4RSxJQUFNQyxXQUFXLFNBQVhBLFNBQVdDO1lBVVgsSUFURi9CLElBU0UrQixNQVRGL0IsR0FDQTRCLFFBUUVHLE1BUkZILE9BQ0FJLGVBT0VELE1BUEZDLGNBQ0F0QixnQkFNRXFCLE1BTkZyQixlQUNBVCxnQkFLRThCLE1BTEY5QixlQUNBc0IsWUFJRVEsTUFKRlIsV0FDQXJCLHVCQUdFNkIsTUFIRjdCLHNCQUNBc0IsMkJBRUVPLE1BRkZQLDBCQUNBYiwwQkFDRW9CLE1BREZwQjtZQUVBLElBQU1PLFlBQVlqQixnQkFBZ0IsS0FBSztZQUN2QyxPQUNJNUUsUUFBQWUsUUFBQWdCLGNBQUEsY0FDSS9CLFFBQUFlLFFBQUFnQixjQUFDc0U7Z0JBQU0xQixHQUFHQTtnQkFBRzRCLE9BQU9BO2dCQUNwQnZHLFFBQUFlLFFBQUFnQixjQUFDMEM7Z0JBQ0dFLEdBQUdBO2dCQUNIQyxlQUFlQTtnQkFDZkMsc0JBQXNCQTtnQkFFMUI3RSxRQUFBZSxRQUFBZ0IsY0FBQ2lFO2dCQUNHckIsR0FBR0E7Z0JBQ0h1QixXQUFXQTtnQkFDWEMsMEJBQTBCQTtnQkFDMUJ2QixlQUFlQTtnQkFFbkI1RSxRQUFBZSxRQUFBZ0IsY0FBQSxlQUNJL0IsUUFBQWUsUUFBQWdCLGNBQUEsZUFDSS9CLFFBQUFlLFFBQUFnQixjQUFBLFlBQ0kvQixRQUFBZSxRQUFBZ0IsY0FBQTtnQkFBSThELFdBQVdBO2VBQVlsQixFQUFFLGtCQUM3QjNFLFFBQUFlLFFBQUFnQixjQUFBO2dCQUFJOEQsV0FBV0E7ZUFBWWxCLEVBQUUsZ0JBQzdCM0UsUUFBQWUsUUFBQWdCLGNBQUE7Z0JBQUk4RCxXQUFXQTtlQUFZbEIsRUFBRSxxQkFHckMzRSxRQUFBZSxRQUFBZ0IsY0FBQSxlQUNLNEUsYUFBYUMsSUFBSSxTQUFBeEI7Z0JBQUEsT0FDZHBGLFFBQUFlLFFBQUFnQixjQUFDbUQ7b0JBQ0dQLEdBQUdBO29CQUNIM0IsS0FBS29DLFFBQVFOO29CQUNiTSxTQUFTQTtvQkFDVEMsZUFBZUE7b0JBQ2ZULGVBQWVBO29CQUNmVSx5QkFBeUJBOzs7O1FGNkpwRCxJRXBKS3VCLE1Gb0pLLFNBQVVDO1lBQ2hCNUMsVUFBVTJDLEtBQUtDO1lFcEpoQixTQUFBRCxJQUFZcEU7Z0JBQU9tQixnQkFBQW1ELE1BQUFGO2dCQUFBLElBQUFHLFFBQUFqRCwyQkFBQWdELE9BQUFGLElBQUFyQyxhQUFBckMsT0FBQThFLGVBQUFKLE1BQUFsRCxLQUFBb0QsTUFDVHRFO2dCQUNOdUUsTUFBS0Usd0JBQXdCRixNQUFLRSxzQkFBc0JDLEtBQTNCSDtnQkFDN0JBLE1BQUtJLHFCQUFxQkosTUFBS0ksbUJBQW1CRCxLQUF4Qkg7Z0JBQzFCQSxNQUFLSyx5QkFBeUJMLE1BQUtLLHVCQUF1QkYsS0FBNUJIO2dCQUM5QkEsTUFBS3JDLElBQUlxQyxNQUFLckMsRUFBRXdDLEtBQVBIO2dCQUxNLE9BQUFBOztZRnFLbEIxRSxhQUFhdUU7Z0JBQ1Q3RCxLQUFLO2dCQUNMWCxPQUFPLFNBQVNzQyxFRTlKbkIyQztvQkFDRSxPQUFPUCxLQUFLdEUsTUFBTThFLFdBQVdSLEtBQUt0RSxNQUFNOEUsUUFBUUQ7OztnQkZpSy9DdEUsS0FBSztnQkFDTFgsT0FBTyxTQUFTK0UsbUJFL0pGSTtvQkFDZkEsRUFBRUM7b0JBQ0ZWLEtBQUt0RSxNQUFNaUYscUJBQXFCRixFQUFFaEYsT0FBT3dDOzs7Z0JGa0t4Q2hDLEtBQUs7Z0JBQ0xYLE9BQU8sU0FBU2dGLHVCRWhLRUc7b0JBQ25CQSxFQUFFQztvQkFDRlYsS0FBS3RFLE1BQU1rRjs7O2dCRm1LVjNFLEtBQUs7Z0JBQ0xYLE9BQU8sU0FBUzZFLHNCRWpLQ007b0JBQ2xCQSxFQUFFQztvQkFDRixJQUFNakYsU0FBU2dGLEVBQUVJO29CQUNqQixLQUFLcEYsT0FBT3FGLFVBQVVDLFNBQVMsYUFBYTt3QkFDeEMsSUFBTWhELEtBQUtpRCxTQUFTdkYsT0FBT3dGLGFBQWE7d0JBQ3hDakIsS0FBS3RFLE1BQU13Rix5QkFBeUJuRDs7OztnQkZxS3ZDOUIsS0FBSztnQkFDTFgsT0FBTyxTQUFTNkY7b0JFaktqQixJQUFNQyxVQUFTLEdBQUE5RSxPQUFBK0UsaUJBQWdCLG9CQUFvQnREO29CQUNuRGlDLEtBQUt0RSxNQUFNNEY7d0JBQVdGOztvQkFFdEIsSUFBTVosV0FBVSxHQUFBbEUsT0FBQStFLGlCQUFnQjtvQkFDaENyQixLQUFLdEUsTUFBTTRGO3dCQUFXZDs7b0JBRXRCUixLQUFLdEUsTUFBTTZGLG9CQUFvQkg7OztnQkZxSzlCbkYsS0FBSztnQkFDTFgsT0FBTyxTQUFTUDtvQkVuS1osSUFBQXlHLFNBQ29FeEIsS0FBS3RFLE9BQXRFbUMsZ0JBREgyRCxPQUNHM0QsZUFBZXNCLFlBRGxCcUMsT0FDa0JyQyxXQUFXUyxlQUQ3QjRCLE9BQzZCNUIsY0FBY3RCLGdCQUQzQ2tELE9BQzJDbEQsZUFBZWtCLFFBRDFEZ0MsT0FDMERoQztvQkFDL0QsT0FBT0ksZUFDSDNHLFFBQUFlLFFBQUFnQixjQUFDMEU7d0JBQ0c5QixHQUFHb0MsS0FBS3BDO3dCQUNSNEIsT0FBT0E7d0JBQ1AzQixlQUFlQTt3QkFDZnNCLFdBQVdBO3dCQUNYUyxjQUFjQTt3QkFDZHRCLGVBQWVBO3dCQUNmUixzQkFBc0JrQyxLQUFLSzt3QkFDM0JqQiwwQkFBMEJZLEtBQUtNO3dCQUMvQi9CLHlCQUF5QnlCLEtBQUtHO3lCQUdsQ2xILFFBQUFlLFFBQUFnQixjQUFBLGNBQU0sR0FBQXNCLE9BQUFzQixHQUFFOzs7WUY4S2YsT0FBT2tDO1VFeE9NMkIsZ0JBQU1DO1FBK0R4QixJQUFNQyxrQkFBa0IsU0FBbEJBLGdCQUFrQkM7WUFBUyxJQUV6QkMsV0FPQUQsTUFQQUMsVUFDQXJDLFFBTUFvQyxNQU5BcEMsT0FDQUksZUFLQWdDLE1BTEFoQyxjQUNBL0IsZ0JBSUErRCxNQUpBL0QsZUFDQXNCLFlBR0F5QyxNQUhBekMsV0FDQWIsZ0JBRUFzRCxNQUZBdEQsZUFDQWtDLFVBQ0FvQixNQURBcEI7WUFFSjtnQkFBU3FCO2dCQUFVckM7Z0JBQU9JO2dCQUFjL0I7Z0JBQWVzQjtnQkFBV2I7Z0JBQWVrQzs7O1FBR3JGLElBQU1zQixxQkFBcUIsU0FBckJBLG1CQUFxQkM7WUFDdkI7Z0JBQ0lSLHFCQUFxQixTQUFBQSxvQkFBQUg7b0JBQUEsT0FBVVc7d0JBQVcvRCxNQUFNeEIsRUFBRXdGO3dCQUFjQzs0QkFBUWI7Ozs7Z0JBQ3hFRSxVQUFVLFNBQUFBLFNBQUFXO29CQUFBLE9BQVFGO3dCQUFXL0QsTUFBTXhCLEVBQUUwRjt3QkFBV0Q7OztnQkFDaERmLDBCQUEwQixTQUFBQSx5QkFBQWlCO29CQUFBLE9BQ3RCSjt3QkFBVy9ELE1BQU14QixFQUFFNEY7d0JBQTBCSDs0QkFBUUU7Ozs7Z0JBQ3pEeEIsc0JBQXNCLFNBQUFBLHFCQUFBOUM7b0JBQUEsT0FDbEJrRTt3QkFBVy9ELE1BQU14QixFQUFFNkY7d0JBQXNCSjs0QkFBUXBFOzs7O2dCQUNyRCtDLG1CQUFtQixTQUFBQTtvQkFBQSxPQUFNbUI7d0JBQVcvRCxNQUFNeEIsRUFBRThGOzs7OztRRnVMbkR4SixRQUFRa0IsV0VuTE0sR0FBQU4sWUFBQTZJLFNBQVFaLGlCQUFpQkcsb0JBQW9CaEM7O0lGdUx0RDBDLEtBQ0EsU0FBVTNKLFFBQVFDLFNBQVNDO1FBRWhDO1FBRUFxQyxPQUFPQyxlQUFldkMsU0FBUztZQUMzQndDLE9BQU87O1FBRVh4QyxRQUFRdUksa0JBQWtCdkksUUFBUTBGLFVBQVUxRixRQUFRMkosWUFBWXBEO1FHNVlqRSxJQUFBcUQsU0FBQTNKLG9CQUFBO1FIZ1pDLElBQUk0SixVQUFVekosdUJBQXVCd0o7UUFFckMsU0FBU3hKLHVCQUF1Qlk7WUFBTyxPQUFPQSxPQUFPQSxJQUFJQyxhQUFhRDtnQkFBUUUsU0FBU0Y7OztRR2haakYsSUFBTTJJO1lBQ1RHLHNCQUFzQixTQUFBQSxxQkFBQTdFO2dCQUFBLDBDQUF1Q0EsS0FBdkM7OztRQUduQixJQUFNUyw0QkFBVSxTQUFWQSxRQUFXMUUsS0FBSytJO1lBQU4sT0FBY0EsT0FBT0EsSUFBSUMsUUFBUWhKLFVBQVU7O1FBRTNELElBQU11SCw0Q0FBa0IsU0FBbEJBLGdCQUFrQjBCO1lBQzNCLE9BQU9DLEtBQUtDLE1BQU1ySSxTQUFTTSxlQUFlNkgsYUFBYUc7OztJSGdhckRDLEtBQ0EsU0FBVXRLLFFBQVFDO1FBRXZCO1FBRUFzQyxPQUFPQyxlQUFldkMsU0FBUztZQUMzQndDLE9BQU87O1FJOWFMLElBQ0g0RyxnQ0FBWSxhQUVaRixzQ0FBZSxnQkFDZm9CLDRDQUFrQixtQkFDbEJDLDRDQUFrQixtQkFFbEJDLHNDQUFlLGdCQUNmQyw0Q0FBa0IsbUJBQ2xCQyw0Q0FBa0IsbUJBRWxCcEIsOERBQTJCLDRCQUMzQkMsc0RBQXVCLHdCQUN2QkMsa0VBQTZCOztJSitiM0JtQixLQUNBLFNBQVU1SyxRQUFRQyxTQUFTQztRS3JkakM7UUFFQUQsUUFBQWlCLGFBQUE7UUFDQWpCLFFBQUE0SyxRQUFBNUssUUFBQTZLLFVBQUE3SyxRQUFBOEssU0FBQTlLLFFBQUErSyxTQUFBL0ssUUFBQWdMLFFBQUFoTCxRQUFBaUwsV0FBQWpMLFFBQUFrTCxhQUFBbEwsUUFBQW1MLFlBQUFuTCxRQUFBb0wsVUFBQXBMLFFBQUFxTCxVQUFBckwsUUFBQXNMLGVBQUF0TCxRQUFBdUwsTUFBQXZMLFFBQUF3TCxVQUFBakY7UUFFQSxJQUFBa0YsV0FBQXhMLG9CQUFBO1FBRUFxQyxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBRCxTQUFBRDs7O1FBSUEsSUFBQUcsV0FBQTFMLG9CQUFBO1FBRUFxQyxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBQyxTQUFBSjs7O1FBR0FqSixPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBQyxTQUFBTDs7O1FBR0FoSixPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBQyxTQUFBTjs7O1FBSUEsSUFBQU8sV0FBQTNMLG9CQUFBO1FBRUFxQyxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBRSxTQUFBUjs7O1FBSUEsSUFBQVMsZUFBQTVMLG9CQUFBO1FBRUFxQyxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBRyxhQUFBVjs7O1FBR0E3SSxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBRyxhQUFBWDs7O1FBR0E1SSxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBRyxhQUFBWjs7O1FBSUEsSUFBQXpILFNBQUF2RCxvQkFBQTtRQUVBcUMsT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQWxJLE9BQUF3SDs7O1FBR0ExSSxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBbEksT0FBQXVIOzs7UUFJQSxJQUFBZSxNQUFBN0wsb0JBQUE7UUFFQXFDLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFJLElBQUFoQjs7O1FBSUEsSUFBQWlCLGNBQUE5TCxvQkFBQTtRQUVBLElBQUErTCxlQUFBNUwsdUJBQUEyTDtRQUVBLElBQUFFLFdBQUFoTSxvQkFBQTtRQUVBLElBQUE0SyxVQUFBbEgsd0JBQUFzSTtRQUVBLElBQUFDLFVBQUFqTSxvQkFBQTtRQUVBLElBQUEySyxRQUFBakgsd0JBQUF1STtRQUVBLFNBQUF2SSx3QkFBQTNDO1lBQXVDLElBQUFBLFdBQUFDLFlBQUE7Z0JBQTZCLE9BQUFEO21CQUFjO2dCQUFPLElBQUE0QztnQkFBaUIsSUFBQTVDLE9BQUE7b0JBQW1CLFNBQUFtQyxPQUFBbkMsS0FBQTt3QkFBdUIsSUFBQXNCLE9BQUFpQixVQUFBTSxlQUFBQyxLQUFBOUMsS0FBQW1DLE1BQUFTLE9BQUFULE9BQUFuQyxJQUFBbUM7OztnQkFBZ0ZTLE9BQUExQyxVQUFBRjtnQkFBc0IsT0FBQTRDOzs7UUFFMVAsU0FBQXhELHVCQUFBWTtZQUFzQyxPQUFBQSxXQUFBQyxhQUFBRDtnQkFBdUNFLFNBQUFGOzs7UUFFN0VoQixRQUFBa0IsVUFBQThLLGFBQUE5SztRQUNBbEIsUUFBQTZLO1FBQ0E3SyxRQUFBNEs7O0lMMmRNdUIsS0FDQSxTQUFVcE0sUUFBUUMsU0FBU0M7U012a0JqQyxTQUFBbU07WUFBQTtZQUVBcE0sUUFBQWlCLGFBQUE7WUFDQWpCLFFBQUF3TDtZQUVBLElBQUFoSSxTQUFBdkQsb0JBQUE7WUFFQSxJQUFBb00sUUFBQXBNLG9CQUFBO1lBRUEsSUFBQXFNLFNBQUFsTSx1QkFBQWlNO1lBRUEsU0FBQWpNLHVCQUFBWTtnQkFBc0MsT0FBQUEsV0FBQUMsYUFBQUQ7b0JBQXVDRSxTQUFBRjs7O1lBRTdFLElBQUF1TCxxQkFBQTtZQUNBLElBQUFDLG9CQUFBRCxxQkFBQTtZQUVBLFNBQUFmLFFBQUFpQixnQkFBQUM7Z0JBQ0EsU0FBQUMsT0FBQUMsVUFBQTlKLFFBQUErSixPQUFBQyxNQUFBSCxPQUFBLElBQUFBLE9BQUEsUUFBQUksT0FBQSxHQUFvRkEsT0FBQUosTUFBYUksUUFBQTtvQkFDakdGLEtBQUFFLE9BQUEsS0FBQUgsVUFBQUc7O2dCQUdBLElBQUFDLGdCQUFBO2dCQUVBLElBQUF4SixPQUFBeUosR0FBQUQsU0FBQVAsaUJBQUE7b0JBQ0EsSUFBQUwsUUFBQWMsSUFBQUMsYUFBQTt5QkFDQSxHQUFBM0osT0FBQTRKLEtBQUEsK0VBQUFiOztvQkFFQVMsV0FBQVA7b0JBQ0FBLGlCQUFBQzt1QkFDRztxQkFDSCxHQUFBbEosT0FBQTZKLE9BQUFYLE1BQUFsSixPQUFBeUosR0FBQUssTUFBQWQ7b0JBQ0FRLFdBQUFOLEtBQUFhLE1BQUFoSCxXQUFBc0c7cUJBQ0EsR0FBQXJKLE9BQUE2SixPQUFBTCxVQUFBeEosT0FBQXlKLEdBQUFELFVBQUFSOztnQkFHQSxJQUFBZ0Isa0JBQUFmLGdCQUNBZ0IsWUFBQUQsZ0JBQUFDLFdBQ0F4RSxXQUFBdUUsZ0JBQUF2RSxVQUNBeUUsV0FBQUYsZ0JBQUFFLFVBQ0FDLFVBQUFILGdCQUFBRyxTQUNBQyxjQUFBSixnQkFBQUksYUFDQUMsU0FBQUwsZ0JBQUFLLFFBQ0FDLFVBQUFOLGdCQUFBTTtnQkFHQSxJQUFBQyxZQUFBLEdBQUF2SyxPQUFBd0s7Z0JBRUEsSUFBQUosYUFBQTtvQkFFQUEsWUFBQUssa0JBQUFMLFlBQUFLLG1CQUFBekssT0FBQTBLO29CQUNBTixZQUFBTyxpQkFBQVAsWUFBQU8sa0JBQUEzSyxPQUFBMEs7b0JBQ0FOLFlBQUFRLGlCQUFBUixZQUFBUSxrQkFBQTVLLE9BQUEwSztvQkFDQU4sWUFBQVMsa0JBQUFULFlBQUFTLG1CQUFBN0ssT0FBQTBLO29CQUNBTixZQUFBVSxtQkFBQVYsWUFBQVUsb0JBQUE5SyxPQUFBMEs7b0JBRUFOLFlBQUFLO3dCQUFpQ0Y7d0JBQUFRLE1BQUE7d0JBQUFDLGdCQUFBO3dCQUFBQzs0QkFBNkRGLE1BQUE7NEJBQUE3Qjs0QkFBQUc7Ozs7Z0JBRzlGLElBQUE2QixRQUFBLEdBQUFwQyxPQUFBcEwsU0FBQThMLFVBQUFTLFlBQUEsR0FBQWpLLE9BQUFtTCxrQkFBQTFGLFdBQUF5RSxVQUFBQztvQkFBa0hDO29CQUFBQztvQkFBQUM7bUJBQTZEQyxVQUFBckIsS0FBQWtDO2dCQUUvSyxJQUFBaEIsYUFBQTtvQkFDQUEsWUFBQU8sZUFBQUosVUFBQVc7O2dCQUdBLE9BQUFBOztXTjJrQjhCNUssS0FBSzlELFNBQVNDLG9CQUFvQjs7SUFJMUQ0TyxLQUNBLFNBQVU5TyxRQUFRQyxTQUFTQztTT2hwQmpDLFNBQUFtTTtZQUFBO1lBRUFwTSxRQUFBaUIsYUFBQTtZQUVBLElBQUE2TixXQUFBeE0sT0FBQXlNLFVBQUEsU0FBQXBNO2dCQUFtRCxTQUFBRSxJQUFBLEdBQWdCQSxJQUFBK0osVUFBQTlKLFFBQXNCRCxLQUFBO29CQUFPLElBQUFtTSxTQUFBcEMsVUFBQS9KO29CQUEyQixTQUFBTSxPQUFBNkwsUUFBQTt3QkFBMEIsSUFBQTFNLE9BQUFpQixVQUFBTSxlQUFBQyxLQUFBa0wsUUFBQTdMLE1BQUE7NEJBQXlEUixPQUFBUSxPQUFBNkwsT0FBQTdMOzs7O2dCQUFpQyxPQUFBUjs7WUFFL08sSUFBQXNNLGlCQUFBQyxXQUFBLHFCQUFBQSxPQUFBbEMsYUFBQSxvQkFBQWhNO2dCQUFvRyxjQUFBQTtnQkFBcUIsU0FBQUE7Z0JBQW1CLE9BQUFBLGNBQUFrTyxXQUFBLGNBQUFsTyxJQUFBeUQsZ0JBQUF5SyxVQUFBbE8sUUFBQWtPLE9BQUEzTCxZQUFBLGtCQUFBdkM7O1lBRTVJaEIsUUFBQXFOO1lBQ0FyTixRQUFBbVA7WUFDQW5QLFFBQUFvUDtZQUNBcFAsUUFBQXFQO1lBQ0FyUCxRQUFBc1A7WUFDQXRQLFFBQUFnTDtZQUNBaEwsUUFBQXVQO1lBQ0F2UCxRQUFBd1A7WUFDQXhQLFFBQUF5UDtZQUNBelAsUUFBQW9OO1lBQ0FwTixRQUFBMFA7WUFDQSxJQUFBQyxNQUFBM1AsUUFBQTJQLE1BQUEsU0FBQUEsSUFBQTFLO2dCQUNBLHlCQUFBQTs7WUFHQSxJQUFBMkssT0FBQTVQLFFBQUE0UCxPQUFBRCxJQUFBO1lBQ0EsSUFBQUUsU0FBQTdQLFFBQUE2UCxTQUFBRixJQUFBO1lBQ0EsSUFBQUcsUUFBQTlQLFFBQUE4UCxRQUFBSCxJQUFBO1lBQ0EsSUFBQTVFLFNBQUEvSyxRQUFBK0ssU0FBQTRFLElBQUE7WUFDQSxJQUFBSSxjQUFBL1AsUUFBQStQLGNBQUFKLElBQUE7WUFDQSxJQUFBSyxvQkFBQWhRLFFBQUFnUSxvQkFBQUwsSUFBQTtZQUNBLElBQUFNLFFBQUFqUSxRQUFBaVEsUUFBQSxTQUFBQSxNQUFBQztnQkFDQTtvQkFDQSxPQUFBQTs7O1lBR0EsSUFBQUMsUUFBQW5RLFFBQUFtUSxRQUFBRixNQUFBO1lBQ0EsSUFBQUcsU0FBQXBRLFFBQUFvUSxTQUFBSCxNQUFBO1lBQ0EsSUFBQS9CLE9BQUFsTyxRQUFBa08sT0FBQSxTQUFBQTtZQUNBLElBQUFtQyxRQUFBclEsUUFBQXFRLFFBQUEsU0FBQUEsTUFBQUg7Z0JBQ0EsT0FBQUE7O1lBR0EsU0FBQTdDLE1BQUE3SyxPQUFBOE4sV0FBQTVKO2dCQUNBLEtBQUE0SixVQUFBOU4sUUFBQTtvQkFDQTRLLElBQUEsOEJBQUExRztvQkFDQSxVQUFBRixNQUFBRTs7O1lBSUEsSUFBQTdDLGlCQUFBdkIsT0FBQWlCLFVBQUFNO1lBQ0EsU0FBQXNMLE9BQUFvQixRQUFBQztnQkFDQSxPQUFBdkQsR0FBQXdELFNBQUFGLFdBQUExTSxlQUFBQyxLQUFBeU0sUUFBQUM7O1lBR0EsSUFBQXZELEtBQUFqTixRQUFBaU47Z0JBQ0F5RCxPQUFBLFNBQUFBLE1BQUFSO29CQUNBLE9BQUFBLE1BQUEsUUFBQUEsTUFBQTNKOztnQkFFQWtLLFVBQUEsU0FBQUEsU0FBQVA7b0JBQ0EsT0FBQUEsTUFBQSxRQUFBQSxNQUFBM0o7O2dCQUVBK0csTUFBQSxTQUFBQSxLQUFBcUQ7b0JBQ0EsY0FBQUEsTUFBQTs7Z0JBRUFDLFFBQUEsU0FBQUEsT0FBQUM7b0JBQ0EsY0FBQUEsTUFBQTs7Z0JBRUFDLFFBQUEsU0FBQUEsT0FBQXJKO29CQUNBLGNBQUFBLE1BQUE7O2dCQUVBc0osT0FBQWpFLE1BQUFrRTtnQkFDQVQsUUFBQSxTQUFBQSxPQUFBdlA7b0JBQ0EsT0FBQUEsUUFBQWlNLEdBQUE4RCxNQUFBL1Asd0JBQUEsNEJBQUFpTyxRQUFBak8sVUFBQTs7Z0JBRUFpUSxTQUFBLFNBQUFBLFFBQUFDO29CQUNBLE9BQUFBLEtBQUFqRSxHQUFBSyxLQUFBNEQsRUFBQUM7O2dCQUVBbkUsVUFBQSxTQUFBQSxTQUFBb0U7b0JBQ0EsT0FBQUEsTUFBQW5FLEdBQUFLLEtBQUE4RCxHQUFBQyxTQUFBcEUsR0FBQUssS0FBQThELEdBQUFFOztnQkFFQUMsVUFBQSxTQUFBQSxTQUFBSDtvQkFDQSxPQUFBQSxNQUFBbkUsR0FBQUssS0FBQTRCLFVBQUFqQyxHQUFBSyxLQUFBOEQsR0FBQWxDLE9BQUFsQyxhQUFBQyxHQUFBOEQsTUFBQUs7O2dCQUVBMUMsTUFBQSxTQUFBQSxLQUFBOEM7b0JBQ0EsT0FBQUEsT0FBQTVCOztnQkFFQTZCLFlBQUEsU0FBQUEsV0FBQUM7b0JBQ0EsT0FBQUEsTUFBQXpFLEdBQUFLLEtBQUFvRSxHQUFBakU7O2dCQUVBa0UsUUFBQSxTQUFBQSxPQUFBQztvQkFDQSxPQUFBQSxPQUFBM0UsR0FBQUssS0FBQXNFLElBQUFDLFlBQUE1RSxHQUFBSyxLQUFBc0UsSUFBQUUsU0FBQTdFLEdBQUFLLEtBQUFzRSxJQUFBRzs7Z0JBRUFDLFNBQUEsU0FBQUEsUUFBQUM7b0JBQ0EsT0FBQUEsUUFBQWhGLEdBQUE2RCxPQUFBbUIsd0JBQUEsNEJBQUFoRCxRQUFBZ0QsVUFBQSxZQUFBaEYsR0FBQUssS0FBQTJFLFFBQUFoRixHQUFBOEQsTUFBQWtCOztnQkFFQTVHLFNBQUEsU0FBQUEsUUFBQTZHO29CQUNBLE9BQUFBLE1BQUFqRixHQUFBSyxLQUFBNEUsR0FBQUosU0FBQTdFLEdBQUFLLEtBQUE0RSxHQUFBQzs7Z0JBRUFDLFFBQUEsU0FBQUEsT0FBQWhCO29CQUNBLE9BQUFBLFNBQUF2Qjs7Z0JBRUF3QyxnQkFBQSxTQUFBQSxlQUFBMUI7b0JBQ0EsT0FBQTFELEdBQUFLLEtBQUFxRCxNQUFBeEIsT0FBQXdCLEdBQUE7OztZQUlBLElBQUFKLFNBQUF2USxRQUFBdVE7Z0JBQ0F4QixRQUFBLFNBQUFBLE9BQUFwTSxRQUFBcU07b0JBQ0EsU0FBQW5NLEtBQUFtTSxRQUFBO3dCQUNBLElBQUFHLE9BQUFILFFBQUFuTSxJQUFBOzRCQUNBRixPQUFBRSxLQUFBbU0sT0FBQW5NOzs7OztZQU1BLFNBQUF1TSxPQUFBMkIsT0FBQXVCO2dCQUNBLElBQUFDLFFBQUF4QixNQUFBL0csUUFBQXNJO2dCQUNBLElBQUFDLFNBQUE7b0JBQ0F4QixNQUFBeUIsT0FBQUQsT0FBQTs7O1lBSUEsSUFBQXhCLFFBQUEvUSxRQUFBK1E7Z0JBQ0EwQixNQUFBLFNBQUFBLEtBQUF6UjtvQkFDQSxJQUFBK0ksTUFBQStDLE1BQUE5TCxJQUFBOEI7b0JBQ0EsU0FBQUQsS0FBQTdCLEtBQUE7d0JBQ0EsSUFBQW1PLE9BQUFuTyxLQUFBNkIsSUFBQTs0QkFDQWtILElBQUFsSCxLQUFBN0IsSUFBQTZCOzs7b0JBR0EsT0FBQWtIOzs7WUFJQSxTQUFBc0Y7Z0JBQ0EsSUFBQXpNLFFBQUFnSyxVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUE7Z0JBRUEsSUFBQThGLE1BQUE1RCxhQUF1QmxNO2dCQUN2QixJQUFBcU8sVUFBQSxJQUFBMEIsUUFBQSxTQUFBQyxTQUFBQztvQkFDQUgsSUFBQUU7b0JBQ0FGLElBQUFHOztnQkFFQUgsSUFBQXpCO2dCQUNBLE9BQUF5Qjs7WUFHQSxTQUFBcEQsZ0JBQUF4TTtnQkFDQSxJQUFBaUg7Z0JBQ0EsU0FBQWxILElBQUEsR0FBaUJBLElBQUFDLFFBQVlELEtBQUE7b0JBQzdCa0gsSUFBQStJLEtBQUF6RDs7Z0JBRUEsT0FBQXRGOztZQUdBLFNBQUFpQixNQUFBK0g7Z0JBQ0EsSUFBQUMsTUFBQXBHLFVBQUE5SixTQUFBLEtBQUE4SixVQUFBLE9BQUFyRyxZQUFBcUcsVUFBQTtnQkFFQSxJQUFBcUcsaUJBQUE7Z0JBQ0EsSUFBQWhDLFVBQUEsSUFBQTBCLFFBQUEsU0FBQUM7b0JBQ0FLLFlBQUFDLFdBQUE7d0JBQ0EsT0FBQU4sUUFBQUk7dUJBQ0tEOztnQkFHTDlCLFFBQUFsRyxVQUFBO29CQUNBLE9BQUFvSSxhQUFBRjs7Z0JBR0EsT0FBQWhDOztZQUdBLFNBQUExQjtnQkFDQSxJQUFBMUs7Z0JBRUEsSUFBQXVPLFVBQUE7Z0JBQ0EsSUFBQUMsZUFBQSxHQUNBQyxjQUFBO2dCQUVBLE9BQUF6TyxXQUFrQkEsS0FBQStLLFFBQUEsTUFBQS9LLEtBQUEwTyxZQUFBLFNBQUFBO29CQUNsQixPQUFBSDttQkFDR3ZPLEtBQUEyTyxTQUFBLFNBQUFBO29CQUNILE9BQUFIO21CQUNHeE8sS0FBQTZCLFFBQUEsU0FBQUE7b0JBQ0gsT0FBQTRNO21CQUNHek8sS0FBQTRPLGFBQUEsU0FBQUEsV0FBQUM7b0JBQ0gsT0FBQU4sVUFBQU07bUJBQ0c3TyxLQUFBOE8sWUFBQSxTQUFBQSxVQUFBQztvQkFDSCxPQUFBUCxVQUFBTzttQkFDRy9PLEtBQUFnUCxXQUFBLFNBQUFBLFNBQUFsTTtvQkFDSCxPQUFBMkwsU0FBQTNMO21CQUNHOUM7O1lBR0gsU0FBQTJLO2dCQUNBLElBQUFzRSxPQUFBbEgsVUFBQTlKLFNBQUEsS0FBQThKLFVBQUEsT0FBQXJHLFlBQUFxRyxVQUFBO2dCQUVBO29CQUNBLFNBQUFrSDs7O1lBSUEsSUFBQTlGLE1BQUFoTyxRQUFBZ08sTUFBQXdCO1lBRUEsSUFBQXVFLFNBQUEsU0FBQUEsT0FBQUM7Z0JBQ0EsTUFBQUE7O1lBRUEsSUFBQUMsVUFBQSxTQUFBQSxRQUFBelI7Z0JBQ0E7b0JBQVVBO29CQUFBMFIsTUFBQTs7O1lBRVYsU0FBQXpFLGFBQUE0QjtnQkFDQSxJQUFBOEMsT0FBQXZILFVBQUE5SixTQUFBLEtBQUE4SixVQUFBLE9BQUFyRyxZQUFBcUcsVUFBQSxLQUFBbUg7Z0JBQ0EsSUFBQW5GLE9BQUFoQyxVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUE7Z0JBQ0EsSUFBQXdILFdBQUF4SCxVQUFBO2dCQUVBLElBQUFJO29CQUFrQjRCO29CQUFBeUM7b0JBQUFDLE9BQUE2QztvQkFBQUUsUUFBQUo7O2dCQUVsQixJQUFBRyxVQUFBO29CQUNBcEgsU0FBQTZDLFVBQUE7O2dCQUVBLFdBQUFYLFdBQUE7b0JBQ0FsQyxTQUFBa0MsT0FBQWxDLFlBQUE7d0JBQ0EsT0FBQUE7OztnQkFHQSxPQUFBQTs7WUFRQSxTQUFBSSxJQUFBa0gsT0FBQTNOO2dCQUNBLElBQUFELFFBQUFrRyxVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUE7Z0JBR0EsV0FBQXZMLFdBQUE7b0JBQ0FrVCxRQUFBbkgsSUFBQSxnQkFBQWtILFFBQUEsT0FBQTNOLFVBQUEsUUFBQUQsZUFBQThOLFNBQUE5Tjt1QkFDRztvQkFDSDZOLFFBQUFELE9BQUEzTixTQUFBRDs7O1lBSUEsU0FBQWdKLFVBQUErRSxJQUFBQztnQkFDQTtvQkFDQSxJQUFBdEksUUFBQWMsSUFBQUMsYUFBQSxlQUFBQyxJQUFBLFFBQUFzSDtvQkFDQSxPQUFBRCxHQUFBbEgsTUFBQWhILFdBQUFxRzs7O1lBSUEsSUFBQStILGtCQUFBM1UsUUFBQTJVLGtCQUFBLFNBQUFBLGdCQUFBQyxZQUFBQztnQkFDQSxPQUFBRCxhQUFBLHNDQUFBQyxZQUFBOztZQUdBLElBQUFDLGNBQUE5VSxRQUFBOFUsY0FBQSxTQUFBQSxZQUFBZDtnQkFDQSxXQUFBeE4sTUFBQSxzTUFBQXdOLE1BQUE7O1lBR0EsSUFBQWUsMEJBQUEvVSxRQUFBK1UsMEJBQUEsU0FBQUEsd0JBQUFDLEtBQUFwUztnQkFDQSxRQUFBb1MsWUFBQSw2Q0FBQXBTLFFBQUE7O1lBR0EsSUFBQStMLG1CQUFBM08sUUFBQTJPLG1CQUFBLFNBQUFBLGlCQUFBMUY7Z0JBQ0EsZ0JBQUFnTTtvQkFDQSxPQUFBaE0sU0FBQTNHLE9BQUFDLGVBQUEwUyxRQUFBbEY7d0JBQWdFdk4sT0FBQTs7OztZQUloRSxJQUFBMFMscUJBQUFsVixRQUFBa1YscUJBQUEsU0FBQUEsbUJBQUFDO2dCQUNBO29CQUNBLFNBQUF4SSxPQUFBQyxVQUFBOUosUUFBQStKLE9BQUFDLE1BQUFILE9BQUFJLE9BQUEsR0FBbUVBLE9BQUFKLE1BQWFJLFFBQUE7d0JBQ2hGRixLQUFBRSxRQUFBSCxVQUFBRzs7b0JBR0EsSUFBQXFJO29CQUNBLElBQUFDLE1BQUFGLGNBQUE1SCxNQUFBaEgsV0FBQXNHO29CQUNBO3dCQUNBd0UsTUFBQSxTQUFBQSxLQUFBaUU7NEJBQ0FGLFFBQUF0QyxLQUFBd0M7NEJBQ0EsT0FBQUQsSUFBQWhFLEtBQUFpRTs7d0JBRUFDLE9BQUEsU0FBQUE7NEJBQ0EsSUFBQUMsWUFBQU4sbUJBQUFDLGVBQUE1SCxNQUFBaEgsV0FBQXNHOzRCQUNBdUksUUFBQUssUUFBQSxTQUFBSDtnQ0FDQSxPQUFBRSxVQUFBbkUsS0FBQWlFOzs0QkFFQSxPQUFBRTs7d0JBRUFuQixRQUFBLFNBQUFxQixRQUFBbFQ7NEJBQ0EsT0FBQTZTLElBQUFoQixPQUFBN1I7O3dCQUVBOE8sT0FBQSxTQUFBcUUsT0FBQUM7NEJBQ0EsT0FBQVAsSUFBQS9ELE1BQUFzRTs7Ozs7V1B1cEI4QjlSLEtBQUs5RCxTQUFTQyxvQkFBb0I7O0lBSTFENFYsS0FDQSxTQUFVOVYsUUFBUUMsU0FBU0M7UVFoOEJqQztRQUVBRCxRQUFBaUIsYUFBQTtRQUNBakIsUUFBQThWLGNBQUE5VixRQUFBK1YsY0FBQS9WLFFBQUFnVyxxQkFBQXpQO1FBRUEsSUFBQXVJLFdBQUF4TSxPQUFBeU0sVUFBQSxTQUFBcE07WUFBbUQsU0FBQUUsSUFBQSxHQUFnQkEsSUFBQStKLFVBQUE5SixRQUFzQkQsS0FBQTtnQkFBTyxJQUFBbU0sU0FBQXBDLFVBQUEvSjtnQkFBMkIsU0FBQU0sT0FBQTZMLFFBQUE7b0JBQTBCLElBQUExTSxPQUFBaUIsVUFBQU0sZUFBQUMsS0FBQWtMLFFBQUE3TCxNQUFBO3dCQUF5RFIsT0FBQVEsT0FBQTZMLE9BQUE3TDs7OztZQUFpQyxPQUFBUjs7UUFFL08sSUFBQXNNLGlCQUFBQyxXQUFBLHFCQUFBQSxPQUFBbEMsYUFBQSxvQkFBQWhNO1lBQW9HLGNBQUFBO1lBQXFCLFNBQUFBO1lBQW1CLE9BQUFBLGNBQUFrTyxXQUFBLGNBQUFsTyxJQUFBeUQsZ0JBQUF5SyxVQUFBbE8sUUFBQWtPLE9BQUEzTCxZQUFBLGtCQUFBdkM7O1FBRTVJaEIsUUFBQWtCLFVBQUErVTtRQUVBLElBQUF6UyxTQUFBdkQsb0JBQUE7UUFFQSxJQUFBaVcsYUFBQWpXLG9CQUFBO1FBRUEsSUFBQTZMLE1BQUE3TCxvQkFBQTtRQUVBLElBQUEwTCxXQUFBMUwsb0JBQUE7UUFFQSxJQUFBMkwsV0FBQTNMLG9CQUFBO1FBRUEsU0FBQWtXLDRCQUFBblYsS0FBQW9WO1lBQWtELFNBQUFqVCxPQUFBaVQsT0FBQTtnQkFBeUIsSUFBQUMsT0FBQUQsTUFBQWpUO2dCQUF1QmtULEtBQUFwVCxlQUFBb1QsS0FBQXJULGFBQUE7Z0JBQTRDLGVBQUFxVCxXQUFBblQsV0FBQTtnQkFBMkNaLE9BQUFDLGVBQUF2QixLQUFBbUMsS0FBQWtUOztZQUF5QyxPQUFBclY7O1FBRWxPLElBQUFnVixxQkFBQWhXLFFBQUFnVyxxQkFBQTtRQUVBLElBQUFELGNBQUEvVixRQUFBK1Y7WUFDQU8sVUFBQSxTQUFBQTtnQkFDQTs7O1FBR0EsSUFBQVIsY0FBQTlWLFFBQUE4VjtZQUNBUSxVQUFBLFNBQUFBO2dCQUNBOzs7UUFJQSxJQUFBQztZQUNBQyxVQUFBLFNBQUFBO2dCQUNBLE9BQUFoVCxPQUFBMk07O1lBRUFqUCxTQUFBLFNBQUF1VixTQUFBekU7Z0JBQ0EsZUFBQUEsWUFBQSw0QkFBQS9DLFFBQUErQyxjQUFBLG9CQUFBMEU7b0JBQ0EsT0FBQUEsTUFBQXhSLFNBQUE4TTtvQkFDSyxTQUFBMEU7b0JBQ0wsT0FBQUEsTUFBQXhSLFNBQUF5UixPQUFBM0U7OztZQUdBakIsT0FBQSxTQUFBQSxNQUFBNkY7Z0JBQ0EsZ0JBQUFGO29CQUNBLE9BQUFFLFNBQUFDLEtBQUEsU0FBQTNGO3dCQUNBLE9BQUE0RixRQUFBNUYsR0FBQXdGOzs7O1lBSUFwRyxXQUFBLFNBQUFBLFVBQUF5RztnQkFDQSxnQkFBQUw7b0JBQ0EsT0FBQUssV0FBQUw7Ozs7UUFLQSxTQUFBSSxRQUFBOUU7WUFFQSxRQUFBQSxZQUFBLE1BQUF1RSxTQUFBQyxXQUFBaFQsT0FBQXlKLEdBQUE4RCxNQUFBaUIsV0FBQXVFLFNBQUF4RixRQUFBdk4sT0FBQXlKLEdBQUFvRixlQUFBTCxXQUFBdUUsU0FBQXJWLFVBQUFzQyxPQUFBeUosR0FBQUssS0FBQTBFLFdBQUF1RSxTQUFBakcsWUFBQWlHLFNBQUFyVixTQUFBOFE7O1FBa0JBLFNBQUFnRixVQUFBcEksTUFBQXFJLFVBQUFDO1lBQ0EsSUFBQUMsWUFDQTNELGNBQUEsR0FDQTRELFlBQUE7WUFDQUMsUUFBQUo7WUFFQSxTQUFBSyxNQUFBdEQ7Z0JBQ0F1RDtnQkFDQUwsR0FBQWxELEtBQUE7O1lBR0EsU0FBQXFELFFBQUEzSTtnQkFDQXlJLE1BQUFyRSxLQUFBcEU7Z0JBQ0FBLEtBQUE4SSxPQUFBLFNBQUFDLEtBQUFDO29CQUNBLElBQUFOLFdBQUE7d0JBQ0E7O3FCQUdBLEdBQUE1VCxPQUFBNEwsUUFBQStILE9BQUF6STtvQkFDQUEsS0FBQThJLE9BQUFoVSxPQUFBMEs7b0JBQ0EsSUFBQXdKLE9BQUE7d0JBQ0FKLE1BQUFHOzJCQUNPO3dCQUNQLElBQUEvSSxTQUFBdUksVUFBQTs0QkFDQXpELFNBQUFpRTs7d0JBRUEsS0FBQU4sTUFBQXJVLFFBQUE7NEJBQ0FzVSxZQUFBOzRCQUNBRixHQUFBMUQ7Ozs7O1lBT0EsU0FBQStEO2dCQUNBLElBQUFILFdBQUE7b0JBQ0E7O2dCQUVBQSxZQUFBO2dCQUNBRCxNQUFBMUIsUUFBQSxTQUFBakU7b0JBQ0FBLEVBQUFnRyxPQUFBaFUsT0FBQTBLO29CQUNBc0QsRUFBQW1HOztnQkFFQVI7O1lBR0E7Z0JBQ0FFO2dCQUNBRTtnQkFDQUQ7Z0JBQ0FNLFVBQUEsU0FBQUE7b0JBQ0EsT0FBQVQ7O2dCQUVBVSxXQUFBLFNBQUFBO29CQUNBLE9BQUFWLE1BQUFwUSxJQUFBLFNBQUF5Szt3QkFDQSxPQUFBQSxFQUFBNUM7Ozs7O1FBTUEsU0FBQWtKLG1CQUFBalQ7WUFDQSxJQUFBOEksVUFBQTlJLEtBQUE4SSxTQUNBOEcsS0FBQTVQLEtBQUE0UCxJQUNBNUgsT0FBQWhJLEtBQUFnSTtZQUVBLElBQUFySixPQUFBeUosR0FBQUQsU0FBQXlILEtBQUE7Z0JBQ0EsT0FBQUE7O1lBSUEsSUFBQWpCLGNBQUEsR0FDQTlNLGFBQUE7WUFDQTtnQkFDQThNLFNBQUFpQixHQUFBbEgsTUFBQUksU0FBQWQ7Y0FDRyxPQUFBbUg7Z0JBQ0h0TixRQUFBc047O1lBSUEsSUFBQXhRLE9BQUF5SixHQUFBRCxTQUFBd0csU0FBQTtnQkFDQSxPQUFBQTs7WUFLQSxPQUFBOU0sU0FBQSxHQUFBbEQsT0FBQWlNLGNBQUE7Z0JBQ0EsTUFBQS9JO2tCQUNHLEdBQUFsRCxPQUFBaU0sY0FBQTtnQkFDSCxJQUFBc0ksVUFBQTtnQkFDQSxJQUFBQztvQkFBZTlELE1BQUE7b0JBQUExUixPQUFBZ1I7O2dCQUNmLElBQUF5RSxNQUFBLFNBQUFBLElBQUF6VjtvQkFDQTt3QkFBYzBSLE1BQUE7d0JBQUExUjs7O2dCQUVkLGdCQUFBOFM7b0JBQ0EsS0FBQXlDLElBQUE7d0JBQ0FBLEtBQUE7d0JBQ0EsT0FBQUM7MkJBQ087d0JBQ1AsT0FBQUMsSUFBQTNDOzs7OztRQU1BLElBQUE0QyxhQUFBLFNBQUFBLFdBQUE5RjtZQUNBO2dCQUFVcUMsSUFBQXJDOzs7UUFHVixTQUFBNkQsS0FBQWpKO1lBQ0EsSUFBQVMsWUFBQWIsVUFBQTlKLFNBQUEsS0FBQThKLFVBQUEsT0FBQXJHLFlBQUFxRyxVQUFBO2dCQUNBLE9BQUFwSixPQUFBMEs7O1lBRUEsSUFBQWpGLFdBQUEyRCxVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUEsS0FBQXBKLE9BQUEwSztZQUNBLElBQUFSLFdBQUFkLFVBQUE5SixTQUFBLEtBQUE4SixVQUFBLE9BQUFyRyxZQUFBcUcsVUFBQSxLQUFBcEosT0FBQTBLO1lBQ0EsSUFBQWlLLGdCQUFBdkwsVUFBQTlKLFNBQUEsS0FBQThKLFVBQUEsT0FBQXJHLFlBQUFxRyxVQUFBO1lBQ0EsSUFBQXdMLFVBQUF4TCxVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUE7WUFDQSxJQUFBNEIsaUJBQUE1QixVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUE7WUFDQSxJQUFBZ0MsT0FBQWhDLFVBQUE5SixTQUFBLEtBQUE4SixVQUFBLE9BQUFyRyxZQUFBcUcsVUFBQTtZQUNBLElBQUE0SyxPQUFBNUssVUFBQTthQUVBLEdBQUFwSixPQUFBNkosT0FBQUwsVUFBQXhKLE9BQUF5SixHQUFBRCxVQUFBZ0o7WUFFQSxJQUFBcUMsZ0JBQUE7WUFDQSxJQUFBQyxxQkFBQSxHQUFBOVUsT0FBQWtNLFdBQUE2SSxlQUFBLEdBQUEvVSxPQUFBbVIsaUJBQUEwRCxlQUFBLFNBQUFBLGdCQUFBO1lBRUEsSUFBQXpLLGNBQUF3SyxRQUFBeEssYUFDQUMsU0FBQXVLLFFBQUF2SyxRQUNBQyxVQUFBc0ssUUFBQXRLO1lBRUEsSUFBQVYsTUFBQVMsVUFBQXJLLE9BQUE0SjtZQUNBLElBQUFvTCxXQUFBLFNBQUFBLFNBQUF4RTtnQkFDQSxJQUFBck4sVUFBQXFOLElBQUF5RTtnQkFFQSxLQUFBOVIsV0FBQXFOLElBQUFRLE9BQUE7b0JBQ0E3TixVQUFBcU4sSUFBQVEsTUFBQWtFLE1BQUEsU0FBQTFPLFFBQUFnSyxJQUFBck4sY0FBQSxJQUFBcU4sSUFBQVEsUUFBQSxZQUFBUixJQUFBck4sVUFBQSxPQUFBcU4sSUFBQVE7O2dCQUdBcEgsSUFBQSwwQkFBQXdCLE1BQUFqSSxXQUFBcU4sSUFBQXJOLFdBQUFxTjs7WUFFQSxJQUFBMkUsY0FBQSxHQUFBaE4sU0FBQWdOLFlBQUFsTDtZQUNBLElBQUFtTCxjQUFBdFcsT0FBQWtDLE9BQUEyVDtZQU1BOUcsS0FBQXNHLFNBQUFuVSxPQUFBMEs7WUFNQSxJQUFBUSxPQUFBbUssUUFBQXJLLGdCQUFBSSxNQUFBNUIsVUFBQXdLO1lBQ0EsSUFBQVA7Z0JBQWtCckk7Z0JBQUErSSxRQUFBbUI7Z0JBQUF2RixXQUFBOztZQUNsQixJQUFBd0YsWUFBQS9CLFVBQUFwSSxNQUFBcUksVUFBQStCO1lBS0EsU0FBQUY7Z0JBQ0EsSUFBQTdCLFNBQUExRCxjQUFBMEQsU0FBQWdDLGFBQUE7b0JBQ0FoQyxTQUFBZ0MsY0FBQTtvQkFDQTVILEtBQUF5RTs7O1lBV0EsU0FBQTZCO2dCQUtBLElBQUEzSyxTQUFBa00sZUFBQWxNLFNBQUFtTSxjQUFBO29CQUNBbk0sU0FBQW1NLGVBQUE7b0JBQ0FKLFVBQUF4QjtvQkFJQXlCLElBQUFsRDs7O1lBT0EwQixjQUFBRztZQUdBM0ssU0FBQWtNLGFBQUE7WUFHQTdIO1lBR0EsT0FBQTNDO1lBT0EsU0FBQTJDLEtBQUFpRSxLQUFBb0M7Z0JBRUEsS0FBQVQsU0FBQTFELFdBQUE7b0JBQ0EsVUFBQS9NLE1BQUE7O2dCQUdBO29CQUNBLElBQUFnTixjQUFBO29CQUNBLElBQUFrRSxPQUFBO3dCQUNBbEUsU0FBQXhHLFNBQUFzRSxNQUFBZ0U7MkJBQ08sSUFBQUEsUUFBQVEsYUFBQTt3QkFPUG1CLFNBQUFnQyxjQUFBO3dCQUlBNUgsS0FBQXNHO3dCQUtBbkUsU0FBQWhRLE9BQUF5SixHQUFBSyxLQUFBTixTQUFBcUgsVUFBQXJILFNBQUFxSCxPQUFBeUI7NEJBQW1GNUIsTUFBQTs0QkFBQTFSLE9BQUFzVDs7MkJBQzVFLElBQUFSLFFBQUFTLGFBQUE7d0JBRVB2QyxTQUFBaFEsT0FBQXlKLEdBQUFLLEtBQUFOLFNBQUFxSCxVQUFBckgsU0FBQXFIOzRCQUF3RUgsTUFBQTs7MkJBQ2pFO3dCQUNQVixTQUFBeEcsU0FBQXFFLEtBQUFpRTs7b0JBR0EsS0FBQTlCLE9BQUFVLE1BQUE7d0JBQ0FrRixVQUFBNUYsT0FBQWhSLE9BQUFnTSxnQkFBQSxJQUFBNkM7MkJBQ087d0JBSVA0RixTQUFBb0MsZ0JBQUE7d0JBQ0FwQyxTQUFBTyxRQUFBUCxTQUFBTyxLQUFBaEUsT0FBQWhSOztrQkFFSyxPQUFBa0U7b0JBQ0wsSUFBQXVRLFNBQUFnQyxhQUFBO3dCQUNBVCxTQUFBOVI7O29CQUVBdVEsU0FBQW9DLGdCQUFBO29CQUNBcEMsU0FBQU8sS0FBQTlRLE9BQUE7OztZQUlBLFNBQUFzUyxJQUFBeEYsUUFBQWtFO2dCQUNBMUssU0FBQWtNLGFBQUE7Z0JBQ0FQLFdBQUF4RztnQkFDQSxLQUFBdUYsT0FBQTtvQkFDQTFLLFNBQUFxRyxVQUFBRztvQkFDQXhHLFNBQUFzTSxnQkFBQXRNLFNBQUFzTSxhQUFBMUcsUUFBQVk7dUJBQ0s7b0JBQ0wsSUFBQUEsa0JBQUFoTixPQUFBO3dCQUNBbEUsT0FBQUMsZUFBQWlSLFFBQUE7NEJBQ0FoUixPQUFBLFFBQUFvTSxPQUFBLFVBQUE0RSxPQUFBaUYsYUFBQWpGLE9BQUFnQjs0QkFDQXZSLGNBQUE7OztvQkFHQSxLQUFBeUwsS0FBQThJLE1BQUE7d0JBQ0EsSUFBQWhFLGtCQUFBaE4sU0FBQXNILFNBQUE7NEJBQ0FBLFFBQUEwRjsrQkFDUzs0QkFDVGdGLFNBQUFoRjs7O29CQUdBeEcsU0FBQXNHLFNBQUFFO29CQUNBeEcsU0FBQXVNLGFBQUE7b0JBQ0F2TSxTQUFBc00sZ0JBQUF0TSxTQUFBc00sYUFBQXpHLE9BQUFXOztnQkFFQTlFLEtBQUE4SSxRQUFBOUksS0FBQThJLEtBQUFoRSxRQUFBa0U7Z0JBQ0FoSixLQUFBOEssUUFBQS9ELFFBQUEsU0FBQWdFO29CQUNBLE9BQUFBLEVBQUF2QyxHQUFBMUQsUUFBQWtFOztnQkFFQWhKLEtBQUE4SyxVQUFBOztZQUdBLFNBQUFKLFVBQUEzSyxRQUFBRDtnQkFDQSxJQUFBa0wsUUFBQTlNLFVBQUE5SixTQUFBLEtBQUE4SixVQUFBLE9BQUFyRyxZQUFBcUcsVUFBQTtnQkFDQSxJQUFBc0ssS0FBQXRLLFVBQUE7Z0JBRUEsSUFBQW1CLFlBQUEsR0FBQXZLLE9BQUF3SztnQkFDQUosMkJBQUFLO29CQUFnREY7b0JBQUFTO29CQUFBa0w7b0JBQUFqTDs7Z0JBT2hELElBQUFrTCxxQkFBQTtnQkFHQSxTQUFBQyxPQUFBbkMsS0FBQUM7b0JBQ0EsSUFBQWlDLGVBQUE7d0JBQ0E7O29CQUdBQSxnQkFBQTtvQkFDQXpDLEdBQUFTLFNBQUFuVSxPQUFBMEs7b0JBQ0EsSUFBQU4sYUFBQTt3QkFDQThKLFFBQUE5SixZQUFBUSxlQUFBTCxVQUFBMEosT0FBQTdKLFlBQUFPLGVBQUFKLFVBQUEwSjs7b0JBRUFQLEdBQUFPLEtBQUFDOztnQkFHQWtDLE9BQUFqQyxTQUFBblUsT0FBQTBLO2dCQUdBZ0osR0FBQVMsU0FBQTtvQkFFQSxJQUFBZ0MsZUFBQTt3QkFDQTs7b0JBR0FBLGdCQUFBO29CQU1BO3dCQUNBQyxPQUFBakM7c0JBQ08sT0FBQTNEO3dCQUNQd0UsU0FBQXhFOztvQkFFQTRGLE9BQUFqQyxTQUFBblUsT0FBQTBLO29CQUVBTiwyQkFBQVMsZ0JBQUFOOztnQkFlQSxJQUFBNUUsWUFBQTtnQkFFQSxPQUVBM0YsT0FBQXlKLEdBQUFnRSxRQUFBeEMsVUFBQW9MLGVBQUFwTCxRQUFBbUwsVUFBQXBXLE9BQUF5SixHQUFBbUYsT0FBQTNELFVBQUFxTCxjQUFBNUIsV0FBQXpKLFNBQUFWLFVBQUE2TCxVQUFBcFcsT0FBQXlKLEdBQUFELFNBQUF5QixVQUFBc0wsZ0JBQUF0TCxRQUFBVixVQUFBYSxNQUFBZ0wsVUFHQXBXLE9BQUF5SixHQUFBOEQsTUFBQXRDLFVBQUE2SixrQkFBQTdKLFFBQUFWLFVBQUE2TCxXQUFBelEsT0FBQTJDLElBQUFrTyxTQUFBbEksS0FBQXJELFdBQUF3TCxjQUFBOVEsTUFBQXlRLFdBQUF6USxPQUFBMkMsSUFBQWtPLFNBQUFqSSxJQUFBdEQsV0FBQXlMLGFBQUEvUSxNQUFBeVEsV0FBQXpRLE9BQUEyQyxJQUFBa08sU0FBQUcsSUFBQTFMLFdBQUE4SixhQUFBcFAsTUFBQTRFLFVBQUE2TCxXQUFBelEsT0FBQTJDLElBQUFrTyxTQUFBSSxLQUFBM0wsV0FBQTRMLGNBQUFsUixNQUFBNEUsVUFBQTZMLFdBQUF6USxPQUFBMkMsSUFBQWtPLFNBQUFsVyxLQUFBMkssV0FBQTZMLGNBQUFuUixNQUFBNEUsVUFBQTZMLFdBQUF6USxPQUFBMkMsSUFBQWtPLFNBQUFPLElBQUE5TCxXQUFBK0wsYUFBQXJSLE1BQUF5USxXQUFBelEsT0FBQTJDLElBQUFrTyxTQUFBUyxLQUFBaE0sV0FBQXFMLGNBQUEzUSxNQUFBNEUsVUFBQTZMLFdBQUF6USxPQUFBMkMsSUFBQWtPLFNBQUFVLEtBQUFqTSxXQUFBa00sY0FBQXhSLE1BQUF5USxXQUFBelEsT0FBQTJDLElBQUFrTyxTQUFBckMsT0FBQWxKLFdBQUFtTSxnQkFBQXpSLE1BQUF5USxXQUFBelEsT0FBQTJDLElBQUFrTyxTQUFBYSxPQUFBcE0sV0FBQXFNLGdCQUFBM1IsTUFBQXlRLFdBQUF6USxPQUFBMkMsSUFBQWtPLFNBQUFlLGNBQUF0TSxXQUFBdU0saUJBQUE3UixNQUFBeVEsV0FBQXpRLE9BQUEyQyxJQUFBa08sU0FBQWlCLE1BQUF4TSxXQUFBeU0sZUFBQS9SLE1BQUF5USxXQUFBelEsT0FBQTJDLElBQUFrTyxTQUFBbUIsVUFBQTFNLFdBQUEyTSxtQkFBQWpTLE1BQUF5USxXQUFBelEsT0FBQTJDLElBQUFrTyxTQUFBcUIsV0FBQTVNLFdBQUE2TSxvQkFBQW5TLE1BQUF5USxXQUFBelEsT0FBQTJDLElBQUFrTyxTQUFBdUIsV0FBQTlNLFdBQUErTSxvQkFBQXJTLE1BQUF5USxpQkFBQW5MOztZQUlBLFNBQUFvTCxlQUFBNUksU0FBQWlHO2dCQUNBLElBQUF1RSxnQkFBQXhLLFFBQUF6TixPQUFBdUg7Z0JBQ0EsSUFBQXZILE9BQUF5SixHQUFBSyxLQUFBbU8sZ0JBQUE7b0JBQ0F2RSxHQUFBUyxTQUFBOEQ7dUJBQ0ssSUFBQWpZLE9BQUF5SixHQUFBSyxLQUFBMkQsUUFBQXFHLFFBQUE7b0JBQ0xKLEdBQUFTLFNBQUE7d0JBQ0EsT0FBQTFHLFFBQUFxRzs7O2dCQUtBckcsUUFBQUUsS0FBQStGLElBQUEsU0FBQXhRO29CQUNBLE9BQUF3USxHQUFBeFEsT0FBQTs7O1lBSUEsU0FBQXFULGdCQUFBL00sVUFBQWUsVUFBQWEsTUFBQXNJO2dCQUNBakIsS0FBQWpKLFVBQUFTLFdBQUF4RSxVQUFBeUUsVUFBQWtMLGFBQUFSLFNBQUFySyxVQUFBYSxNQUFBc0k7O1lBR0EsU0FBQStDLGNBQUEzVSxPQUFBNFI7Z0JBQ0EsSUFBQTdMLFVBQUEvRixNQUFBK0YsU0FDQTJHLFVBQUExTSxNQUFBME0sU0FDQTBKLFFBQUFwVyxNQUFBb1c7Z0JBRUFyUSxxQkFBQXNOO2dCQUNBLElBQUFnRCxTQUFBLFNBQUFBLE9BQUFDO29CQUNBLE9BQUFBLGVBQUFwVixRQUFBMFEsR0FBQTBFLEtBQUEsWUFBQWpRLFNBQUFrUSxPQUFBRCxTQUFBRixRQUFBeEUsR0FBQW5CLGVBQUFtQixHQUFBMEU7O2dCQUVBO29CQUNBdlEsUUFBQXlHLEtBQUE2SixRQUFBN0UsUUFBQTlFO2tCQUNLLE9BQUFnQztvQkFDTCxPQUFBa0QsR0FBQWxELEtBQUE7O2dCQUVBa0QsR0FBQVMsU0FBQWdFLE9BQUFoRTs7WUFHQSxTQUFBdUMsYUFBQTlULE9BQUE4UTtnQkFDQSxJQUFBN0wsVUFBQWpGLE1BQUFpRixTQUNBNEosU0FBQTdPLE1BQUE2TyxRQUNBckMsVUFBQXhNLE1BQUF3TTtpQkFPQSxHQUFBc0QsV0FBQTRGLE1BQUE7b0JBQ0EsSUFBQXRJLGNBQUE7b0JBQ0E7d0JBQ0FBLFVBQUFuSSxrQkFBQTBHLE1BQUE5SSxVQUFBZ007c0JBQ08sT0FBQXZPO3dCQUVQLElBQUEyRSxXQUFBdUgsU0FBQSxPQUFBc0UsR0FBQXhRLE9BQUE7d0JBQ0E4UixTQUFBOVI7O29CQUdBLElBQUFrTSxXQUFBcFAsT0FBQXlKLEdBQUFnRSxRQUFBdUMsU0FBQTt3QkFDQXFHLGVBQUFyRyxRQUFBMEQ7MkJBQ087d0JBQ1AsT0FBQUEsR0FBQTFEOzs7O1lBTUEsU0FBQThHLGNBQUE3VCxPQUFBc0gsVUFBQW1KO2dCQUNBLElBQUF2SixVQUFBbEgsTUFBQWtILFNBQ0E4RyxLQUFBaE8sTUFBQWdPLElBQ0E1SCxPQUFBcEcsTUFBQW9HO2dCQUVBLElBQUEyRyxjQUFBO2dCQUVBO29CQUNBQSxTQUFBaUIsR0FBQWxILE1BQUFJLFNBQUFkO2tCQUNLLE9BQUFuRztvQkFDTCxPQUFBd1EsR0FBQXhRLE9BQUE7O2dCQUVBLE9BQUFsRCxPQUFBeUosR0FBQWdFLFFBQUF1QyxVQUFBcUcsZUFBQXJHLFFBQUEwRCxNQUFBMVQsT0FBQXlKLEdBQUFELFNBQUF3RyxVQUFBdUcsZ0JBQUF2RyxRQUFBekYsVUFBQTBHLEdBQUE3RixNQUFBc0ksU0FBQTFEOztZQUdBLFNBQUFnSCxhQUFBM1QsT0FBQXFRO2dCQUNBLElBQUF2SixVQUFBOUcsTUFBQThHLFNBQ0E4RyxLQUFBNU4sTUFBQTROLElBQ0E1SCxPQUFBaEcsTUFBQWdHO2dCQU1BO29CQUNBLElBQUFrUCxRQUFBLFNBQUFBLE1BQUEvSCxLQUFBeUQ7d0JBQ0EsT0FBQWpVLE9BQUF5SixHQUFBeUQsTUFBQXNELE9BQUFrRCxHQUFBTyxPQUFBUCxHQUFBbEQsS0FBQTs7b0JBRUFTLEdBQUFsSCxNQUFBSSxTQUFBZCxLQUFBbVAsT0FBQUQ7b0JBQ0EsSUFBQUEsTUFBQXBFLFFBQUE7d0JBQ0FULEdBQUFTLFNBQUE7NEJBQ0EsT0FBQW9FLE1BQUFwRTs7O2tCQUdLLE9BQUFqUjtvQkFDTCxPQUFBd1EsR0FBQXhRLE9BQUE7OztZQUlBLFNBQUFvVCxjQUFBbUMsT0FBQWxPLFVBQUFtSjtnQkFDQSxJQUFBdkosVUFBQXNPLE1BQUF0TyxTQUNBOEcsS0FBQXdILE1BQUF4SCxJQUNBNUgsT0FBQW9QLE1BQUFwUCxNQUNBcVAsV0FBQUQsTUFBQUM7Z0JBRUEsSUFBQUMsZUFBQXJFO29CQUEyQ25LO29CQUFBOEc7b0JBQUE1SDs7Z0JBRTNDO3FCQUNBLEdBQUFxSixXQUFBa0c7b0JBQ0EsSUFBQUMsUUFBQXBHLEtBQUFrRyxjQUFBMU8sV0FBQXhFLFVBQUF5RSxVQUFBa0wsYUFBQVIsU0FBQXJLLFVBQUEwRyxHQUFBN0YsTUFBQXNOLFdBQUEsT0FBQTFZLE9BQUEwSztvQkFFQSxJQUFBZ08sVUFBQTt3QkFDQWhGLEdBQUFtRjsyQkFDTzt3QkFDUCxJQUFBRixhQUFBakQsWUFBQTs0QkFDQUgsVUFBQTFCLFFBQUFnRjs0QkFDQW5GLEdBQUFtRjsrQkFDUyxJQUFBRixhQUFBN0ksUUFBQTs0QkFDVHlGLFVBQUF6QixNQUFBNkUsYUFBQTdJOytCQUNTOzRCQUNUNEQsR0FBQW1GOzs7a0JBR0s7cUJBQ0wsR0FBQW5HLFdBQUErRTs7O1lBS0EsU0FBQU4sY0FBQW5KLEdBQUEwRjtnQkFDQSxJQUFBMUYsRUFBQStCLGFBQUE7b0JBQ0EsSUFBQStJO3dCQUFvQjVOO3dCQUFBd0k7O29CQUNwQkEsR0FBQVMsU0FBQTt3QkFDQSxXQUFBblUsT0FBQTRMLFFBQUFvQyxFQUFBZ0ksU0FBQThDOztvQkFFQTlLLEVBQUFnSSxRQUFBMUcsS0FBQXdKO3VCQUNLO29CQUNMOUssRUFBQStLLGNBQUFyRixHQUFBMUYsRUFBQTlLLFNBQUEsUUFBQXdRLEdBQUExRixFQUFBZ0M7OztZQUlBLFNBQUFvSCxnQkFBQTRCLGNBQUF0RjtnQkFDQSxJQUFBc0YsaUJBQUFoWixPQUFBd00sbUJBQUE7b0JBQ0F3TSxlQUFBOU47O2dCQUVBLElBQUE4TixhQUFBakosYUFBQTtvQkFDQWlKLGFBQUE3RTs7Z0JBRUFUOztZQUlBLFNBQUFxQixhQUFBMU4sU0FBQWtELFVBQUFtSjtnQkFDQSxJQUFBdUYsT0FBQW5hLE9BQUFtYSxLQUFBNVI7Z0JBRUEsS0FBQTRSLEtBQUEzWixRQUFBO29CQUNBLE9BQUFvVSxHQUFBMVQsT0FBQXlKLEdBQUE4RCxNQUFBbEc7O2dCQUdBLElBQUE2UixpQkFBQTtnQkFDQSxJQUFBdEYsaUJBQUE7Z0JBQ0EsSUFBQXVGO2dCQUNBLElBQUFDO2dCQUVBLFNBQUFDO29CQUNBLElBQUFILG1CQUFBRCxLQUFBM1osUUFBQTt3QkFDQXNVLFlBQUE7d0JBQ0FGLEdBQUExVCxPQUFBeUosR0FBQThELE1BQUFsRyxXQUFBckgsT0FBQXVOLE1BQUEwQixLQUFBM0QsYUFBbUU2Tjs0QkFBWTdaLFFBQUEyWixLQUFBM1o7OEJBQXNCNlo7OztnQkFJckdGLEtBQUFoSCxRQUFBLFNBQUF0UztvQkFDQSxJQUFBMlosWUFBQSxTQUFBQSxVQUFBckYsS0FBQUM7d0JBQ0EsSUFBQU4sV0FBQTs0QkFDQTs7d0JBRUEsSUFBQU0sVUFBQSxHQUFBL0wsU0FBQWtRLE9BQUFwRSxnQkFBQTFCLGVBQUEwQixRQUFBM0IsYUFBQTs0QkFDQW9CLEdBQUFTOzRCQUNBVCxHQUFBTyxLQUFBQzsrQkFDUzs0QkFDVGlGLFFBQUF4WixPQUFBc1U7NEJBQ0FpRjs0QkFDQUc7OztvQkFHQUMsVUFBQW5GLFNBQUFuVSxPQUFBMEs7b0JBQ0EwTyxTQUFBelosT0FBQTJaOztnQkFHQTVGLEdBQUFTLFNBQUE7b0JBQ0EsS0FBQVAsV0FBQTt3QkFDQUEsWUFBQTt3QkFDQXFGLEtBQUFoSCxRQUFBLFNBQUF0Uzs0QkFDQSxPQUFBeVosU0FBQXpaLEtBQUF3VTs7OztnQkFLQThFLEtBQUFoSCxRQUFBLFNBQUF0UztvQkFDQSxPQUFBaVcsVUFBQXZPLFFBQUExSCxNQUFBNEssVUFBQTVLLEtBQUF5WixTQUFBelo7OztZQUlBLFNBQUFrWCxjQUFBeFAsU0FBQWtELFVBQUFtSjtnQkFDQSxJQUFBRSxpQkFBQTtnQkFDQSxJQUFBcUYsT0FBQW5hLE9BQUFtYSxLQUFBNVI7Z0JBQ0EsSUFBQStSO2dCQUVBSCxLQUFBaEgsUUFBQSxTQUFBdFM7b0JBQ0EsSUFBQTJaLFlBQUEsU0FBQUEsVUFBQXJGLEtBQUFDO3dCQUNBLElBQUFOLFdBQUE7NEJBQ0E7O3dCQUdBLElBQUFNLE9BQUE7NEJBRUFSLEdBQUFTOzRCQUNBVCxHQUFBTyxLQUFBOytCQUNTLFNBQUE5TCxTQUFBa1EsT0FBQXBFLGdCQUFBMUIsZUFBQTBCLFFBQUEzQixhQUFBOzRCQUNULElBQUFpSDs0QkFFQTdGLEdBQUFTOzRCQUNBUCxZQUFBOzRCQUNBLElBQUE0RixZQUFBRCxnQkFBd0NBLFVBQUE1WixPQUFBc1UsS0FBQXNGOzRCQUN4QzdGLEdBQUExVCxPQUFBeUosR0FBQThELE1BQUFsRyxjQUFBb1MsTUFBQW5aLEtBQUFnTCxhQUFpRWtPO2dDQUFhbGEsUUFBQTJaLEtBQUEzWjtrQ0FBc0JrYTs7O29CQUdwR0YsVUFBQW5GLFNBQUFuVSxPQUFBMEs7b0JBQ0EwTyxTQUFBelosT0FBQTJaOztnQkFHQTVGLEdBQUFTLFNBQUE7b0JBRUEsS0FBQVAsV0FBQTt3QkFDQUEsWUFBQTt3QkFDQXFGLEtBQUFoSCxRQUFBLFNBQUF0Uzs0QkFDQSxPQUFBeVosU0FBQXpaLEtBQUF3VTs7OztnQkFJQThFLEtBQUFoSCxRQUFBLFNBQUF0UztvQkFDQSxJQUFBaVUsV0FBQTt3QkFDQTs7b0JBRUFnQyxVQUFBdk8sUUFBQTFILE1BQUE0SyxVQUFBNUssS0FBQXlaLFNBQUF6Wjs7O1lBSUEsU0FBQTJYLGdCQUFBb0MsT0FBQWhHO2dCQUNBLElBQUFpRyxXQUFBRCxNQUFBQyxVQUNBdFEsT0FBQXFRLE1BQUFyUTtnQkFFQTtvQkFDQSxJQUFBL0QsUUFBQXFVLFNBQUE1UCxNQUFBaEgsYUFBQW1ILGFBQUFzTyxPQUFBblA7b0JBQ0FxSyxHQUFBcE87a0JBQ0ssT0FBQXBDO29CQUNMd1EsR0FBQXhRLE9BQUE7OztZQUlBLFNBQUFzVSxpQkFBQW9DLE9BQUFsRztnQkFDQSxJQUFBbEYsVUFBQW9MLE1BQUFwTCxTQUNBTCxTQUFBeUwsTUFBQXpMO2dCQUVBLElBQUEwTCxRQUFBdkcsUUFBQTlFO2dCQUNBcUwsTUFBQXJMO2dCQUNBa0YsSUFBQSxHQUFBdkwsU0FBQUwsY0FBQW1DLFdBQUFrRSxVQUFBL0YsU0FBQVIsUUFBQWtTLFNBQUFEOztZQUdBLFNBQUFqQyxtQkFBQWpTLE1BQUErTjtnQkFDQUEsS0FBQUQsU0FBQWdDOztZQUdBLFNBQUFpQyxlQUFBN1AsU0FBQTZMO2dCQUNBN0wsUUFBQTRQLE1BQUEvRDs7WUFHQSxTQUFBb0Usb0JBQUFpQyxNQUFBckc7Z0JBQ0FBLEdBQUEwQixZQUFBMkU7O1lBR0EsU0FBQS9CLG9CQUFBNVksT0FBQXNVO2dCQUNBMVQsT0FBQStNLE9BQUF4QixPQUFBNkosYUFBQWhXO2dCQUNBc1U7O1lBR0EsU0FBQTJCLFFBQUE1VCxJQUFBMkosTUFBQTVCLFVBQUF3SztnQkFDQSxJQUFBZ0csT0FBQUMsT0FBQUM7Z0JBRUExUSxTQUFBc00sZUFBQTtnQkFDQSxPQUFBbUUsWUFBcUJBLE1BQUFqYSxPQUFBb00sUUFBQSxNQUFBNk4sTUFBQXhZLFNBQUF3WSxNQUFBN087Z0JBQUE0TyxRQUFBLFFBQUFFLGtCQUErRkEsWUFBQUYsU0FBQUUsWUFBQUY7Z0JBQStDRSxZQUFBRixPQUFBOVIsTUFBQTtvQkFDbkssSUFBQXNCLFNBQUFzTSxjQUFBO3dCQUNBLE9BQUF0TSxTQUFBc00sYUFBQXJJOzJCQUNPO3dCQUNQLElBQUF5QixPQUFBLEdBQUFsUCxPQUFBNkw7d0JBQ0FyQyxTQUFBc00sZUFBQTVHO3dCQUNBLEtBQUExRixTQUFBa00sWUFBQTs0QkFDQWxNLFNBQUFzRyxTQUFBWixJQUFBRyxPQUFBN0YsU0FBQXNHLFVBQUFaLElBQUFFLFFBQUE1RixTQUFBcUc7O3dCQUVBLE9BQUFYLElBQUF6Qjs7bUJBRUt3TSxNQUFBakcsYUFBQWlHLE1BQUFqRSxjQUFBaUUsTUFBQTlGLGlCQUFBOEYsTUFBQWxLLFlBQUEsU0FBQUE7b0JBQ0wsT0FBQXZHLFNBQUFrTTttQkFDS3VFLE1BQUF4RSxjQUFBLFNBQUFBO29CQUNMLE9BQUFqTSxTQUFBbU07bUJBQ0tzRSxNQUFBbEIsWUFBQSxTQUFBQTtvQkFDTCxPQUFBdlAsU0FBQXVNO21CQUNLa0UsTUFBQWpLLFNBQUEsU0FBQUE7b0JBQ0wsT0FBQXhHLFNBQUFxRzttQkFDS29LLE1BQUEvVyxRQUFBLFNBQUFBO29CQUNMLE9BQUFzRyxTQUFBc0c7bUJBQ0ttSyxNQUFBbEMsYUFBQSxTQUFBQSxXQUFBM1k7cUJBQ0wsR0FBQVksT0FBQTZKLE9BQUF6SyxPQUFBWSxPQUFBeUosR0FBQXNELFNBQUEsR0FBQS9NLE9BQUF1Uix5QkFBQSxRQUFBblM7b0JBQ0FZLE9BQUErTSxPQUFBeEIsT0FBQTZKLGFBQUFoVzttQkFDS3VULDRCQUFBc0gsT0FBQUMsY0FBQUQ7Ozs7SVJ3OEJDRSxLQUNBLFNBQVU1ZCxRQUFRQztRUzFzRHhCO1FBRUFBLFFBQUFpQixhQUFBO1FBQ0FqQixRQUFBOGI7UUFDQTliLFFBQUFvYztRQUNBcGMsUUFBQWliO1FBQ0EsSUFBQTJDO1FBUUEsSUFBQUMsWUFBQTtRQU9BLFNBQUFDLEtBQUFwUDtZQUNBO2dCQUNBME47Z0JBQ0ExTjtjQUNHO2dCQUNIcVA7OztRQU9BLFNBQUFqQyxLQUFBcE47WUFDQWtQLE1BQUE5SyxLQUFBcEU7WUFFQSxLQUFBbVAsV0FBQTtnQkFDQXpCO2dCQUNBbkI7OztRQVFBLFNBQUFtQjtZQUNBeUI7O1FBTUEsU0FBQUU7WUFDQUY7O1FBTUEsU0FBQTVDO1lBQ0E4QztZQUVBLElBQUFyUCxZQUFBO1lBQ0EsUUFBQW1QLGNBQUFuUCxPQUFBa1AsTUFBQUksYUFBQXpYLFdBQUE7Z0JBQ0F1WCxLQUFBcFA7Ozs7SVRrdERNdVAsS0FDQSxTQUFVbGUsUUFBUUMsU0FBU0M7UVVweERqQztRQUVBRCxRQUFBaUIsYUFBQTtRQUNBakIsUUFBQWdhLFdBQUFoYSxRQUFBa2UsUUFBQWxlLFFBQUE4SyxTQUFBdkU7UUFDQXZHLFFBQUE4UjtRQUNBOVIsUUFBQStSO1FBQ0EvUixRQUFBbWE7UUFDQW5hLFFBQUFvYTtRQUNBcGEsUUFBQThEO1FBQ0E5RCxRQUFBdU47UUFDQXZOLFFBQUF1YTtRQUNBdmEsUUFBQXlhO1FBQ0F6YSxRQUFBbWU7UUFDQW5lLFFBQUEwYTtRQUNBMWEsUUFBQTJYO1FBQ0EzWCxRQUFBNmE7UUFDQTdhLFFBQUErYTtRQUNBL2EsUUFBQW1iO1FBQ0FuYixRQUFBaWI7UUFDQWpiLFFBQUFxYjtRQUNBcmIsUUFBQXViO1FBQ0F2YixRQUFBbUw7UUFDQW5MLFFBQUFrTDtRQUNBbEwsUUFBQWlMO1FBRUEsSUFBQXpILFNBQUF2RCxvQkFBQTtRQUVBLElBQUE0TCxlQUFBNUwsb0JBQUE7UUFFQSxJQUFBbWUsTUFBQSxHQUFBNWEsT0FBQW1NLEtBQUE7UUFDQSxJQUFBME8sT0FBQTtRQUNBLElBQUFDLE1BQUE7UUFDQSxJQUFBQyxNQUFBO1FBQ0EsSUFBQUMsT0FBQTtRQUNBLElBQUFDLE9BQUE7UUFDQSxJQUFBQyxNQUFBO1FBQ0EsSUFBQUMsT0FBQTtRQUNBLElBQUFDLE9BQUE7UUFDQSxJQUFBN1QsU0FBQTtRQUNBLElBQUE4VCxTQUFBO1FBQ0EsSUFBQUMsaUJBQUE7UUFDQSxJQUFBQyxZQUFBO1FBQ0EsSUFBQUMsUUFBQTtRQUNBLElBQUFDLGNBQUE7UUFDQSxJQUFBQyxjQUFBO1FBRUEsSUFBQUMsWUFBQTtRQUVBLElBQUExUSxTQUFBLFNBQUFBLE9BQUF2SixNQUFBa2E7WUFDQSxJQUFBdmE7WUFFQSxPQUFBQSxXQUFrQkEsS0FBQXVaLE1BQUEsTUFBQXZaLEtBQUFLLFFBQUFrYSxTQUFBdmE7O1FBR2xCLElBQUFpRyxTQUFBOUssUUFBQThLLFNBQUEsU0FBQUEsT0FBQWtOO2FBQ0EsR0FBQXhVLE9BQUE2SixPQUFBMk0sU0FBQVMsS0FBQXpDLE1BQUF4VSxPQUFBeUosR0FBQXNELFFBQUE7WUFDQXlILElBQUEyRyxNQUFBekMsV0FBQTtZQUNBLE9BQUFsRTs7UUFHQSxTQUFBbEc7WUFDQSxJQUFBdU4sbUJBQUF6UyxVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUE7WUFFQSxJQUFBQSxVQUFBOUosUUFBQTtpQkFDQSxHQUFBVSxPQUFBNkosT0FBQVQsVUFBQSxJQUFBcEosT0FBQXlKLEdBQUF3RCxVQUFBOztZQUVBLElBQUFqTixPQUFBeUosR0FBQStFLFFBQUFxTixtQkFBQTtnQkFDQSxPQUFBNVEsT0FBQTRQO29CQUF5QnJNLFNBQUFxTjs7O1lBRXpCLElBQUE3YixPQUFBeUosR0FBQTVCLFFBQUFnVSxtQkFBQTtnQkFDQSxPQUFBNVEsT0FBQTRQO29CQUF5QmhULFNBQUFnVTs7O1lBRXpCLFVBQUE3WSxNQUFBLHNDQUFBbVEsT0FBQTBJLG9CQUFBOztRQUdBdk4sS0FBQTRKLFFBQUE7WUFDQSxJQUFBMUQsTUFBQWxHLEtBQUF2RSxNQUFBaEgsV0FBQXFHO1lBQ0FvTCxJQUFBcUcsTUFBQTNDLFFBQUE7WUFDQSxPQUFBMUQ7O1FBR0EsSUFBQWtHLFFBQUFsZSxRQUFBa2UsU0FBQSxHQUFBMWEsT0FBQWtNLFdBQUFvQyxLQUFBNEosUUFBQSxHQUFBbFksT0FBQW1SLGlCQUFBO1FBRUEsU0FBQTVDLElBQUExRyxTQUFBNEo7WUFDQSxJQUFBckksVUFBQTlKLFNBQUE7aUJBQ0EsR0FBQVUsT0FBQTZKLE9BQUFoQyxTQUFBN0gsT0FBQXlKLEdBQUF3RCxVQUFBO2lCQUNBLEdBQUFqTixPQUFBNkosT0FBQWhDLFNBQUE3SCxPQUFBeUosR0FBQTVCLFNBQUEsb0NBQUFBLFVBQUE7aUJBQ0EsR0FBQTdILE9BQUE2SixPQUFBNEgsUUFBQXpSLE9BQUF5SixHQUFBd0QsVUFBQTttQkFDRztpQkFDSCxHQUFBak4sT0FBQTZKLE9BQUFoQyxTQUFBN0gsT0FBQXlKLEdBQUF3RCxVQUFBO2dCQUNBd0UsU0FBQTVKO2dCQUNBQSxVQUFBOztZQUVBLE9BQUFvRCxPQUFBNlA7Z0JBQXNCalQ7Z0JBQUE0Sjs7O1FBR3RCbEQsSUFBQWEsVUFBQTtZQUNBLElBQUFvRixNQUFBakcsSUFBQXhFLE1BQUFoSCxXQUFBcUc7WUFDQW9MLElBQUFzRyxLQUFBMUwsVUFBQTtZQUNBLE9BQUFvRjs7UUFHQWpHLElBQUF1TixRQUFBLEdBQUE5YixPQUFBa00sV0FBQXFDLElBQUFhLFVBQUEsR0FBQXBQLE9BQUFtUixpQkFBQTtRQUVBLFNBQUF3RixJQUFBdFA7WUFDQSxPQUFBNEQsT0FBQThQLEtBQUExVDs7UUFHQSxTQUFBdVAsS0FBQXZQO1lBQ0EsT0FBQTRELE9BQUErUCxNQUFBM1Q7O1FBR0EsU0FBQTBVLGNBQUFDLE1BQUEvSyxJQUFBNUg7YUFDQSxHQUFBckosT0FBQTZKLE9BQUFvSCxJQUFBalIsT0FBQXlKLEdBQUF3RCxVQUFBK08sT0FBQTtZQUVBLElBQUE3UixVQUFBO1lBQ0EsSUFBQW5LLE9BQUF5SixHQUFBOEQsTUFBQTBELEtBQUE7Z0JBQ0EsSUFBQWdMLE1BQUFoTDtnQkFDQTlHLFVBQUE4UixJQUFBO2dCQUNBaEwsS0FBQWdMLElBQUE7bUJBQ0csSUFBQWhMLE9BQUE7Z0JBQ0gsSUFBQWlMLE9BQUFqTDtnQkFDQTlHLFVBQUErUixLQUFBL1I7Z0JBQ0E4RyxLQUFBaUwsS0FBQWpMOztZQUVBLElBQUE5RyxXQUFBbkssT0FBQXlKLEdBQUE2RCxPQUFBMkQsT0FBQWpSLE9BQUF5SixHQUFBSyxLQUFBSyxRQUFBOEcsTUFBQTtnQkFDQUEsS0FBQTlHLFFBQUE4Rzs7YUFFQSxHQUFBalIsT0FBQTZKLE9BQUFvSCxJQUFBalIsT0FBQXlKLEdBQUFLLE1BQUFrUyxPQUFBLGdCQUFBL0ssS0FBQTtZQUVBO2dCQUFVOUc7Z0JBQUE4RztnQkFBQTVIOzs7UUFHVixTQUFBL0ksS0FBQTJRO1lBQ0EsU0FBQTlILE9BQUFDLFVBQUE5SixRQUFBK0osT0FBQUMsTUFBQUgsT0FBQSxJQUFBQSxPQUFBLFFBQUFJLE9BQUEsR0FBb0ZBLE9BQUFKLE1BQWFJLFFBQUE7Z0JBQ2pHRixLQUFBRSxPQUFBLEtBQUFILFVBQUFHOztZQUdBLE9BQUEwQixPQUFBZ1EsTUFBQWMsY0FBQSxRQUFBOUssSUFBQTVIOztRQUdBLFNBQUFVLE1BQUFJLFNBQUE4RztZQUNBLElBQUE1SCxPQUFBRCxVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUE7WUFFQSxPQUFBNkIsT0FBQWdRLE1BQUFjLGNBQUE7Z0JBQThDNVI7Z0JBQUE4RztlQUEyQjVIOztRQUd6RSxTQUFBME4sSUFBQTlGO1lBQ0EsU0FBQWtMLFFBQUEvUyxVQUFBOUosUUFBQStKLE9BQUFDLE1BQUE2UyxRQUFBLElBQUFBLFFBQUEsUUFBQUMsUUFBQSxHQUF3RkEsUUFBQUQsT0FBZUMsU0FBQTtnQkFDdkcvUyxLQUFBK1MsUUFBQSxLQUFBaFQsVUFBQWdUOztZQUdBLE9BQUFuUixPQUFBaVEsS0FBQWEsY0FBQSxPQUFBOUssSUFBQTVIOztRQUdBLFNBQUE0TixLQUFBaEc7WUFDQSxTQUFBb0wsUUFBQWpULFVBQUE5SixRQUFBK0osT0FBQUMsTUFBQStTLFFBQUEsSUFBQUEsUUFBQSxRQUFBQyxRQUFBLEdBQXdGQSxRQUFBRCxPQUFlQyxTQUFBO2dCQUN2R2pULEtBQUFpVCxRQUFBLEtBQUFsVCxVQUFBa1Q7O1lBR0EsT0FBQXJSLE9BQUFrUSxNQUFBWSxjQUFBLFFBQUE5SyxJQUFBNUg7O1FBR0EsU0FBQXNSLE1BQUExSjtZQUNBLFNBQUFzTCxRQUFBblQsVUFBQTlKLFFBQUErSixPQUFBQyxNQUFBaVQsUUFBQSxJQUFBQSxRQUFBLFFBQUFDLFFBQUEsR0FBd0ZBLFFBQUFELE9BQWVDLFNBQUE7Z0JBQ3ZHblQsS0FBQW1ULFFBQUEsS0FBQXBULFVBQUFvVDs7WUFHQSxPQUFBbFYsT0FBQTJQLEtBQUFsTixNQUFBaEgsYUFBQWtPLEtBQUF1SCxPQUFBblA7O1FBR0EsU0FBQTZOO1lBQ0EsU0FBQXVGLFFBQUFyVCxVQUFBOUosUUFBQXFVLFFBQUFySyxNQUFBbVQsUUFBQUMsUUFBQSxHQUFxRUEsUUFBQUQsT0FBZUMsU0FBQTtnQkFDcEYvSSxNQUFBK0ksU0FBQXRULFVBQUFzVDs7WUFHQSxJQUFBL0ksTUFBQXJVLFNBQUE7Z0JBQ0EsT0FBQXFYLElBQUFoRCxNQUFBcFEsSUFBQSxTQUFBeUs7b0JBQ0EsT0FBQWtKLEtBQUFsSjs7O1lBR0EsSUFBQTlDLE9BQUF5SSxNQUFBO2FBQ0EsR0FBQTNULE9BQUE2SixPQUFBcUIsTUFBQWxMLE9BQUF5SixHQUFBd0QsVUFBQTthQUNBLEdBQUFqTixPQUFBNkosT0FBQXFCLE1BQUFsTCxPQUFBeUosR0FBQXlCLE1BQUEsMEJBQUFBLE9BQUEsaUNBQUF5UTtZQUNBLE9BQUExUSxPQUFBbVEsTUFBQWxROztRQUdBLFNBQUFpSjtZQUNBLFNBQUF3SSxRQUFBdlQsVUFBQTlKLFFBQUFxVSxRQUFBckssTUFBQXFULFFBQUFDLFFBQUEsR0FBcUVBLFFBQUFELE9BQWVDLFNBQUE7Z0JBQ3BGakosTUFBQWlKLFNBQUF4VCxVQUFBd1Q7O1lBR0EsSUFBQWpKLE1BQUFyVSxTQUFBO2dCQUNBLE9BQUFxWCxJQUFBaEQsTUFBQXBRLElBQUEsU0FBQXlLO29CQUNBLE9BQUFtRyxPQUFBbkc7OztZQUdBLElBQUE5QyxPQUFBeUksTUFBQTtZQUNBLElBQUFBLE1BQUFyVSxXQUFBO2lCQUNBLEdBQUFVLE9BQUE2SixPQUFBcUIsTUFBQWxMLE9BQUF5SixHQUFBd0QsVUFBQTtpQkFDQSxHQUFBak4sT0FBQTZKLE9BQUFxQixNQUFBbEwsT0FBQXlKLEdBQUF5QixNQUFBLDRCQUFBQSxPQUFBLGlDQUFBeVE7O1lBRUEsT0FBQTFRLE9BQUExRCxRQUFBMkQsUUFBQWxMLE9BQUF3TTs7UUFHQSxTQUFBNkssT0FBQXNDO1lBQ0EsU0FBQWtELFFBQUF6VCxVQUFBOUosUUFBQStKLE9BQUFDLE1BQUF1VCxRQUFBLElBQUFBLFFBQUEsUUFBQUMsUUFBQSxHQUF3RkEsUUFBQUQsT0FBZUMsU0FBQTtnQkFDdkd6VCxLQUFBeVQsUUFBQSxLQUFBMVQsVUFBQTBUOztZQUdBLElBQUExVCxVQUFBOUosV0FBQTtnQkFDQXFhLFdBQUEzWixPQUFBNk07bUJBQ0c7aUJBQ0gsR0FBQTdNLE9BQUE2SixPQUFBOFAsVUFBQTNaLE9BQUF5SixHQUFBd0QsVUFBQTtpQkFDQSxHQUFBak4sT0FBQTZKLE9BQUE4UCxVQUFBM1osT0FBQXlKLEdBQUFLLE1BQUEsc0NBQUE2UCxXQUFBOztZQUVBLE9BQUExTyxPQUFBb1E7Z0JBQXlCMUI7Z0JBQUF0UTs7O1FBTXpCLFNBQUFrTyxjQUFBL0ksU0FBQUw7YUFDQSxHQUFBbk8sT0FBQTZKLE9BQUEyRSxTQUFBeE8sT0FBQXlKLEdBQUF3RCxVQUFBO1lBQ0EsSUFBQTdELFVBQUE5SixTQUFBO2lCQUNBLEdBQUFVLE9BQUE2SixPQUFBc0UsUUFBQW5PLE9BQUF5SixHQUFBd0QsVUFBQTtpQkFDQSxHQUFBak4sT0FBQTZKLE9BQUFzRSxRQUFBbk8sT0FBQXlKLEdBQUEwRSxRQUFBLDhDQUFBQSxTQUFBOztZQUVBLE9BQUFsRCxPQUFBcVE7Z0JBQWlDOU07Z0JBQUFMOzs7UUFHakMsU0FBQXdKO1lBQ0EsT0FBQTFNLE9BQUFzUTs7UUFHQSxTQUFBOUQsTUFBQTVQO2FBQ0EsR0FBQTdILE9BQUE2SixPQUFBaEMsU0FBQTdILE9BQUF5SixHQUFBNUIsU0FBQSw4QkFBQUEsVUFBQTtZQUNBLE9BQUFvRCxPQUFBdVEsT0FBQTNUOztRQUdBLFNBQUFnUSxXQUFBa0M7YUFDQSxHQUFBL1osT0FBQTZKLE9BQUFrUSxNQUFBL1osT0FBQXlKLEdBQUE2RCxRQUFBLGdDQUFBeU0sT0FBQTtZQUNBLE9BQUE5TyxPQUFBd1EsYUFBQTFCOztRQUdBLFNBQUFoQyxXQUFBM1k7YUFDQSxHQUFBWSxPQUFBNkosT0FBQXpLLE9BQUFZLE9BQUF5SixHQUFBc0QsU0FBQSxHQUFBL00sT0FBQXVSLHlCQUFBLE1BQUFuUztZQUNBLE9BQUE2TCxPQUFBeVEsYUFBQXRjOztRQUdBLFNBQUF1SSxVQUFBa1Usa0JBQUFrQjtZQUNBLFNBQUFDLFFBQUE1VCxVQUFBOUosUUFBQStKLE9BQUFDLE1BQUEwVCxRQUFBLElBQUFBLFFBQUEsUUFBQUMsUUFBQSxHQUF3RkEsUUFBQUQsT0FBZUMsU0FBQTtnQkFDdkc1VCxLQUFBNFQsUUFBQSxLQUFBN1QsVUFBQTZUOztZQUdBLE9BQUFoRyxLQUFBbE4sTUFBQWhILGFBQUFzRixhQUFBNlUsaUJBQUFyQixrQkFBQWtCLFNBQUF2RSxPQUFBblA7O1FBR0EsU0FBQTNCLFdBQUFtVSxrQkFBQWtCO1lBQ0EsU0FBQUksUUFBQS9ULFVBQUE5SixRQUFBK0osT0FBQUMsTUFBQTZULFFBQUEsSUFBQUEsUUFBQSxRQUFBQyxRQUFBLEdBQXdGQSxRQUFBRCxPQUFlQyxTQUFBO2dCQUN2Ry9ULEtBQUErVCxRQUFBLEtBQUFoVSxVQUFBZ1U7O1lBR0EsT0FBQW5HLEtBQUFsTixNQUFBaEgsYUFBQXNGLGFBQUFnVixrQkFBQXhCLGtCQUFBa0IsU0FBQXZFLE9BQUFuUDs7UUFHQSxTQUFBNUIsU0FBQThILElBQUFmLFNBQUF1TztZQUNBLFNBQUFPLFNBQUFsVSxVQUFBOUosUUFBQStKLE9BQUFDLE1BQUFnVSxTQUFBLElBQUFBLFNBQUEsUUFBQUMsU0FBQSxHQUE0RkEsU0FBQUQsUUFBaUJDLFVBQUE7Z0JBQzdHbFUsS0FBQWtVLFNBQUEsS0FBQW5VLFVBQUFtVTs7WUFHQSxPQUFBdEcsS0FBQWxOLE1BQUFoSCxhQUFBc0YsYUFBQW1WLGdCQUFBak8sSUFBQWYsU0FBQXVPLFNBQUF2RSxPQUFBblA7O1FBR0EsSUFBQW9VLHFCQUFBLFNBQUFBLG1CQUFBL2I7WUFDQSxnQkFBQXVKO2dCQUNBLE9BQUFBLGlCQUFBMlAsT0FBQTNQLE9BQUF2Sjs7O1FBSUEsSUFBQThVLFdBQUFoYSxRQUFBZ2E7WUFDQWxJLE1BQUFtUCxtQkFBQTVDO1lBQ0F0TSxLQUFBa1AsbUJBQUEzQztZQUNBbkUsS0FBQThHLG1CQUFBMUM7WUFDQW5FLE1BQUE2RyxtQkFBQXpDO1lBQ0ExYSxNQUFBbWQsbUJBQUF4QztZQUNBbEUsS0FBQTBHLG1CQUFBdkM7WUFDQWpFLE1BQUF3RyxtQkFBQXRDO1lBQ0FqRSxNQUFBdUcsbUJBQUFyQztZQUNBakgsUUFBQXNKLG1CQUFBbFc7WUFDQThQLFFBQUFvRyxtQkFBQXBDO1lBQ0E5RCxlQUFBa0csbUJBQUFuQztZQUNBM0QsV0FBQThGLG1CQUFBbEM7WUFDQTlELE9BQUFnRyxtQkFBQWpDO1lBQ0EzRCxZQUFBNEYsbUJBQUFoQztZQUNBMUQsWUFBQTBGLG1CQUFBL0I7OztJVjJ4RE1nQyxLQUNBLFNBQVVuaEIsUUFBUUMsU0FBU0M7UVdua0VqQztRQUVBRCxRQUFBaUIsYUFBQTtRQUNBakIsUUFBQWdoQixpQkFBQWhoQixRQUFBNmdCLG1CQUFBN2dCLFFBQUEwZ0Isa0JBQUExZ0IsUUFBQWlMLFdBQUFqTCxRQUFBa0wsYUFBQWxMLFFBQUFtTCxZQUFBNUU7UUFFQSxJQUFBNGEsYUFBQWxoQixvQkFBQTtRQUVBLElBQUFtaEIsY0FBQWhoQix1QkFBQStnQjtRQUVBLElBQUFFLGNBQUFwaEIsb0JBQUE7UUFFQSxJQUFBcWhCLGVBQUFsaEIsdUJBQUFpaEI7UUFFQSxJQUFBRSxZQUFBdGhCLG9CQUFBO1FBRUEsSUFBQXVoQixhQUFBcGhCLHVCQUFBbWhCO1FBRUEsSUFBQS9kLFNBQUF2RCxvQkFBQTtRQUVBLFNBQUFHLHVCQUFBWTtZQUFzQyxPQUFBQSxXQUFBQyxhQUFBRDtnQkFBdUNFLFNBQUFGOzs7UUFFN0UsSUFBQTBULHFCQUFBLFNBQUFBLG1CQUFBK007WUFDQSxxQkFBa0JBLGFBQUEsbUVBQWtGQSxhQUFBLCtKQUFxQkEsYUFBQTs7UUFHekgsSUFBQXRXLGFBQUEsR0FBQTNILE9BQUFrTSxXQUFBMFIsWUFBQWxnQixTQUFBd1QsbUJBQUE7UUFDQSxJQUFBeEosY0FBQSxHQUFBMUgsT0FBQWtNLFdBQUE0UixhQUFBcGdCLFNBQUF3VCxtQkFBQTtRQUNBLElBQUF6SixZQUFBLEdBQUF6SCxPQUFBa00sV0FBQThSLFdBQUF0Z0IsU0FBQXdULG1CQUFBO1FBRUExVSxRQUFBbUw7UUFDQW5MLFFBQUFrTDtRQUNBbEwsUUFBQWlMO1FBQ0FqTCxRQUFBMGdCLGtCQUFBVSxZQUFBbGdCO1FBQ0FsQixRQUFBNmdCLG1CQUFBUyxhQUFBcGdCO1FBQ0FsQixRQUFBZ2hCLGlCQUFBUSxXQUFBdGdCOztJWHlrRU13Z0IsS0FDQSxTQUFVM2hCLFFBQVFDLFNBQVNDO1FZNW1FakM7UUFFQUQsUUFBQWlCLGFBQUE7UUFDQWpCLFFBQUFrQixVQUFBaUs7UUFFQSxJQUFBd1csZUFBQTFoQixvQkFBQTtRQUVBLElBQUEyaEIsZ0JBQUF4aEIsdUJBQUF1aEI7UUFFQSxJQUFBN1YsTUFBQTdMLG9CQUFBO1FBRUEsSUFBQTBMLFdBQUExTCxvQkFBQTtRQUVBLFNBQUFHLHVCQUFBWTtZQUFzQyxPQUFBQSxXQUFBQyxhQUFBRDtnQkFBdUNFLFNBQUFGOzs7UUFFN0UsU0FBQW1LLFVBQUFrVSxrQkFBQWtCO1lBQ0EsU0FBQTVULE9BQUFDLFVBQUE5SixRQUFBK0osT0FBQUMsTUFBQUgsT0FBQSxJQUFBQSxPQUFBLFFBQUFJLE9BQUEsR0FBb0ZBLE9BQUFKLE1BQWFJLFFBQUE7Z0JBQ2pHRixLQUFBRSxPQUFBLEtBQUFILFVBQUFHOztZQUdBLElBQUE4VTtnQkFBZTNOLE1BQUE7Z0JBQUExUixRQUFBLEdBQUFzSixJQUFBZ0csTUFBQXVOOztZQUNmLElBQUF5QyxRQUFBLFNBQUFBLE1BQUFDO2dCQUNBO29CQUFZN04sTUFBQTtvQkFBQTFSLE9BQUFzSixJQUFBMk8sS0FBQWxOLE1BQUFoSCxhQUFBZ2EsU0FBQXZFLE9BQUFuUCxRQUFBa1Y7OztZQUdaLElBQUE5TSxjQUFBLEdBQ0ErTSxZQUFBLFNBQUFBLFVBQUFEO2dCQUNBLE9BQUE5TSxTQUFBOE07O1lBR0EsV0FBQUgsY0FBQTFnQjtnQkFDQStnQixJQUFBLFNBQUFBO29CQUNBLGVBQUFKLE9BQUFHOztnQkFFQUUsSUFBQSxTQUFBQTtvQkFDQSxPQUFBak4sV0FBQXRKLFNBQUFKLFFBQUFvVyxhQUFBUSxXQUFBLE1BQUFMLE1BQUE3TTs7ZUFFRyx5QkFBQTBNLGFBQUFTLFVBQUEvQyxvQkFBQSxPQUFBa0IsT0FBQTNSLE9BQUE7OztJWm1uRUd5VCxLQUNBLFNBQVV0aUIsUUFBUUMsU0FBU0M7UWF6cEVqQztRQUVBRCxRQUFBaUIsYUFBQTtRQUNBakIsUUFBQW1pQixPQUFBNWI7UUFDQXZHLFFBQUFvaUI7UUFDQXBpQixRQUFBa0IsVUFBQW9oQjtRQUVBLElBQUE5ZSxTQUFBdkQsb0JBQUE7UUFFQSxJQUFBaVU7WUFBWUEsTUFBQTtZQUFBMVIsT0FBQStEOztRQUNaLElBQUE0YixPQUFBbmlCLFFBQUFtaUI7UUFFQSxTQUFBQyxTQUFBL0M7WUFDQSxJQUFBN2IsT0FBQXlKLEdBQUE1QixRQUFBZ1UsbUJBQUE7Z0JBQ0E7bUJBQ0csSUFBQXZTLE1BQUFrRSxRQUFBcU8sbUJBQUE7Z0JBQ0gsT0FBQTFJLE9BQUEwSSxpQkFBQXRZLElBQUEsU0FBQXdiO29CQUNBLE9BQUE1TCxPQUFBNEw7O21CQUVHO2dCQUNILE9BQUE1TCxPQUFBMEk7OztRQUlBLFNBQUFpRCxZQUFBRSxLQUFBQztZQUNBLElBQUE3VCxPQUFBaEMsVUFBQTlKLFNBQUEsS0FBQThKLFVBQUEsT0FBQXJHLFlBQUFxRyxVQUFBO1lBRUEsSUFBQThWLG1CQUFBLEdBQ0FDLFFBQUFGO1lBRUEsU0FBQXBSLEtBQUFpRSxLQUFBNU87Z0JBQ0EsSUFBQWljLFVBQUFSLE1BQUE7b0JBQ0EsT0FBQWpPOztnQkFHQSxJQUFBeE4sT0FBQTtvQkFDQWljLFFBQUFSO29CQUNBLE1BQUF6Yjt1QkFDSztvQkFDTGdjLDJCQUFBcE47b0JBRUEsSUFBQXNOLGFBQUFKLElBQUFHLFVBQ0FFLElBQUFELFdBQUEsSUFDQUUsU0FBQUYsV0FBQSxJQUNBRyxlQUFBSCxXQUFBO29CQUVBRCxRQUFBRTtvQkFDQUgsY0FBQUs7b0JBQ0EsT0FBQUosVUFBQVIsT0FBQWpPLE9BQUE0Tzs7O1lBSUEsV0FBQXRmLE9BQUFpTSxjQUFBNEIsTUFBQSxTQUFBM0s7Z0JBQ0EsT0FBQTJLLEtBQUEsTUFBQTNLO2VBQ0drSSxNQUFBOzs7SWJncUVHb1UsS0FDQSxTQUFVampCLFFBQVFDLFNBQVNDO1NjdnRFakMsU0FBQW1NO1lBQUE7WUFFQXBNLFFBQUFpQixhQUFBO1lBQ0FqQixRQUFBaWpCLHdCQUFBampCLFFBQUFrakIsaUJBQUFsakIsUUFBQTZiLFFBQUE3YixRQUFBdUwsTUFBQWhGO1lBRUEsSUFBQXVJLFdBQUF4TSxPQUFBeU0sVUFBQSxTQUFBcE07Z0JBQW1ELFNBQUFFLElBQUEsR0FBZ0JBLElBQUErSixVQUFBOUosUUFBc0JELEtBQUE7b0JBQU8sSUFBQW1NLFNBQUFwQyxVQUFBL0o7b0JBQTJCLFNBQUFNLE9BQUE2TCxRQUFBO3dCQUEwQixJQUFBMU0sT0FBQWlCLFVBQUFNLGVBQUFDLEtBQUFrTCxRQUFBN0wsTUFBQTs0QkFBeURSLE9BQUFRLE9BQUE2TCxPQUFBN0w7Ozs7Z0JBQWlDLE9BQUFSOztZQUUvTzNDLFFBQUFtakI7WUFDQW5qQixRQUFBcUw7WUFDQXJMLFFBQUFzTDtZQUNBdEwsUUFBQTJZO1lBRUEsSUFBQW5WLFNBQUF2RCxvQkFBQTtZQUVBLElBQUEyTCxXQUFBM0wsb0JBQUE7WUFFQSxJQUFBaVcsYUFBQWpXLG9CQUFBO1lBRUEsSUFBQW1qQixtQkFBQTtZQUNBLElBQUE3WCxNQUFBdkwsUUFBQXVMO2dCQUF5QnJHLE1BQUFrZTs7WUFDekIsSUFBQXZILFFBQUE3YixRQUFBNmIsUUFBQSxTQUFBQSxNQUFBd0g7Z0JBQ0EsT0FBQUEsT0FBQW5lLFNBQUFrZTs7WUFHQSxTQUFBRDtnQkFDQSxJQUFBRztnQkFFQSxTQUFBN1YsVUFBQThWO29CQUNBRCxZQUFBeFEsS0FBQXlRO29CQUNBO3dCQUNBLFdBQUEvZixPQUFBNEwsUUFBQWtVLGFBQUFDOzs7Z0JBSUEsU0FBQUMsS0FBQWxSO29CQUNBLElBQUF2SSxNQUFBdVosWUFBQXJHO29CQUNBLFNBQUFwYSxJQUFBLEdBQUE0Z0IsTUFBQTFaLElBQUFqSCxRQUFxQ0QsSUFBQTRnQixLQUFTNWdCLEtBQUE7d0JBQzlDa0gsSUFBQWxILEdBQUF5UDs7O2dCQUlBO29CQUNBN0U7b0JBQ0ErVjs7O1lBSUEsSUFBQU4saUJBQUFsakIsUUFBQWtqQixpQkFBQTtZQUNBLElBQUFELHdCQUFBampCLFFBQUFpakIsd0JBQUE7WUFFQSxJQUFBN1csUUFBQWMsSUFBQUMsYUFBQTtnQkFDQW5OLFFBQUFpakIsaURBQUE7O1lBR0EsU0FBQTVYO2dCQUNBLElBQUFzRyxTQUFBL0UsVUFBQTlKLFNBQUEsS0FBQThKLFVBQUEsT0FBQXJHLFlBQUFxRyxVQUFBLEtBQUFoQixTQUFBUixRQUFBa1M7Z0JBRUEsSUFBQW9HLFNBQUE7Z0JBQ0EsSUFBQUM7aUJBRUEsR0FBQW5nQixPQUFBNkosT0FBQXNFLFFBQUFuTyxPQUFBeUosR0FBQTBFLFFBQUF1UjtnQkFFQSxTQUFBVTtvQkFDQSxJQUFBRixVQUFBQyxPQUFBN2dCLFFBQUE7d0JBQ0EsVUFBQVUsT0FBQXNSLGFBQUE7O29CQUVBLElBQUE2TyxPQUFBN2dCLFdBQUE2TyxPQUFBRSxXQUFBO3dCQUNBLFVBQUFyTyxPQUFBc1IsYUFBQTs7O2dCQUlBLFNBQUEvQyxJQUFBMkU7b0JBQ0FrTjtxQkFDQSxHQUFBcGdCLE9BQUE2SixPQUFBcUosT0FBQWxULE9BQUF5SixHQUFBd0QsVUFBQXdTO29CQUNBLElBQUFTLFFBQUE7d0JBQ0E7O29CQUVBLEtBQUFDLE9BQUE3Z0IsUUFBQTt3QkFDQSxPQUFBNk8sT0FBQUksSUFBQTJFOztvQkFFQSxTQUFBN1QsSUFBQSxHQUFtQkEsSUFBQThnQixPQUFBN2dCLFFBQW1CRCxLQUFBO3dCQUN0QyxJQUFBcVUsS0FBQXlNLE9BQUE5Z0I7d0JBQ0EsS0FBQXFVLEdBQUExVCxPQUFBc00sVUFBQW9ILEdBQUExVCxPQUFBc00sT0FBQTRHLFFBQUE7NEJBQ0FpTixPQUFBblIsT0FBQTNQLEdBQUE7NEJBQ0EsT0FBQXFVLEdBQUFSOzs7O2dCQUtBLFNBQUE1RSxLQUFBb0Y7b0JBQ0EwTTtxQkFDQSxHQUFBcGdCLE9BQUE2SixPQUFBNkosSUFBQTFULE9BQUF5SixHQUFBSyxNQUFBO29CQUVBLElBQUFvVyxVQUFBL1IsT0FBQUUsV0FBQTt3QkFDQXFGLEdBQUEzTDsyQkFDSyxLQUFBb0csT0FBQUUsV0FBQTt3QkFDTHFGLEdBQUF2RixPQUFBRzsyQkFDSzt3QkFDTDZSLE9BQUE3USxLQUFBb0U7d0JBQ0FBLEdBQUFTLFNBQUE7NEJBQ0EsV0FBQW5VLE9BQUE0TCxRQUFBdVUsUUFBQXpNOzs7O2dCQUtBLFNBQUErRCxNQUFBL0Q7b0JBQ0EwTTtxQkFDQSxHQUFBcGdCLE9BQUE2SixPQUFBNkosSUFBQTFULE9BQUF5SixHQUFBSyxNQUFBO29CQUNBLElBQUFvVyxVQUFBL1IsT0FBQUUsV0FBQTt3QkFDQXFGLEdBQUEzTDt3QkFDQTs7b0JBRUEyTCxHQUFBdkYsT0FBQXNKOztnQkFHQSxTQUFBOUk7b0JBQ0F5UjtvQkFDQSxLQUFBRixRQUFBO3dCQUNBQSxTQUFBO3dCQUNBLElBQUFDLE9BQUE3Z0IsUUFBQTs0QkFDQSxJQUFBaUgsTUFBQTRaOzRCQUNBQTs0QkFDQSxTQUFBOWdCLElBQUEsR0FBQTRnQixNQUFBMVosSUFBQWpILFFBQXlDRCxJQUFBNGdCLEtBQVM1Z0IsS0FBQTtnQ0FDbERrSCxJQUFBbEgsR0FBQTBJOzs7OztnQkFNQTtvQkFDQXVHO29CQUNBQztvQkFDQWtKO29CQUNBOUk7b0JBQ0EwUjt3QkFDQSxPQUFBRjs7b0JBRUFHO3dCQUNBLE9BQUFKOzs7O1lBS0EsU0FBQXBZLGFBQUFtQztnQkFDQSxJQUFBa0UsU0FBQS9FLFVBQUE5SixTQUFBLEtBQUE4SixVQUFBLE9BQUFyRyxZQUFBcUcsVUFBQSxLQUFBaEIsU0FBQVIsUUFBQTJZO2dCQUNBLElBQUFqTixVQUFBbEssVUFBQTtnQkFNQSxJQUFBQSxVQUFBOUosU0FBQTtxQkFDQSxHQUFBVSxPQUFBNkosT0FBQXlKLFNBQUF0VCxPQUFBeUosR0FBQUssTUFBQTs7Z0JBR0EsSUFBQTBXLE9BQUEzWSxRQUFBc0c7Z0JBQ0EsSUFBQVEsUUFBQSxTQUFBQTtvQkFDQSxLQUFBNlIsS0FBQUYsWUFBQTt3QkFDQSxJQUFBRyxhQUFBOzRCQUNBQTs7d0JBRUFELEtBQUE3Ujs7O2dCQUdBLElBQUE4UixjQUFBeFcsVUFBQSxTQUFBaUo7b0JBQ0EsSUFBQW1GLE1BQUFuRixRQUFBO3dCQUNBdkU7d0JBQ0E7O29CQUVBLElBQUEyRSxvQkFBQUosUUFBQTt3QkFDQTs7b0JBRUFzTixLQUFBalMsSUFBQTJFOztnQkFFQSxJQUFBc04sS0FBQUYsWUFBQTtvQkFDQUc7O2dCQUdBLEtBQUF6Z0IsT0FBQXlKLEdBQUFLLEtBQUEyVyxjQUFBO29CQUNBLFVBQUF6ZCxNQUFBOztnQkFHQTtvQkFDQXNMLE1BQUFrUyxLQUFBbFM7b0JBQ0FtSixPQUFBK0ksS0FBQS9JO29CQUNBOUk7OztZQUlBLFNBQUF3RyxXQUFBbEw7Z0JBQ0EsSUFBQXVXLE9BQUExWSxhQUFBLFNBQUE0TDtvQkFDQSxPQUFBekosVUFBQSxTQUFBaUo7d0JBQ0EsSUFBQUEsTUFBQWxULE9BQUF1TSxjQUFBOzRCQUNBbUgsR0FBQVI7NEJBQ0E7O3lCQUVBLEdBQUFSLFdBQUE0RixNQUFBOzRCQUNBLE9BQUE1RSxHQUFBUjs7OztnQkFLQSxPQUFBNUgsYUFBb0JrVjtvQkFDcEJsUyxNQUFBLFNBQUFBLEtBQUFvRixJQUFBSjt3QkFDQSxJQUFBbEssVUFBQTlKLFNBQUE7NkJBQ0EsR0FBQVUsT0FBQTZKLE9BQUF5SixTQUFBdFQsT0FBQXlKLEdBQUFLLE1BQUE7NEJBQ0E0SixHQUFBMVQsT0FBQXNNLFNBQUFnSDs7d0JBRUFrTixLQUFBbFMsS0FBQW9GOzs7O1dkNnRFOEJwVCxLQUFLOUQsU0FBU0Msb0JBQW9COztJQUkxRGlrQixLQUNBLFNBQVVua0IsUUFBUUMsU0FBU0M7UWVsN0VqQztRQUVBRCxRQUFBaUIsYUFBQTtRQUNBakIsUUFBQW9MLFVBQUFwTCxRQUFBbWtCLGtCQUFBNWQ7UUFFQSxJQUFBL0MsU0FBQXZELG9CQUFBO1FBRUEsSUFBQWtrQixrQkFBQW5rQixRQUFBbWtCLGtCQUFBO1FBRUEsSUFBQUMsb0JBQUE7UUFDQSxJQUFBQyxtQkFBQTtRQUNBLElBQUFDLG9CQUFBO1FBQ0EsSUFBQUMscUJBQUE7UUFFQSxJQUFBQztZQUFrQjNTLFNBQUFyTyxPQUFBMk07WUFBQTRCLEtBQUF2TyxPQUFBMEs7WUFBQTRELE1BQUF0TyxPQUFBMEs7O1FBRWxCLFNBQUF1VztZQUNBLElBQUFDLFFBQUE5WCxVQUFBOUosU0FBQSxLQUFBOEosVUFBQSxPQUFBckcsWUFBQXFHLFVBQUE7WUFDQSxJQUFBK1gsaUJBQUEvWCxVQUFBO1lBRUEsSUFBQTdDLE1BQUEsSUFBQStDLE1BQUE0WDtZQUNBLElBQUE1aEIsU0FBQTtZQUNBLElBQUE4aEIsWUFBQTtZQUNBLElBQUFDLFdBQUE7WUFFQSxJQUFBL1IsT0FBQSxTQUFBQSxLQUFBMUI7Z0JBQ0FySCxJQUFBNmEsYUFBQXhUO2dCQUNBd1QseUJBQUEsS0FBQUY7Z0JBQ0E1aEI7O1lBR0EsSUFBQWdQLE9BQUEsU0FBQUE7Z0JBQ0EsSUFBQWhQLFVBQUE7b0JBQ0EsSUFBQXNPLEtBQUFySCxJQUFBOGE7b0JBQ0E5YSxJQUFBOGEsWUFBQTtvQkFDQS9oQjtvQkFDQStoQix1QkFBQSxLQUFBSDtvQkFDQSxPQUFBdFQ7OztZQUlBLElBQUE2SixRQUFBLFNBQUFBO2dCQUNBLElBQUE2SjtnQkFDQSxPQUFBaGlCLFFBQUE7b0JBQ0FnaUIsTUFBQWhTLEtBQUFoQjs7Z0JBRUEsT0FBQWdUOztZQUdBO2dCQUNBalQsU0FBQSxTQUFBQTtvQkFDQSxPQUFBL08sVUFBQTs7Z0JBRUFpUCxLQUFBLFNBQUFBLElBQUFYO29CQUNBLElBQUF0TyxTQUFBNGhCLE9BQUE7d0JBQ0E1UixLQUFBMUI7MkJBQ087d0JBQ1AsSUFBQTJULG9CQUFBO3dCQUNBLFFBQUFKOzBCQUNBLEtBQUFQOzRCQUNBLFVBQUE1ZCxNQUFBMmQ7OzBCQUNBLEtBQUFHOzRCQUNBdmEsSUFBQTZhLGFBQUF4VDs0QkFDQXdULHlCQUFBLEtBQUFGOzRCQUNBRyxXQUFBRDs0QkFDQTs7MEJBQ0EsS0FBQUw7NEJBQ0FRLGVBQUEsSUFBQUw7NEJBRUEzYSxNQUFBa1I7NEJBRUFuWSxTQUFBaUgsSUFBQWpIOzRCQUNBOGhCLFlBQUE3YSxJQUFBakg7NEJBQ0EraEIsV0FBQTs0QkFFQTlhLElBQUFqSCxTQUFBaWlCOzRCQUNBTCxRQUFBSzs0QkFFQWpTLEtBQUExQjs0QkFDQTs7MEJBQ0E7OztnQkFLQVU7Z0JBQ0FtSjs7O1FBSUEsSUFBQTdQLFVBQUFwTCxRQUFBb0w7WUFDQTJZLE1BQUEsU0FBQUE7Z0JBQ0EsT0FBQVM7O1lBRUFsSCxPQUFBLFNBQUFBLE1BQUFvSDtnQkFDQSxPQUFBRCxXQUFBQyxPQUFBTjs7WUFFQVksVUFBQSxTQUFBQSxTQUFBTjtnQkFDQSxPQUFBRCxXQUFBQyxPQUFBTDs7WUFFQVksU0FBQSxTQUFBQSxRQUFBUDtnQkFDQSxPQUFBRCxXQUFBQyxPQUFBSjs7WUFFQVksV0FBQSxTQUFBQSxVQUFBQztnQkFDQSxPQUFBVixXQUFBVSxhQUFBWjs7OztJZjA3RU1hLEtBQ0EsU0FBVXJsQixRQUFRQyxTQUFTQztRZ0JuaUZqQztRQUVBRCxRQUFBaUIsYUFBQTtRQUNBakIsUUFBQWtCLFVBQUFnSztRQUVBLElBQUF5VyxlQUFBMWhCLG9CQUFBO1FBRUEsSUFBQTJoQixnQkFBQXhoQix1QkFBQXVoQjtRQUVBLElBQUE3VixNQUFBN0wsb0JBQUE7UUFFQSxJQUFBMEwsV0FBQTFMLG9CQUFBO1FBRUEsU0FBQUcsdUJBQUFZO1lBQXNDLE9BQUFBLFdBQUFDLGFBQUFEO2dCQUF1Q0UsU0FBQUY7OztRQUU3RSxTQUFBa0ssV0FBQW1VLGtCQUFBa0I7WUFDQSxTQUFBNVQsT0FBQUMsVUFBQTlKLFFBQUErSixPQUFBQyxNQUFBSCxPQUFBLElBQUFBLE9BQUEsUUFBQUksT0FBQSxHQUFvRkEsT0FBQUosTUFBYUksUUFBQTtnQkFDakdGLEtBQUFFLE9BQUEsS0FBQUgsVUFBQUc7O1lBR0EsSUFBQThVO2dCQUFlM04sTUFBQTtnQkFBQTFSLFFBQUEsR0FBQXNKLElBQUFnRyxNQUFBdU47O1lBQ2YsSUFBQXlDLFFBQUEsU0FBQUEsTUFBQUM7Z0JBQ0E7b0JBQVk3TixNQUFBO29CQUFBMVIsT0FBQXNKLElBQUEyTyxLQUFBbE4sTUFBQWhILGFBQUFnYSxTQUFBdkUsT0FBQW5QLFFBQUFrVjs7O1lBRVosSUFBQXNELFVBQUEsU0FBQUEsUUFBQTNXO2dCQUNBO29CQUFZd0YsTUFBQTtvQkFBQTFSLFFBQUEsR0FBQXNKLElBQUE2TCxRQUFBako7OztZQUdaLElBQUFBLFlBQUEsR0FDQXVHLGNBQUE7WUFDQSxJQUFBcVEsVUFBQSxTQUFBQSxRQUFBOVQ7Z0JBQ0EsT0FBQTlDLE9BQUE4Qzs7WUFFQSxJQUFBd1EsWUFBQSxTQUFBQSxVQUFBRDtnQkFDQSxPQUFBOU0sU0FBQThNOztZQUdBLFdBQUFILGNBQUExZ0I7Z0JBQ0ErZ0IsSUFBQSxTQUFBQTtvQkFDQSxlQUFBSixPQUFBRzs7Z0JBRUFFLElBQUEsU0FBQUE7b0JBQ0EsT0FBQWpOLFdBQUF0SixTQUFBSixRQUFBb1csYUFBQVEsU0FBQXpULFNBQUEsTUFBQTJXLFFBQUEzVyxZQUFBLE1BQUFvVCxNQUFBN00sU0FBQXFROztnQkFFQUMsSUFBQSxTQUFBQTtvQkFDQSxlQUFBekQsTUFBQTdNLFNBQUFxUTs7ZUFFRywwQkFBQTNELGFBQUFTLFVBQUEvQyxvQkFBQSxPQUFBa0IsT0FBQTNSLE9BQUE7OztJaEIwaUZHNFcsS0FDQSxTQUFVemxCLFFBQVFDLFNBQVNDO1FpQjFsRmpDO1FBRUFELFFBQUFpQixhQUFBO1FBQ0FqQixRQUFBa0IsVUFBQStKO1FBRUEsSUFBQTBXLGVBQUExaEIsb0JBQUE7UUFFQSxJQUFBMmhCLGdCQUFBeGhCLHVCQUFBdWhCO1FBRUEsSUFBQTdWLE1BQUE3TCxvQkFBQTtRQUVBLElBQUEwTCxXQUFBMUwsb0JBQUE7UUFFQSxJQUFBMkwsV0FBQTNMLG9CQUFBO1FBRUEsSUFBQXVELFNBQUF2RCxvQkFBQTtRQUVBLFNBQUFHLHVCQUFBWTtZQUFzQyxPQUFBQSxXQUFBQyxhQUFBRDtnQkFBdUNFLFNBQUFGOzs7UUFFN0UsU0FBQWlLLFNBQUF3YSxhQUFBelQsU0FBQXVPO1lBQ0EsU0FBQTVULE9BQUFDLFVBQUE5SixRQUFBK0osT0FBQUMsTUFBQUgsT0FBQSxJQUFBQSxPQUFBLFFBQUFJLE9BQUEsR0FBb0ZBLE9BQUFKLE1BQWFJLFFBQUE7Z0JBQ2pHRixLQUFBRSxPQUFBLEtBQUFILFVBQUFHOztZQUdBLElBQUFrSSxjQUFBLEdBQ0E1SixlQUFBO1lBRUEsSUFBQXFhO2dCQUF3QnhSLE1BQUE7Z0JBQUExUixRQUFBLEdBQUFzSixJQUFBaVAsZUFBQS9JLFNBQUFwRyxTQUFBUixRQUFBNlosUUFBQTs7WUFDeEIsSUFBQXBELFFBQUEsU0FBQUE7Z0JBQ0E7b0JBQVkzTixNQUFBO29CQUFBMVIsUUFBQSxHQUFBc0osSUFBQWdHLE1BQUF6Rzs7O1lBRVosSUFBQXlXLFFBQUEsU0FBQUEsTUFBQUM7Z0JBQ0E7b0JBQVk3TixNQUFBO29CQUFBMVIsT0FBQXNKLElBQUEyTyxLQUFBbE4sTUFBQWhILGFBQUFnYSxTQUFBdkUsT0FBQW5QLFFBQUFrVjs7O1lBRVosSUFBQTREO2dCQUFnQnpSLE1BQUE7Z0JBQUExUixRQUFBLEdBQUFzSixJQUFBaEksTUFBQU4sT0FBQXdILE9BQUF5YTs7WUFFaEIsSUFBQXpELFlBQUEsU0FBQUEsVUFBQUQ7Z0JBQ0EsT0FBQTlNLFNBQUE4TTs7WUFFQSxJQUFBNkQsYUFBQSxTQUFBQSxXQUFBMVQ7Z0JBQ0EsT0FBQTdHLFVBQUE2Rzs7WUFHQSxXQUFBMFAsY0FBQTFnQjtnQkFDQStnQixJQUFBLFNBQUFBO29CQUNBLGVBQUF5RCxnQkFBQUU7O2dCQUVBMUQsSUFBQSxTQUFBQTtvQkFDQSxlQUFBTCxTQUFBRzs7Z0JBRUF1RCxJQUFBLFNBQUFBO29CQUNBLE9BQUF0USxXQUFBdEosU0FBQUosUUFBQW9XLGFBQUFRLFdBQUEsTUFBQUwsTUFBQTdNOztnQkFFQTRRLElBQUEsU0FBQUE7b0JBQ0EsZUFBQUY7O2VBRUcsd0JBQUFoRSxhQUFBUyxVQUFBcFEsV0FBQSxPQUFBdU8sT0FBQTNSLE9BQUE7OztJakJpbUZHa1gsS0FDQSxTQUFVL2xCLFFBQVFDLFNBQVNDO1NrQjFwRmpDLFNBQUFtTTtZQUFBO1lBRUFwTSxRQUFBaUIsYUFBQTtZQUNBakIsUUFBQWtCLFVBQUE2a0I7WUFFQSxJQUFBdmlCLFNBQUF2RCxvQkFBQTtZQUVBLElBQUEwTCxXQUFBMUwsb0JBQUE7WUFFQSxJQUFBd0wsV0FBQXhMLG9CQUFBO1lBRUEsU0FBQStsQix5QkFBQWhsQixLQUFBeWI7Z0JBQThDLElBQUE5WjtnQkFBaUIsU0FBQUUsS0FBQTdCLEtBQUE7b0JBQXFCLElBQUF5YixLQUFBelMsUUFBQW5ILE1BQUE7b0JBQW9DLEtBQUFQLE9BQUFpQixVQUFBTSxlQUFBQyxLQUFBOUMsS0FBQTZCLElBQUE7b0JBQTZERixPQUFBRSxLQUFBN0IsSUFBQTZCOztnQkFBc0IsT0FBQUY7O1lBRTNNLFNBQUFvakI7Z0JBQ0EsSUFBQWxoQixPQUFBK0gsVUFBQTlKLFNBQUEsS0FBQThKLFVBQUEsT0FBQXJHLFlBQUFxRyxVQUFBO2dCQUVBLElBQUFxWixlQUFBcGhCLEtBQUE4SSxTQUNBQSxVQUFBc1ksaUJBQUExZixpQkFBK0MwZixjQUMvQzdOLFVBQUE0Tix5QkFBQW5oQixRQUFBO2dCQUVBLElBQUErSSxjQUFBd0ssUUFBQXhLLGFBQ0FDLFNBQUF1SyxRQUFBdkssUUFDQUMsVUFBQXNLLFFBQUF0SztnQkFHQSxJQUFBdEssT0FBQXlKLEdBQUFLLEtBQUE4SyxVQUFBO29CQUNBLElBQUFoTSxRQUFBYyxJQUFBQyxhQUFBO3dCQUNBLFVBQUEzRyxNQUFBOzJCQUNLO3dCQUNMLFVBQUFBLE1BQUE7OztnQkFJQSxJQUFBcUgsV0FBQXJLLE9BQUF5SixHQUFBSyxLQUFBTyxTQUFBO29CQUNBLFVBQUFySCxNQUFBOztnQkFHQSxJQUFBNEYsUUFBQWMsSUFBQUMsYUFBQSxpQkFBQWlMLFFBQUE4TixTQUFBO29CQUNBLFVBQUExZixNQUFBOztnQkFHQSxJQUFBc0gsWUFBQXRLLE9BQUF5SixHQUFBSyxLQUFBUSxVQUFBO29CQUNBLFVBQUF0SCxNQUFBOztnQkFHQSxJQUFBNFIsUUFBQStLLFlBQUEzZixPQUFBeUosR0FBQUssS0FBQThLLFFBQUErSyxVQUFBO29CQUNBLFVBQUEzYyxNQUFBOztnQkFHQSxTQUFBckYsZUFBQW1FO29CQUNBLElBQUFvSSxXQUFBcEksTUFBQW9JLFVBQ0F6RSxXQUFBM0QsTUFBQTJEO29CQUVBLElBQUFrZCxlQUFBLEdBQUF4YSxTQUFBd1g7b0JBQ0FnRCxZQUFBM0MsUUFBQXBMLFFBQUErSyxXQUFBM2YsT0FBQTZNLE9BQUE4VixZQUFBM0M7b0JBRUFyaUIsZUFBQVMsTUFBQTZKLFNBQUFELFFBQUFsRSxLQUFBO3dCQUNBcUc7d0JBQ0FGLFdBQUEwWSxZQUFBMVk7d0JBQ0F4RTt3QkFDQXlFO3dCQUNBRTt3QkFDQUM7d0JBQ0FDOztvQkFHQSxnQkFBQXVEO3dCQUNBLGdCQUFBNEQ7NEJBQ0EsSUFBQXJILDJCQUFBVSxrQkFBQTtnQ0FDQVYsWUFBQVUsaUJBQUEyRzs7NEJBRUEsSUFBQXpCLFNBQUFuQyxLQUFBNEQ7NEJBQ0FrUixZQUFBM0MsS0FBQXZPOzRCQUNBLE9BQUF6Qjs7OztnQkFLQXJTLGVBQUFTLE1BQUE7b0JBQ0EsVUFBQTRFLE1BQUE7O2dCQUdBckYsZUFBQW9hLGFBQUEsU0FBQTNZO3FCQUNBLEdBQUFZLE9BQUE2SixPQUFBekssT0FBQVksT0FBQXlKLEdBQUFzRCxTQUFBLEdBQUEvTSxPQUFBdVIseUJBQUEsa0JBQUFuUztvQkFDQVksT0FBQStNLE9BQUF4QixPQUFBcEIsU0FBQS9LOztnQkFHQSxPQUFBekI7O1dsQjhwRjhCMkMsS0FBSzlELFNBQVNDLG9CQUFvQjs7SUFJMURtbUIsS0FDQSxTQUFVcm1CLFFBQVFDLFNBQVNDO1FtQjF2RmpDO1FBRUFELFFBQUFpQixhQUFBO1FBRUEsSUFBQTZLLE1BQUE3TCxvQkFBQTtRQUVBcUMsT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQWdHOzs7UUFHQXhQLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFJLElBQUFvUzs7O1FBR0E1YixPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBSSxJQUFBaUc7OztRQUdBelAsT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQXFPOzs7UUFHQTdYLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFJLElBQUFzTzs7O1FBR0E5WCxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBSSxJQUFBaEk7OztRQUdBeEIsT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQXlCOzs7UUFHQWpMLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFJLElBQUF5Tzs7O1FBR0FqWSxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBSSxJQUFBMk87OztRQUdBblksT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQXFTOzs7UUFHQTdiLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFJLElBQUE0Tzs7O1FBR0FwWSxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBSSxJQUFBNkw7OztRQUdBclYsT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQStPOzs7UUFHQXZZLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFJLElBQUFpUDs7O1FBR0F6WSxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBSSxJQUFBcVA7OztRQUdBN1ksT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQW1QOzs7UUFHQTNZLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFJLElBQUF1UDs7O1FBR0EvWSxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBSSxJQUFBeVA7OztRQUdBalosT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQVg7OztRQUdBN0ksT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQVo7OztRQUdBNUksT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQWI7Ozs7SW5Ca3dGTW9iLEtBQ0EsU0FBVXRtQixRQUFRQyxTQUFTQztRb0JwNEZqQztRQUVBRCxRQUFBaUIsYUFBQTtRQUVBLElBQUF1QyxTQUFBdkQsb0JBQUE7UUFFQXFDLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFsSSxPQUFBb007OztRQUdBdE4sT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQWxJLE9BQUF1TTs7O1FBR0F6TixPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBbEksT0FBQTBLOzs7UUFHQTVMLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFsSSxPQUFBeUo7OztRQUdBM0ssT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQWxJLE9BQUE2TDs7O1FBR0EvTSxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBbEksT0FBQThMOzs7UUFHQWhOLE9BQUFDLGVBQUF2QyxTQUFBO1lBQ0FnRCxZQUFBO1lBQ0EwSSxLQUFBLFNBQUFBO2dCQUNBLE9BQUFsSSxPQUFBK0w7OztRQUdBak4sT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQWxJLE9BQUEwUjs7O1FBSUEsSUFBQXBKLE1BQUE3TCxvQkFBQTtRQUVBcUMsT0FBQUMsZUFBQXZDLFNBQUE7WUFDQWdELFlBQUE7WUFDQTBJLEtBQUEsU0FBQUE7Z0JBQ0EsT0FBQUksSUFBQWtPOzs7UUFJQSxJQUFBM04sUUFBQXBNLG9CQUFBO1FBRUFxQyxPQUFBQyxlQUFBdkMsU0FBQTtZQUNBZ0QsWUFBQTtZQUNBMEksS0FBQSxTQUFBQTtnQkFDQSxPQUFBVyxNQUFBMEo7Ozs7SXBCNDRGTXVRLEtBQ0EsU0FBVXZtQixRQUFRQyxTQUFTQztRcUJsOUZqQztRQUVBLElBQUF5QixVQUFBekIsb0JBQUEsS0FBQXlCO1FBRUExQixRQUFBaUIsYUFBQTtRQUNBakIsUUFBQXVtQiw2QkFDQWxsQixXQUFBLGVBQUFBLE9BQUFtbEIsdUNBQ0FubEIsT0FBQW1sQix1Q0FDQTtZQUNBLElBQUE1WixVQUFBOUosV0FBQSxVQUFBeUQ7WUFDQSxXQUFBcUcsVUFBQSx3QkFBQWxMO1lBQ0EsT0FBQUEsUUFBQTZMLE1BQUEsTUFBQVg7O1FBSUE1TSxRQUFBeW1CLDBCQUNBcGxCLFdBQUEsZUFBQUEsT0FBQUMsK0JBQ0FELE9BQUFDLCtCQUNBO1lBQWdCLGdCQUFBNE07Z0JBQXdCLE9BQUFBOzs7O0lyQjA5RmxDd1ksS0FDQSxTQUFVM21CLFFBQVFDLFNBQVNDO1FBRWhDO1FBRUFxQyxPQUFPQyxlQUFldkMsU0FBUztZQUMzQndDLE9BQU87O1FBR1gsSUFBSXNNLFdBQVd4TSxPQUFPeU0sVUFBVSxTQUFVcE07WUFBVSxLQUFLLElBQUlFLElBQUksR0FBR0EsSUFBSStKLFVBQVU5SixRQUFRRCxLQUFLO2dCQUFFLElBQUltTSxTQUFTcEMsVUFBVS9KO2dCQUFJLEtBQUssSUFBSU0sT0FBTzZMLFFBQVE7b0JBQUUsSUFBSTFNLE9BQU9pQixVQUFVTSxlQUFlQyxLQUFLa0wsUUFBUTdMLE1BQU07d0JBQUVSLE9BQU9RLE9BQU82TCxPQUFPN0w7Ozs7WUFBWSxPQUFPUjs7UUFPdlAzQyxRc0JwK0ZleUI7UUFqQmhCLElBQUFnQyxTQUFBeEQsb0JBQUE7UXRCeS9GQyxJc0J6L0ZXeUQsSXRCeS9GSEMsd0JBQXdCRjtRc0J4L0ZqQyxJQUFBa2pCLFFBQUExbUIsb0JBQUE7UXRCNC9GQyxJQUFJMm1CLFNBQVN4bUIsdUJBQXVCdW1CO1FzQjMvRnJDLElBQUFuakIsU0FBQXZELG9CQUFBO1F0QisvRkMsU0FBU0csdUJBQXVCWTtZQUFPLE9BQU9BLE9BQU9BLElBQUlDLGFBQWFEO2dCQUFRRSxTQUFTRjs7O1FBRXZGLFNBQVMyQyx3QkFBd0IzQztZQUFPLElBQUlBLE9BQU9BLElBQUlDLFlBQVk7Z0JBQUUsT0FBT0Q7bUJBQVk7Z0JBQUUsSUFBSTRDO2dCQUFhLElBQUk1QyxPQUFPLE1BQU07b0JBQUUsS0FBSyxJQUFJbUMsT0FBT25DLEtBQUs7d0JBQUUsSUFBSXNCLE9BQU9pQixVQUFVTSxlQUFlQyxLQUFLOUMsS0FBS21DLE1BQU1TLE9BQU9ULE9BQU9uQyxJQUFJbUM7OztnQkFBVVMsT0FBTzFDLFVBQVVGO2dCQUFLLE9BQU80Qzs7O1FBRWxRLFNBQVNpakIsbUJBQW1COWM7WUFBTyxJQUFJK0MsTUFBTWtFLFFBQVFqSCxNQUFNO2dCQUFFLEtBQUssSUFBSWxILElBQUksR0FBR2lrQixPQUFPaGEsTUFBTS9DLElBQUlqSCxTQUFTRCxJQUFJa0gsSUFBSWpILFFBQVFELEtBQUs7b0JBQUVpa0IsS0FBS2prQixLQUFLa0gsSUFBSWxIOztnQkFBTSxPQUFPaWtCO21CQUFhO2dCQUFFLE9BQU9oYSxNQUFNMkYsS0FBSzFJOzs7UXNCaGdHM0wsSUFBSWdkO1lBQ0ExZ0IsV0FBVztZQUNYMEMsVUFBVTtZQUNWckMsT0FBTztZQUNQNEIsUUFBUTtZQUNSdkQsZUFBZTtZQUNmK0I7WUFDQXRCO1lBQ0F3aEIsd0JBQXdCO1lBQ3hCQyxtQkFBbUI7O1FBR2hCLFNBQVN4bEI7WUFBc0MsSUFBOUJxSCxRQUE4QjhELFVBQUE5SixTQUFBLEtBQUE4SixVQUFBLE9BQUFyRyxZQUFBcUcsVUFBQSxLQUF0Qm1hO1lBQXNCLElBQVI5UixTQUFRckksVUFBQTtZQUNsRCxRQUFRcUksT0FBTy9QO2NBQ1gsS0FBS3hCLEVBQUUwRjtnQkFBVztvQkFDZCxJQUFNRCxPQUFPOEwsT0FBTzlMO29CQUNwQixPQUFBMkYsYUFBWWhHLE9BQVVLOzs7Y0FHMUIsS0FBS3pGLEVBQUV3RjtnQkFBYztvQkFDakIsT0FBQTRGLGFBQVloRzt3QkFBT0MsVUFBVTt3QkFBTXJDLE9BQU87Ozs7Y0FHOUMsS0FBS2hELEVBQUU0RztnQkFBaUI7b0JBQUEsSUFBQTRjLGVBQ29CalMsT0FBTzlMLE1BQXZDckMsZUFEWW9nQixhQUNacGdCLGNBQWN0QixnQkFERjBoQixhQUNFMWhCO29CQUN0QixPQUFBc0osYUFDT2hHO3dCQUNIQyxVQUFVO3dCQUNWakM7d0JBRUF0QixlQUFnQkEsaUJBQWlCQSxjQUFjMmhCO3dCQUMvQ3BpQixlQUFnQlMsaUJBQWlCQSxjQUFjVCxpQkFBa0I7Ozs7Y0FJekUsS0FBS3JCLEVBQUU2RztnQkFBaUI7b0JBQ3BCLE9BQUF1RSxhQUNPaEc7d0JBQ0hDLFVBQVU7d0JBQ1ZqQzt3QkFDQXRCO3dCQUNBa0IsT0FBT3VPLE9BQU92Tzs7OztjQUl0QixLQUFLaEQsRUFBRThHO2dCQUFjO29CQUNqQixPQUFBc0UsYUFDT2hHO3dCQUNIQyxVQUFVO3dCQUNWckMsT0FBTzs7OztjQUlmLEtBQUtoRCxFQUFFK0c7Z0JBQWlCO29CQUFBLElBQ1pqRixpQkFBa0J5UCxPQUFPOUwsS0FBekIzRDtvQkFDUixPQUFBc0osYUFDT2hHO3dCQUNIQyxVQUFVO3dCQUVWaEUsZUFBZVMsZUFBY1Q7d0JBQzdCaWlCLHdCQUF3Qjt3QkFDeEJ4aEIsZUFBZUEsZUFBYzJoQjt3QkFDN0JGLG1CQUFtQjs7OztjQUkzQixLQUFLdmpCLEVBQUVnSDtnQkFBaUI7b0JBQ3BCLElBQU0wYyx5QkFDQ3RlO3dCQUNIQyxVQUFVO3dCQUNWaWUsd0JBQXdCO3dCQUN4QkMsbUJBQW1CO3dCQUNuQnZnQixPQUFPdU8sT0FBT3ZPOztvQkFHbEIsSUFBSW9DLE1BQU1rZSwyQkFBMkIsTUFBTTt3QkFDdkNJLFVBQVVyaUIsZ0JBQWdCK0QsTUFBTWtlOztvQkFFcEMsSUFBSWxlLE1BQU1tZSxzQkFBc0IsTUFBTTt3QkFDbENHLFVBQVU1aEIsZ0JBQWdCc0QsTUFBTW1lOztvQkFFcEMsT0FBT0c7OztjQUdYLEtBQUsxakIsRUFBRTRGO2dCQUEwQjtvQkFBQSxJQUNyQkQsWUFBYzRMLE9BQU85TCxLQUFyQkU7b0JBQ1IsSUFBTTRkLG9CQUFvQm5lLE1BQU10RCxvQkFBTndXLE9BQUE2SyxtQkFBMkIvZCxNQUFNdEQ7b0JBQzNELElBQU1BLGtCQUFnQnNELE1BQU10RCxvQkFBTndXLE9BQUE2SyxtQkFBMkIvZCxNQUFNdEQ7cUJBRXZELEdBQUFoQyxPQUFBa0MsU0FBUTJELFdBQVc3RCxvQkFDYixHQUFBb2hCLE9BQUExbEIsU0FBS3NFLGlCQUFlNkQsYUFDcEI3RCxnQkFBY3NOLEtBQUt6SjtvQkFDekIsT0FBQXlGLGFBQVloRzt3QkFBT21lO3dCQUFtQnpoQjs7OztjQUcxQyxLQUFLOUIsRUFBRTZGO2dCQUFzQjtvQkFBQSxJQUNqQnhFLGdCQUFrQmtRLE9BQU85TCxLQUF6QnBFO29CQUNSLE9BQUErSixhQUFZaEc7d0JBQU8vRDt3QkFBZWlpQix3QkFBd0JsZSxNQUFNL0Q7Ozs7Y0FHcEUsS0FBS3JCLEVBQUU4RjtnQkFBNEI7b0JBQy9CLElBQU15ZCxxQkFBb0JuZSxNQUFNdEQsb0JBQU53VyxPQUFBNkssbUJBQTJCL2QsTUFBTXREO29CQUN2RCxJQUFBNmhCLHVCQUFBLEdBQUFDLFNBQUF4WSxhQUNxQmhHLFFBQW5CekMsWUFERmloQixPQUNFamhCO29CQUNOLElBQUlBLFdBQVc7d0JBQ1hiLGtCQUFnQnNELE1BQU1oQyxhQUFhQyxJQUFJLFNBQUF4Qjs0QkFBQSxPQUFXQSxRQUFRTjs7MkJBQ3ZEO3dCQUNITzs7b0JBRUphLGFBQWFBO29CQUNiLE9BQUF5SSxhQUFZaEc7d0JBQU96Qzt3QkFBVzRnQjt3QkFBbUJ6aEI7Ozs7Y0FHckQ7Z0JBQVM7b0JBQ0wsT0FBT3NEOzs7OztJdEIyaEdieWUsS0FDQSxTQUFVeG5CLFFBQVFDLFNBQVNDO1F1QjFwR2pDLElBQUF1bkIsV0FBQXZuQixvQkFBQSxNQUNBd25CLFVBQUF4bkIsb0JBQUE7UUF5QkEsSUFBQXluQixPQUFBRixTQUFBQztRQUVBMW5CLE9BQUFDLFVBQUEwbkI7O0l2QmlxR01DLEtBQ0EsU0FBVTVuQixRQUFRQyxTQUFTQztRd0I5ckdqQyxJQUFBMm5CLFdBQUEzbkIsb0JBQUEsTUFDQTRuQixXQUFBNW5CLG9CQUFBLE1BQ0E2bkIsY0FBQTduQixvQkFBQTtRQVVBLFNBQUF1bkIsU0FBQWxhLE1BQUF5YTtZQUNBLE9BQUFELFlBQUFELFNBQUF2YSxNQUFBeWEsT0FBQUgsV0FBQXRhLE9BQUE7O1FBR0F2TixPQUFBQyxVQUFBd25COztJeEJxc0dNUSxLQUNBLFNBQVVqb0IsUUFBUUMsU0FBU0M7UXlCdHRHakMsSUFBQXNOLFFBQUF0TixvQkFBQTtRQUdBLElBQUFnb0IsWUFBQUMsS0FBQUM7UUFXQSxTQUFBTixTQUFBdmEsTUFBQXlhLE9BQUFLO1lBQ0FMLFFBQUFFLFVBQUFGLFVBQUF4aEIsWUFBQStHLEtBQUF4SyxTQUFBLElBQUFpbEIsT0FBQTtZQUNBO2dCQUNBLElBQUFsYixPQUFBRCxXQUNBMkYsU0FBQSxHQUNBelAsU0FBQW1sQixVQUFBcGIsS0FBQS9KLFNBQUFpbEIsT0FBQSxJQUNBaFgsUUFBQWpFLE1BQUFoSztnQkFFQSxTQUFBeVAsUUFBQXpQLFFBQUE7b0JBQ0FpTyxNQUFBd0IsU0FBQTFGLEtBQUFrYixRQUFBeFY7O2dCQUVBQSxTQUFBO2dCQUNBLElBQUE4VixZQUFBdmIsTUFBQWliLFFBQUE7Z0JBQ0EsU0FBQXhWLFFBQUF3VixPQUFBO29CQUNBTSxVQUFBOVYsU0FBQTFGLEtBQUEwRjs7Z0JBRUE4VixVQUFBTixTQUFBSyxVQUFBclg7Z0JBQ0EsT0FBQXhELE1BQUFELE1BQUFwRyxNQUFBbWhCOzs7UUFJQXRvQixPQUFBQyxVQUFBNm5COztJekI2dEdNUyxLQUNBLFNBQVV2b0IsUUFBUUM7UTBCdnZHeEIsU0FBQXVOLE1BQUFELE1BQUFpYixTQUFBMWI7WUFDQSxRQUFBQSxLQUFBL0o7Y0FDQTtnQkFBQSxPQUFBd0ssS0FBQXhKLEtBQUF5a0I7O2NBQ0E7Z0JBQUEsT0FBQWpiLEtBQUF4SixLQUFBeWtCLFNBQUExYixLQUFBOztjQUNBO2dCQUFBLE9BQUFTLEtBQUF4SixLQUFBeWtCLFNBQUExYixLQUFBLElBQUFBLEtBQUE7O2NBQ0E7Z0JBQUEsT0FBQVMsS0FBQXhKLEtBQUF5a0IsU0FBQTFiLEtBQUEsSUFBQUEsS0FBQSxJQUFBQSxLQUFBOztZQUVBLE9BQUFTLEtBQUFDLE1BQUFnYixTQUFBMWI7O1FBR0E5TSxPQUFBQyxVQUFBdU47O0kxQnd3R01pYixLQUNBLFNBQVV6b0IsUUFBUUMsU0FBU0M7UTJCN3hHakMsSUFBQXdvQixrQkFBQXhvQixvQkFBQSxNQUNBeW9CLFdBQUF6b0Isb0JBQUE7UUFVQSxJQUFBNm5CLGNBQUFZLFNBQUFEO1FBRUExb0IsT0FBQUMsVUFBQThuQjs7STNCb3lHTWEsS0FDQSxTQUFVNW9CLFFBQVFDLFNBQVNDO1E0Qmx6R2pDLElBQUEyb0IsV0FBQTNvQixvQkFBQSxNQUNBc0MsaUJBQUF0QyxvQkFBQSxNQUNBMm5CLFdBQUEzbkIsb0JBQUE7UUFVQSxJQUFBd29CLG1CQUFBbG1CLGlCQUFBcWxCLFdBQUEsU0FBQXRhLE1BQUF3RDtZQUNBLE9BQUF2TyxlQUFBK0ssTUFBQTtnQkFDQXJLLGNBQUE7Z0JBQ0FELFlBQUE7Z0JBQ0FSLE9BQUFvbUIsU0FBQTlYO2dCQUNBNU4sVUFBQTs7O1FBSUFuRCxPQUFBQyxVQUFBeW9COztJNUJ5ekdNSSxLQUNBLFNBQVU5b0IsUUFBUUM7UTZCNXpHeEIsU0FBQTRvQixTQUFBcG1CO1lBQ0E7Z0JBQ0EsT0FBQUE7OztRQUlBekMsT0FBQUMsVUFBQTRvQjs7STdCczFHTUUsS0FDQSxTQUFVL29CLFFBQVFDO1E4Qi8yR3hCLElBQUErb0IsWUFBQSxLQUNBQyxXQUFBO1FBR0EsSUFBQUMsWUFBQUMsS0FBQUM7UUFXQSxTQUFBVCxTQUFBcGI7WUFDQSxJQUFBOGIsUUFBQSxHQUNBQyxhQUFBO1lBRUE7Z0JBQ0EsSUFBQUMsUUFBQUwsYUFDQU0sWUFBQVAsWUFBQU0sUUFBQUQ7Z0JBRUFBLGFBQUFDO2dCQUNBLElBQUFDLFlBQUE7b0JBQ0EsTUFBQUgsU0FBQUwsV0FBQTt3QkFDQSxPQUFBbmMsVUFBQTs7dUJBRUs7b0JBQ0x3YyxRQUFBOztnQkFFQSxPQUFBOWIsS0FBQUMsTUFBQWhILFdBQUFxRzs7O1FBSUE3TSxPQUFBQyxVQUFBMG9COztJOUJ1M0dNYyxLQUNBLFNBQVV6cEIsUUFBUUMsU0FBU0M7UStCNTVHakMsSUFBQXdwQixjQUFBeHBCLG9CQUFBO1FBc0JBLFNBQUF3bkIsUUFBQTFXLE9BQUEyWTtZQUNBLE9BQUEzWSxlQUFBak8sVUFBQTRtQixpQkFBQTVtQixTQUNBMm1CLFlBQUExWSxPQUFBMlksVUFDQTNZOztRQUdBaFIsT0FBQUMsVUFBQXluQjs7SS9CbTZHTWtDLEtBQ0EsU0FBVTVwQixRQUFRQyxTQUFTQztRZ0NoOEdqQyxJQUFBMnBCLFdBQUEzcEIsb0JBQUEsTUFDQTRwQixjQUFBNXBCLG9CQUFBLE1BQ0E2cEIsa0JBQUE3cEIsb0JBQUEsTUFDQThwQixZQUFBOXBCLG9CQUFBLE1BQ0ErcEIsWUFBQS9wQixvQkFBQTtRQUdBLElBQUFncUIsYUFBQW5kLE1BQUF2SjtRQUdBLElBQUFpUCxTQUFBeVgsV0FBQXpYO1FBYUEsU0FBQWlYLFlBQUExWSxPQUFBMlksUUFBQVEsVUFBQUM7WUFDQSxJQUFBbmdCLFVBQUFtZ0IsYUFBQUwsa0JBQUFELGFBQ0F0WCxTQUFBLEdBQ0F6UCxTQUFBNG1CLE9BQUE1bUIsUUFDQXNuQixPQUFBclo7WUFFQSxJQUFBQSxVQUFBMlksUUFBQTtnQkFDQUEsU0FBQU0sVUFBQU47O1lBRUEsSUFBQVEsVUFBQTtnQkFDQUUsT0FBQVIsU0FBQTdZLE9BQUFnWixVQUFBRzs7WUFFQSxTQUFBM1gsUUFBQXpQLFFBQUE7Z0JBQ0EsSUFBQXVuQixZQUFBLEdBQ0E3bkIsUUFBQWtuQixPQUFBblgsUUFDQStYLFdBQUFKLG9CQUFBMW5CO2dCQUVBLFFBQUE2bkIsWUFBQXJnQixRQUFBb2dCLE1BQUFFLFVBQUFELFdBQUFGLGdCQUFBO29CQUNBLElBQUFDLFNBQUFyWixPQUFBO3dCQUNBeUIsT0FBQTFPLEtBQUFzbUIsTUFBQUMsV0FBQTs7b0JBRUE3WCxPQUFBMU8sS0FBQWlOLE9BQUFzWixXQUFBOzs7WUFHQSxPQUFBdFo7O1FBR0FoUixPQUFBQyxVQUFBeXBCOztJaEN1OEdNYyxLQUNBLFNBQVV4cUIsUUFBUUMsU0FBU0M7UWlDMS9HakMsSUFBQXVxQixnQkFBQXZxQixvQkFBQSxNQUNBd3FCLFlBQUF4cUIsb0JBQUEsTUFDQXlxQixnQkFBQXpxQixvQkFBQTtRQVdBLFNBQUE0cEIsWUFBQTlZLE9BQUF2TyxPQUFBNm5CO1lBQ0EsT0FBQTduQixrQkFDQWtvQixjQUFBM1osT0FBQXZPLE9BQUE2bkIsYUFDQUcsY0FBQXpaLE9BQUEwWixXQUFBSjs7UUFHQXRxQixPQUFBQyxVQUFBNnBCOztJakNpZ0hNYyxLQUNBLFNBQVU1cUIsUUFBUUM7UWtDMWdIeEIsU0FBQXdxQixjQUFBelosT0FBQVQsV0FBQStaLFdBQUFPO1lBQ0EsSUFBQTluQixTQUFBaU8sTUFBQWpPLFFBQ0F5UCxRQUFBOFgsYUFBQU8sWUFBQTtZQUVBLE9BQUFBLFlBQUFyWSxvQkFBQXpQLFFBQUE7Z0JBQ0EsSUFBQXdOLFVBQUFTLE1BQUF3QixlQUFBeEIsUUFBQTtvQkFDQSxPQUFBd0I7OztZQUdBOztRQUdBeFMsT0FBQUMsVUFBQXdxQjs7SWxDNGhITUssS0FDQSxTQUFVOXFCLFFBQVFDO1FtQzdpSHhCLFNBQUF5cUIsVUFBQWpvQjtZQUNBLE9BQUFBOztRQUdBekMsT0FBQUMsVUFBQXlxQjs7SW5DMmpITUssS0FDQSxTQUFVL3FCLFFBQVFDO1FvQzdqSHhCLFNBQUEwcUIsY0FBQTNaLE9BQUF2TyxPQUFBNm5CO1lBQ0EsSUFBQTlYLFFBQUE4WCxZQUFBLEdBQ0F2bkIsU0FBQWlPLE1BQUFqTztZQUVBLFNBQUF5UCxRQUFBelAsUUFBQTtnQkFDQSxJQUFBaU8sTUFBQXdCLFdBQUEvUCxPQUFBO29CQUNBLE9BQUErUDs7O1lBR0E7O1FBR0F4UyxPQUFBQyxVQUFBMHFCOztJcEM4a0hNSyxLQUNBLFNBQVVockIsUUFBUUM7UXFDM2xIeEIsU0FBQThwQixnQkFBQS9ZLE9BQUF2TyxPQUFBNm5CLFdBQUFGO1lBQ0EsSUFBQTVYLFFBQUE4WCxZQUFBLEdBQ0F2bkIsU0FBQWlPLE1BQUFqTztZQUVBLFNBQUF5UCxRQUFBelAsUUFBQTtnQkFDQSxJQUFBcW5CLFdBQUFwWixNQUFBd0IsUUFBQS9QLFFBQUE7b0JBQ0EsT0FBQStQOzs7WUFHQTs7UUFHQXhTLE9BQUFDLFVBQUE4cEI7O0lyQzRtSE1rQixLQUNBLFNBQVVqckIsUUFBUUM7UXNDM25IeEIsU0FBQWdxQixVQUFBaGIsUUFBQStCO1lBQ0EsSUFBQXdCLFNBQUEsR0FDQXpQLFNBQUFrTSxPQUFBbE07WUFFQWlPLGtCQUFBakUsTUFBQWhLO1lBQ0EsU0FBQXlQLFFBQUF6UCxRQUFBO2dCQUNBaU8sTUFBQXdCLFNBQUF2RCxPQUFBdUQ7O1lBRUEsT0FBQXhCOztRQUdBaFIsT0FBQUMsVUFBQWdxQjs7SXRDMG9ITWlCLEtBQ0EsU0FBVWxyQixRQUFRQyxTQUFTQztRQUVoQztRQUVBcUMsT0FBT0MsZUFBZXZDLFNBQVM7WUFDM0J3QyxPQUFPOztRQUVYeEMsUUFBUWtyQixrQkFBa0JsckIsUUFBUW1yQixrQkFBa0JuckIsUUFBUW9yQixZQUFZN2tCO1FBQ3hFdkcsUXVDL29IZXFyQjtRdkNncEhmcnJCLFF1Q3hvSGVzckI7UXZDeW9IZnRyQixRdUN4bkhnQnVyQjtRdkN5bkhoQnZyQixRdUMzbUhnQndyQjtRdkM0bUhoQnhyQixRdUM3bEhnQjZCO1FBcEVqQjVCLG9CQUFBO1FBRUEsSUFBQWdNLFdBQUFoTSxvQkFBQTtRQUNBLElBQUF3ckIsU0FBQXhyQixvQkFBQTtRdkNzcUhDLElBQUl5ckIsVUFBVXRyQix1QkFBdUJxckI7UXVDcHFIdEMsSUFBQWhvQixTQUFBeEQsb0JBQUE7UXZDd3FIQyxJdUN4cUhXeUQsSXZDd3FISEMsd0JBQXdCRjtRdUN2cUhqQyxJQUFBRCxTQUFBdkQsb0JBQUE7UXZDMnFIQyxTQUFTMEQsd0JBQXdCM0M7WUFBTyxJQUFJQSxPQUFPQSxJQUFJQyxZQUFZO2dCQUFFLE9BQU9EO21CQUFZO2dCQUFFLElBQUk0QztnQkFBYSxJQUFJNUMsT0FBTyxNQUFNO29CQUFFLEtBQUssSUFBSW1DLE9BQU9uQyxLQUFLO3dCQUFFLElBQUlzQixPQUFPaUIsVUFBVU0sZUFBZUMsS0FBSzlDLEtBQUttQyxNQUFNUyxPQUFPVCxPQUFPbkMsSUFBSW1DOzs7Z0JBQVVTLE9BQU8xQyxVQUFVRjtnQkFBSyxPQUFPNEM7OztRQUVsUSxTQUFTeEQsdUJBQXVCWTtZQUFPLE9BQU9BLE9BQU9BLElBQUlDLGFBQWFEO2dCQUFRRSxTQUFTRjs7O1FBRXZGLElBQUkycUIsVUFBdUJDLG1CQUFtQkMsS3VDOW9IOUJOLFV2QytvSFpPLFdBQXdCRixtQkFBbUJDLEt1Q2pvSC9CTCxVdkNrb0haTyxXQUF3QkgsbUJBQW1CQyxLdUNubkgvQmhxQjtRQTVEakIsU0FBU21xQixVQUFVQztZQUNmLFFBQU8sR0FBQVAsUUFBQXhxQixTQUFNK3FCLFFBQ1I5YSxLQUFLLFNBQUE2TDtnQkFBQTtvQkFBZUE7O2VBQ3BCa1AsTUFBTSxTQUFBeGxCO2dCQUFBO29CQUFZQTs7OztRQUdwQixTQUFTMmtCLFVBQVUvaUI7WUFDdEIsSUFBTTJqQjtnQkFDRkUsUUFBUTtnQkFDUkMsd0NBQXNDOWpCLFNBQXRDOztZQUVKLE9BQU8wakIsVUFBVUM7O1FBR2QsU0FBU1gsUUFBUWhqQixRQUFRdkQsZUFBZVM7WUFDM0MsSUFBTXltQjtnQkFDRkUsUUFBUTtnQkFDUkU7b0JBQ0lDLGdCQUFlLEdBQUE5b0IsT0FBQStvQixXQUFVOztnQkFFN0JILHdDQUFzQzlqQixTQUF0QztnQkFDQWE7b0JBQ0kzRDt3QkFDSVQ7d0JBQ0FvaUIsVUFBVTNoQjs7OztZQUl0QixPQUFPd21CLFVBQVVDOztRQUdkLFNBQVVWLFFBQVF0VztZQUFsQixJQUFBM00sUUFBQXpELE1BQUFtWSxVQUFBdFc7WUFBQSxPQUFBa2xCLG1CQUFBWSxLQUFBLFNBQUFDLFNBQUFDO2dCQUFBO29CQUFBLFFBQUFBLFNBQUFDLE9BQUFELFNBQUFyYjtzQkFBQTt3QkFDSy9JLFNBQVcyTSxPQUFPOUwsS0FBbEJiO3dCQURMb2tCLFNBQUFyYixPQUFBO3dCQUFBLFFBRStCLEdBQUFwRixTQUFBbkksTUFBS3VuQixXQUFXL2lCOztzQkFGL0M7d0JBQUF6RCxPQUFBNm5CLFNBQUFFO3dCQUVLNVAsV0FGTG5ZLEtBRUttWTt3QkFBVXRXLFFBRmY3QixLQUVlNkI7d0JBRmYsS0FHQ3NXLFVBSEQ7NEJBQUEwUCxTQUFBcmIsT0FBQTs0QkFBQTs7d0JBQUFxYixTQUFBcmIsT0FBQTt3QkFBQSxRQUlPLEdBQUFwRixTQUFBOEY7NEJBQU03TSxNQUFNeEIsRUFBRTRHOzRCQUFpQm5CLE1BQU02VCxTQUFTN1Q7OztzQkFKckQ7d0JBQUF1akIsU0FBQXJiLE9BQUE7d0JBQUE7O3NCQUFBO3dCQUFBcWIsU0FBQXJiLE9BQUE7d0JBQUEsUUFNTyxHQUFBcEYsU0FBQThGOzRCQUFNN00sTUFBTXhCLEVBQUU2Rzs0QkFBaUI3RDs7O3NCQU50QztzQkFBQTt3QkFBQSxPQUFBZ21CLFNBQUFHOzs7ZUFBQWxCLFNBQUF6a0I7O1FBVUEsSUFBTWtrQixnQ0FBWSxTQUFaQSxVQUFZdGlCO1lBQUEsT0FBU0EsTUFBTVI7O1FBQ2pDLElBQU02aUIsNENBQWtCLFNBQWxCQSxnQkFBa0JyaUI7WUFBQSxPQUFTQSxNQUFNdEQ7O1FBQ3ZDLElBQU0wbEIsNENBQWtCLFNBQWxCQSxnQkFBa0JwaUI7WUFBQSxPQUFTQSxNQUFNL0Q7O1FBRXZDLFNBQVV5bUIsUUFBUXZXO1lBQWxCLElBQUEzTSxRQUFBdkQsZUFBQVMsZUFBQUYsT0FBQTBYLFVBQUF0VztZQUFBLE9BQUFrbEIsbUJBQUFZLEtBQUEsU0FBQU0sU0FBQUM7Z0JBQUE7b0JBQUEsUUFBQUEsVUFBQUosT0FBQUksVUFBQTFiO3NCQUFBO3dCQUFBMGIsVUFBQTFiLE9BQUE7d0JBQUEsUUFDRyxHQUFBcEYsU0FBQThGOzRCQUFNN00sTUFBTXhCLEVBQUU4Rzs7O3NCQURqQjt3QkFBQXVpQixVQUFBMWIsT0FBQTt3QkFBQSxRQUVrQixHQUFBcEYsU0FBQTRPLFFBQU91UTs7c0JBRnpCO3dCQUVHOWlCLFNBRkh5a0IsVUFBQUg7d0JBQUFHLFVBQUExYixPQUFBO3dCQUFBLFFBR3lCLEdBQUFwRixTQUFBNE8sUUFBT3FROztzQkFIaEM7d0JBR0dubUIsZ0JBSEhnb0IsVUFBQUg7d0JBQUFHLFVBQUExYixPQUFBO3dCQUFBLFFBSXlCLEdBQUFwRixTQUFBNE8sUUFBT3NROztzQkFKaEM7d0JBSUczbEIsZ0JBSkh1bkIsVUFBQUg7d0JBQUFHLFVBQUExYixPQUFBO3dCQUFBLFFBTStCLEdBQUFwRixTQUFBbkksTUFBS3duQixTQUFTaGpCLFFBQVF2RCxlQUFlUzs7c0JBTnBFO3dCQUFBRixRQUFBeW5CLFVBQUFIO3dCQU1LNVAsV0FOTDFYLE1BTUswWDt3QkFBVXRXLFFBTmZwQixNQU1lb0I7d0JBTmYsS0FPQ3NXLFVBUEQ7NEJBQUErUCxVQUFBMWIsT0FBQTs0QkFBQTs7d0JBQUEwYixVQUFBMWIsT0FBQTt3QkFBQSxRQVFPLEdBQUFwRixTQUFBOEY7NEJBQU03TSxNQUFNeEIsRUFBRStHOzRCQUFpQnRCLE1BQU02VCxTQUFTN1Q7OztzQkFSckQ7d0JBQUE0akIsVUFBQTFiLE9BQUE7d0JBQUE7O3NCQUFBO3dCQUFBMGIsVUFBQTFiLE9BQUE7d0JBQUEsUUFVTyxHQUFBcEYsU0FBQThGOzRCQUFNN00sTUFBTXhCLEVBQUVnSDs0QkFBaUJoRTs7O3NCQVZ0QztzQkFBQTt3QkFBQSxPQUFBcW1CLFVBQUFGOzs7ZUFBQWYsVUFBQTVrQjs7UUFlQSxTQUFVckY7WUFBVixPQUFBK3BCLG1CQUFBWSxLQUFBLFNBQUFRLGFBQUFDO2dCQUFBO29CQUFBLFFBQUFBLFVBQUFOLE9BQUFNLFVBQUE1YjtzQkFBQTt3QkFBQTRiLFVBQUE1YixPQUFBO3dCQUFBLFFBQ0csR0FBQXBGLFNBQUFmLFlBQVd4SCxFQUFFd0YsY0FBY3FpQjs7c0JBRDlCO3dCQUFBMEIsVUFBQTViLE9BQUE7d0JBQUEsUUFFRyxHQUFBcEYsU0FBQWYsWUFBV3hILEVBQUU0RiwwQkFBMEJraUI7O3NCQUYxQzt3QkFBQXlCLFVBQUE1YixPQUFBO3dCQUFBLFFBR0csR0FBQXBGLFNBQUFmLFlBQVd4SCxFQUFFOEYsNEJBQTRCZ2lCOztzQkFINUM7d0JBQUF5QixVQUFBNWIsT0FBQTt3QkFBQSxRQUlHLEdBQUFwRixTQUFBZixZQUFXeEgsRUFBRTZGLHNCQUFzQmlpQjs7c0JBSnRDO3NCQUFBO3dCQUFBLE9BQUF5QixVQUFBSjs7O2VBQUFkLFVBQUE3a0I7OztJdkMweUhEZ21CLEtBQ0EsU0FBVW50QixRQUFRQztTd0M5Mkh4QixTQUFBbXRCO1lBQ0E7WUFFQSxJQUFBQyxLQUFBOXFCLE9BQUFpQjtZQUNBLElBQUE0TCxTQUFBaWUsR0FBQXZwQjtZQUNBLElBQUEwQztZQUNBLElBQUE4bUIsaUJBQUFuZSxXQUFBLGFBQUFBO1lBQ0EsSUFBQW9lLGlCQUFBRCxRQUFBcmdCLFlBQUE7WUFDQSxJQUFBdWdCLHNCQUFBRixRQUFBRyxpQkFBQTtZQUNBLElBQUFDLG9CQUFBSixRQUFBSyxlQUFBO1lBRUEsSUFBQUMsa0JBQUE1dEIsV0FBQTtZQUNBLElBQUE2dEIsVUFBQVQsT0FBQXZCO1lBQ0EsSUFBQWdDLFNBQUE7Z0JBQ0EsSUFBQUQsVUFBQTtvQkFHQTV0QixPQUFBQyxVQUFBNHRCOztnQkFJQTs7WUFLQUEsVUFBQVQsT0FBQXZCLHFCQUFBK0IsV0FBQTV0QixPQUFBQztZQUVBLFNBQUF3c0IsS0FBQXFCLFNBQUFDLFNBQUEzcEIsTUFBQTRwQjtnQkFFQSxJQUFBQyxpQkFBQUYsbUJBQUF2cUIscUJBQUEwcUIsWUFBQUgsVUFBQUc7Z0JBQ0EsSUFBQUMsWUFBQTVyQixPQUFBa0MsT0FBQXdwQixlQUFBenFCO2dCQUNBLElBQUFvSyxVQUFBLElBQUF3Z0IsUUFBQUo7Z0JBSUFHLFVBQUFFLFVBQUFDLGlCQUFBUixTQUFBMXBCLE1BQUF3SjtnQkFFQSxPQUFBdWdCOztZQUVBTixRQUFBcEI7WUFZQSxTQUFBOEIsU0FBQTdaLElBQUF6VCxLQUFBc1U7Z0JBQ0E7b0JBQ0E7d0JBQWNwUSxNQUFBO3dCQUFBb1EsS0FBQWIsR0FBQTNRLEtBQUE5QyxLQUFBc1U7O2tCQUNULE9BQUF0QjtvQkFDTDt3QkFBYzlPLE1BQUE7d0JBQUFvUSxLQUFBdEI7Ozs7WUFJZCxJQUFBdWEseUJBQUE7WUFDQSxJQUFBQyx5QkFBQTtZQUNBLElBQUFDLG9CQUFBO1lBQ0EsSUFBQUMsb0JBQUE7WUFJQSxJQUFBQztZQU1BLFNBQUFWO1lBQ0EsU0FBQVc7WUFDQSxTQUFBQztZQUlBLElBQUFDO1lBQ0FBLGtCQUFBeEIsa0JBQUE7Z0JBQ0EsT0FBQXBtQjs7WUFHQSxJQUFBNm5CLFdBQUF6c0IsT0FBQThFO1lBQ0EsSUFBQTRuQiwwQkFBQUQsOEJBQUFyRjtZQUNBLElBQUFzRiwyQkFDQUEsNEJBQUE1QixNQUNBamUsT0FBQXJMLEtBQUFrckIseUJBQUExQixpQkFBQTtnQkFHQXdCLG9CQUFBRTs7WUFHQSxJQUFBQyxLQUFBSiwyQkFBQXRyQixZQUNBMHFCLFVBQUExcUIsWUFBQWpCLE9BQUFrQyxPQUFBc3FCO1lBQ0FGLGtCQUFBcnJCLFlBQUEwckIsR0FBQXhxQixjQUFBb3FCO1lBQ0FBLDJCQUFBcHFCLGNBQUFtcUI7WUFDQUMsMkJBQUFwQixxQkFDQW1CLGtCQUFBTSxjQUFBO1lBSUEsU0FBQUMsc0JBQUE1ckI7a0JBQ0EsNEJBQUFrUyxRQUFBLFNBQUEwVztvQkFDQTVvQixVQUFBNG9CLFVBQUEsU0FBQTdXO3dCQUNBLE9BQUFwTyxLQUFBa25CLFFBQUFqQyxRQUFBN1c7Ozs7WUFLQXNZLFFBQUF3QixzQkFBQSxTQUFBQztnQkFDQSxJQUFBQyxjQUFBRCxXQUFBLGNBQUFBLE9BQUE1cUI7Z0JBQ0EsT0FBQTZxQixPQUNBQSxTQUFBVixzQkFHQVUsS0FBQUosZUFBQUksS0FBQTFnQixVQUFBLHNCQUNBOztZQUdBZ2YsUUFBQS9CLE9BQUEsU0FBQXdEO2dCQUNBLElBQUEvc0IsT0FBQW9DLGdCQUFBO29CQUNBcEMsT0FBQW9DLGVBQUEycUIsUUFBQVI7dUJBQ0s7b0JBQ0xRLE9BQUExcUIsWUFBQWtxQjtvQkFDQSxNQUFBcEIscUJBQUE0QixTQUFBO3dCQUNBQSxPQUFBNUIscUJBQUE7OztnQkFHQTRCLE9BQUE5ckIsWUFBQWpCLE9BQUFrQyxPQUFBeXFCO2dCQUNBLE9BQUFJOztZQU9BekIsUUFBQTJCLFFBQUEsU0FBQWphO2dCQUNBO29CQUFZa2EsU0FBQWxhOzs7WUFHWixTQUFBbWEsY0FBQXZCO2dCQUNBLFNBQUF3QixPQUFBdkQsUUFBQTdXLEtBQUExQyxTQUFBQztvQkFDQSxJQUFBOGMsU0FBQXJCLFNBQUFKLFVBQUEvQixTQUFBK0IsV0FBQTVZO29CQUNBLElBQUFxYSxPQUFBenFCLFNBQUE7d0JBQ0EyTixPQUFBOGMsT0FBQXJhOzJCQUNPO3dCQUNQLElBQUE5QixTQUFBbWMsT0FBQXJhO3dCQUNBLElBQUE5UyxRQUFBZ1IsT0FBQWhSO3dCQUNBLElBQUFBLGdCQUNBQSxVQUFBLFlBQ0EyTSxPQUFBckwsS0FBQXRCLE9BQUE7NEJBQ0EsT0FBQW1RLFFBQUFDLFFBQUFwUSxNQUFBZ3RCLFNBQUFyZSxLQUFBLFNBQUEzTztnQ0FDQWt0QixPQUFBLFFBQUFsdEIsT0FBQW9RLFNBQUFDOytCQUNXLFNBQUFtQjtnQ0FDWDBiLE9BQUEsU0FBQTFiLEtBQUFwQixTQUFBQzs7O3dCQUlBLE9BQUFGLFFBQUFDLFFBQUFwUSxPQUFBMk8sS0FBQSxTQUFBeWU7NEJBZ0JBcGMsT0FBQWhSLFFBQUFvdEI7NEJBQ0FoZCxRQUFBWTsyQkFDU1g7OztnQkFJVCxJQUFBZ2Q7Z0JBRUEsU0FBQUMsUUFBQTNELFFBQUE3VztvQkFDQSxTQUFBeWE7d0JBQ0EsV0FBQXBkLFFBQUEsU0FBQUMsU0FBQUM7NEJBQ0E2YyxPQUFBdkQsUUFBQTdXLEtBQUExQyxTQUFBQzs7O29CQUlBLE9BQUFnZCxrQkFhQUEsa0NBQUExZSxLQUNBNGUsNEJBR0FBLDhCQUNBQTs7Z0JBS0E3b0IsS0FBQWtuQixVQUFBMEI7O1lBR0FYLHNCQUFBTSxjQUFBbHNCO1lBQ0Frc0IsY0FBQWxzQixVQUFBZ3FCLHVCQUFBO2dCQUNBLE9BQUFybUI7O1lBRUEwbUIsUUFBQTZCO1lBS0E3QixRQUFBb0MsUUFBQSxTQUFBbkMsU0FBQUMsU0FBQTNwQixNQUFBNHBCO2dCQUNBLElBQUFrQyxPQUFBLElBQUFSLGNBQ0FqRCxLQUFBcUIsU0FBQUMsU0FBQTNwQixNQUFBNHBCO2dCQUdBLE9BQUFILFFBQUF3QixvQkFBQXRCLFdBQ0FtQyxPQUNBQSxLQUFBNWUsT0FBQUYsS0FBQSxTQUFBcUM7b0JBQ0EsT0FBQUEsT0FBQVUsT0FBQVYsT0FBQWhSLFFBQUF5dEIsS0FBQTVlOzs7WUFJQSxTQUFBZ2QsaUJBQUFSLFNBQUExcEIsTUFBQXdKO2dCQUNBLElBQUE3RSxRQUFBeWxCO2dCQUVBLGdCQUFBbUIsT0FBQXZELFFBQUE3VztvQkFDQSxJQUFBeE0sVUFBQTJsQixtQkFBQTt3QkFDQSxVQUFBam9CLE1BQUE7O29CQUdBLElBQUFzQyxVQUFBNGxCLG1CQUFBO3dCQUNBLElBQUF2QyxXQUFBOzRCQUNBLE1BQUE3Vzs7d0JBS0EsT0FBQTRhOztvQkFHQXZpQixRQUFBd2U7b0JBQ0F4ZSxRQUFBMkg7b0JBRUE7d0JBQ0EsSUFBQTZhLFdBQUF4aUIsUUFBQXdpQjt3QkFDQSxJQUFBQSxVQUFBOzRCQUNBLElBQUFDLGlCQUFBQyxvQkFBQUYsVUFBQXhpQjs0QkFDQSxJQUFBeWlCLGdCQUFBO2dDQUNBLElBQUFBLG1CQUFBekIsa0JBQUE7Z0NBQ0EsT0FBQXlCOzs7d0JBSUEsSUFBQXppQixRQUFBd2UsV0FBQTs0QkFHQXhlLFFBQUFpZixPQUFBamYsUUFBQTJpQixRQUFBM2lCLFFBQUEySDsrQkFFUyxJQUFBM0gsUUFBQXdlLFdBQUE7NEJBQ1QsSUFBQXJqQixVQUFBeWxCLHdCQUFBO2dDQUNBemxCLFFBQUE0bEI7Z0NBQ0EsTUFBQS9nQixRQUFBMkg7OzRCQUdBM0gsUUFBQTRpQixrQkFBQTVpQixRQUFBMkg7K0JBRVMsSUFBQTNILFFBQUF3ZSxXQUFBOzRCQUNUeGUsUUFBQTZpQixPQUFBLFVBQUE3aUIsUUFBQTJIOzt3QkFHQXhNLFFBQUEybEI7d0JBRUEsSUFBQWtCLFNBQUFyQixTQUFBVCxTQUFBMXBCLE1BQUF3Sjt3QkFDQSxJQUFBZ2lCLE9BQUF6cUIsU0FBQTs0QkFHQTRELFFBQUE2RSxRQUFBdUcsT0FDQXdhLG9CQUNBRjs0QkFFQSxJQUFBbUIsT0FBQXJhLFFBQUFxWixrQkFBQTtnQ0FDQTs7NEJBR0E7Z0NBQ0Fuc0IsT0FBQW10QixPQUFBcmE7Z0NBQ0FwQixNQUFBdkcsUUFBQXVHOzsrQkFHUyxJQUFBeWIsT0FBQXpxQixTQUFBOzRCQUNUNEQsUUFBQTRsQjs0QkFHQS9nQixRQUFBd2UsU0FBQTs0QkFDQXhlLFFBQUEySCxNQUFBcWEsT0FBQXJhOzs7OztZQVVBLFNBQUErYSxvQkFBQUYsVUFBQXhpQjtnQkFDQSxJQUFBd2UsU0FBQWdFLFNBQUFuakIsU0FBQVcsUUFBQXdlO2dCQUNBLElBQUFBLFdBQUE1bEIsV0FBQTtvQkFHQW9ILFFBQUF3aUIsV0FBQTtvQkFFQSxJQUFBeGlCLFFBQUF3ZSxXQUFBO3dCQUNBLElBQUFnRSxTQUFBbmpCLFNBQUFxSCxRQUFBOzRCQUdBMUcsUUFBQXdlLFNBQUE7NEJBQ0F4ZSxRQUFBMkgsTUFBQS9POzRCQUNBOHBCLG9CQUFBRixVQUFBeGlCOzRCQUVBLElBQUFBLFFBQUF3ZSxXQUFBO2dDQUdBLE9BQUF3Qzs7O3dCQUlBaGhCLFFBQUF3ZSxTQUFBO3dCQUNBeGUsUUFBQTJILE1BQUEsSUFBQXJSLFVBQ0E7O29CQUdBLE9BQUEwcUI7O2dCQUdBLElBQUFnQixTQUFBckIsU0FBQW5DLFFBQUFnRSxTQUFBbmpCLFVBQUFXLFFBQUEySDtnQkFFQSxJQUFBcWEsT0FBQXpxQixTQUFBO29CQUNBeUksUUFBQXdlLFNBQUE7b0JBQ0F4ZSxRQUFBMkgsTUFBQXFhLE9BQUFyYTtvQkFDQTNILFFBQUF3aUIsV0FBQTtvQkFDQSxPQUFBeEI7O2dCQUdBLElBQUE4QixPQUFBZCxPQUFBcmE7Z0JBRUEsS0FBQW1iLE1BQUE7b0JBQ0E5aUIsUUFBQXdlLFNBQUE7b0JBQ0F4ZSxRQUFBMkgsTUFBQSxJQUFBclIsVUFBQTtvQkFDQTBKLFFBQUF3aUIsV0FBQTtvQkFDQSxPQUFBeEI7O2dCQUdBLElBQUE4QixLQUFBdmMsTUFBQTtvQkFHQXZHLFFBQUF3aUIsU0FBQU8sY0FBQUQsS0FBQWp1QjtvQkFHQW1MLFFBQUEwRCxPQUFBOGUsU0FBQVE7b0JBUUEsSUFBQWhqQixRQUFBd2UsV0FBQTt3QkFDQXhlLFFBQUF3ZSxTQUFBO3dCQUNBeGUsUUFBQTJILE1BQUEvTzs7dUJBR0s7b0JBRUwsT0FBQWtxQjs7Z0JBS0E5aUIsUUFBQXdpQixXQUFBO2dCQUNBLE9BQUF4Qjs7WUFLQVEsc0JBQUFGO1lBRUFBLEdBQUF4QixxQkFBQTtZQU9Bd0IsR0FBQTNCLGtCQUFBO2dCQUNBLE9BQUFwbUI7O1lBR0ErbkIsR0FBQTNZLFdBQUE7Z0JBQ0E7O1lBR0EsU0FBQXNhLGFBQUFDO2dCQUNBLElBQUF0TztvQkFBaUJ1TyxRQUFBRCxLQUFBOztnQkFFakIsU0FBQUEsTUFBQTtvQkFDQXRPLE1BQUF3TyxXQUFBRixLQUFBOztnQkFHQSxTQUFBQSxNQUFBO29CQUNBdE8sTUFBQXlPLGFBQUFILEtBQUE7b0JBQ0F0TyxNQUFBME8sV0FBQUosS0FBQTs7Z0JBR0EzcEIsS0FBQWdxQixXQUFBcGUsS0FBQXlQOztZQUdBLFNBQUE0TyxjQUFBNU87Z0JBQ0EsSUFBQW9OLFNBQUFwTixNQUFBNk87Z0JBQ0F6QixPQUFBenFCLE9BQUE7dUJBQ0F5cUIsT0FBQXJhO2dCQUNBaU4sTUFBQTZPLGFBQUF6Qjs7WUFHQSxTQUFBeEIsUUFBQUo7Z0JBSUE3bUIsS0FBQWdxQjtvQkFBd0JKLFFBQUE7O2dCQUN4Qi9DLFlBQUF0WSxRQUFBbWIsY0FBQTFwQjtnQkFDQUEsS0FBQW1xQixNQUFBOztZQUdBekQsUUFBQW5SLE9BQUEsU0FBQWxNO2dCQUNBLElBQUFrTTtnQkFDQSxTQUFBdFosT0FBQW9OLFFBQUE7b0JBQ0FrTSxLQUFBM0osS0FBQTNQOztnQkFFQXNaLEtBQUE2VTtnQkFJQSxnQkFBQWpnQjtvQkFDQSxPQUFBb0wsS0FBQTNaLFFBQUE7d0JBQ0EsSUFBQUssTUFBQXNaLEtBQUE4VTt3QkFDQSxJQUFBcHVCLE9BQUFvTixRQUFBOzRCQUNBYyxLQUFBN08sUUFBQVc7NEJBQ0FrTyxLQUFBNkMsT0FBQTs0QkFDQSxPQUFBN0M7OztvQkFPQUEsS0FBQTZDLE9BQUE7b0JBQ0EsT0FBQTdDOzs7WUFJQSxTQUFBcVksT0FBQW5ZO2dCQUNBLElBQUFBLFVBQUE7b0JBQ0EsSUFBQWlnQixpQkFBQWpnQixTQUFBK2I7b0JBQ0EsSUFBQWtFLGdCQUFBO3dCQUNBLE9BQUFBLGVBQUExdEIsS0FBQXlOOztvQkFHQSxXQUFBQSxTQUFBRixTQUFBO3dCQUNBLE9BQUFFOztvQkFHQSxLQUFBa2dCLE1BQUFsZ0IsU0FBQXpPLFNBQUE7d0JBQ0EsSUFBQUQsS0FBQSxHQUFBd08sT0FBQSxTQUFBQTs0QkFDQSxTQUFBeE8sSUFBQTBPLFNBQUF6TyxRQUFBO2dDQUNBLElBQUFxTSxPQUFBckwsS0FBQXlOLFVBQUExTyxJQUFBO29DQUNBd08sS0FBQTdPLFFBQUErTyxTQUFBMU87b0NBQ0F3TyxLQUFBNkMsT0FBQTtvQ0FDQSxPQUFBN0M7Ozs0QkFJQUEsS0FBQTdPLFFBQUErRDs0QkFDQThLLEtBQUE2QyxPQUFBOzRCQUVBLE9BQUE3Qzs7d0JBR0EsT0FBQUE7OztnQkFLQTtvQkFBWUEsTUFBQTZlOzs7WUFFWnRDLFFBQUFsRTtZQUVBLFNBQUF3RztnQkFDQTtvQkFBWTF0QixPQUFBK0Q7b0JBQUEyTixNQUFBOzs7WUFHWmlhLFFBQUE1cUI7Z0JBQ0FrQixhQUFBMHBCO2dCQUVBa0QsT0FBQSxTQUFBSztvQkFDQXhxQixLQUFBeWxCLE9BQUE7b0JBQ0F6bEIsS0FBQW1LLE9BQUE7b0JBR0FuSyxLQUFBMGxCLE9BQUExbEIsS0FBQW9wQixRQUFBL3BCO29CQUNBVyxLQUFBZ04sT0FBQTtvQkFDQWhOLEtBQUFpcEIsV0FBQTtvQkFFQWpwQixLQUFBaWxCLFNBQUE7b0JBQ0FqbEIsS0FBQW9PLE1BQUEvTztvQkFFQVcsS0FBQWdxQixXQUFBemIsUUFBQTBiO29CQUVBLEtBQUFPLGVBQUE7d0JBQ0EsU0FBQTlpQixRQUFBMUgsTUFBQTs0QkFFQSxJQUFBMEgsS0FBQStpQixPQUFBLGNBQ0F4aUIsT0FBQXJMLEtBQUFvRCxNQUFBMEgsVUFDQTZpQixPQUFBN2lCLEtBQUFxTyxNQUFBO2dDQUNBL1YsS0FBQTBILFFBQUFySTs7Ozs7Z0JBTUFzbUIsTUFBQTtvQkFDQTNsQixLQUFBZ04sT0FBQTtvQkFFQSxJQUFBMGQsWUFBQTFxQixLQUFBZ3FCLFdBQUE7b0JBQ0EsSUFBQVcsYUFBQUQsVUFBQVI7b0JBQ0EsSUFBQVMsV0FBQTNzQixTQUFBO3dCQUNBLE1BQUEyc0IsV0FBQXZjOztvQkFHQSxPQUFBcE8sS0FBQTRxQjs7Z0JBR0F2QixtQkFBQSxTQUFBM2E7b0JBQ0EsSUFBQTFPLEtBQUFnTixNQUFBO3dCQUNBLE1BQUEwQjs7b0JBR0EsSUFBQWpJLFVBQUF6RztvQkFDQSxTQUFBNnFCLE9BQUFDLEtBQUFDO3dCQUNBdEMsT0FBQXpxQixPQUFBO3dCQUNBeXFCLE9BQUFyYSxNQUFBTTt3QkFDQWpJLFFBQUEwRCxPQUFBMmdCO3dCQUVBLElBQUFDLFFBQUE7NEJBR0F0a0IsUUFBQXdlLFNBQUE7NEJBQ0F4ZSxRQUFBMkgsTUFBQS9POzt3QkFHQSxTQUFBMHJCOztvQkFHQSxTQUFBcHZCLElBQUFxRSxLQUFBZ3FCLFdBQUFwdUIsU0FBQSxHQUE4Q0QsS0FBQSxLQUFRQSxHQUFBO3dCQUN0RCxJQUFBMGYsUUFBQXJiLEtBQUFncUIsV0FBQXJ1Qjt3QkFDQSxJQUFBOHNCLFNBQUFwTixNQUFBNk87d0JBRUEsSUFBQTdPLE1BQUF1TyxXQUFBOzRCQUlBLE9BQUFpQixPQUFBOzt3QkFHQSxJQUFBeFAsTUFBQXVPLFVBQUE1cEIsS0FBQXlsQixNQUFBOzRCQUNBLElBQUF1RixXQUFBL2lCLE9BQUFyTCxLQUFBeWUsT0FBQTs0QkFDQSxJQUFBNFAsYUFBQWhqQixPQUFBckwsS0FBQXllLE9BQUE7NEJBRUEsSUFBQTJQLFlBQUFDLFlBQUE7Z0NBQ0EsSUFBQWpyQixLQUFBeWxCLE9BQUFwSyxNQUFBd08sVUFBQTtvQ0FDQSxPQUFBZ0IsT0FBQXhQLE1BQUF3TyxVQUFBO3VDQUNhLElBQUE3cEIsS0FBQXlsQixPQUFBcEssTUFBQXlPLFlBQUE7b0NBQ2IsT0FBQWUsT0FBQXhQLE1BQUF5Tzs7bUNBR1csSUFBQWtCLFVBQUE7Z0NBQ1gsSUFBQWhyQixLQUFBeWxCLE9BQUFwSyxNQUFBd08sVUFBQTtvQ0FDQSxPQUFBZ0IsT0FBQXhQLE1BQUF3TyxVQUFBOzttQ0FHVyxJQUFBb0IsWUFBQTtnQ0FDWCxJQUFBanJCLEtBQUF5bEIsT0FBQXBLLE1BQUF5TyxZQUFBO29DQUNBLE9BQUFlLE9BQUF4UCxNQUFBeU87O21DQUdXO2dDQUNYLFVBQUF4cUIsTUFBQTs7Ozs7Z0JBTUFncUIsUUFBQSxTQUFBdHJCLE1BQUFvUTtvQkFDQSxTQUFBelMsSUFBQXFFLEtBQUFncUIsV0FBQXB1QixTQUFBLEdBQThDRCxLQUFBLEtBQVFBLEdBQUE7d0JBQ3RELElBQUEwZixRQUFBcmIsS0FBQWdxQixXQUFBcnVCO3dCQUNBLElBQUEwZixNQUFBdU8sVUFBQTVwQixLQUFBeWxCLFFBQ0F4ZCxPQUFBckwsS0FBQXllLE9BQUEsaUJBQ0FyYixLQUFBeWxCLE9BQUFwSyxNQUFBeU8sWUFBQTs0QkFDQSxJQUFBb0IsZUFBQTdQOzRCQUNBOzs7b0JBSUEsSUFBQTZQLGlCQUNBbHRCLFNBQUEsV0FDQUEsU0FBQSxlQUNBa3RCLGFBQUF0QixVQUFBeGIsT0FDQUEsT0FBQThjLGFBQUFwQixZQUFBO3dCQUdBb0IsZUFBQTs7b0JBR0EsSUFBQXpDLFNBQUF5Qyw0QkFBQWhCO29CQUNBekIsT0FBQXpxQjtvQkFDQXlxQixPQUFBcmE7b0JBRUEsSUFBQThjLGNBQUE7d0JBQ0FsckIsS0FBQWlsQixTQUFBO3dCQUNBamxCLEtBQUFtSyxPQUFBK2dCLGFBQUFwQjt3QkFDQSxPQUFBckM7O29CQUdBLE9BQUF6bkIsS0FBQW1yQixTQUFBMUM7O2dCQUdBMEMsVUFBQSxTQUFBMUMsUUFBQXNCO29CQUNBLElBQUF0QixPQUFBenFCLFNBQUE7d0JBQ0EsTUFBQXlxQixPQUFBcmE7O29CQUdBLElBQUFxYSxPQUFBenFCLFNBQUEsV0FDQXlxQixPQUFBenFCLFNBQUE7d0JBQ0FnQyxLQUFBbUssT0FBQXNlLE9BQUFyYTsyQkFDTyxJQUFBcWEsT0FBQXpxQixTQUFBO3dCQUNQZ0MsS0FBQTRxQixPQUFBNXFCLEtBQUFvTyxNQUFBcWEsT0FBQXJhO3dCQUNBcE8sS0FBQWlsQixTQUFBO3dCQUNBamxCLEtBQUFtSyxPQUFBOzJCQUNPLElBQUFzZSxPQUFBenFCLFNBQUEsWUFBQStyQixVQUFBO3dCQUNQL3BCLEtBQUFtSyxPQUFBNGY7O29CQUdBLE9BQUF0Qzs7Z0JBR0EyRCxRQUFBLFNBQUF0QjtvQkFDQSxTQUFBbnVCLElBQUFxRSxLQUFBZ3FCLFdBQUFwdUIsU0FBQSxHQUE4Q0QsS0FBQSxLQUFRQSxHQUFBO3dCQUN0RCxJQUFBMGYsUUFBQXJiLEtBQUFncUIsV0FBQXJ1Qjt3QkFDQSxJQUFBMGYsTUFBQXlPLDJCQUFBOzRCQUNBOXBCLEtBQUFtckIsU0FBQTlQLE1BQUE2TyxZQUFBN08sTUFBQTBPOzRCQUNBRSxjQUFBNU87NEJBQ0EsT0FBQW9NOzs7O2dCQUtBekMsT0FBQSxTQUFBNEU7b0JBQ0EsU0FBQWp1QixJQUFBcUUsS0FBQWdxQixXQUFBcHVCLFNBQUEsR0FBOENELEtBQUEsS0FBUUEsR0FBQTt3QkFDdEQsSUFBQTBmLFFBQUFyYixLQUFBZ3FCLFdBQUFydUI7d0JBQ0EsSUFBQTBmLE1BQUF1TyxtQkFBQTs0QkFDQSxJQUFBbkIsU0FBQXBOLE1BQUE2Tzs0QkFDQSxJQUFBekIsT0FBQXpxQixTQUFBO2dDQUNBLElBQUFxdEIsU0FBQTVDLE9BQUFyYTtnQ0FDQTZiLGNBQUE1Tzs7NEJBRUEsT0FBQWdROzs7b0JBTUEsVUFBQS9yQixNQUFBOztnQkFHQWdzQixlQUFBLFNBQUFqaEIsVUFBQW1mLFlBQUFDO29CQUNBenBCLEtBQUFpcEI7d0JBQ0FuakIsVUFBQTBjLE9BQUFuWTt3QkFDQW1mO3dCQUNBQzs7b0JBR0EsSUFBQXpwQixLQUFBaWxCLFdBQUE7d0JBR0FqbEIsS0FBQW9PLE1BQUEvTzs7b0JBR0EsT0FBQW9vQjs7O1VBT0E7WUFBZSxPQUFBem5CO2VBQWN1ckIsU0FBQTs7SXhDZzRIdkJDLEtBQ0EsU0FBVTN5QixRQUFRQyxTQUFTQztReUN6bEpqQ0YsT0FBQUMsVUFBQUMsb0JBQUE7O0l6QytsSk0weUIsS0FDQSxTQUFVNXlCLFFBQVFDLFNBQVNDO1EwQ2htSmpDO1FBRUEsSUFBQTJLLFFBQUEzSyxvQkFBQTtRQUNBLElBQUFxSCxPQUFBckgsb0JBQUE7UUFDQSxJQUFBMnlCLFFBQUEzeUIsb0JBQUE7UUFDQSxJQUFBNHlCLFdBQUE1eUIsb0JBQUE7UUFRQSxTQUFBNnlCLGVBQUFDO1lBQ0EsSUFBQXBsQixVQUFBLElBQUFpbEIsTUFBQUc7WUFDQSxJQUFBL3VCLFdBQUFzRCxLQUFBc3JCLE1BQUFydkIsVUFBQXl2QixTQUFBcmxCO1lBR0EvQyxNQUFBcW9CLE9BQUFqdkIsVUFBQTR1QixNQUFBcnZCLFdBQUFvSztZQUdBL0MsTUFBQXFvQixPQUFBanZCLFVBQUEySjtZQUVBLE9BQUEzSjs7UUFJQSxJQUFBa3ZCLFFBQUFKLGVBQUFEO1FBR0FLLE1BQUFOO1FBR0FNLE1BQUExdUIsU0FBQSxTQUFBQSxPQUFBMnVCO1lBQ0EsT0FBQUwsZUFBQWxvQixNQUFBd29CLE1BQUFQLFVBQUFNOztRQUlBRCxNQUFBRyxTQUFBcHpCLG9CQUFBO1FBQ0FpekIsTUFBQUksY0FBQXJ6QixvQkFBQTtRQUNBaXpCLE1BQUFLLFdBQUF0ekIsb0JBQUE7UUFHQWl6QixNQUFBL1ksTUFBQSxTQUFBQSxJQUFBcVo7WUFDQSxPQUFBN2dCLFFBQUF3SCxJQUFBcVo7O1FBRUFOLE1BQUFPLFNBQUF4ekIsb0JBQUE7UUFFQUYsT0FBQUMsVUFBQWt6QjtRQUdBbnpCLE9BQUFDLFFBQUFrQixVQUFBZ3lCOztJMUN1bUpNUSxLQUNBLFNBQVUzekIsUUFBUUMsU0FBU0M7UTJDM3BKakM7UUFFQSxJQUFBcUgsT0FBQXJILG9CQUFBO1FBQ0EsSUFBQTB6QixXQUFBMXpCLG9CQUFBO1FBTUEsSUFBQXFXLFdBQUFoVSxPQUFBaUIsVUFBQStTO1FBUUEsU0FBQXRGLFFBQUFnQztZQUNBLE9BQUFzRCxTQUFBeFMsS0FBQWtQLFNBQUE7O1FBU0EsU0FBQTRnQixjQUFBNWdCO1lBQ0EsT0FBQXNELFNBQUF4UyxLQUFBa1AsU0FBQTs7UUFTQSxTQUFBNmdCLFdBQUE3Z0I7WUFDQSxjQUFBOGdCLGFBQUEsZUFBQTlnQixlQUFBOGdCOztRQVNBLFNBQUFDLGtCQUFBL2dCO1lBQ0EsSUFBQVE7WUFDQSxXQUFBd2dCLGdCQUFBLGVBQUFBLFlBQUE7Z0JBQ0F4Z0IsU0FBQXdnQixZQUFBQyxPQUFBamhCO21CQUNHO2dCQUNIUSxTQUFBLE9BQUFSLElBQUEsVUFBQUEsSUFBQXJCLGtCQUFBcWlCOztZQUVBLE9BQUF4Z0I7O1FBU0EsU0FBQTBnQixTQUFBbGhCO1lBQ0EsY0FBQUEsUUFBQTs7UUFTQSxTQUFBbWhCLFNBQUFuaEI7WUFDQSxjQUFBQSxRQUFBOztRQVNBLFNBQUFvaEIsWUFBQXBoQjtZQUNBLGNBQUFBLFFBQUE7O1FBU0EsU0FBQXFoQixTQUFBcmhCO1lBQ0EsT0FBQUEsUUFBQSxlQUFBQSxRQUFBOztRQVNBLFNBQUFzaEIsT0FBQXRoQjtZQUNBLE9BQUFzRCxTQUFBeFMsS0FBQWtQLFNBQUE7O1FBU0EsU0FBQXVoQixPQUFBdmhCO1lBQ0EsT0FBQXNELFNBQUF4UyxLQUFBa1AsU0FBQTs7UUFTQSxTQUFBd2hCLE9BQUF4aEI7WUFDQSxPQUFBc0QsU0FBQXhTLEtBQUFrUCxTQUFBOztRQVNBLFNBQUF5aEIsV0FBQXpoQjtZQUNBLE9BQUFzRCxTQUFBeFMsS0FBQWtQLFNBQUE7O1FBU0EsU0FBQTBoQixTQUFBMWhCO1lBQ0EsT0FBQXFoQixTQUFBcmhCLFFBQUF5aEIsV0FBQXpoQixJQUFBMmhCOztRQVNBLFNBQUFDLGtCQUFBNWhCO1lBQ0EsY0FBQTZoQixvQkFBQSxlQUFBN2hCLGVBQUE2aEI7O1FBU0EsU0FBQUMsS0FBQUM7WUFDQSxPQUFBQSxJQUFBQyxRQUFBLFlBQUFBLFFBQUE7O1FBZ0JBLFNBQUFDO1lBQ0EsV0FBQUMsY0FBQSxlQUFBQSxVQUFBQyxZQUFBO2dCQUNBOztZQUVBLGNBQ0E5ekIsV0FBQSxzQkFDQVMsYUFBQTs7UUFnQkEsU0FBQTJULFFBQUF6VSxLQUFBeVQ7WUFFQSxJQUFBelQsUUFBQSxlQUFBQSxRQUFBO2dCQUNBOztZQUlBLFdBQUFBLFFBQUE7Z0JBRUFBOztZQUdBLElBQUFnUSxRQUFBaFEsTUFBQTtnQkFFQSxTQUFBNkIsSUFBQSxHQUFBdXlCLElBQUFwMEIsSUFBQThCLFFBQW1DRCxJQUFBdXlCLEdBQU92eUIsS0FBQTtvQkFDMUM0UixHQUFBM1EsS0FBQSxNQUFBOUMsSUFBQTZCLE9BQUE3Qjs7bUJBRUc7Z0JBRUgsU0FBQW1DLE9BQUFuQyxLQUFBO29CQUNBLElBQUFzQixPQUFBaUIsVUFBQU0sZUFBQUMsS0FBQTlDLEtBQUFtQyxNQUFBO3dCQUNBc1IsR0FBQTNRLEtBQUEsTUFBQTlDLElBQUFtQyxXQUFBbkM7Ozs7O1FBdUJBLFNBQUFveUI7WUFDQSxJQUFBNWY7WUFDQSxTQUFBNmhCLFlBQUFyaUIsS0FBQTdQO2dCQUNBLFdBQUFxUSxPQUFBclEsU0FBQSxtQkFBQTZQLFFBQUE7b0JBQ0FRLE9BQUFyUSxPQUFBaXdCLE1BQUE1ZixPQUFBclEsTUFBQTZQO3VCQUNLO29CQUNMUSxPQUFBclEsT0FBQTZQOzs7WUFJQSxTQUFBblEsSUFBQSxHQUFBdXlCLElBQUF4b0IsVUFBQTlKLFFBQXVDRCxJQUFBdXlCLEdBQU92eUIsS0FBQTtnQkFDOUM0UyxRQUFBN0ksVUFBQS9KLElBQUF3eUI7O1lBRUEsT0FBQTdoQjs7UUFXQSxTQUFBeWYsT0FBQTVQLEdBQUEzUCxHQUFBNlU7WUFDQTlTLFFBQUEvQixHQUFBLFNBQUEyaEIsWUFBQXJpQixLQUFBN1A7Z0JBQ0EsSUFBQW9sQixrQkFBQXZWLFFBQUE7b0JBQ0FxUSxFQUFBbGdCLE9BQUFtRSxLQUFBMEwsS0FBQXVWO3VCQUNLO29CQUNMbEYsRUFBQWxnQixPQUFBNlA7OztZQUdBLE9BQUFxUTs7UUFHQXRqQixPQUFBQztZQUNBZ1I7WUFDQTRpQjtZQUNBRDtZQUNBRTtZQUNBRTtZQUNBRztZQUNBQztZQUNBRTtZQUNBRDtZQUNBRTtZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBRTtZQUNBSztZQUNBeGY7WUFDQTJkO1lBQ0FIO1lBQ0E2Qjs7O0kzQ21xSk1RLEtBQ0EsU0FBVXYxQixRQUFRQztRNENqOUp4QjtRQUVBRCxPQUFBQyxVQUFBLFNBQUFzSCxLQUFBbU4sSUFBQThUO1lBQ0EsZ0JBQUFpRTtnQkFDQSxJQUFBM2YsT0FBQSxJQUFBQyxNQUFBRixVQUFBOUo7Z0JBQ0EsU0FBQUQsSUFBQSxHQUFtQkEsSUFBQWdLLEtBQUEvSixRQUFpQkQsS0FBQTtvQkFDcENnSyxLQUFBaEssS0FBQStKLFVBQUEvSjs7Z0JBRUEsT0FBQTRSLEdBQUFsSCxNQUFBZ2IsU0FBQTFiOzs7O0k1QzA5Sk0wb0IsS0FDQSxTQUFVeDFCLFFBQVFDO1E2QzE5SnhCRCxPQUFBQyxVQUFBLFNBQUFnQjtZQUNBLE9BQUFBLE9BQUEsU0FBQTJ5QixTQUFBM3lCLFFBQUF3MEIsYUFBQXgwQixjQUFBeTBCOztRQUdBLFNBQUE5QixTQUFBM3lCO1lBQ0EsU0FBQUEsSUFBQXlELHNCQUFBekQsSUFBQXlELFlBQUFrdkIsYUFBQSxjQUFBM3lCLElBQUF5RCxZQUFBa3ZCLFNBQUEzeUI7O1FBSUEsU0FBQXcwQixhQUFBeDBCO1lBQ0EsY0FBQUEsSUFBQTAwQixnQkFBQSxxQkFBQTEwQixJQUFBaWMsVUFBQSxjQUFBMFcsU0FBQTN5QixJQUFBaWMsTUFBQTs7O0k3QzIrSk0wWSxLQUNBLFNBQVU1MUIsUUFBUUMsU0FBU0M7UThDLy9KakM7UUFFQSxJQUFBNHlCLFdBQUE1eUIsb0JBQUE7UUFDQSxJQUFBMkssUUFBQTNLLG9CQUFBO1FBQ0EsSUFBQTIxQixxQkFBQTMxQixvQkFBQTtRQUNBLElBQUE0MUIsa0JBQUE1MUIsb0JBQUE7UUFPQSxTQUFBMnlCLE1BQUFPO1lBQ0Fqc0IsS0FBQTJyQixXQUFBTTtZQUNBanNCLEtBQUE0dUI7Z0JBQ0E5QyxTQUFBLElBQUE0QztnQkFDQTVZLFVBQUEsSUFBQTRZOzs7UUFTQWhELE1BQUFydkIsVUFBQXl2QixVQUFBLFNBQUFBLFFBQUEvRztZQUdBLFdBQUFBLFdBQUE7Z0JBQ0FBLFNBQUFyaEIsTUFBQXdvQjtvQkFDQWhILEtBQUF4ZixVQUFBO21CQUNLQSxVQUFBOztZQUdMcWYsU0FBQXJoQixNQUFBd29CLE1BQUFQO2dCQUFrQzFHLFFBQUE7ZUFBY2psQixLQUFBMnJCLFVBQUE1RztZQUNoREEsT0FBQUUsU0FBQUYsT0FBQUUsT0FBQTRKO1lBR0EsSUFBQUMsVUFBQUgsaUJBQUF0dkI7WUFDQSxJQUFBMEssVUFBQTBCLFFBQUFDLFFBQUFxWjtZQUVBL2tCLEtBQUE0dUIsYUFBQTlDLFFBQUF2ZCxRQUFBLFNBQUF3Z0IsMkJBQUFDO2dCQUNBRixNQUFBRyxRQUFBRCxZQUFBRSxXQUFBRixZQUFBRzs7WUFHQW52QixLQUFBNHVCLGFBQUE5WSxTQUFBdkgsUUFBQSxTQUFBNmdCLHlCQUFBSjtnQkFDQUYsTUFBQWxqQixLQUFBb2pCLFlBQUFFLFdBQUFGLFlBQUFHOztZQUdBLE9BQUFMLE1BQUFsekIsUUFBQTtnQkFDQW1PLGtCQUFBRSxLQUFBNmtCLE1BQUFoWSxTQUFBZ1ksTUFBQWhZOztZQUdBLE9BQUEvTTs7UUFJQXJHLE1BQUE2SyxVQUFBLCtDQUFBOGdCLG9CQUFBcEs7WUFFQXlHLE1BQUFydkIsVUFBQTRvQixVQUFBLFNBQUFDLEtBQUFIO2dCQUNBLE9BQUEva0IsS0FBQThyQixRQUFBcG9CLE1BQUF3b0IsTUFBQW5IO29CQUNBRTtvQkFDQUM7Ozs7UUFLQXhoQixNQUFBNkssVUFBQSxtQ0FBQStnQixzQkFBQXJLO1lBRUF5RyxNQUFBcnZCLFVBQUE0b0IsVUFBQSxTQUFBQyxLQUFBampCLE1BQUE4aUI7Z0JBQ0EsT0FBQS9rQixLQUFBOHJCLFFBQUFwb0IsTUFBQXdvQixNQUFBbkg7b0JBQ0FFO29CQUNBQztvQkFDQWpqQjs7OztRQUtBcEosT0FBQUMsVUFBQTR5Qjs7STlDc2dLTTZELEtBQ0EsU0FBVTEyQixRQUFRQyxTQUFTQztTK0NybEtqQyxTQUFBbU07WUFBQTtZQUVBLElBQUF4QixRQUFBM0ssb0JBQUE7WUFDQSxJQUFBeTJCLHNCQUFBejJCLG9CQUFBO1lBRUEsSUFBQTAyQjtnQkFDQUMsZ0JBQUE7O1lBR0EsU0FBQUMsc0JBQUF4SyxTQUFBN3BCO2dCQUNBLEtBQUFvSSxNQUFBd3BCLFlBQUEvSCxZQUFBemhCLE1BQUF3cEIsWUFBQS9ILFFBQUE7b0JBQ0FBLFFBQUEsa0JBQUE3cEI7OztZQUlBLFNBQUFzMEI7Z0JBQ0EsSUFBQUM7Z0JBQ0EsV0FBQUMsbUJBQUE7b0JBRUFELFVBQUE5MkIsb0JBQUE7dUJBQ0csV0FBQW1NLFlBQUE7b0JBRUgycUIsVUFBQTkyQixvQkFBQTs7Z0JBRUEsT0FBQTgyQjs7WUFHQSxJQUFBbEU7Z0JBQ0FrRSxTQUFBRDtnQkFFQUcsb0JBQUEsU0FBQUEsaUJBQUE5dEIsTUFBQWtqQjtvQkFDQXFLLG9CQUFBckssU0FBQTtvQkFDQSxJQUFBemhCLE1BQUFpcEIsV0FBQTFxQixTQUNBeUIsTUFBQWdwQixjQUFBenFCLFNBQ0F5QixNQUFBK29CLFNBQUF4cUIsU0FDQXlCLE1BQUE4cEIsU0FBQXZyQixTQUNBeUIsTUFBQTJwQixPQUFBcHJCLFNBQ0F5QixNQUFBNHBCLE9BQUFyckIsT0FDQTt3QkFDQSxPQUFBQTs7b0JBRUEsSUFBQXlCLE1BQUFtcEIsa0JBQUE1cUIsT0FBQTt3QkFDQSxPQUFBQSxLQUFBd0k7O29CQUVBLElBQUEvRyxNQUFBZ3FCLGtCQUFBenJCLE9BQUE7d0JBQ0EwdEIsc0JBQUF4SyxTQUFBO3dCQUNBLE9BQUFsakIsS0FBQW1OOztvQkFFQSxJQUFBMUwsTUFBQXlwQixTQUFBbHJCLE9BQUE7d0JBQ0EwdEIsc0JBQUF4SyxTQUFBO3dCQUNBLE9BQUFuaUIsS0FBQWd0QixVQUFBL3RCOztvQkFFQSxPQUFBQTs7Z0JBR0FndUIscUJBQUEsU0FBQUEsa0JBQUFodUI7b0JBRUEsV0FBQUEsU0FBQTt3QkFDQTs0QkFDQUEsT0FBQWUsS0FBQUMsTUFBQWhCOzBCQUNPLE9BQUF4Qjs7b0JBRVAsT0FBQXdCOztnQkFPQWl1QixTQUFBO2dCQUVBQyxnQkFBQTtnQkFDQUMsZ0JBQUE7Z0JBRUFDLG1CQUFBO2dCQUVBQyxnQkFBQSxTQUFBQSxlQUFBQztvQkFDQSxPQUFBQSxVQUFBLE9BQUFBLFNBQUE7OztZQUlBNUUsU0FBQXhHO2dCQUNBcUw7b0JBQ0FDLFFBQUE7OztZQUlBL3NCLE1BQUE2SyxVQUFBLG9DQUFBOGdCLG9CQUFBcEs7Z0JBQ0EwRyxTQUFBeEcsUUFBQUY7O1lBR0F2aEIsTUFBQTZLLFVBQUEsbUNBQUErZ0Isc0JBQUFySztnQkFDQTBHLFNBQUF4RyxRQUFBRixVQUFBdmhCLE1BQUF3b0IsTUFBQXVEOztZQUdBNTJCLE9BQUFDLFVBQUE2eUI7Vy9DeWxLOEIvdUIsS0FBSzlELFNBQVNDLG9CQUFvQjs7SUFJMUQyM0IsS0FDQSxTQUFVNzNCLFFBQVFDLFNBQVNDO1FnRDdyS2pDO1FBRUEsSUFBQTJLLFFBQUEzSyxvQkFBQTtRQUVBRixPQUFBQyxVQUFBLFNBQUEwMkIsb0JBQUFySyxTQUFBd0w7WUFDQWp0QixNQUFBNkssUUFBQTRXLFNBQUEsU0FBQXlMLGNBQUF0MUIsT0FBQW9NO2dCQUNBLElBQUFBLFNBQUFpcEIsa0JBQUFqcEIsS0FBQW1wQixrQkFBQUYsZUFBQUUsZUFBQTtvQkFDQTFMLFFBQUF3TCxrQkFBQXIxQjsyQkFDQTZwQixRQUFBemQ7Ozs7O0loRHVzS01vcEIsS0FDQSxTQUFVajRCLFFBQVFDLFNBQVNDO1NpRGh0S2pDLFNBQUFtTTtZQUFBO1lBRUEsSUFBQXhCLFFBQUEzSyxvQkFBQTtZQUNBLElBQUFnNEIsU0FBQWg0QixvQkFBQTtZQUNBLElBQUFpNEIsV0FBQWo0QixvQkFBQTtZQUNBLElBQUFrNEIsZUFBQWw0QixvQkFBQTtZQUNBLElBQUFtNEIsa0JBQUFuNEIsb0JBQUE7WUFDQSxJQUFBbzRCLGNBQUFwNEIsb0JBQUE7WUFDQSxJQUFBcTRCLGNBQUFqM0IsV0FBQSxlQUFBQSxPQUFBaTNCLFFBQUFqM0IsT0FBQWkzQixLQUFBaHhCLEtBQUFqRyxXQUFBcEIsb0JBQUE7WUFFQUYsT0FBQUMsVUFBQSxTQUFBdTRCLFdBQUF0TTtnQkFDQSxXQUFBdFosUUFBQSxTQUFBNmxCLG1CQUFBNWxCLFNBQUFDO29CQUNBLElBQUE0bEIsY0FBQXhNLE9BQUE5aUI7b0JBQ0EsSUFBQXV2QixpQkFBQXpNLE9BQUFJO29CQUVBLElBQUF6aEIsTUFBQWlwQixXQUFBNEUsY0FBQTsrQkFDQUMsZUFBQTs7b0JBR0EsSUFBQTFGLFVBQUEsSUFBQWdFO29CQUNBLElBQUEyQixZQUFBO29CQUNBLElBQUFDLFVBQUE7b0JBS0EsSUFBQXhzQixRQUFBYyxJQUFBQyxhQUFBLGlCQUNBOUwsV0FBQSxlQUNBQSxPQUFBdzNCLG9CQUFBLHFCQUFBN0YsYUFDQW9GLGdCQUFBbk0sT0FBQUcsTUFBQTt3QkFDQTRHLFVBQUEsSUFBQTN4QixPQUFBdzNCO3dCQUNBRixZQUFBO3dCQUNBQyxVQUFBO3dCQUNBNUYsUUFBQThGLGFBQUEsU0FBQUM7d0JBQ0EvRixRQUFBZ0csWUFBQSxTQUFBQzs7b0JBSUEsSUFBQWhOLE9BQUFpTixNQUFBO3dCQUNBLElBQUFDLFdBQUFsTixPQUFBaU4sS0FBQUMsWUFBQTt3QkFDQSxJQUFBQyxXQUFBbk4sT0FBQWlOLEtBQUFFLFlBQUE7d0JBQ0FWLGVBQUFXLGdCQUFBLFdBQUFmLEtBQUFhLFdBQUEsTUFBQUM7O29CQUdBcEcsUUFBQXNHLEtBQUFyTixPQUFBRSxPQUFBNEwsZUFBQUcsU0FBQWpNLE9BQUFHLEtBQUFILE9BQUFzTixRQUFBdE4sT0FBQXVOLG1CQUFBO29CQUdBeEcsUUFBQW9FLFVBQUFuTCxPQUFBbUw7b0JBR0FwRSxRQUFBMkYsYUFBQSxTQUFBYzt3QkFDQSxLQUFBekcsbUJBQUEwRyxlQUFBLE1BQUFkLFNBQUE7NEJBQ0E7O3dCQU9BLElBQUE1RixRQUFBeUUsV0FBQSxPQUFBekUsUUFBQTJHLGVBQUEzRyxRQUFBMkcsWUFBQTN2QixRQUFBOzRCQUNBOzt3QkFJQSxJQUFBNHZCLGtCQUFBLDJCQUFBNUcsVUFBQW1GLGFBQUFuRixRQUFBNkcsMkJBQUE7d0JBQ0EsSUFBQUMsZ0JBQUE3TixPQUFBOE4sZ0JBQUE5TixPQUFBOE4saUJBQUEsU0FBQS9HLFFBQUFnSCxlQUFBaEgsUUFBQWhXO3dCQUNBLElBQUFBOzRCQUNBN1QsTUFBQTJ3Qjs0QkFFQXJDLFFBQUF6RSxRQUFBeUUsV0FBQSxhQUFBekUsUUFBQXlFOzRCQUNBd0MsWUFBQWpILFFBQUF5RSxXQUFBLHNCQUFBekUsUUFBQWlIOzRCQUNBNU4sU0FBQXVOOzRCQUNBM047NEJBQ0ErRzs7d0JBR0FpRixPQUFBcmxCLFNBQUFDLFFBQUFtSzt3QkFHQWdXLFVBQUE7O29CQUlBQSxRQUFBOU0sVUFBQSxTQUFBZ1U7d0JBR0FybkIsT0FBQXdsQixZQUFBLGlCQUFBcE0sUUFBQSxNQUFBK0c7d0JBR0FBLFVBQUE7O29CQUlBQSxRQUFBZ0csWUFBQSxTQUFBQzt3QkFDQXBtQixPQUFBd2xCLFlBQUEsZ0JBQUFwTSxPQUFBbUwsVUFBQSxlQUFBbkwsUUFBQSxnQkFDQStHO3dCQUdBQSxVQUFBOztvQkFNQSxJQUFBcG9CLE1BQUFxcUIsd0JBQUE7d0JBQ0EsSUFBQWtGLFVBQUFsNkIsb0JBQUE7d0JBR0EsSUFBQW02QixhQUFBbk8sT0FBQW9PLG1CQUFBakMsZ0JBQUFuTSxPQUFBRyxTQUFBSCxPQUFBb0wsaUJBQ0E4QyxRQUFBRyxLQUFBck8sT0FBQW9MLGtCQUNBOXdCO3dCQUVBLElBQUE2ekIsV0FBQTs0QkFDQTFCLGVBQUF6TSxPQUFBcUwsa0JBQUE4Qzs7O29CQUtBLDBCQUFBcEgsU0FBQTt3QkFDQXBvQixNQUFBNkssUUFBQWlqQixnQkFBQSxTQUFBNkIsaUJBQUF2bkIsS0FBQTdQOzRCQUNBLFdBQUFzMUIsZ0JBQUEsZUFBQXQxQixJQUFBNHlCLGtCQUFBO3VDQUVBMkMsZUFBQXYxQjttQ0FDUztnQ0FFVDZ2QixRQUFBdUgsaUJBQUFwM0IsS0FBQTZQOzs7O29CQU1BLElBQUFpWixPQUFBb08saUJBQUE7d0JBQ0FySCxRQUFBcUgsa0JBQUE7O29CQUlBLElBQUFwTyxPQUFBOE4sY0FBQTt3QkFDQTs0QkFDQS9HLFFBQUErRyxlQUFBOU4sT0FBQThOOzBCQUNPLE9BQUFweUI7NEJBR1AsSUFBQXNrQixPQUFBOE4saUJBQUE7Z0NBQ0EsTUFBQXB5Qjs7OztvQkFNQSxXQUFBc2tCLE9BQUF1Tyx1QkFBQTt3QkFDQXhILFFBQUFqeEIsaUJBQUEsWUFBQWtxQixPQUFBdU87O29CQUlBLFdBQUF2TyxPQUFBd08scUJBQUEsY0FBQXpILFFBQUEwSCxRQUFBO3dCQUNBMUgsUUFBQTBILE9BQUEzNEIsaUJBQUEsWUFBQWtxQixPQUFBd087O29CQUdBLElBQUF4TyxPQUFBME8sYUFBQTt3QkFFQTFPLE9BQUEwTyxZQUFBMXBCLFFBQUFFLEtBQUEsU0FBQXlwQixXQUFBampCOzRCQUNBLEtBQUFxYixTQUFBO2dDQUNBOzs0QkFHQUEsUUFBQTFiOzRCQUNBekUsT0FBQThFOzRCQUVBcWIsVUFBQTs7O29CQUlBLElBQUF5RixnQkFBQWx5QixXQUFBO3dCQUNBa3lCLGNBQUE7O29CQUlBekYsUUFBQTZILEtBQUFwQzs7O1dqRHN0SzhCMzBCLEtBQUs5RCxTQUFTQyxvQkFBb0I7O0lBSTFENjZCLEtBQ0EsU0FBVS82QixRQUFRQyxTQUFTQztRa0Q1NEtqQztRQUVBLElBQUFvNEIsY0FBQXA0QixvQkFBQTtRQVNBRixPQUFBQyxVQUFBLFNBQUFpNEIsT0FBQXJsQixTQUFBQyxRQUFBbUs7WUFDQSxJQUFBd2EsaUJBQUF4YSxTQUFBaVAsT0FBQXVMO1lBRUEsS0FBQXhhLFNBQUF5YSxXQUFBRCxpQ0FBQXhhLFNBQUF5YSxTQUFBO2dCQUNBN2tCLFFBQUFvSzttQkFDRztnQkFDSG5LLE9BQUF3bEIsWUFDQSxxQ0FBQXJiLFNBQUF5YSxRQUNBemEsU0FBQWlQLFFBQ0EsTUFDQWpQLFNBQUFnVyxTQUNBaFc7Ozs7SWxEczVLTStkLEtBQ0EsU0FBVWg3QixRQUFRQyxTQUFTQztRbUQ3NktqQztRQUVBLElBQUErNkIsZUFBQS82QixvQkFBQTtRQVlBRixPQUFBQyxVQUFBLFNBQUFxNEIsWUFBQTF4QixTQUFBc2xCLFFBQUFnUCxNQUFBakksU0FBQWhXO1lBQ0EsSUFBQXRXLFFBQUEsSUFBQUYsTUFBQUc7WUFDQSxPQUFBcTBCLGFBQUF0MEIsT0FBQXVsQixRQUFBZ1AsTUFBQWpJLFNBQUFoVzs7O0luRHE3S01rZSxLQUNBLFNBQVVuN0IsUUFBUUM7UW9EdDhLeEI7UUFZQUQsT0FBQUMsVUFBQSxTQUFBZzdCLGFBQUF0MEIsT0FBQXVsQixRQUFBZ1AsTUFBQWpJLFNBQUFoVztZQUNBdFcsTUFBQXVsQjtZQUNBLElBQUFnUCxNQUFBO2dCQUNBdjBCLE1BQUF1MEI7O1lBRUF2MEIsTUFBQXNzQjtZQUNBdHNCLE1BQUFzVztZQUNBLE9BQUF0Vzs7O0lwRDg4S015MEIsS0FDQSxTQUFVcDdCLFFBQVFDLFNBQVNDO1FxRGwrS2pDO1FBRUEsSUFBQTJLLFFBQUEzSyxvQkFBQTtRQUVBLFNBQUFtN0IsT0FBQXBvQjtZQUNBLE9BQUFxb0IsbUJBQUFyb0IsS0FDQWdpQixRQUFBLGNBQ0FBLFFBQUEsY0FDQUEsUUFBQSxhQUNBQSxRQUFBLGNBQ0FBLFFBQUEsYUFDQUEsUUFBQSxjQUNBQSxRQUFBOztRQVVBajFCLE9BQUFDLFVBQUEsU0FBQWs0QixTQUFBOUwsS0FBQW1OLFFBQUFDO1lBRUEsS0FBQUQsUUFBQTtnQkFDQSxPQUFBbk47O1lBR0EsSUFBQWtQO1lBQ0EsSUFBQTlCLGtCQUFBO2dCQUNBOEIsbUJBQUE5QixpQkFBQUQ7bUJBQ0csSUFBQTN1QixNQUFBZ3FCLGtCQUFBMkUsU0FBQTtnQkFDSCtCLG1CQUFBL0IsT0FBQWpqQjttQkFDRztnQkFDSCxJQUFBaWxCO2dCQUVBM3dCLE1BQUE2SyxRQUFBOGpCLFFBQUEsU0FBQWlDLFVBQUF4b0IsS0FBQTdQO29CQUNBLElBQUE2UCxRQUFBLGVBQUFBLFFBQUE7d0JBQ0E7O29CQUdBLElBQUFwSSxNQUFBb0csUUFBQWdDLE1BQUE7d0JBQ0E3UCxZQUFBOzJCQUNPO3dCQUNQNlA7O29CQUdBcEksTUFBQTZLLFFBQUF6QyxLQUFBLFNBQUF5b0IsV0FBQXZyQjt3QkFDQSxJQUFBdEYsTUFBQTBwQixPQUFBcGtCLElBQUE7NEJBQ0FBLE1BQUF3ckI7K0JBQ1MsSUFBQTl3QixNQUFBeXBCLFNBQUFua0IsSUFBQTs0QkFDVEEsSUFBQWhHLEtBQUFndEIsVUFBQWhuQjs7d0JBRUFxckIsTUFBQXpvQixLQUFBc29CLE9BQUFqNEIsT0FBQSxNQUFBaTRCLE9BQUFsckI7OztnQkFJQW9yQixtQkFBQUMsTUFBQTdnQixLQUFBOztZQUdBLElBQUE0Z0Isa0JBQUE7Z0JBQ0FsUCxZQUFBcGlCLFFBQUEsMkJBQUFzeEI7O1lBR0EsT0FBQWxQOzs7SXJEMCtLTXVQLEtBQ0EsU0FBVTU3QixRQUFRQyxTQUFTQztRc0QzaUxqQztRQUVBLElBQUEySyxRQUFBM0ssb0JBQUE7UUFJQSxJQUFBMjdCLHNCQUNBLGtFQUNBLHVFQUNBLG9FQUNBO1FBZ0JBNzdCLE9BQUFDLFVBQUEsU0FBQW00QixhQUFBOUw7WUFDQSxJQUFBd1A7WUFDQSxJQUFBMTRCO1lBQ0EsSUFBQTZQO1lBQ0EsSUFBQW5RO1lBRUEsS0FBQXdwQixTQUFBO2dCQUFpQixPQUFBd1A7O1lBRWpCanhCLE1BQUE2SyxRQUFBNFcsUUFBQTNULE1BQUEsZ0JBQUFvakIsT0FBQUM7Z0JBQ0FsNUIsSUFBQWs1QixLQUFBL3hCLFFBQUE7Z0JBQ0E3RyxNQUFBeUgsTUFBQWtxQixLQUFBaUgsS0FBQUMsT0FBQSxHQUFBbjVCLElBQUFrekI7Z0JBQ0EvaUIsTUFBQXBJLE1BQUFrcUIsS0FBQWlILEtBQUFDLE9BQUFuNUIsSUFBQTtnQkFFQSxJQUFBTSxLQUFBO29CQUNBLElBQUEwNEIsT0FBQTE0QixRQUFBeTRCLGtCQUFBNXhCLFFBQUE3RyxRQUFBO3dCQUNBOztvQkFFQSxJQUFBQSxRQUFBO3dCQUNBMDRCLE9BQUExNEIsUUFBQTA0QixPQUFBMTRCLE9BQUEwNEIsT0FBQTE0QixXQUFBNlksU0FBQWhKOzJCQUNPO3dCQUNQNm9CLE9BQUExNEIsT0FBQTA0QixPQUFBMTRCLE9BQUEwNEIsT0FBQTE0QixPQUFBLE9BQUE2UDs7OztZQUtBLE9BQUE2b0I7OztJdERtakxNSSxLQUNBLFNBQVVsOEIsUUFBUUMsU0FBU0M7UXVEdm1MakM7UUFFQSxJQUFBMkssUUFBQTNLLG9CQUFBO1FBRUFGLE9BQUFDLFVBQ0E0SyxNQUFBcXFCLHlCQUlBLFNBQUFpSDtZQUNBLElBQUFDLE9BQUEsa0JBQUFDLEtBQUFsSCxVQUFBbUg7WUFDQSxJQUFBQyxpQkFBQXg2QixTQUFBSSxjQUFBO1lBQ0EsSUFBQXE2QjtZQVFBLFNBQUFDLFdBQUFwUTtnQkFDQSxJQUFBcVEsT0FBQXJRO2dCQUVBLElBQUErUCxNQUFBO29CQUVBRyxlQUFBSSxhQUFBLFFBQUFEO29CQUNBQSxPQUFBSCxlQUFBRzs7Z0JBR0FILGVBQUFJLGFBQUEsUUFBQUQ7Z0JBR0E7b0JBQ0FBLE1BQUFILGVBQUFHO29CQUNBRSxVQUFBTCxlQUFBSyxXQUFBTCxlQUFBSyxTQUFBM0gsUUFBQTtvQkFDQTRILE1BQUFOLGVBQUFNO29CQUNBQyxRQUFBUCxlQUFBTyxTQUFBUCxlQUFBTyxPQUFBN0gsUUFBQTtvQkFDQThILE1BQUFSLGVBQUFRLE9BQUFSLGVBQUFRLEtBQUE5SCxRQUFBO29CQUNBK0gsVUFBQVQsZUFBQVM7b0JBQ0FDLE1BQUFWLGVBQUFVO29CQUNBQyxVQUFBWCxlQUFBVyxTQUFBdEwsT0FBQSxhQUNBMkssZUFBQVcsV0FDQSxNQUFBWCxlQUFBVzs7O1lBSUFWLFlBQUFDLFdBQUFuN0IsT0FBQTY3QixTQUFBVDtZQVFBLGdCQUFBckUsZ0JBQUErRTtnQkFDQSxJQUFBdEIsU0FBQWp4QixNQUFBc3BCLFNBQUFpSixjQUFBWCxXQUFBVztnQkFDQSxPQUFBdEIsT0FBQWMsYUFBQUosVUFBQUksWUFDQWQsT0FBQWUsU0FBQUwsVUFBQUs7O2NBS0EsU0FBQVE7WUFDQSxnQkFBQWhGO2dCQUNBOzs7O0l2RGluTE1pRixLQUNBLFNBQVV0OUIsUUFBUUM7UXdEbHJMeEI7UUFJQSxJQUFBczlCLFFBQUE7UUFFQSxTQUFBQztZQUNBcjJCLEtBQUFQLFVBQUE7O1FBRUE0MkIsRUFBQWg2QixZQUFBLElBQUFpRDtRQUNBKzJCLEVBQUFoNkIsVUFBQTAzQixPQUFBO1FBQ0FzQyxFQUFBaDZCLFVBQUFxTCxPQUFBO1FBRUEsU0FBQTBwQixLQUFBNWhCO1lBQ0EsSUFBQXFlLE1BQUFwZSxPQUFBRDtZQUNBLElBQUFvTSxTQUFBO1lBQ0EsS0FFQSxJQUFBMGEsT0FBQUMsVUFBQUMsTUFBQSxHQUFBMzJCLE1BQUF1MkIsT0FJQXZJLElBQUFwRCxPQUFBK0wsTUFBQSxPQUFBMzJCLE1BQUE7WUFBQTIyQixNQUFBLElBRUE1YSxVQUFBL2IsSUFBQTRxQixPQUFBLEtBQUE2TCxTQUFBLElBQUFFLE1BQUEsUUFDQTtnQkFDQUQsV0FBQTFJLElBQUE0SSxXQUFBRCxPQUFBO2dCQUNBLElBQUFELFdBQUE7b0JBQ0EsVUFBQUY7O2dCQUVBQyxpQkFBQSxJQUFBQzs7WUFFQSxPQUFBM2E7O1FBR0EvaUIsT0FBQUMsVUFBQXM0Qjs7SXhEeXJMTXNGLEtBQ0EsU0FBVTc5QixRQUFRQyxTQUFTQztReUQ3dExqQztRQUVBLElBQUEySyxRQUFBM0ssb0JBQUE7UUFFQUYsT0FBQUMsVUFDQTRLLE1BQUFxcUIseUJBR0EsU0FBQWlIO1lBQ0E7Z0JBQ0EyQixPQUFBLFNBQUFBLE1BQUFqdkIsTUFBQXBNLE9BQUFzN0IsU0FBQUMsTUFBQUMsUUFBQUM7b0JBQ0EsSUFBQUM7b0JBQ0FBLE9BQUFwckIsS0FBQWxFLE9BQUEsTUFBQXlzQixtQkFBQTc0QjtvQkFFQSxJQUFBb0ksTUFBQXVwQixTQUFBMkosVUFBQTt3QkFDQUksT0FBQXByQixLQUFBLGlCQUFBb1csS0FBQTRVLFNBQUFLOztvQkFHQSxJQUFBdnpCLE1BQUFzcEIsU0FBQTZKLE9BQUE7d0JBQ0FHLE9BQUFwckIsS0FBQSxVQUFBaXJCOztvQkFHQSxJQUFBbnpCLE1BQUFzcEIsU0FBQThKLFNBQUE7d0JBQ0FFLE9BQUFwckIsS0FBQSxZQUFBa3JCOztvQkFHQSxJQUFBQyxXQUFBO3dCQUNBQyxPQUFBcHJCLEtBQUE7O29CQUdBaFIsU0FBQW84QixnQkFBQXhqQixLQUFBOztnQkFHQTRmLE1BQUEsU0FBQUEsS0FBQTFyQjtvQkFDQSxJQUFBeU8sUUFBQXZiLFNBQUFvOEIsT0FBQTdnQixNQUFBLElBQUErZ0IsT0FBQSxlQUEwRHh2QixPQUFBO29CQUMxRCxPQUFBeU8sUUFBQWdoQixtQkFBQWhoQixNQUFBOztnQkFHQWpPLFFBQUEsU0FBQUEsT0FBQVI7b0JBQ0ExSCxLQUFBMjJCLE1BQUFqdkIsTUFBQSxJQUFBc2EsS0FBQUMsUUFBQTs7O2NBTUEsU0FBQWlVO1lBQ0E7Z0JBQ0FTLE9BQUEsU0FBQUE7Z0JBQ0F2RCxNQUFBLFNBQUFBO29CQUE2Qjs7Z0JBQzdCbHJCLFFBQUEsU0FBQUE7Ozs7SXpEdXVMTWt2QixLQUNBLFNBQVV2K0IsUUFBUUMsU0FBU0M7UTBEenhMakM7UUFFQSxJQUFBMkssUUFBQTNLLG9CQUFBO1FBRUEsU0FBQTIxQjtZQUNBMXVCLEtBQUFxM0I7O1FBV0EzSSxtQkFBQXJ5QixVQUFBaTdCLE1BQUEsU0FBQUEsSUFBQXBJLFdBQUFDO1lBQ0FudkIsS0FBQXEzQixTQUFBenJCO2dCQUNBc2pCO2dCQUNBQzs7WUFFQSxPQUFBbnZCLEtBQUFxM0IsU0FBQXo3QixTQUFBOztRQVFBOHlCLG1CQUFBcnlCLFVBQUFrN0IsUUFBQSxTQUFBQSxNQUFBeDVCO1lBQ0EsSUFBQWlDLEtBQUFxM0IsU0FBQXQ1QixLQUFBO2dCQUNBaUMsS0FBQXEzQixTQUFBdDVCLE1BQUE7OztRQVlBMndCLG1CQUFBcnlCLFVBQUFrUyxVQUFBLFNBQUFBLFFBQUFoQjtZQUNBN0osTUFBQTZLLFFBQUF2TyxLQUFBcTNCLFVBQUEsU0FBQUcsZUFBQUM7Z0JBQ0EsSUFBQUEsTUFBQTtvQkFDQWxxQixHQUFBa3FCOzs7O1FBS0E1K0IsT0FBQUMsVUFBQTQxQjs7STFEZ3lMTWdKLEtBQ0EsU0FBVTcrQixRQUFRQyxTQUFTQztRMkRwMUxqQztRQUVBLElBQUEySyxRQUFBM0ssb0JBQUE7UUFDQSxJQUFBNCtCLGdCQUFBNStCLG9CQUFBO1FBQ0EsSUFBQXN6QixXQUFBdHpCLG9CQUFBO1FBQ0EsSUFBQTR5QixXQUFBNXlCLG9CQUFBO1FBQ0EsSUFBQTYrQixnQkFBQTcrQixvQkFBQTtRQUNBLElBQUE4K0IsY0FBQTkrQixvQkFBQTtRQUtBLFNBQUErK0IsNkJBQUEvUztZQUNBLElBQUFBLE9BQUEwTyxhQUFBO2dCQUNBMU8sT0FBQTBPLFlBQUFzRTs7O1FBVUFsL0IsT0FBQUMsVUFBQSxTQUFBNjFCLGdCQUFBNUo7WUFDQStTLDZCQUFBL1M7WUFHQSxJQUFBQSxPQUFBaVQsWUFBQUosY0FBQTdTLE9BQUFHLE1BQUE7Z0JBQ0FILE9BQUFHLE1BQUEyUyxZQUFBOVMsT0FBQWlULFNBQUFqVCxPQUFBRzs7WUFJQUgsT0FBQUksVUFBQUosT0FBQUk7WUFHQUosT0FBQTlpQixPQUFBMDFCLGNBQ0E1UyxPQUFBOWlCLE1BQ0E4aUIsT0FBQUksU0FDQUosT0FBQWdMO1lBSUFoTCxPQUFBSSxVQUFBemhCLE1BQUF3b0IsTUFDQW5ILE9BQUFJLFFBQUFxTCxjQUNBekwsT0FBQUksUUFBQUosT0FBQUUsZUFDQUYsT0FBQUk7WUFHQXpoQixNQUFBNkssVUFDQSw2REFDQSxTQUFBMHBCLGtCQUFBaFQ7dUJBQ0FGLE9BQUFJLFFBQUFGOztZQUlBLElBQUE0SyxVQUFBOUssT0FBQThLLFdBQUFsRSxTQUFBa0U7WUFFQSxPQUFBQSxRQUFBOUssUUFBQTlhLEtBQUEsU0FBQWl1QixvQkFBQXBpQjtnQkFDQWdpQiw2QkFBQS9TO2dCQUdBalAsU0FBQTdULE9BQUEwMUIsY0FDQTdoQixTQUFBN1QsTUFDQTZULFNBQUFxUCxTQUNBSixPQUFBa0w7Z0JBR0EsT0FBQW5hO2VBQ0csU0FBQXFpQixtQkFBQUM7Z0JBQ0gsS0FBQS9MLFNBQUErTCxTQUFBO29CQUNBTiw2QkFBQS9TO29CQUdBLElBQUFxVCxpQkFBQXRpQixVQUFBO3dCQUNBc2lCLE9BQUF0aUIsU0FBQTdULE9BQUEwMUIsY0FDQVMsT0FBQXRpQixTQUFBN1QsTUFDQW0yQixPQUFBdGlCLFNBQUFxUCxTQUNBSixPQUFBa0w7OztnQkFLQSxPQUFBeGtCLFFBQUFFLE9BQUF5c0I7Ozs7STNENjFMTUMsS0FDQSxTQUFVeC9CLFFBQVFDLFNBQVNDO1E0RGo3TGpDO1FBRUEsSUFBQTJLLFFBQUEzSyxvQkFBQTtRQVVBRixPQUFBQyxVQUFBLFNBQUE2K0IsY0FBQTExQixNQUFBa2pCLFNBQUFtVDtZQUVBNTBCLE1BQUE2SyxRQUFBK3BCLEtBQUEsU0FBQXBYLFVBQUEzVDtnQkFDQXRMLE9BQUFzTCxHQUFBdEwsTUFBQWtqQjs7WUFHQSxPQUFBbGpCOzs7STVEeTdMTXMyQixLQUNBLFNBQVUxL0IsUUFBUUM7UTZENThMeEI7UUFFQUQsT0FBQUMsVUFBQSxTQUFBdXpCLFNBQUEvd0I7WUFDQSxVQUFBQSxlQUFBazlCOzs7STdEbzlMTUMsS0FDQSxTQUFVNS9CLFFBQVFDO1E4RHg5THhCO1FBUUFELE9BQUFDLFVBQUEsU0FBQTgrQixjQUFBMVM7WUFJQSx1Q0FBQWdRLEtBQUFoUTs7O0k5RGcrTE13VCxLQUNBLFNBQVU3L0IsUUFBUUM7UStENytMeEI7UUFTQUQsT0FBQUMsVUFBQSxTQUFBKytCLFlBQUFHLFNBQUFXO1lBQ0EsT0FBQUEsY0FDQVgsUUFBQWxLLFFBQUEsb0JBQUE2SyxZQUFBN0ssUUFBQSxjQUNBa0s7OztJL0RxL0xNWSxLQUNBLFNBQVUvL0IsUUFBUUM7UWdFbGdNeEI7UUFRQSxTQUFBcXpCLE9BQUExc0I7WUFDQU8sS0FBQVA7O1FBR0Ewc0IsT0FBQTl2QixVQUFBK1MsV0FBQSxTQUFBQTtZQUNBLG1CQUFBcFAsS0FBQVAsVUFBQSxPQUFBTyxLQUFBUCxVQUFBOztRQUdBMHNCLE9BQUE5dkIsVUFBQW04QixhQUFBO1FBRUEzL0IsT0FBQUMsVUFBQXF6Qjs7SWhFeWdNTTBNLEtBQ0EsU0FBVWhnQyxRQUFRQyxTQUFTQztRaUU1aE1qQztRQUVBLElBQUFvekIsU0FBQXB6QixvQkFBQTtRQVFBLFNBQUFxekIsWUFBQTBNO1lBQ0EsV0FBQUEsYUFBQTtnQkFDQSxVQUFBLzdCLFVBQUE7O1lBR0EsSUFBQTRWO1lBQ0EzUyxLQUFBK0osVUFBQSxJQUFBMEIsUUFBQSxTQUFBc3RCLGdCQUFBcnRCO2dCQUNBaUgsaUJBQUFqSDs7WUFHQSxJQUFBc3RCLFFBQUFoNUI7WUFDQTg0QixTQUFBLFNBQUFyb0IsT0FBQWhSO2dCQUNBLElBQUF1NUIsTUFBQVosUUFBQTtvQkFFQTs7Z0JBR0FZLE1BQUFaLFNBQUEsSUFBQWpNLE9BQUExc0I7Z0JBQ0FrVCxlQUFBcW1CLE1BQUFaOzs7UUFPQWhNLFlBQUEvdkIsVUFBQTA3QixtQkFBQSxTQUFBQTtZQUNBLElBQUEvM0IsS0FBQW80QixRQUFBO2dCQUNBLE1BQUFwNEIsS0FBQW80Qjs7O1FBUUFoTSxZQUFBdGtCLFNBQUEsU0FBQUE7WUFDQSxJQUFBMkk7WUFDQSxJQUFBdW9CLFFBQUEsSUFBQTVNLFlBQUEsU0FBQTBNLFNBQUF0OEI7Z0JBQ0FpVSxTQUFBalU7O1lBRUE7Z0JBQ0F3OEI7Z0JBQ0F2b0I7OztRQUlBNVgsT0FBQUMsVUFBQXN6Qjs7SWpFbWlNTTZNLEtBQ0EsU0FBVXBnQyxRQUFRQztRa0U1bE14QjtRQXNCQUQsT0FBQUMsVUFBQSxTQUFBeXpCLE9BQUEyTTtZQUNBLGdCQUFBNVQsS0FBQXppQjtnQkFDQSxPQUFBcTJCLFNBQUE3eUIsTUFBQSxNQUFBeEQiLCJmaWxlIjoidXNlclByb2plY3RzLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIndlYnBhY2tKc29ucChbMV0se1xuXG4vKioqLyAwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0dmFyIF9yZWFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblx0XG5cdHZhciBfcmVhY3REb20gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblx0XG5cdHZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXHRcblx0dmFyIF9BcHAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczNSk7XG5cdFxuXHR2YXIgX0FwcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BcHApO1xuXHRcblx0dmFyIF9yZWR1eCA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KTtcblx0XG5cdHZhciBfcmVkdXhTYWdhID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MzgpO1xuXHRcblx0dmFyIF9yZWR1eFNhZ2EyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdXhTYWdhKTtcblx0XG5cdHZhciBfcmVhY3RSZWR1eCA9IF9fd2VicGFja19yZXF1aXJlX18oMTg0KTtcblx0XG5cdHZhciBfcmVkdXhEZXZ0b29sc0V4dGVuc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNzU0KTtcblx0XG5cdHZhciBfcmVkdWNlciA9IF9fd2VicGFja19yZXF1aXJlX18oNzU1KTtcblx0XG5cdHZhciBfc2FnYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc3Mik7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0Ly8gY3JlYXRlIHRoZSBzYWdhIG1pZGRsZXdhcmVcblx0dmFyIHNhZ2FNaWRkbGV3YXJlID0gKDAsIF9yZWR1eFNhZ2EyLmRlZmF1bHQpKCk7XG5cdFxuXHQvLyBkZXYgdG9vbHMgbWlkZGxld2FyZVxuXHQvKlxuXHQgQWt2byBSU1IgaXMgY292ZXJlZCBieSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlLlxuXHQgU2VlIG1vcmUgZGV0YWlscyBpbiB0aGUgbGljZW5zZS50eHQgZmlsZSBsb2NhdGVkIGF0IHRoZSByb290IGZvbGRlciBvZiB0aGVcblx0IEFrdm8gUlNSIG1vZHVsZS4gRm9yIGFkZGl0aW9uYWwgZGV0YWlscyBvbiB0aGUgR05VIGxpY2Vuc2UgcGxlYXNlIHNlZVxuXHQgPCBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sID4uXG5cdCAqL1xuXHRcblx0dmFyIHJlZHV4RGV2VG9vbHMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpO1xuXHRcblx0dmFyIHN0b3JlID0gdm9pZCAwO1xuXHRpZiAocmVkdXhEZXZUb29scykge1xuXHQgICAgc3RvcmUgPSAoMCwgX3JlZHV4LmNyZWF0ZVN0b3JlKShfcmVkdWNlci5yZWR1Y2VyLCAoMCwgX3JlZHV4LmNvbXBvc2UpKCgwLCBfcmVkdXguYXBwbHlNaWRkbGV3YXJlKShzYWdhTWlkZGxld2FyZSksIHJlZHV4RGV2VG9vbHMpKTtcblx0fSBlbHNlIHtcblx0ICAgIHN0b3JlID0gKDAsIF9yZWR1eC5jcmVhdGVTdG9yZSkoX3JlZHVjZXIucmVkdWNlciwgKDAsIF9yZWR1eC5hcHBseU1pZGRsZXdhcmUpKHNhZ2FNaWRkbGV3YXJlKSk7XG5cdH1cblx0XG5cdHNhZ2FNaWRkbGV3YXJlLnJ1bihfc2FnYXMud2F0Y2hlclNhZ2EpO1xuXHRcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXHQgICAgX3JlYWN0RG9tMi5kZWZhdWx0LnJlbmRlcihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICBfcmVhY3RSZWR1eC5Qcm92aWRlcixcblx0ICAgICAgICB7IHN0b3JlOiBzdG9yZSB9LFxuXHQgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9BcHAyLmRlZmF1bHQsIG51bGwpXG5cdCAgICApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJQcm9qZWN0c1wiKSk7XG5cdH0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNzM1OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cdFxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXHRcblx0dmFyIF9yZWFjdFJlZHV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODQpO1xuXHRcblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNzM2KTtcblx0XG5cdHZhciBfY29uc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczNyk7XG5cdFxuXHR2YXIgYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jb25zdCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHRmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblx0XG5cdGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBa3ZvIFJTUiBpcyBjb3ZlcmVkIGJ5IHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBtb3JlIGRldGFpbHMgaW4gdGhlIGxpY2Vuc2UudHh0IGZpbGUgbG9jYXRlZCBhdCB0aGUgcm9vdCBmb2xkZXIgb2YgdGhlXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFrdm8gUlNSIG1vZHVsZS4gRm9yIGFkZGl0aW9uYWwgZGV0YWlscyBvbiB0aGUgR05VIGxpY2Vuc2UgcGxlYXNlIHNlZVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWwgPi5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdFxuXHR2YXIgSXNSZXN0cmljdGVkID0gZnVuY3Rpb24gSXNSZXN0cmljdGVkKF9yZWYpIHtcblx0ICAgIHZhciBfID0gX3JlZi5fLFxuXHQgICAgICAgIGlzX3Jlc3RyaWN0ZWQgPSBfcmVmLmlzX3Jlc3RyaWN0ZWQsXG5cdCAgICAgICAgb25DaGFuZ2VJc1Jlc3RyaWN0ZWQgPSBfcmVmLm9uQ2hhbmdlSXNSZXN0cmljdGVkO1xuXHRcblx0ICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICBcInNwYW5cIixcblx0ICAgICAgICBudWxsLFxuXHQgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgICBcImxhYmVsXCIsXG5cdCAgICAgICAgICAgIG51bGwsXG5cdCAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuXHQgICAgICAgICAgICAgICAgaWQ6IFwiaXNfcmVzdHJpY3RlZFwiLFxuXHQgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuXHQgICAgICAgICAgICAgICAgY2hlY2tlZDogaXNfcmVzdHJpY3RlZCxcblx0ICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZUlzUmVzdHJpY3RlZFxuXHQgICAgICAgICAgICB9KSxcblx0ICAgICAgICAgICAgXyhcInJlc3RyaWN0X2FjY2Vzc1wiKVxuXHQgICAgICAgIClcblx0ICAgICk7XG5cdH07XG5cdFxuXHR2YXIgUHJvamVjdCA9IGZ1bmN0aW9uIFByb2plY3QoX3JlZjIpIHtcblx0ICAgIHZhciBfID0gX3JlZjIuXyxcblx0ICAgICAgICBwcm9qZWN0ID0gX3JlZjIucHJvamVjdCxcblx0ICAgICAgICB1c2VyX3Byb2plY3RzID0gX3JlZjIudXNlcl9wcm9qZWN0cyxcblx0ICAgICAgICBpc19yZXN0cmljdGVkID0gX3JlZjIuaXNfcmVzdHJpY3RlZCxcblx0ICAgICAgICBvbkNoYW5nZVByb2plY3RTZWxlY3RlZCA9IF9yZWYyLm9uQ2hhbmdlUHJvamVjdFNlbGVjdGVkO1xuXHRcblx0ICAgIHZhciBjaGVja2VkID0gdXNlcl9wcm9qZWN0cyAmJiAoMCwgX3V0aWxzLmluQXJyYXkpKHByb2plY3QuaWQsIHVzZXJfcHJvamVjdHMpLFxuXHQgICAgICAgIGRpc2FibGVkID0gaXNfcmVzdHJpY3RlZCA/IFwiXCIgOiBcImRpc2FibGVkXCIsXG5cdCAgICAgICAgcHJvamVjdFNlbGVjdGVkID0gY2hlY2tlZCA/IFwiIHByb2plY3RTZWxlY3RlZFwiIDogXCJcIixcblx0ICAgICAgICB0ckNsYXNzTmFtZSA9IGRpc2FibGVkICsgcHJvamVjdFNlbGVjdGVkLFxuXHQgICAgICAgIGlkQ2xhc3NOYW1lID0gZGlzYWJsZWQgKyBcIiBpZFwiO1xuXHQgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgIFwidHJcIixcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIGtleTogcHJvamVjdC5pZCxcblx0ICAgICAgICAgICAgaWQ6IHByb2plY3QuaWQsXG5cdCAgICAgICAgICAgIG9uQ2xpY2s6IG9uQ2hhbmdlUHJvamVjdFNlbGVjdGVkLFxuXHQgICAgICAgICAgICBjbGFzc05hbWU6IHRyQ2xhc3NOYW1lXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgICAgXCJ0ZFwiLFxuXHQgICAgICAgICAgICBudWxsLFxuXHQgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcblx0ICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0LmlkLFxuXHQgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuXHQgICAgICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcblx0ICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhaXNfcmVzdHJpY3RlZCxcblx0ICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlXG5cdCAgICAgICAgICAgIH0pXG5cdCAgICAgICAgKSxcblx0ICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgICAgXCJ0ZFwiLFxuXHQgICAgICAgICAgICB7IGNsYXNzTmFtZTogaWRDbGFzc05hbWUgfSxcblx0ICAgICAgICAgICAgcHJvamVjdC5pZFxuXHQgICAgICAgICksXG5cdCAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgICAgIFwidGRcIixcblx0ICAgICAgICAgICAgbnVsbCxcblx0ICAgICAgICAgICAgcHJvamVjdC50aXRsZSB8fCBfKFwibm9fdGl0bGVcIilcblx0ICAgICAgICApXG5cdCAgICApO1xuXHR9O1xuXHRcblx0dmFyIFNlbGVjdEFsbCA9IGZ1bmN0aW9uIFNlbGVjdEFsbChfcmVmMykge1xuXHQgICAgdmFyIF8gPSBfcmVmMy5fLFxuXHQgICAgICAgIHNlbGVjdEFsbCA9IF9yZWYzLnNlbGVjdEFsbCxcblx0ICAgICAgICBvbkNoYW5nZVByb2plY3RTZWxlY3RBbGwgPSBfcmVmMy5vbkNoYW5nZVByb2plY3RTZWxlY3RBbGwsXG5cdCAgICAgICAgaXNfcmVzdHJpY3RlZCA9IF9yZWYzLmlzX3Jlc3RyaWN0ZWQ7XG5cdFxuXHQgICAgdmFyIGRpc2FibGVkID0gaXNfcmVzdHJpY3RlZCA/IGZhbHNlIDogdHJ1ZSxcblx0ICAgICAgICBjbGFzc05hbWUgPSBcInNlbGVjdEFsbFByb2plY3RzXCIgKyAoaXNfcmVzdHJpY3RlZCA/IFwiXCIgOiBcIiBkaXNhYmxlZFwiKTtcblx0ICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICBcImRpdlwiLFxuXHQgICAgICAgIHsgY2xhc3NOYW1lOiBpc19yZXN0cmljdGVkID8gdW5kZWZpbmVkIDogXCJkaXNhYmxlZFwiIH0sXG5cdCAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgICAgIFwiYnV0dG9uXCIsXG5cdCAgICAgICAgICAgIHsgb25DbGljazogb25DaGFuZ2VQcm9qZWN0U2VsZWN0QWxsLCBkaXNhYmxlZDogZGlzYWJsZWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdCAgICAgICAgICAgIHNlbGVjdEFsbCA/IF8oXCJjaGVja19hbGxfcHJvamVjdHNcIikgOiBfKFwidW5jaGVja19hbGxfcHJvamVjdHNcIilcblx0ICAgICAgICApXG5cdCAgICApO1xuXHR9O1xuXHRcblx0dmFyIEVycm9yID0gZnVuY3Rpb24gRXJyb3IoX3JlZjQpIHtcblx0ICAgIHZhciBfID0gX3JlZjQuXyxcblx0ICAgICAgICBlcnJvciA9IF9yZWY0LmVycm9yO1xuXHRcblx0ICAgIHJldHVybiBlcnJvciA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgIFwiZGl2XCIsXG5cdCAgICAgICAgbnVsbCxcblx0ICAgICAgICBfKFwiYW5fZXJyb3Jfb2NjdXJlZFwiKSArIGVycm9yLm1lc3NhZ2Vcblx0ICAgICkgOiBudWxsO1xuXHR9O1xuXHRcblx0dmFyIFByb2plY3RzID0gZnVuY3Rpb24gUHJvamVjdHMoX3JlZjUpIHtcblx0ICAgIHZhciBfID0gX3JlZjUuXyxcblx0ICAgICAgICBlcnJvciA9IF9yZWY1LmVycm9yLFxuXHQgICAgICAgIGFsbF9wcm9qZWN0cyA9IF9yZWY1LmFsbF9wcm9qZWN0cyxcblx0ICAgICAgICB1c2VyX3Byb2plY3RzID0gX3JlZjUudXNlcl9wcm9qZWN0cyxcblx0ICAgICAgICBpc19yZXN0cmljdGVkID0gX3JlZjUuaXNfcmVzdHJpY3RlZCxcblx0ICAgICAgICBzZWxlY3RBbGwgPSBfcmVmNS5zZWxlY3RBbGwsXG5cdCAgICAgICAgb25DaGFuZ2VJc1Jlc3RyaWN0ZWQgPSBfcmVmNS5vbkNoYW5nZUlzUmVzdHJpY3RlZCxcblx0ICAgICAgICBvbkNoYW5nZVByb2plY3RTZWxlY3RBbGwgPSBfcmVmNS5vbkNoYW5nZVByb2plY3RTZWxlY3RBbGwsXG5cdCAgICAgICAgb25DaGFuZ2VQcm9qZWN0U2VsZWN0ZWQgPSBfcmVmNS5vbkNoYW5nZVByb2plY3RTZWxlY3RlZDtcblx0XG5cdCAgICB2YXIgY2xhc3NOYW1lID0gaXNfcmVzdHJpY3RlZCA/IFwiXCIgOiBcImRpc2FibGVkXCI7XG5cdCAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgXCJzcGFuXCIsXG5cdCAgICAgICAgbnVsbCxcblx0ICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChFcnJvciwgeyBfOiBfLCBlcnJvcjogZXJyb3IgfSksXG5cdCAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSXNSZXN0cmljdGVkLCB7XG5cdCAgICAgICAgICAgIF86IF8sXG5cdCAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQ6IGlzX3Jlc3RyaWN0ZWQsXG5cdCAgICAgICAgICAgIG9uQ2hhbmdlSXNSZXN0cmljdGVkOiBvbkNoYW5nZUlzUmVzdHJpY3RlZFxuXHQgICAgICAgIH0pLFxuXHQgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNlbGVjdEFsbCwge1xuXHQgICAgICAgICAgICBfOiBfLFxuXHQgICAgICAgICAgICBzZWxlY3RBbGw6IHNlbGVjdEFsbCxcblx0ICAgICAgICAgICAgb25DaGFuZ2VQcm9qZWN0U2VsZWN0QWxsOiBvbkNoYW5nZVByb2plY3RTZWxlY3RBbGwsXG5cdCAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQ6IGlzX3Jlc3RyaWN0ZWRcblx0ICAgICAgICB9KSxcblx0ICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgICAgXCJ0YWJsZVwiLFxuXHQgICAgICAgICAgICBudWxsLFxuXHQgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgICAgICAgIFwidGhlYWRcIixcblx0ICAgICAgICAgICAgICAgIG51bGwsXG5cdCAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgbnVsbCxcblx0ICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF8oXCJncmFudF9hY2Nlc3NcIilcblx0ICAgICAgICAgICAgICAgICAgICApLFxuXHQgICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgXyhcInByb2plY3RfaWRcIilcblx0ICAgICAgICAgICAgICAgICAgICApLFxuXHQgICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgXyhcInByb2plY3RfdGl0bGVcIilcblx0ICAgICAgICAgICAgICAgICAgICApXG5cdCAgICAgICAgICAgICAgICApXG5cdCAgICAgICAgICAgICksXG5cdCAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuXHQgICAgICAgICAgICAgICAgbnVsbCxcblx0ICAgICAgICAgICAgICAgIGFsbF9wcm9qZWN0cy5tYXAoZnVuY3Rpb24gKHByb2plY3QpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvamVjdCwge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfOiBfLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb2plY3QuaWQsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3QsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHM6IHVzZXJfcHJvamVjdHMsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQ6IGlzX3Jlc3RyaWN0ZWQsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUHJvamVjdFNlbGVjdGVkOiBvbkNoYW5nZVByb2plY3RTZWxlY3RlZFxuXHQgICAgICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICAgICAgfSlcblx0ICAgICAgICAgICAgKVxuXHQgICAgICAgIClcblx0ICAgICk7XG5cdH07XG5cdFxuXHR2YXIgQXBwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0ICAgIF9pbmhlcml0cyhBcHAsIF9SZWFjdCRDb21wb25lbnQpO1xuXHRcblx0ICAgIGZ1bmN0aW9uIEFwcChwcm9wcykge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHApO1xuXHRcblx0ICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXBwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXHRcblx0ICAgICAgICBfdGhpcy50b2dnbGVQcm9qZWN0U2VsZWN0ZWQgPSBfdGhpcy50b2dnbGVQcm9qZWN0U2VsZWN0ZWQuYmluZChfdGhpcyk7XG5cdCAgICAgICAgX3RoaXMudG9nZ2xlSXNSZXN0cmljdGVkID0gX3RoaXMudG9nZ2xlSXNSZXN0cmljdGVkLmJpbmQoX3RoaXMpO1xuXHQgICAgICAgIF90aGlzLnRvZ2dsZVByb2plY3RTZWxlY3RBbGwgPSBfdGhpcy50b2dnbGVQcm9qZWN0U2VsZWN0QWxsLmJpbmQoX3RoaXMpO1xuXHQgICAgICAgIF90aGlzLl8gPSBfdGhpcy5fLmJpbmQoX3RoaXMpO1xuXHQgICAgICAgIHJldHVybiBfdGhpcztcblx0ICAgIH1cblx0XG5cdCAgICAvLyBUcmFuc2xhdGlvbiBoYW5kbGluZ1xuXHRcblx0XG5cdCAgICBfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuXHQgICAgICAgIGtleTogXCJfXCIsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF8ocykge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zdHJpbmdzICYmIHRoaXMucHJvcHMuc3RyaW5nc1tzXTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiBcInRvZ2dsZUlzUmVzdHJpY3RlZFwiLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVJc1Jlc3RyaWN0ZWQoZSkge1xuXHQgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlSXNSZXN0cmljdGVkKGUudGFyZ2V0LmNoZWNrZWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6IFwidG9nZ2xlUHJvamVjdFNlbGVjdEFsbFwiLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVQcm9qZWN0U2VsZWN0QWxsKGUpIHtcblx0ICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0ICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZVNlbGVjdEFsbCgpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6IFwidG9nZ2xlUHJvamVjdFNlbGVjdGVkXCIsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZVByb2plY3RTZWxlY3RlZChlKSB7XG5cdCAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdCAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cdCAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaWQgPSBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZVByb2plY3RTZWxlY3Rpb24oaWQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0ICAgICAgICAgICAgdmFyIHVzZXJJZCA9ICgwLCBfdXRpbHMuZGF0YUZyb21FbGVtZW50KShcInVzZXItdG8tcmVzdHJpY3RcIikuaWQ7XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0U3RvcmUoeyB1c2VySWQ6IHVzZXJJZCB9KTtcblx0XG5cdCAgICAgICAgICAgIHZhciBzdHJpbmdzID0gKDAsIF91dGlscy5kYXRhRnJvbUVsZW1lbnQpKFwidXNlci1wcm9qZWN0cy10ZXh0XCIpO1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLnNldFN0b3JlKHsgc3RyaW5nczogc3RyaW5ncyB9KTtcblx0XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMub25GZXRjaFVzZXJQcm9qZWN0cyh1c2VySWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdCAgICAgICAgICAgICAgICBpc19yZXN0cmljdGVkID0gX3Byb3BzLmlzX3Jlc3RyaWN0ZWQsXG5cdCAgICAgICAgICAgICAgICBzZWxlY3RBbGwgPSBfcHJvcHMuc2VsZWN0QWxsLFxuXHQgICAgICAgICAgICAgICAgYWxsX3Byb2plY3RzID0gX3Byb3BzLmFsbF9wcm9qZWN0cyxcblx0ICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHMgPSBfcHJvcHMudXNlcl9wcm9qZWN0cyxcblx0ICAgICAgICAgICAgICAgIGVycm9yID0gX3Byb3BzLmVycm9yO1xuXHRcblx0ICAgICAgICAgICAgcmV0dXJuIGFsbF9wcm9qZWN0cyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByb2plY3RzLCB7XG5cdCAgICAgICAgICAgICAgICBfOiB0aGlzLl8sXG5cdCAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG5cdCAgICAgICAgICAgICAgICBpc19yZXN0cmljdGVkOiBpc19yZXN0cmljdGVkLFxuXHQgICAgICAgICAgICAgICAgc2VsZWN0QWxsOiBzZWxlY3RBbGwsXG5cdCAgICAgICAgICAgICAgICBhbGxfcHJvamVjdHM6IGFsbF9wcm9qZWN0cyxcblx0ICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHM6IHVzZXJfcHJvamVjdHMsXG5cdCAgICAgICAgICAgICAgICBvbkNoYW5nZUlzUmVzdHJpY3RlZDogdGhpcy50b2dnbGVJc1Jlc3RyaWN0ZWQsXG5cdCAgICAgICAgICAgICAgICBvbkNoYW5nZVByb2plY3RTZWxlY3RBbGw6IHRoaXMudG9nZ2xlUHJvamVjdFNlbGVjdEFsbCxcblx0ICAgICAgICAgICAgICAgIG9uQ2hhbmdlUHJvamVjdFNlbGVjdGVkOiB0aGlzLnRvZ2dsZVByb2plY3RTZWxlY3RlZFxuXHQgICAgICAgICAgICB9KSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgICAgICAgXCJkaXZcIixcblx0ICAgICAgICAgICAgICAgIG51bGwsXG5cdCAgICAgICAgICAgICAgICAoMCwgX3V0aWxzLl8pKFwibG9hZGluZ1wiKVxuXHQgICAgICAgICAgICApO1xuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblx0XG5cdCAgICByZXR1cm4gQXBwO1xuXHR9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXHRcblx0dmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuXHQgICAgdmFyIGZldGNoaW5nID0gc3RhdGUuZmV0Y2hpbmcsXG5cdCAgICAgICAgZXJyb3IgPSBzdGF0ZS5lcnJvcixcblx0ICAgICAgICBhbGxfcHJvamVjdHMgPSBzdGF0ZS5hbGxfcHJvamVjdHMsXG5cdCAgICAgICAgaXNfcmVzdHJpY3RlZCA9IHN0YXRlLmlzX3Jlc3RyaWN0ZWQsXG5cdCAgICAgICAgc2VsZWN0QWxsID0gc3RhdGUuc2VsZWN0QWxsLFxuXHQgICAgICAgIHVzZXJfcHJvamVjdHMgPSBzdGF0ZS51c2VyX3Byb2plY3RzLFxuXHQgICAgICAgIHN0cmluZ3MgPSBzdGF0ZS5zdHJpbmdzO1xuXHRcblx0ICAgIHJldHVybiB7IGZldGNoaW5nOiBmZXRjaGluZywgZXJyb3I6IGVycm9yLCBhbGxfcHJvamVjdHM6IGFsbF9wcm9qZWN0cywgaXNfcmVzdHJpY3RlZDogaXNfcmVzdHJpY3RlZCwgc2VsZWN0QWxsOiBzZWxlY3RBbGwsIHVzZXJfcHJvamVjdHM6IHVzZXJfcHJvamVjdHMsIHN0cmluZ3M6IHN0cmluZ3MgfTtcblx0fTtcblx0XG5cdHZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgb25GZXRjaFVzZXJQcm9qZWN0czogZnVuY3Rpb24gb25GZXRjaFVzZXJQcm9qZWN0cyh1c2VySWQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogYy5BUElfR0VUX0lOSVQsIGRhdGE6IHsgdXNlcklkOiB1c2VySWQgfSB9KTtcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHNldFN0b3JlOiBmdW5jdGlvbiBzZXRTdG9yZShkYXRhKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IGMuU0VUX1NUT1JFLCBkYXRhOiBkYXRhIH0pO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgb25VcGRhdGVQcm9qZWN0U2VsZWN0aW9uOiBmdW5jdGlvbiBvblVwZGF0ZVByb2plY3RTZWxlY3Rpb24ocHJvamVjdElkKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IGMuVVBEQVRFX1BST0pFQ1RfU0VMRUNUSU9OLCBkYXRhOiB7IHByb2plY3RJZDogcHJvamVjdElkIH0gfSk7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBvblVwZGF0ZUlzUmVzdHJpY3RlZDogZnVuY3Rpb24gb25VcGRhdGVJc1Jlc3RyaWN0ZWQoaXNfcmVzdHJpY3RlZCkge1xuXHQgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBjLlVQREFURV9JU19SRVNUUklDVEVELCBkYXRhOiB7IGlzX3Jlc3RyaWN0ZWQ6IGlzX3Jlc3RyaWN0ZWQgfSB9KTtcblx0ICAgICAgICB9LFxuXHQgICAgICAgIG9uVXBkYXRlU2VsZWN0QWxsOiBmdW5jdGlvbiBvblVwZGF0ZVNlbGVjdEFsbCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogYy5VUERBVEVfU0VMRUNUX0FMTF9QUk9KRUNUUyB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9yZWFjdFJlZHV4LmNvbm5lY3QpKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNzM2OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kYXRhRnJvbUVsZW1lbnQgPSBleHBvcnRzLmluQXJyYXkgPSBleHBvcnRzLmVuZHBvaW50cyA9IHVuZGVmaW5lZDtcblx0XG5cdHZhciBfc3RvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwNCk7XG5cdFxuXHR2YXIgX3N0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0b3JlKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHR2YXIgZW5kcG9pbnRzID0gZXhwb3J0cy5lbmRwb2ludHMgPSB7XG5cdCAgICB1c2VyX3Byb2plY3RzX2FjY2VzczogZnVuY3Rpb24gdXNlcl9wcm9qZWN0c19hY2Nlc3MoaWQpIHtcblx0ICAgICAgICByZXR1cm4gXCIvcmVzdC92MS91c2VyX3Byb2plY3RzX2FjY2Vzcy9cIiArIGlkICsgXCIvP2Zvcm1hdD1qc29uXCI7XG5cdCAgICB9XG5cdH07IC8qXG5cdCAgICAgICBBa3ZvIFJTUiBpcyBjb3ZlcmVkIGJ5IHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UuXG5cdCAgICAgICBTZWUgbW9yZSBkZXRhaWxzIGluIHRoZSBsaWNlbnNlLnR4dCBmaWxlIGxvY2F0ZWQgYXQgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZVxuXHQgICAgICAgQWt2byBSU1IgbW9kdWxlLiBGb3IgYWRkaXRpb25hbCBkZXRhaWxzIG9uIHRoZSBHTlUgbGljZW5zZSBwbGVhc2Ugc2VlXG5cdCAgICAgICA8IGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWwgPi5cblx0ICAgICovXG5cdFxuXHR2YXIgaW5BcnJheSA9IGV4cG9ydHMuaW5BcnJheSA9IGZ1bmN0aW9uIGluQXJyYXkob2JqLCBhcnIpIHtcblx0ICAgIHJldHVybiBhcnIgJiYgYXJyLmluZGV4T2Yob2JqKSAhPT0gLTE7XG5cdH07XG5cdFxuXHR2YXIgZGF0YUZyb21FbGVtZW50ID0gZXhwb3J0cy5kYXRhRnJvbUVsZW1lbnQgPSBmdW5jdGlvbiBkYXRhRnJvbUVsZW1lbnQoZWxlbWVudE5hbWUpIHtcblx0ICAgIHJldHVybiBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnROYW1lKS5pbm5lckhUTUwpO1xuXHR9O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNzM3OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0Lypcblx0ICAgIEFrdm8gUlNSIGlzIGNvdmVyZWQgYnkgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZS5cblx0ICAgIFNlZSBtb3JlIGRldGFpbHMgaW4gdGhlIGxpY2Vuc2UudHh0IGZpbGUgbG9jYXRlZCBhdCB0aGUgcm9vdCBmb2xkZXIgb2YgdGhlXG5cdCAgICBBa3ZvIFJTUiBtb2R1bGUuIEZvciBhZGRpdGlvbmFsIGRldGFpbHMgb24gdGhlIEdOVSBsaWNlbnNlIHBsZWFzZSBzZWVcblx0ICAgIDwgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbCA+LlxuXHQgKi9cblx0XG5cdC8vIGFjdGlvbiB0eXBlc1xuXHR2YXIgLy9cblx0U0VUX1NUT1JFID0gZXhwb3J0cy5TRVRfU1RPUkUgPSBcIlNFVF9TVE9SRVwiLFxuXHRcblx0Ly9cblx0QVBJX0dFVF9JTklUID0gZXhwb3J0cy5BUElfR0VUX0lOSVQgPSBcIkFQSV9HRVRfSU5JVFwiLFxuXHQgICAgQVBJX0dFVF9TVUNDRVNTID0gZXhwb3J0cy5BUElfR0VUX1NVQ0NFU1MgPSBcIkFQSV9HRVRfU1VDQ0VTU1wiLFxuXHQgICAgQVBJX0dFVF9GQUlMVVJFID0gZXhwb3J0cy5BUElfR0VUX0ZBSUxVUkUgPSBcIkFQSV9HRVRfRkFJTFVSRVwiLFxuXHRcblx0Ly9cblx0QVBJX1BVVF9JTklUID0gZXhwb3J0cy5BUElfUFVUX0lOSVQgPSBcIkFQSV9QVVRfSU5JVFwiLFxuXHQgICAgQVBJX1BVVF9TVUNDRVNTID0gZXhwb3J0cy5BUElfUFVUX1NVQ0NFU1MgPSBcIkFQSV9QVVRfU1VDQ0VTU1wiLFxuXHQgICAgQVBJX1BVVF9GQUlMVVJFID0gZXhwb3J0cy5BUElfUFVUX0ZBSUxVUkUgPSBcIkFQSV9QVVRfRkFJTFVSRVwiLFxuXHRcblx0Ly9cblx0VVBEQVRFX1BST0pFQ1RfU0VMRUNUSU9OID0gZXhwb3J0cy5VUERBVEVfUFJPSkVDVF9TRUxFQ1RJT04gPSBcIlVQREFURV9QUk9KRUNUX1NFTEVDVElPTlwiLFxuXHQgICAgVVBEQVRFX0lTX1JFU1RSSUNURUQgPSBleHBvcnRzLlVQREFURV9JU19SRVNUUklDVEVEID0gXCJVUERBVEVfSVNfUkVTVFJJQ1RFRFwiLFxuXHQgICAgVVBEQVRFX1NFTEVDVF9BTExfUFJPSkVDVFMgPSBleHBvcnRzLlVQREFURV9TRUxFQ1RfQUxMX1BST0pFQ1RTID0gXCJVUERBVEVfU0VMRUNUX0FMTF9QUk9KRUNUU1wiO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNzM4OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMudXRpbHMgPSBleHBvcnRzLmVmZmVjdHMgPSBleHBvcnRzLmRldGFjaCA9IGV4cG9ydHMuQ0FOQ0VMID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMudGhyb3R0bGUgPSBleHBvcnRzLnRha2VMYXRlc3QgPSBleHBvcnRzLnRha2VFdmVyeSA9IGV4cG9ydHMuYnVmZmVycyA9IGV4cG9ydHMuY2hhbm5lbCA9IGV4cG9ydHMuZXZlbnRDaGFubmVsID0gZXhwb3J0cy5FTkQgPSBleHBvcnRzLnJ1blNhZ2EgPSB1bmRlZmluZWQ7XG5cdFxuXHR2YXIgX3J1blNhZ2EgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3MzkpO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdydW5TYWdhJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX3J1blNhZ2EucnVuU2FnYTtcblx0ICB9XG5cdH0pO1xuXHRcblx0dmFyIF9jaGFubmVsID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQ3KTtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRU5EJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX2NoYW5uZWwuRU5EO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZXZlbnRDaGFubmVsJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX2NoYW5uZWwuZXZlbnRDaGFubmVsO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2hhbm5lbCcsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9jaGFubmVsLmNoYW5uZWw7XG5cdCAgfVxuXHR9KTtcblx0XG5cdHZhciBfYnVmZmVycyA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0OCk7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2J1ZmZlcnMnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfYnVmZmVycy5idWZmZXJzO1xuXHQgIH1cblx0fSk7XG5cdFxuXHR2YXIgX3NhZ2FIZWxwZXJzID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQ0KTtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGFrZUV2ZXJ5Jywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX3NhZ2FIZWxwZXJzLnRha2VFdmVyeTtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Rha2VMYXRlc3QnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfc2FnYUhlbHBlcnMudGFrZUxhdGVzdDtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Rocm90dGxlJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX3NhZ2FIZWxwZXJzLnRocm90dGxlO1xuXHQgIH1cblx0fSk7XG5cdFxuXHR2YXIgX3V0aWxzID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQwKTtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVsYXknLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfdXRpbHMuZGVsYXk7XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDQU5DRUwnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfdXRpbHMuQ0FOQ0VMO1xuXHQgIH1cblx0fSk7XG5cdFxuXHR2YXIgX2lvID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQzKTtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGV0YWNoJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX2lvLmRldGFjaDtcblx0ICB9XG5cdH0pO1xuXHRcblx0dmFyIF9taWRkbGV3YXJlID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzUxKTtcblx0XG5cdHZhciBfbWlkZGxld2FyZTIgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWlkZGxld2FyZSk7XG5cdFxuXHR2YXIgX2VmZmVjdHMgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NTIpO1xuXHRcblx0dmFyIGVmZmVjdHMgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2VmZmVjdHMpO1xuXHRcblx0dmFyIF91dGlsczIgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NTMpO1xuXHRcblx0dmFyIHV0aWxzID0gLyojX19QVVJFX18qL19pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsczIpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBfbWlkZGxld2FyZTIuZGVmYXVsdDtcblx0ZXhwb3J0cy5lZmZlY3RzID0gZWZmZWN0cztcblx0ZXhwb3J0cy51dGlscyA9IHV0aWxzO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNzM5OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7J3VzZSBzdHJpY3QnO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5ydW5TYWdhID0gcnVuU2FnYTtcblx0XG5cdHZhciBfdXRpbHMgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDApO1xuXHRcblx0dmFyIF9wcm9jID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQxKTtcblx0XG5cdHZhciBfcHJvYzIgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvYyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0dmFyIFJVTl9TQUdBX1NJR05BVFVSRSA9ICdydW5TYWdhKHN0b3JlSW50ZXJmYWNlLCBzYWdhLCAuLi5hcmdzKSc7XG5cdHZhciBOT05fR0VORVJBVE9SX0VSUiA9IFJVTl9TQUdBX1NJR05BVFVSRSArICc6IHNhZ2EgYXJndW1lbnQgbXVzdCBiZSBhIEdlbmVyYXRvciBmdW5jdGlvbiEnO1xuXHRcblx0ZnVuY3Rpb24gcnVuU2FnYShzdG9yZUludGVyZmFjZSwgc2FnYSkge1xuXHQgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgfVxuXHRcblx0ICB2YXIgaXRlcmF0b3IgPSB2b2lkIDA7XG5cdFxuXHQgIGlmIChfdXRpbHMuaXMuaXRlcmF0b3Ioc3RvcmVJbnRlcmZhY2UpKSB7XG5cdCAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcblx0ICAgICAgKDAsIF91dGlscy5sb2cpKCd3YXJuJywgJ3J1blNhZ2EoaXRlcmF0b3IsIHN0b3JlSW50ZXJmYWNlKSBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mICcgKyBSVU5fU0FHQV9TSUdOQVRVUkUpO1xuXHQgICAgfVxuXHQgICAgaXRlcmF0b3IgPSBzdG9yZUludGVyZmFjZTtcblx0ICAgIHN0b3JlSW50ZXJmYWNlID0gc2FnYTtcblx0ICB9IGVsc2Uge1xuXHQgICAgKDAsIF91dGlscy5jaGVjaykoc2FnYSwgX3V0aWxzLmlzLmZ1bmMsIE5PTl9HRU5FUkFUT1JfRVJSKTtcblx0ICAgIGl0ZXJhdG9yID0gc2FnYS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuXHQgICAgKDAsIF91dGlscy5jaGVjaykoaXRlcmF0b3IsIF91dGlscy5pcy5pdGVyYXRvciwgTk9OX0dFTkVSQVRPUl9FUlIpO1xuXHQgIH1cblx0XG5cdCAgdmFyIF9zdG9yZUludGVyZmFjZSA9IHN0b3JlSW50ZXJmYWNlLFxuXHQgICAgICBzdWJzY3JpYmUgPSBfc3RvcmVJbnRlcmZhY2Uuc3Vic2NyaWJlLFxuXHQgICAgICBkaXNwYXRjaCA9IF9zdG9yZUludGVyZmFjZS5kaXNwYXRjaCxcblx0ICAgICAgZ2V0U3RhdGUgPSBfc3RvcmVJbnRlcmZhY2UuZ2V0U3RhdGUsXG5cdCAgICAgIGNvbnRleHQgPSBfc3RvcmVJbnRlcmZhY2UuY29udGV4dCxcblx0ICAgICAgc2FnYU1vbml0b3IgPSBfc3RvcmVJbnRlcmZhY2Uuc2FnYU1vbml0b3IsXG5cdCAgICAgIGxvZ2dlciA9IF9zdG9yZUludGVyZmFjZS5sb2dnZXIsXG5cdCAgICAgIG9uRXJyb3IgPSBfc3RvcmVJbnRlcmZhY2Uub25FcnJvcjtcblx0XG5cdFxuXHQgIHZhciBlZmZlY3RJZCA9ICgwLCBfdXRpbHMudWlkKSgpO1xuXHRcblx0ICBpZiAoc2FnYU1vbml0b3IpIHtcblx0ICAgIC8vIG1vbml0b3JzIGFyZSBleHBlY3RlZCB0byBoYXZlIGEgY2VydGFpbiBpbnRlcmZhY2UsIGxldCdzIGZpbGwtaW4gYW55IG1pc3Npbmcgb25lc1xuXHQgICAgc2FnYU1vbml0b3IuZWZmZWN0VHJpZ2dlcmVkID0gc2FnYU1vbml0b3IuZWZmZWN0VHJpZ2dlcmVkIHx8IF91dGlscy5ub29wO1xuXHQgICAgc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RSZXNvbHZlZCB8fCBfdXRpbHMubm9vcDtcblx0ICAgIHNhZ2FNb25pdG9yLmVmZmVjdFJlamVjdGVkID0gc2FnYU1vbml0b3IuZWZmZWN0UmVqZWN0ZWQgfHwgX3V0aWxzLm5vb3A7XG5cdCAgICBzYWdhTW9uaXRvci5lZmZlY3RDYW5jZWxsZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RDYW5jZWxsZWQgfHwgX3V0aWxzLm5vb3A7XG5cdCAgICBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkID0gc2FnYU1vbml0b3IuYWN0aW9uRGlzcGF0Y2hlZCB8fCBfdXRpbHMubm9vcDtcblx0XG5cdCAgICBzYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQoeyBlZmZlY3RJZDogZWZmZWN0SWQsIHJvb3Q6IHRydWUsIHBhcmVudEVmZmVjdElkOiAwLCBlZmZlY3Q6IHsgcm9vdDogdHJ1ZSwgc2FnYTogc2FnYSwgYXJnczogYXJncyB9IH0pO1xuXHQgIH1cblx0XG5cdCAgdmFyIHRhc2sgPSAoMCwgX3Byb2MyLmRlZmF1bHQpKGl0ZXJhdG9yLCBzdWJzY3JpYmUsICgwLCBfdXRpbHMud3JhcFNhZ2FEaXNwYXRjaCkoZGlzcGF0Y2gpLCBnZXRTdGF0ZSwgY29udGV4dCwgeyBzYWdhTW9uaXRvcjogc2FnYU1vbml0b3IsIGxvZ2dlcjogbG9nZ2VyLCBvbkVycm9yOiBvbkVycm9yIH0sIGVmZmVjdElkLCBzYWdhLm5hbWUpO1xuXHRcblx0ICBpZiAoc2FnYU1vbml0b3IpIHtcblx0ICAgIHNhZ2FNb25pdG9yLmVmZmVjdFJlc29sdmVkKGVmZmVjdElkLCB0YXNrKTtcblx0ICB9XG5cdFxuXHQgIHJldHVybiB0YXNrO1xuXHR9XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIDc0MDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykgeyd1c2Ugc3RyaWN0Jztcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXHRcblx0ZXhwb3J0cy5jaGVjayA9IGNoZWNrO1xuXHRleHBvcnRzLmhhc093biA9IGhhc093bjtcblx0ZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG5cdGV4cG9ydHMuZGVmZXJyZWQgPSBkZWZlcnJlZDtcblx0ZXhwb3J0cy5hcnJheU9mRGVmZmVyZWQgPSBhcnJheU9mRGVmZmVyZWQ7XG5cdGV4cG9ydHMuZGVsYXkgPSBkZWxheTtcblx0ZXhwb3J0cy5jcmVhdGVNb2NrVGFzayA9IGNyZWF0ZU1vY2tUYXNrO1xuXHRleHBvcnRzLmF1dG9JbmMgPSBhdXRvSW5jO1xuXHRleHBvcnRzLm1ha2VJdGVyYXRvciA9IG1ha2VJdGVyYXRvcjtcblx0ZXhwb3J0cy5sb2cgPSBsb2c7XG5cdGV4cG9ydHMuZGVwcmVjYXRlID0gZGVwcmVjYXRlO1xuXHR2YXIgc3ltID0gZXhwb3J0cy5zeW0gPSBmdW5jdGlvbiBzeW0oaWQpIHtcblx0ICByZXR1cm4gJ0BAcmVkdXgtc2FnYS8nICsgaWQ7XG5cdH07XG5cdFxuXHR2YXIgVEFTSyA9IC8qI19fUFVSRV9fKi9leHBvcnRzLlRBU0sgPSBzeW0oJ1RBU0snKTtcblx0dmFyIEhFTFBFUiA9IC8qI19fUFVSRV9fKi9leHBvcnRzLkhFTFBFUiA9IHN5bSgnSEVMUEVSJyk7XG5cdHZhciBNQVRDSCA9IC8qI19fUFVSRV9fKi9leHBvcnRzLk1BVENIID0gc3ltKCdNQVRDSCcpO1xuXHR2YXIgQ0FOQ0VMID0gLyojX19QVVJFX18qL2V4cG9ydHMuQ0FOQ0VMID0gc3ltKCdDQU5DRUxfUFJPTUlTRScpO1xuXHR2YXIgU0FHQV9BQ1RJT04gPSAvKiNfX1BVUkVfXyovZXhwb3J0cy5TQUdBX0FDVElPTiA9IHN5bSgnU0FHQV9BQ1RJT04nKTtcblx0dmFyIFNFTEZfQ0FOQ0VMTEFUSU9OID0gLyojX19QVVJFX18qL2V4cG9ydHMuU0VMRl9DQU5DRUxMQVRJT04gPSBzeW0oJ1NFTEZfQ0FOQ0VMTEFUSU9OJyk7XG5cdHZhciBrb25zdCA9IGV4cG9ydHMua29uc3QgPSBmdW5jdGlvbiBrb25zdCh2KSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB2O1xuXHQgIH07XG5cdH07XG5cdHZhciBrVHJ1ZSA9IC8qI19fUFVSRV9fKi9leHBvcnRzLmtUcnVlID0ga29uc3QodHJ1ZSk7XG5cdHZhciBrRmFsc2UgPSAvKiNfX1BVUkVfXyovZXhwb3J0cy5rRmFsc2UgPSBrb25zdChmYWxzZSk7XG5cdHZhciBub29wID0gZXhwb3J0cy5ub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXHR2YXIgaWRlbnQgPSBleHBvcnRzLmlkZW50ID0gZnVuY3Rpb24gaWRlbnQodikge1xuXHQgIHJldHVybiB2O1xuXHR9O1xuXHRcblx0ZnVuY3Rpb24gY2hlY2sodmFsdWUsIHByZWRpY2F0ZSwgZXJyb3IpIHtcblx0ICBpZiAoIXByZWRpY2F0ZSh2YWx1ZSkpIHtcblx0ICAgIGxvZygnZXJyb3InLCAndW5jYXVnaHQgYXQgY2hlY2snLCBlcnJvcik7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuXHQgIH1cblx0fVxuXHRcblx0dmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblx0ZnVuY3Rpb24gaGFzT3duKG9iamVjdCwgcHJvcGVydHkpIHtcblx0ICByZXR1cm4gaXMubm90VW5kZWYob2JqZWN0KSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xuXHR9XG5cdFxuXHR2YXIgaXMgPSBleHBvcnRzLmlzID0ge1xuXHQgIHVuZGVmOiBmdW5jdGlvbiB1bmRlZih2KSB7XG5cdCAgICByZXR1cm4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQ7XG5cdCAgfSxcblx0ICBub3RVbmRlZjogZnVuY3Rpb24gbm90VW5kZWYodikge1xuXHQgICAgcmV0dXJuIHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkO1xuXHQgIH0sXG5cdCAgZnVuYzogZnVuY3Rpb24gZnVuYyhmKSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG5cdCAgfSxcblx0ICBudW1iZXI6IGZ1bmN0aW9uIG51bWJlcihuKSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInO1xuXHQgIH0sXG5cdCAgc3RyaW5nOiBmdW5jdGlvbiBzdHJpbmcocykge1xuXHQgICAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJztcblx0ICB9LFxuXHQgIGFycmF5OiBBcnJheS5pc0FycmF5LFxuXHQgIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KG9iaikge1xuXHQgICAgcmV0dXJuIG9iaiAmJiAhaXMuYXJyYXkob2JqKSAmJiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnO1xuXHQgIH0sXG5cdCAgcHJvbWlzZTogZnVuY3Rpb24gcHJvbWlzZShwKSB7XG5cdCAgICByZXR1cm4gcCAmJiBpcy5mdW5jKHAudGhlbik7XG5cdCAgfSxcblx0ICBpdGVyYXRvcjogZnVuY3Rpb24gaXRlcmF0b3IoaXQpIHtcblx0ICAgIHJldHVybiBpdCAmJiBpcy5mdW5jKGl0Lm5leHQpICYmIGlzLmZ1bmMoaXQudGhyb3cpO1xuXHQgIH0sXG5cdCAgaXRlcmFibGU6IGZ1bmN0aW9uIGl0ZXJhYmxlKGl0KSB7XG5cdCAgICByZXR1cm4gaXQgJiYgaXMuZnVuYyhTeW1ib2wpID8gaXMuZnVuYyhpdFtTeW1ib2wuaXRlcmF0b3JdKSA6IGlzLmFycmF5KGl0KTtcblx0ICB9LFxuXHQgIHRhc2s6IGZ1bmN0aW9uIHRhc2sodCkge1xuXHQgICAgcmV0dXJuIHQgJiYgdFtUQVNLXTtcblx0ICB9LFxuXHQgIG9ic2VydmFibGU6IGZ1bmN0aW9uIG9ic2VydmFibGUob2IpIHtcblx0ICAgIHJldHVybiBvYiAmJiBpcy5mdW5jKG9iLnN1YnNjcmliZSk7XG5cdCAgfSxcblx0ICBidWZmZXI6IGZ1bmN0aW9uIGJ1ZmZlcihidWYpIHtcblx0ICAgIHJldHVybiBidWYgJiYgaXMuZnVuYyhidWYuaXNFbXB0eSkgJiYgaXMuZnVuYyhidWYudGFrZSkgJiYgaXMuZnVuYyhidWYucHV0KTtcblx0ICB9LFxuXHQgIHBhdHRlcm46IGZ1bmN0aW9uIHBhdHRlcm4ocGF0KSB7XG5cdCAgICByZXR1cm4gcGF0ICYmIChpcy5zdHJpbmcocGF0KSB8fCAodHlwZW9mIHBhdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0KSkgPT09ICdzeW1ib2wnIHx8IGlzLmZ1bmMocGF0KSB8fCBpcy5hcnJheShwYXQpKTtcblx0ICB9LFxuXHQgIGNoYW5uZWw6IGZ1bmN0aW9uIGNoYW5uZWwoY2gpIHtcblx0ICAgIHJldHVybiBjaCAmJiBpcy5mdW5jKGNoLnRha2UpICYmIGlzLmZ1bmMoY2guY2xvc2UpO1xuXHQgIH0sXG5cdCAgaGVscGVyOiBmdW5jdGlvbiBoZWxwZXIoaXQpIHtcblx0ICAgIHJldHVybiBpdCAmJiBpdFtIRUxQRVJdO1xuXHQgIH0sXG5cdCAgc3RyaW5nYWJsZUZ1bmM6IGZ1bmN0aW9uIHN0cmluZ2FibGVGdW5jKGYpIHtcblx0ICAgIHJldHVybiBpcy5mdW5jKGYpICYmIGhhc093bihmLCAndG9TdHJpbmcnKTtcblx0ICB9XG5cdH07XG5cdFxuXHR2YXIgb2JqZWN0ID0gZXhwb3J0cy5vYmplY3QgPSB7XG5cdCAgYXNzaWduOiBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcblx0ICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG5cdCAgICAgIGlmIChoYXNPd24oc291cmNlLCBpKSkge1xuXHQgICAgICAgIHRhcmdldFtpXSA9IHNvdXJjZVtpXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0fTtcblx0XG5cdGZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuXHQgIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG5cdCAgaWYgKGluZGV4ID49IDApIHtcblx0ICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG5cdCAgfVxuXHR9XG5cdFxuXHR2YXIgYXJyYXkgPSBleHBvcnRzLmFycmF5ID0ge1xuXHQgIGZyb206IGZ1bmN0aW9uIGZyb20ob2JqKSB7XG5cdCAgICB2YXIgYXJyID0gQXJyYXkob2JqLmxlbmd0aCk7XG5cdCAgICBmb3IgKHZhciBpIGluIG9iaikge1xuXHQgICAgICBpZiAoaGFzT3duKG9iaiwgaSkpIHtcblx0ICAgICAgICBhcnJbaV0gPSBvYmpbaV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBhcnI7XG5cdCAgfVxuXHR9O1xuXHRcblx0ZnVuY3Rpb24gZGVmZXJyZWQoKSB7XG5cdCAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblx0XG5cdCAgdmFyIGRlZiA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG5cdCAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdCAgICBkZWYucmVzb2x2ZSA9IHJlc29sdmU7XG5cdCAgICBkZWYucmVqZWN0ID0gcmVqZWN0O1xuXHQgIH0pO1xuXHQgIGRlZi5wcm9taXNlID0gcHJvbWlzZTtcblx0ICByZXR1cm4gZGVmO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBhcnJheU9mRGVmZmVyZWQobGVuZ3RoKSB7XG5cdCAgdmFyIGFyciA9IFtdO1xuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgIGFyci5wdXNoKGRlZmVycmVkKCkpO1xuXHQgIH1cblx0ICByZXR1cm4gYXJyO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBkZWxheShtcykge1xuXHQgIHZhciB2YWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cdFxuXHQgIHZhciB0aW1lb3V0SWQgPSB2b2lkIDA7XG5cdCAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHQgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHJldHVybiByZXNvbHZlKHZhbCk7XG5cdCAgICB9LCBtcyk7XG5cdCAgfSk7XG5cdFxuXHQgIHByb21pc2VbQ0FOQ0VMXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblx0ICB9O1xuXHRcblx0ICByZXR1cm4gcHJvbWlzZTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gY3JlYXRlTW9ja1Rhc2soKSB7XG5cdCAgdmFyIF9yZWY7XG5cdFxuXHQgIHZhciBydW5uaW5nID0gdHJ1ZTtcblx0ICB2YXIgX3Jlc3VsdCA9IHZvaWQgMCxcblx0ICAgICAgX2Vycm9yID0gdm9pZCAwO1xuXHRcblx0ICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW1RBU0tdID0gdHJ1ZSwgX3JlZi5pc1J1bm5pbmcgPSBmdW5jdGlvbiBpc1J1bm5pbmcoKSB7XG5cdCAgICByZXR1cm4gcnVubmluZztcblx0ICB9LCBfcmVmLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcblx0ICAgIHJldHVybiBfcmVzdWx0O1xuXHQgIH0sIF9yZWYuZXJyb3IgPSBmdW5jdGlvbiBlcnJvcigpIHtcblx0ICAgIHJldHVybiBfZXJyb3I7XG5cdCAgfSwgX3JlZi5zZXRSdW5uaW5nID0gZnVuY3Rpb24gc2V0UnVubmluZyhiKSB7XG5cdCAgICByZXR1cm4gcnVubmluZyA9IGI7XG5cdCAgfSwgX3JlZi5zZXRSZXN1bHQgPSBmdW5jdGlvbiBzZXRSZXN1bHQocikge1xuXHQgICAgcmV0dXJuIF9yZXN1bHQgPSByO1xuXHQgIH0sIF9yZWYuc2V0RXJyb3IgPSBmdW5jdGlvbiBzZXRFcnJvcihlKSB7XG5cdCAgICByZXR1cm4gX2Vycm9yID0gZTtcblx0ICB9LCBfcmVmO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBhdXRvSW5jKCkge1xuXHQgIHZhciBzZWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXHRcblx0ICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuICsrc2VlZDtcblx0ICB9O1xuXHR9XG5cdFxuXHR2YXIgdWlkID0gLyojX19QVVJFX18qL2V4cG9ydHMudWlkID0gYXV0b0luYygpO1xuXHRcblx0dmFyIGtUaHJvdyA9IGZ1bmN0aW9uIGtUaHJvdyhlcnIpIHtcblx0ICB0aHJvdyBlcnI7XG5cdH07XG5cdHZhciBrUmV0dXJuID0gZnVuY3Rpb24ga1JldHVybih2YWx1ZSkge1xuXHQgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xuXHR9O1xuXHRmdW5jdGlvbiBtYWtlSXRlcmF0b3IobmV4dCkge1xuXHQgIHZhciB0aHJvID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBrVGhyb3c7XG5cdCAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuXHQgIHZhciBpc0hlbHBlciA9IGFyZ3VtZW50c1szXTtcblx0XG5cdCAgdmFyIGl0ZXJhdG9yID0geyBuYW1lOiBuYW1lLCBuZXh0OiBuZXh0LCB0aHJvdzogdGhybywgcmV0dXJuOiBrUmV0dXJuIH07XG5cdFxuXHQgIGlmIChpc0hlbHBlcikge1xuXHQgICAgaXRlcmF0b3JbSEVMUEVSXSA9IHRydWU7XG5cdCAgfVxuXHQgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuXHQgICAgfTtcblx0ICB9XG5cdCAgcmV0dXJuIGl0ZXJhdG9yO1xuXHR9XG5cdFxuXHQvKipcblx0ICBQcmludCBlcnJvciBpbiBhIHVzZWZ1bCB3YXkgd2hldGhlciBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnRcblx0ICAod2l0aCBleHBhbmRhYmxlIGVycm9yIHN0YWNrIHRyYWNlcyksIG9yIGluIGEgbm9kZS5qcyBlbnZpcm9ubWVudFxuXHQgICh0ZXh0LW9ubHkgbG9nIG91dHB1dClcblx0ICoqL1xuXHRmdW5jdGlvbiBsb2cobGV2ZWwsIG1lc3NhZ2UpIHtcblx0ICB2YXIgZXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuXHRcblx0ICAvKmVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUqL1xuXHQgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgY29uc29sZS5sb2coJ3JlZHV4LXNhZ2EgJyArIGxldmVsICsgJzogJyArIG1lc3NhZ2UgKyAnXFxuJyArIChlcnJvciAmJiBlcnJvci5zdGFjayB8fCBlcnJvcikpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBjb25zb2xlW2xldmVsXShtZXNzYWdlLCBlcnJvcik7XG5cdCAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBkZXByZWNhdGUoZm4sIGRlcHJlY2F0aW9uV2FybmluZykge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGxvZygnd2FybicsIGRlcHJlY2F0aW9uV2FybmluZyk7XG5cdCAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH1cblx0XG5cdHZhciB1cGRhdGVJbmNlbnRpdmUgPSBleHBvcnRzLnVwZGF0ZUluY2VudGl2ZSA9IGZ1bmN0aW9uIHVwZGF0ZUluY2VudGl2ZShkZXByZWNhdGVkLCBwcmVmZXJyZWQpIHtcblx0ICByZXR1cm4gZGVwcmVjYXRlZCArICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAnICsgcHJlZmVycmVkICsgJywgcGxlYXNlIHVwZGF0ZSB5b3VyIGNvZGUnO1xuXHR9O1xuXHRcblx0dmFyIGludGVybmFsRXJyID0gZXhwb3J0cy5pbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuXHQgIHJldHVybiBuZXcgRXJyb3IoJ1xcbiAgcmVkdXgtc2FnYTogRXJyb3IgY2hlY2tpbmcgaG9va3MgZGV0ZWN0ZWQgYW4gaW5jb25zaXN0ZW50IHN0YXRlLiBUaGlzIGlzIGxpa2VseSBhIGJ1Z1xcbiAgaW4gcmVkdXgtc2FnYSBjb2RlIGFuZCBub3QgeW91cnMuIFRoYW5rcyBmb3IgcmVwb3J0aW5nIHRoaXMgaW4gdGhlIHByb2plY3RcXCdzIGdpdGh1YiByZXBvLlxcbiAgRXJyb3I6ICcgKyBlcnIgKyAnXFxuJyk7XG5cdH07XG5cdFxuXHR2YXIgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcgPSBleHBvcnRzLmNyZWF0ZVNldENvbnRleHRXYXJuaW5nID0gZnVuY3Rpb24gY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoY3R4LCBwcm9wcykge1xuXHQgIHJldHVybiAoY3R4ID8gY3R4ICsgJy4nIDogJycpICsgJ3NldENvbnRleHQocHJvcHMpOiBhcmd1bWVudCAnICsgcHJvcHMgKyAnIGlzIG5vdCBhIHBsYWluIG9iamVjdCc7XG5cdH07XG5cdFxuXHR2YXIgd3JhcFNhZ2FEaXNwYXRjaCA9IGV4cG9ydHMud3JhcFNhZ2FEaXNwYXRjaCA9IGZ1bmN0aW9uIHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuXHQgICAgcmV0dXJuIGRpc3BhdGNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY3Rpb24sIFNBR0FfQUNUSU9OLCB7IHZhbHVlOiB0cnVlIH0pKTtcblx0ICB9O1xuXHR9O1xuXHRcblx0dmFyIGNsb25lYWJsZUdlbmVyYXRvciA9IGV4cG9ydHMuY2xvbmVhYmxlR2VuZXJhdG9yID0gZnVuY3Rpb24gY2xvbmVhYmxlR2VuZXJhdG9yKGdlbmVyYXRvckZ1bmMpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgIH1cblx0XG5cdCAgICB2YXIgaGlzdG9yeSA9IFtdO1xuXHQgICAgdmFyIGdlbiA9IGdlbmVyYXRvckZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoYXJnKSB7XG5cdCAgICAgICAgaGlzdG9yeS5wdXNoKGFyZyk7XG5cdCAgICAgICAgcmV0dXJuIGdlbi5uZXh0KGFyZyk7XG5cdCAgICAgIH0sXG5cdCAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcblx0ICAgICAgICB2YXIgY2xvbmVkR2VuID0gY2xvbmVhYmxlR2VuZXJhdG9yKGdlbmVyYXRvckZ1bmMpLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG5cdCAgICAgICAgaGlzdG9yeS5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcblx0ICAgICAgICAgIHJldHVybiBjbG9uZWRHZW4ubmV4dChhcmcpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiBjbG9uZWRHZW47XG5cdCAgICAgIH0sXG5cdCAgICAgIHJldHVybjogZnVuY3Rpb24gX3JldHVybih2YWx1ZSkge1xuXHQgICAgICAgIHJldHVybiBnZW4ucmV0dXJuKHZhbHVlKTtcblx0ICAgICAgfSxcblx0ICAgICAgdGhyb3c6IGZ1bmN0aW9uIF90aHJvdyhleGNlcHRpb24pIHtcblx0ICAgICAgICByZXR1cm4gZ2VuLnRocm93KGV4Y2VwdGlvbik7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cdCAgfTtcblx0fTtcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oMykpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzQxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuVEFTS19DQU5DRUwgPSBleHBvcnRzLkNIQU5ORUxfRU5EID0gZXhwb3J0cy5OT1RfSVRFUkFUT1JfRVJST1IgPSB1bmRlZmluZWQ7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gcHJvYztcblx0XG5cdHZhciBfdXRpbHMgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDApO1xuXHRcblx0dmFyIF9zY2hlZHVsZXIgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDIpO1xuXHRcblx0dmFyIF9pbyA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0Myk7XG5cdFxuXHR2YXIgX2NoYW5uZWwgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDcpO1xuXHRcblx0dmFyIF9idWZmZXJzID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQ4KTtcblx0XG5cdGZ1bmN0aW9uIF9kZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcyhvYmosIGRlc2NzKSB7IGZvciAodmFyIGtleSBpbiBkZXNjcykgeyB2YXIgZGVzYyA9IGRlc2NzW2tleV07IGRlc2MuY29uZmlndXJhYmxlID0gZGVzYy5lbnVtZXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSBkZXNjLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBkZXNjKTsgfSByZXR1cm4gb2JqOyB9XG5cdFxuXHR2YXIgTk9UX0lURVJBVE9SX0VSUk9SID0gZXhwb3J0cy5OT1RfSVRFUkFUT1JfRVJST1IgPSAncHJvYyBmaXJzdCBhcmd1bWVudCAoU2FnYSBmdW5jdGlvbiByZXN1bHQpIG11c3QgYmUgYW4gaXRlcmF0b3InO1xuXHRcblx0dmFyIENIQU5ORUxfRU5EID0gZXhwb3J0cy5DSEFOTkVMX0VORCA9IHtcblx0ICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdCAgICByZXR1cm4gJ0BAcmVkdXgtc2FnYS9DSEFOTkVMX0VORCc7XG5cdCAgfVxuXHR9O1xuXHR2YXIgVEFTS19DQU5DRUwgPSBleHBvcnRzLlRBU0tfQ0FOQ0VMID0ge1xuXHQgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0ICAgIHJldHVybiAnQEByZWR1eC1zYWdhL1RBU0tfQ0FOQ0VMJztcblx0ICB9XG5cdH07XG5cdFxuXHR2YXIgbWF0Y2hlcnMgPSB7XG5cdCAgd2lsZGNhcmQ6IGZ1bmN0aW9uIHdpbGRjYXJkKCkge1xuXHQgICAgcmV0dXJuIF91dGlscy5rVHJ1ZTtcblx0ICB9LFxuXHQgIGRlZmF1bHQ6IGZ1bmN0aW9uIF9kZWZhdWx0KHBhdHRlcm4pIHtcblx0ICAgIHJldHVybiAodHlwZW9mIHBhdHRlcm4gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdHRlcm4pKSA9PT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaW5wdXQpIHtcblx0ICAgICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHBhdHRlcm47XG5cdCAgICB9IDogZnVuY3Rpb24gKGlucHV0KSB7XG5cdCAgICAgIHJldHVybiBpbnB1dC50eXBlID09PSBTdHJpbmcocGF0dGVybik7XG5cdCAgICB9O1xuXHQgIH0sXG5cdCAgYXJyYXk6IGZ1bmN0aW9uIGFycmF5KHBhdHRlcm5zKSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdCAgICAgIHJldHVybiBwYXR0ZXJucy5zb21lKGZ1bmN0aW9uIChwKSB7XG5cdCAgICAgICAgcmV0dXJuIG1hdGNoZXIocCkoaW5wdXQpO1xuXHQgICAgICB9KTtcblx0ICAgIH07XG5cdCAgfSxcblx0ICBwcmVkaWNhdGU6IGZ1bmN0aW9uIHByZWRpY2F0ZShfcHJlZGljYXRlKSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdCAgICAgIHJldHVybiBfcHJlZGljYXRlKGlucHV0KTtcblx0ICAgIH07XG5cdCAgfVxuXHR9O1xuXHRcblx0ZnVuY3Rpb24gbWF0Y2hlcihwYXR0ZXJuKSB7XG5cdCAgLy8gcHJldHRpZXItaWdub3JlXG5cdCAgcmV0dXJuIChwYXR0ZXJuID09PSAnKicgPyBtYXRjaGVycy53aWxkY2FyZCA6IF91dGlscy5pcy5hcnJheShwYXR0ZXJuKSA/IG1hdGNoZXJzLmFycmF5IDogX3V0aWxzLmlzLnN0cmluZ2FibGVGdW5jKHBhdHRlcm4pID8gbWF0Y2hlcnMuZGVmYXVsdCA6IF91dGlscy5pcy5mdW5jKHBhdHRlcm4pID8gbWF0Y2hlcnMucHJlZGljYXRlIDogbWF0Y2hlcnMuZGVmYXVsdCkocGF0dGVybik7XG5cdH1cblx0XG5cdC8qKlxuXHQgIFVzZWQgdG8gdHJhY2sgYSBwYXJlbnQgdGFzayBhbmQgaXRzIGZvcmtzXG5cdCAgSW4gdGhlIG5ldyBmb3JrIG1vZGVsLCBmb3JrZWQgdGFza3MgYXJlIGF0dGFjaGVkIGJ5IGRlZmF1bHQgdG8gdGhlaXIgcGFyZW50XG5cdCAgV2UgbW9kZWwgdGhpcyB1c2luZyB0aGUgY29uY2VwdCBvZiBQYXJlbnQgdGFzayAmJiBtYWluIFRhc2tcblx0ICBtYWluIHRhc2sgaXMgdGhlIG1haW4gZmxvdyBvZiB0aGUgY3VycmVudCBHZW5lcmF0b3IsIHRoZSBwYXJlbnQgdGFza3MgaXMgdGhlXG5cdCAgYWdncmVnYXRpb24gb2YgdGhlIG1haW4gdGFza3MgKyBhbGwgaXRzIGZvcmtlZCB0YXNrcy5cblx0ICBUaHVzIHRoZSB3aG9sZSBtb2RlbCByZXByZXNlbnRzIGFuIGV4ZWN1dGlvbiB0cmVlIHdpdGggbXVsdGlwbGUgYnJhbmNoZXMgKHZzIHRoZVxuXHQgIGxpbmVhciBleGVjdXRpb24gdHJlZSBpbiBzZXF1ZW50aWFsIChub24gcGFyYWxsZWwpIHByb2dyYW1taW5nKVxuXHRcblx0ICBBIHBhcmVudCB0YXNrcyBoYXMgdGhlIGZvbGxvd2luZyBzZW1hbnRpY3Ncblx0ICAtIEl0IGNvbXBsZXRlcyBpZiBhbGwgaXRzIGZvcmtzIGVpdGhlciBjb21wbGV0ZSBvciBhbGwgY2FuY2VsbGVkXG5cdCAgLSBJZiBpdCdzIGNhbmNlbGxlZCwgYWxsIGZvcmtzIGFyZSBjYW5jZWxsZWQgYXMgd2VsbFxuXHQgIC0gSXQgYWJvcnRzIGlmIGFueSB1bmNhdWdodCBlcnJvciBidWJibGVzIHVwIGZyb20gZm9ya3Ncblx0ICAtIElmIGl0IGNvbXBsZXRlcywgdGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgb25lIHJldHVybmVkIGJ5IHRoZSBtYWluIHRhc2tcblx0KiovXG5cdGZ1bmN0aW9uIGZvcmtRdWV1ZShuYW1lLCBtYWluVGFzaywgY2IpIHtcblx0ICB2YXIgdGFza3MgPSBbXSxcblx0ICAgICAgcmVzdWx0ID0gdm9pZCAwLFxuXHQgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcblx0ICBhZGRUYXNrKG1haW5UYXNrKTtcblx0XG5cdCAgZnVuY3Rpb24gYWJvcnQoZXJyKSB7XG5cdCAgICBjYW5jZWxBbGwoKTtcblx0ICAgIGNiKGVyciwgdHJ1ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcblx0ICAgIHRhc2tzLnB1c2godGFzayk7XG5cdCAgICB0YXNrLmNvbnQgPSBmdW5jdGlvbiAocmVzLCBpc0Vycikge1xuXHQgICAgICBpZiAoY29tcGxldGVkKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAoMCwgX3V0aWxzLnJlbW92ZSkodGFza3MsIHRhc2spO1xuXHQgICAgICB0YXNrLmNvbnQgPSBfdXRpbHMubm9vcDtcblx0ICAgICAgaWYgKGlzRXJyKSB7XG5cdCAgICAgICAgYWJvcnQocmVzKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAodGFzayA9PT0gbWFpblRhc2spIHtcblx0ICAgICAgICAgIHJlc3VsdCA9IHJlcztcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcblx0ICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG5cdCAgICAgICAgICBjYihyZXN1bHQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8vIHRhc2suY29udC5jYW5jZWwgPSB0YXNrLmNhbmNlbFxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY2FuY2VsQWxsKCkge1xuXHQgICAgaWYgKGNvbXBsZXRlZCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBjb21wbGV0ZWQgPSB0cnVlO1xuXHQgICAgdGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuXHQgICAgICB0LmNvbnQgPSBfdXRpbHMubm9vcDtcblx0ICAgICAgdC5jYW5jZWwoKTtcblx0ICAgIH0pO1xuXHQgICAgdGFza3MgPSBbXTtcblx0ICB9XG5cdFxuXHQgIHJldHVybiB7XG5cdCAgICBhZGRUYXNrOiBhZGRUYXNrLFxuXHQgICAgY2FuY2VsQWxsOiBjYW5jZWxBbGwsXG5cdCAgICBhYm9ydDogYWJvcnQsXG5cdCAgICBnZXRUYXNrczogZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG5cdCAgICAgIHJldHVybiB0YXNrcztcblx0ICAgIH0sXG5cdCAgICB0YXNrTmFtZXM6IGZ1bmN0aW9uIHRhc2tOYW1lcygpIHtcblx0ICAgICAgcmV0dXJuIHRhc2tzLm1hcChmdW5jdGlvbiAodCkge1xuXHQgICAgICAgIHJldHVybiB0Lm5hbWU7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgIH07XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVyYXRvcihfcmVmKSB7XG5cdCAgdmFyIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG5cdCAgICAgIGZuID0gX3JlZi5mbixcblx0ICAgICAgYXJncyA9IF9yZWYuYXJncztcblx0XG5cdCAgaWYgKF91dGlscy5pcy5pdGVyYXRvcihmbikpIHtcblx0ICAgIHJldHVybiBmbjtcblx0ICB9XG5cdFxuXHQgIC8vIGNhdGNoIHN5bmNocm9ub3VzIGZhaWx1cmVzOyBzZWUgIzE1MiBhbmQgIzQ0MVxuXHQgIHZhciByZXN1bHQgPSB2b2lkIDAsXG5cdCAgICAgIGVycm9yID0gdm9pZCAwO1xuXHQgIHRyeSB7XG5cdCAgICByZXN1bHQgPSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0ICB9IGNhdGNoIChlcnIpIHtcblx0ICAgIGVycm9yID0gZXJyO1xuXHQgIH1cblx0XG5cdCAgLy8gaS5lLiBhIGdlbmVyYXRvciBmdW5jdGlvbiByZXR1cm5zIGFuIGl0ZXJhdG9yXG5cdCAgaWYgKF91dGlscy5pcy5pdGVyYXRvcihyZXN1bHQpKSB7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH1cblx0XG5cdCAgLy8gZG8gbm90IGJ1YmJsZSB1cCBzeW5jaHJvbm91cyBmYWlsdXJlcyBmb3IgZGV0YWNoZWQgZm9ya3Ncblx0ICAvLyBpbnN0ZWFkIGNyZWF0ZSBhIGZhaWxlZCB0YXNrLiBTZWUgIzE1MiBhbmQgIzQ0MVxuXHQgIHJldHVybiBlcnJvciA/ICgwLCBfdXRpbHMubWFrZUl0ZXJhdG9yKShmdW5jdGlvbiAoKSB7XG5cdCAgICB0aHJvdyBlcnJvcjtcblx0ICB9KSA6ICgwLCBfdXRpbHMubWFrZUl0ZXJhdG9yKShmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgcGMgPSB2b2lkIDA7XG5cdCAgICB2YXIgZWZmID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IHJlc3VsdCB9O1xuXHQgICAgdmFyIHJldCA9IGZ1bmN0aW9uIHJldCh2YWx1ZSkge1xuXHQgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdmFsdWUgfTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuXHQgICAgICBpZiAoIXBjKSB7XG5cdCAgICAgICAgcGMgPSB0cnVlO1xuXHQgICAgICAgIHJldHVybiBlZmY7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIHJldChhcmcpO1xuXHQgICAgICB9XG5cdCAgICB9O1xuXHQgIH0oKSk7XG5cdH1cblx0XG5cdHZhciB3cmFwSGVscGVyID0gZnVuY3Rpb24gd3JhcEhlbHBlcihoZWxwZXIpIHtcblx0ICByZXR1cm4geyBmbjogaGVscGVyIH07XG5cdH07XG5cdFxuXHRmdW5jdGlvbiBwcm9jKGl0ZXJhdG9yKSB7XG5cdCAgdmFyIHN1YnNjcmliZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIF91dGlscy5ub29wO1xuXHQgIH07XG5cdCAgdmFyIGRpc3BhdGNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBfdXRpbHMubm9vcDtcblx0ICB2YXIgZ2V0U3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IF91dGlscy5ub29wO1xuXHQgIHZhciBwYXJlbnRDb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiB7fTtcblx0ICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDoge307XG5cdCAgdmFyIHBhcmVudEVmZmVjdElkID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiAwO1xuXHQgIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDcgJiYgYXJndW1lbnRzWzddICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbN10gOiAnYW5vbnltb3VzJztcblx0ICB2YXIgY29udCA9IGFyZ3VtZW50c1s4XTtcblx0XG5cdCAgKDAsIF91dGlscy5jaGVjaykoaXRlcmF0b3IsIF91dGlscy5pcy5pdGVyYXRvciwgTk9UX0lURVJBVE9SX0VSUk9SKTtcblx0XG5cdCAgdmFyIGVmZmVjdHNTdHJpbmcgPSAnWy4uLmVmZmVjdHNdJztcblx0ICB2YXIgcnVuUGFyYWxsZWxFZmZlY3QgPSAoMCwgX3V0aWxzLmRlcHJlY2F0ZSkocnVuQWxsRWZmZWN0LCAoMCwgX3V0aWxzLnVwZGF0ZUluY2VudGl2ZSkoZWZmZWN0c1N0cmluZywgJ2FsbCgnICsgZWZmZWN0c1N0cmluZyArICcpJykpO1xuXHRcblx0ICB2YXIgc2FnYU1vbml0b3IgPSBvcHRpb25zLnNhZ2FNb25pdG9yLFxuXHQgICAgICBsb2dnZXIgPSBvcHRpb25zLmxvZ2dlcixcblx0ICAgICAgb25FcnJvciA9IG9wdGlvbnMub25FcnJvcjtcblx0XG5cdCAgdmFyIGxvZyA9IGxvZ2dlciB8fCBfdXRpbHMubG9nO1xuXHQgIHZhciBsb2dFcnJvciA9IGZ1bmN0aW9uIGxvZ0Vycm9yKGVycikge1xuXHQgICAgdmFyIG1lc3NhZ2UgPSBlcnIuc2FnYVN0YWNrO1xuXHRcblx0ICAgIGlmICghbWVzc2FnZSAmJiBlcnIuc3RhY2spIHtcblx0ICAgICAgbWVzc2FnZSA9IGVyci5zdGFjay5zcGxpdCgnXFxuJylbMF0uaW5kZXhPZihlcnIubWVzc2FnZSkgIT09IC0xID8gZXJyLnN0YWNrIDogJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UgKyAnXFxuJyArIGVyci5zdGFjaztcblx0ICAgIH1cblx0XG5cdCAgICBsb2coJ2Vycm9yJywgJ3VuY2F1Z2h0IGF0ICcgKyBuYW1lLCBtZXNzYWdlIHx8IGVyci5tZXNzYWdlIHx8IGVycik7XG5cdCAgfTtcblx0ICB2YXIgc3RkQ2hhbm5lbCA9ICgwLCBfY2hhbm5lbC5zdGRDaGFubmVsKShzdWJzY3JpYmUpO1xuXHQgIHZhciB0YXNrQ29udGV4dCA9IE9iamVjdC5jcmVhdGUocGFyZW50Q29udGV4dCk7XG5cdCAgLyoqXG5cdCAgICBUcmFja3MgdGhlIGN1cnJlbnQgZWZmZWN0IGNhbmNlbGxhdGlvblxuXHQgICAgRWFjaCB0aW1lIHRoZSBnZW5lcmF0b3IgcHJvZ3Jlc3Nlcy4gY2FsbGluZyBydW5FZmZlY3Qgd2lsbCBzZXQgYSBuZXcgdmFsdWVcblx0ICAgIG9uIGl0LiBJdCBhbGxvd3MgcHJvcGFnYXRpbmcgY2FuY2VsbGF0aW9uIHRvIGNoaWxkIGVmZmVjdHNcblx0ICAqKi9cblx0ICBuZXh0LmNhbmNlbCA9IF91dGlscy5ub29wO1xuXHRcblx0ICAvKipcblx0ICAgIENyZWF0ZXMgYSBuZXcgdGFzayBkZXNjcmlwdG9yIGZvciB0aGlzIGdlbmVyYXRvciwgV2UnbGwgYWxzbyBjcmVhdGUgYSBtYWluIHRhc2tcblx0ICAgIHRvIHRyYWNrIHRoZSBtYWluIGZsb3cgKGJlc2lkZXMgb3RoZXIgZm9ya2VkIHRhc2tzKVxuXHQgICoqL1xuXHQgIHZhciB0YXNrID0gbmV3VGFzayhwYXJlbnRFZmZlY3RJZCwgbmFtZSwgaXRlcmF0b3IsIGNvbnQpO1xuXHQgIHZhciBtYWluVGFzayA9IHsgbmFtZTogbmFtZSwgY2FuY2VsOiBjYW5jZWxNYWluLCBpc1J1bm5pbmc6IHRydWUgfTtcblx0ICB2YXIgdGFza1F1ZXVlID0gZm9ya1F1ZXVlKG5hbWUsIG1haW5UYXNrLCBlbmQpO1xuXHRcblx0ICAvKipcblx0ICAgIGNhbmNlbGxhdGlvbiBvZiB0aGUgbWFpbiB0YXNrLiBXZSdsbCBzaW1wbHkgcmVzdW1lIHRoZSBHZW5lcmF0b3Igd2l0aCBhIENhbmNlbFxuXHQgICoqL1xuXHQgIGZ1bmN0aW9uIGNhbmNlbE1haW4oKSB7XG5cdCAgICBpZiAobWFpblRhc2suaXNSdW5uaW5nICYmICFtYWluVGFzay5pc0NhbmNlbGxlZCkge1xuXHQgICAgICBtYWluVGFzay5pc0NhbmNlbGxlZCA9IHRydWU7XG5cdCAgICAgIG5leHQoVEFTS19DQU5DRUwpO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICBUaGlzIG1heSBiZSBjYWxsZWQgYnkgYSBwYXJlbnQgZ2VuZXJhdG9yIHRvIHRyaWdnZXIvcHJvcGFnYXRlIGNhbmNlbGxhdGlvblxuXHQgICAgY2FuY2VsIGFsbCBwZW5kaW5nIHRhc2tzIChpbmNsdWRpbmcgdGhlIG1haW4gdGFzayksIHRoZW4gZW5kIHRoZSBjdXJyZW50IHRhc2suXG5cdCAgICAgQ2FuY2VsbGF0aW9uIHByb3BhZ2F0ZXMgZG93biB0byB0aGUgd2hvbGUgZXhlY3V0aW9uIHRyZWUgaG9sZGVkIGJ5IHRoaXMgUGFyZW50IHRhc2tcblx0ICAgIEl0J3MgYWxzbyBwcm9wYWdhdGVkIHRvIGFsbCBqb2luZXJzIG9mIHRoaXMgdGFzayBhbmQgdGhlaXIgZXhlY3V0aW9uIHRyZWUvam9pbmVyc1xuXHQgICAgIENhbmNlbGxhdGlvbiBpcyBub29wIGZvciB0ZXJtaW5hdGVkL0NhbmNlbGxlZCB0YXNrcyB0YXNrc1xuXHQgICoqL1xuXHQgIGZ1bmN0aW9uIGNhbmNlbCgpIHtcblx0ICAgIC8qKlxuXHQgICAgICBXZSBuZWVkIHRvIGNoZWNrIGJvdGggUnVubmluZyBhbmQgQ2FuY2VsbGVkIHN0YXR1c1xuXHQgICAgICBUYXNrcyBjYW4gYmUgQ2FuY2VsbGVkIGJ1dCBzdGlsbCBSdW5uaW5nXG5cdCAgICAqKi9cblx0ICAgIGlmIChpdGVyYXRvci5faXNSdW5uaW5nICYmICFpdGVyYXRvci5faXNDYW5jZWxsZWQpIHtcblx0ICAgICAgaXRlcmF0b3IuX2lzQ2FuY2VsbGVkID0gdHJ1ZTtcblx0ICAgICAgdGFza1F1ZXVlLmNhbmNlbEFsbCgpO1xuXHQgICAgICAvKipcblx0ICAgICAgICBFbmRpbmcgd2l0aCBhIE5ldmVyIHJlc3VsdCB3aWxsIHByb3BhZ2F0ZSB0aGUgQ2FuY2VsbGF0aW9uIHRvIGFsbCBqb2luZXJzXG5cdCAgICAgICoqL1xuXHQgICAgICBlbmQoVEFTS19DQU5DRUwpO1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKipcblx0ICAgIGF0dGFjaGVzIGNhbmNlbGxhdGlvbiBsb2dpYyB0byB0aGlzIHRhc2sncyBjb250aW51YXRpb25cblx0ICAgIHRoaXMgd2lsbCBwZXJtaXQgY2FuY2VsbGF0aW9uIHRvIHByb3BhZ2F0ZSBkb3duIHRoZSBjYWxsIGNoYWluXG5cdCAgKiovXG5cdCAgY29udCAmJiAoY29udC5jYW5jZWwgPSBjYW5jZWwpO1xuXHRcblx0ICAvLyB0cmFja3MgdGhlIHJ1bm5pbmcgc3RhdHVzXG5cdCAgaXRlcmF0b3IuX2lzUnVubmluZyA9IHRydWU7XG5cdFxuXHQgIC8vIGtpY2tzIHVwIHRoZSBnZW5lcmF0b3Jcblx0ICBuZXh0KCk7XG5cdFxuXHQgIC8vIHRoZW4gcmV0dXJuIHRoZSB0YXNrIGRlc2NyaXB0b3IgdG8gdGhlIGNhbGxlclxuXHQgIHJldHVybiB0YXNrO1xuXHRcblx0ICAvKipcblx0ICAgIFRoaXMgaXMgdGhlIGdlbmVyYXRvciBkcml2ZXJcblx0ICAgIEl0J3MgYSByZWN1cnNpdmUgYXN5bmMvY29udGludWF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNhbGxzIGl0c2VsZlxuXHQgICAgdW50aWwgdGhlIGdlbmVyYXRvciB0ZXJtaW5hdGVzIG9yIHRocm93c1xuXHQgICoqL1xuXHQgIGZ1bmN0aW9uIG5leHQoYXJnLCBpc0Vycikge1xuXHQgICAgLy8gUHJldmVudGl2ZSBtZWFzdXJlLiBJZiB3ZSBlbmQgdXAgaGVyZSwgdGhlbiB0aGVyZSBpcyByZWFsbHkgc29tZXRoaW5nIHdyb25nXG5cdCAgICBpZiAoIW1haW5UYXNrLmlzUnVubmluZykge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byByZXN1bWUgYW4gYWxyZWFkeSBmaW5pc2hlZCBnZW5lcmF0b3InKTtcblx0ICAgIH1cblx0XG5cdCAgICB0cnkge1xuXHQgICAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuXHQgICAgICBpZiAoaXNFcnIpIHtcblx0ICAgICAgICByZXN1bHQgPSBpdGVyYXRvci50aHJvdyhhcmcpO1xuXHQgICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gVEFTS19DQU5DRUwpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgIGdldHRpbmcgVEFTS19DQU5DRUwgYXV0b21hdGljYWxseSBjYW5jZWxzIHRoZSBtYWluIHRhc2tcblx0ICAgICAgICAgIFdlIGNhbiBnZXQgdGhpcyB2YWx1ZSBoZXJlXG5cdCAgICAgICAgICAgLSBCeSBjYW5jZWxsaW5nIHRoZSBwYXJlbnQgdGFzayBtYW51YWxseVxuXHQgICAgICAgICAgLSBCeSBqb2luaW5nIGEgQ2FuY2VsbGVkIHRhc2tcblx0ICAgICAgICAqKi9cblx0ICAgICAgICBtYWluVGFzay5pc0NhbmNlbGxlZCA9IHRydWU7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICBDYW5jZWxzIHRoZSBjdXJyZW50IGVmZmVjdDsgdGhpcyB3aWxsIHByb3BhZ2F0ZSB0aGUgY2FuY2VsbGF0aW9uIGRvd24gdG8gYW55IGNhbGxlZCB0YXNrc1xuXHQgICAgICAgICoqL1xuXHQgICAgICAgIG5leHQuY2FuY2VsKCk7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICBJZiB0aGlzIEdlbmVyYXRvciBoYXMgYSBgcmV0dXJuYCBtZXRob2QgdGhlbiBpbnZva2VzIGl0XG5cdCAgICAgICAgICBUaGlzIHdpbGwganVtcCB0byB0aGUgZmluYWxseSBibG9ja1xuXHQgICAgICAgICoqL1xuXHQgICAgICAgIHJlc3VsdCA9IF91dGlscy5pcy5mdW5jKGl0ZXJhdG9yLnJldHVybikgPyBpdGVyYXRvci5yZXR1cm4oVEFTS19DQU5DRUwpIDogeyBkb25lOiB0cnVlLCB2YWx1ZTogVEFTS19DQU5DRUwgfTtcblx0ICAgICAgfSBlbHNlIGlmIChhcmcgPT09IENIQU5ORUxfRU5EKSB7XG5cdCAgICAgICAgLy8gV2UgZ2V0IENIQU5ORUxfRU5EIGJ5IHRha2luZyBmcm9tIGEgY2hhbm5lbCB0aGF0IGVuZGVkIHVzaW5nIGB0YWtlYCAoYW5kIG5vdCBgdGFrZW1gIHVzZWQgdG8gdHJhcCBFbmQgb2YgY2hhbm5lbHMpXG5cdCAgICAgICAgcmVzdWx0ID0gX3V0aWxzLmlzLmZ1bmMoaXRlcmF0b3IucmV0dXJuKSA/IGl0ZXJhdG9yLnJldHVybigpIDogeyBkb25lOiB0cnVlIH07XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dChhcmcpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoIXJlc3VsdC5kb25lKSB7XG5cdCAgICAgICAgcnVuRWZmZWN0KHJlc3VsdC52YWx1ZSwgcGFyZW50RWZmZWN0SWQsICcnLCBuZXh0KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgIFRoaXMgR2VuZXJhdG9yIGhhcyBlbmRlZCwgdGVybWluYXRlIHRoZSBtYWluIHRhc2sgYW5kIG5vdGlmeSB0aGUgZm9yayBxdWV1ZVxuXHQgICAgICAgICoqL1xuXHQgICAgICAgIG1haW5UYXNrLmlzTWFpblJ1bm5pbmcgPSBmYWxzZTtcblx0ICAgICAgICBtYWluVGFzay5jb250ICYmIG1haW5UYXNrLmNvbnQocmVzdWx0LnZhbHVlKTtcblx0ICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgaWYgKG1haW5UYXNrLmlzQ2FuY2VsbGVkKSB7XG5cdCAgICAgICAgbG9nRXJyb3IoZXJyb3IpO1xuXHQgICAgICB9XG5cdCAgICAgIG1haW5UYXNrLmlzTWFpblJ1bm5pbmcgPSBmYWxzZTtcblx0ICAgICAgbWFpblRhc2suY29udChlcnJvciwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBlbmQocmVzdWx0LCBpc0Vycikge1xuXHQgICAgaXRlcmF0b3IuX2lzUnVubmluZyA9IGZhbHNlO1xuXHQgICAgc3RkQ2hhbm5lbC5jbG9zZSgpO1xuXHQgICAgaWYgKCFpc0Vycikge1xuXHQgICAgICBpdGVyYXRvci5fcmVzdWx0ID0gcmVzdWx0O1xuXHQgICAgICBpdGVyYXRvci5fZGVmZXJyZWRFbmQgJiYgaXRlcmF0b3IuX2RlZmVycmVkRW5kLnJlc29sdmUocmVzdWx0KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuXHQgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXN1bHQsICdzYWdhU3RhY2snLCB7XG5cdCAgICAgICAgICB2YWx1ZTogJ2F0ICcgKyBuYW1lICsgJyBcXG4gJyArIChyZXN1bHQuc2FnYVN0YWNrIHx8IHJlc3VsdC5zdGFjayksXG5cdCAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoIXRhc2suY29udCkge1xuXHQgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciAmJiBvbkVycm9yKSB7XG5cdCAgICAgICAgICBvbkVycm9yKHJlc3VsdCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGxvZ0Vycm9yKHJlc3VsdCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIGl0ZXJhdG9yLl9lcnJvciA9IHJlc3VsdDtcblx0ICAgICAgaXRlcmF0b3IuX2lzQWJvcnRlZCA9IHRydWU7XG5cdCAgICAgIGl0ZXJhdG9yLl9kZWZlcnJlZEVuZCAmJiBpdGVyYXRvci5fZGVmZXJyZWRFbmQucmVqZWN0KHJlc3VsdCk7XG5cdCAgICB9XG5cdCAgICB0YXNrLmNvbnQgJiYgdGFzay5jb250KHJlc3VsdCwgaXNFcnIpO1xuXHQgICAgdGFzay5qb2luZXJzLmZvckVhY2goZnVuY3Rpb24gKGopIHtcblx0ICAgICAgcmV0dXJuIGouY2IocmVzdWx0LCBpc0Vycik7XG5cdCAgICB9KTtcblx0ICAgIHRhc2suam9pbmVycyA9IG51bGw7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBydW5FZmZlY3QoZWZmZWN0LCBwYXJlbnRFZmZlY3RJZCkge1xuXHQgICAgdmFyIGxhYmVsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnJztcblx0ICAgIHZhciBjYiA9IGFyZ3VtZW50c1szXTtcblx0XG5cdCAgICB2YXIgZWZmZWN0SWQgPSAoMCwgX3V0aWxzLnVpZCkoKTtcblx0ICAgIHNhZ2FNb25pdG9yICYmIHNhZ2FNb25pdG9yLmVmZmVjdFRyaWdnZXJlZCh7IGVmZmVjdElkOiBlZmZlY3RJZCwgcGFyZW50RWZmZWN0SWQ6IHBhcmVudEVmZmVjdElkLCBsYWJlbDogbGFiZWwsIGVmZmVjdDogZWZmZWN0IH0pO1xuXHRcblx0ICAgIC8qKlxuXHQgICAgICBjb21wbGV0aW9uIGNhbGxiYWNrIGFuZCBjYW5jZWwgY2FsbGJhY2sgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZVxuXHQgICAgICBXZSBjYW4ndCBjYW5jZWwgYW4gYWxyZWFkeSBjb21wbGV0ZWQgZWZmZWN0XG5cdCAgICAgIEFuZCBXZSBjYW4ndCBjb21wbGV0ZSBhbiBhbHJlYWR5IGNhbmNlbGxlZCBlZmZlY3RJZFxuXHQgICAgKiovXG5cdCAgICB2YXIgZWZmZWN0U2V0dGxlZCA9IHZvaWQgMDtcblx0XG5cdCAgICAvLyBDb21wbGV0aW9uIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgYXBwcm9wcmlhdGUgZWZmZWN0IHJ1bm5lclxuXHQgICAgZnVuY3Rpb24gY3VyckNiKHJlcywgaXNFcnIpIHtcblx0ICAgICAgaWYgKGVmZmVjdFNldHRsZWQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGVmZmVjdFNldHRsZWQgPSB0cnVlO1xuXHQgICAgICBjYi5jYW5jZWwgPSBfdXRpbHMubm9vcDsgLy8gZGVmZW5zaXZlIG1lYXN1cmVcblx0ICAgICAgaWYgKHNhZ2FNb25pdG9yKSB7XG5cdCAgICAgICAgaXNFcnIgPyBzYWdhTW9uaXRvci5lZmZlY3RSZWplY3RlZChlZmZlY3RJZCwgcmVzKSA6IHNhZ2FNb25pdG9yLmVmZmVjdFJlc29sdmVkKGVmZmVjdElkLCByZXMpO1xuXHQgICAgICB9XG5cdCAgICAgIGNiKHJlcywgaXNFcnIpO1xuXHQgICAgfVxuXHQgICAgLy8gdHJhY2tzIGRvd24gdGhlIGN1cnJlbnQgY2FuY2VsXG5cdCAgICBjdXJyQ2IuY2FuY2VsID0gX3V0aWxzLm5vb3A7XG5cdFxuXHQgICAgLy8gc2V0dXAgY2FuY2VsbGF0aW9uIGxvZ2ljIG9uIHRoZSBwYXJlbnQgY2Jcblx0ICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgLy8gcHJldmVudHMgY2FuY2VsbGluZyBhbiBhbHJlYWR5IGNvbXBsZXRlZCBlZmZlY3Rcblx0ICAgICAgaWYgKGVmZmVjdFNldHRsZWQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGVmZmVjdFNldHRsZWQgPSB0cnVlO1xuXHQgICAgICAvKipcblx0ICAgICAgICBwcm9wYWdhdGVzIGNhbmNlbCBkb3dud2FyZFxuXHQgICAgICAgIGNhdGNoIHVuY2F1Z2h0IGNhbmNlbGxhdGlvbnMgZXJyb3JzOyBzaW5jZSB3ZSBjYW4gbm8gbG9uZ2VyIGNhbGwgdGhlIGNvbXBsZXRpb25cblx0ICAgICAgICBjYWxsYmFjaywgbG9nIGVycm9ycyByYWlzZWQgZHVyaW5nIGNhbmNlbGxhdGlvbnMgaW50byB0aGUgY29uc29sZVxuXHQgICAgICAqKi9cblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBjdXJyQ2IuY2FuY2VsKCk7XG5cdCAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgIGxvZ0Vycm9yKGVycik7XG5cdCAgICAgIH1cblx0ICAgICAgY3VyckNiLmNhbmNlbCA9IF91dGlscy5ub29wOyAvLyBkZWZlbnNpdmUgbWVhc3VyZVxuXHRcblx0ICAgICAgc2FnYU1vbml0b3IgJiYgc2FnYU1vbml0b3IuZWZmZWN0Q2FuY2VsbGVkKGVmZmVjdElkKTtcblx0ICAgIH07XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgIGVhY2ggZWZmZWN0IHJ1bm5lciBtdXN0IGF0dGFjaCBpdHMgb3duIGxvZ2ljIG9mIGNhbmNlbGxhdGlvbiB0byB0aGUgcHJvdmlkZWQgY2FsbGJhY2tcblx0ICAgICAgaXQgYWxsb3dzIHRoaXMgZ2VuZXJhdG9yIHRvIHByb3BhZ2F0ZSBjYW5jZWxsYXRpb24gZG93bndhcmQuXG5cdCAgICAgICBBVFRFTlRJT04hIGVmZmVjdCBydW5uZXJzIG11c3Qgc2V0dXAgdGhlIGNhbmNlbCBsb2dpYyBieSBzZXR0aW5nIGNiLmNhbmNlbCA9IFtjYW5jZWxNZXRob2RdXG5cdCAgICAgIEFuZCB0aGUgc2V0dXAgbXVzdCBvY2N1ciBiZWZvcmUgY2FsbGluZyB0aGUgY2FsbGJhY2tcblx0ICAgICAgIFRoaXMgaXMgYSBzb3J0IG9mIGludmVyc2lvbiBvZiBjb250cm9sOiBjYWxsZWQgYXN5bmMgZnVuY3Rpb25zIGFyZSByZXNwb25zaWJsZVxuXHQgICAgICBmb3IgY29tcGxldGluZyB0aGUgZmxvdyBieSBjYWxsaW5nIHRoZSBwcm92aWRlZCBjb250aW51YXRpb247IHdoaWxlIGNhbGxlciBmdW5jdGlvbnNcblx0ICAgICAgYXJlIHJlc3BvbnNpYmxlIGZvciBhYm9ydGluZyB0aGUgY3VycmVudCBmbG93IGJ5IGNhbGxpbmcgdGhlIGF0dGFjaGVkIGNhbmNlbCBmdW5jdGlvblxuXHQgICAgICAgTGlicmFyeSB1c2VycyBjYW4gYXR0YWNoIHRoZWlyIG93biBjYW5jZWxsYXRpb24gbG9naWMgdG8gcHJvbWlzZXMgYnkgZGVmaW5pbmcgYVxuXHQgICAgICBwcm9taXNlW0NBTkNFTF0gbWV0aG9kIGluIHRoZWlyIHJldHVybmVkIHByb21pc2VzXG5cdCAgICAgIEFUVEVOVElPTiEgY2FsbGluZyBjYW5jZWwgbXVzdCBoYXZlIG5vIGVmZmVjdCBvbiBhbiBhbHJlYWR5IGNvbXBsZXRlZCBvciBjYW5jZWxsZWQgZWZmZWN0XG5cdCAgICAqKi9cblx0ICAgIHZhciBkYXRhID0gdm9pZCAwO1xuXHQgICAgLy8gcHJldHRpZXItaWdub3JlXG5cdCAgICByZXR1cm4gKFxuXHQgICAgICAvLyBOb24gZGVjbGFyYXRpdmUgZWZmZWN0XG5cdCAgICAgIF91dGlscy5pcy5wcm9taXNlKGVmZmVjdCkgPyByZXNvbHZlUHJvbWlzZShlZmZlY3QsIGN1cnJDYikgOiBfdXRpbHMuaXMuaGVscGVyKGVmZmVjdCkgPyBydW5Gb3JrRWZmZWN0KHdyYXBIZWxwZXIoZWZmZWN0KSwgZWZmZWN0SWQsIGN1cnJDYikgOiBfdXRpbHMuaXMuaXRlcmF0b3IoZWZmZWN0KSA/IHJlc29sdmVJdGVyYXRvcihlZmZlY3QsIGVmZmVjdElkLCBuYW1lLCBjdXJyQ2IpXG5cdFxuXHQgICAgICAvLyBkZWNsYXJhdGl2ZSBlZmZlY3RzXG5cdCAgICAgIDogX3V0aWxzLmlzLmFycmF5KGVmZmVjdCkgPyBydW5QYXJhbGxlbEVmZmVjdChlZmZlY3QsIGVmZmVjdElkLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3QudGFrZShlZmZlY3QpKSA/IHJ1blRha2VFZmZlY3QoZGF0YSwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LnB1dChlZmZlY3QpKSA/IHJ1blB1dEVmZmVjdChkYXRhLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3QuYWxsKGVmZmVjdCkpID8gcnVuQWxsRWZmZWN0KGRhdGEsIGVmZmVjdElkLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3QucmFjZShlZmZlY3QpKSA/IHJ1blJhY2VFZmZlY3QoZGF0YSwgZWZmZWN0SWQsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5jYWxsKGVmZmVjdCkpID8gcnVuQ2FsbEVmZmVjdChkYXRhLCBlZmZlY3RJZCwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LmNwcyhlZmZlY3QpKSA/IHJ1bkNQU0VmZmVjdChkYXRhLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3QuZm9yayhlZmZlY3QpKSA/IHJ1bkZvcmtFZmZlY3QoZGF0YSwgZWZmZWN0SWQsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5qb2luKGVmZmVjdCkpID8gcnVuSm9pbkVmZmVjdChkYXRhLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3QuY2FuY2VsKGVmZmVjdCkpID8gcnVuQ2FuY2VsRWZmZWN0KGRhdGEsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5zZWxlY3QoZWZmZWN0KSkgPyBydW5TZWxlY3RFZmZlY3QoZGF0YSwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LmFjdGlvbkNoYW5uZWwoZWZmZWN0KSkgPyBydW5DaGFubmVsRWZmZWN0KGRhdGEsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5mbHVzaChlZmZlY3QpKSA/IHJ1bkZsdXNoRWZmZWN0KGRhdGEsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5jYW5jZWxsZWQoZWZmZWN0KSkgPyBydW5DYW5jZWxsZWRFZmZlY3QoZGF0YSwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LmdldENvbnRleHQoZWZmZWN0KSkgPyBydW5HZXRDb250ZXh0RWZmZWN0KGRhdGEsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5zZXRDb250ZXh0KGVmZmVjdCkpID8gcnVuU2V0Q29udGV4dEVmZmVjdChkYXRhLCBjdXJyQ2IpIDogLyogYW55dGhpbmcgZWxzZSByZXR1cm5lZCBhcyBpcyAqL2N1cnJDYihlZmZlY3QpXG5cdCAgICApO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgY2IpIHtcblx0ICAgIHZhciBjYW5jZWxQcm9taXNlID0gcHJvbWlzZVtfdXRpbHMuQ0FOQ0VMXTtcblx0ICAgIGlmIChfdXRpbHMuaXMuZnVuYyhjYW5jZWxQcm9taXNlKSkge1xuXHQgICAgICBjYi5jYW5jZWwgPSBjYW5jZWxQcm9taXNlO1xuXHQgICAgfSBlbHNlIGlmIChfdXRpbHMuaXMuZnVuYyhwcm9taXNlLmFib3J0KSkge1xuXHQgICAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHByb21pc2UuYWJvcnQoKTtcblx0ICAgICAgfTtcblx0ICAgICAgLy8gVE9ETzogYWRkIHN1cHBvcnQgZm9yIHRoZSBmZXRjaCBBUEksIHdoZW5ldmVyIHRoZXkgZ2V0IGFyb3VuZCB0b1xuXHQgICAgICAvLyBhZGRpbmcgY2FuY2VsIHN1cHBvcnRcblx0ICAgIH1cblx0ICAgIHByb21pc2UudGhlbihjYiwgZnVuY3Rpb24gKGVycm9yKSB7XG5cdCAgICAgIHJldHVybiBjYihlcnJvciwgdHJ1ZSk7XG5cdCAgICB9KTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJlc29sdmVJdGVyYXRvcihpdGVyYXRvciwgZWZmZWN0SWQsIG5hbWUsIGNiKSB7XG5cdCAgICBwcm9jKGl0ZXJhdG9yLCBzdWJzY3JpYmUsIGRpc3BhdGNoLCBnZXRTdGF0ZSwgdGFza0NvbnRleHQsIG9wdGlvbnMsIGVmZmVjdElkLCBuYW1lLCBjYik7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBydW5UYWtlRWZmZWN0KF9yZWYyLCBjYikge1xuXHQgICAgdmFyIGNoYW5uZWwgPSBfcmVmMi5jaGFubmVsLFxuXHQgICAgICAgIHBhdHRlcm4gPSBfcmVmMi5wYXR0ZXJuLFxuXHQgICAgICAgIG1heWJlID0gX3JlZjIubWF5YmU7XG5cdFxuXHQgICAgY2hhbm5lbCA9IGNoYW5uZWwgfHwgc3RkQ2hhbm5lbDtcblx0ICAgIHZhciB0YWtlQ2IgPSBmdW5jdGlvbiB0YWtlQ2IoaW5wKSB7XG5cdCAgICAgIHJldHVybiBpbnAgaW5zdGFuY2VvZiBFcnJvciA/IGNiKGlucCwgdHJ1ZSkgOiAoMCwgX2NoYW5uZWwuaXNFbmQpKGlucCkgJiYgIW1heWJlID8gY2IoQ0hBTk5FTF9FTkQpIDogY2IoaW5wKTtcblx0ICAgIH07XG5cdCAgICB0cnkge1xuXHQgICAgICBjaGFubmVsLnRha2UodGFrZUNiLCBtYXRjaGVyKHBhdHRlcm4pKTtcblx0ICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICByZXR1cm4gY2IoZXJyLCB0cnVlKTtcblx0ICAgIH1cblx0ICAgIGNiLmNhbmNlbCA9IHRha2VDYi5jYW5jZWw7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBydW5QdXRFZmZlY3QoX3JlZjMsIGNiKSB7XG5cdCAgICB2YXIgY2hhbm5lbCA9IF9yZWYzLmNoYW5uZWwsXG5cdCAgICAgICAgYWN0aW9uID0gX3JlZjMuYWN0aW9uLFxuXHQgICAgICAgIHJlc29sdmUgPSBfcmVmMy5yZXNvbHZlO1xuXHRcblx0ICAgIC8qKlxuXHQgICAgICBTY2hlZHVsZSB0aGUgcHV0IGluIGNhc2UgYW5vdGhlciBzYWdhIGlzIGhvbGRpbmcgYSBsb2NrLlxuXHQgICAgICBUaGUgcHV0IHdpbGwgYmUgZXhlY3V0ZWQgYXRvbWljYWxseS4gaWUgbmVzdGVkIHB1dHMgd2lsbCBleGVjdXRlIGFmdGVyXG5cdCAgICAgIHRoaXMgcHV0IGhhcyB0ZXJtaW5hdGVkLlxuXHQgICAgKiovXG5cdCAgICAoMCwgX3NjaGVkdWxlci5hc2FwKShmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgcmVzdWx0ID0gKGNoYW5uZWwgPyBjaGFubmVsLnB1dCA6IGRpc3BhdGNoKShhY3Rpb24pO1xuXHQgICAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICAgIC8vIElmIHdlIGhhdmUgYSBjaGFubmVsIG9yIGBwdXQucmVzb2x2ZWAgd2FzIHVzZWQgdGhlbiBidWJibGUgdXAgdGhlIGVycm9yLlxuXHQgICAgICAgIGlmIChjaGFubmVsIHx8IHJlc29sdmUpIHJldHVybiBjYihlcnJvciwgdHJ1ZSk7XG5cdCAgICAgICAgbG9nRXJyb3IoZXJyb3IpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAocmVzb2x2ZSAmJiBfdXRpbHMuaXMucHJvbWlzZShyZXN1bHQpKSB7XG5cdCAgICAgICAgcmVzb2x2ZVByb21pc2UocmVzdWx0LCBjYik7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIGNiKHJlc3VsdCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgLy8gUHV0IGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJ1bkNhbGxFZmZlY3QoX3JlZjQsIGVmZmVjdElkLCBjYikge1xuXHQgICAgdmFyIGNvbnRleHQgPSBfcmVmNC5jb250ZXh0LFxuXHQgICAgICAgIGZuID0gX3JlZjQuZm4sXG5cdCAgICAgICAgYXJncyA9IF9yZWY0LmFyZ3M7XG5cdFxuXHQgICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcblx0ICAgIC8vIGNhdGNoIHN5bmNocm9ub3VzIGZhaWx1cmVzOyBzZWUgIzE1MlxuXHQgICAgdHJ5IHtcblx0ICAgICAgcmVzdWx0ID0gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdCAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICByZXR1cm4gY2IoZXJyb3IsIHRydWUpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIF91dGlscy5pcy5wcm9taXNlKHJlc3VsdCkgPyByZXNvbHZlUHJvbWlzZShyZXN1bHQsIGNiKSA6IF91dGlscy5pcy5pdGVyYXRvcihyZXN1bHQpID8gcmVzb2x2ZUl0ZXJhdG9yKHJlc3VsdCwgZWZmZWN0SWQsIGZuLm5hbWUsIGNiKSA6IGNiKHJlc3VsdCk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBydW5DUFNFZmZlY3QoX3JlZjUsIGNiKSB7XG5cdCAgICB2YXIgY29udGV4dCA9IF9yZWY1LmNvbnRleHQsXG5cdCAgICAgICAgZm4gPSBfcmVmNS5mbixcblx0ICAgICAgICBhcmdzID0gX3JlZjUuYXJncztcblx0XG5cdCAgICAvLyBDUFMgKGllIG5vZGUgc3R5bGUgZnVuY3Rpb25zKSBjYW4gZGVmaW5lIHRoZWlyIG93biBjYW5jZWxsYXRpb24gbG9naWNcblx0ICAgIC8vIGJ5IHNldHRpbmcgY2FuY2VsIGZpZWxkIG9uIHRoZSBjYlxuXHRcblx0ICAgIC8vIGNhdGNoIHN5bmNocm9ub3VzIGZhaWx1cmVzOyBzZWUgIzE1MlxuXHQgICAgdHJ5IHtcblx0ICAgICAgdmFyIGNwc0NiID0gZnVuY3Rpb24gY3BzQ2IoZXJyLCByZXMpIHtcblx0ICAgICAgICByZXR1cm4gX3V0aWxzLmlzLnVuZGVmKGVycikgPyBjYihyZXMpIDogY2IoZXJyLCB0cnVlKTtcblx0ICAgICAgfTtcblx0ICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoY3BzQ2IpKTtcblx0ICAgICAgaWYgKGNwc0NiLmNhbmNlbCkge1xuXHQgICAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIHJldHVybiBjcHNDYi5jYW5jZWwoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICB9XG5cdCAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICByZXR1cm4gY2IoZXJyb3IsIHRydWUpO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gcnVuRm9ya0VmZmVjdChfcmVmNiwgZWZmZWN0SWQsIGNiKSB7XG5cdCAgICB2YXIgY29udGV4dCA9IF9yZWY2LmNvbnRleHQsXG5cdCAgICAgICAgZm4gPSBfcmVmNi5mbixcblx0ICAgICAgICBhcmdzID0gX3JlZjYuYXJncyxcblx0ICAgICAgICBkZXRhY2hlZCA9IF9yZWY2LmRldGFjaGVkO1xuXHRcblx0ICAgIHZhciB0YXNrSXRlcmF0b3IgPSBjcmVhdGVUYXNrSXRlcmF0b3IoeyBjb250ZXh0OiBjb250ZXh0LCBmbjogZm4sIGFyZ3M6IGFyZ3MgfSk7XG5cdFxuXHQgICAgdHJ5IHtcblx0ICAgICAgKDAsIF9zY2hlZHVsZXIuc3VzcGVuZCkoKTtcblx0ICAgICAgdmFyIF90YXNrID0gcHJvYyh0YXNrSXRlcmF0b3IsIHN1YnNjcmliZSwgZGlzcGF0Y2gsIGdldFN0YXRlLCB0YXNrQ29udGV4dCwgb3B0aW9ucywgZWZmZWN0SWQsIGZuLm5hbWUsIGRldGFjaGVkID8gbnVsbCA6IF91dGlscy5ub29wKTtcblx0XG5cdCAgICAgIGlmIChkZXRhY2hlZCkge1xuXHQgICAgICAgIGNiKF90YXNrKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAodGFza0l0ZXJhdG9yLl9pc1J1bm5pbmcpIHtcblx0ICAgICAgICAgIHRhc2tRdWV1ZS5hZGRUYXNrKF90YXNrKTtcblx0ICAgICAgICAgIGNiKF90YXNrKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKHRhc2tJdGVyYXRvci5fZXJyb3IpIHtcblx0ICAgICAgICAgIHRhc2tRdWV1ZS5hYm9ydCh0YXNrSXRlcmF0b3IuX2Vycm9yKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgY2IoX3Rhc2spO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgKDAsIF9zY2hlZHVsZXIuZmx1c2gpKCk7XG5cdCAgICB9XG5cdCAgICAvLyBGb3JrIGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJ1bkpvaW5FZmZlY3QodCwgY2IpIHtcblx0ICAgIGlmICh0LmlzUnVubmluZygpKSB7XG5cdCAgICAgIHZhciBqb2luZXIgPSB7IHRhc2s6IHRhc2ssIGNiOiBjYiB9O1xuXHQgICAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMucmVtb3ZlKSh0LmpvaW5lcnMsIGpvaW5lcik7XG5cdCAgICAgIH07XG5cdCAgICAgIHQuam9pbmVycy5wdXNoKGpvaW5lcik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0LmlzQWJvcnRlZCgpID8gY2IodC5lcnJvcigpLCB0cnVlKSA6IGNiKHQucmVzdWx0KCkpO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gcnVuQ2FuY2VsRWZmZWN0KHRhc2tUb0NhbmNlbCwgY2IpIHtcblx0ICAgIGlmICh0YXNrVG9DYW5jZWwgPT09IF91dGlscy5TRUxGX0NBTkNFTExBVElPTikge1xuXHQgICAgICB0YXNrVG9DYW5jZWwgPSB0YXNrO1xuXHQgICAgfVxuXHQgICAgaWYgKHRhc2tUb0NhbmNlbC5pc1J1bm5pbmcoKSkge1xuXHQgICAgICB0YXNrVG9DYW5jZWwuY2FuY2VsKCk7XG5cdCAgICB9XG5cdCAgICBjYigpO1xuXHQgICAgLy8gY2FuY2VsIGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJ1bkFsbEVmZmVjdChlZmZlY3RzLCBlZmZlY3RJZCwgY2IpIHtcblx0ICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZWZmZWN0cyk7XG5cdFxuXHQgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuXHQgICAgICByZXR1cm4gY2IoX3V0aWxzLmlzLmFycmF5KGVmZmVjdHMpID8gW10gOiB7fSk7XG5cdCAgICB9XG5cdFxuXHQgICAgdmFyIGNvbXBsZXRlZENvdW50ID0gMDtcblx0ICAgIHZhciBjb21wbGV0ZWQgPSB2b2lkIDA7XG5cdCAgICB2YXIgcmVzdWx0cyA9IHt9O1xuXHQgICAgdmFyIGNoaWxkQ2JzID0ge307XG5cdFxuXHQgICAgZnVuY3Rpb24gY2hlY2tFZmZlY3RFbmQoKSB7XG5cdCAgICAgIGlmIChjb21wbGV0ZWRDb3VudCA9PT0ga2V5cy5sZW5ndGgpIHtcblx0ICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuXHQgICAgICAgIGNiKF91dGlscy5pcy5hcnJheShlZmZlY3RzKSA/IF91dGlscy5hcnJheS5mcm9tKF9leHRlbmRzKHt9LCByZXN1bHRzLCB7IGxlbmd0aDoga2V5cy5sZW5ndGggfSkpIDogcmVzdWx0cyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICB2YXIgY2hDYkF0S2V5ID0gZnVuY3Rpb24gY2hDYkF0S2V5KHJlcywgaXNFcnIpIHtcblx0ICAgICAgICBpZiAoY29tcGxldGVkKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChpc0VyciB8fCAoMCwgX2NoYW5uZWwuaXNFbmQpKHJlcykgfHwgcmVzID09PSBDSEFOTkVMX0VORCB8fCByZXMgPT09IFRBU0tfQ0FOQ0VMKSB7XG5cdCAgICAgICAgICBjYi5jYW5jZWwoKTtcblx0ICAgICAgICAgIGNiKHJlcywgaXNFcnIpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXN1bHRzW2tleV0gPSByZXM7XG5cdCAgICAgICAgICBjb21wbGV0ZWRDb3VudCsrO1xuXHQgICAgICAgICAgY2hlY2tFZmZlY3RFbmQoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH07XG5cdCAgICAgIGNoQ2JBdEtleS5jYW5jZWwgPSBfdXRpbHMubm9vcDtcblx0ICAgICAgY2hpbGRDYnNba2V5XSA9IGNoQ2JBdEtleTtcblx0ICAgIH0pO1xuXHRcblx0ICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgaWYgKCFjb21wbGV0ZWQpIHtcblx0ICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuXHQgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgICAgICByZXR1cm4gY2hpbGRDYnNba2V5XS5jYW5jZWwoKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICByZXR1cm4gcnVuRWZmZWN0KGVmZmVjdHNba2V5XSwgZWZmZWN0SWQsIGtleSwgY2hpbGRDYnNba2V5XSk7XG5cdCAgICB9KTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJ1blJhY2VFZmZlY3QoZWZmZWN0cywgZWZmZWN0SWQsIGNiKSB7XG5cdCAgICB2YXIgY29tcGxldGVkID0gdm9pZCAwO1xuXHQgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlZmZlY3RzKTtcblx0ICAgIHZhciBjaGlsZENicyA9IHt9O1xuXHRcblx0ICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgIHZhciBjaENiQXRLZXkgPSBmdW5jdGlvbiBjaENiQXRLZXkocmVzLCBpc0Vycikge1xuXHQgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChpc0Vycikge1xuXHQgICAgICAgICAgLy8gUmFjZSBBdXRvIGNhbmNlbGxhdGlvblxuXHQgICAgICAgICAgY2IuY2FuY2VsKCk7XG5cdCAgICAgICAgICBjYihyZXMsIHRydWUpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoISgwLCBfY2hhbm5lbC5pc0VuZCkocmVzKSAmJiByZXMgIT09IENIQU5ORUxfRU5EICYmIHJlcyAhPT0gVEFTS19DQU5DRUwpIHtcblx0ICAgICAgICAgIHZhciBfcmVzcG9uc2U7XG5cdFxuXHQgICAgICAgICAgY2IuY2FuY2VsKCk7XG5cdCAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuXHQgICAgICAgICAgdmFyIHJlc3BvbnNlID0gKF9yZXNwb25zZSA9IHt9LCBfcmVzcG9uc2Vba2V5XSA9IHJlcywgX3Jlc3BvbnNlKTtcblx0ICAgICAgICAgIGNiKF91dGlscy5pcy5hcnJheShlZmZlY3RzKSA/IFtdLnNsaWNlLmNhbGwoX2V4dGVuZHMoe30sIHJlc3BvbnNlLCB7IGxlbmd0aDoga2V5cy5sZW5ndGggfSkpIDogcmVzcG9uc2UpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgICAgY2hDYkF0S2V5LmNhbmNlbCA9IF91dGlscy5ub29wO1xuXHQgICAgICBjaGlsZENic1trZXldID0gY2hDYkF0S2V5O1xuXHQgICAgfSk7XG5cdFxuXHQgICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAvLyBwcmV2ZW50cyB1bm5lY2Vzc2FyeSBjYW5jZWxsYXRpb25cblx0ICAgICAgaWYgKCFjb21wbGV0ZWQpIHtcblx0ICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuXHQgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgICAgICByZXR1cm4gY2hpbGRDYnNba2V5XS5jYW5jZWwoKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXHQgICAgfTtcblx0ICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgIGlmIChjb21wbGV0ZWQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgcnVuRWZmZWN0KGVmZmVjdHNba2V5XSwgZWZmZWN0SWQsIGtleSwgY2hpbGRDYnNba2V5XSk7XG5cdCAgICB9KTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJ1blNlbGVjdEVmZmVjdChfcmVmNywgY2IpIHtcblx0ICAgIHZhciBzZWxlY3RvciA9IF9yZWY3LnNlbGVjdG9yLFxuXHQgICAgICAgIGFyZ3MgPSBfcmVmNy5hcmdzO1xuXHRcblx0ICAgIHRyeSB7XG5cdCAgICAgIHZhciBzdGF0ZSA9IHNlbGVjdG9yLmFwcGx5KHVuZGVmaW5lZCwgW2dldFN0YXRlKCldLmNvbmNhdChhcmdzKSk7XG5cdCAgICAgIGNiKHN0YXRlKTtcblx0ICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICAgIGNiKGVycm9yLCB0cnVlKTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJ1bkNoYW5uZWxFZmZlY3QoX3JlZjgsIGNiKSB7XG5cdCAgICB2YXIgcGF0dGVybiA9IF9yZWY4LnBhdHRlcm4sXG5cdCAgICAgICAgYnVmZmVyID0gX3JlZjguYnVmZmVyO1xuXHRcblx0ICAgIHZhciBtYXRjaCA9IG1hdGNoZXIocGF0dGVybik7XG5cdCAgICBtYXRjaC5wYXR0ZXJuID0gcGF0dGVybjtcblx0ICAgIGNiKCgwLCBfY2hhbm5lbC5ldmVudENoYW5uZWwpKHN1YnNjcmliZSwgYnVmZmVyIHx8IF9idWZmZXJzLmJ1ZmZlcnMuZml4ZWQoKSwgbWF0Y2gpKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJ1bkNhbmNlbGxlZEVmZmVjdChkYXRhLCBjYikge1xuXHQgICAgY2IoISFtYWluVGFzay5pc0NhbmNlbGxlZCk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBydW5GbHVzaEVmZmVjdChjaGFubmVsLCBjYikge1xuXHQgICAgY2hhbm5lbC5mbHVzaChjYik7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBydW5HZXRDb250ZXh0RWZmZWN0KHByb3AsIGNiKSB7XG5cdCAgICBjYih0YXNrQ29udGV4dFtwcm9wXSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBydW5TZXRDb250ZXh0RWZmZWN0KHByb3BzLCBjYikge1xuXHQgICAgX3V0aWxzLm9iamVjdC5hc3NpZ24odGFza0NvbnRleHQsIHByb3BzKTtcblx0ICAgIGNiKCk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBuZXdUYXNrKGlkLCBuYW1lLCBpdGVyYXRvciwgY29udCkge1xuXHQgICAgdmFyIF9kb25lLCBfcmVmOSwgX211dGF0b3JNYXA7XG5cdFxuXHQgICAgaXRlcmF0b3IuX2RlZmVycmVkRW5kID0gbnVsbDtcblx0ICAgIHJldHVybiBfcmVmOSA9IHt9LCBfcmVmOVtfdXRpbHMuVEFTS10gPSB0cnVlLCBfcmVmOS5pZCA9IGlkLCBfcmVmOS5uYW1lID0gbmFtZSwgX2RvbmUgPSAnZG9uZScsIF9tdXRhdG9yTWFwID0ge30sIF9tdXRhdG9yTWFwW19kb25lXSA9IF9tdXRhdG9yTWFwW19kb25lXSB8fCB7fSwgX211dGF0b3JNYXBbX2RvbmVdLmdldCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgaWYgKGl0ZXJhdG9yLl9kZWZlcnJlZEVuZCkge1xuXHQgICAgICAgIHJldHVybiBpdGVyYXRvci5fZGVmZXJyZWRFbmQucHJvbWlzZTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgZGVmID0gKDAsIF91dGlscy5kZWZlcnJlZCkoKTtcblx0ICAgICAgICBpdGVyYXRvci5fZGVmZXJyZWRFbmQgPSBkZWY7XG5cdCAgICAgICAgaWYgKCFpdGVyYXRvci5faXNSdW5uaW5nKSB7XG5cdCAgICAgICAgICBpdGVyYXRvci5fZXJyb3IgPyBkZWYucmVqZWN0KGl0ZXJhdG9yLl9lcnJvcikgOiBkZWYucmVzb2x2ZShpdGVyYXRvci5fcmVzdWx0KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIGRlZi5wcm9taXNlO1xuXHQgICAgICB9XG5cdCAgICB9LCBfcmVmOS5jb250ID0gY29udCwgX3JlZjkuam9pbmVycyA9IFtdLCBfcmVmOS5jYW5jZWwgPSBjYW5jZWwsIF9yZWY5LmlzUnVubmluZyA9IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcblx0ICAgICAgcmV0dXJuIGl0ZXJhdG9yLl9pc1J1bm5pbmc7XG5cdCAgICB9LCBfcmVmOS5pc0NhbmNlbGxlZCA9IGZ1bmN0aW9uIGlzQ2FuY2VsbGVkKCkge1xuXHQgICAgICByZXR1cm4gaXRlcmF0b3IuX2lzQ2FuY2VsbGVkO1xuXHQgICAgfSwgX3JlZjkuaXNBYm9ydGVkID0gZnVuY3Rpb24gaXNBYm9ydGVkKCkge1xuXHQgICAgICByZXR1cm4gaXRlcmF0b3IuX2lzQWJvcnRlZDtcblx0ICAgIH0sIF9yZWY5LnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcblx0ICAgICAgcmV0dXJuIGl0ZXJhdG9yLl9yZXN1bHQ7XG5cdCAgICB9LCBfcmVmOS5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKCkge1xuXHQgICAgICByZXR1cm4gaXRlcmF0b3IuX2Vycm9yO1xuXHQgICAgfSwgX3JlZjkuc2V0Q29udGV4dCA9IGZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcblx0ICAgICAgKDAsIF91dGlscy5jaGVjaykocHJvcHMsIF91dGlscy5pcy5vYmplY3QsICgwLCBfdXRpbHMuY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcpKCd0YXNrJywgcHJvcHMpKTtcblx0ICAgICAgX3V0aWxzLm9iamVjdC5hc3NpZ24odGFza0NvbnRleHQsIHByb3BzKTtcblx0ICAgIH0sIF9kZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcyhfcmVmOSwgX211dGF0b3JNYXApLCBfcmVmOTtcblx0ICB9XG5cdH1cblxuLyoqKi8gfSksXG5cbi8qKiovIDc0Mjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuYXNhcCA9IGFzYXA7XG5cdGV4cG9ydHMuc3VzcGVuZCA9IHN1c3BlbmQ7XG5cdGV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcblx0dmFyIHF1ZXVlID0gW107XG5cdC8qKlxuXHQgIFZhcmlhYmxlIHRvIGhvbGQgYSBjb3VudGluZyBzZW1hcGhvcmVcblx0ICAtIEluY3JlbWVudGluZyBhZGRzIGEgbG9jayBhbmQgcHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHN1c3BlbmRlZGAgc3RhdGUgKGlmIGl0J3Mgbm90XG5cdCAgICBhbHJlYWR5IHN1c3BlbmRlZClcblx0ICAtIERlY3JlbWVudGluZyByZWxlYXNlcyBhIGxvY2suIFplcm8gbG9ja3MgcHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS4gVGhpc1xuXHQgICAgdHJpZ2dlcnMgZmx1c2hpbmcgdGhlIHF1ZXVlZCB0YXNrcy5cblx0KiovXG5cdHZhciBzZW1hcGhvcmUgPSAwO1xuXHRcblx0LyoqXG5cdCAgRXhlY3V0ZXMgYSB0YXNrICdhdG9taWNhbGx5Jy4gVGFza3Mgc2NoZWR1bGVkIGR1cmluZyB0aGlzIGV4ZWN1dGlvbiB3aWxsIGJlIHF1ZXVlZFxuXHQgIGFuZCBmbHVzaGVkIGFmdGVyIHRoaXMgdGFzayBoYXMgZmluaXNoZWQgKGFzc3VtaW5nIHRoZSBzY2hlZHVsZXIgZW5kdXAgaW4gYSByZWxlYXNlZFxuXHQgIHN0YXRlKS5cblx0KiovXG5cdGZ1bmN0aW9uIGV4ZWModGFzaykge1xuXHQgIHRyeSB7XG5cdCAgICBzdXNwZW5kKCk7XG5cdCAgICB0YXNrKCk7XG5cdCAgfSBmaW5hbGx5IHtcblx0ICAgIHJlbGVhc2UoKTtcblx0ICB9XG5cdH1cblx0XG5cdC8qKlxuXHQgIEV4ZWN1dGVzIG9yIHF1ZXVlcyBhIHRhc2sgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIChgc3VzcGVuZGVkYCBvciBgcmVsZWFzZWRgKVxuXHQqKi9cblx0ZnVuY3Rpb24gYXNhcCh0YXNrKSB7XG5cdCAgcXVldWUucHVzaCh0YXNrKTtcblx0XG5cdCAgaWYgKCFzZW1hcGhvcmUpIHtcblx0ICAgIHN1c3BlbmQoKTtcblx0ICAgIGZsdXNoKCk7XG5cdCAgfVxuXHR9XG5cdFxuXHQvKipcblx0ICBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZS4gU2NoZWR1bGVkIHRhc2tzIHdpbGwgYmUgcXVldWVkIHVudGlsIHRoZVxuXHQgIHNjaGVkdWxlciBpcyByZWxlYXNlZC5cblx0KiovXG5cdGZ1bmN0aW9uIHN1c3BlbmQoKSB7XG5cdCAgc2VtYXBob3JlKys7XG5cdH1cblx0XG5cdC8qKlxuXHQgIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuXG5cdCoqL1xuXHRmdW5jdGlvbiByZWxlYXNlKCkge1xuXHQgIHNlbWFwaG9yZS0tO1xuXHR9XG5cdFxuXHQvKipcblx0ICBSZWxlYXNlcyB0aGUgY3VycmVudCBsb2NrLiBFeGVjdXRlcyBhbGwgcXVldWVkIHRhc2tzIGlmIHRoZSBzY2hlZHVsZXIgaXMgaW4gdGhlIHJlbGVhc2VkIHN0YXRlLlxuXHQqKi9cblx0ZnVuY3Rpb24gZmx1c2goKSB7XG5cdCAgcmVsZWFzZSgpO1xuXHRcblx0ICB2YXIgdGFzayA9IHZvaWQgMDtcblx0ICB3aGlsZSAoIXNlbWFwaG9yZSAmJiAodGFzayA9IHF1ZXVlLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcblx0ICAgIGV4ZWModGFzayk7XG5cdCAgfVxuXHR9XG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NDM6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5hc0VmZmVjdCA9IGV4cG9ydHMudGFrZW0gPSBleHBvcnRzLmRldGFjaCA9IHVuZGVmaW5lZDtcblx0ZXhwb3J0cy50YWtlID0gdGFrZTtcblx0ZXhwb3J0cy5wdXQgPSBwdXQ7XG5cdGV4cG9ydHMuYWxsID0gYWxsO1xuXHRleHBvcnRzLnJhY2UgPSByYWNlO1xuXHRleHBvcnRzLmNhbGwgPSBjYWxsO1xuXHRleHBvcnRzLmFwcGx5ID0gYXBwbHk7XG5cdGV4cG9ydHMuY3BzID0gY3BzO1xuXHRleHBvcnRzLmZvcmsgPSBmb3JrO1xuXHRleHBvcnRzLnNwYXduID0gc3Bhd247XG5cdGV4cG9ydHMuam9pbiA9IGpvaW47XG5cdGV4cG9ydHMuY2FuY2VsID0gY2FuY2VsO1xuXHRleHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcblx0ZXhwb3J0cy5hY3Rpb25DaGFubmVsID0gYWN0aW9uQ2hhbm5lbDtcblx0ZXhwb3J0cy5jYW5jZWxsZWQgPSBjYW5jZWxsZWQ7XG5cdGV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcblx0ZXhwb3J0cy5nZXRDb250ZXh0ID0gZ2V0Q29udGV4dDtcblx0ZXhwb3J0cy5zZXRDb250ZXh0ID0gc2V0Q29udGV4dDtcblx0ZXhwb3J0cy50YWtlRXZlcnkgPSB0YWtlRXZlcnk7XG5cdGV4cG9ydHMudGFrZUxhdGVzdCA9IHRha2VMYXRlc3Q7XG5cdGV4cG9ydHMudGhyb3R0bGUgPSB0aHJvdHRsZTtcblx0XG5cdHZhciBfdXRpbHMgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDApO1xuXHRcblx0dmFyIF9zYWdhSGVscGVycyA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0NCk7XG5cdFxuXHR2YXIgSU8gPSAvKiNfX1BVUkVfXyovKDAsIF91dGlscy5zeW0pKCdJTycpO1xuXHR2YXIgVEFLRSA9ICdUQUtFJztcblx0dmFyIFBVVCA9ICdQVVQnO1xuXHR2YXIgQUxMID0gJ0FMTCc7XG5cdHZhciBSQUNFID0gJ1JBQ0UnO1xuXHR2YXIgQ0FMTCA9ICdDQUxMJztcblx0dmFyIENQUyA9ICdDUFMnO1xuXHR2YXIgRk9SSyA9ICdGT1JLJztcblx0dmFyIEpPSU4gPSAnSk9JTic7XG5cdHZhciBDQU5DRUwgPSAnQ0FOQ0VMJztcblx0dmFyIFNFTEVDVCA9ICdTRUxFQ1QnO1xuXHR2YXIgQUNUSU9OX0NIQU5ORUwgPSAnQUNUSU9OX0NIQU5ORUwnO1xuXHR2YXIgQ0FOQ0VMTEVEID0gJ0NBTkNFTExFRCc7XG5cdHZhciBGTFVTSCA9ICdGTFVTSCc7XG5cdHZhciBHRVRfQ09OVEVYVCA9ICdHRVRfQ09OVEVYVCc7XG5cdHZhciBTRVRfQ09OVEVYVCA9ICdTRVRfQ09OVEVYVCc7XG5cdFxuXHR2YXIgVEVTVF9ISU5UID0gJ1xcbihISU5UOiBpZiB5b3UgYXJlIGdldHRpbmcgdGhpcyBlcnJvcnMgaW4gdGVzdHMsIGNvbnNpZGVyIHVzaW5nIGNyZWF0ZU1vY2tUYXNrIGZyb20gcmVkdXgtc2FnYS91dGlscyknO1xuXHRcblx0dmFyIGVmZmVjdCA9IGZ1bmN0aW9uIGVmZmVjdCh0eXBlLCBwYXlsb2FkKSB7XG5cdCAgdmFyIF9yZWY7XG5cdFxuXHQgIHJldHVybiBfcmVmID0ge30sIF9yZWZbSU9dID0gdHJ1ZSwgX3JlZlt0eXBlXSA9IHBheWxvYWQsIF9yZWY7XG5cdH07XG5cdFxuXHR2YXIgZGV0YWNoID0gZXhwb3J0cy5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goZWZmKSB7XG5cdCAgKDAsIF91dGlscy5jaGVjaykoYXNFZmZlY3QuZm9yayhlZmYpLCBfdXRpbHMuaXMub2JqZWN0LCAnZGV0YWNoKGVmZik6IGFyZ3VtZW50IG11c3QgYmUgYSBmb3JrIGVmZmVjdCcpO1xuXHQgIGVmZltGT1JLXS5kZXRhY2hlZCA9IHRydWU7XG5cdCAgcmV0dXJuIGVmZjtcblx0fTtcblx0XG5cdGZ1bmN0aW9uIHRha2UoKSB7XG5cdCAgdmFyIHBhdHRlcm5PckNoYW5uZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcqJztcblx0XG5cdCAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0ICAgICgwLCBfdXRpbHMuY2hlY2spKGFyZ3VtZW50c1swXSwgX3V0aWxzLmlzLm5vdFVuZGVmLCAndGFrZShwYXR0ZXJuT3JDaGFubmVsKTogcGF0dGVybk9yQ2hhbm5lbCBpcyB1bmRlZmluZWQnKTtcblx0ICB9XG5cdCAgaWYgKF91dGlscy5pcy5wYXR0ZXJuKHBhdHRlcm5PckNoYW5uZWwpKSB7XG5cdCAgICByZXR1cm4gZWZmZWN0KFRBS0UsIHsgcGF0dGVybjogcGF0dGVybk9yQ2hhbm5lbCB9KTtcblx0ICB9XG5cdCAgaWYgKF91dGlscy5pcy5jaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG5cdCAgICByZXR1cm4gZWZmZWN0KFRBS0UsIHsgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbCB9KTtcblx0ICB9XG5cdCAgdGhyb3cgbmV3IEVycm9yKCd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBhcmd1bWVudCAnICsgU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwpICsgJyBpcyBub3QgdmFsaWQgY2hhbm5lbCBvciBhIHZhbGlkIHBhdHRlcm4nKTtcblx0fVxuXHRcblx0dGFrZS5tYXliZSA9IGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgZWZmID0gdGFrZS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG5cdCAgZWZmW1RBS0VdLm1heWJlID0gdHJ1ZTtcblx0ICByZXR1cm4gZWZmO1xuXHR9O1xuXHRcblx0dmFyIHRha2VtID0gLyojX19QVVJFX18qL2V4cG9ydHMudGFrZW0gPSAoMCwgX3V0aWxzLmRlcHJlY2F0ZSkodGFrZS5tYXliZSwgLyojX19QVVJFX18qLygwLCBfdXRpbHMudXBkYXRlSW5jZW50aXZlKSgndGFrZW0nLCAndGFrZS5tYXliZScpKTtcblx0XG5cdGZ1bmN0aW9uIHB1dChjaGFubmVsLCBhY3Rpb24pIHtcblx0ICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0ICAgICgwLCBfdXRpbHMuY2hlY2spKGNoYW5uZWwsIF91dGlscy5pcy5ub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuXHQgICAgKDAsIF91dGlscy5jaGVjaykoY2hhbm5lbCwgX3V0aWxzLmlzLmNoYW5uZWwsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWwnKTtcblx0ICAgICgwLCBfdXRpbHMuY2hlY2spKGFjdGlvbiwgX3V0aWxzLmlzLm5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgKDAsIF91dGlscy5jaGVjaykoY2hhbm5lbCwgX3V0aWxzLmlzLm5vdFVuZGVmLCAncHV0KGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcblx0ICAgIGFjdGlvbiA9IGNoYW5uZWw7XG5cdCAgICBjaGFubmVsID0gbnVsbDtcblx0ICB9XG5cdCAgcmV0dXJuIGVmZmVjdChQVVQsIHsgY2hhbm5lbDogY2hhbm5lbCwgYWN0aW9uOiBhY3Rpb24gfSk7XG5cdH1cblx0XG5cdHB1dC5yZXNvbHZlID0gZnVuY3Rpb24gKCkge1xuXHQgIHZhciBlZmYgPSBwdXQuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuXHQgIGVmZltQVVRdLnJlc29sdmUgPSB0cnVlO1xuXHQgIHJldHVybiBlZmY7XG5cdH07XG5cdFxuXHRwdXQuc3luYyA9IC8qI19fUFVSRV9fKi8oMCwgX3V0aWxzLmRlcHJlY2F0ZSkocHV0LnJlc29sdmUsIC8qI19fUFVSRV9fKi8oMCwgX3V0aWxzLnVwZGF0ZUluY2VudGl2ZSkoJ3B1dC5zeW5jJywgJ3B1dC5yZXNvbHZlJykpO1xuXHRcblx0ZnVuY3Rpb24gYWxsKGVmZmVjdHMpIHtcblx0ICByZXR1cm4gZWZmZWN0KEFMTCwgZWZmZWN0cyk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHJhY2UoZWZmZWN0cykge1xuXHQgIHJldHVybiBlZmZlY3QoUkFDRSwgZWZmZWN0cyk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGdldEZuQ2FsbERlc2MobWV0aCwgZm4sIGFyZ3MpIHtcblx0ICAoMCwgX3V0aWxzLmNoZWNrKShmbiwgX3V0aWxzLmlzLm5vdFVuZGVmLCBtZXRoICsgJzogYXJndW1lbnQgZm4gaXMgdW5kZWZpbmVkJyk7XG5cdFxuXHQgIHZhciBjb250ZXh0ID0gbnVsbDtcblx0ICBpZiAoX3V0aWxzLmlzLmFycmF5KGZuKSkge1xuXHQgICAgdmFyIF9mbiA9IGZuO1xuXHQgICAgY29udGV4dCA9IF9mblswXTtcblx0ICAgIGZuID0gX2ZuWzFdO1xuXHQgIH0gZWxzZSBpZiAoZm4uZm4pIHtcblx0ICAgIHZhciBfZm4yID0gZm47XG5cdCAgICBjb250ZXh0ID0gX2ZuMi5jb250ZXh0O1xuXHQgICAgZm4gPSBfZm4yLmZuO1xuXHQgIH1cblx0ICBpZiAoY29udGV4dCAmJiBfdXRpbHMuaXMuc3RyaW5nKGZuKSAmJiBfdXRpbHMuaXMuZnVuYyhjb250ZXh0W2ZuXSkpIHtcblx0ICAgIGZuID0gY29udGV4dFtmbl07XG5cdCAgfVxuXHQgICgwLCBfdXRpbHMuY2hlY2spKGZuLCBfdXRpbHMuaXMuZnVuYywgbWV0aCArICc6IGFyZ3VtZW50ICcgKyBmbiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XG5cdCAgcmV0dXJuIHsgY29udGV4dDogY29udGV4dCwgZm46IGZuLCBhcmdzOiBhcmdzIH07XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGNhbGwoZm4pIHtcblx0ICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuXHQgIH1cblx0XG5cdCAgcmV0dXJuIGVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjKCdjYWxsJywgZm4sIGFyZ3MpKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gYXBwbHkoY29udGV4dCwgZm4pIHtcblx0ICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG5cdFxuXHQgIHJldHVybiBlZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzYygnYXBwbHknLCB7IGNvbnRleHQ6IGNvbnRleHQsIGZuOiBmbiB9LCBhcmdzKSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGNwcyhmbikge1xuXHQgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcblx0ICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG5cdCAgfVxuXHRcblx0ICByZXR1cm4gZWZmZWN0KENQUywgZ2V0Rm5DYWxsRGVzYygnY3BzJywgZm4sIGFyZ3MpKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gZm9yayhmbikge1xuXHQgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcblx0ICAgIGFyZ3NbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG5cdCAgfVxuXHRcblx0ICByZXR1cm4gZWZmZWN0KEZPUkssIGdldEZuQ2FsbERlc2MoJ2ZvcmsnLCBmbiwgYXJncykpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBzcGF3bihmbikge1xuXHQgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcblx0ICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG5cdCAgfVxuXHRcblx0ICByZXR1cm4gZGV0YWNoKGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbZm5dLmNvbmNhdChhcmdzKSkpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBqb2luKCkge1xuXHQgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgdGFza3MgPSBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuXHQgICAgdGFza3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcblx0ICB9XG5cdFxuXHQgIGlmICh0YXNrcy5sZW5ndGggPiAxKSB7XG5cdCAgICByZXR1cm4gYWxsKHRhc2tzLm1hcChmdW5jdGlvbiAodCkge1xuXHQgICAgICByZXR1cm4gam9pbih0KTtcblx0ICAgIH0pKTtcblx0ICB9XG5cdCAgdmFyIHRhc2sgPSB0YXNrc1swXTtcblx0ICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMubm90VW5kZWYsICdqb2luKHRhc2spOiBhcmd1bWVudCB0YXNrIGlzIHVuZGVmaW5lZCcpO1xuXHQgICgwLCBfdXRpbHMuY2hlY2spKHRhc2ssIF91dGlscy5pcy50YXNrLCAnam9pbih0YXNrKTogYXJndW1lbnQgJyArIHRhc2sgKyAnIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0ICcgKyBURVNUX0hJTlQpO1xuXHQgIHJldHVybiBlZmZlY3QoSk9JTiwgdGFzayk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGNhbmNlbCgpIHtcblx0ICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRhc2tzID0gQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcblx0ICAgIHRhc2tzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG5cdCAgfVxuXHRcblx0ICBpZiAodGFza3MubGVuZ3RoID4gMSkge1xuXHQgICAgcmV0dXJuIGFsbCh0YXNrcy5tYXAoZnVuY3Rpb24gKHQpIHtcblx0ICAgICAgcmV0dXJuIGNhbmNlbCh0KTtcblx0ICAgIH0pKTtcblx0ICB9XG5cdCAgdmFyIHRhc2sgPSB0YXNrc1swXTtcblx0ICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG5cdCAgICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMubm90VW5kZWYsICdjYW5jZWwodGFzayk6IGFyZ3VtZW50IHRhc2sgaXMgdW5kZWZpbmVkJyk7XG5cdCAgICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMudGFzaywgJ2NhbmNlbCh0YXNrKTogYXJndW1lbnQgJyArIHRhc2sgKyAnIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0ICcgKyBURVNUX0hJTlQpO1xuXHQgIH1cblx0ICByZXR1cm4gZWZmZWN0KENBTkNFTCwgdGFzayB8fCBfdXRpbHMuU0VMRl9DQU5DRUxMQVRJT04pO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IpIHtcblx0ICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNyA+IDEgPyBfbGVuNyAtIDEgOiAwKSwgX2tleTcgPSAxOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG5cdCAgICBhcmdzW19rZXk3IC0gMV0gPSBhcmd1bWVudHNbX2tleTddO1xuXHQgIH1cblx0XG5cdCAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0ICAgIHNlbGVjdG9yID0gX3V0aWxzLmlkZW50O1xuXHQgIH0gZWxzZSB7XG5cdCAgICAoMCwgX3V0aWxzLmNoZWNrKShzZWxlY3RvciwgX3V0aWxzLmlzLm5vdFVuZGVmLCAnc2VsZWN0KHNlbGVjdG9yLFsuLi5dKTogYXJndW1lbnQgc2VsZWN0b3IgaXMgdW5kZWZpbmVkJyk7XG5cdCAgICAoMCwgX3V0aWxzLmNoZWNrKShzZWxlY3RvciwgX3V0aWxzLmlzLmZ1bmMsICdzZWxlY3Qoc2VsZWN0b3IsWy4uLl0pOiBhcmd1bWVudCAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdCAgfVxuXHQgIHJldHVybiBlZmZlY3QoU0VMRUNULCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgYXJnczogYXJncyB9KTtcblx0fVxuXHRcblx0LyoqXG5cdCAgY2hhbm5lbChwYXR0ZXJuLCBbYnVmZmVyXSkgICAgPT4gY3JlYXRlcyBhbiBldmVudCBjaGFubmVsIGZvciBzdG9yZSBhY3Rpb25zXG5cdCoqL1xuXHRmdW5jdGlvbiBhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcikge1xuXHQgICgwLCBfdXRpbHMuY2hlY2spKHBhdHRlcm4sIF91dGlscy5pcy5ub3RVbmRlZiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwuLi4pOiBhcmd1bWVudCBwYXR0ZXJuIGlzIHVuZGVmaW5lZCcpO1xuXHQgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHQgICAgKDAsIF91dGlscy5jaGVjaykoYnVmZmVyLCBfdXRpbHMuaXMubm90VW5kZWYsICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50IGJ1ZmZlciBpcyB1bmRlZmluZWQnKTtcblx0ICAgICgwLCBfdXRpbHMuY2hlY2spKGJ1ZmZlciwgX3V0aWxzLmlzLmJ1ZmZlciwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgJyArIGJ1ZmZlciArICcgaXMgbm90IGEgdmFsaWQgYnVmZmVyJyk7XG5cdCAgfVxuXHQgIHJldHVybiBlZmZlY3QoQUNUSU9OX0NIQU5ORUwsIHsgcGF0dGVybjogcGF0dGVybiwgYnVmZmVyOiBidWZmZXIgfSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGNhbmNlbGxlZCgpIHtcblx0ICByZXR1cm4gZWZmZWN0KENBTkNFTExFRCwge30pO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBmbHVzaChjaGFubmVsKSB7XG5cdCAgKDAsIF91dGlscy5jaGVjaykoY2hhbm5lbCwgX3V0aWxzLmlzLmNoYW5uZWwsICdmbHVzaChjaGFubmVsKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsJyk7XG5cdCAgcmV0dXJuIGVmZmVjdChGTFVTSCwgY2hhbm5lbCk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGdldENvbnRleHQocHJvcCkge1xuXHQgICgwLCBfdXRpbHMuY2hlY2spKHByb3AsIF91dGlscy5pcy5zdHJpbmcsICdnZXRDb250ZXh0KHByb3ApOiBhcmd1bWVudCAnICsgcHJvcCArICcgaXMgbm90IGEgc3RyaW5nJyk7XG5cdCAgcmV0dXJuIGVmZmVjdChHRVRfQ09OVEVYVCwgcHJvcCk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcblx0ICAoMCwgX3V0aWxzLmNoZWNrKShwcm9wcywgX3V0aWxzLmlzLm9iamVjdCwgKDAsIF91dGlscy5jcmVhdGVTZXRDb250ZXh0V2FybmluZykobnVsbCwgcHJvcHMpKTtcblx0ICByZXR1cm4gZWZmZWN0KFNFVF9DT05URVhULCBwcm9wcyk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHRha2VFdmVyeShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcblx0ICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuOCA+IDIgPyBfbGVuOCAtIDIgOiAwKSwgX2tleTggPSAyOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG5cdCAgICBhcmdzW19rZXk4IC0gMl0gPSBhcmd1bWVudHNbX2tleThdO1xuXHQgIH1cblx0XG5cdCAgcmV0dXJuIGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbX3NhZ2FIZWxwZXJzLnRha2VFdmVyeUhlbHBlciwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiB0YWtlTGF0ZXN0KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuXHQgIGZvciAodmFyIF9sZW45ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW45ID4gMiA/IF9sZW45IC0gMiA6IDApLCBfa2V5OSA9IDI7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcblx0ICAgIGFyZ3NbX2tleTkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5OV07XG5cdCAgfVxuXHRcblx0ICByZXR1cm4gZm9yay5hcHBseSh1bmRlZmluZWQsIFtfc2FnYUhlbHBlcnMudGFrZUxhdGVzdEhlbHBlciwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiB0aHJvdHRsZShtcywgcGF0dGVybiwgd29ya2VyKSB7XG5cdCAgZm9yICh2YXIgX2xlbjEwID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4xMCA+IDMgPyBfbGVuMTAgLSAzIDogMCksIF9rZXkxMCA9IDM7IF9rZXkxMCA8IF9sZW4xMDsgX2tleTEwKyspIHtcblx0ICAgIGFyZ3NbX2tleTEwIC0gM10gPSBhcmd1bWVudHNbX2tleTEwXTtcblx0ICB9XG5cdFxuXHQgIHJldHVybiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW19zYWdhSGVscGVycy50aHJvdHRsZUhlbHBlciwgbXMsIHBhdHRlcm4sIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcblx0fVxuXHRcblx0dmFyIGNyZWF0ZUFzRWZmZWN0VHlwZSA9IGZ1bmN0aW9uIGNyZWF0ZUFzRWZmZWN0VHlwZSh0eXBlKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIChlZmZlY3QpIHtcblx0ICAgIHJldHVybiBlZmZlY3QgJiYgZWZmZWN0W0lPXSAmJiBlZmZlY3RbdHlwZV07XG5cdCAgfTtcblx0fTtcblx0XG5cdHZhciBhc0VmZmVjdCA9IGV4cG9ydHMuYXNFZmZlY3QgPSB7XG5cdCAgdGFrZTogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShUQUtFKSxcblx0ICBwdXQ6IC8qI19fUFVSRV9fKi9jcmVhdGVBc0VmZmVjdFR5cGUoUFVUKSxcblx0ICBhbGw6IC8qI19fUFVSRV9fKi9jcmVhdGVBc0VmZmVjdFR5cGUoQUxMKSxcblx0ICByYWNlOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKFJBQ0UpLFxuXHQgIGNhbGw6IC8qI19fUFVSRV9fKi9jcmVhdGVBc0VmZmVjdFR5cGUoQ0FMTCksXG5cdCAgY3BzOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKENQUyksXG5cdCAgZm9yazogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShGT1JLKSxcblx0ICBqb2luOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKEpPSU4pLFxuXHQgIGNhbmNlbDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShDQU5DRUwpLFxuXHQgIHNlbGVjdDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShTRUxFQ1QpLFxuXHQgIGFjdGlvbkNoYW5uZWw6IC8qI19fUFVSRV9fKi9jcmVhdGVBc0VmZmVjdFR5cGUoQUNUSU9OX0NIQU5ORUwpLFxuXHQgIGNhbmNlbGxlZDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShDQU5DRUxMRUQpLFxuXHQgIGZsdXNoOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKEZMVVNIKSxcblx0ICBnZXRDb250ZXh0OiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKEdFVF9DT05URVhUKSxcblx0ICBzZXRDb250ZXh0OiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKFNFVF9DT05URVhUKVxuXHR9O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNzQ0OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMudGhyb3R0bGVIZWxwZXIgPSBleHBvcnRzLnRha2VMYXRlc3RIZWxwZXIgPSBleHBvcnRzLnRha2VFdmVyeUhlbHBlciA9IGV4cG9ydHMudGhyb3R0bGUgPSBleHBvcnRzLnRha2VMYXRlc3QgPSBleHBvcnRzLnRha2VFdmVyeSA9IHVuZGVmaW5lZDtcblx0XG5cdHZhciBfdGFrZUV2ZXJ5ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQ1KTtcblx0XG5cdHZhciBfdGFrZUV2ZXJ5MiA9IC8qI19fUFVSRV9fKi9faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWtlRXZlcnkpO1xuXHRcblx0dmFyIF90YWtlTGF0ZXN0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQ5KTtcblx0XG5cdHZhciBfdGFrZUxhdGVzdDIgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFrZUxhdGVzdCk7XG5cdFxuXHR2YXIgX3Rocm90dGxlID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzUwKTtcblx0XG5cdHZhciBfdGhyb3R0bGUyID0gLyojX19QVVJFX18qL19pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rocm90dGxlKTtcblx0XG5cdHZhciBfdXRpbHMgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDApO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdHZhciBkZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiBkZXByZWNhdGlvbldhcm5pbmcoaGVscGVyTmFtZSkge1xuXHQgIHJldHVybiAnaW1wb3J0IHsgJyArIGhlbHBlck5hbWUgKyAnIH0gZnJvbSBcXCdyZWR1eC1zYWdhXFwnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgaW1wb3J0IHsgJyArIGhlbHBlck5hbWUgKyAnIH0gZnJvbSBcXCdyZWR1eC1zYWdhL2VmZmVjdHNcXCcuXFxuVGhlIGxhdHRlciB3aWxsIG5vdCB3b3JrIHdpdGggeWllbGQqLCBhcyBoZWxwZXIgZWZmZWN0cyBhcmUgd3JhcHBlZCBhdXRvbWF0aWNhbGx5IGZvciB5b3UgaW4gZm9yayBlZmZlY3QuXFxuVGhlcmVmb3JlIHlpZWxkICcgKyBoZWxwZXJOYW1lICsgJyB3aWxsIHJldHVybiB0YXNrIGRlc2NyaXB0b3IgdG8geW91ciBzYWdhIGFuZCBleGVjdXRlIG5leHQgbGluZXMgb2YgY29kZS4nO1xuXHR9O1xuXHRcblx0dmFyIHRha2VFdmVyeSA9IC8qI19fUFVSRV9fKi8oMCwgX3V0aWxzLmRlcHJlY2F0ZSkoX3Rha2VFdmVyeTIuZGVmYXVsdCwgLyojX19QVVJFX18qL2RlcHJlY2F0aW9uV2FybmluZygndGFrZUV2ZXJ5JykpO1xuXHR2YXIgdGFrZUxhdGVzdCA9IC8qI19fUFVSRV9fKi8oMCwgX3V0aWxzLmRlcHJlY2F0ZSkoX3Rha2VMYXRlc3QyLmRlZmF1bHQsIC8qI19fUFVSRV9fKi9kZXByZWNhdGlvbldhcm5pbmcoJ3Rha2VMYXRlc3QnKSk7XG5cdHZhciB0aHJvdHRsZSA9IC8qI19fUFVSRV9fKi8oMCwgX3V0aWxzLmRlcHJlY2F0ZSkoX3Rocm90dGxlMi5kZWZhdWx0LCAvKiNfX1BVUkVfXyovZGVwcmVjYXRpb25XYXJuaW5nKCd0aHJvdHRsZScpKTtcblx0XG5cdGV4cG9ydHMudGFrZUV2ZXJ5ID0gdGFrZUV2ZXJ5O1xuXHRleHBvcnRzLnRha2VMYXRlc3QgPSB0YWtlTGF0ZXN0O1xuXHRleHBvcnRzLnRocm90dGxlID0gdGhyb3R0bGU7XG5cdGV4cG9ydHMudGFrZUV2ZXJ5SGVscGVyID0gX3Rha2VFdmVyeTIuZGVmYXVsdDtcblx0ZXhwb3J0cy50YWtlTGF0ZXN0SGVscGVyID0gX3Rha2VMYXRlc3QyLmRlZmF1bHQ7XG5cdGV4cG9ydHMudGhyb3R0bGVIZWxwZXIgPSBfdGhyb3R0bGUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NDU6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gdGFrZUV2ZXJ5O1xuXHRcblx0dmFyIF9mc21JdGVyYXRvciA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0Nik7XG5cdFxuXHR2YXIgX2ZzbUl0ZXJhdG9yMiA9IC8qI19fUFVSRV9fKi9faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mc21JdGVyYXRvcik7XG5cdFxuXHR2YXIgX2lvID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQzKTtcblx0XG5cdHZhciBfY2hhbm5lbCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0Nyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuXHQgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgfVxuXHRcblx0ICB2YXIgeVRha2UgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby50YWtlKShwYXR0ZXJuT3JDaGFubmVsKSB9O1xuXHQgIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG5cdCAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IF9pby5mb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKSB9O1xuXHQgIH07XG5cdFxuXHQgIHZhciBhY3Rpb24gPSB2b2lkIDAsXG5cdCAgICAgIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuXHQgICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuXHQgIH07XG5cdFxuXHQgIHJldHVybiAoMCwgX2ZzbUl0ZXJhdG9yMi5kZWZhdWx0KSh7XG5cdCAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG5cdCAgICAgIHJldHVybiBbJ3EyJywgeVRha2UsIHNldEFjdGlvbl07XG5cdCAgICB9LFxuXHQgICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuXHQgICAgICByZXR1cm4gYWN0aW9uID09PSBfY2hhbm5lbC5FTkQgPyBbX2ZzbUl0ZXJhdG9yLnFFbmRdIDogWydxMScsIHlGb3JrKGFjdGlvbildO1xuXHQgICAgfVxuXHQgIH0sICdxMScsICd0YWtlRXZlcnkoJyArICgwLCBfZnNtSXRlcmF0b3Iuc2FmZU5hbWUpKHBhdHRlcm5PckNoYW5uZWwpICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcblx0fVxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzQ2OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucUVuZCA9IHVuZGVmaW5lZDtcblx0ZXhwb3J0cy5zYWZlTmFtZSA9IHNhZmVOYW1lO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBmc21JdGVyYXRvcjtcblx0XG5cdHZhciBfdXRpbHMgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDApO1xuXHRcblx0dmFyIGRvbmUgPSB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfTtcblx0dmFyIHFFbmQgPSBleHBvcnRzLnFFbmQgPSB7fTtcblx0XG5cdGZ1bmN0aW9uIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpIHtcblx0ICBpZiAoX3V0aWxzLmlzLmNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcblx0ICAgIHJldHVybiAnY2hhbm5lbCc7XG5cdCAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdHRlcm5PckNoYW5uZWwpKSB7XG5cdCAgICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuXHQgICAgICByZXR1cm4gU3RyaW5nKGVudHJ5KTtcblx0ICAgIH0pKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKTtcblx0ICB9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGZzbUl0ZXJhdG9yKGZzbSwgcTApIHtcblx0ICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2l0ZXJhdG9yJztcblx0XG5cdCAgdmFyIHVwZGF0ZVN0YXRlID0gdm9pZCAwLFxuXHQgICAgICBxTmV4dCA9IHEwO1xuXHRcblx0ICBmdW5jdGlvbiBuZXh0KGFyZywgZXJyb3IpIHtcblx0ICAgIGlmIChxTmV4dCA9PT0gcUVuZCkge1xuXHQgICAgICByZXR1cm4gZG9uZTtcblx0ICAgIH1cblx0XG5cdCAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgcU5leHQgPSBxRW5kO1xuXHQgICAgICB0aHJvdyBlcnJvcjtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHVwZGF0ZVN0YXRlICYmIHVwZGF0ZVN0YXRlKGFyZyk7XG5cdFxuXHQgICAgICB2YXIgX2ZzbSRxTmV4dCA9IGZzbVtxTmV4dF0oKSxcblx0ICAgICAgICAgIHEgPSBfZnNtJHFOZXh0WzBdLFxuXHQgICAgICAgICAgb3V0cHV0ID0gX2ZzbSRxTmV4dFsxXSxcblx0ICAgICAgICAgIF91cGRhdGVTdGF0ZSA9IF9mc20kcU5leHRbMl07XG5cdFxuXHQgICAgICBxTmV4dCA9IHE7XG5cdCAgICAgIHVwZGF0ZVN0YXRlID0gX3VwZGF0ZVN0YXRlO1xuXHQgICAgICByZXR1cm4gcU5leHQgPT09IHFFbmQgPyBkb25lIDogb3V0cHV0O1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgcmV0dXJuICgwLCBfdXRpbHMubWFrZUl0ZXJhdG9yKShuZXh0LCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0ICAgIHJldHVybiBuZXh0KG51bGwsIGVycm9yKTtcblx0ICB9LCBuYW1lLCB0cnVlKTtcblx0fVxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzQ3OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7J3VzZSBzdHJpY3QnO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5VTkRFRklORURfSU5QVVRfRVJST1IgPSBleHBvcnRzLklOVkFMSURfQlVGRkVSID0gZXhwb3J0cy5pc0VuZCA9IGV4cG9ydHMuRU5EID0gdW5kZWZpbmVkO1xuXHRcblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblx0XG5cdGV4cG9ydHMuZW1pdHRlciA9IGVtaXR0ZXI7XG5cdGV4cG9ydHMuY2hhbm5lbCA9IGNoYW5uZWw7XG5cdGV4cG9ydHMuZXZlbnRDaGFubmVsID0gZXZlbnRDaGFubmVsO1xuXHRleHBvcnRzLnN0ZENoYW5uZWwgPSBzdGRDaGFubmVsO1xuXHRcblx0dmFyIF91dGlscyA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0MCk7XG5cdFxuXHR2YXIgX2J1ZmZlcnMgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDgpO1xuXHRcblx0dmFyIF9zY2hlZHVsZXIgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDIpO1xuXHRcblx0dmFyIENIQU5ORUxfRU5EX1RZUEUgPSAnQEByZWR1eC1zYWdhL0NIQU5ORUxfRU5EJztcblx0dmFyIEVORCA9IGV4cG9ydHMuRU5EID0geyB0eXBlOiBDSEFOTkVMX0VORF9UWVBFIH07XG5cdHZhciBpc0VuZCA9IGV4cG9ydHMuaXNFbmQgPSBmdW5jdGlvbiBpc0VuZChhKSB7XG5cdCAgcmV0dXJuIGEgJiYgYS50eXBlID09PSBDSEFOTkVMX0VORF9UWVBFO1xuXHR9O1xuXHRcblx0ZnVuY3Rpb24gZW1pdHRlcigpIHtcblx0ICB2YXIgc3Vic2NyaWJlcnMgPSBbXTtcblx0XG5cdCAgZnVuY3Rpb24gc3Vic2NyaWJlKHN1Yikge1xuXHQgICAgc3Vic2NyaWJlcnMucHVzaChzdWIpO1xuXHQgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuICgwLCBfdXRpbHMucmVtb3ZlKShzdWJzY3JpYmVycywgc3ViKTtcblx0ICAgIH07XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBlbWl0KGl0ZW0pIHtcblx0ICAgIHZhciBhcnIgPSBzdWJzY3JpYmVycy5zbGljZSgpO1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBhcnJbaV0oaXRlbSk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICByZXR1cm4ge1xuXHQgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG5cdCAgICBlbWl0OiBlbWl0XG5cdCAgfTtcblx0fVxuXHRcblx0dmFyIElOVkFMSURfQlVGRkVSID0gZXhwb3J0cy5JTlZBTElEX0JVRkZFUiA9ICdpbnZhbGlkIGJ1ZmZlciBwYXNzZWQgdG8gY2hhbm5lbCBmYWN0b3J5IGZ1bmN0aW9uJztcblx0dmFyIFVOREVGSU5FRF9JTlBVVF9FUlJPUiA9IGV4cG9ydHMuVU5ERUZJTkVEX0lOUFVUX0VSUk9SID0gJ1NhZ2Egd2FzIHByb3ZpZGVkIHdpdGggYW4gdW5kZWZpbmVkIGFjdGlvbic7XG5cdFxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHQgIGV4cG9ydHMuVU5ERUZJTkVEX0lOUFVUX0VSUk9SID0gVU5ERUZJTkVEX0lOUFVUX0VSUk9SICs9ICdcXG5IaW50czpcXG4gICAgLSBjaGVjayB0aGF0IHlvdXIgQWN0aW9uIENyZWF0b3IgcmV0dXJucyBhIG5vbi11bmRlZmluZWQgdmFsdWVcXG4gICAgLSBpZiB0aGUgU2FnYSB3YXMgc3RhcnRlZCB1c2luZyBydW5TYWdhLCBjaGVjayB0aGF0IHlvdXIgc3Vic2NyaWJlIHNvdXJjZSBwcm92aWRlcyB0aGUgYWN0aW9uIHRvIGl0cyBsaXN0ZW5lcnNcXG4gICc7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGNoYW5uZWwoKSB7XG5cdCAgdmFyIGJ1ZmZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX2J1ZmZlcnMuYnVmZmVycy5maXhlZCgpO1xuXHRcblx0ICB2YXIgY2xvc2VkID0gZmFsc2U7XG5cdCAgdmFyIHRha2VycyA9IFtdO1xuXHRcblx0ICAoMCwgX3V0aWxzLmNoZWNrKShidWZmZXIsIF91dGlscy5pcy5idWZmZXIsIElOVkFMSURfQlVGRkVSKTtcblx0XG5cdCAgZnVuY3Rpb24gY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKSB7XG5cdCAgICBpZiAoY2xvc2VkICYmIHRha2Vycy5sZW5ndGgpIHtcblx0ICAgICAgdGhyb3cgKDAsIF91dGlscy5pbnRlcm5hbEVycikoJ0Nhbm5vdCBoYXZlIGEgY2xvc2VkIGNoYW5uZWwgd2l0aCBwZW5kaW5nIHRha2VycycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRha2Vycy5sZW5ndGggJiYgIWJ1ZmZlci5pc0VtcHR5KCkpIHtcblx0ICAgICAgdGhyb3cgKDAsIF91dGlscy5pbnRlcm5hbEVycikoJ0Nhbm5vdCBoYXZlIHBlbmRpbmcgdGFrZXJzIHdpdGggbm9uIGVtcHR5IGJ1ZmZlcicpO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gcHV0KGlucHV0KSB7XG5cdCAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuXHQgICAgKDAsIF91dGlscy5jaGVjaykoaW5wdXQsIF91dGlscy5pcy5ub3RVbmRlZiwgVU5ERUZJTkVEX0lOUFVUX0VSUk9SKTtcblx0ICAgIGlmIChjbG9zZWQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgaWYgKCF0YWtlcnMubGVuZ3RoKSB7XG5cdCAgICAgIHJldHVybiBidWZmZXIucHV0KGlucHV0KTtcblx0ICAgIH1cblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFrZXJzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciBjYiA9IHRha2Vyc1tpXTtcblx0ICAgICAgaWYgKCFjYltfdXRpbHMuTUFUQ0hdIHx8IGNiW191dGlscy5NQVRDSF0oaW5wdXQpKSB7XG5cdCAgICAgICAgdGFrZXJzLnNwbGljZShpLCAxKTtcblx0ICAgICAgICByZXR1cm4gY2IoaW5wdXQpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiB0YWtlKGNiKSB7XG5cdCAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuXHQgICAgKDAsIF91dGlscy5jaGVjaykoY2IsIF91dGlscy5pcy5mdW5jLCBcImNoYW5uZWwudGFrZSdzIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcblx0XG5cdCAgICBpZiAoY2xvc2VkICYmIGJ1ZmZlci5pc0VtcHR5KCkpIHtcblx0ICAgICAgY2IoRU5EKTtcblx0ICAgIH0gZWxzZSBpZiAoIWJ1ZmZlci5pc0VtcHR5KCkpIHtcblx0ICAgICAgY2IoYnVmZmVyLnRha2UoKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0YWtlcnMucHVzaChjYik7XG5cdCAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gKDAsIF91dGlscy5yZW1vdmUpKHRha2VycywgY2IpO1xuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gZmx1c2goY2IpIHtcblx0ICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7IC8vIFRPRE86IGNoZWNrIGlmIHNvbWUgbmV3IHN0YXRlIHNob3VsZCBiZSBmb3JiaWRkZW4gbm93XG5cdCAgICAoMCwgX3V0aWxzLmNoZWNrKShjYiwgX3V0aWxzLmlzLmZ1bmMsIFwiY2hhbm5lbC5mbHVzaCcgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuXHQgICAgaWYgKGNsb3NlZCAmJiBidWZmZXIuaXNFbXB0eSgpKSB7XG5cdCAgICAgIGNiKEVORCk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGNiKGJ1ZmZlci5mbHVzaCgpKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNsb3NlKCkge1xuXHQgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcblx0ICAgIGlmICghY2xvc2VkKSB7XG5cdCAgICAgIGNsb3NlZCA9IHRydWU7XG5cdCAgICAgIGlmICh0YWtlcnMubGVuZ3RoKSB7XG5cdCAgICAgICAgdmFyIGFyciA9IHRha2Vycztcblx0ICAgICAgICB0YWtlcnMgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgICBhcnJbaV0oRU5EKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIHJldHVybiB7XG5cdCAgICB0YWtlOiB0YWtlLFxuXHQgICAgcHV0OiBwdXQsXG5cdCAgICBmbHVzaDogZmx1c2gsXG5cdCAgICBjbG9zZTogY2xvc2UsXG5cdCAgICBnZXQgX190YWtlcnNfXygpIHtcblx0ICAgICAgcmV0dXJuIHRha2Vycztcblx0ICAgIH0sXG5cdCAgICBnZXQgX19jbG9zZWRfXygpIHtcblx0ICAgICAgcmV0dXJuIGNsb3NlZDtcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBldmVudENoYW5uZWwoc3Vic2NyaWJlKSB7XG5cdCAgdmFyIGJ1ZmZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX2J1ZmZlcnMuYnVmZmVycy5ub25lKCk7XG5cdCAgdmFyIG1hdGNoZXIgPSBhcmd1bWVudHNbMl07XG5cdFxuXHQgIC8qKlxuXHQgICAgc2hvdWxkIGJlIGlmKHR5cGVvZiBtYXRjaGVyICE9PSB1bmRlZmluZWQpIGluc3RlYWQ/XG5cdCAgICBzZWUgUFIgIzI3MyBmb3IgYSBiYWNrZ3JvdW5kIGRpc2N1c3Npb25cblx0ICAqKi9cblx0ICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0ICAgICgwLCBfdXRpbHMuY2hlY2spKG1hdGNoZXIsIF91dGlscy5pcy5mdW5jLCAnSW52YWxpZCBtYXRjaCBmdW5jdGlvbiBwYXNzZWQgdG8gZXZlbnRDaGFubmVsJyk7XG5cdCAgfVxuXHRcblx0ICB2YXIgY2hhbiA9IGNoYW5uZWwoYnVmZmVyKTtcblx0ICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcblx0ICAgIGlmICghY2hhbi5fX2Nsb3NlZF9fKSB7XG5cdCAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuXHQgICAgICAgIHVuc3Vic2NyaWJlKCk7XG5cdCAgICAgIH1cblx0ICAgICAgY2hhbi5jbG9zZSgpO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGZ1bmN0aW9uIChpbnB1dCkge1xuXHQgICAgaWYgKGlzRW5kKGlucHV0KSkge1xuXHQgICAgICBjbG9zZSgpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpZiAobWF0Y2hlciAmJiAhbWF0Y2hlcihpbnB1dCkpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgY2hhbi5wdXQoaW5wdXQpO1xuXHQgIH0pO1xuXHQgIGlmIChjaGFuLl9fY2xvc2VkX18pIHtcblx0ICAgIHVuc3Vic2NyaWJlKCk7XG5cdCAgfVxuXHRcblx0ICBpZiAoIV91dGlscy5pcy5mdW5jKHVuc3Vic2NyaWJlKSkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdpbiBldmVudENoYW5uZWw6IHN1YnNjcmliZSBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gdG8gdW5zdWJzY3JpYmUnKTtcblx0ICB9XG5cdFxuXHQgIHJldHVybiB7XG5cdCAgICB0YWtlOiBjaGFuLnRha2UsXG5cdCAgICBmbHVzaDogY2hhbi5mbHVzaCxcblx0ICAgIGNsb3NlOiBjbG9zZVxuXHQgIH07XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHN0ZENoYW5uZWwoc3Vic2NyaWJlKSB7XG5cdCAgdmFyIGNoYW4gPSBldmVudENoYW5uZWwoZnVuY3Rpb24gKGNiKSB7XG5cdCAgICByZXR1cm4gc3Vic2NyaWJlKGZ1bmN0aW9uIChpbnB1dCkge1xuXHQgICAgICBpZiAoaW5wdXRbX3V0aWxzLlNBR0FfQUNUSU9OXSkge1xuXHQgICAgICAgIGNiKGlucHV0KTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgKDAsIF9zY2hlZHVsZXIuYXNhcCkoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBjYihpbnB1dCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfSk7XG5cdCAgfSk7XG5cdFxuXHQgIHJldHVybiBfZXh0ZW5kcyh7fSwgY2hhbiwge1xuXHQgICAgdGFrZTogZnVuY3Rpb24gdGFrZShjYiwgbWF0Y2hlcikge1xuXHQgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0ICAgICAgICAoMCwgX3V0aWxzLmNoZWNrKShtYXRjaGVyLCBfdXRpbHMuaXMuZnVuYywgXCJjaGFubmVsLnRha2UncyBtYXRjaGVyIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcblx0ICAgICAgICBjYltfdXRpbHMuTUFUQ0hdID0gbWF0Y2hlcjtcblx0ICAgICAgfVxuXHQgICAgICBjaGFuLnRha2UoY2IpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIDc0ODpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuYnVmZmVycyA9IGV4cG9ydHMuQlVGRkVSX09WRVJGTE9XID0gdW5kZWZpbmVkO1xuXHRcblx0dmFyIF91dGlscyA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0MCk7XG5cdFxuXHR2YXIgQlVGRkVSX09WRVJGTE9XID0gZXhwb3J0cy5CVUZGRVJfT1ZFUkZMT1cgPSBcIkNoYW5uZWwncyBCdWZmZXIgb3ZlcmZsb3chXCI7XG5cdFxuXHR2YXIgT05fT1ZFUkZMT1dfVEhST1cgPSAxO1xuXHR2YXIgT05fT1ZFUkZMT1dfRFJPUCA9IDI7XG5cdHZhciBPTl9PVkVSRkxPV19TTElERSA9IDM7XG5cdHZhciBPTl9PVkVSRkxPV19FWFBBTkQgPSA0O1xuXHRcblx0dmFyIHplcm9CdWZmZXIgPSB7IGlzRW1wdHk6IF91dGlscy5rVHJ1ZSwgcHV0OiBfdXRpbHMubm9vcCwgdGFrZTogX3V0aWxzLm5vb3AgfTtcblx0XG5cdGZ1bmN0aW9uIHJpbmdCdWZmZXIoKSB7XG5cdCAgdmFyIGxpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxMDtcblx0ICB2YXIgb3ZlcmZsb3dBY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cdFxuXHQgIHZhciBhcnIgPSBuZXcgQXJyYXkobGltaXQpO1xuXHQgIHZhciBsZW5ndGggPSAwO1xuXHQgIHZhciBwdXNoSW5kZXggPSAwO1xuXHQgIHZhciBwb3BJbmRleCA9IDA7XG5cdFxuXHQgIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChpdCkge1xuXHQgICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcblx0ICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuXHQgICAgbGVuZ3RoKys7XG5cdCAgfTtcblx0XG5cdCAgdmFyIHRha2UgPSBmdW5jdGlvbiB0YWtlKCkge1xuXHQgICAgaWYgKGxlbmd0aCAhPSAwKSB7XG5cdCAgICAgIHZhciBpdCA9IGFycltwb3BJbmRleF07XG5cdCAgICAgIGFycltwb3BJbmRleF0gPSBudWxsO1xuXHQgICAgICBsZW5ndGgtLTtcblx0ICAgICAgcG9wSW5kZXggPSAocG9wSW5kZXggKyAxKSAlIGxpbWl0O1xuXHQgICAgICByZXR1cm4gaXQ7XG5cdCAgICB9XG5cdCAgfTtcblx0XG5cdCAgdmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG5cdCAgICB2YXIgaXRlbXMgPSBbXTtcblx0ICAgIHdoaWxlIChsZW5ndGgpIHtcblx0ICAgICAgaXRlbXMucHVzaCh0YWtlKCkpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGl0ZW1zO1xuXHQgIH07XG5cdFxuXHQgIHJldHVybiB7XG5cdCAgICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuXHQgICAgICByZXR1cm4gbGVuZ3RoID09IDA7XG5cdCAgICB9LFxuXHQgICAgcHV0OiBmdW5jdGlvbiBwdXQoaXQpIHtcblx0ICAgICAgaWYgKGxlbmd0aCA8IGxpbWl0KSB7XG5cdCAgICAgICAgcHVzaChpdCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdmFyIGRvdWJsZWRMaW1pdCA9IHZvaWQgMDtcblx0ICAgICAgICBzd2l0Y2ggKG92ZXJmbG93QWN0aW9uKSB7XG5cdCAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1RIUk9XOlxuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoQlVGRkVSX09WRVJGTE9XKTtcblx0ICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfU0xJREU6XG5cdCAgICAgICAgICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG5cdCAgICAgICAgICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuXHQgICAgICAgICAgICBwb3BJbmRleCA9IHB1c2hJbmRleDtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX0VYUEFORDpcblx0ICAgICAgICAgICAgZG91YmxlZExpbWl0ID0gMiAqIGxpbWl0O1xuXHRcblx0ICAgICAgICAgICAgYXJyID0gZmx1c2goKTtcblx0XG5cdCAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHB1c2hJbmRleCA9IGFyci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHBvcEluZGV4ID0gMDtcblx0XG5cdCAgICAgICAgICAgIGFyci5sZW5ndGggPSBkb3VibGVkTGltaXQ7XG5cdCAgICAgICAgICAgIGxpbWl0ID0gZG91YmxlZExpbWl0O1xuXHRcblx0ICAgICAgICAgICAgcHVzaChpdCk7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgIC8vIERST1Bcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICB0YWtlOiB0YWtlLFxuXHQgICAgZmx1c2g6IGZsdXNoXG5cdCAgfTtcblx0fVxuXHRcblx0dmFyIGJ1ZmZlcnMgPSBleHBvcnRzLmJ1ZmZlcnMgPSB7XG5cdCAgbm9uZTogZnVuY3Rpb24gbm9uZSgpIHtcblx0ICAgIHJldHVybiB6ZXJvQnVmZmVyO1xuXHQgIH0sXG5cdCAgZml4ZWQ6IGZ1bmN0aW9uIGZpeGVkKGxpbWl0KSB7XG5cdCAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfVEhST1cpO1xuXHQgIH0sXG5cdCAgZHJvcHBpbmc6IGZ1bmN0aW9uIGRyb3BwaW5nKGxpbWl0KSB7XG5cdCAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfRFJPUCk7XG5cdCAgfSxcblx0ICBzbGlkaW5nOiBmdW5jdGlvbiBzbGlkaW5nKGxpbWl0KSB7XG5cdCAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfU0xJREUpO1xuXHQgIH0sXG5cdCAgZXhwYW5kaW5nOiBmdW5jdGlvbiBleHBhbmRpbmcoaW5pdGlhbFNpemUpIHtcblx0ICAgIHJldHVybiByaW5nQnVmZmVyKGluaXRpYWxTaXplLCBPTl9PVkVSRkxPV19FWFBBTkQpO1xuXHQgIH1cblx0fTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDc0OTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLmRlZmF1bHQgPSB0YWtlTGF0ZXN0O1xuXHRcblx0dmFyIF9mc21JdGVyYXRvciA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0Nik7XG5cdFxuXHR2YXIgX2ZzbUl0ZXJhdG9yMiA9IC8qI19fUFVSRV9fKi9faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mc21JdGVyYXRvcik7XG5cdFxuXHR2YXIgX2lvID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQzKTtcblx0XG5cdHZhciBfY2hhbm5lbCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0Nyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcblx0ICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuXHQgIH1cblx0XG5cdCAgdmFyIHlUYWtlID0geyBkb25lOiBmYWxzZSwgdmFsdWU6ICgwLCBfaW8udGFrZSkocGF0dGVybk9yQ2hhbm5lbCkgfTtcblx0ICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuXHQgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBfaW8uZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcblx0ICB9O1xuXHQgIHZhciB5Q2FuY2VsID0gZnVuY3Rpb24geUNhbmNlbCh0YXNrKSB7XG5cdCAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6ICgwLCBfaW8uY2FuY2VsKSh0YXNrKSB9O1xuXHQgIH07XG5cdFxuXHQgIHZhciB0YXNrID0gdm9pZCAwLFxuXHQgICAgICBhY3Rpb24gPSB2b2lkIDA7XG5cdCAgdmFyIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRUYXNrKHQpIHtcblx0ICAgIHJldHVybiB0YXNrID0gdDtcblx0ICB9O1xuXHQgIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcblx0ICAgIHJldHVybiBhY3Rpb24gPSBhYztcblx0ICB9O1xuXHRcblx0ICByZXR1cm4gKDAsIF9mc21JdGVyYXRvcjIuZGVmYXVsdCkoe1xuXHQgICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuXHQgICAgICByZXR1cm4gWydxMicsIHlUYWtlLCBzZXRBY3Rpb25dO1xuXHQgICAgfSxcblx0ICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcblx0ICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gX2NoYW5uZWwuRU5EID8gW19mc21JdGVyYXRvci5xRW5kXSA6IHRhc2sgPyBbJ3EzJywgeUNhbmNlbCh0YXNrKV0gOiBbJ3ExJywgeUZvcmsoYWN0aW9uKSwgc2V0VGFza107XG5cdCAgICB9LFxuXHQgICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuXHQgICAgICByZXR1cm4gWydxMScsIHlGb3JrKGFjdGlvbiksIHNldFRhc2tdO1xuXHQgICAgfVxuXHQgIH0sICdxMScsICd0YWtlTGF0ZXN0KCcgKyAoMCwgX2ZzbUl0ZXJhdG9yLnNhZmVOYW1lKShwYXR0ZXJuT3JDaGFubmVsKSArICcsICcgKyB3b3JrZXIubmFtZSArICcpJyk7XG5cdH1cblxuLyoqKi8gfSksXG5cbi8qKiovIDc1MDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLmRlZmF1bHQgPSB0aHJvdHRsZTtcblx0XG5cdHZhciBfZnNtSXRlcmF0b3IgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDYpO1xuXHRcblx0dmFyIF9mc21JdGVyYXRvcjIgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnNtSXRlcmF0b3IpO1xuXHRcblx0dmFyIF9pbyA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0Myk7XG5cdFxuXHR2YXIgX2NoYW5uZWwgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDcpO1xuXHRcblx0dmFyIF9idWZmZXJzID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQ4KTtcblx0XG5cdHZhciBfdXRpbHMgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDApO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcblx0ICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuXHQgIH1cblx0XG5cdCAgdmFyIGFjdGlvbiA9IHZvaWQgMCxcblx0ICAgICAgY2hhbm5lbCA9IHZvaWQgMDtcblx0XG5cdCAgdmFyIHlBY3Rpb25DaGFubmVsID0geyBkb25lOiBmYWxzZSwgdmFsdWU6ICgwLCBfaW8uYWN0aW9uQ2hhbm5lbCkocGF0dGVybiwgX2J1ZmZlcnMuYnVmZmVycy5zbGlkaW5nKDEpKSB9O1xuXHQgIHZhciB5VGFrZSA9IGZ1bmN0aW9uIHlUYWtlKCkge1xuXHQgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiAoMCwgX2lvLnRha2UpKGNoYW5uZWwpIH07XG5cdCAgfTtcblx0ICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuXHQgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBfaW8uZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcblx0ICB9O1xuXHQgIHZhciB5RGVsYXkgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby5jYWxsKShfdXRpbHMuZGVsYXksIGRlbGF5TGVuZ3RoKSB9O1xuXHRcblx0ICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG5cdCAgICByZXR1cm4gYWN0aW9uID0gYWM7XG5cdCAgfTtcblx0ICB2YXIgc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIHNldENoYW5uZWwoY2gpIHtcblx0ICAgIHJldHVybiBjaGFubmVsID0gY2g7XG5cdCAgfTtcblx0XG5cdCAgcmV0dXJuICgwLCBfZnNtSXRlcmF0b3IyLmRlZmF1bHQpKHtcblx0ICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcblx0ICAgICAgcmV0dXJuIFsncTInLCB5QWN0aW9uQ2hhbm5lbCwgc2V0Q2hhbm5lbF07XG5cdCAgICB9LFxuXHQgICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuXHQgICAgICByZXR1cm4gWydxMycsIHlUYWtlKCksIHNldEFjdGlvbl07XG5cdCAgICB9LFxuXHQgICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuXHQgICAgICByZXR1cm4gYWN0aW9uID09PSBfY2hhbm5lbC5FTkQgPyBbX2ZzbUl0ZXJhdG9yLnFFbmRdIDogWydxNCcsIHlGb3JrKGFjdGlvbildO1xuXHQgICAgfSxcblx0ICAgIHE0OiBmdW5jdGlvbiBxNCgpIHtcblx0ICAgICAgcmV0dXJuIFsncTInLCB5RGVsYXldO1xuXHQgICAgfVxuXHQgIH0sICdxMScsICd0aHJvdHRsZSgnICsgKDAsIF9mc21JdGVyYXRvci5zYWZlTmFtZSkocGF0dGVybikgKyAnLCAnICsgd29ya2VyLm5hbWUgKyAnKScpO1xuXHR9XG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NTE6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsndXNlIHN0cmljdCc7XG5cdFxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBzYWdhTWlkZGxld2FyZUZhY3Rvcnk7XG5cdFxuXHR2YXIgX3V0aWxzID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQwKTtcblx0XG5cdHZhciBfY2hhbm5lbCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0Nyk7XG5cdFxuXHR2YXIgX3J1blNhZ2EgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3MzkpO1xuXHRcblx0ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXHRcblx0ZnVuY3Rpb24gc2FnYU1pZGRsZXdhcmVGYWN0b3J5KCkge1xuXHQgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblx0XG5cdCAgdmFyIF9yZWYkY29udGV4dCA9IF9yZWYuY29udGV4dCxcblx0ICAgICAgY29udGV4dCA9IF9yZWYkY29udGV4dCA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmJGNvbnRleHQsXG5cdCAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjb250ZXh0J10pO1xuXHRcblx0ICB2YXIgc2FnYU1vbml0b3IgPSBvcHRpb25zLnNhZ2FNb25pdG9yLFxuXHQgICAgICBsb2dnZXIgPSBvcHRpb25zLmxvZ2dlcixcblx0ICAgICAgb25FcnJvciA9IG9wdGlvbnMub25FcnJvcjtcblx0XG5cdFxuXHQgIGlmIChfdXRpbHMuaXMuZnVuYyhvcHRpb25zKSkge1xuXHQgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdTYWdhIG1pZGRsZXdhcmUgbm8gbG9uZ2VyIGFjY2VwdCBHZW5lcmF0b3IgZnVuY3Rpb25zLiBVc2Ugc2FnYU1pZGRsZXdhcmUucnVuIGluc3RlYWQnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignWW91IHBhc3NlZCBhIGZ1bmN0aW9uIHRvIHRoZSBTYWdhIG1pZGRsZXdhcmUuIFlvdSBhcmUgbGlrZWx5IHRyeWluZyB0byBzdGFydCBhICAgICAgICBTYWdhIGJ5IGRpcmVjdGx5IHBhc3NpbmcgaXQgdG8gdGhlIG1pZGRsZXdhcmUuIFRoaXMgaXMgbm8gbG9uZ2VyIHBvc3NpYmxlIHN0YXJ0aW5nIGZyb20gMC4xMC4wLiAgICAgICAgVG8gcnVuIGEgU2FnYSwgeW91IG11c3QgZG8gaXQgZHluYW1pY2FsbHkgQUZURVIgbW91bnRpbmcgdGhlIG1pZGRsZXdhcmUgaW50byB0aGUgc3RvcmUuXFxuICAgICAgICBFeGFtcGxlOlxcbiAgICAgICAgICBpbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcXCdyZWR1eC1zYWdhXFwnXFxuICAgICAgICAgIC4uLiBvdGhlciBpbXBvcnRzXFxuXFxuICAgICAgICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxcbiAgICAgICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpXFxuICAgICAgICAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihzYWdhLCAuLi5hcmdzKVxcbiAgICAgICcpO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgaWYgKGxvZ2dlciAmJiAhX3V0aWxzLmlzLmZ1bmMobG9nZ2VyKSkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdgb3B0aW9ucy5sb2dnZXJgIHBhc3NlZCB0byB0aGUgU2FnYSBtaWRkbGV3YXJlIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHQgIH1cblx0XG5cdCAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIG9wdGlvbnMub25lcnJvcikge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdgb3B0aW9ucy5vbmVycm9yYCB3YXMgcmVtb3ZlZC4gVXNlIGBvcHRpb25zLm9uRXJyb3JgIGluc3RlYWQuJyk7XG5cdCAgfVxuXHRcblx0ICBpZiAob25FcnJvciAmJiAhX3V0aWxzLmlzLmZ1bmMob25FcnJvcikpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignYG9wdGlvbnMub25FcnJvcmAgcGFzc2VkIHRvIHRoZSBTYWdhIG1pZGRsZXdhcmUgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG5cdCAgfVxuXHRcblx0ICBpZiAob3B0aW9ucy5lbWl0dGVyICYmICFfdXRpbHMuaXMuZnVuYyhvcHRpb25zLmVtaXR0ZXIpKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2BvcHRpb25zLmVtaXR0ZXJgIHBhc3NlZCB0byB0aGUgU2FnYSBtaWRkbGV3YXJlIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gc2FnYU1pZGRsZXdhcmUoX3JlZjIpIHtcblx0ICAgIHZhciBnZXRTdGF0ZSA9IF9yZWYyLmdldFN0YXRlLFxuXHQgICAgICAgIGRpc3BhdGNoID0gX3JlZjIuZGlzcGF0Y2g7XG5cdFxuXHQgICAgdmFyIHNhZ2FFbWl0dGVyID0gKDAsIF9jaGFubmVsLmVtaXR0ZXIpKCk7XG5cdCAgICBzYWdhRW1pdHRlci5lbWl0ID0gKG9wdGlvbnMuZW1pdHRlciB8fCBfdXRpbHMuaWRlbnQpKHNhZ2FFbWl0dGVyLmVtaXQpO1xuXHRcblx0ICAgIHNhZ2FNaWRkbGV3YXJlLnJ1biA9IF9ydW5TYWdhLnJ1blNhZ2EuYmluZChudWxsLCB7XG5cdCAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG5cdCAgICAgIHN1YnNjcmliZTogc2FnYUVtaXR0ZXIuc3Vic2NyaWJlLFxuXHQgICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG5cdCAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcblx0ICAgICAgc2FnYU1vbml0b3I6IHNhZ2FNb25pdG9yLFxuXHQgICAgICBsb2dnZXI6IGxvZ2dlcixcblx0ICAgICAgb25FcnJvcjogb25FcnJvclxuXHQgICAgfSk7XG5cdFxuXHQgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG5cdCAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdCAgICAgICAgaWYgKHNhZ2FNb25pdG9yICYmIHNhZ2FNb25pdG9yLmFjdGlvbkRpc3BhdGNoZWQpIHtcblx0ICAgICAgICAgIHNhZ2FNb25pdG9yLmFjdGlvbkRpc3BhdGNoZWQoYWN0aW9uKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTsgLy8gaGl0IHJlZHVjZXJzXG5cdCAgICAgICAgc2FnYUVtaXR0ZXIuZW1pdChhY3Rpb24pO1xuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICAgIH07XG5cdCAgICB9O1xuXHQgIH1cblx0XG5cdCAgc2FnYU1pZGRsZXdhcmUucnVuID0gZnVuY3Rpb24gKCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdCZWZvcmUgcnVubmluZyBhIFNhZ2EsIHlvdSBtdXN0IG1vdW50IHRoZSBTYWdhIG1pZGRsZXdhcmUgb24gdGhlIFN0b3JlIHVzaW5nIGFwcGx5TWlkZGxld2FyZScpO1xuXHQgIH07XG5cdFxuXHQgIHNhZ2FNaWRkbGV3YXJlLnNldENvbnRleHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcblx0ICAgICgwLCBfdXRpbHMuY2hlY2spKHByb3BzLCBfdXRpbHMuaXMub2JqZWN0LCAoMCwgX3V0aWxzLmNyZWF0ZVNldENvbnRleHRXYXJuaW5nKSgnc2FnYU1pZGRsZXdhcmUnLCBwcm9wcykpO1xuXHQgICAgX3V0aWxzLm9iamVjdC5hc3NpZ24oY29udGV4dCwgcHJvcHMpO1xuXHQgIH07XG5cdFxuXHQgIHJldHVybiBzYWdhTWlkZGxld2FyZTtcblx0fVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygzKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NTI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdHZhciBfaW8gPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDMpO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0YWtlJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX2lvLnRha2U7XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0YWtlbScsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby50YWtlbTtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3B1dCcsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby5wdXQ7XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdhbGwnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfaW8uYWxsO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmFjZScsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby5yYWNlO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FsbCcsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby5jYWxsO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYXBwbHknLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfaW8uYXBwbHk7XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcHMnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfaW8uY3BzO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZm9yaycsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby5mb3JrO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc3Bhd24nLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfaW8uc3Bhd247XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqb2luJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX2lvLmpvaW47XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWwnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfaW8uY2FuY2VsO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2VsZWN0Jywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX2lvLnNlbGVjdDtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2FjdGlvbkNoYW5uZWwnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfaW8uYWN0aW9uQ2hhbm5lbDtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbGxlZCcsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby5jYW5jZWxsZWQ7XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmbHVzaCcsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby5mbHVzaDtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldENvbnRleHQnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfaW8uZ2V0Q29udGV4dDtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3NldENvbnRleHQnLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfaW8uc2V0Q29udGV4dDtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Rha2VFdmVyeScsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby50YWtlRXZlcnk7XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0YWtlTGF0ZXN0Jywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX2lvLnRha2VMYXRlc3Q7XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0aHJvdHRsZScsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9pby50aHJvdHRsZTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNzUzOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHR2YXIgX3V0aWxzID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18oNzQwKTtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnVEFTSycsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF91dGlscy5UQVNLO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU0FHQV9BQ1RJT04nLCB7XG5cdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgIHJldHVybiBfdXRpbHMuU0FHQV9BQ1RJT047XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdub29wJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX3V0aWxzLm5vb3A7XG5cdCAgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpcycsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF91dGlscy5pcztcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2RlZmVycmVkJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX3V0aWxzLmRlZmVycmVkO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYXJyYXlPZkRlZmZlcmVkJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX3V0aWxzLmFycmF5T2ZEZWZmZXJlZDtcblx0ICB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1vY2tUYXNrJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX3V0aWxzLmNyZWF0ZU1vY2tUYXNrO1xuXHQgIH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2xvbmVhYmxlR2VuZXJhdG9yJywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX3V0aWxzLmNsb25lYWJsZUdlbmVyYXRvcjtcblx0ICB9XG5cdH0pO1xuXHRcblx0dmFyIF9pbyA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fKDc0Myk7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2FzRWZmZWN0Jywge1xuXHQgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICByZXR1cm4gX2lvLmFzRWZmZWN0O1xuXHQgIH1cblx0fSk7XG5cdFxuXHR2YXIgX3Byb2MgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXyg3NDEpO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDSEFOTkVMX0VORCcsIHtcblx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgcmV0dXJuIF9wcm9jLkNIQU5ORUxfRU5EO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NTQ6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHR2YXIgY29tcG9zZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KS5jb21wb3NlO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5jb21wb3NlV2l0aERldlRvb2xzID0gKFxuXHQgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gP1xuXHQgICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6XG5cdCAgICBmdW5jdGlvbigpIHtcblx0ICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2U7XG5cdCAgICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cdCAgICB9XG5cdCk7XG5cdFxuXHRleHBvcnRzLmRldlRvb2xzRW5oYW5jZXIgPSAoXG5cdCAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gP1xuXHQgICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gOlxuXHQgICAgZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbihub29wKSB7IHJldHVybiBub29wOyB9IH1cblx0KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzU1OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBa3ZvIFJTUiBpcyBjb3ZlcmVkIGJ5IHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWUgbW9yZSBkZXRhaWxzIGluIHRoZSBsaWNlbnNlLnR4dCBmaWxlIGxvY2F0ZWQgYXQgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWt2byBSU1IgbW9kdWxlLiBGb3IgYWRkaXRpb25hbCBkZXRhaWxzIG9uIHRoZSBHTlUgbGljZW5zZSBwbGVhc2Ugc2VlXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWwgPi5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdFxuXHRleHBvcnRzLnJlZHVjZXIgPSByZWR1Y2VyO1xuXHRcblx0dmFyIF9jb25zdCA9IF9fd2VicGFja19yZXF1aXJlX18oNzM3KTtcblx0XG5cdHZhciBjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NvbnN0KTtcblx0XG5cdHZhciBfcHVsbCA9IF9fd2VicGFja19yZXF1aXJlX18oNzU2KTtcblx0XG5cdHZhciBfcHVsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdWxsKTtcblx0XG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczNik7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblx0XG5cdGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXHRcblx0Ly8gaW5pdGlhbCBzdGF0ZVxuXHR2YXIgaW5pdGlhbFN0YXRlID0ge1xuXHQgICAgc2VsZWN0QWxsOiB0cnVlLFxuXHQgICAgZmV0Y2hpbmc6IGZhbHNlLFxuXHQgICAgZXJyb3I6IG51bGwsXG5cdCAgICB1c2VySWQ6IG51bGwsXG5cdCAgICBpc19yZXN0cmljdGVkOiBmYWxzZSxcblx0ICAgIGFsbF9wcm9qZWN0czogW10sXG5cdCAgICB1c2VyX3Byb2plY3RzOiBbXSxcblx0ICAgIG9yaWdpbmFsX2lzX3Jlc3RyaWN0ZWQ6IG51bGwsXG5cdCAgICBvcmlnaW5hbF9wcm9qZWN0czogbnVsbFxuXHR9O1xuXHRcblx0ZnVuY3Rpb24gcmVkdWNlcigpIHtcblx0ICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaW5pdGlhbFN0YXRlO1xuXHQgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblx0XG5cdCAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdCAgICAgICAgY2FzZSBjLlNFVF9TVE9SRTpcblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhY3Rpb24uZGF0YTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgIGNhc2UgYy5BUElfR0VUX0lOSVQ6XG5cdCAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHsgZmV0Y2hpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgIGNhc2UgYy5BUElfR0VUX1NVQ0NFU1M6XG5cdCAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgIHZhciBfYWN0aW9uJGRhdGEgPSBhY3Rpb24uZGF0YSxcblx0ICAgICAgICAgICAgICAgICAgICBhbGxfcHJvamVjdHMgPSBfYWN0aW9uJGRhdGEuYWxsX3Byb2plY3RzLFxuXHQgICAgICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHMgPSBfYWN0aW9uJGRhdGEudXNlcl9wcm9qZWN0cztcblx0XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuXHQgICAgICAgICAgICAgICAgICAgIGFsbF9wcm9qZWN0czogYWxsX3Byb2plY3RzLFxuXHQgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlJ3JlIFwidW53cmFwcGluZ1wiIHRoZSBVc2VyUHJvamVjdHMgZGF0YVxuXHQgICAgICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHM6IHVzZXJfcHJvamVjdHMgJiYgdXNlcl9wcm9qZWN0cy5wcm9qZWN0cyB8fCBbXSxcblx0ICAgICAgICAgICAgICAgICAgICBpc19yZXN0cmljdGVkOiB1c2VyX3Byb2plY3RzICYmIHVzZXJfcHJvamVjdHMuaXNfcmVzdHJpY3RlZCB8fCBmYWxzZVxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgY2FzZSBjLkFQSV9HRVRfRkFJTFVSRTpcblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuXHQgICAgICAgICAgICAgICAgICAgIGZldGNoaW5nOiBmYWxzZSxcblx0ICAgICAgICAgICAgICAgICAgICBhbGxfcHJvamVjdHM6IFtdLFxuXHQgICAgICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHM6IFtdLFxuXHQgICAgICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3Jcblx0ICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgIGNhc2UgYy5BUElfUFVUX0lOSVQ6XG5cdCAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcblx0ICAgICAgICAgICAgICAgICAgICBmZXRjaGluZzogdHJ1ZSxcblx0ICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgY2FzZSBjLkFQSV9QVVRfU1VDQ0VTUzpcblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgdmFyIF91c2VyX3Byb2plY3RzID0gYWN0aW9uLmRhdGEudXNlcl9wcm9qZWN0cztcblx0XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuXHQgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlJ3JlIFwidW53cmFwcGluZ1wiIHRoZSBsaXN0IG9mIHByb2plY3RzIGhlcmUsIHRvIHNpbXBsaWZ5IHRoZSBzdG9yZVxuXHQgICAgICAgICAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQ6IF91c2VyX3Byb2plY3RzLmlzX3Jlc3RyaWN0ZWQsXG5cdCAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxfaXNfcmVzdHJpY3RlZDogbnVsbCxcblx0ICAgICAgICAgICAgICAgICAgICB1c2VyX3Byb2plY3RzOiBfdXNlcl9wcm9qZWN0cy5wcm9qZWN0cyxcblx0ICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9wcm9qZWN0czogbnVsbFxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgY2FzZSBjLkFQSV9QVVRfRkFJTFVSRTpcblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgdmFyIG5ld19zdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuXHQgICAgICAgICAgICAgICAgICAgIGZldGNoaW5nOiBmYWxzZSxcblx0ICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9pc19yZXN0cmljdGVkOiBudWxsLFxuXHQgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Byb2plY3RzOiBudWxsLFxuXHQgICAgICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3Jcblx0ICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICAgICAgLy8gT3ZlcndyaXRlIGlmIHdlIGhhdmUgYW4gb3JpZ2luYWwgdmFsdWVcblx0ICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5vcmlnaW5hbF9pc19yZXN0cmljdGVkICE9PSBudWxsKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbmV3X3N0YXRlLmlzX3Jlc3RyaWN0ZWQgPSBzdGF0ZS5vcmlnaW5hbF9pc19yZXN0cmljdGVkO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHN0YXRlLm9yaWdpbmFsX3Byb2plY3RzICE9PSBudWxsKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbmV3X3N0YXRlLnVzZXJfcHJvamVjdHMgPSBzdGF0ZS5vcmlnaW5hbF9wcm9qZWN0cztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXdfc3RhdGU7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgY2FzZSBjLlVQREFURV9QUk9KRUNUX1NFTEVDVElPTjpcblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgdmFyIHByb2plY3RJZCA9IGFjdGlvbi5kYXRhLnByb2plY3RJZDtcblx0XG5cdCAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxfcHJvamVjdHMgPSBzdGF0ZS51c2VyX3Byb2plY3RzICYmIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUudXNlcl9wcm9qZWN0cykpO1xuXHQgICAgICAgICAgICAgICAgdmFyIF91c2VyX3Byb2plY3RzMiA9IHN0YXRlLnVzZXJfcHJvamVjdHMgJiYgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdGF0ZS51c2VyX3Byb2plY3RzKSk7XG5cdFxuXHQgICAgICAgICAgICAgICAgKDAsIF91dGlscy5pbkFycmF5KShwcm9qZWN0SWQsIF91c2VyX3Byb2plY3RzMikgPyAoMCwgX3B1bGwyLmRlZmF1bHQpKF91c2VyX3Byb2plY3RzMiwgcHJvamVjdElkKSA6IF91c2VyX3Byb2plY3RzMi5wdXNoKHByb2plY3RJZCk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7IG9yaWdpbmFsX3Byb2plY3RzOiBvcmlnaW5hbF9wcm9qZWN0cywgdXNlcl9wcm9qZWN0czogX3VzZXJfcHJvamVjdHMyIH0pO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgIGNhc2UgYy5VUERBVEVfSVNfUkVTVFJJQ1RFRDpcblx0ICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgdmFyIGlzX3Jlc3RyaWN0ZWQgPSBhY3Rpb24uZGF0YS5pc19yZXN0cmljdGVkO1xuXHRcblx0ICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHsgaXNfcmVzdHJpY3RlZDogaXNfcmVzdHJpY3RlZCwgb3JpZ2luYWxfaXNfcmVzdHJpY3RlZDogc3RhdGUuaXNfcmVzdHJpY3RlZCB9KTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICBjYXNlIGMuVVBEQVRFX1NFTEVDVF9BTExfUFJPSkVDVFM6XG5cdCAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgIHZhciBfb3JpZ2luYWxfcHJvamVjdHMgPSBzdGF0ZS51c2VyX3Byb2plY3RzICYmIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUudXNlcl9wcm9qZWN0cykpO1xuXHQgICAgICAgICAgICAgICAgdmFyIF91c2VyX3Byb2plY3RzMyA9IHZvaWQgMCxcblx0ICAgICAgICAgICAgICAgICAgICBfc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUpLFxuXHQgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbCA9IF9zdGF0ZS5zZWxlY3RBbGw7XG5cdFxuXHQgICAgICAgICAgICAgICAgaWYgKHNlbGVjdEFsbCkge1xuXHQgICAgICAgICAgICAgICAgICAgIF91c2VyX3Byb2plY3RzMyA9IHN0YXRlLmFsbF9wcm9qZWN0cy5tYXAoZnVuY3Rpb24gKHByb2plY3QpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3QuaWQ7XG5cdCAgICAgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIF91c2VyX3Byb2plY3RzMyA9IFtdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgc2VsZWN0QWxsID0gIXNlbGVjdEFsbDtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHsgc2VsZWN0QWxsOiBzZWxlY3RBbGwsIG9yaWdpbmFsX3Byb2plY3RzOiBfb3JpZ2luYWxfcHJvamVjdHMsIHVzZXJfcHJvamVjdHM6IF91c2VyX3Byb2plY3RzMyB9KTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG5cdCAgICAgICAgICAgIH1cblx0ICAgIH1cblx0fVxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzU2OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBiYXNlUmVzdCA9IF9fd2VicGFja19yZXF1aXJlX18oNzU3KSxcblx0ICAgIHB1bGxBbGwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc2NCk7XG5cdFxuXHQvKipcblx0ICogUmVtb3ZlcyBhbGwgZ2l2ZW4gdmFsdWVzIGZyb20gYGFycmF5YCB1c2luZ1xuXHQgKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuXHQgKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG5cdCAqXG5cdCAqICoqTm90ZToqKiBVbmxpa2UgYF8ud2l0aG91dGAsIHRoaXMgbWV0aG9kIG11dGF0ZXMgYGFycmF5YC4gVXNlIGBfLnJlbW92ZWBcblx0ICogdG8gcmVtb3ZlIGVsZW1lbnRzIGZyb20gYW4gYXJyYXkgYnkgcHJlZGljYXRlLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBtZW1iZXJPZiBfXG5cdCAqIEBzaW5jZSAyLjAuMFxuXHQgKiBAY2F0ZWdvcnkgQXJyYXlcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cblx0ICogQHBhcmFtIHsuLi4qfSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIHJlbW92ZS5cblx0ICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG5cdCAqIEBleGFtcGxlXG5cdCAqXG5cdCAqIHZhciBhcnJheSA9IFsnYScsICdiJywgJ2MnLCAnYScsICdiJywgJ2MnXTtcblx0ICpcblx0ICogXy5wdWxsKGFycmF5LCAnYScsICdjJyk7XG5cdCAqIGNvbnNvbGUubG9nKGFycmF5KTtcblx0ICogLy8gPT4gWydiJywgJ2InXVxuXHQgKi9cblx0dmFyIHB1bGwgPSBiYXNlUmVzdChwdWxsQWxsKTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gcHVsbDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzU3OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpZGVudGl0eSA9IF9fd2VicGFja19yZXF1aXJlX18oNDM5KSxcblx0ICAgIG92ZXJSZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NTgpLFxuXHQgICAgc2V0VG9TdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc2MCk7XG5cdFxuXHQvKipcblx0ICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcblx0ICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzU4OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBhcHBseSA9IF9fd2VicGFja19yZXF1aXJlX18oNzU5KTtcblx0XG5cdC8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cblx0dmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXHRcblx0LyoqXG5cdCAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG5cdCAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuXHQgIHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuXHQgICAgICAgIGluZGV4ID0gLTEsXG5cdCAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuXHQgICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblx0XG5cdCAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHQgICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuXHQgICAgfVxuXHQgICAgaW5kZXggPSAtMTtcblx0ICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuXHQgICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuXHQgICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG5cdCAgICB9XG5cdCAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcblx0ICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuXHQgIH07XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gb3ZlclJlc3Q7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc1OTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuXHQgKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG5cdCAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuXHQgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cblx0ICovXG5cdGZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcblx0ICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG5cdCAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG5cdCAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG5cdCAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG5cdCAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG5cdCAgfVxuXHQgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NjA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGJhc2VTZXRUb1N0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNzYxKSxcblx0ICAgIHNob3J0T3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NjMpO1xuXHRcblx0LyoqXG5cdCAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cblx0ICovXG5cdHZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHNldFRvU3RyaW5nO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NjE6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGNvbnN0YW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NjIpLFxuXHQgICAgZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyOCksXG5cdCAgICBpZGVudGl0eSA9IF9fd2VicGFja19yZXF1aXJlX18oNDM5KTtcblx0XG5cdC8qKlxuXHQgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cblx0ICovXG5cdHZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuXHQgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG5cdCAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcblx0ICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG5cdCAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuXHQgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuXHQgIH0pO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc2Mjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBtZW1iZXJPZiBfXG5cdCAqIEBzaW5jZSAyLjQuMFxuXHQgKiBAY2F0ZWdvcnkgVXRpbFxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cblx0ICogQGV4YW1wbGVcblx0ICpcblx0ICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuXHQgKlxuXHQgKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcblx0ICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG5cdCAqXG5cdCAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuXHQgKiAvLyA9PiB0cnVlXG5cdCAqL1xuXHRmdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuXHQgIHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiB2YWx1ZTtcblx0ICB9O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NjM6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xuXHR2YXIgSE9UX0NPVU5UID0gODAwLFxuXHQgICAgSE9UX1NQQU4gPSAxNjtcblx0XG5cdC8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cblx0dmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXHRcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuXHQgKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcblx0ICogbWlsbGlzZWNvbmRzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuXHQgIHZhciBjb3VudCA9IDAsXG5cdCAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXHRcblx0ICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcblx0ICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXHRcblx0ICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcblx0ICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG5cdCAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuXHQgICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGNvdW50ID0gMDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcblx0ICB9O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NjQ6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGJhc2VQdWxsQWxsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NjUpO1xuXHRcblx0LyoqXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8ucHVsbGAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhbiBhcnJheSBvZiB2YWx1ZXMgdG8gcmVtb3ZlLlxuXHQgKlxuXHQgKiAqKk5vdGU6KiogVW5saWtlIGBfLmRpZmZlcmVuY2VgLCB0aGlzIG1ldGhvZCBtdXRhdGVzIGBhcnJheWAuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQG1lbWJlck9mIF9cblx0ICogQHNpbmNlIDQuMC4wXG5cdCAqIEBjYXRlZ29yeSBBcnJheVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuXHQgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byByZW1vdmUuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuXHQgKiBAZXhhbXBsZVxuXHQgKlxuXHQgKiB2YXIgYXJyYXkgPSBbJ2EnLCAnYicsICdjJywgJ2EnLCAnYicsICdjJ107XG5cdCAqXG5cdCAqIF8ucHVsbEFsbChhcnJheSwgWydhJywgJ2MnXSk7XG5cdCAqIGNvbnNvbGUubG9nKGFycmF5KTtcblx0ICogLy8gPT4gWydiJywgJ2InXVxuXHQgKi9cblx0ZnVuY3Rpb24gcHVsbEFsbChhcnJheSwgdmFsdWVzKSB7XG5cdCAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGggJiYgdmFsdWVzICYmIHZhbHVlcy5sZW5ndGgpXG5cdCAgICA/IGJhc2VQdWxsQWxsKGFycmF5LCB2YWx1ZXMpXG5cdCAgICA6IGFycmF5O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHB1bGxBbGw7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc2NTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYXJyYXlNYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzNCksXG5cdCAgICBiYXNlSW5kZXhPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNzY2KSxcblx0ICAgIGJhc2VJbmRleE9mV2l0aCA9IF9fd2VicGFja19yZXF1aXJlX18oNzcwKSxcblx0ICAgIGJhc2VVbmFyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMzU2KSxcblx0ICAgIGNvcHlBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oNzcxKTtcblx0XG5cdC8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cblx0dmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cdFxuXHQvKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cblx0dmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnB1bGxBbGxCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuXHQgKiBzaG9ydGhhbmRzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuXHQgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byByZW1vdmUuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2VQdWxsQWxsKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG5cdCAgdmFyIGluZGV4T2YgPSBjb21wYXJhdG9yID8gYmFzZUluZGV4T2ZXaXRoIDogYmFzZUluZGV4T2YsXG5cdCAgICAgIGluZGV4ID0gLTEsXG5cdCAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG5cdCAgICAgIHNlZW4gPSBhcnJheTtcblx0XG5cdCAgaWYgKGFycmF5ID09PSB2YWx1ZXMpIHtcblx0ICAgIHZhbHVlcyA9IGNvcHlBcnJheSh2YWx1ZXMpO1xuXHQgIH1cblx0ICBpZiAoaXRlcmF0ZWUpIHtcblx0ICAgIHNlZW4gPSBhcnJheU1hcChhcnJheSwgYmFzZVVuYXJ5KGl0ZXJhdGVlKSk7XG5cdCAgfVxuXHQgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdCAgICB2YXIgZnJvbUluZGV4ID0gMCxcblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpbmRleF0sXG5cdCAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXHRcblx0ICAgIHdoaWxlICgoZnJvbUluZGV4ID0gaW5kZXhPZihzZWVuLCBjb21wdXRlZCwgZnJvbUluZGV4LCBjb21wYXJhdG9yKSkgPiAtMSkge1xuXHQgICAgICBpZiAoc2VlbiAhPT0gYXJyYXkpIHtcblx0ICAgICAgICBzcGxpY2UuY2FsbChzZWVuLCBmcm9tSW5kZXgsIDEpO1xuXHQgICAgICB9XG5cdCAgICAgIHNwbGljZS5jYWxsKGFycmF5LCBmcm9tSW5kZXgsIDEpO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gYXJyYXk7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZVB1bGxBbGw7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc2Njpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYmFzZUZpbmRJbmRleCA9IF9fd2VicGFja19yZXF1aXJlX18oNzY3KSxcblx0ICAgIGJhc2VJc05hTiA9IF9fd2VicGFja19yZXF1aXJlX18oNzY4KSxcblx0ICAgIHN0cmljdEluZGV4T2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc2OSk7XG5cdFxuXHQvKipcblx0ICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuXHQgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcblx0ICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcblx0ICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3Njc6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcblx0ICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cblx0ICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG5cdCAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcblx0ICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblx0XG5cdCAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcblx0ICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG5cdCAgICAgIHJldHVybiBpbmRleDtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIC0xO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc2ODpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG5cdCAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc2OTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuXHQgKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cblx0ICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cblx0ICovXG5cdGZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcblx0ICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuXHQgICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFxuXHQgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdCAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuXHQgICAgICByZXR1cm4gaW5kZXg7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHJldHVybiAtMTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NzA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYmFzZUluZGV4T2ZgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cblx0ICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2VJbmRleE9mV2l0aChhcnJheSwgdmFsdWUsIGZyb21JbmRleCwgY29tcGFyYXRvcikge1xuXHQgIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG5cdCAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XG5cdCAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0ICAgIGlmIChjb21wYXJhdG9yKGFycmF5W2luZGV4XSwgdmFsdWUpKSB7XG5cdCAgICAgIHJldHVybiBpbmRleDtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIC0xO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mV2l0aDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzcxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG5cdCAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cblx0ICovXG5cdGZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG5cdCAgdmFyIGluZGV4ID0gLTEsXG5cdCAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cdFxuXHQgIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuXHQgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdCAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuXHQgIH1cblx0ICByZXR1cm4gYXJyYXk7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3NzI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmdldElzUmVzdHJpY3RlZCA9IGV4cG9ydHMuZ2V0VXNlclByb2plY3RzID0gZXhwb3J0cy5nZXRVc2VySWQgPSB1bmRlZmluZWQ7XG5cdGV4cG9ydHMuZmV0Y2hEYXRhID0gZmV0Y2hEYXRhO1xuXHRleHBvcnRzLnB1dERhdGEgPSBwdXREYXRhO1xuXHRleHBvcnRzLmdldFNhZ2EgPSBnZXRTYWdhO1xuXHRleHBvcnRzLnB1dFNhZ2EgPSBwdXRTYWdhO1xuXHRleHBvcnRzLndhdGNoZXJTYWdhID0gd2F0Y2hlclNhZ2E7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDc3Myk7XG5cdFxuXHR2YXIgX2VmZmVjdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc1Mik7XG5cdFxuXHR2YXIgX2F4aW9zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NzQpO1xuXHRcblx0dmFyIF9heGlvczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGlvcyk7XG5cdFxuXHR2YXIgX2NvbnN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MzcpO1xuXHRcblx0dmFyIGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY29uc3QpO1xuXHRcblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMzI0KTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0dmFyIF9tYXJrZWQgPSAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZ2V0U2FnYSksXG5cdCAgICBfbWFya2VkMiA9IC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhwdXRTYWdhKSxcblx0ICAgIF9tYXJrZWQzID0gLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKHdhdGNoZXJTYWdhKTsgLypcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFrdm8gUlNSIGlzIGNvdmVyZWQgYnkgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZS5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBtb3JlIGRldGFpbHMgaW4gdGhlIGxpY2Vuc2UudHh0IGZpbGUgbG9jYXRlZCBhdCB0aGUgcm9vdCBmb2xkZXIgb2YgdGhlXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBa3ZvIFJTUiBtb2R1bGUuIEZvciBhZGRpdGlvbmFsIGRldGFpbHMgb24gdGhlIEdOVSBsaWNlbnNlIHBsZWFzZSBzZWVcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbCA+LlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0XG5cdC8vIFRoaXMgaW1wb3J0IGlzIG5lY2Vzc2FyeSB0byBiZSBhYmxlIHRvIHRlc3Qgc2FnYXMuXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVkdXgtc2FnYS9yZWR1eC1zYWdhL2lzc3Vlcy8yODAjaXNzdWVjb21tZW50LTI5MTEzMzAyM1xuXHRcblx0XG5cdGZ1bmN0aW9uIGNhbGxBeGlvcyhjb25maWcpIHtcblx0ICAgIHJldHVybiAoMCwgX2F4aW9zMi5kZWZhdWx0KShjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdCAgICAgICAgcmV0dXJuIHsgcmVzcG9uc2U6IHJlc3BvbnNlIH07XG5cdCAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0ICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IgfTtcblx0ICAgIH0pO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBmZXRjaERhdGEodXNlcklkKSB7XG5cdCAgICB2YXIgY29uZmlnID0ge1xuXHQgICAgICAgIG1ldGhvZDogXCJnZXRcIixcblx0ICAgICAgICB1cmw6IFwiL3Jlc3QvdjEvdXNlcl9wcm9qZWN0c19hY2Nlc3MvXCIgKyB1c2VySWQgKyBcIi9cIlxuXHQgICAgfTtcblx0ICAgIHJldHVybiBjYWxsQXhpb3MoY29uZmlnKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gcHV0RGF0YSh1c2VySWQsIGlzX3Jlc3RyaWN0ZWQsIHVzZXJfcHJvamVjdHMpIHtcblx0ICAgIHZhciBjb25maWcgPSB7XG5cdCAgICAgICAgbWV0aG9kOiBcInB1dFwiLFxuXHQgICAgICAgIGhlYWRlcnM6IHtcblx0ICAgICAgICAgICAgXCJYLUNTUkZUb2tlblwiOiAoMCwgX3V0aWxzLmdldENvb2tpZSkoXCJjc3JmdG9rZW5cIilcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHVybDogXCIvcmVzdC92MS91c2VyX3Byb2plY3RzX2FjY2Vzcy9cIiArIHVzZXJJZCArIFwiL1wiLFxuXHQgICAgICAgIGRhdGE6IHtcblx0ICAgICAgICAgICAgdXNlcl9wcm9qZWN0czoge1xuXHQgICAgICAgICAgICAgICAgaXNfcmVzdHJpY3RlZDogaXNfcmVzdHJpY3RlZCxcblx0ICAgICAgICAgICAgICAgIHByb2plY3RzOiB1c2VyX3Byb2plY3RzXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIGNhbGxBeGlvcyhjb25maWcpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBnZXRTYWdhKGFjdGlvbikge1xuXHQgICAgdmFyIHVzZXJJZCwgX3JlZiwgcmVzcG9uc2UsIGVycm9yO1xuXHRcblx0ICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBnZXRTYWdhJChfY29udGV4dCkge1xuXHQgICAgICAgIHdoaWxlICgxKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgMDpcblx0ICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSBhY3Rpb24uZGF0YS51c2VySWQ7XG5cdCAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfZWZmZWN0cy5jYWxsKShmZXRjaERhdGEsIHVzZXJJZCk7XG5cdFxuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfY29udGV4dC5zZW50O1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX3JlZi5yZXNwb25zZTtcblx0ICAgICAgICAgICAgICAgICAgICBlcnJvciA9IF9yZWYuZXJyb3I7XG5cdFxuXHQgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDExO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2VmZmVjdHMucHV0KSh7IHR5cGU6IGMuQVBJX0dFVF9TVUNDRVNTLCBkYXRhOiByZXNwb25zZS5kYXRhIH0pO1xuXHRcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdFxuXHQgICAgICAgICAgICAgICAgY2FzZSAxMTpcblx0ICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTM7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfZWZmZWN0cy5wdXQpKHsgdHlwZTogYy5BUElfR0VUX0ZBSUxVUkUsIGVycm9yOiBlcnJvciB9KTtcblx0XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCBfbWFya2VkLCB0aGlzKTtcblx0fVxuXHRcblx0dmFyIGdldFVzZXJJZCA9IGV4cG9ydHMuZ2V0VXNlcklkID0gZnVuY3Rpb24gZ2V0VXNlcklkKHN0YXRlKSB7XG5cdCAgICByZXR1cm4gc3RhdGUudXNlcklkO1xuXHR9O1xuXHR2YXIgZ2V0VXNlclByb2plY3RzID0gZXhwb3J0cy5nZXRVc2VyUHJvamVjdHMgPSBmdW5jdGlvbiBnZXRVc2VyUHJvamVjdHMoc3RhdGUpIHtcblx0ICAgIHJldHVybiBzdGF0ZS51c2VyX3Byb2plY3RzO1xuXHR9O1xuXHR2YXIgZ2V0SXNSZXN0cmljdGVkID0gZXhwb3J0cy5nZXRJc1Jlc3RyaWN0ZWQgPSBmdW5jdGlvbiBnZXRJc1Jlc3RyaWN0ZWQoc3RhdGUpIHtcblx0ICAgIHJldHVybiBzdGF0ZS5pc19yZXN0cmljdGVkO1xuXHR9O1xuXHRcblx0ZnVuY3Rpb24gcHV0U2FnYShhY3Rpb24pIHtcblx0ICAgIHZhciB1c2VySWQsIGlzX3Jlc3RyaWN0ZWQsIHVzZXJfcHJvamVjdHMsIF9yZWYyLCByZXNwb25zZSwgZXJyb3I7XG5cdFxuXHQgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIHB1dFNhZ2EkKF9jb250ZXh0Mikge1xuXHQgICAgICAgIHdoaWxlICgxKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAwOlxuXHQgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9lZmZlY3RzLnB1dCkoeyB0eXBlOiBjLkFQSV9QVVRfSU5JVCB9KTtcblx0XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0O1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2VmZmVjdHMuc2VsZWN0KShnZXRVc2VySWQpO1xuXHRcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSBfY29udGV4dDIuc2VudDtcblx0ICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDc7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfZWZmZWN0cy5zZWxlY3QpKGdldElzUmVzdHJpY3RlZCk7XG5cdFxuXHQgICAgICAgICAgICAgICAgY2FzZSA3OlxuXHQgICAgICAgICAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQgPSBfY29udGV4dDIuc2VudDtcblx0ICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDEwO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2VmZmVjdHMuc2VsZWN0KShnZXRVc2VyUHJvamVjdHMpO1xuXHRcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdXNlcl9wcm9qZWN0cyA9IF9jb250ZXh0Mi5zZW50O1xuXHQgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTM7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfZWZmZWN0cy5jYWxsKShwdXREYXRhLCB1c2VySWQsIGlzX3Jlc3RyaWN0ZWQsIHVzZXJfcHJvamVjdHMpO1xuXHRcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTM6XG5cdCAgICAgICAgICAgICAgICAgICAgX3JlZjIgPSBfY29udGV4dDIuc2VudDtcblx0ICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9yZWYyLnJlc3BvbnNlO1xuXHQgICAgICAgICAgICAgICAgICAgIGVycm9yID0gX3JlZjIuZXJyb3I7XG5cdFxuXHQgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyMTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDE5O1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2VmZmVjdHMucHV0KSh7IHR5cGU6IGMuQVBJX1BVVF9TVUNDRVNTLCBkYXRhOiByZXNwb25zZS5kYXRhIH0pO1xuXHRcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTk6XG5cdCAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyMztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjM7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfZWZmZWN0cy5wdXQpKHsgdHlwZTogYy5BUElfUFVUX0ZBSUxVUkUsIGVycm9yOiBlcnJvciB9KTtcblx0XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIzOlxuXHQgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwgX21hcmtlZDIsIHRoaXMpO1xuXHR9XG5cdFxuXHQvLyB3YXRjaGVyIHNhZ2E6IHdhdGNoZXMgZm9yIGFjdGlvbnMgZGlzcGF0Y2hlZCB0byB0aGUgc3RvcmUsIHN0YXJ0cyB3b3JrZXIgc2FnYVxuXHRmdW5jdGlvbiB3YXRjaGVyU2FnYSgpIHtcblx0ICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiB3YXRjaGVyU2FnYSQoX2NvbnRleHQzKSB7XG5cdCAgICAgICAgd2hpbGUgKDEpIHtcblx0ICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDA6XG5cdCAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2VmZmVjdHMudGFrZUxhdGVzdCkoYy5BUElfR0VUX0lOSVQsIGdldFNhZ2EpO1xuXHRcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDQ7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfZWZmZWN0cy50YWtlTGF0ZXN0KShjLlVQREFURV9QUk9KRUNUX1NFTEVDVElPTiwgcHV0U2FnYSk7XG5cdFxuXHQgICAgICAgICAgICAgICAgY2FzZSA0OlxuXHQgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gNjtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9lZmZlY3RzLnRha2VMYXRlc3QpKGMuVVBEQVRFX1NFTEVDVF9BTExfUFJPSkVDVFMsIHB1dFNhZ2EpO1xuXHRcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDg7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfZWZmZWN0cy50YWtlTGF0ZXN0KShjLlVQREFURV9JU19SRVNUUklDVEVELCBwdXRTYWdhKTtcblx0XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg6XG5cdCAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCBfbWFya2VkMywgdGhpcyk7XG5cdH1cblxuLyoqKi8gfSksXG5cbi8qKiovIDc3Mzpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuXHQgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuXHQgKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cblx0ICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuXHQgKi9cblx0XG5cdCEoZnVuY3Rpb24oZ2xvYmFsKSB7XG5cdCAgXCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHQgIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG5cdCAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuXHQgIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuXHQgIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG5cdCAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcblx0ICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuXHQgIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cdFxuXHQgIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG5cdCAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuXHQgIGlmIChydW50aW1lKSB7XG5cdCAgICBpZiAoaW5Nb2R1bGUpIHtcblx0ICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuXHQgICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuXHQgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cdCAgICB9XG5cdCAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG5cdCAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHRcblx0ICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcblx0ICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG5cdCAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cdFxuXHQgIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcblx0ICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuXHQgICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG5cdCAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuXHQgICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cdFxuXHQgICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuXHQgICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuXHQgICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXHRcblx0ICAgIHJldHVybiBnZW5lcmF0b3I7XG5cdCAgfVxuXHQgIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cdFxuXHQgIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuXHQgIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuXHQgIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuXHQgIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2Vcblx0ICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG5cdCAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuXHQgIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG5cdCAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG5cdCAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuXHQgIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cblx0ICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcblx0ICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcblx0ICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcblx0ICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuXHQgIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cdFxuXHQgIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcblx0ICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG5cdCAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblx0XG5cdCAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG5cdCAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG5cdCAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcblx0ICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuXHQgIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG5cdCAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuXHQgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblx0XG5cdCAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuXHQgIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG5cdCAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cdCAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHRoaXM7XG5cdCAgfTtcblx0XG5cdCAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXHQgIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcblx0ICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcblx0ICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG5cdCAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcblx0ICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG5cdCAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG5cdCAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuXHQgIH1cblx0XG5cdCAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cblx0ICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblx0ICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuXHQgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG5cdCAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cblx0ICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXHRcblx0ICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuXHQgIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG5cdCAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuXHQgICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG5cdCAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG5cdCAgICAgIH07XG5cdCAgICB9KTtcblx0ICB9XG5cdFxuXHQgIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuXHQgICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuXHQgICAgcmV0dXJuIGN0b3Jcblx0ICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuXHQgICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cblx0ICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG5cdCAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG5cdCAgICAgIDogZmFsc2U7XG5cdCAgfTtcblx0XG5cdCAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG5cdCAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG5cdCAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcblx0ICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuXHQgICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcblx0ICAgIHJldHVybiBnZW5GdW47XG5cdCAgfTtcblx0XG5cdCAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG5cdCAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3Rcblx0ICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG5cdCAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cblx0ICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG5cdCAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcblx0ICB9O1xuXHRcblx0ICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuXHQgICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcblx0ICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG5cdCAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG5cdCAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblx0ICAgICAgICBpZiAodmFsdWUgJiZcblx0ICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG5cdCAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcblx0ICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuXHQgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG5cdCAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcblx0ICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG5cdCAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcblx0ICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG5cdCAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuXHQgICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3Rcblx0ICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2Vcblx0ICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cblx0ICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuXHQgICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG5cdCAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuXHQgICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG5cdCAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG5cdCAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG5cdCAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcblx0ICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuXHQgICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuXHQgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuXHQgICAgICAgIH0sIHJlamVjdCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXHRcblx0ICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcblx0ICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cblx0ICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG5cdCAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG5cdCAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuXHQgICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG5cdCAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG5cdCAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cblx0ICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG5cdCAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcblx0ICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuXHQgICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG5cdCAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcblx0ICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG5cdCAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG5cdCAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcblx0ICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG5cdCAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG5cdCAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuXHQgICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG5cdCAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cblx0ICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG5cdCAgfVxuXHRcblx0ICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXHQgIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHRoaXM7XG5cdCAgfTtcblx0ICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXHRcblx0ICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG5cdCAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG5cdCAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG5cdCAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG5cdCAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuXHQgICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuXHQgICAgKTtcblx0XG5cdCAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG5cdCAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG5cdCAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblx0ICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuXHQgICAgICAgIH0pO1xuXHQgIH07XG5cdFxuXHQgIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuXHQgICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblx0XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG5cdCAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG5cdCAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG5cdCAgICAgICAgICB0aHJvdyBhcmc7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuXHQgICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcblx0ICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcblx0ICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cdFxuXHQgICAgICB3aGlsZSAodHJ1ZSkge1xuXHQgICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG5cdCAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG5cdCAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblx0ICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuXHQgICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuXHQgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG5cdCAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3Ncblx0ICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG5cdCAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cdFxuXHQgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuXHQgICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG5cdCAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG5cdCAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuXHQgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXHRcblx0ICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG5cdCAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXHRcblx0ICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cdCAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG5cdCAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG5cdCAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG5cdCAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuXHQgICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG5cdCAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblx0XG5cdCAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuXHQgICAgICAgICAgICBjb250aW51ZTtcblx0ICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcblx0ICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG5cdCAgICAgICAgICB9O1xuXHRcblx0ICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcblx0ICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG5cdCAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG5cdCAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuXHQgICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG5cdCAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9O1xuXHQgIH1cblx0XG5cdCAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG5cdCAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuXHQgIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuXHQgIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuXHQgIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcblx0ICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG5cdCAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG5cdCAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG5cdCAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXHRcblx0ICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcblx0ICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG5cdCAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG5cdCAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG5cdCAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXHRcblx0ICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG5cdCAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG5cdCAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuXHQgICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuXHQgICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcblx0ICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG5cdCAgICB9XG5cdFxuXHQgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblx0XG5cdCAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuXHQgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcblx0ICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuXHQgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblx0ICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG5cdCAgICB9XG5cdFxuXHQgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXHRcblx0ICAgIGlmICghIGluZm8pIHtcblx0ICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG5cdCAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuXHQgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblx0ICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKGluZm8uZG9uZSkge1xuXHQgICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuXHQgICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuXHQgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblx0XG5cdCAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cblx0ICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblx0XG5cdCAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuXHQgICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG5cdCAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG5cdCAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuXHQgICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuXHQgICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG5cdCAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuXHQgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG5cdCAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG5cdCAgICAgIHJldHVybiBpbmZvO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG5cdCAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuXHQgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cdCAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcblx0ICB9XG5cdFxuXHQgIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG5cdCAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuXHQgIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cdFxuXHQgIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cdFxuXHQgIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG5cdCAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcblx0ICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuXHQgIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuXHQgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuXHQgIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuXHQgICAgcmV0dXJuIHRoaXM7XG5cdCAgfTtcblx0XG5cdCAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuXHQgIH07XG5cdFxuXHQgIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG5cdCAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXHRcblx0ICAgIGlmICgxIGluIGxvY3MpIHtcblx0ICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmICgyIGluIGxvY3MpIHtcblx0ICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG5cdCAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcblx0ICAgIH1cblx0XG5cdCAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG5cdCAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcblx0ICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcblx0ICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuXHQgICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcblx0ICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuXHQgICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuXHQgICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuXHQgICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcblx0ICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcblx0ICAgIHRoaXMucmVzZXQodHJ1ZSk7XG5cdCAgfVxuXHRcblx0ICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0ICAgIHZhciBrZXlzID0gW107XG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG5cdCAgICAgIGtleXMucHVzaChrZXkpO1xuXHQgICAgfVxuXHQgICAga2V5cy5yZXZlcnNlKCk7XG5cdFxuXHQgICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcblx0ICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG5cdCAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG5cdCAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG5cdCAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcblx0ICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG5cdCAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcblx0ICAgICAgICAgIHJldHVybiBuZXh0O1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG5cdCAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG5cdCAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuXHQgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXHQgICAgICByZXR1cm4gbmV4dDtcblx0ICAgIH07XG5cdCAgfTtcblx0XG5cdCAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG5cdCAgICBpZiAoaXRlcmFibGUpIHtcblx0ICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuXHQgICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcblx0ICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcblx0ICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuXHQgICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcblx0ICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXHRcblx0ICAgICAgICAgIHJldHVybiBuZXh0O1xuXHQgICAgICAgIH07XG5cdFxuXHQgICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuXHQgICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuXHQgIH1cblx0ICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblx0XG5cdCAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcblx0ICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcblx0ICB9XG5cdFxuXHQgIENvbnRleHQucHJvdG90eXBlID0ge1xuXHQgICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cdFxuXHQgICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcblx0ICAgICAgdGhpcy5wcmV2ID0gMDtcblx0ICAgICAgdGhpcy5uZXh0ID0gMDtcblx0ICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3Ncblx0ICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cblx0ICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcblx0ICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG5cdCAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXHRcblx0ICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcblx0ICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cdFxuXHQgICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblx0XG5cdCAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuXHQgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuXHQgICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcblx0ICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcblx0ICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuXHQgICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcblx0ICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdFxuXHQgICAgc3RvcDogZnVuY3Rpb24oKSB7XG5cdCAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cdFxuXHQgICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuXHQgICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuXHQgICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcblx0ICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcblx0ICAgICAgfVxuXHRcblx0ICAgICAgcmV0dXJuIHRoaXMucnZhbDtcblx0ICAgIH0sXG5cdFxuXHQgICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuXHQgICAgICBpZiAodGhpcy5kb25lKSB7XG5cdCAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG5cdCAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuXHQgICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuXHQgICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG5cdCAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXHRcblx0ICAgICAgICBpZiAoY2F1Z2h0KSB7XG5cdCAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuXHQgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cblx0ICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG5cdCAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0ICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cdCAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cdFxuXHQgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG5cdCAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuXHQgICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG5cdCAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuXHQgICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG5cdCAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcblx0ICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblx0XG5cdCAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuXHQgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcblx0ICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcblx0ICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG5cdCAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG5cdCAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcblx0ICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9LFxuXHRcblx0ICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG5cdCAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0ICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cdCAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcblx0ICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuXHQgICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG5cdCAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG5cdCAgICAgICAgICBicmVhaztcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcblx0ICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcblx0ICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG5cdCAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuXHQgICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG5cdCAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuXHQgICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cblx0ICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcblx0ICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuXHQgICAgICByZWNvcmQuYXJnID0gYXJnO1xuXHRcblx0ICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuXHQgICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG5cdCAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG5cdCAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG5cdCAgICB9LFxuXHRcblx0ICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG5cdCAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG5cdCAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcblx0ICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcblx0ICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuXHQgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG5cdCAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuXHQgICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcblx0ICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuXHQgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG5cdCAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuXHQgICAgfSxcblx0XG5cdCAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcblx0ICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuXHQgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblx0ICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuXHQgICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG5cdCAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcblx0ICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfSxcblx0XG5cdCAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuXHQgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG5cdCAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXHQgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuXHQgICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cdCAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuXHQgICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcblx0ICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICByZXR1cm4gdGhyb3duO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG5cdCAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuXHQgICAgfSxcblx0XG5cdCAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuXHQgICAgICB0aGlzLmRlbGVnYXRlID0ge1xuXHQgICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuXHQgICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG5cdCAgICAgICAgbmV4dExvYzogbmV4dExvY1xuXHQgICAgICB9O1xuXHRcblx0ICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuXHQgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG5cdCAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuXHQgICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcblx0ICAgIH1cblx0ICB9O1xuXHR9KShcblx0ICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuXHQgIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cblx0ICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuXHQgIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcblx0KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzc0OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NzUpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gNzc1OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNzc2KTtcblx0dmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc3Nyk7XG5cdHZhciBBeGlvcyA9IF9fd2VicGFja19yZXF1aXJlX18oNzc5KTtcblx0dmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3ODApO1xuXHRcblx0LyoqXG5cdCAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuXHQgKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3Ncblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcblx0ICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcblx0ICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblx0XG5cdCAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2Vcblx0ICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cdFxuXHQgIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuXHQgIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cdFxuXHQgIHJldHVybiBpbnN0YW5jZTtcblx0fVxuXHRcblx0Ly8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5cdHZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblx0XG5cdC8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuXHRheGlvcy5BeGlvcyA9IEF4aW9zO1xuXHRcblx0Ly8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuXHRheGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcblx0ICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG5cdH07XG5cdFxuXHQvLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cblx0YXhpb3MuQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OTcpO1xuXHRheGlvcy5DYW5jZWxUb2tlbiA9IF9fd2VicGFja19yZXF1aXJlX18oNzk4KTtcblx0YXhpb3MuaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5NCk7XG5cdFxuXHQvLyBFeHBvc2UgYWxsL3NwcmVhZFxuXHRheGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcblx0ICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXHR9O1xuXHRheGlvcy5zcHJlYWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5OSk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXHRcblx0Ly8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5cdG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzc2OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBiaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NzcpO1xuXHR2YXIgaXNCdWZmZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc3OCk7XG5cdFxuXHQvKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblx0XG5cdC8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cdFxuXHR2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcblx0ICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcblx0ICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG5cdCAgdmFyIHJlc3VsdDtcblx0ICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG5cdCAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuXHQgIH1cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcblx0ICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuXHQgIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuXHQgIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcblx0fVxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG5cdCAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcblx0ICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuXHQgIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuXHQgIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuXHQgKi9cblx0ZnVuY3Rpb24gdHJpbShzdHIpIHtcblx0ICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG5cdCAqXG5cdCAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG5cdCAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cblx0ICpcblx0ICogd2ViIHdvcmtlcnM6XG5cdCAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuXHQgKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuXHQgKlxuXHQgKiByZWFjdC1uYXRpdmU6XG5cdCAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcblx0ICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cdCAgcmV0dXJuIChcblx0ICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdCAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cdCAgKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuXHQgKlxuXHQgKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG5cdCAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuXHQgKlxuXHQgKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuXHQgKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG5cdCAqL1xuXHRmdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcblx0ICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcblx0ICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXHRcblx0ICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcblx0ICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcblx0ICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuXHQgICAgb2JqID0gW29ial07XG5cdCAgfVxuXHRcblx0ICBpZiAoaXNBcnJheShvYmopKSB7XG5cdCAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG5cdCAgICB9XG5cdCAgfSBlbHNlIHtcblx0ICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuXHQgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXHQgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuXHQgICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cblx0ICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG5cdCAqXG5cdCAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG5cdCAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cblx0ICpcblx0ICogRXhhbXBsZTpcblx0ICpcblx0ICogYGBganNcblx0ICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuXHQgKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcblx0ICogYGBgXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcblx0ICovXG5cdGZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuXHQgIHZhciByZXN1bHQgPSB7fTtcblx0ICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuXHQgICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuXHQgIH1cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuXHQgKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuXHQgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcblx0ICovXG5cdGZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG5cdCAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuXHQgICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBhW2tleV0gPSB2YWw7XG5cdCAgICB9XG5cdCAgfSk7XG5cdCAgcmV0dXJuIGE7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIGlzQXJyYXk6IGlzQXJyYXksXG5cdCAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcblx0ICBpc0J1ZmZlcjogaXNCdWZmZXIsXG5cdCAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcblx0ICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG5cdCAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuXHQgIGlzTnVtYmVyOiBpc051bWJlcixcblx0ICBpc09iamVjdDogaXNPYmplY3QsXG5cdCAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuXHQgIGlzRGF0ZTogaXNEYXRlLFxuXHQgIGlzRmlsZTogaXNGaWxlLFxuXHQgIGlzQmxvYjogaXNCbG9iLFxuXHQgIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG5cdCAgaXNTdHJlYW06IGlzU3RyZWFtLFxuXHQgIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcblx0ICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG5cdCAgZm9yRWFjaDogZm9yRWFjaCxcblx0ICBtZXJnZTogbWVyZ2UsXG5cdCAgZXh0ZW5kOiBleHRlbmQsXG5cdCAgdHJpbTogdHJpbVxuXHR9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3Nzc6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG5cdCAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHQgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuXHQgIH07XG5cdH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc3ODpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiFcblx0ICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuXHQgKlxuXHQgKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuXHQgKiBAbGljZW5zZSAgTUlUXG5cdCAqL1xuXHRcblx0Ly8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuXHQvLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG5cdH1cblx0XG5cdGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcblx0ICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxuXHR9XG5cdFxuXHQvLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuXHRmdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuXHQgIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxuXHR9XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc3OTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc4MCk7XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNzc2KTtcblx0dmFyIEludGVyY2VwdG9yTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oNzkxKTtcblx0dmFyIGRpc3BhdGNoUmVxdWVzdCA9IF9fd2VicGFja19yZXF1aXJlX18oNzkyKTtcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3Ncblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG5cdCAqL1xuXHRmdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuXHQgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcblx0ICB0aGlzLmludGVyY2VwdG9ycyA9IHtcblx0ICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcblx0ICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcblx0ICB9O1xuXHR9XG5cdFxuXHQvKipcblx0ICogRGlzcGF0Y2ggYSByZXF1ZXN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuXHQgKi9cblx0QXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuXHQgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuXHQgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcblx0ICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcblx0ICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcblx0ICAgICAgdXJsOiBhcmd1bWVudHNbMF1cblx0ICAgIH0sIGFyZ3VtZW50c1sxXSk7XG5cdCAgfVxuXHRcblx0ICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXHQgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cdFxuXHQgIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcblx0ICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuXHQgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cdFxuXHQgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuXHQgICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcblx0ICB9KTtcblx0XG5cdCAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcblx0ICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG5cdCAgfSk7XG5cdFxuXHQgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcblx0ICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG5cdCAgfVxuXHRcblx0ICByZXR1cm4gcHJvbWlzZTtcblx0fTtcblx0XG5cdC8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xuXHR1dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcblx0ICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuXHQgIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcblx0ICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG5cdCAgICAgIG1ldGhvZDogbWV0aG9kLFxuXHQgICAgICB1cmw6IHVybFxuXHQgICAgfSkpO1xuXHQgIH07XG5cdH0pO1xuXHRcblx0dXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcblx0ICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuXHQgIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcblx0ICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG5cdCAgICAgIG1ldGhvZDogbWV0aG9kLFxuXHQgICAgICB1cmw6IHVybCxcblx0ICAgICAgZGF0YTogZGF0YVxuXHQgICAgfSkpO1xuXHQgIH07XG5cdH0pO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzgwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NzYpO1xuXHR2YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18oNzgxKTtcblx0XG5cdHZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcblx0ICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcblx0fTtcblx0XG5cdGZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuXHQgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG5cdCAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuXHQgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG5cdCAgdmFyIGFkYXB0ZXI7XG5cdCAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcblx0ICAgIGFkYXB0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc4Mik7XG5cdCAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcblx0ICAgIGFkYXB0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc4Mik7XG5cdCAgfVxuXHQgIHJldHVybiBhZGFwdGVyO1xuXHR9XG5cdFxuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdCAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblx0XG5cdCAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuXHQgICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG5cdCAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuXHQgICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG5cdCAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG5cdCAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG5cdCAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuXHQgICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcblx0ICAgICkge1xuXHQgICAgICByZXR1cm4gZGF0YTtcblx0ICAgIH1cblx0ICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuXHQgICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG5cdCAgICB9XG5cdCAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcblx0ICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuXHQgICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuXHQgICAgfVxuXHQgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG5cdCAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG5cdCAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBkYXRhO1xuXHQgIH1dLFxuXHRcblx0ICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcblx0ICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuXHQgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuXHQgICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XSxcblx0XG5cdCAgLyoqXG5cdCAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG5cdCAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cblx0ICAgKi9cblx0ICB0aW1lb3V0OiAwLFxuXHRcblx0ICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuXHQgIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblx0XG5cdCAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cdFxuXHQgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcblx0ICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcblx0ICB9XG5cdH07XG5cdFxuXHRkZWZhdWx0cy5oZWFkZXJzID0ge1xuXHQgIGNvbW1vbjoge1xuXHQgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG5cdCAgfVxuXHR9O1xuXHRcblx0dXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuXHQgIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xuXHR9KTtcblx0XG5cdHV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG5cdCAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xuXHR9KTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cdFxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygzKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3ODE6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NzYpO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG5cdCAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG5cdCAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG5cdCAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG5cdCAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3ODI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc3Nik7XG5cdHZhciBzZXR0bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc4Myk7XG5cdHZhciBidWlsZFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oNzg2KTtcblx0dmFyIHBhcnNlSGVhZGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNzg3KTtcblx0dmFyIGlzVVJMU2FtZU9yaWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oNzg4KTtcblx0dmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3ODQpO1xuXHR2YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IF9fd2VicGFja19yZXF1aXJlX18oNzg5KTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcblx0ICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG5cdCAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblx0XG5cdCAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcblx0ICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuXHQgICAgfVxuXHRcblx0ICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdCAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG5cdCAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXHRcblx0ICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG5cdCAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuXHQgICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG5cdCAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuXHQgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdCAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcblx0ICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG5cdCAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG5cdCAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuXHQgICAgICB4RG9tYWluID0gdHJ1ZTtcblx0ICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcblx0ICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuXHQgICAgaWYgKGNvbmZpZy5hdXRoKSB7XG5cdCAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuXHQgICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcblx0ICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcblx0ICAgIH1cblx0XG5cdCAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXHRcblx0ICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG5cdCAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblx0XG5cdCAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG5cdCAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuXHQgICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuXHQgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuXHQgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuXHQgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG5cdCAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2Vcblx0ICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuXHQgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuXHQgICAgICB2YXIgcmVzcG9uc2UgPSB7XG5cdCAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuXHQgICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuXHQgICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcblx0ICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcblx0ICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG5cdCAgICAgICAgY29uZmlnOiBjb25maWcsXG5cdCAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXHRcblx0ICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXHQgICAgICByZXF1ZXN0ID0gbnVsbDtcblx0ICAgIH07XG5cdFxuXHQgICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuXHQgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG5cdCAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuXHQgICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3Jcblx0ICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cdFxuXHQgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cdCAgICAgIHJlcXVlc3QgPSBudWxsO1xuXHQgICAgfTtcblx0XG5cdCAgICAvLyBIYW5kbGUgdGltZW91dFxuXHQgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuXHQgICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcblx0ICAgICAgICByZXF1ZXN0KSk7XG5cdFxuXHQgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cdCAgICAgIHJlcXVlc3QgPSBudWxsO1xuXHQgICAgfTtcblx0XG5cdCAgICAvLyBBZGQgeHNyZiBoZWFkZXJcblx0ICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuXHQgICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cblx0ICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG5cdCAgICAgIHZhciBjb29raWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OTApO1xuXHRcblx0ICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG5cdCAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG5cdCAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG5cdCAgICAgICAgICB1bmRlZmluZWQ7XG5cdFxuXHQgICAgICBpZiAoeHNyZlZhbHVlKSB7XG5cdCAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG5cdCAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcblx0ICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuXHQgICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuXHQgICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuXHQgICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG5cdCAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuXHQgICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcblx0ICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcblx0ICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuXHQgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuXHQgICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG5cdCAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuXHQgICAgICAgICAgdGhyb3cgZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG5cdCAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG5cdCAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG5cdCAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcblx0ICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuXHQgICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG5cdCAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG5cdCAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG5cdCAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXHQgICAgICAgIHJlcXVlc3QgPSBudWxsO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuXHQgICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcblx0ICB9KTtcblx0fTtcblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIDc4Mzpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgY3JlYXRlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc4NCk7XG5cdFxuXHQvKipcblx0ICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cblx0ICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcblx0ICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG5cdCAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG5cdCAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcblx0ICAgIHJlc29sdmUocmVzcG9uc2UpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZWplY3QoY3JlYXRlRXJyb3IoXG5cdCAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG5cdCAgICAgIHJlc3BvbnNlLmNvbmZpZyxcblx0ICAgICAgbnVsbCxcblx0ICAgICAgcmVzcG9uc2UucmVxdWVzdCxcblx0ICAgICAgcmVzcG9uc2Vcblx0ICAgICkpO1xuXHQgIH1cblx0fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzg0OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBlbmhhbmNlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc4NSk7XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG5cdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG5cdCAqL1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcblx0ICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdCAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG5cdH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc4NTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cblx0ICpcblx0ICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG5cdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcblx0ICBlcnJvci5jb25maWcgPSBjb25maWc7XG5cdCAgaWYgKGNvZGUpIHtcblx0ICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuXHQgIH1cblx0ICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcblx0ICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXHQgIHJldHVybiBlcnJvcjtcblx0fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzg2OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNzc2KTtcblx0XG5cdGZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcblx0ICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG5cdCAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG5cdCAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG5cdCAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cblx0ICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cblx0ICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuXHQgICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuXHQgICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuXHQgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuXHQgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuXHQgIGlmICghcGFyYW1zKSB7XG5cdCAgICByZXR1cm4gdXJsO1xuXHQgIH1cblx0XG5cdCAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG5cdCAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcblx0ICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG5cdCAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG5cdCAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhciBwYXJ0cyA9IFtdO1xuXHRcblx0ICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcblx0ICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuXHQgICAgICAgIGtleSA9IGtleSArICdbXSc7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdmFsID0gW3ZhbF07XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcblx0ICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG5cdCAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcblx0ICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG5cdCAgICAgIH0pO1xuXHQgICAgfSk7XG5cdFxuXHQgICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcblx0ICB9XG5cdFxuXHQgIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG5cdCAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG5cdCAgfVxuXHRcblx0ICByZXR1cm4gdXJsO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3ODc6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NzYpO1xuXHRcblx0Ly8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcblx0Ly8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuXHR2YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG5cdCAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcblx0ICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG5cdCAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuXHQgICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5cdF07XG5cdFxuXHQvKipcblx0ICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuXHQgKlxuXHQgKiBgYGBcblx0ICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcblx0ICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG5cdCAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcblx0ICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcblx0ICogYGBgXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcblx0ICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3Rcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcblx0ICB2YXIgcGFyc2VkID0ge307XG5cdCAgdmFyIGtleTtcblx0ICB2YXIgdmFsO1xuXHQgIHZhciBpO1xuXHRcblx0ICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXHRcblx0ICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuXHQgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuXHQgICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcblx0ICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblx0XG5cdCAgICBpZiAoa2V5KSB7XG5cdCAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcblx0ICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0pO1xuXHRcblx0ICByZXR1cm4gcGFyc2VkO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3ODg6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NzYpO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSAoXG5cdCAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cdFxuXHQgIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuXHQgIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuXHQgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG5cdCAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cdCAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdCAgICB2YXIgb3JpZ2luVVJMO1xuXHRcblx0ICAgIC8qKlxuXHQgICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcblx0ICAgICpcblx0ICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuXHQgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuXHQgICAgKi9cblx0ICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG5cdCAgICAgIHZhciBocmVmID0gdXJsO1xuXHRcblx0ICAgICAgaWYgKG1zaWUpIHtcblx0ICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG5cdCAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cdCAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXHRcblx0ICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuXHQgICAgICByZXR1cm4ge1xuXHQgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG5cdCAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcblx0ICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuXHQgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcblx0ICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuXHQgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcblx0ICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuXHQgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cblx0ICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuXHQgICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuXHQgICAgICB9O1xuXHQgICAgfVxuXHRcblx0ICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXHRcblx0ICAgIC8qKlxuXHQgICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuXHQgICAgKlxuXHQgICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3Rcblx0ICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuXHQgICAgKi9cblx0ICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuXHQgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuXHQgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG5cdCAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG5cdCAgICB9O1xuXHQgIH0pKCkgOlxuXHRcblx0ICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuXHQgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdCAgfSkoKVxuXHQpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3ODk6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0Ly8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cdFxuXHR2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXHRcblx0ZnVuY3Rpb24gRSgpIHtcblx0ICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcblx0fVxuXHRFLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcblx0RS5wcm90b3R5cGUuY29kZSA9IDU7XG5cdEUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblx0XG5cdGZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcblx0ICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcblx0ICB2YXIgb3V0cHV0ID0gJyc7XG5cdCAgZm9yIChcblx0ICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG5cdCAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcblx0ICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcblx0ICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG5cdCAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG5cdCAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuXHQgICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcblx0ICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuXHQgICkge1xuXHQgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuXHQgICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuXHQgICAgICB0aHJvdyBuZXcgRSgpO1xuXHQgICAgfVxuXHQgICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG5cdCAgfVxuXHQgIHJldHVybiBvdXRwdXQ7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzkwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNzc2KTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gKFxuXHQgIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXHRcblx0ICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcblx0ICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuXHQgICAgICAgIHZhciBjb29raWUgPSBbXTtcblx0ICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cdFxuXHQgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuXHQgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG5cdCAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuXHQgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcblx0ICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuXHQgICAgICB9LFxuXHRcblx0ICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG5cdCAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcblx0ICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuXHQgICAgICB9LFxuXHRcblx0ICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuXHQgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cdCAgfSkoKSA6XG5cdFxuXHQgIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cblx0ICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG5cdCAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuXHQgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG5cdCAgICB9O1xuXHQgIH0pKClcblx0KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzkxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNzc2KTtcblx0XG5cdGZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcblx0ICB0aGlzLmhhbmRsZXJzID0gW107XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcblx0ICpcblx0ICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuXHQgKi9cblx0SW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuXHQgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG5cdCAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcblx0ICAgIHJlamVjdGVkOiByZWplY3RlZFxuXHQgIH0pO1xuXHQgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG5cdH07XG5cdFxuXHQvKipcblx0ICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcblx0ICovXG5cdEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuXHQgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuXHQgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuXHQgIH1cblx0fTtcblx0XG5cdC8qKlxuXHQgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuXHQgKlxuXHQgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuXHQgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3Jcblx0ICovXG5cdEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcblx0ICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcblx0ICAgIGlmIChoICE9PSBudWxsKSB7XG5cdCAgICAgIGZuKGgpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc5Mjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc3Nik7XG5cdHZhciB0cmFuc2Zvcm1EYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OTMpO1xuXHR2YXIgaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5NCk7XG5cdHZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNzgwKTtcblx0dmFyIGlzQWJzb2x1dGVVUkwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5NSk7XG5cdHZhciBjb21iaW5lVVJMcyA9IF9fd2VicGFja19yZXF1aXJlX18oNzk2KTtcblx0XG5cdC8qKlxuXHQgKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcblx0ICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG5cdCAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuXHQgIH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuXHQgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblx0XG5cdCAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuXHQgIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuXHQgICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcblx0ICB9XG5cdFxuXHQgIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG5cdCAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblx0XG5cdCAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuXHQgIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcblx0ICAgIGNvbmZpZy5kYXRhLFxuXHQgICAgY29uZmlnLmhlYWRlcnMsXG5cdCAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuXHQgICk7XG5cdFxuXHQgIC8vIEZsYXR0ZW4gaGVhZGVyc1xuXHQgIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG5cdCAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG5cdCAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcblx0ICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG5cdCAgKTtcblx0XG5cdCAgdXRpbHMuZm9yRWFjaChcblx0ICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuXHQgICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG5cdCAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuXHQgICAgfVxuXHQgICk7XG5cdFxuXHQgIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblx0XG5cdCAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcblx0ICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblx0XG5cdCAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuXHQgICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG5cdCAgICAgIHJlc3BvbnNlLmRhdGEsXG5cdCAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG5cdCAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuXHQgICAgKTtcblx0XG5cdCAgICByZXR1cm4gcmVzcG9uc2U7XG5cdCAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuXHQgICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG5cdCAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblx0XG5cdCAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG5cdCAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG5cdCAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuXHQgICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG5cdCAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcblx0ICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuXHQgICAgICAgICk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcblx0ICB9KTtcblx0fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzkzOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNzc2KTtcblx0XG5cdC8qKlxuXHQgKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuXHQgKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuXHQgKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG5cdCAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcblx0ICovXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcblx0ICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cblx0ICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG5cdCAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG5cdCAgfSk7XG5cdFxuXHQgIHJldHVybiBkYXRhO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3OTQ6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuXHQgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcblx0fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzk1OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3Rcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuXHQgIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cblx0ICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcblx0ICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cblx0ICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG5cdH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDc5Njpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuXHQgIHJldHVybiByZWxhdGl2ZVVSTFxuXHQgICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcblx0ICAgIDogYmFzZVVSTDtcblx0fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzk3OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cblx0ICpcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cblx0ICovXG5cdGZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG5cdCAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxuXHRcblx0Q2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHQgIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xuXHR9O1xuXHRcblx0Q2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA3OTg6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIENhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oNzk3KTtcblx0XG5cdC8qKlxuXHQgKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuXHQgKlxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcblx0ICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG5cdCAgfVxuXHRcblx0ICB2YXIgcmVzb2x2ZVByb21pc2U7XG5cdCAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcblx0ICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcblx0ICB9KTtcblx0XG5cdCAgdmFyIHRva2VuID0gdGhpcztcblx0ICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuXHQgICAgaWYgKHRva2VuLnJlYXNvbikge1xuXHQgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHRcblx0ICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG5cdCAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuXHQgIH0pO1xuXHR9XG5cdFxuXHQvKipcblx0ICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cblx0ICovXG5cdENhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcblx0ICBpZiAodGhpcy5yZWFzb24pIHtcblx0ICAgIHRocm93IHRoaXMucmVhc29uO1xuXHQgIH1cblx0fTtcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG5cdCAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG5cdCAqL1xuXHRDYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG5cdCAgdmFyIGNhbmNlbDtcblx0ICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuXHQgICAgY2FuY2VsID0gYztcblx0ICB9KTtcblx0ICByZXR1cm4ge1xuXHQgICAgdG9rZW46IHRva2VuLFxuXHQgICAgY2FuY2VsOiBjYW5jZWxcblx0ICB9O1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNzk5OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuXHQgKlxuXHQgKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuXHQgKlxuXHQgKiAgYGBganNcblx0ICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cblx0ICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuXHQgKiAgZi5hcHBseShudWxsLCBhcmdzKTtcblx0ICogIGBgYFxuXHQgKlxuXHQgKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cblx0ICpcblx0ICogIGBgYGpzXG5cdCAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG5cdCAqICBgYGBcblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICogQHJldHVybnMge0Z1bmN0aW9ufVxuXHQgKi9cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcblx0ICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuXHQgIH07XG5cdH07XG5cblxuLyoqKi8gfSlcblxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHVzZXJQcm9qZWN0cy1idW5kbGUuanMiLCIvKlxuIEFrdm8gUlNSIGlzIGNvdmVyZWQgYnkgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZS5cbiBTZWUgbW9yZSBkZXRhaWxzIGluIHRoZSBsaWNlbnNlLnR4dCBmaWxlIGxvY2F0ZWQgYXQgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZVxuIEFrdm8gUlNSIG1vZHVsZS4gRm9yIGFkZGl0aW9uYWwgZGV0YWlscyBvbiB0aGUgR05VIGxpY2Vuc2UgcGxlYXNlIHNlZVxuIDwgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbCA+LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5cbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5pbXBvcnQgeyB3YXRjaGVyU2FnYSB9IGZyb20gXCIuL3NhZ2FzXCI7XG5cbi8vIGNyZWF0ZSB0aGUgc2FnYSBtaWRkbGV3YXJlXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cblxuLy8gZGV2IHRvb2xzIG1pZGRsZXdhcmVcbmNvbnN0IHJlZHV4RGV2VG9vbHMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpO1xuXG5sZXQgc3RvcmU7XG5pZiAocmVkdXhEZXZUb29scykge1xuICAgIHN0b3JlICA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSwgcmVkdXhEZXZUb29scykpXG59IGVsc2Uge1xuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XG59XG5cbnNhZ2FNaWRkbGV3YXJlLnJ1bih3YXRjaGVyU2FnYSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvUHJvdmlkZXI+LFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJQcm9qZWN0c1wiKVxuICAgICk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMtc3JjL3VzZXItcHJvamVjdHMtYWNjZXNzL2FwcC5qcyIsIi8qXG4gICBBa3ZvIFJTUiBpcyBjb3ZlcmVkIGJ5IHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UuXG4gICBTZWUgbW9yZSBkZXRhaWxzIGluIHRoZSBsaWNlbnNlLnR4dCBmaWxlIGxvY2F0ZWQgYXQgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZVxuICAgQWt2byBSU1IgbW9kdWxlLiBGb3IgYWRkaXRpb25hbCBkZXRhaWxzIG9uIHRoZSBHTlUgbGljZW5zZSBwbGVhc2Ugc2VlXG4gICA8IGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWwgPi5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBfLCBkYXRhRnJvbUVsZW1lbnQsIGluQXJyYXkgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuaW1wb3J0ICogYXMgYyBmcm9tIFwiLi4vY29uc3RcIjtcblxuY29uc3QgSXNSZXN0cmljdGVkID0gKHsgXywgaXNfcmVzdHJpY3RlZCwgb25DaGFuZ2VJc1Jlc3RyaWN0ZWQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cImlzX3Jlc3RyaWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc19yZXN0cmljdGVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJc1Jlc3RyaWN0ZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7XyhcInJlc3RyaWN0X2FjY2Vzc1wiKX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xufTtcblxuY29uc3QgUHJvamVjdCA9ICh7IF8sIHByb2plY3QsIHVzZXJfcHJvamVjdHMsIGlzX3Jlc3RyaWN0ZWQsIG9uQ2hhbmdlUHJvamVjdFNlbGVjdGVkIH0pID0+IHtcbiAgICBjb25zdCBjaGVja2VkID0gdXNlcl9wcm9qZWN0cyAmJiBpbkFycmF5KHByb2plY3QuaWQsIHVzZXJfcHJvamVjdHMpLFxuICAgICAgICBkaXNhYmxlZCA9IGlzX3Jlc3RyaWN0ZWQgPyBcIlwiIDogXCJkaXNhYmxlZFwiLFxuICAgICAgICBwcm9qZWN0U2VsZWN0ZWQgPSBjaGVja2VkID8gXCIgcHJvamVjdFNlbGVjdGVkXCI6IFwiXCIsXG4gICAgICAgIHRyQ2xhc3NOYW1lID0gZGlzYWJsZWQgKyBwcm9qZWN0U2VsZWN0ZWQsXG4gICAgICAgIGlkQ2xhc3NOYW1lID0gZGlzYWJsZWQgKyAgXCIgaWRcIjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dHJcbiAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgIGlkPXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgb25DbGljaz17b25DaGFuZ2VQcm9qZWN0U2VsZWN0ZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RyQ2xhc3NOYW1lfVxuICAgICAgICA+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzX3Jlc3RyaWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17aWRDbGFzc05hbWV9Pntwcm9qZWN0LmlkfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3Byb2plY3QudGl0bGUgfHwgXyhcIm5vX3RpdGxlXCIpfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgKTtcbn07XG5cbmNvbnN0IFNlbGVjdEFsbCA9ICh7IF8sIHNlbGVjdEFsbCwgb25DaGFuZ2VQcm9qZWN0U2VsZWN0QWxsLCBpc19yZXN0cmljdGVkIH0pID0+IHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IGlzX3Jlc3RyaWN0ZWQgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZSA9IFwic2VsZWN0QWxsUHJvamVjdHNcIiArIChpc19yZXN0cmljdGVkID8gXCJcIiA6IFwiIGRpc2FibGVkXCIpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc19yZXN0cmljdGVkID8gdW5kZWZpbmVkIDogXCJkaXNhYmxlZFwifT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DaGFuZ2VQcm9qZWN0U2VsZWN0QWxsfSBkaXNhYmxlZD17ZGlzYWJsZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0QWxsID8gXyhcImNoZWNrX2FsbF9wcm9qZWN0c1wiKSA6IF8oXCJ1bmNoZWNrX2FsbF9wcm9qZWN0c1wiKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuY29uc3QgRXJyb3IgPSAoeyBfLCBlcnJvciB9KSA9PiB7XG4gICAgcmV0dXJuIGVycm9yID8gPGRpdj57XyhcImFuX2Vycm9yX29jY3VyZWRcIikgKyBlcnJvci5tZXNzYWdlfTwvZGl2PiA6IG51bGw7XG59O1xuXG5jb25zdCBQcm9qZWN0cyA9ICh7XG4gICAgXyxcbiAgICBlcnJvcixcbiAgICBhbGxfcHJvamVjdHMsXG4gICAgdXNlcl9wcm9qZWN0cyxcbiAgICBpc19yZXN0cmljdGVkLFxuICAgIHNlbGVjdEFsbCxcbiAgICBvbkNoYW5nZUlzUmVzdHJpY3RlZCxcbiAgICBvbkNoYW5nZVByb2plY3RTZWxlY3RBbGwsXG4gICAgb25DaGFuZ2VQcm9qZWN0U2VsZWN0ZWRcbn0pID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpc19yZXN0cmljdGVkID8gXCJcIiA6IFwiZGlzYWJsZWRcIjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxFcnJvciBfPXtffSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgICAgICA8SXNSZXN0cmljdGVkXG4gICAgICAgICAgICAgICAgXz17X31cbiAgICAgICAgICAgICAgICBpc19yZXN0cmljdGVkPXtpc19yZXN0cmljdGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlSXNSZXN0cmljdGVkPXtvbkNoYW5nZUlzUmVzdHJpY3RlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2VsZWN0QWxsXG4gICAgICAgICAgICAgICAgXz17X31cbiAgICAgICAgICAgICAgICBzZWxlY3RBbGw9e3NlbGVjdEFsbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVByb2plY3RTZWxlY3RBbGw9e29uQ2hhbmdlUHJvamVjdFNlbGVjdEFsbH1cbiAgICAgICAgICAgICAgICBpc19yZXN0cmljdGVkPXtpc19yZXN0cmljdGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e18oXCJncmFudF9hY2Nlc3NcIil9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e18oXCJwcm9qZWN0X2lkXCIpfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtjbGFzc05hbWV9PntfKFwicHJvamVjdF90aXRsZVwiKX08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7YWxsX3Byb2plY3RzLm1hcChwcm9qZWN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXz17X31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdD17cHJvamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3Byb2plY3RzPXt1c2VyX3Byb2plY3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQ9e2lzX3Jlc3RyaWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VQcm9qZWN0U2VsZWN0ZWQ9e29uQ2hhbmdlUHJvamVjdFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlUHJvamVjdFNlbGVjdGVkID0gdGhpcy50b2dnbGVQcm9qZWN0U2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVJc1Jlc3RyaWN0ZWQgPSB0aGlzLnRvZ2dsZUlzUmVzdHJpY3RlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVByb2plY3RTZWxlY3RBbGwgPSB0aGlzLnRvZ2dsZVByb2plY3RTZWxlY3RBbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fID0gdGhpcy5fLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gVHJhbnNsYXRpb24gaGFuZGxpbmdcbiAgICBfKHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc3RyaW5ncyAmJiB0aGlzLnByb3BzLnN0cmluZ3Nbc107XG4gICAgfVxuXG4gICAgdG9nZ2xlSXNSZXN0cmljdGVkKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZUlzUmVzdHJpY3RlZChlLnRhcmdldC5jaGVja2VkKTtcbiAgICB9XG5cbiAgICB0b2dnbGVQcm9qZWN0U2VsZWN0QWxsKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZVNlbGVjdEFsbCgpO1xuICAgIH1cblxuICAgIHRvZ2dsZVByb2plY3RTZWxlY3RlZChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25VcGRhdGVQcm9qZWN0U2VsZWN0aW9uKGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB1c2VySWQgPSBkYXRhRnJvbUVsZW1lbnQoXCJ1c2VyLXRvLXJlc3RyaWN0XCIpLmlkO1xuICAgICAgICB0aGlzLnByb3BzLnNldFN0b3JlKHsgdXNlcklkIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSBkYXRhRnJvbUVsZW1lbnQoXCJ1c2VyLXByb2plY3RzLXRleHRcIik7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0U3RvcmUoeyBzdHJpbmdzIH0pO1xuXG4gICAgICAgIHRoaXMucHJvcHMub25GZXRjaFVzZXJQcm9qZWN0cyh1c2VySWQpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc19yZXN0cmljdGVkLCBzZWxlY3RBbGwsIGFsbF9wcm9qZWN0cywgdXNlcl9wcm9qZWN0cywgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBhbGxfcHJvamVjdHMgPyAoXG4gICAgICAgICAgICA8UHJvamVjdHNcbiAgICAgICAgICAgICAgICBfPXt0aGlzLl99XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQ9e2lzX3Jlc3RyaWN0ZWR9XG4gICAgICAgICAgICAgICAgc2VsZWN0QWxsPXtzZWxlY3RBbGx9XG4gICAgICAgICAgICAgICAgYWxsX3Byb2plY3RzPXthbGxfcHJvamVjdHN9XG4gICAgICAgICAgICAgICAgdXNlcl9wcm9qZWN0cz17dXNlcl9wcm9qZWN0c31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUlzUmVzdHJpY3RlZD17dGhpcy50b2dnbGVJc1Jlc3RyaWN0ZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VQcm9qZWN0U2VsZWN0QWxsPXt0aGlzLnRvZ2dsZVByb2plY3RTZWxlY3RBbGx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VQcm9qZWN0U2VsZWN0ZWQ9e3RoaXMudG9nZ2xlUHJvamVjdFNlbGVjdGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+e18oXCJsb2FkaW5nXCIpfTwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgZmV0Y2hpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBhbGxfcHJvamVjdHMsXG4gICAgICAgIGlzX3Jlc3RyaWN0ZWQsXG4gICAgICAgIHNlbGVjdEFsbCxcbiAgICAgICAgdXNlcl9wcm9qZWN0cyxcbiAgICAgICAgc3RyaW5nc1xuICAgIH0gPSBzdGF0ZTtcbiAgICByZXR1cm4geyBmZXRjaGluZywgZXJyb3IsIGFsbF9wcm9qZWN0cywgaXNfcmVzdHJpY3RlZCwgc2VsZWN0QWxsLCB1c2VyX3Byb2plY3RzLCBzdHJpbmdzIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25GZXRjaFVzZXJQcm9qZWN0czogdXNlcklkID0+IGRpc3BhdGNoKHsgdHlwZTogYy5BUElfR0VUX0lOSVQsIGRhdGE6IHsgdXNlcklkIH0gfSksXG4gICAgICAgIHNldFN0b3JlOiBkYXRhID0+IGRpc3BhdGNoKHsgdHlwZTogYy5TRVRfU1RPUkUsIGRhdGEgfSksXG4gICAgICAgIG9uVXBkYXRlUHJvamVjdFNlbGVjdGlvbjogcHJvamVjdElkID0+XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGMuVVBEQVRFX1BST0pFQ1RfU0VMRUNUSU9OLCBkYXRhOiB7IHByb2plY3RJZCB9IH0pLFxuICAgICAgICBvblVwZGF0ZUlzUmVzdHJpY3RlZDogaXNfcmVzdHJpY3RlZCA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBjLlVQREFURV9JU19SRVNUUklDVEVELCBkYXRhOiB7IGlzX3Jlc3RyaWN0ZWQgfSB9KSxcbiAgICAgICAgb25VcGRhdGVTZWxlY3RBbGw6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogYy5VUERBVEVfU0VMRUNUX0FMTF9QUk9KRUNUUyB9KVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy1zcmMvdXNlci1wcm9qZWN0cy1hY2Nlc3MvY29tcG9uZW50cy9BcHAuanN4IiwiLypcbiAgICBBa3ZvIFJTUiBpcyBjb3ZlcmVkIGJ5IHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UuXG4gICAgU2VlIG1vcmUgZGV0YWlscyBpbiB0aGUgbGljZW5zZS50eHQgZmlsZSBsb2NhdGVkIGF0IHRoZSByb290IGZvbGRlciBvZiB0aGVcbiAgICBBa3ZvIFJTUiBtb2R1bGUuIEZvciBhZGRpdGlvbmFsIGRldGFpbHMgb24gdGhlIEdOVSBsaWNlbnNlIHBsZWFzZSBzZWVcbiAgICA8IGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWwgPi5cbiAqL1xuXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL215LXJlc3VsdHMvc3RvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGVuZHBvaW50cyA9IHtcbiAgICB1c2VyX3Byb2plY3RzX2FjY2VzczogaWQgPT4gYC9yZXN0L3YxL3VzZXJfcHJvamVjdHNfYWNjZXNzLyR7aWR9Lz9mb3JtYXQ9anNvbmBcbn07XG5cbmV4cG9ydCBjb25zdCBpbkFycmF5ID0gKG9iaiwgYXJyKSA9PiBhcnIgJiYgYXJyLmluZGV4T2Yob2JqKSAhPT0gLTE7XG5cbmV4cG9ydCBjb25zdCBkYXRhRnJvbUVsZW1lbnQgPSBlbGVtZW50TmFtZSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudE5hbWUpLmlubmVySFRNTCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy1zcmMvdXNlci1wcm9qZWN0cy1hY2Nlc3MvdXRpbHMuanMiLCIvKlxuICAgIEFrdm8gUlNSIGlzIGNvdmVyZWQgYnkgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZS5cbiAgICBTZWUgbW9yZSBkZXRhaWxzIGluIHRoZSBsaWNlbnNlLnR4dCBmaWxlIGxvY2F0ZWQgYXQgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZVxuICAgIEFrdm8gUlNSIG1vZHVsZS4gRm9yIGFkZGl0aW9uYWwgZGV0YWlscyBvbiB0aGUgR05VIGxpY2Vuc2UgcGxlYXNlIHNlZVxuICAgIDwgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbCA+LlxuICovXG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IGNvbnN0IC8vXG4gICAgU0VUX1NUT1JFID0gXCJTRVRfU1RPUkVcIixcbiAgICAvL1xuICAgIEFQSV9HRVRfSU5JVCA9IFwiQVBJX0dFVF9JTklUXCIsXG4gICAgQVBJX0dFVF9TVUNDRVNTID0gXCJBUElfR0VUX1NVQ0NFU1NcIixcbiAgICBBUElfR0VUX0ZBSUxVUkUgPSBcIkFQSV9HRVRfRkFJTFVSRVwiLFxuICAgIC8vXG4gICAgQVBJX1BVVF9JTklUID0gXCJBUElfUFVUX0lOSVRcIixcbiAgICBBUElfUFVUX1NVQ0NFU1MgPSBcIkFQSV9QVVRfU1VDQ0VTU1wiLFxuICAgIEFQSV9QVVRfRkFJTFVSRSA9IFwiQVBJX1BVVF9GQUlMVVJFXCIsXG4gICAgLy9cbiAgICBVUERBVEVfUFJPSkVDVF9TRUxFQ1RJT04gPSBcIlVQREFURV9QUk9KRUNUX1NFTEVDVElPTlwiLFxuICAgIFVQREFURV9JU19SRVNUUklDVEVEID0gXCJVUERBVEVfSVNfUkVTVFJJQ1RFRFwiLFxuICAgIFVQREFURV9TRUxFQ1RfQUxMX1BST0pFQ1RTID0gXCJVUERBVEVfU0VMRUNUX0FMTF9QUk9KRUNUU1wiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy1zcmMvdXNlci1wcm9qZWN0cy1hY2Nlc3MvY29uc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnV0aWxzID0gZXhwb3J0cy5lZmZlY3RzID0gZXhwb3J0cy5kZXRhY2ggPSBleHBvcnRzLkNBTkNFTCA9IGV4cG9ydHMuZGVsYXkgPSBleHBvcnRzLnRocm90dGxlID0gZXhwb3J0cy50YWtlTGF0ZXN0ID0gZXhwb3J0cy50YWtlRXZlcnkgPSBleHBvcnRzLmJ1ZmZlcnMgPSBleHBvcnRzLmNoYW5uZWwgPSBleHBvcnRzLmV2ZW50Q2hhbm5lbCA9IGV4cG9ydHMuRU5EID0gZXhwb3J0cy5ydW5TYWdhID0gdW5kZWZpbmVkO1xuXG52YXIgX3J1blNhZ2EgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9pbnRlcm5hbC9ydW5TYWdhJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncnVuU2FnYScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9ydW5TYWdhLnJ1blNhZ2E7XG4gIH1cbn0pO1xuXG52YXIgX2NoYW5uZWwgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9pbnRlcm5hbC9jaGFubmVsJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRU5EJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NoYW5uZWwuRU5EO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZXZlbnRDaGFubmVsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NoYW5uZWwuZXZlbnRDaGFubmVsO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2hhbm5lbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jaGFubmVsLmNoYW5uZWw7XG4gIH1cbn0pO1xuXG52YXIgX2J1ZmZlcnMgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9pbnRlcm5hbC9idWZmZXJzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYnVmZmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9idWZmZXJzLmJ1ZmZlcnM7XG4gIH1cbn0pO1xuXG52YXIgX3NhZ2FIZWxwZXJzID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vaW50ZXJuYWwvc2FnYUhlbHBlcnMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0YWtlRXZlcnknLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc2FnYUhlbHBlcnMudGFrZUV2ZXJ5O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGFrZUxhdGVzdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zYWdhSGVscGVycy50YWtlTGF0ZXN0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGhyb3R0bGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc2FnYUhlbHBlcnMudGhyb3R0bGU7XG4gIH1cbn0pO1xuXG52YXIgX3V0aWxzID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vaW50ZXJuYWwvdXRpbHMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdkZWxheScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91dGlscy5kZWxheTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NBTkNFTCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91dGlscy5DQU5DRUw7XG4gIH1cbn0pO1xuXG52YXIgX2lvID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vaW50ZXJuYWwvaW8nKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdkZXRhY2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8uZGV0YWNoO1xuICB9XG59KTtcblxudmFyIF9taWRkbGV3YXJlID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vaW50ZXJuYWwvbWlkZGxld2FyZScpO1xuXG52YXIgX21pZGRsZXdhcmUyID0gLyojX19QVVJFX18qL19pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21pZGRsZXdhcmUpO1xuXG52YXIgX2VmZmVjdHMgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9lZmZlY3RzJyk7XG5cbnZhciBlZmZlY3RzID0gLyojX19QVVJFX18qL19pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lZmZlY3RzKTtcblxudmFyIF91dGlsczIgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgdXRpbHMgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9taWRkbGV3YXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5lZmZlY3RzID0gZWZmZWN0cztcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtc2FnYS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDczOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJ1blNhZ2EgPSBydW5TYWdhO1xuXG52YXIgX3V0aWxzID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9wcm9jID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vcHJvYycpO1xuXG52YXIgX3Byb2MyID0gLyojX19QVVJFX18qL19pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb2MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUlVOX1NBR0FfU0lHTkFUVVJFID0gJ3J1blNhZ2Eoc3RvcmVJbnRlcmZhY2UsIHNhZ2EsIC4uLmFyZ3MpJztcbnZhciBOT05fR0VORVJBVE9SX0VSUiA9IFJVTl9TQUdBX1NJR05BVFVSRSArICc6IHNhZ2EgYXJndW1lbnQgbXVzdCBiZSBhIEdlbmVyYXRvciBmdW5jdGlvbiEnO1xuXG5mdW5jdGlvbiBydW5TYWdhKHN0b3JlSW50ZXJmYWNlLCBzYWdhKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGl0ZXJhdG9yID0gdm9pZCAwO1xuXG4gIGlmIChfdXRpbHMuaXMuaXRlcmF0b3Ioc3RvcmVJbnRlcmZhY2UpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAoMCwgX3V0aWxzLmxvZykoJ3dhcm4nLCAncnVuU2FnYShpdGVyYXRvciwgc3RvcmVJbnRlcmZhY2UpIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgJyArIFJVTl9TQUdBX1NJR05BVFVSRSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gc3RvcmVJbnRlcmZhY2U7XG4gICAgc3RvcmVJbnRlcmZhY2UgPSBzYWdhO1xuICB9IGVsc2Uge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKHNhZ2EsIF91dGlscy5pcy5mdW5jLCBOT05fR0VORVJBVE9SX0VSUik7XG4gICAgaXRlcmF0b3IgPSBzYWdhLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgKDAsIF91dGlscy5jaGVjaykoaXRlcmF0b3IsIF91dGlscy5pcy5pdGVyYXRvciwgTk9OX0dFTkVSQVRPUl9FUlIpO1xuICB9XG5cbiAgdmFyIF9zdG9yZUludGVyZmFjZSA9IHN0b3JlSW50ZXJmYWNlLFxuICAgICAgc3Vic2NyaWJlID0gX3N0b3JlSW50ZXJmYWNlLnN1YnNjcmliZSxcbiAgICAgIGRpc3BhdGNoID0gX3N0b3JlSW50ZXJmYWNlLmRpc3BhdGNoLFxuICAgICAgZ2V0U3RhdGUgPSBfc3RvcmVJbnRlcmZhY2UuZ2V0U3RhdGUsXG4gICAgICBjb250ZXh0ID0gX3N0b3JlSW50ZXJmYWNlLmNvbnRleHQsXG4gICAgICBzYWdhTW9uaXRvciA9IF9zdG9yZUludGVyZmFjZS5zYWdhTW9uaXRvcixcbiAgICAgIGxvZ2dlciA9IF9zdG9yZUludGVyZmFjZS5sb2dnZXIsXG4gICAgICBvbkVycm9yID0gX3N0b3JlSW50ZXJmYWNlLm9uRXJyb3I7XG5cblxuICB2YXIgZWZmZWN0SWQgPSAoMCwgX3V0aWxzLnVpZCkoKTtcblxuICBpZiAoc2FnYU1vbml0b3IpIHtcbiAgICAvLyBtb25pdG9ycyBhcmUgZXhwZWN0ZWQgdG8gaGF2ZSBhIGNlcnRhaW4gaW50ZXJmYWNlLCBsZXQncyBmaWxsLWluIGFueSBtaXNzaW5nIG9uZXNcbiAgICBzYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQgfHwgX3V0aWxzLm5vb3A7XG4gICAgc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RSZXNvbHZlZCB8fCBfdXRpbHMubm9vcDtcbiAgICBzYWdhTW9uaXRvci5lZmZlY3RSZWplY3RlZCA9IHNhZ2FNb25pdG9yLmVmZmVjdFJlamVjdGVkIHx8IF91dGlscy5ub29wO1xuICAgIHNhZ2FNb25pdG9yLmVmZmVjdENhbmNlbGxlZCA9IHNhZ2FNb25pdG9yLmVmZmVjdENhbmNlbGxlZCB8fCBfdXRpbHMubm9vcDtcbiAgICBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkID0gc2FnYU1vbml0b3IuYWN0aW9uRGlzcGF0Y2hlZCB8fCBfdXRpbHMubm9vcDtcblxuICAgIHNhZ2FNb25pdG9yLmVmZmVjdFRyaWdnZXJlZCh7IGVmZmVjdElkOiBlZmZlY3RJZCwgcm9vdDogdHJ1ZSwgcGFyZW50RWZmZWN0SWQ6IDAsIGVmZmVjdDogeyByb290OiB0cnVlLCBzYWdhOiBzYWdhLCBhcmdzOiBhcmdzIH0gfSk7XG4gIH1cblxuICB2YXIgdGFzayA9ICgwLCBfcHJvYzIuZGVmYXVsdCkoaXRlcmF0b3IsIHN1YnNjcmliZSwgKDAsIF91dGlscy53cmFwU2FnYURpc3BhdGNoKShkaXNwYXRjaCksIGdldFN0YXRlLCBjb250ZXh0LCB7IHNhZ2FNb25pdG9yOiBzYWdhTW9uaXRvciwgbG9nZ2VyOiBsb2dnZXIsIG9uRXJyb3I6IG9uRXJyb3IgfSwgZWZmZWN0SWQsIHNhZ2EubmFtZSk7XG5cbiAgaWYgKHNhZ2FNb25pdG9yKSB7XG4gICAgc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQoZWZmZWN0SWQsIHRhc2spO1xuICB9XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3J1blNhZ2EuanNcbi8vIG1vZHVsZSBpZCA9IDczOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5jaGVjayA9IGNoZWNrO1xuZXhwb3J0cy5oYXNPd24gPSBoYXNPd247XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuZGVmZXJyZWQgPSBkZWZlcnJlZDtcbmV4cG9ydHMuYXJyYXlPZkRlZmZlcmVkID0gYXJyYXlPZkRlZmZlcmVkO1xuZXhwb3J0cy5kZWxheSA9IGRlbGF5O1xuZXhwb3J0cy5jcmVhdGVNb2NrVGFzayA9IGNyZWF0ZU1vY2tUYXNrO1xuZXhwb3J0cy5hdXRvSW5jID0gYXV0b0luYztcbmV4cG9ydHMubWFrZUl0ZXJhdG9yID0gbWFrZUl0ZXJhdG9yO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmRlcHJlY2F0ZSA9IGRlcHJlY2F0ZTtcbnZhciBzeW0gPSBleHBvcnRzLnN5bSA9IGZ1bmN0aW9uIHN5bShpZCkge1xuICByZXR1cm4gJ0BAcmVkdXgtc2FnYS8nICsgaWQ7XG59O1xuXG52YXIgVEFTSyA9IC8qI19fUFVSRV9fKi9leHBvcnRzLlRBU0sgPSBzeW0oJ1RBU0snKTtcbnZhciBIRUxQRVIgPSAvKiNfX1BVUkVfXyovZXhwb3J0cy5IRUxQRVIgPSBzeW0oJ0hFTFBFUicpO1xudmFyIE1BVENIID0gLyojX19QVVJFX18qL2V4cG9ydHMuTUFUQ0ggPSBzeW0oJ01BVENIJyk7XG52YXIgQ0FOQ0VMID0gLyojX19QVVJFX18qL2V4cG9ydHMuQ0FOQ0VMID0gc3ltKCdDQU5DRUxfUFJPTUlTRScpO1xudmFyIFNBR0FfQUNUSU9OID0gLyojX19QVVJFX18qL2V4cG9ydHMuU0FHQV9BQ1RJT04gPSBzeW0oJ1NBR0FfQUNUSU9OJyk7XG52YXIgU0VMRl9DQU5DRUxMQVRJT04gPSAvKiNfX1BVUkVfXyovZXhwb3J0cy5TRUxGX0NBTkNFTExBVElPTiA9IHN5bSgnU0VMRl9DQU5DRUxMQVRJT04nKTtcbnZhciBrb25zdCA9IGV4cG9ydHMua29uc3QgPSBmdW5jdGlvbiBrb25zdCh2KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xudmFyIGtUcnVlID0gLyojX19QVVJFX18qL2V4cG9ydHMua1RydWUgPSBrb25zdCh0cnVlKTtcbnZhciBrRmFsc2UgPSAvKiNfX1BVUkVfXyovZXhwb3J0cy5rRmFsc2UgPSBrb25zdChmYWxzZSk7XG52YXIgbm9vcCA9IGV4cG9ydHMubm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbnZhciBpZGVudCA9IGV4cG9ydHMuaWRlbnQgPSBmdW5jdGlvbiBpZGVudCh2KSB7XG4gIHJldHVybiB2O1xufTtcblxuZnVuY3Rpb24gY2hlY2sodmFsdWUsIHByZWRpY2F0ZSwgZXJyb3IpIHtcbiAgaWYgKCFwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgbG9nKCdlcnJvcicsICd1bmNhdWdodCBhdCBjaGVjaycsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBoYXNPd24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gaXMubm90VW5kZWYob2JqZWN0KSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xufVxuXG52YXIgaXMgPSBleHBvcnRzLmlzID0ge1xuICB1bmRlZjogZnVuY3Rpb24gdW5kZWYodikge1xuICAgIHJldHVybiB2ID09PSBudWxsIHx8IHYgPT09IHVuZGVmaW5lZDtcbiAgfSxcbiAgbm90VW5kZWY6IGZ1bmN0aW9uIG5vdFVuZGVmKHYpIHtcbiAgICByZXR1cm4gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQ7XG4gIH0sXG4gIGZ1bmM6IGZ1bmN0aW9uIGZ1bmMoZikge1xuICAgIHJldHVybiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJztcbiAgfSxcbiAgbnVtYmVyOiBmdW5jdGlvbiBudW1iZXIobikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcic7XG4gIH0sXG4gIHN0cmluZzogZnVuY3Rpb24gc3RyaW5nKHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnO1xuICB9LFxuICBhcnJheTogQXJyYXkuaXNBcnJheSxcbiAgb2JqZWN0OiBmdW5jdGlvbiBvYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiAhaXMuYXJyYXkob2JqKSAmJiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnO1xuICB9LFxuICBwcm9taXNlOiBmdW5jdGlvbiBwcm9taXNlKHApIHtcbiAgICByZXR1cm4gcCAmJiBpcy5mdW5jKHAudGhlbik7XG4gIH0sXG4gIGl0ZXJhdG9yOiBmdW5jdGlvbiBpdGVyYXRvcihpdCkge1xuICAgIHJldHVybiBpdCAmJiBpcy5mdW5jKGl0Lm5leHQpICYmIGlzLmZ1bmMoaXQudGhyb3cpO1xuICB9LFxuICBpdGVyYWJsZTogZnVuY3Rpb24gaXRlcmFibGUoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXMuZnVuYyhTeW1ib2wpID8gaXMuZnVuYyhpdFtTeW1ib2wuaXRlcmF0b3JdKSA6IGlzLmFycmF5KGl0KTtcbiAgfSxcbiAgdGFzazogZnVuY3Rpb24gdGFzayh0KSB7XG4gICAgcmV0dXJuIHQgJiYgdFtUQVNLXTtcbiAgfSxcbiAgb2JzZXJ2YWJsZTogZnVuY3Rpb24gb2JzZXJ2YWJsZShvYikge1xuICAgIHJldHVybiBvYiAmJiBpcy5mdW5jKG9iLnN1YnNjcmliZSk7XG4gIH0sXG4gIGJ1ZmZlcjogZnVuY3Rpb24gYnVmZmVyKGJ1Zikge1xuICAgIHJldHVybiBidWYgJiYgaXMuZnVuYyhidWYuaXNFbXB0eSkgJiYgaXMuZnVuYyhidWYudGFrZSkgJiYgaXMuZnVuYyhidWYucHV0KTtcbiAgfSxcbiAgcGF0dGVybjogZnVuY3Rpb24gcGF0dGVybihwYXQpIHtcbiAgICByZXR1cm4gcGF0ICYmIChpcy5zdHJpbmcocGF0KSB8fCAodHlwZW9mIHBhdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0KSkgPT09ICdzeW1ib2wnIHx8IGlzLmZ1bmMocGF0KSB8fCBpcy5hcnJheShwYXQpKTtcbiAgfSxcbiAgY2hhbm5lbDogZnVuY3Rpb24gY2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaCAmJiBpcy5mdW5jKGNoLnRha2UpICYmIGlzLmZ1bmMoY2guY2xvc2UpO1xuICB9LFxuICBoZWxwZXI6IGZ1bmN0aW9uIGhlbHBlcihpdCkge1xuICAgIHJldHVybiBpdCAmJiBpdFtIRUxQRVJdO1xuICB9LFxuICBzdHJpbmdhYmxlRnVuYzogZnVuY3Rpb24gc3RyaW5nYWJsZUZ1bmMoZikge1xuICAgIHJldHVybiBpcy5mdW5jKGYpICYmIGhhc093bihmLCAndG9TdHJpbmcnKTtcbiAgfVxufTtcblxudmFyIG9iamVjdCA9IGV4cG9ydHMub2JqZWN0ID0ge1xuICBhc3NpZ246IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaGFzT3duKHNvdXJjZSwgaSkpIHtcbiAgICAgICAgdGFyZ2V0W2ldID0gc291cmNlW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gcmVtb3ZlKGFycmF5LCBpdGVtKSB7XG4gIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG52YXIgYXJyYXkgPSBleHBvcnRzLmFycmF5ID0ge1xuICBmcm9tOiBmdW5jdGlvbiBmcm9tKG9iaikge1xuICAgIHZhciBhcnIgPSBBcnJheShvYmoubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgaWYgKGhhc093bihvYmosIGkpKSB7XG4gICAgICAgIGFycltpXSA9IG9ialtpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGVmZXJyZWQoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIGRlZiA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGRlZi5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBkZWYucmVqZWN0ID0gcmVqZWN0O1xuICB9KTtcbiAgZGVmLnByb21pc2UgPSBwcm9taXNlO1xuICByZXR1cm4gZGVmO1xufVxuXG5mdW5jdGlvbiBhcnJheU9mRGVmZmVyZWQobGVuZ3RoKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFyci5wdXNoKGRlZmVycmVkKCkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gIHZhciB2YWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgdmFyIHRpbWVvdXRJZCA9IHZvaWQgMDtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUodmFsKTtcbiAgICB9LCBtcyk7XG4gIH0pO1xuXG4gIHByb21pc2VbQ0FOQ0VMXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH07XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vY2tUYXNrKCkge1xuICB2YXIgX3JlZjtcblxuICB2YXIgcnVubmluZyA9IHRydWU7XG4gIHZhciBfcmVzdWx0ID0gdm9pZCAwLFxuICAgICAgX2Vycm9yID0gdm9pZCAwO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbVEFTS10gPSB0cnVlLCBfcmVmLmlzUnVubmluZyA9IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gcnVubmluZztcbiAgfSwgX3JlZi5yZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgcmV0dXJuIF9yZXN1bHQ7XG4gIH0sIF9yZWYuZXJyb3IgPSBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICByZXR1cm4gX2Vycm9yO1xuICB9LCBfcmVmLnNldFJ1bm5pbmcgPSBmdW5jdGlvbiBzZXRSdW5uaW5nKGIpIHtcbiAgICByZXR1cm4gcnVubmluZyA9IGI7XG4gIH0sIF9yZWYuc2V0UmVzdWx0ID0gZnVuY3Rpb24gc2V0UmVzdWx0KHIpIHtcbiAgICByZXR1cm4gX3Jlc3VsdCA9IHI7XG4gIH0sIF9yZWYuc2V0RXJyb3IgPSBmdW5jdGlvbiBzZXRFcnJvcihlKSB7XG4gICAgcmV0dXJuIF9lcnJvciA9IGU7XG4gIH0sIF9yZWY7XG59XG5cbmZ1bmN0aW9uIGF1dG9JbmMoKSB7XG4gIHZhciBzZWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICsrc2VlZDtcbiAgfTtcbn1cblxudmFyIHVpZCA9IC8qI19fUFVSRV9fKi9leHBvcnRzLnVpZCA9IGF1dG9JbmMoKTtcblxudmFyIGtUaHJvdyA9IGZ1bmN0aW9uIGtUaHJvdyhlcnIpIHtcbiAgdGhyb3cgZXJyO1xufTtcbnZhciBrUmV0dXJuID0gZnVuY3Rpb24ga1JldHVybih2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcbn07XG5mdW5jdGlvbiBtYWtlSXRlcmF0b3IobmV4dCkge1xuICB2YXIgdGhybyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoga1Rocm93O1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG4gIHZhciBpc0hlbHBlciA9IGFyZ3VtZW50c1szXTtcblxuICB2YXIgaXRlcmF0b3IgPSB7IG5hbWU6IG5hbWUsIG5leHQ6IG5leHQsIHRocm93OiB0aHJvLCByZXR1cm46IGtSZXR1cm4gfTtcblxuICBpZiAoaXNIZWxwZXIpIHtcbiAgICBpdGVyYXRvcltIRUxQRVJdID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG4vKipcbiAgUHJpbnQgZXJyb3IgaW4gYSB1c2VmdWwgd2F5IHdoZXRoZXIgaW4gYSBicm93c2VyIGVudmlyb25tZW50XG4gICh3aXRoIGV4cGFuZGFibGUgZXJyb3Igc3RhY2sgdHJhY2VzKSwgb3IgaW4gYSBub2RlLmpzIGVudmlyb25tZW50XG4gICh0ZXh0LW9ubHkgbG9nIG91dHB1dClcbiAqKi9cbmZ1bmN0aW9uIGxvZyhsZXZlbCwgbWVzc2FnZSkge1xuICB2YXIgZXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKCdyZWR1eC1zYWdhICcgKyBsZXZlbCArICc6ICcgKyBtZXNzYWdlICsgJ1xcbicgKyAoZXJyb3IgJiYgZXJyb3Iuc3RhY2sgfHwgZXJyb3IpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlW2xldmVsXShtZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVwcmVjYXRlKGZuLCBkZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGxvZygnd2FybicsIGRlcHJlY2F0aW9uV2FybmluZyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxudmFyIHVwZGF0ZUluY2VudGl2ZSA9IGV4cG9ydHMudXBkYXRlSW5jZW50aXZlID0gZnVuY3Rpb24gdXBkYXRlSW5jZW50aXZlKGRlcHJlY2F0ZWQsIHByZWZlcnJlZCkge1xuICByZXR1cm4gZGVwcmVjYXRlZCArICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAnICsgcHJlZmVycmVkICsgJywgcGxlYXNlIHVwZGF0ZSB5b3VyIGNvZGUnO1xufTtcblxudmFyIGludGVybmFsRXJyID0gZXhwb3J0cy5pbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuICByZXR1cm4gbmV3IEVycm9yKCdcXG4gIHJlZHV4LXNhZ2E6IEVycm9yIGNoZWNraW5nIGhvb2tzIGRldGVjdGVkIGFuIGluY29uc2lzdGVudCBzdGF0ZS4gVGhpcyBpcyBsaWtlbHkgYSBidWdcXG4gIGluIHJlZHV4LXNhZ2EgY29kZSBhbmQgbm90IHlvdXJzLiBUaGFua3MgZm9yIHJlcG9ydGluZyB0aGlzIGluIHRoZSBwcm9qZWN0XFwncyBnaXRodWIgcmVwby5cXG4gIEVycm9yOiAnICsgZXJyICsgJ1xcbicpO1xufTtcblxudmFyIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nID0gZXhwb3J0cy5jcmVhdGVTZXRDb250ZXh0V2FybmluZyA9IGZ1bmN0aW9uIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKGN0eCwgcHJvcHMpIHtcbiAgcmV0dXJuIChjdHggPyBjdHggKyAnLicgOiAnJykgKyAnc2V0Q29udGV4dChwcm9wcyk6IGFyZ3VtZW50ICcgKyBwcm9wcyArICcgaXMgbm90IGEgcGxhaW4gb2JqZWN0Jztcbn07XG5cbnZhciB3cmFwU2FnYURpc3BhdGNoID0gZXhwb3J0cy53cmFwU2FnYURpc3BhdGNoID0gZnVuY3Rpb24gd3JhcFNhZ2FEaXNwYXRjaChkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBkaXNwYXRjaChPYmplY3QuZGVmaW5lUHJvcGVydHkoYWN0aW9uLCBTQUdBX0FDVElPTiwgeyB2YWx1ZTogdHJ1ZSB9KSk7XG4gIH07XG59O1xuXG52YXIgY2xvbmVhYmxlR2VuZXJhdG9yID0gZXhwb3J0cy5jbG9uZWFibGVHZW5lcmF0b3IgPSBmdW5jdGlvbiBjbG9uZWFibGVHZW5lcmF0b3IoZ2VuZXJhdG9yRnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBoaXN0b3J5ID0gW107XG4gICAgdmFyIGdlbiA9IGdlbmVyYXRvckZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChhcmcpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFyZyk7XG4gICAgICAgIHJldHVybiBnZW4ubmV4dChhcmcpO1xuICAgICAgfSxcbiAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgICAgdmFyIGNsb25lZEdlbiA9IGNsb25lYWJsZUdlbmVyYXRvcihnZW5lcmF0b3JGdW5jKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICBoaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgIHJldHVybiBjbG9uZWRHZW4ubmV4dChhcmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZEdlbjtcbiAgICAgIH0sXG4gICAgICByZXR1cm46IGZ1bmN0aW9uIF9yZXR1cm4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdlbi5yZXR1cm4odmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHRocm93OiBmdW5jdGlvbiBfdGhyb3coZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBnZW4udGhyb3coZXhjZXB0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDc0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlRBU0tfQ0FOQ0VMID0gZXhwb3J0cy5DSEFOTkVMX0VORCA9IGV4cG9ydHMuTk9UX0lURVJBVE9SX0VSUk9SID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHByb2M7XG5cbnZhciBfdXRpbHMgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3NjaGVkdWxlciA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL3NjaGVkdWxlcicpO1xuXG52YXIgX2lvID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vaW8nKTtcblxudmFyIF9jaGFubmVsID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vY2hhbm5lbCcpO1xuXG52YXIgX2J1ZmZlcnMgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9idWZmZXJzJyk7XG5cbmZ1bmN0aW9uIF9kZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcyhvYmosIGRlc2NzKSB7IGZvciAodmFyIGtleSBpbiBkZXNjcykgeyB2YXIgZGVzYyA9IGRlc2NzW2tleV07IGRlc2MuY29uZmlndXJhYmxlID0gZGVzYy5lbnVtZXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSBkZXNjLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBkZXNjKTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBOT1RfSVRFUkFUT1JfRVJST1IgPSBleHBvcnRzLk5PVF9JVEVSQVRPUl9FUlJPUiA9ICdwcm9jIGZpcnN0IGFyZ3VtZW50IChTYWdhIGZ1bmN0aW9uIHJlc3VsdCkgbXVzdCBiZSBhbiBpdGVyYXRvcic7XG5cbnZhciBDSEFOTkVMX0VORCA9IGV4cG9ydHMuQ0hBTk5FTF9FTkQgPSB7XG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ0BAcmVkdXgtc2FnYS9DSEFOTkVMX0VORCc7XG4gIH1cbn07XG52YXIgVEFTS19DQU5DRUwgPSBleHBvcnRzLlRBU0tfQ0FOQ0VMID0ge1xuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdAQHJlZHV4LXNhZ2EvVEFTS19DQU5DRUwnO1xuICB9XG59O1xuXG52YXIgbWF0Y2hlcnMgPSB7XG4gIHdpbGRjYXJkOiBmdW5jdGlvbiB3aWxkY2FyZCgpIHtcbiAgICByZXR1cm4gX3V0aWxzLmtUcnVlO1xuICB9LFxuICBkZWZhdWx0OiBmdW5jdGlvbiBfZGVmYXVsdChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgcGF0dGVybiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0dGVybikpID09PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IHBhdHRlcm47XG4gICAgfSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgcmV0dXJuIGlucHV0LnR5cGUgPT09IFN0cmluZyhwYXR0ZXJuKTtcbiAgICB9O1xuICB9LFxuICBhcnJheTogZnVuY3Rpb24gYXJyYXkocGF0dGVybnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICByZXR1cm4gcGF0dGVybnMuc29tZShmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlcihwKShpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuICBwcmVkaWNhdGU6IGZ1bmN0aW9uIHByZWRpY2F0ZShfcHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgcmV0dXJuIF9wcmVkaWNhdGUoaW5wdXQpO1xuICAgIH07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1hdGNoZXIocGF0dGVybikge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgcmV0dXJuIChwYXR0ZXJuID09PSAnKicgPyBtYXRjaGVycy53aWxkY2FyZCA6IF91dGlscy5pcy5hcnJheShwYXR0ZXJuKSA/IG1hdGNoZXJzLmFycmF5IDogX3V0aWxzLmlzLnN0cmluZ2FibGVGdW5jKHBhdHRlcm4pID8gbWF0Y2hlcnMuZGVmYXVsdCA6IF91dGlscy5pcy5mdW5jKHBhdHRlcm4pID8gbWF0Y2hlcnMucHJlZGljYXRlIDogbWF0Y2hlcnMuZGVmYXVsdCkocGF0dGVybik7XG59XG5cbi8qKlxuICBVc2VkIHRvIHRyYWNrIGEgcGFyZW50IHRhc2sgYW5kIGl0cyBmb3Jrc1xuICBJbiB0aGUgbmV3IGZvcmsgbW9kZWwsIGZvcmtlZCB0YXNrcyBhcmUgYXR0YWNoZWQgYnkgZGVmYXVsdCB0byB0aGVpciBwYXJlbnRcbiAgV2UgbW9kZWwgdGhpcyB1c2luZyB0aGUgY29uY2VwdCBvZiBQYXJlbnQgdGFzayAmJiBtYWluIFRhc2tcbiAgbWFpbiB0YXNrIGlzIHRoZSBtYWluIGZsb3cgb2YgdGhlIGN1cnJlbnQgR2VuZXJhdG9yLCB0aGUgcGFyZW50IHRhc2tzIGlzIHRoZVxuICBhZ2dyZWdhdGlvbiBvZiB0aGUgbWFpbiB0YXNrcyArIGFsbCBpdHMgZm9ya2VkIHRhc2tzLlxuICBUaHVzIHRoZSB3aG9sZSBtb2RlbCByZXByZXNlbnRzIGFuIGV4ZWN1dGlvbiB0cmVlIHdpdGggbXVsdGlwbGUgYnJhbmNoZXMgKHZzIHRoZVxuICBsaW5lYXIgZXhlY3V0aW9uIHRyZWUgaW4gc2VxdWVudGlhbCAobm9uIHBhcmFsbGVsKSBwcm9ncmFtbWluZylcblxuICBBIHBhcmVudCB0YXNrcyBoYXMgdGhlIGZvbGxvd2luZyBzZW1hbnRpY3NcbiAgLSBJdCBjb21wbGV0ZXMgaWYgYWxsIGl0cyBmb3JrcyBlaXRoZXIgY29tcGxldGUgb3IgYWxsIGNhbmNlbGxlZFxuICAtIElmIGl0J3MgY2FuY2VsbGVkLCBhbGwgZm9ya3MgYXJlIGNhbmNlbGxlZCBhcyB3ZWxsXG4gIC0gSXQgYWJvcnRzIGlmIGFueSB1bmNhdWdodCBlcnJvciBidWJibGVzIHVwIGZyb20gZm9ya3NcbiAgLSBJZiBpdCBjb21wbGV0ZXMsIHRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIG9uZSByZXR1cm5lZCBieSB0aGUgbWFpbiB0YXNrXG4qKi9cbmZ1bmN0aW9uIGZvcmtRdWV1ZShuYW1lLCBtYWluVGFzaywgY2IpIHtcbiAgdmFyIHRhc2tzID0gW10sXG4gICAgICByZXN1bHQgPSB2b2lkIDAsXG4gICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgYWRkVGFzayhtYWluVGFzayk7XG5cbiAgZnVuY3Rpb24gYWJvcnQoZXJyKSB7XG4gICAgY2FuY2VsQWxsKCk7XG4gICAgY2IoZXJyLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgdGFzay5jb250ID0gZnVuY3Rpb24gKHJlcywgaXNFcnIpIHtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAoMCwgX3V0aWxzLnJlbW92ZSkodGFza3MsIHRhc2spO1xuICAgICAgdGFzay5jb250ID0gX3V0aWxzLm5vb3A7XG4gICAgICBpZiAoaXNFcnIpIHtcbiAgICAgICAgYWJvcnQocmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YXNrID09PSBtYWluVGFzaykge1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLy8gdGFzay5jb250LmNhbmNlbCA9IHRhc2suY2FuY2VsXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuY29udCA9IF91dGlscy5ub29wO1xuICAgICAgdC5jYW5jZWwoKTtcbiAgICB9KTtcbiAgICB0YXNrcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrOiBhZGRUYXNrLFxuICAgIGNhbmNlbEFsbDogY2FuY2VsQWxsLFxuICAgIGFib3J0OiBhYm9ydCxcbiAgICBnZXRUYXNrczogZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgICByZXR1cm4gdGFza3M7XG4gICAgfSxcbiAgICB0YXNrTmFtZXM6IGZ1bmN0aW9uIHRhc2tOYW1lcygpIHtcbiAgICAgIHJldHVybiB0YXNrcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZXJhdG9yKF9yZWYpIHtcbiAgdmFyIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBmbiA9IF9yZWYuZm4sXG4gICAgICBhcmdzID0gX3JlZi5hcmdzO1xuXG4gIGlmIChfdXRpbHMuaXMuaXRlcmF0b3IoZm4pKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gY2F0Y2ggc3luY2hyb25vdXMgZmFpbHVyZXM7IHNlZSAjMTUyIGFuZCAjNDQxXG4gIHZhciByZXN1bHQgPSB2b2lkIDAsXG4gICAgICBlcnJvciA9IHZvaWQgMDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyb3IgPSBlcnI7XG4gIH1cblxuICAvLyBpLmUuIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybnMgYW4gaXRlcmF0b3JcbiAgaWYgKF91dGlscy5pcy5pdGVyYXRvcihyZXN1bHQpKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGRvIG5vdCBidWJibGUgdXAgc3luY2hyb25vdXMgZmFpbHVyZXMgZm9yIGRldGFjaGVkIGZvcmtzXG4gIC8vIGluc3RlYWQgY3JlYXRlIGEgZmFpbGVkIHRhc2suIFNlZSAjMTUyIGFuZCAjNDQxXG4gIHJldHVybiBlcnJvciA/ICgwLCBfdXRpbHMubWFrZUl0ZXJhdG9yKShmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0pIDogKDAsIF91dGlscy5tYWtlSXRlcmF0b3IpKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGMgPSB2b2lkIDA7XG4gICAgdmFyIGVmZiA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiByZXN1bHQgfTtcbiAgICB2YXIgcmV0ID0gZnVuY3Rpb24gcmV0KHZhbHVlKSB7XG4gICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdmFsdWUgfTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICBpZiAoIXBjKSB7XG4gICAgICAgIHBjID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGVmZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXQoYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KCkpO1xufVxuXG52YXIgd3JhcEhlbHBlciA9IGZ1bmN0aW9uIHdyYXBIZWxwZXIoaGVscGVyKSB7XG4gIHJldHVybiB7IGZuOiBoZWxwZXIgfTtcbn07XG5cbmZ1bmN0aW9uIHByb2MoaXRlcmF0b3IpIHtcbiAgdmFyIHN1YnNjcmliZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdXRpbHMubm9vcDtcbiAgfTtcbiAgdmFyIGRpc3BhdGNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBfdXRpbHMubm9vcDtcbiAgdmFyIGdldFN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBfdXRpbHMubm9vcDtcbiAgdmFyIHBhcmVudENvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IHt9O1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDoge307XG4gIHZhciBwYXJlbnRFZmZlY3RJZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogMDtcbiAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gNyAmJiBhcmd1bWVudHNbN10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s3XSA6ICdhbm9ueW1vdXMnO1xuICB2YXIgY29udCA9IGFyZ3VtZW50c1s4XTtcblxuICAoMCwgX3V0aWxzLmNoZWNrKShpdGVyYXRvciwgX3V0aWxzLmlzLml0ZXJhdG9yLCBOT1RfSVRFUkFUT1JfRVJST1IpO1xuXG4gIHZhciBlZmZlY3RzU3RyaW5nID0gJ1suLi5lZmZlY3RzXSc7XG4gIHZhciBydW5QYXJhbGxlbEVmZmVjdCA9ICgwLCBfdXRpbHMuZGVwcmVjYXRlKShydW5BbGxFZmZlY3QsICgwLCBfdXRpbHMudXBkYXRlSW5jZW50aXZlKShlZmZlY3RzU3RyaW5nLCAnYWxsKCcgKyBlZmZlY3RzU3RyaW5nICsgJyknKSk7XG5cbiAgdmFyIHNhZ2FNb25pdG9yID0gb3B0aW9ucy5zYWdhTW9uaXRvcixcbiAgICAgIGxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyLFxuICAgICAgb25FcnJvciA9IG9wdGlvbnMub25FcnJvcjtcblxuICB2YXIgbG9nID0gbG9nZ2VyIHx8IF91dGlscy5sb2c7XG4gIHZhciBsb2dFcnJvciA9IGZ1bmN0aW9uIGxvZ0Vycm9yKGVycikge1xuICAgIHZhciBtZXNzYWdlID0gZXJyLnNhZ2FTdGFjaztcblxuICAgIGlmICghbWVzc2FnZSAmJiBlcnIuc3RhY2spIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnIuc3RhY2suc3BsaXQoJ1xcbicpWzBdLmluZGV4T2YoZXJyLm1lc3NhZ2UpICE9PSAtMSA/IGVyci5zdGFjayA6ICdFcnJvcjogJyArIGVyci5tZXNzYWdlICsgJ1xcbicgKyBlcnIuc3RhY2s7XG4gICAgfVxuXG4gICAgbG9nKCdlcnJvcicsICd1bmNhdWdodCBhdCAnICsgbmFtZSwgbWVzc2FnZSB8fCBlcnIubWVzc2FnZSB8fCBlcnIpO1xuICB9O1xuICB2YXIgc3RkQ2hhbm5lbCA9ICgwLCBfY2hhbm5lbC5zdGRDaGFubmVsKShzdWJzY3JpYmUpO1xuICB2YXIgdGFza0NvbnRleHQgPSBPYmplY3QuY3JlYXRlKHBhcmVudENvbnRleHQpO1xuICAvKipcbiAgICBUcmFja3MgdGhlIGN1cnJlbnQgZWZmZWN0IGNhbmNlbGxhdGlvblxuICAgIEVhY2ggdGltZSB0aGUgZ2VuZXJhdG9yIHByb2dyZXNzZXMuIGNhbGxpbmcgcnVuRWZmZWN0IHdpbGwgc2V0IGEgbmV3IHZhbHVlXG4gICAgb24gaXQuIEl0IGFsbG93cyBwcm9wYWdhdGluZyBjYW5jZWxsYXRpb24gdG8gY2hpbGQgZWZmZWN0c1xuICAqKi9cbiAgbmV4dC5jYW5jZWwgPSBfdXRpbHMubm9vcDtcblxuICAvKipcbiAgICBDcmVhdGVzIGEgbmV3IHRhc2sgZGVzY3JpcHRvciBmb3IgdGhpcyBnZW5lcmF0b3IsIFdlJ2xsIGFsc28gY3JlYXRlIGEgbWFpbiB0YXNrXG4gICAgdG8gdHJhY2sgdGhlIG1haW4gZmxvdyAoYmVzaWRlcyBvdGhlciBmb3JrZWQgdGFza3MpXG4gICoqL1xuICB2YXIgdGFzayA9IG5ld1Rhc2socGFyZW50RWZmZWN0SWQsIG5hbWUsIGl0ZXJhdG9yLCBjb250KTtcbiAgdmFyIG1haW5UYXNrID0geyBuYW1lOiBuYW1lLCBjYW5jZWw6IGNhbmNlbE1haW4sIGlzUnVubmluZzogdHJ1ZSB9O1xuICB2YXIgdGFza1F1ZXVlID0gZm9ya1F1ZXVlKG5hbWUsIG1haW5UYXNrLCBlbmQpO1xuXG4gIC8qKlxuICAgIGNhbmNlbGxhdGlvbiBvZiB0aGUgbWFpbiB0YXNrLiBXZSdsbCBzaW1wbHkgcmVzdW1lIHRoZSBHZW5lcmF0b3Igd2l0aCBhIENhbmNlbFxuICAqKi9cbiAgZnVuY3Rpb24gY2FuY2VsTWFpbigpIHtcbiAgICBpZiAobWFpblRhc2suaXNSdW5uaW5nICYmICFtYWluVGFzay5pc0NhbmNlbGxlZCkge1xuICAgICAgbWFpblRhc2suaXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgbmV4dChUQVNLX0NBTkNFTCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAgVGhpcyBtYXkgYmUgY2FsbGVkIGJ5IGEgcGFyZW50IGdlbmVyYXRvciB0byB0cmlnZ2VyL3Byb3BhZ2F0ZSBjYW5jZWxsYXRpb25cbiAgICBjYW5jZWwgYWxsIHBlbmRpbmcgdGFza3MgKGluY2x1ZGluZyB0aGUgbWFpbiB0YXNrKSwgdGhlbiBlbmQgdGhlIGN1cnJlbnQgdGFzay5cbiAgICAgQ2FuY2VsbGF0aW9uIHByb3BhZ2F0ZXMgZG93biB0byB0aGUgd2hvbGUgZXhlY3V0aW9uIHRyZWUgaG9sZGVkIGJ5IHRoaXMgUGFyZW50IHRhc2tcbiAgICBJdCdzIGFsc28gcHJvcGFnYXRlZCB0byBhbGwgam9pbmVycyBvZiB0aGlzIHRhc2sgYW5kIHRoZWlyIGV4ZWN1dGlvbiB0cmVlL2pvaW5lcnNcbiAgICAgQ2FuY2VsbGF0aW9uIGlzIG5vb3AgZm9yIHRlcm1pbmF0ZWQvQ2FuY2VsbGVkIHRhc2tzIHRhc2tzXG4gICoqL1xuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgLyoqXG4gICAgICBXZSBuZWVkIHRvIGNoZWNrIGJvdGggUnVubmluZyBhbmQgQ2FuY2VsbGVkIHN0YXR1c1xuICAgICAgVGFza3MgY2FuIGJlIENhbmNlbGxlZCBidXQgc3RpbGwgUnVubmluZ1xuICAgICoqL1xuICAgIGlmIChpdGVyYXRvci5faXNSdW5uaW5nICYmICFpdGVyYXRvci5faXNDYW5jZWxsZWQpIHtcbiAgICAgIGl0ZXJhdG9yLl9pc0NhbmNlbGxlZCA9IHRydWU7XG4gICAgICB0YXNrUXVldWUuY2FuY2VsQWxsKCk7XG4gICAgICAvKipcbiAgICAgICAgRW5kaW5nIHdpdGggYSBOZXZlciByZXN1bHQgd2lsbCBwcm9wYWdhdGUgdGhlIENhbmNlbGxhdGlvbiB0byBhbGwgam9pbmVyc1xuICAgICAgKiovXG4gICAgICBlbmQoVEFTS19DQU5DRUwpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICBhdHRhY2hlcyBjYW5jZWxsYXRpb24gbG9naWMgdG8gdGhpcyB0YXNrJ3MgY29udGludWF0aW9uXG4gICAgdGhpcyB3aWxsIHBlcm1pdCBjYW5jZWxsYXRpb24gdG8gcHJvcGFnYXRlIGRvd24gdGhlIGNhbGwgY2hhaW5cbiAgKiovXG4gIGNvbnQgJiYgKGNvbnQuY2FuY2VsID0gY2FuY2VsKTtcblxuICAvLyB0cmFja3MgdGhlIHJ1bm5pbmcgc3RhdHVzXG4gIGl0ZXJhdG9yLl9pc1J1bm5pbmcgPSB0cnVlO1xuXG4gIC8vIGtpY2tzIHVwIHRoZSBnZW5lcmF0b3JcbiAgbmV4dCgpO1xuXG4gIC8vIHRoZW4gcmV0dXJuIHRoZSB0YXNrIGRlc2NyaXB0b3IgdG8gdGhlIGNhbGxlclxuICByZXR1cm4gdGFzaztcblxuICAvKipcbiAgICBUaGlzIGlzIHRoZSBnZW5lcmF0b3IgZHJpdmVyXG4gICAgSXQncyBhIHJlY3Vyc2l2ZSBhc3luYy9jb250aW51YXRpb24gZnVuY3Rpb24gd2hpY2ggY2FsbHMgaXRzZWxmXG4gICAgdW50aWwgdGhlIGdlbmVyYXRvciB0ZXJtaW5hdGVzIG9yIHRocm93c1xuICAqKi9cbiAgZnVuY3Rpb24gbmV4dChhcmcsIGlzRXJyKSB7XG4gICAgLy8gUHJldmVudGl2ZSBtZWFzdXJlLiBJZiB3ZSBlbmQgdXAgaGVyZSwgdGhlbiB0aGVyZSBpcyByZWFsbHkgc29tZXRoaW5nIHdyb25nXG4gICAgaWYgKCFtYWluVGFzay5pc1J1bm5pbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIHJlc3VtZSBhbiBhbHJlYWR5IGZpbmlzaGVkIGdlbmVyYXRvcicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgaWYgKGlzRXJyKSB7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLnRocm93KGFyZyk7XG4gICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gVEFTS19DQU5DRUwpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAgZ2V0dGluZyBUQVNLX0NBTkNFTCBhdXRvbWF0aWNhbGx5IGNhbmNlbHMgdGhlIG1haW4gdGFza1xuICAgICAgICAgIFdlIGNhbiBnZXQgdGhpcyB2YWx1ZSBoZXJlXG4gICAgICAgICAgIC0gQnkgY2FuY2VsbGluZyB0aGUgcGFyZW50IHRhc2sgbWFudWFsbHlcbiAgICAgICAgICAtIEJ5IGpvaW5pbmcgYSBDYW5jZWxsZWQgdGFza1xuICAgICAgICAqKi9cbiAgICAgICAgbWFpblRhc2suaXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICBDYW5jZWxzIHRoZSBjdXJyZW50IGVmZmVjdDsgdGhpcyB3aWxsIHByb3BhZ2F0ZSB0aGUgY2FuY2VsbGF0aW9uIGRvd24gdG8gYW55IGNhbGxlZCB0YXNrc1xuICAgICAgICAqKi9cbiAgICAgICAgbmV4dC5jYW5jZWwoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAgSWYgdGhpcyBHZW5lcmF0b3IgaGFzIGEgYHJldHVybmAgbWV0aG9kIHRoZW4gaW52b2tlcyBpdFxuICAgICAgICAgIFRoaXMgd2lsbCBqdW1wIHRvIHRoZSBmaW5hbGx5IGJsb2NrXG4gICAgICAgICoqL1xuICAgICAgICByZXN1bHQgPSBfdXRpbHMuaXMuZnVuYyhpdGVyYXRvci5yZXR1cm4pID8gaXRlcmF0b3IucmV0dXJuKFRBU0tfQ0FOQ0VMKSA6IHsgZG9uZTogdHJ1ZSwgdmFsdWU6IFRBU0tfQ0FOQ0VMIH07XG4gICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gQ0hBTk5FTF9FTkQpIHtcbiAgICAgICAgLy8gV2UgZ2V0IENIQU5ORUxfRU5EIGJ5IHRha2luZyBmcm9tIGEgY2hhbm5lbCB0aGF0IGVuZGVkIHVzaW5nIGB0YWtlYCAoYW5kIG5vdCBgdGFrZW1gIHVzZWQgdG8gdHJhcCBFbmQgb2YgY2hhbm5lbHMpXG4gICAgICAgIHJlc3VsdCA9IF91dGlscy5pcy5mdW5jKGl0ZXJhdG9yLnJldHVybikgPyBpdGVyYXRvci5yZXR1cm4oKSA6IHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dChhcmcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIHJ1bkVmZmVjdChyZXN1bHQudmFsdWUsIHBhcmVudEVmZmVjdElkLCAnJywgbmV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICBUaGlzIEdlbmVyYXRvciBoYXMgZW5kZWQsIHRlcm1pbmF0ZSB0aGUgbWFpbiB0YXNrIGFuZCBub3RpZnkgdGhlIGZvcmsgcXVldWVcbiAgICAgICAgKiovXG4gICAgICAgIG1haW5UYXNrLmlzTWFpblJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgbWFpblRhc2suY29udCAmJiBtYWluVGFzay5jb250KHJlc3VsdC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChtYWluVGFzay5pc0NhbmNlbGxlZCkge1xuICAgICAgICBsb2dFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICBtYWluVGFzay5pc01haW5SdW5uaW5nID0gZmFsc2U7XG4gICAgICBtYWluVGFzay5jb250KGVycm9yLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmQocmVzdWx0LCBpc0Vycikge1xuICAgIGl0ZXJhdG9yLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBzdGRDaGFubmVsLmNsb3NlKCk7XG4gICAgaWYgKCFpc0Vycikge1xuICAgICAgaXRlcmF0b3IuX3Jlc3VsdCA9IHJlc3VsdDtcbiAgICAgIGl0ZXJhdG9yLl9kZWZlcnJlZEVuZCAmJiBpdGVyYXRvci5fZGVmZXJyZWRFbmQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdCwgJ3NhZ2FTdGFjaycsIHtcbiAgICAgICAgICB2YWx1ZTogJ2F0ICcgKyBuYW1lICsgJyBcXG4gJyArIChyZXN1bHQuc2FnYVN0YWNrIHx8IHJlc3VsdC5zdGFjayksXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXNrLmNvbnQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yICYmIG9uRXJyb3IpIHtcbiAgICAgICAgICBvbkVycm9yKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nRXJyb3IocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXRlcmF0b3IuX2Vycm9yID0gcmVzdWx0O1xuICAgICAgaXRlcmF0b3IuX2lzQWJvcnRlZCA9IHRydWU7XG4gICAgICBpdGVyYXRvci5fZGVmZXJyZWRFbmQgJiYgaXRlcmF0b3IuX2RlZmVycmVkRW5kLnJlamVjdChyZXN1bHQpO1xuICAgIH1cbiAgICB0YXNrLmNvbnQgJiYgdGFzay5jb250KHJlc3VsdCwgaXNFcnIpO1xuICAgIHRhc2suam9pbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChqKSB7XG4gICAgICByZXR1cm4gai5jYihyZXN1bHQsIGlzRXJyKTtcbiAgICB9KTtcbiAgICB0YXNrLmpvaW5lcnMgPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuRWZmZWN0KGVmZmVjdCwgcGFyZW50RWZmZWN0SWQpIHtcbiAgICB2YXIgbGFiZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuICAgIHZhciBjYiA9IGFyZ3VtZW50c1szXTtcblxuICAgIHZhciBlZmZlY3RJZCA9ICgwLCBfdXRpbHMudWlkKSgpO1xuICAgIHNhZ2FNb25pdG9yICYmIHNhZ2FNb25pdG9yLmVmZmVjdFRyaWdnZXJlZCh7IGVmZmVjdElkOiBlZmZlY3RJZCwgcGFyZW50RWZmZWN0SWQ6IHBhcmVudEVmZmVjdElkLCBsYWJlbDogbGFiZWwsIGVmZmVjdDogZWZmZWN0IH0pO1xuXG4gICAgLyoqXG4gICAgICBjb21wbGV0aW9uIGNhbGxiYWNrIGFuZCBjYW5jZWwgY2FsbGJhY2sgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZVxuICAgICAgV2UgY2FuJ3QgY2FuY2VsIGFuIGFscmVhZHkgY29tcGxldGVkIGVmZmVjdFxuICAgICAgQW5kIFdlIGNhbid0IGNvbXBsZXRlIGFuIGFscmVhZHkgY2FuY2VsbGVkIGVmZmVjdElkXG4gICAgKiovXG4gICAgdmFyIGVmZmVjdFNldHRsZWQgPSB2b2lkIDA7XG5cbiAgICAvLyBDb21wbGV0aW9uIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgYXBwcm9wcmlhdGUgZWZmZWN0IHJ1bm5lclxuICAgIGZ1bmN0aW9uIGN1cnJDYihyZXMsIGlzRXJyKSB7XG4gICAgICBpZiAoZWZmZWN0U2V0dGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVmZmVjdFNldHRsZWQgPSB0cnVlO1xuICAgICAgY2IuY2FuY2VsID0gX3V0aWxzLm5vb3A7IC8vIGRlZmVuc2l2ZSBtZWFzdXJlXG4gICAgICBpZiAoc2FnYU1vbml0b3IpIHtcbiAgICAgICAgaXNFcnIgPyBzYWdhTW9uaXRvci5lZmZlY3RSZWplY3RlZChlZmZlY3RJZCwgcmVzKSA6IHNhZ2FNb25pdG9yLmVmZmVjdFJlc29sdmVkKGVmZmVjdElkLCByZXMpO1xuICAgICAgfVxuICAgICAgY2IocmVzLCBpc0Vycik7XG4gICAgfVxuICAgIC8vIHRyYWNrcyBkb3duIHRoZSBjdXJyZW50IGNhbmNlbFxuICAgIGN1cnJDYi5jYW5jZWwgPSBfdXRpbHMubm9vcDtcblxuICAgIC8vIHNldHVwIGNhbmNlbGxhdGlvbiBsb2dpYyBvbiB0aGUgcGFyZW50IGNiXG4gICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gcHJldmVudHMgY2FuY2VsbGluZyBhbiBhbHJlYWR5IGNvbXBsZXRlZCBlZmZlY3RcbiAgICAgIGlmIChlZmZlY3RTZXR0bGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWZmZWN0U2V0dGxlZCA9IHRydWU7XG4gICAgICAvKipcbiAgICAgICAgcHJvcGFnYXRlcyBjYW5jZWwgZG93bndhcmRcbiAgICAgICAgY2F0Y2ggdW5jYXVnaHQgY2FuY2VsbGF0aW9ucyBlcnJvcnM7IHNpbmNlIHdlIGNhbiBubyBsb25nZXIgY2FsbCB0aGUgY29tcGxldGlvblxuICAgICAgICBjYWxsYmFjaywgbG9nIGVycm9ycyByYWlzZWQgZHVyaW5nIGNhbmNlbGxhdGlvbnMgaW50byB0aGUgY29uc29sZVxuICAgICAgKiovXG4gICAgICB0cnkge1xuICAgICAgICBjdXJyQ2IuY2FuY2VsKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIGN1cnJDYi5jYW5jZWwgPSBfdXRpbHMubm9vcDsgLy8gZGVmZW5zaXZlIG1lYXN1cmVcblxuICAgICAgc2FnYU1vbml0b3IgJiYgc2FnYU1vbml0b3IuZWZmZWN0Q2FuY2VsbGVkKGVmZmVjdElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICBlYWNoIGVmZmVjdCBydW5uZXIgbXVzdCBhdHRhY2ggaXRzIG93biBsb2dpYyBvZiBjYW5jZWxsYXRpb24gdG8gdGhlIHByb3ZpZGVkIGNhbGxiYWNrXG4gICAgICBpdCBhbGxvd3MgdGhpcyBnZW5lcmF0b3IgdG8gcHJvcGFnYXRlIGNhbmNlbGxhdGlvbiBkb3dud2FyZC5cbiAgICAgICBBVFRFTlRJT04hIGVmZmVjdCBydW5uZXJzIG11c3Qgc2V0dXAgdGhlIGNhbmNlbCBsb2dpYyBieSBzZXR0aW5nIGNiLmNhbmNlbCA9IFtjYW5jZWxNZXRob2RdXG4gICAgICBBbmQgdGhlIHNldHVwIG11c3Qgb2NjdXIgYmVmb3JlIGNhbGxpbmcgdGhlIGNhbGxiYWNrXG4gICAgICAgVGhpcyBpcyBhIHNvcnQgb2YgaW52ZXJzaW9uIG9mIGNvbnRyb2w6IGNhbGxlZCBhc3luYyBmdW5jdGlvbnMgYXJlIHJlc3BvbnNpYmxlXG4gICAgICBmb3IgY29tcGxldGluZyB0aGUgZmxvdyBieSBjYWxsaW5nIHRoZSBwcm92aWRlZCBjb250aW51YXRpb247IHdoaWxlIGNhbGxlciBmdW5jdGlvbnNcbiAgICAgIGFyZSByZXNwb25zaWJsZSBmb3IgYWJvcnRpbmcgdGhlIGN1cnJlbnQgZmxvdyBieSBjYWxsaW5nIHRoZSBhdHRhY2hlZCBjYW5jZWwgZnVuY3Rpb25cbiAgICAgICBMaWJyYXJ5IHVzZXJzIGNhbiBhdHRhY2ggdGhlaXIgb3duIGNhbmNlbGxhdGlvbiBsb2dpYyB0byBwcm9taXNlcyBieSBkZWZpbmluZyBhXG4gICAgICBwcm9taXNlW0NBTkNFTF0gbWV0aG9kIGluIHRoZWlyIHJldHVybmVkIHByb21pc2VzXG4gICAgICBBVFRFTlRJT04hIGNhbGxpbmcgY2FuY2VsIG11c3QgaGF2ZSBubyBlZmZlY3Qgb24gYW4gYWxyZWFkeSBjb21wbGV0ZWQgb3IgY2FuY2VsbGVkIGVmZmVjdFxuICAgICoqL1xuICAgIHZhciBkYXRhID0gdm9pZCAwO1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHJldHVybiAoXG4gICAgICAvLyBOb24gZGVjbGFyYXRpdmUgZWZmZWN0XG4gICAgICBfdXRpbHMuaXMucHJvbWlzZShlZmZlY3QpID8gcmVzb2x2ZVByb21pc2UoZWZmZWN0LCBjdXJyQ2IpIDogX3V0aWxzLmlzLmhlbHBlcihlZmZlY3QpID8gcnVuRm9ya0VmZmVjdCh3cmFwSGVscGVyKGVmZmVjdCksIGVmZmVjdElkLCBjdXJyQ2IpIDogX3V0aWxzLmlzLml0ZXJhdG9yKGVmZmVjdCkgPyByZXNvbHZlSXRlcmF0b3IoZWZmZWN0LCBlZmZlY3RJZCwgbmFtZSwgY3VyckNiKVxuXG4gICAgICAvLyBkZWNsYXJhdGl2ZSBlZmZlY3RzXG4gICAgICA6IF91dGlscy5pcy5hcnJheShlZmZlY3QpID8gcnVuUGFyYWxsZWxFZmZlY3QoZWZmZWN0LCBlZmZlY3RJZCwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LnRha2UoZWZmZWN0KSkgPyBydW5UYWtlRWZmZWN0KGRhdGEsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5wdXQoZWZmZWN0KSkgPyBydW5QdXRFZmZlY3QoZGF0YSwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LmFsbChlZmZlY3QpKSA/IHJ1bkFsbEVmZmVjdChkYXRhLCBlZmZlY3RJZCwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LnJhY2UoZWZmZWN0KSkgPyBydW5SYWNlRWZmZWN0KGRhdGEsIGVmZmVjdElkLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3QuY2FsbChlZmZlY3QpKSA/IHJ1bkNhbGxFZmZlY3QoZGF0YSwgZWZmZWN0SWQsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5jcHMoZWZmZWN0KSkgPyBydW5DUFNFZmZlY3QoZGF0YSwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LmZvcmsoZWZmZWN0KSkgPyBydW5Gb3JrRWZmZWN0KGRhdGEsIGVmZmVjdElkLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3Quam9pbihlZmZlY3QpKSA/IHJ1bkpvaW5FZmZlY3QoZGF0YSwgY3VyckNiKSA6IChkYXRhID0gX2lvLmFzRWZmZWN0LmNhbmNlbChlZmZlY3QpKSA/IHJ1bkNhbmNlbEVmZmVjdChkYXRhLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3Quc2VsZWN0KGVmZmVjdCkpID8gcnVuU2VsZWN0RWZmZWN0KGRhdGEsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5hY3Rpb25DaGFubmVsKGVmZmVjdCkpID8gcnVuQ2hhbm5lbEVmZmVjdChkYXRhLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3QuZmx1c2goZWZmZWN0KSkgPyBydW5GbHVzaEVmZmVjdChkYXRhLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3QuY2FuY2VsbGVkKGVmZmVjdCkpID8gcnVuQ2FuY2VsbGVkRWZmZWN0KGRhdGEsIGN1cnJDYikgOiAoZGF0YSA9IF9pby5hc0VmZmVjdC5nZXRDb250ZXh0KGVmZmVjdCkpID8gcnVuR2V0Q29udGV4dEVmZmVjdChkYXRhLCBjdXJyQ2IpIDogKGRhdGEgPSBfaW8uYXNFZmZlY3Quc2V0Q29udGV4dChlZmZlY3QpKSA/IHJ1blNldENvbnRleHRFZmZlY3QoZGF0YSwgY3VyckNiKSA6IC8qIGFueXRoaW5nIGVsc2UgcmV0dXJuZWQgYXMgaXMgKi9jdXJyQ2IoZWZmZWN0KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBjYikge1xuICAgIHZhciBjYW5jZWxQcm9taXNlID0gcHJvbWlzZVtfdXRpbHMuQ0FOQ0VMXTtcbiAgICBpZiAoX3V0aWxzLmlzLmZ1bmMoY2FuY2VsUHJvbWlzZSkpIHtcbiAgICAgIGNiLmNhbmNlbCA9IGNhbmNlbFByb21pc2U7XG4gICAgfSBlbHNlIGlmIChfdXRpbHMuaXMuZnVuYyhwcm9taXNlLmFib3J0KSkge1xuICAgICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS5hYm9ydCgpO1xuICAgICAgfTtcbiAgICAgIC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciB0aGUgZmV0Y2ggQVBJLCB3aGVuZXZlciB0aGV5IGdldCBhcm91bmQgdG9cbiAgICAgIC8vIGFkZGluZyBjYW5jZWwgc3VwcG9ydFxuICAgIH1cbiAgICBwcm9taXNlLnRoZW4oY2IsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNiKGVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVJdGVyYXRvcihpdGVyYXRvciwgZWZmZWN0SWQsIG5hbWUsIGNiKSB7XG4gICAgcHJvYyhpdGVyYXRvciwgc3Vic2NyaWJlLCBkaXNwYXRjaCwgZ2V0U3RhdGUsIHRhc2tDb250ZXh0LCBvcHRpb25zLCBlZmZlY3RJZCwgbmFtZSwgY2IpO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuVGFrZUVmZmVjdChfcmVmMiwgY2IpIHtcbiAgICB2YXIgY2hhbm5lbCA9IF9yZWYyLmNoYW5uZWwsXG4gICAgICAgIHBhdHRlcm4gPSBfcmVmMi5wYXR0ZXJuLFxuICAgICAgICBtYXliZSA9IF9yZWYyLm1heWJlO1xuXG4gICAgY2hhbm5lbCA9IGNoYW5uZWwgfHwgc3RkQ2hhbm5lbDtcbiAgICB2YXIgdGFrZUNiID0gZnVuY3Rpb24gdGFrZUNiKGlucCkge1xuICAgICAgcmV0dXJuIGlucCBpbnN0YW5jZW9mIEVycm9yID8gY2IoaW5wLCB0cnVlKSA6ICgwLCBfY2hhbm5lbC5pc0VuZCkoaW5wKSAmJiAhbWF5YmUgPyBjYihDSEFOTkVMX0VORCkgOiBjYihpbnApO1xuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNoYW5uZWwudGFrZSh0YWtlQ2IsIG1hdGNoZXIocGF0dGVybikpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGNiKGVyciwgdHJ1ZSk7XG4gICAgfVxuICAgIGNiLmNhbmNlbCA9IHRha2VDYi5jYW5jZWw7XG4gIH1cblxuICBmdW5jdGlvbiBydW5QdXRFZmZlY3QoX3JlZjMsIGNiKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBfcmVmMy5jaGFubmVsLFxuICAgICAgICBhY3Rpb24gPSBfcmVmMy5hY3Rpb24sXG4gICAgICAgIHJlc29sdmUgPSBfcmVmMy5yZXNvbHZlO1xuXG4gICAgLyoqXG4gICAgICBTY2hlZHVsZSB0aGUgcHV0IGluIGNhc2UgYW5vdGhlciBzYWdhIGlzIGhvbGRpbmcgYSBsb2NrLlxuICAgICAgVGhlIHB1dCB3aWxsIGJlIGV4ZWN1dGVkIGF0b21pY2FsbHkuIGllIG5lc3RlZCBwdXRzIHdpbGwgZXhlY3V0ZSBhZnRlclxuICAgICAgdGhpcyBwdXQgaGFzIHRlcm1pbmF0ZWQuXG4gICAgKiovXG4gICAgKDAsIF9zY2hlZHVsZXIuYXNhcCkoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IChjaGFubmVsID8gY2hhbm5lbC5wdXQgOiBkaXNwYXRjaCkoYWN0aW9uKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSBjaGFubmVsIG9yIGBwdXQucmVzb2x2ZWAgd2FzIHVzZWQgdGhlbiBidWJibGUgdXAgdGhlIGVycm9yLlxuICAgICAgICBpZiAoY2hhbm5lbCB8fCByZXNvbHZlKSByZXR1cm4gY2IoZXJyb3IsIHRydWUpO1xuICAgICAgICBsb2dFcnJvcihlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNvbHZlICYmIF91dGlscy5pcy5wcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2UocmVzdWx0LCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2IocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBQdXQgZWZmZWN0cyBhcmUgbm9uIGNhbmNlbGxhYmxlc1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuQ2FsbEVmZmVjdChfcmVmNCwgZWZmZWN0SWQsIGNiKSB7XG4gICAgdmFyIGNvbnRleHQgPSBfcmVmNC5jb250ZXh0LFxuICAgICAgICBmbiA9IF9yZWY0LmZuLFxuICAgICAgICBhcmdzID0gX3JlZjQuYXJncztcblxuICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgLy8gY2F0Y2ggc3luY2hyb25vdXMgZmFpbHVyZXM7IHNlZSAjMTUyXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gY2IoZXJyb3IsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gX3V0aWxzLmlzLnByb21pc2UocmVzdWx0KSA/IHJlc29sdmVQcm9taXNlKHJlc3VsdCwgY2IpIDogX3V0aWxzLmlzLml0ZXJhdG9yKHJlc3VsdCkgPyByZXNvbHZlSXRlcmF0b3IocmVzdWx0LCBlZmZlY3RJZCwgZm4ubmFtZSwgY2IpIDogY2IocmVzdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkNQU0VmZmVjdChfcmVmNSwgY2IpIHtcbiAgICB2YXIgY29udGV4dCA9IF9yZWY1LmNvbnRleHQsXG4gICAgICAgIGZuID0gX3JlZjUuZm4sXG4gICAgICAgIGFyZ3MgPSBfcmVmNS5hcmdzO1xuXG4gICAgLy8gQ1BTIChpZSBub2RlIHN0eWxlIGZ1bmN0aW9ucykgY2FuIGRlZmluZSB0aGVpciBvd24gY2FuY2VsbGF0aW9uIGxvZ2ljXG4gICAgLy8gYnkgc2V0dGluZyBjYW5jZWwgZmllbGQgb24gdGhlIGNiXG5cbiAgICAvLyBjYXRjaCBzeW5jaHJvbm91cyBmYWlsdXJlczsgc2VlICMxNTJcbiAgICB0cnkge1xuICAgICAgdmFyIGNwc0NiID0gZnVuY3Rpb24gY3BzQ2IoZXJyLCByZXMpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5pcy51bmRlZihlcnIpID8gY2IocmVzKSA6IGNiKGVyciwgdHJ1ZSk7XG4gICAgICB9O1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoY3BzQ2IpKTtcbiAgICAgIGlmIChjcHNDYi5jYW5jZWwpIHtcbiAgICAgICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjcHNDYi5jYW5jZWwoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNiKGVycm9yLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBydW5Gb3JrRWZmZWN0KF9yZWY2LCBlZmZlY3RJZCwgY2IpIHtcbiAgICB2YXIgY29udGV4dCA9IF9yZWY2LmNvbnRleHQsXG4gICAgICAgIGZuID0gX3JlZjYuZm4sXG4gICAgICAgIGFyZ3MgPSBfcmVmNi5hcmdzLFxuICAgICAgICBkZXRhY2hlZCA9IF9yZWY2LmRldGFjaGVkO1xuXG4gICAgdmFyIHRhc2tJdGVyYXRvciA9IGNyZWF0ZVRhc2tJdGVyYXRvcih7IGNvbnRleHQ6IGNvbnRleHQsIGZuOiBmbiwgYXJnczogYXJncyB9KTtcblxuICAgIHRyeSB7XG4gICAgICAoMCwgX3NjaGVkdWxlci5zdXNwZW5kKSgpO1xuICAgICAgdmFyIF90YXNrID0gcHJvYyh0YXNrSXRlcmF0b3IsIHN1YnNjcmliZSwgZGlzcGF0Y2gsIGdldFN0YXRlLCB0YXNrQ29udGV4dCwgb3B0aW9ucywgZWZmZWN0SWQsIGZuLm5hbWUsIGRldGFjaGVkID8gbnVsbCA6IF91dGlscy5ub29wKTtcblxuICAgICAgaWYgKGRldGFjaGVkKSB7XG4gICAgICAgIGNiKF90YXNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YXNrSXRlcmF0b3IuX2lzUnVubmluZykge1xuICAgICAgICAgIHRhc2tRdWV1ZS5hZGRUYXNrKF90YXNrKTtcbiAgICAgICAgICBjYihfdGFzayk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFza0l0ZXJhdG9yLl9lcnJvcikge1xuICAgICAgICAgIHRhc2tRdWV1ZS5hYm9ydCh0YXNrSXRlcmF0b3IuX2Vycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihfdGFzayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgKDAsIF9zY2hlZHVsZXIuZmx1c2gpKCk7XG4gICAgfVxuICAgIC8vIEZvcmsgZWZmZWN0cyBhcmUgbm9uIGNhbmNlbGxhYmxlc1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuSm9pbkVmZmVjdCh0LCBjYikge1xuICAgIGlmICh0LmlzUnVubmluZygpKSB7XG4gICAgICB2YXIgam9pbmVyID0geyB0YXNrOiB0YXNrLCBjYjogY2IgfTtcbiAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMucmVtb3ZlKSh0LmpvaW5lcnMsIGpvaW5lcik7XG4gICAgICB9O1xuICAgICAgdC5qb2luZXJzLnB1c2goam9pbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdC5pc0Fib3J0ZWQoKSA/IGNiKHQuZXJyb3IoKSwgdHJ1ZSkgOiBjYih0LnJlc3VsdCgpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBydW5DYW5jZWxFZmZlY3QodGFza1RvQ2FuY2VsLCBjYikge1xuICAgIGlmICh0YXNrVG9DYW5jZWwgPT09IF91dGlscy5TRUxGX0NBTkNFTExBVElPTikge1xuICAgICAgdGFza1RvQ2FuY2VsID0gdGFzaztcbiAgICB9XG4gICAgaWYgKHRhc2tUb0NhbmNlbC5pc1J1bm5pbmcoKSkge1xuICAgICAgdGFza1RvQ2FuY2VsLmNhbmNlbCgpO1xuICAgIH1cbiAgICBjYigpO1xuICAgIC8vIGNhbmNlbCBlZmZlY3RzIGFyZSBub24gY2FuY2VsbGFibGVzXG4gIH1cblxuICBmdW5jdGlvbiBydW5BbGxFZmZlY3QoZWZmZWN0cywgZWZmZWN0SWQsIGNiKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlZmZlY3RzKTtcblxuICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjYihfdXRpbHMuaXMuYXJyYXkoZWZmZWN0cykgPyBbXSA6IHt9KTtcbiAgICB9XG5cbiAgICB2YXIgY29tcGxldGVkQ291bnQgPSAwO1xuICAgIHZhciBjb21wbGV0ZWQgPSB2b2lkIDA7XG4gICAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgICB2YXIgY2hpbGRDYnMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRWZmZWN0RW5kKCkge1xuICAgICAgaWYgKGNvbXBsZXRlZENvdW50ID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBjYihfdXRpbHMuaXMuYXJyYXkoZWZmZWN0cykgPyBfdXRpbHMuYXJyYXkuZnJvbShfZXh0ZW5kcyh7fSwgcmVzdWx0cywgeyBsZW5ndGg6IGtleXMubGVuZ3RoIH0pKSA6IHJlc3VsdHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgY2hDYkF0S2V5ID0gZnVuY3Rpb24gY2hDYkF0S2V5KHJlcywgaXNFcnIpIHtcbiAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNFcnIgfHwgKDAsIF9jaGFubmVsLmlzRW5kKShyZXMpIHx8IHJlcyA9PT0gQ0hBTk5FTF9FTkQgfHwgcmVzID09PSBUQVNLX0NBTkNFTCkge1xuICAgICAgICAgIGNiLmNhbmNlbCgpO1xuICAgICAgICAgIGNiKHJlcywgaXNFcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHNba2V5XSA9IHJlcztcbiAgICAgICAgICBjb21wbGV0ZWRDb3VudCsrO1xuICAgICAgICAgIGNoZWNrRWZmZWN0RW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjaENiQXRLZXkuY2FuY2VsID0gX3V0aWxzLm5vb3A7XG4gICAgICBjaGlsZENic1trZXldID0gY2hDYkF0S2V5O1xuICAgIH0pO1xuXG4gICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjb21wbGV0ZWQpIHtcbiAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRDYnNba2V5XS5jYW5jZWwoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gcnVuRWZmZWN0KGVmZmVjdHNba2V5XSwgZWZmZWN0SWQsIGtleSwgY2hpbGRDYnNba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBydW5SYWNlRWZmZWN0KGVmZmVjdHMsIGVmZmVjdElkLCBjYikge1xuICAgIHZhciBjb21wbGV0ZWQgPSB2b2lkIDA7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlZmZlY3RzKTtcbiAgICB2YXIgY2hpbGRDYnMgPSB7fTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgY2hDYkF0S2V5ID0gZnVuY3Rpb24gY2hDYkF0S2V5KHJlcywgaXNFcnIpIHtcbiAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Vycikge1xuICAgICAgICAgIC8vIFJhY2UgQXV0byBjYW5jZWxsYXRpb25cbiAgICAgICAgICBjYi5jYW5jZWwoKTtcbiAgICAgICAgICBjYihyZXMsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKCEoMCwgX2NoYW5uZWwuaXNFbmQpKHJlcykgJiYgcmVzICE9PSBDSEFOTkVMX0VORCAmJiByZXMgIT09IFRBU0tfQ0FOQ0VMKSB7XG4gICAgICAgICAgdmFyIF9yZXNwb25zZTtcblxuICAgICAgICAgIGNiLmNhbmNlbCgpO1xuICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlID0gKF9yZXNwb25zZSA9IHt9LCBfcmVzcG9uc2Vba2V5XSA9IHJlcywgX3Jlc3BvbnNlKTtcbiAgICAgICAgICBjYihfdXRpbHMuaXMuYXJyYXkoZWZmZWN0cykgPyBbXS5zbGljZS5jYWxsKF9leHRlbmRzKHt9LCByZXNwb25zZSwgeyBsZW5ndGg6IGtleXMubGVuZ3RoIH0pKSA6IHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNoQ2JBdEtleS5jYW5jZWwgPSBfdXRpbHMubm9vcDtcbiAgICAgIGNoaWxkQ2JzW2tleV0gPSBjaENiQXRLZXk7XG4gICAgfSk7XG5cbiAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBwcmV2ZW50cyB1bm5lY2Vzc2FyeSBjYW5jZWxsYXRpb25cbiAgICAgIGlmICghY29tcGxldGVkKSB7XG4gICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkQ2JzW2tleV0uY2FuY2VsKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcnVuRWZmZWN0KGVmZmVjdHNba2V5XSwgZWZmZWN0SWQsIGtleSwgY2hpbGRDYnNba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBydW5TZWxlY3RFZmZlY3QoX3JlZjcsIGNiKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gX3JlZjcuc2VsZWN0b3IsXG4gICAgICAgIGFyZ3MgPSBfcmVmNy5hcmdzO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzdGF0ZSA9IHNlbGVjdG9yLmFwcGx5KHVuZGVmaW5lZCwgW2dldFN0YXRlKCldLmNvbmNhdChhcmdzKSk7XG4gICAgICBjYihzdGF0ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBydW5DaGFubmVsRWZmZWN0KF9yZWY4LCBjYikge1xuICAgIHZhciBwYXR0ZXJuID0gX3JlZjgucGF0dGVybixcbiAgICAgICAgYnVmZmVyID0gX3JlZjguYnVmZmVyO1xuXG4gICAgdmFyIG1hdGNoID0gbWF0Y2hlcihwYXR0ZXJuKTtcbiAgICBtYXRjaC5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICBjYigoMCwgX2NoYW5uZWwuZXZlbnRDaGFubmVsKShzdWJzY3JpYmUsIGJ1ZmZlciB8fCBfYnVmZmVycy5idWZmZXJzLmZpeGVkKCksIG1hdGNoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBydW5DYW5jZWxsZWRFZmZlY3QoZGF0YSwgY2IpIHtcbiAgICBjYighIW1haW5UYXNrLmlzQ2FuY2VsbGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkZsdXNoRWZmZWN0KGNoYW5uZWwsIGNiKSB7XG4gICAgY2hhbm5lbC5mbHVzaChjYik7XG4gIH1cblxuICBmdW5jdGlvbiBydW5HZXRDb250ZXh0RWZmZWN0KHByb3AsIGNiKSB7XG4gICAgY2IodGFza0NvbnRleHRbcHJvcF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuU2V0Q29udGV4dEVmZmVjdChwcm9wcywgY2IpIHtcbiAgICBfdXRpbHMub2JqZWN0LmFzc2lnbih0YXNrQ29udGV4dCwgcHJvcHMpO1xuICAgIGNiKCk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXdUYXNrKGlkLCBuYW1lLCBpdGVyYXRvciwgY29udCkge1xuICAgIHZhciBfZG9uZSwgX3JlZjksIF9tdXRhdG9yTWFwO1xuXG4gICAgaXRlcmF0b3IuX2RlZmVycmVkRW5kID0gbnVsbDtcbiAgICByZXR1cm4gX3JlZjkgPSB7fSwgX3JlZjlbX3V0aWxzLlRBU0tdID0gdHJ1ZSwgX3JlZjkuaWQgPSBpZCwgX3JlZjkubmFtZSA9IG5hbWUsIF9kb25lID0gJ2RvbmUnLCBfbXV0YXRvck1hcCA9IHt9LCBfbXV0YXRvck1hcFtfZG9uZV0gPSBfbXV0YXRvck1hcFtfZG9uZV0gfHwge30sIF9tdXRhdG9yTWFwW19kb25lXS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXRlcmF0b3IuX2RlZmVycmVkRW5kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvci5fZGVmZXJyZWRFbmQucHJvbWlzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkZWYgPSAoMCwgX3V0aWxzLmRlZmVycmVkKSgpO1xuICAgICAgICBpdGVyYXRvci5fZGVmZXJyZWRFbmQgPSBkZWY7XG4gICAgICAgIGlmICghaXRlcmF0b3IuX2lzUnVubmluZykge1xuICAgICAgICAgIGl0ZXJhdG9yLl9lcnJvciA/IGRlZi5yZWplY3QoaXRlcmF0b3IuX2Vycm9yKSA6IGRlZi5yZXNvbHZlKGl0ZXJhdG9yLl9yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWYucHJvbWlzZTtcbiAgICAgIH1cbiAgICB9LCBfcmVmOS5jb250ID0gY29udCwgX3JlZjkuam9pbmVycyA9IFtdLCBfcmVmOS5jYW5jZWwgPSBjYW5jZWwsIF9yZWY5LmlzUnVubmluZyA9IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvci5faXNSdW5uaW5nO1xuICAgIH0sIF9yZWY5LmlzQ2FuY2VsbGVkID0gZnVuY3Rpb24gaXNDYW5jZWxsZWQoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3IuX2lzQ2FuY2VsbGVkO1xuICAgIH0sIF9yZWY5LmlzQWJvcnRlZCA9IGZ1bmN0aW9uIGlzQWJvcnRlZCgpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvci5faXNBYm9ydGVkO1xuICAgIH0sIF9yZWY5LnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvci5fcmVzdWx0O1xuICAgIH0sIF9yZWY5LmVycm9yID0gZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3IuX2Vycm9yO1xuICAgIH0sIF9yZWY5LnNldENvbnRleHQgPSBmdW5jdGlvbiBzZXRDb250ZXh0KHByb3BzKSB7XG4gICAgICAoMCwgX3V0aWxzLmNoZWNrKShwcm9wcywgX3V0aWxzLmlzLm9iamVjdCwgKDAsIF91dGlscy5jcmVhdGVTZXRDb250ZXh0V2FybmluZykoJ3Rhc2snLCBwcm9wcykpO1xuICAgICAgX3V0aWxzLm9iamVjdC5hc3NpZ24odGFza0NvbnRleHQsIHByb3BzKTtcbiAgICB9LCBfZGVmaW5lRW51bWVyYWJsZVByb3BlcnRpZXMoX3JlZjksIF9tdXRhdG9yTWFwKSwgX3JlZjk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvcHJvYy5qc1xuLy8gbW9kdWxlIGlkID0gNzQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hc2FwID0gYXNhcDtcbmV4cG9ydHMuc3VzcGVuZCA9IHN1c3BlbmQ7XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG52YXIgcXVldWUgPSBbXTtcbi8qKlxuICBWYXJpYWJsZSB0byBob2xkIGEgY291bnRpbmcgc2VtYXBob3JlXG4gIC0gSW5jcmVtZW50aW5nIGFkZHMgYSBsb2NrIGFuZCBwdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZSAoaWYgaXQncyBub3RcbiAgICBhbHJlYWR5IHN1c3BlbmRlZClcbiAgLSBEZWNyZW1lbnRpbmcgcmVsZWFzZXMgYSBsb2NrLiBaZXJvIGxvY2tzIHB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuIFRoaXNcbiAgICB0cmlnZ2VycyBmbHVzaGluZyB0aGUgcXVldWVkIHRhc2tzLlxuKiovXG52YXIgc2VtYXBob3JlID0gMDtcblxuLyoqXG4gIEV4ZWN1dGVzIGEgdGFzayAnYXRvbWljYWxseScuIFRhc2tzIHNjaGVkdWxlZCBkdXJpbmcgdGhpcyBleGVjdXRpb24gd2lsbCBiZSBxdWV1ZWRcbiAgYW5kIGZsdXNoZWQgYWZ0ZXIgdGhpcyB0YXNrIGhhcyBmaW5pc2hlZCAoYXNzdW1pbmcgdGhlIHNjaGVkdWxlciBlbmR1cCBpbiBhIHJlbGVhc2VkXG4gIHN0YXRlKS5cbioqL1xuZnVuY3Rpb24gZXhlYyh0YXNrKSB7XG4gIHRyeSB7XG4gICAgc3VzcGVuZCgpO1xuICAgIHRhc2soKTtcbiAgfSBmaW5hbGx5IHtcbiAgICByZWxlYXNlKCk7XG4gIH1cbn1cblxuLyoqXG4gIEV4ZWN1dGVzIG9yIHF1ZXVlcyBhIHRhc2sgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIChgc3VzcGVuZGVkYCBvciBgcmVsZWFzZWRgKVxuKiovXG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgcXVldWUucHVzaCh0YXNrKTtcblxuICBpZiAoIXNlbWFwaG9yZSkge1xuICAgIHN1c3BlbmQoKTtcbiAgICBmbHVzaCgpO1xuICB9XG59XG5cbi8qKlxuICBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZS4gU2NoZWR1bGVkIHRhc2tzIHdpbGwgYmUgcXVldWVkIHVudGlsIHRoZVxuICBzY2hlZHVsZXIgaXMgcmVsZWFzZWQuXG4qKi9cbmZ1bmN0aW9uIHN1c3BlbmQoKSB7XG4gIHNlbWFwaG9yZSsrO1xufVxuXG4vKipcbiAgUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS5cbioqL1xuZnVuY3Rpb24gcmVsZWFzZSgpIHtcbiAgc2VtYXBob3JlLS07XG59XG5cbi8qKlxuICBSZWxlYXNlcyB0aGUgY3VycmVudCBsb2NrLiBFeGVjdXRlcyBhbGwgcXVldWVkIHRhc2tzIGlmIHRoZSBzY2hlZHVsZXIgaXMgaW4gdGhlIHJlbGVhc2VkIHN0YXRlLlxuKiovXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgcmVsZWFzZSgpO1xuXG4gIHZhciB0YXNrID0gdm9pZCAwO1xuICB3aGlsZSAoIXNlbWFwaG9yZSAmJiAodGFzayA9IHF1ZXVlLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcbiAgICBleGVjKHRhc2spO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NjaGVkdWxlci5qc1xuLy8gbW9kdWxlIGlkID0gNzQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYXNFZmZlY3QgPSBleHBvcnRzLnRha2VtID0gZXhwb3J0cy5kZXRhY2ggPSB1bmRlZmluZWQ7XG5leHBvcnRzLnRha2UgPSB0YWtlO1xuZXhwb3J0cy5wdXQgPSBwdXQ7XG5leHBvcnRzLmFsbCA9IGFsbDtcbmV4cG9ydHMucmFjZSA9IHJhY2U7XG5leHBvcnRzLmNhbGwgPSBjYWxsO1xuZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuZXhwb3J0cy5jcHMgPSBjcHM7XG5leHBvcnRzLmZvcmsgPSBmb3JrO1xuZXhwb3J0cy5zcGF3biA9IHNwYXduO1xuZXhwb3J0cy5qb2luID0gam9pbjtcbmV4cG9ydHMuY2FuY2VsID0gY2FuY2VsO1xuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG5leHBvcnRzLmFjdGlvbkNoYW5uZWwgPSBhY3Rpb25DaGFubmVsO1xuZXhwb3J0cy5jYW5jZWxsZWQgPSBjYW5jZWxsZWQ7XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG5leHBvcnRzLmdldENvbnRleHQgPSBnZXRDb250ZXh0O1xuZXhwb3J0cy5zZXRDb250ZXh0ID0gc2V0Q29udGV4dDtcbmV4cG9ydHMudGFrZUV2ZXJ5ID0gdGFrZUV2ZXJ5O1xuZXhwb3J0cy50YWtlTGF0ZXN0ID0gdGFrZUxhdGVzdDtcbmV4cG9ydHMudGhyb3R0bGUgPSB0aHJvdHRsZTtcblxudmFyIF91dGlscyA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfc2FnYUhlbHBlcnMgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9zYWdhSGVscGVycycpO1xuXG52YXIgSU8gPSAvKiNfX1BVUkVfXyovKDAsIF91dGlscy5zeW0pKCdJTycpO1xudmFyIFRBS0UgPSAnVEFLRSc7XG52YXIgUFVUID0gJ1BVVCc7XG52YXIgQUxMID0gJ0FMTCc7XG52YXIgUkFDRSA9ICdSQUNFJztcbnZhciBDQUxMID0gJ0NBTEwnO1xudmFyIENQUyA9ICdDUFMnO1xudmFyIEZPUksgPSAnRk9SSyc7XG52YXIgSk9JTiA9ICdKT0lOJztcbnZhciBDQU5DRUwgPSAnQ0FOQ0VMJztcbnZhciBTRUxFQ1QgPSAnU0VMRUNUJztcbnZhciBBQ1RJT05fQ0hBTk5FTCA9ICdBQ1RJT05fQ0hBTk5FTCc7XG52YXIgQ0FOQ0VMTEVEID0gJ0NBTkNFTExFRCc7XG52YXIgRkxVU0ggPSAnRkxVU0gnO1xudmFyIEdFVF9DT05URVhUID0gJ0dFVF9DT05URVhUJztcbnZhciBTRVRfQ09OVEVYVCA9ICdTRVRfQ09OVEVYVCc7XG5cbnZhciBURVNUX0hJTlQgPSAnXFxuKEhJTlQ6IGlmIHlvdSBhcmUgZ2V0dGluZyB0aGlzIGVycm9ycyBpbiB0ZXN0cywgY29uc2lkZXIgdXNpbmcgY3JlYXRlTW9ja1Rhc2sgZnJvbSByZWR1eC1zYWdhL3V0aWxzKSc7XG5cbnZhciBlZmZlY3QgPSBmdW5jdGlvbiBlZmZlY3QodHlwZSwgcGF5bG9hZCkge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW0lPXSA9IHRydWUsIF9yZWZbdHlwZV0gPSBwYXlsb2FkLCBfcmVmO1xufTtcblxudmFyIGRldGFjaCA9IGV4cG9ydHMuZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoKGVmZikge1xuICAoMCwgX3V0aWxzLmNoZWNrKShhc0VmZmVjdC5mb3JrKGVmZiksIF91dGlscy5pcy5vYmplY3QsICdkZXRhY2goZWZmKTogYXJndW1lbnQgbXVzdCBiZSBhIGZvcmsgZWZmZWN0Jyk7XG4gIGVmZltGT1JLXS5kZXRhY2hlZCA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuXG5mdW5jdGlvbiB0YWtlKCkge1xuICB2YXIgcGF0dGVybk9yQ2hhbm5lbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyonO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgKDAsIF91dGlscy5jaGVjaykoYXJndW1lbnRzWzBdLCBfdXRpbHMuaXMubm90VW5kZWYsICd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBwYXR0ZXJuT3JDaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICB9XG4gIGlmIChfdXRpbHMuaXMucGF0dGVybihwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBlZmZlY3QoVEFLRSwgeyBwYXR0ZXJuOiBwYXR0ZXJuT3JDaGFubmVsIH0pO1xuICB9XG4gIGlmIChfdXRpbHMuaXMuY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBlZmZlY3QoVEFLRSwgeyBjaGFubmVsOiBwYXR0ZXJuT3JDaGFubmVsIH0pO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcigndGFrZShwYXR0ZXJuT3JDaGFubmVsKTogYXJndW1lbnQgJyArIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKSArICcgaXMgbm90IHZhbGlkIGNoYW5uZWwgb3IgYSB2YWxpZCBwYXR0ZXJuJyk7XG59XG5cbnRha2UubWF5YmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZmYgPSB0YWtlLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgZWZmW1RBS0VdLm1heWJlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5cbnZhciB0YWtlbSA9IC8qI19fUFVSRV9fKi9leHBvcnRzLnRha2VtID0gKDAsIF91dGlscy5kZXByZWNhdGUpKHRha2UubWF5YmUsIC8qI19fUFVSRV9fKi8oMCwgX3V0aWxzLnVwZGF0ZUluY2VudGl2ZSkoJ3Rha2VtJywgJ3Rha2UubWF5YmUnKSk7XG5cbmZ1bmN0aW9uIHB1dChjaGFubmVsLCBhY3Rpb24pIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgKDAsIF91dGlscy5jaGVjaykoY2hhbm5lbCwgX3V0aWxzLmlzLm5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGNoYW5uZWwgaXMgdW5kZWZpbmVkJyk7XG4gICAgKDAsIF91dGlscy5jaGVjaykoY2hhbm5lbCwgX3V0aWxzLmlzLmNoYW5uZWwsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWwnKTtcbiAgICAoMCwgX3V0aWxzLmNoZWNrKShhY3Rpb24sIF91dGlscy5pcy5ub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gIH0gZWxzZSB7XG4gICAgKDAsIF91dGlscy5jaGVjaykoY2hhbm5lbCwgX3V0aWxzLmlzLm5vdFVuZGVmLCAncHV0KGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICBhY3Rpb24gPSBjaGFubmVsO1xuICAgIGNoYW5uZWwgPSBudWxsO1xuICB9XG4gIHJldHVybiBlZmZlY3QoUFVULCB7IGNoYW5uZWw6IGNoYW5uZWwsIGFjdGlvbjogYWN0aW9uIH0pO1xufVxuXG5wdXQucmVzb2x2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVmZiA9IHB1dC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIGVmZltQVVRdLnJlc29sdmUgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufTtcblxucHV0LnN5bmMgPSAvKiNfX1BVUkVfXyovKDAsIF91dGlscy5kZXByZWNhdGUpKHB1dC5yZXNvbHZlLCAvKiNfX1BVUkVfXyovKDAsIF91dGlscy51cGRhdGVJbmNlbnRpdmUpKCdwdXQuc3luYycsICdwdXQucmVzb2x2ZScpKTtcblxuZnVuY3Rpb24gYWxsKGVmZmVjdHMpIHtcbiAgcmV0dXJuIGVmZmVjdChBTEwsIGVmZmVjdHMpO1xufVxuXG5mdW5jdGlvbiByYWNlKGVmZmVjdHMpIHtcbiAgcmV0dXJuIGVmZmVjdChSQUNFLCBlZmZlY3RzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm5DYWxsRGVzYyhtZXRoLCBmbiwgYXJncykge1xuICAoMCwgX3V0aWxzLmNoZWNrKShmbiwgX3V0aWxzLmlzLm5vdFVuZGVmLCBtZXRoICsgJzogYXJndW1lbnQgZm4gaXMgdW5kZWZpbmVkJyk7XG5cbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICBpZiAoX3V0aWxzLmlzLmFycmF5KGZuKSkge1xuICAgIHZhciBfZm4gPSBmbjtcbiAgICBjb250ZXh0ID0gX2ZuWzBdO1xuICAgIGZuID0gX2ZuWzFdO1xuICB9IGVsc2UgaWYgKGZuLmZuKSB7XG4gICAgdmFyIF9mbjIgPSBmbjtcbiAgICBjb250ZXh0ID0gX2ZuMi5jb250ZXh0O1xuICAgIGZuID0gX2ZuMi5mbjtcbiAgfVxuICBpZiAoY29udGV4dCAmJiBfdXRpbHMuaXMuc3RyaW5nKGZuKSAmJiBfdXRpbHMuaXMuZnVuYyhjb250ZXh0W2ZuXSkpIHtcbiAgICBmbiA9IGNvbnRleHRbZm5dO1xuICB9XG4gICgwLCBfdXRpbHMuY2hlY2spKGZuLCBfdXRpbHMuaXMuZnVuYywgbWV0aCArICc6IGFyZ3VtZW50ICcgKyBmbiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblxuICByZXR1cm4geyBjb250ZXh0OiBjb250ZXh0LCBmbjogZm4sIGFyZ3M6IGFyZ3MgfTtcbn1cblxuZnVuY3Rpb24gY2FsbChmbikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzYygnY2FsbCcsIGZuLCBhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5KGNvbnRleHQsIGZuKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcblxuICByZXR1cm4gZWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2MoJ2FwcGx5JywgeyBjb250ZXh0OiBjb250ZXh0LCBmbjogZm4gfSwgYXJncykpO1xufVxuXG5mdW5jdGlvbiBjcHMoZm4pIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gZWZmZWN0KENQUywgZ2V0Rm5DYWxsRGVzYygnY3BzJywgZm4sIGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gZm9yayhmbikge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoRk9SSywgZ2V0Rm5DYWxsRGVzYygnZm9yaycsIGZuLCBhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIHNwYXduKGZuKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGRldGFjaChmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW2ZuXS5jb25jYXQoYXJncykpKTtcbn1cblxuZnVuY3Rpb24gam9pbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCB0YXNrcyA9IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgdGFza3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIGlmICh0YXNrcy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIGFsbCh0YXNrcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBqb2luKHQpO1xuICAgIH0pKTtcbiAgfVxuICB2YXIgdGFzayA9IHRhc2tzWzBdO1xuICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMubm90VW5kZWYsICdqb2luKHRhc2spOiBhcmd1bWVudCB0YXNrIGlzIHVuZGVmaW5lZCcpO1xuICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMudGFzaywgJ2pvaW4odGFzayk6IGFyZ3VtZW50ICcgKyB0YXNrICsgJyBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCAnICsgVEVTVF9ISU5UKTtcbiAgcmV0dXJuIGVmZmVjdChKT0lOLCB0YXNrKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRhc2tzID0gQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICB0YXNrc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gYWxsKHRhc2tzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGNhbmNlbCh0KTtcbiAgICB9KSk7XG4gIH1cbiAgdmFyIHRhc2sgPSB0YXNrc1swXTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKHRhc2ssIF91dGlscy5pcy5ub3RVbmRlZiwgJ2NhbmNlbCh0YXNrKTogYXJndW1lbnQgdGFzayBpcyB1bmRlZmluZWQnKTtcbiAgICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMudGFzaywgJ2NhbmNlbCh0YXNrKTogYXJndW1lbnQgJyArIHRhc2sgKyAnIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0ICcgKyBURVNUX0hJTlQpO1xuICB9XG4gIHJldHVybiBlZmZlY3QoQ0FOQ0VMLCB0YXNrIHx8IF91dGlscy5TRUxGX0NBTkNFTExBVElPTik7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNyA+IDEgPyBfbGVuNyAtIDEgOiAwKSwgX2tleTcgPSAxOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5NyAtIDFdID0gYXJndW1lbnRzW19rZXk3XTtcbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgc2VsZWN0b3IgPSBfdXRpbHMuaWRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgKDAsIF91dGlscy5jaGVjaykoc2VsZWN0b3IsIF91dGlscy5pcy5ub3RVbmRlZiwgJ3NlbGVjdChzZWxlY3RvcixbLi4uXSk6IGFyZ3VtZW50IHNlbGVjdG9yIGlzIHVuZGVmaW5lZCcpO1xuICAgICgwLCBfdXRpbHMuY2hlY2spKHNlbGVjdG9yLCBfdXRpbHMuaXMuZnVuYywgJ3NlbGVjdChzZWxlY3RvcixbLi4uXSk6IGFyZ3VtZW50ICcgKyBzZWxlY3RvciArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KFNFTEVDVCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIGFyZ3M6IGFyZ3MgfSk7XG59XG5cbi8qKlxuICBjaGFubmVsKHBhdHRlcm4sIFtidWZmZXJdKSAgICA9PiBjcmVhdGVzIGFuIGV2ZW50IGNoYW5uZWwgZm9yIHN0b3JlIGFjdGlvbnNcbioqL1xuZnVuY3Rpb24gYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpIHtcbiAgKDAsIF91dGlscy5jaGVjaykocGF0dGVybiwgX3V0aWxzLmlzLm5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLC4uLik6IGFyZ3VtZW50IHBhdHRlcm4gaXMgdW5kZWZpbmVkJyk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGJ1ZmZlciwgX3V0aWxzLmlzLm5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCBidWZmZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgKDAsIF91dGlscy5jaGVjaykoYnVmZmVyLCBfdXRpbHMuaXMuYnVmZmVyLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCAnICsgYnVmZmVyICsgJyBpcyBub3QgYSB2YWxpZCBidWZmZXInKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KEFDVElPTl9DSEFOTkVMLCB7IHBhdHRlcm46IHBhdHRlcm4sIGJ1ZmZlcjogYnVmZmVyIH0pO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxsZWQoKSB7XG4gIHJldHVybiBlZmZlY3QoQ0FOQ0VMTEVELCB7fSk7XG59XG5cbmZ1bmN0aW9uIGZsdXNoKGNoYW5uZWwpIHtcbiAgKDAsIF91dGlscy5jaGVjaykoY2hhbm5lbCwgX3V0aWxzLmlzLmNoYW5uZWwsICdmbHVzaChjaGFubmVsKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsJyk7XG4gIHJldHVybiBlZmZlY3QoRkxVU0gsIGNoYW5uZWwpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KHByb3ApIHtcbiAgKDAsIF91dGlscy5jaGVjaykocHJvcCwgX3V0aWxzLmlzLnN0cmluZywgJ2dldENvbnRleHQocHJvcCk6IGFyZ3VtZW50ICcgKyBwcm9wICsgJyBpcyBub3QgYSBzdHJpbmcnKTtcbiAgcmV0dXJuIGVmZmVjdChHRVRfQ09OVEVYVCwgcHJvcCk7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcbiAgKDAsIF91dGlscy5jaGVjaykocHJvcHMsIF91dGlscy5pcy5vYmplY3QsICgwLCBfdXRpbHMuY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcpKG51bGwsIHByb3BzKSk7XG4gIHJldHVybiBlZmZlY3QoU0VUX0NPTlRFWFQsIHByb3BzKTtcbn1cblxuZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuOCA+IDIgPyBfbGVuOCAtIDIgOiAwKSwgX2tleTggPSAyOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgYXJnc1tfa2V5OCAtIDJdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW19zYWdhSGVscGVycy50YWtlRXZlcnlIZWxwZXIsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjkgPiAyID8gX2xlbjkgLSAyIDogMCksIF9rZXk5ID0gMjsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgIGFyZ3NbX2tleTkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh1bmRlZmluZWQsIFtfc2FnYUhlbHBlcnMudGFrZUxhdGVzdEhlbHBlciwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShtcywgcGF0dGVybiwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMTAgPiAzID8gX2xlbjEwIC0gMyA6IDApLCBfa2V5MTAgPSAzOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgYXJnc1tfa2V5MTAgLSAzXSA9IGFyZ3VtZW50c1tfa2V5MTBdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbX3NhZ2FIZWxwZXJzLnRocm90dGxlSGVscGVyLCBtcywgcGF0dGVybiwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG52YXIgY3JlYXRlQXNFZmZlY3RUeXBlID0gZnVuY3Rpb24gY3JlYXRlQXNFZmZlY3RUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlZmZlY3QpIHtcbiAgICByZXR1cm4gZWZmZWN0ICYmIGVmZmVjdFtJT10gJiYgZWZmZWN0W3R5cGVdO1xuICB9O1xufTtcblxudmFyIGFzRWZmZWN0ID0gZXhwb3J0cy5hc0VmZmVjdCA9IHtcbiAgdGFrZTogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShUQUtFKSxcbiAgcHV0OiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKFBVVCksXG4gIGFsbDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShBTEwpLFxuICByYWNlOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKFJBQ0UpLFxuICBjYWxsOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKENBTEwpLFxuICBjcHM6IC8qI19fUFVSRV9fKi9jcmVhdGVBc0VmZmVjdFR5cGUoQ1BTKSxcbiAgZm9yazogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShGT1JLKSxcbiAgam9pbjogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShKT0lOKSxcbiAgY2FuY2VsOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKENBTkNFTCksXG4gIHNlbGVjdDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShTRUxFQ1QpLFxuICBhY3Rpb25DaGFubmVsOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKEFDVElPTl9DSEFOTkVMKSxcbiAgY2FuY2VsbGVkOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKENBTkNFTExFRCksXG4gIGZsdXNoOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKEZMVVNIKSxcbiAgZ2V0Q29udGV4dDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShHRVRfQ09OVEVYVCksXG4gIHNldENvbnRleHQ6IC8qI19fUFVSRV9fKi9jcmVhdGVBc0VmZmVjdFR5cGUoU0VUX0NPTlRFWFQpXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9pby5qc1xuLy8gbW9kdWxlIGlkID0gNzQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudGhyb3R0bGVIZWxwZXIgPSBleHBvcnRzLnRha2VMYXRlc3RIZWxwZXIgPSBleHBvcnRzLnRha2VFdmVyeUhlbHBlciA9IGV4cG9ydHMudGhyb3R0bGUgPSBleHBvcnRzLnRha2VMYXRlc3QgPSBleHBvcnRzLnRha2VFdmVyeSA9IHVuZGVmaW5lZDtcblxudmFyIF90YWtlRXZlcnkgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi90YWtlRXZlcnknKTtcblxudmFyIF90YWtlRXZlcnkyID0gLyojX19QVVJFX18qL19pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rha2VFdmVyeSk7XG5cbnZhciBfdGFrZUxhdGVzdCA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL3Rha2VMYXRlc3QnKTtcblxudmFyIF90YWtlTGF0ZXN0MiA9IC8qI19fUFVSRV9fKi9faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWtlTGF0ZXN0KTtcblxudmFyIF90aHJvdHRsZSA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL3Rocm90dGxlJyk7XG5cbnZhciBfdGhyb3R0bGUyID0gLyojX19QVVJFX18qL19pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rocm90dGxlKTtcblxudmFyIF91dGlscyA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gZGVwcmVjYXRpb25XYXJuaW5nKGhlbHBlck5hbWUpIHtcbiAgcmV0dXJuICdpbXBvcnQgeyAnICsgaGVscGVyTmFtZSArICcgfSBmcm9tIFxcJ3JlZHV4LXNhZ2FcXCcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBpbXBvcnQgeyAnICsgaGVscGVyTmFtZSArICcgfSBmcm9tIFxcJ3JlZHV4LXNhZ2EvZWZmZWN0c1xcJy5cXG5UaGUgbGF0dGVyIHdpbGwgbm90IHdvcmsgd2l0aCB5aWVsZCosIGFzIGhlbHBlciBlZmZlY3RzIGFyZSB3cmFwcGVkIGF1dG9tYXRpY2FsbHkgZm9yIHlvdSBpbiBmb3JrIGVmZmVjdC5cXG5UaGVyZWZvcmUgeWllbGQgJyArIGhlbHBlck5hbWUgKyAnIHdpbGwgcmV0dXJuIHRhc2sgZGVzY3JpcHRvciB0byB5b3VyIHNhZ2EgYW5kIGV4ZWN1dGUgbmV4dCBsaW5lcyBvZiBjb2RlLic7XG59O1xuXG52YXIgdGFrZUV2ZXJ5ID0gLyojX19QVVJFX18qLygwLCBfdXRpbHMuZGVwcmVjYXRlKShfdGFrZUV2ZXJ5Mi5kZWZhdWx0LCAvKiNfX1BVUkVfXyovZGVwcmVjYXRpb25XYXJuaW5nKCd0YWtlRXZlcnknKSk7XG52YXIgdGFrZUxhdGVzdCA9IC8qI19fUFVSRV9fKi8oMCwgX3V0aWxzLmRlcHJlY2F0ZSkoX3Rha2VMYXRlc3QyLmRlZmF1bHQsIC8qI19fUFVSRV9fKi9kZXByZWNhdGlvbldhcm5pbmcoJ3Rha2VMYXRlc3QnKSk7XG52YXIgdGhyb3R0bGUgPSAvKiNfX1BVUkVfXyovKDAsIF91dGlscy5kZXByZWNhdGUpKF90aHJvdHRsZTIuZGVmYXVsdCwgLyojX19QVVJFX18qL2RlcHJlY2F0aW9uV2FybmluZygndGhyb3R0bGUnKSk7XG5cbmV4cG9ydHMudGFrZUV2ZXJ5ID0gdGFrZUV2ZXJ5O1xuZXhwb3J0cy50YWtlTGF0ZXN0ID0gdGFrZUxhdGVzdDtcbmV4cG9ydHMudGhyb3R0bGUgPSB0aHJvdHRsZTtcbmV4cG9ydHMudGFrZUV2ZXJ5SGVscGVyID0gX3Rha2VFdmVyeTIuZGVmYXVsdDtcbmV4cG9ydHMudGFrZUxhdGVzdEhlbHBlciA9IF90YWtlTGF0ZXN0Mi5kZWZhdWx0O1xuZXhwb3J0cy50aHJvdHRsZUhlbHBlciA9IF90aHJvdHRsZTIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvc2FnYUhlbHBlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0YWtlRXZlcnk7XG5cbnZhciBfZnNtSXRlcmF0b3IgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9mc21JdGVyYXRvcicpO1xuXG52YXIgX2ZzbUl0ZXJhdG9yMiA9IC8qI19fUFVSRV9fKi9faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mc21JdGVyYXRvcik7XG5cbnZhciBfaW8gPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi4vaW8nKTtcblxudmFyIF9jaGFubmVsID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4uL2NoYW5uZWwnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiAoMCwgX2lvLnRha2UpKHBhdHRlcm5PckNoYW5uZWwpIH07XG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBfaW8uZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX2ZzbUl0ZXJhdG9yMi5kZWZhdWx0KSh7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5VGFrZSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IF9jaGFubmVsLkVORCA/IFtfZnNtSXRlcmF0b3IucUVuZF0gOiBbJ3ExJywgeUZvcmsoYWN0aW9uKV07XG4gICAgfVxuICB9LCAncTEnLCAndGFrZUV2ZXJ5KCcgKyAoMCwgX2ZzbUl0ZXJhdG9yLnNhZmVOYW1lKShwYXR0ZXJuT3JDaGFubmVsKSArICcsICcgKyB3b3JrZXIubmFtZSArICcpJyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VFdmVyeS5qc1xuLy8gbW9kdWxlIGlkID0gNzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucUVuZCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuc2FmZU5hbWUgPSBzYWZlTmFtZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZzbUl0ZXJhdG9yO1xuXG52YXIgX3V0aWxzID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBkb25lID0geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG52YXIgcUVuZCA9IGV4cG9ydHMucUVuZCA9IHt9O1xuXG5mdW5jdGlvbiBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSB7XG4gIGlmIChfdXRpbHMuaXMuY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiAnY2hhbm5lbCc7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbC5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGVudHJ5KTtcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmc21JdGVyYXRvcihmc20sIHEwKSB7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnaXRlcmF0b3InO1xuXG4gIHZhciB1cGRhdGVTdGF0ZSA9IHZvaWQgMCxcbiAgICAgIHFOZXh0ID0gcTA7XG5cbiAgZnVuY3Rpb24gbmV4dChhcmcsIGVycm9yKSB7XG4gICAgaWYgKHFOZXh0ID09PSBxRW5kKSB7XG4gICAgICByZXR1cm4gZG9uZTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHFOZXh0ID0gcUVuZDtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVTdGF0ZSAmJiB1cGRhdGVTdGF0ZShhcmcpO1xuXG4gICAgICB2YXIgX2ZzbSRxTmV4dCA9IGZzbVtxTmV4dF0oKSxcbiAgICAgICAgICBxID0gX2ZzbSRxTmV4dFswXSxcbiAgICAgICAgICBvdXRwdXQgPSBfZnNtJHFOZXh0WzFdLFxuICAgICAgICAgIF91cGRhdGVTdGF0ZSA9IF9mc20kcU5leHRbMl07XG5cbiAgICAgIHFOZXh0ID0gcTtcbiAgICAgIHVwZGF0ZVN0YXRlID0gX3VwZGF0ZVN0YXRlO1xuICAgICAgcmV0dXJuIHFOZXh0ID09PSBxRW5kID8gZG9uZSA6IG91dHB1dDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKDAsIF91dGlscy5tYWtlSXRlcmF0b3IpKG5leHQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KG51bGwsIGVycm9yKTtcbiAgfSwgbmFtZSwgdHJ1ZSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL2ZzbUl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5VTkRFRklORURfSU5QVVRfRVJST1IgPSBleHBvcnRzLklOVkFMSURfQlVGRkVSID0gZXhwb3J0cy5pc0VuZCA9IGV4cG9ydHMuRU5EID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmVtaXR0ZXIgPSBlbWl0dGVyO1xuZXhwb3J0cy5jaGFubmVsID0gY2hhbm5lbDtcbmV4cG9ydHMuZXZlbnRDaGFubmVsID0gZXZlbnRDaGFubmVsO1xuZXhwb3J0cy5zdGRDaGFubmVsID0gc3RkQ2hhbm5lbDtcblxudmFyIF91dGlscyA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfYnVmZmVycyA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL2J1ZmZlcnMnKTtcblxudmFyIF9zY2hlZHVsZXIgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9zY2hlZHVsZXInKTtcblxudmFyIENIQU5ORUxfRU5EX1RZUEUgPSAnQEByZWR1eC1zYWdhL0NIQU5ORUxfRU5EJztcbnZhciBFTkQgPSBleHBvcnRzLkVORCA9IHsgdHlwZTogQ0hBTk5FTF9FTkRfVFlQRSB9O1xudmFyIGlzRW5kID0gZXhwb3J0cy5pc0VuZCA9IGZ1bmN0aW9uIGlzRW5kKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS50eXBlID09PSBDSEFOTkVMX0VORF9UWVBFO1xufTtcblxuZnVuY3Rpb24gZW1pdHRlcigpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gW107XG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKHN1Yikge1xuICAgIHN1YnNjcmliZXJzLnB1c2goc3ViKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICgwLCBfdXRpbHMucmVtb3ZlKShzdWJzY3JpYmVycywgc3ViKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChpdGVtKSB7XG4gICAgdmFyIGFyciA9IHN1YnNjcmliZXJzLnNsaWNlKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJyW2ldKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZW1pdDogZW1pdFxuICB9O1xufVxuXG52YXIgSU5WQUxJRF9CVUZGRVIgPSBleHBvcnRzLklOVkFMSURfQlVGRkVSID0gJ2ludmFsaWQgYnVmZmVyIHBhc3NlZCB0byBjaGFubmVsIGZhY3RvcnkgZnVuY3Rpb24nO1xudmFyIFVOREVGSU5FRF9JTlBVVF9FUlJPUiA9IGV4cG9ydHMuVU5ERUZJTkVEX0lOUFVUX0VSUk9SID0gJ1NhZ2Egd2FzIHByb3ZpZGVkIHdpdGggYW4gdW5kZWZpbmVkIGFjdGlvbic7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGV4cG9ydHMuVU5ERUZJTkVEX0lOUFVUX0VSUk9SID0gVU5ERUZJTkVEX0lOUFVUX0VSUk9SICs9ICdcXG5IaW50czpcXG4gICAgLSBjaGVjayB0aGF0IHlvdXIgQWN0aW9uIENyZWF0b3IgcmV0dXJucyBhIG5vbi11bmRlZmluZWQgdmFsdWVcXG4gICAgLSBpZiB0aGUgU2FnYSB3YXMgc3RhcnRlZCB1c2luZyBydW5TYWdhLCBjaGVjayB0aGF0IHlvdXIgc3Vic2NyaWJlIHNvdXJjZSBwcm92aWRlcyB0aGUgYWN0aW9uIHRvIGl0cyBsaXN0ZW5lcnNcXG4gICc7XG59XG5cbmZ1bmN0aW9uIGNoYW5uZWwoKSB7XG4gIHZhciBidWZmZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IF9idWZmZXJzLmJ1ZmZlcnMuZml4ZWQoKTtcblxuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHZhciB0YWtlcnMgPSBbXTtcblxuICAoMCwgX3V0aWxzLmNoZWNrKShidWZmZXIsIF91dGlscy5pcy5idWZmZXIsIElOVkFMSURfQlVGRkVSKTtcblxuICBmdW5jdGlvbiBjaGVja0ZvcmJpZGRlblN0YXRlcygpIHtcbiAgICBpZiAoY2xvc2VkICYmIHRha2Vycy5sZW5ndGgpIHtcbiAgICAgIHRocm93ICgwLCBfdXRpbHMuaW50ZXJuYWxFcnIpKCdDYW5ub3QgaGF2ZSBhIGNsb3NlZCBjaGFubmVsIHdpdGggcGVuZGluZyB0YWtlcnMnKTtcbiAgICB9XG4gICAgaWYgKHRha2Vycy5sZW5ndGggJiYgIWJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIHRocm93ICgwLCBfdXRpbHMuaW50ZXJuYWxFcnIpKCdDYW5ub3QgaGF2ZSBwZW5kaW5nIHRha2VycyB3aXRoIG5vbiBlbXB0eSBidWZmZXInKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwdXQoaW5wdXQpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGlucHV0LCBfdXRpbHMuaXMubm90VW5kZWYsIFVOREVGSU5FRF9JTlBVVF9FUlJPUik7XG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRha2Vycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBidWZmZXIucHV0KGlucHV0KTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjYiA9IHRha2Vyc1tpXTtcbiAgICAgIGlmICghY2JbX3V0aWxzLk1BVENIXSB8fCBjYltfdXRpbHMuTUFUQ0hdKGlucHV0KSkge1xuICAgICAgICB0YWtlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gY2IoaW5wdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRha2UoY2IpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGNiLCBfdXRpbHMuaXMuZnVuYywgXCJjaGFubmVsLnRha2UncyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG5cbiAgICBpZiAoY2xvc2VkICYmIGJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgfSBlbHNlIGlmICghYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgY2IoYnVmZmVyLnRha2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRha2Vycy5wdXNoKGNiKTtcbiAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMucmVtb3ZlKSh0YWtlcnMsIGNiKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goY2IpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpOyAvLyBUT0RPOiBjaGVjayBpZiBzb21lIG5ldyBzdGF0ZSBzaG91bGQgYmUgZm9yYmlkZGVuIG5vd1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGNiLCBfdXRpbHMuaXMuZnVuYywgXCJjaGFubmVsLmZsdXNoJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYihidWZmZXIuZmx1c2goKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgIGlmICghY2xvc2VkKSB7XG4gICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgaWYgKHRha2Vycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGFyciA9IHRha2VycztcbiAgICAgICAgdGFrZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBhcnJbaV0oRU5EKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFrZTogdGFrZSxcbiAgICBwdXQ6IHB1dCxcbiAgICBmbHVzaDogZmx1c2gsXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIGdldCBfX3Rha2Vyc19fKCkge1xuICAgICAgcmV0dXJuIHRha2VycztcbiAgICB9LFxuICAgIGdldCBfX2Nsb3NlZF9fKCkge1xuICAgICAgcmV0dXJuIGNsb3NlZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV2ZW50Q2hhbm5lbChzdWJzY3JpYmUpIHtcbiAgdmFyIGJ1ZmZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX2J1ZmZlcnMuYnVmZmVycy5ub25lKCk7XG4gIHZhciBtYXRjaGVyID0gYXJndW1lbnRzWzJdO1xuXG4gIC8qKlxuICAgIHNob3VsZCBiZSBpZih0eXBlb2YgbWF0Y2hlciAhPT0gdW5kZWZpbmVkKSBpbnN0ZWFkP1xuICAgIHNlZSBQUiAjMjczIGZvciBhIGJhY2tncm91bmQgZGlzY3Vzc2lvblxuICAqKi9cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgKDAsIF91dGlscy5jaGVjaykobWF0Y2hlciwgX3V0aWxzLmlzLmZ1bmMsICdJbnZhbGlkIG1hdGNoIGZ1bmN0aW9uIHBhc3NlZCB0byBldmVudENoYW5uZWwnKTtcbiAgfVxuXG4gIHZhciBjaGFuID0gY2hhbm5lbChidWZmZXIpO1xuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoIWNoYW4uX19jbG9zZWRfXykge1xuICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBjaGFuLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlzRW5kKGlucHV0KSkge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1hdGNoZXIgJiYgIW1hdGNoZXIoaW5wdXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW4ucHV0KGlucHV0KTtcbiAgfSk7XG4gIGlmIChjaGFuLl9fY2xvc2VkX18pIHtcbiAgICB1bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaWYgKCFfdXRpbHMuaXMuZnVuYyh1bnN1YnNjcmliZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luIGV2ZW50Q2hhbm5lbDogc3Vic2NyaWJlIHNob3VsZCByZXR1cm4gYSBmdW5jdGlvbiB0byB1bnN1YnNjcmliZScpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YWtlOiBjaGFuLnRha2UsXG4gICAgZmx1c2g6IGNoYW4uZmx1c2gsXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0ZENoYW5uZWwoc3Vic2NyaWJlKSB7XG4gIHZhciBjaGFuID0gZXZlbnRDaGFubmVsKGZ1bmN0aW9uIChjYikge1xuICAgIHJldHVybiBzdWJzY3JpYmUoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXRbX3V0aWxzLlNBR0FfQUNUSU9OXSkge1xuICAgICAgICBjYihpbnB1dCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICgwLCBfc2NoZWR1bGVyLmFzYXApKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiKGlucHV0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGNoYW4sIHtcbiAgICB0YWtlOiBmdW5jdGlvbiB0YWtlKGNiLCBtYXRjaGVyKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgKDAsIF91dGlscy5jaGVjaykobWF0Y2hlciwgX3V0aWxzLmlzLmZ1bmMsIFwiY2hhbm5lbC50YWtlJ3MgbWF0Y2hlciBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIGNiW191dGlscy5NQVRDSF0gPSBtYXRjaGVyO1xuICAgICAgfVxuICAgICAgY2hhbi50YWtlKGNiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9jaGFubmVsLmpzXG4vLyBtb2R1bGUgaWQgPSA3NDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmJ1ZmZlcnMgPSBleHBvcnRzLkJVRkZFUl9PVkVSRkxPVyA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIEJVRkZFUl9PVkVSRkxPVyA9IGV4cG9ydHMuQlVGRkVSX09WRVJGTE9XID0gXCJDaGFubmVsJ3MgQnVmZmVyIG92ZXJmbG93IVwiO1xuXG52YXIgT05fT1ZFUkZMT1dfVEhST1cgPSAxO1xudmFyIE9OX09WRVJGTE9XX0RST1AgPSAyO1xudmFyIE9OX09WRVJGTE9XX1NMSURFID0gMztcbnZhciBPTl9PVkVSRkxPV19FWFBBTkQgPSA0O1xuXG52YXIgemVyb0J1ZmZlciA9IHsgaXNFbXB0eTogX3V0aWxzLmtUcnVlLCBwdXQ6IF91dGlscy5ub29wLCB0YWtlOiBfdXRpbHMubm9vcCB9O1xuXG5mdW5jdGlvbiByaW5nQnVmZmVyKCkge1xuICB2YXIgbGltaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDEwO1xuICB2YXIgb3ZlcmZsb3dBY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgdmFyIGFyciA9IG5ldyBBcnJheShsaW1pdCk7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgcHVzaEluZGV4ID0gMDtcbiAgdmFyIHBvcEluZGV4ID0gMDtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2goaXQpIHtcbiAgICBhcnJbcHVzaEluZGV4XSA9IGl0O1xuICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgIGxlbmd0aCsrO1xuICB9O1xuXG4gIHZhciB0YWtlID0gZnVuY3Rpb24gdGFrZSgpIHtcbiAgICBpZiAobGVuZ3RoICE9IDApIHtcbiAgICAgIHZhciBpdCA9IGFycltwb3BJbmRleF07XG4gICAgICBhcnJbcG9wSW5kZXhdID0gbnVsbDtcbiAgICAgIGxlbmd0aC0tO1xuICAgICAgcG9wSW5kZXggPSAocG9wSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgcmV0dXJuIGl0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICBpdGVtcy5wdXNoKHRha2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoID09IDA7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChpdCkge1xuICAgICAgaWYgKGxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHB1c2goaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRvdWJsZWRMaW1pdCA9IHZvaWQgMDtcbiAgICAgICAgc3dpdGNoIChvdmVyZmxvd0FjdGlvbikge1xuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfVEhST1c6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoQlVGRkVSX09WRVJGTE9XKTtcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1NMSURFOlxuICAgICAgICAgICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgICAgICAgcG9wSW5kZXggPSBwdXNoSW5kZXg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX0VYUEFORDpcbiAgICAgICAgICAgIGRvdWJsZWRMaW1pdCA9IDIgKiBsaW1pdDtcblxuICAgICAgICAgICAgYXJyID0gZmx1c2goKTtcblxuICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwb3BJbmRleCA9IDA7XG5cbiAgICAgICAgICAgIGFyci5sZW5ndGggPSBkb3VibGVkTGltaXQ7XG4gICAgICAgICAgICBsaW1pdCA9IGRvdWJsZWRMaW1pdDtcblxuICAgICAgICAgICAgcHVzaChpdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIERST1BcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFrZTogdGFrZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn1cblxudmFyIGJ1ZmZlcnMgPSBleHBvcnRzLmJ1ZmZlcnMgPSB7XG4gIG5vbmU6IGZ1bmN0aW9uIG5vbmUoKSB7XG4gICAgcmV0dXJuIHplcm9CdWZmZXI7XG4gIH0sXG4gIGZpeGVkOiBmdW5jdGlvbiBmaXhlZChsaW1pdCkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19USFJPVyk7XG4gIH0sXG4gIGRyb3BwaW5nOiBmdW5jdGlvbiBkcm9wcGluZyhsaW1pdCkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19EUk9QKTtcbiAgfSxcbiAgc2xpZGluZzogZnVuY3Rpb24gc2xpZGluZyhsaW1pdCkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19TTElERSk7XG4gIH0sXG4gIGV4cGFuZGluZzogZnVuY3Rpb24gZXhwYW5kaW5nKGluaXRpYWxTaXplKSB7XG4gICAgcmV0dXJuIHJpbmdCdWZmZXIoaW5pdGlhbFNpemUsIE9OX09WRVJGTE9XX0VYUEFORCk7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL2J1ZmZlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDc0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0YWtlTGF0ZXN0O1xuXG52YXIgX2ZzbUl0ZXJhdG9yID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vZnNtSXRlcmF0b3InKTtcblxudmFyIF9mc21JdGVyYXRvcjIgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnNtSXRlcmF0b3IpO1xuXG52YXIgX2lvID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4uL2lvJyk7XG5cbnZhciBfY2hhbm5lbCA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuLi9jaGFubmVsJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRha2VMYXRlc3QocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0geyBkb25lOiBmYWxzZSwgdmFsdWU6ICgwLCBfaW8udGFrZSkocGF0dGVybk9yQ2hhbm5lbCkgfTtcbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IF9pby5mb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKSB9O1xuICB9O1xuICB2YXIgeUNhbmNlbCA9IGZ1bmN0aW9uIHlDYW5jZWwodGFzaykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby5jYW5jZWwpKHRhc2spIH07XG4gIH07XG5cbiAgdmFyIHRhc2sgPSB2b2lkIDAsXG4gICAgICBhY3Rpb24gPSB2b2lkIDA7XG4gIHZhciBzZXRUYXNrID0gZnVuY3Rpb24gc2V0VGFzayh0KSB7XG4gICAgcmV0dXJuIHRhc2sgPSB0O1xuICB9O1xuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX2ZzbUl0ZXJhdG9yMi5kZWZhdWx0KSh7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5VGFrZSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IF9jaGFubmVsLkVORCA/IFtfZnNtSXRlcmF0b3IucUVuZF0gOiB0YXNrID8gWydxMycsIHlDYW5jZWwodGFzayldIDogWydxMScsIHlGb3JrKGFjdGlvbiksIHNldFRhc2tdO1xuICAgIH0sXG4gICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuICAgICAgcmV0dXJuIFsncTEnLCB5Rm9yayhhY3Rpb24pLCBzZXRUYXNrXTtcbiAgICB9XG4gIH0sICdxMScsICd0YWtlTGF0ZXN0KCcgKyAoMCwgX2ZzbUl0ZXJhdG9yLnNhZmVOYW1lKShwYXR0ZXJuT3JDaGFubmVsKSArICcsICcgKyB3b3JrZXIubmFtZSArICcpJyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VMYXRlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDc0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0aHJvdHRsZTtcblxudmFyIF9mc21JdGVyYXRvciA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL2ZzbUl0ZXJhdG9yJyk7XG5cbnZhciBfZnNtSXRlcmF0b3IyID0gLyojX19QVVJFX18qL19pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZzbUl0ZXJhdG9yKTtcblxudmFyIF9pbyA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuLi9pbycpO1xuXG52YXIgX2NoYW5uZWwgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi4vY2hhbm5lbCcpO1xuXG52YXIgX2J1ZmZlcnMgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi4vYnVmZmVycycpO1xuXG52YXIgX3V0aWxzID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgY2hhbm5lbCA9IHZvaWQgMDtcblxuICB2YXIgeUFjdGlvbkNoYW5uZWwgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby5hY3Rpb25DaGFubmVsKShwYXR0ZXJuLCBfYnVmZmVycy5idWZmZXJzLnNsaWRpbmcoMSkpIH07XG4gIHZhciB5VGFrZSA9IGZ1bmN0aW9uIHlUYWtlKCkge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby50YWtlKShjaGFubmVsKSB9O1xuICB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogX2lvLmZvcmsuYXBwbHkodW5kZWZpbmVkLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpIH07XG4gIH07XG4gIHZhciB5RGVsYXkgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby5jYWxsKShfdXRpbHMuZGVsYXksIGRlbGF5TGVuZ3RoKSB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG4gIHZhciBzZXRDaGFubmVsID0gZnVuY3Rpb24gc2V0Q2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaGFubmVsID0gY2g7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfZnNtSXRlcmF0b3IyLmRlZmF1bHQpKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlBY3Rpb25DaGFubmVsLCBzZXRDaGFubmVsXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBbJ3EzJywgeVRha2UoKSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IF9jaGFubmVsLkVORCA/IFtfZnNtSXRlcmF0b3IucUVuZF0gOiBbJ3E0JywgeUZvcmsoYWN0aW9uKV07XG4gICAgfSxcbiAgICBxNDogZnVuY3Rpb24gcTQoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlEZWxheV07XG4gICAgfVxuICB9LCAncTEnLCAndGhyb3R0bGUoJyArICgwLCBfZnNtSXRlcmF0b3Iuc2FmZU5hbWUpKHBhdHRlcm4pICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGhyb3R0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzYWdhTWlkZGxld2FyZUZhY3Rvcnk7XG5cbnZhciBfdXRpbHMgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX2NoYW5uZWwgPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9jaGFubmVsJyk7XG5cbnZhciBfcnVuU2FnYSA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL3J1blNhZ2EnKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBzYWdhTWlkZGxld2FyZUZhY3RvcnkoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgX3JlZiRjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY29udGV4dCA9IF9yZWYkY29udGV4dCA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmJGNvbnRleHQsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY29udGV4dCddKTtcblxuICB2YXIgc2FnYU1vbml0b3IgPSBvcHRpb25zLnNhZ2FNb25pdG9yLFxuICAgICAgbG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIsXG4gICAgICBvbkVycm9yID0gb3B0aW9ucy5vbkVycm9yO1xuXG5cbiAgaWYgKF91dGlscy5pcy5mdW5jKG9wdGlvbnMpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2FnYSBtaWRkbGV3YXJlIG5vIGxvbmdlciBhY2NlcHQgR2VuZXJhdG9yIGZ1bmN0aW9ucy4gVXNlIHNhZ2FNaWRkbGV3YXJlLnJ1biBpbnN0ZWFkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IHBhc3NlZCBhIGZ1bmN0aW9uIHRvIHRoZSBTYWdhIG1pZGRsZXdhcmUuIFlvdSBhcmUgbGlrZWx5IHRyeWluZyB0byBzdGFydCBhICAgICAgICBTYWdhIGJ5IGRpcmVjdGx5IHBhc3NpbmcgaXQgdG8gdGhlIG1pZGRsZXdhcmUuIFRoaXMgaXMgbm8gbG9uZ2VyIHBvc3NpYmxlIHN0YXJ0aW5nIGZyb20gMC4xMC4wLiAgICAgICAgVG8gcnVuIGEgU2FnYSwgeW91IG11c3QgZG8gaXQgZHluYW1pY2FsbHkgQUZURVIgbW91bnRpbmcgdGhlIG1pZGRsZXdhcmUgaW50byB0aGUgc3RvcmUuXFxuICAgICAgICBFeGFtcGxlOlxcbiAgICAgICAgICBpbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcXCdyZWR1eC1zYWdhXFwnXFxuICAgICAgICAgIC4uLiBvdGhlciBpbXBvcnRzXFxuXFxuICAgICAgICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxcbiAgICAgICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpXFxuICAgICAgICAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihzYWdhLCAuLi5hcmdzKVxcbiAgICAgICcpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsb2dnZXIgJiYgIV91dGlscy5pcy5mdW5jKGxvZ2dlcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BvcHRpb25zLmxvZ2dlcmAgcGFzc2VkIHRvIHRoZSBTYWdhIG1pZGRsZXdhcmUgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgb3B0aW9ucy5vbmVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgb3B0aW9ucy5vbmVycm9yYCB3YXMgcmVtb3ZlZC4gVXNlIGBvcHRpb25zLm9uRXJyb3JgIGluc3RlYWQuJyk7XG4gIH1cblxuICBpZiAob25FcnJvciAmJiAhX3V0aWxzLmlzLmZ1bmMob25FcnJvcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BvcHRpb25zLm9uRXJyb3JgIHBhc3NlZCB0byB0aGUgU2FnYSBtaWRkbGV3YXJlIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZW1pdHRlciAmJiAhX3V0aWxzLmlzLmZ1bmMob3B0aW9ucy5lbWl0dGVyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYG9wdGlvbnMuZW1pdHRlcmAgcGFzc2VkIHRvIHRoZSBTYWdhIG1pZGRsZXdhcmUgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzYWdhTWlkZGxld2FyZShfcmVmMikge1xuICAgIHZhciBnZXRTdGF0ZSA9IF9yZWYyLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaCA9IF9yZWYyLmRpc3BhdGNoO1xuXG4gICAgdmFyIHNhZ2FFbWl0dGVyID0gKDAsIF9jaGFubmVsLmVtaXR0ZXIpKCk7XG4gICAgc2FnYUVtaXR0ZXIuZW1pdCA9IChvcHRpb25zLmVtaXR0ZXIgfHwgX3V0aWxzLmlkZW50KShzYWdhRW1pdHRlci5lbWl0KTtcblxuICAgIHNhZ2FNaWRkbGV3YXJlLnJ1biA9IF9ydW5TYWdhLnJ1blNhZ2EuYmluZChudWxsLCB7XG4gICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgc3Vic2NyaWJlOiBzYWdhRW1pdHRlci5zdWJzY3JpYmUsXG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgICBzYWdhTW9uaXRvcjogc2FnYU1vbml0b3IsXG4gICAgICBsb2dnZXI6IGxvZ2dlcixcbiAgICAgIG9uRXJyb3I6IG9uRXJyb3JcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHNhZ2FNb25pdG9yICYmIHNhZ2FNb25pdG9yLmFjdGlvbkRpc3BhdGNoZWQpIHtcbiAgICAgICAgICBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTsgLy8gaGl0IHJlZHVjZXJzXG4gICAgICAgIHNhZ2FFbWl0dGVyLmVtaXQoYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlZm9yZSBydW5uaW5nIGEgU2FnYSwgeW91IG11c3QgbW91bnQgdGhlIFNhZ2EgbWlkZGxld2FyZSBvbiB0aGUgU3RvcmUgdXNpbmcgYXBwbHlNaWRkbGV3YXJlJyk7XG4gIH07XG5cbiAgc2FnYU1pZGRsZXdhcmUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKHByb3BzLCBfdXRpbHMuaXMub2JqZWN0LCAoMCwgX3V0aWxzLmNyZWF0ZVNldENvbnRleHRXYXJuaW5nKSgnc2FnYU1pZGRsZXdhcmUnLCBwcm9wcykpO1xuICAgIF91dGlscy5vYmplY3QuYXNzaWduKGNvbnRleHQsIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gc2FnYU1pZGRsZXdhcmU7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL21pZGRsZXdhcmUuanNcbi8vIG1vZHVsZSBpZCA9IDc1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaW8gPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9pbnRlcm5hbC9pbycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Rha2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8udGFrZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Rha2VtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLnRha2VtO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncHV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLnB1dDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2FsbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5hbGw7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyYWNlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLnJhY2U7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYWxsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmNhbGw7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdhcHBseScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5hcHBseTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NwcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5jcHM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmb3JrJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmZvcms7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzcGF3bicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5zcGF3bjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pvaW4nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8uam9pbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5jYW5jZWw7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZWxlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8uc2VsZWN0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYWN0aW9uQ2hhbm5lbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5hY3Rpb25DaGFubmVsO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsbGVkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmNhbmNlbGxlZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZsdXNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmZsdXNoO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5nZXRDb250ZXh0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2V0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5zZXRDb250ZXh0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGFrZUV2ZXJ5Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLnRha2VFdmVyeTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Rha2VMYXRlc3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8udGFrZUxhdGVzdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Rocm90dGxlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLnRocm90dGxlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtc2FnYS9saWIvZWZmZWN0cy5qc1xuLy8gbW9kdWxlIGlkID0gNzUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL2ludGVybmFsL3V0aWxzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnVEFTSycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91dGlscy5UQVNLO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU0FHQV9BQ1RJT04nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdXRpbHMuU0FHQV9BQ1RJT047XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdub29wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3V0aWxzLm5vb3A7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91dGlscy5pcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2RlZmVycmVkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3V0aWxzLmRlZmVycmVkO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYXJyYXlPZkRlZmZlcmVkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3V0aWxzLmFycmF5T2ZEZWZmZXJlZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1vY2tUYXNrJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3V0aWxzLmNyZWF0ZU1vY2tUYXNrO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2xvbmVhYmxlR2VuZXJhdG9yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3V0aWxzLmNsb25lYWJsZUdlbmVyYXRvcjtcbiAgfVxufSk7XG5cbnZhciBfaW8gPSAvKiNfX1BVUkVfXyovcmVxdWlyZSgnLi9pbnRlcm5hbC9pbycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2FzRWZmZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmFzRWZmZWN0O1xuICB9XG59KTtcblxudmFyIF9wcm9jID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vaW50ZXJuYWwvcHJvYycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NIQU5ORUxfRU5EJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Byb2MuQ0hBTk5FTF9FTkQ7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1zYWdhL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNzUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY29tcG9zZSA9IHJlcXVpcmUoJ3JlZHV4JykuY29tcG9zZTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29tcG9zZVdpdGhEZXZUb29scyA9IChcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6XG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2U7XG4gICAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbik7XG5cbmV4cG9ydHMuZGV2VG9vbHNFbmhhbmNlciA9IChcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIDpcbiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKG5vb3ApIHsgcmV0dXJuIG5vb3A7IH0gfVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1kZXZ0b29scy1leHRlbnNpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuICAgIEFrdm8gUlNSIGlzIGNvdmVyZWQgYnkgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZS5cbiAgICBTZWUgbW9yZSBkZXRhaWxzIGluIHRoZSBsaWNlbnNlLnR4dCBmaWxlIGxvY2F0ZWQgYXQgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZVxuICAgIEFrdm8gUlNSIG1vZHVsZS4gRm9yIGFkZGl0aW9uYWwgZGV0YWlscyBvbiB0aGUgR05VIGxpY2Vuc2UgcGxlYXNlIHNlZVxuICAgIDwgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbCA+LlxuICovXG5cbmltcG9ydCAqIGFzIGMgZnJvbSBcIi4vY29uc3RcIjtcbmltcG9ydCBwdWxsIGZyb20gXCJsb2Rhc2gvcHVsbFwiO1xuaW1wb3J0IHsgaW5BcnJheSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbi8vIGluaXRpYWwgc3RhdGVcbmxldCBpbml0aWFsU3RhdGUgPSB7XG4gICAgc2VsZWN0QWxsOiB0cnVlLFxuICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICB1c2VySWQ6IG51bGwsXG4gICAgaXNfcmVzdHJpY3RlZDogZmFsc2UsXG4gICAgYWxsX3Byb2plY3RzOiBbXSxcbiAgICB1c2VyX3Byb2plY3RzOiBbXSxcbiAgICBvcmlnaW5hbF9pc19yZXN0cmljdGVkOiBudWxsLFxuICAgIG9yaWdpbmFsX3Byb2plY3RzOiBudWxsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGMuU0VUX1NUT1JFOiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uZGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBjLkFQSV9HRVRfSU5JVDoge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZldGNoaW5nOiB0cnVlLCBlcnJvcjogbnVsbCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBjLkFQSV9HRVRfU1VDQ0VTUzoge1xuICAgICAgICAgICAgY29uc3QgeyBhbGxfcHJvamVjdHMsIHVzZXJfcHJvamVjdHMgfSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBmZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxsX3Byb2plY3RzLFxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlJ3JlIFwidW53cmFwcGluZ1wiIHRoZSBVc2VyUHJvamVjdHMgZGF0YVxuICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHM6ICh1c2VyX3Byb2plY3RzICYmIHVzZXJfcHJvamVjdHMucHJvamVjdHMpIHx8IFtdLFxuICAgICAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQ6ICh1c2VyX3Byb2plY3RzICYmIHVzZXJfcHJvamVjdHMuaXNfcmVzdHJpY3RlZCkgfHwgZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIGMuQVBJX0dFVF9GQUlMVVJFOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGxfcHJvamVjdHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHM6IFtdLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIGMuQVBJX1BVVF9JTklUOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBjLkFQSV9QVVRfU1VDQ0VTUzoge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VyX3Byb2plY3RzIH0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlJ3JlIFwidW53cmFwcGluZ1wiIHRoZSBsaXN0IG9mIHByb2plY3RzIGhlcmUsIHRvIHNpbXBsaWZ5IHRoZSBzdG9yZVxuICAgICAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQ6IHVzZXJfcHJvamVjdHMuaXNfcmVzdHJpY3RlZCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbF9pc19yZXN0cmljdGVkOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXJfcHJvamVjdHM6IHVzZXJfcHJvamVjdHMucHJvamVjdHMsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfcHJvamVjdHM6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIGMuQVBJX1BVVF9GQUlMVVJFOiB7XG4gICAgICAgICAgICBjb25zdCBuZXdfc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX2lzX3Jlc3RyaWN0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfcHJvamVjdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIE92ZXJ3cml0ZSBpZiB3ZSBoYXZlIGFuIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgICAgICBpZiAoc3RhdGUub3JpZ2luYWxfaXNfcmVzdHJpY3RlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld19zdGF0ZS5pc19yZXN0cmljdGVkID0gc3RhdGUub3JpZ2luYWxfaXNfcmVzdHJpY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5vcmlnaW5hbF9wcm9qZWN0cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld19zdGF0ZS51c2VyX3Byb2plY3RzID0gc3RhdGUub3JpZ2luYWxfcHJvamVjdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3X3N0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBjLlVQREFURV9QUk9KRUNUX1NFTEVDVElPTjoge1xuICAgICAgICAgICAgY29uc3QgeyBwcm9qZWN0SWQgfSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxfcHJvamVjdHMgPSBzdGF0ZS51c2VyX3Byb2plY3RzICYmIFsuLi5zdGF0ZS51c2VyX3Byb2plY3RzXTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJfcHJvamVjdHMgPSBzdGF0ZS51c2VyX3Byb2plY3RzICYmIFsuLi5zdGF0ZS51c2VyX3Byb2plY3RzXTtcblxuICAgICAgICAgICAgaW5BcnJheShwcm9qZWN0SWQsIHVzZXJfcHJvamVjdHMpXG4gICAgICAgICAgICAgICAgPyBwdWxsKHVzZXJfcHJvamVjdHMsIHByb2plY3RJZClcbiAgICAgICAgICAgICAgICA6IHVzZXJfcHJvamVjdHMucHVzaChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG9yaWdpbmFsX3Byb2plY3RzLCB1c2VyX3Byb2plY3RzIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIGMuVVBEQVRFX0lTX1JFU1RSSUNURUQ6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaXNfcmVzdHJpY3RlZCB9ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNfcmVzdHJpY3RlZCwgb3JpZ2luYWxfaXNfcmVzdHJpY3RlZDogc3RhdGUuaXNfcmVzdHJpY3RlZCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBjLlVQREFURV9TRUxFQ1RfQUxMX1BST0pFQ1RTOiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbF9wcm9qZWN0cyA9IHN0YXRlLnVzZXJfcHJvamVjdHMgJiYgWy4uLnN0YXRlLnVzZXJfcHJvamVjdHNdO1xuICAgICAgICAgICAgbGV0IHVzZXJfcHJvamVjdHMsXG4gICAgICAgICAgICAgICAgeyBzZWxlY3RBbGwgfSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RBbGwpIHtcbiAgICAgICAgICAgICAgICB1c2VyX3Byb2plY3RzID0gc3RhdGUuYWxsX3Byb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QuaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1c2VyX3Byb2plY3RzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RBbGwgPSAhc2VsZWN0QWxsO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlbGVjdEFsbCwgb3JpZ2luYWxfcHJvamVjdHMsIHVzZXJfcHJvamVjdHMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMtc3JjL3VzZXItcHJvamVjdHMtYWNjZXNzL3JlZHVjZXIuanMiLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIHB1bGxBbGwgPSByZXF1aXJlKCcuL3B1bGxBbGwnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBnaXZlbiB2YWx1ZXMgZnJvbSBgYXJyYXlgIHVzaW5nXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqICoqTm90ZToqKiBVbmxpa2UgYF8ud2l0aG91dGAsIHRoaXMgbWV0aG9kIG11dGF0ZXMgYGFycmF5YC4gVXNlIGBfLnJlbW92ZWBcbiAqIHRvIHJlbW92ZSBlbGVtZW50cyBmcm9tIGFuIGFycmF5IGJ5IHByZWRpY2F0ZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0gey4uLip9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheSA9IFsnYScsICdiJywgJ2MnLCAnYScsICdiJywgJ2MnXTtcbiAqXG4gKiBfLnB1bGwoYXJyYXksICdhJywgJ2MnKTtcbiAqIGNvbnNvbGUubG9nKGFycmF5KTtcbiAqIC8vID0+IFsnYicsICdiJ11cbiAqL1xudmFyIHB1bGwgPSBiYXNlUmVzdChwdWxsQWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwdWxsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9wdWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVJlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDc1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlclJlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDc1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcHBseS5qc1xuLy8gbW9kdWxlIGlkID0gNzU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNzYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gNzYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzXG4vLyBtb2R1bGUgaWQgPSA3NjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VQdWxsQWxsID0gcmVxdWlyZSgnLi9fYmFzZVB1bGxBbGwnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnB1bGxgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYW4gYXJyYXkgb2YgdmFsdWVzIHRvIHJlbW92ZS5cbiAqXG4gKiAqKk5vdGU6KiogVW5saWtlIGBfLmRpZmZlcmVuY2VgLCB0aGlzIG1ldGhvZCBtdXRhdGVzIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheSA9IFsnYScsICdiJywgJ2MnLCAnYScsICdiJywgJ2MnXTtcbiAqXG4gKiBfLnB1bGxBbGwoYXJyYXksIFsnYScsICdjJ10pO1xuICogY29uc29sZS5sb2coYXJyYXkpO1xuICogLy8gPT4gWydiJywgJ2InXVxuICovXG5mdW5jdGlvbiBwdWxsQWxsKGFycmF5LCB2YWx1ZXMpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGggJiYgdmFsdWVzICYmIHZhbHVlcy5sZW5ndGgpXG4gICAgPyBiYXNlUHVsbEFsbChhcnJheSwgdmFsdWVzKVxuICAgIDogYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHVsbEFsbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvcHVsbEFsbC5qc1xuLy8gbW9kdWxlIGlkID0gNzY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpLFxuICAgIGJhc2VJbmRleE9mV2l0aCA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mV2l0aCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHVsbEFsbEJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gcmVtb3ZlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VQdWxsQWxsKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleE9mID0gY29tcGFyYXRvciA/IGJhc2VJbmRleE9mV2l0aCA6IGJhc2VJbmRleE9mLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBzZWVuID0gYXJyYXk7XG5cbiAgaWYgKGFycmF5ID09PSB2YWx1ZXMpIHtcbiAgICB2YWx1ZXMgPSBjb3B5QXJyYXkodmFsdWVzKTtcbiAgfVxuICBpZiAoaXRlcmF0ZWUpIHtcbiAgICBzZWVuID0gYXJyYXlNYXAoYXJyYXksIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGZyb21JbmRleCA9IDAsXG4gICAgICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgd2hpbGUgKChmcm9tSW5kZXggPSBpbmRleE9mKHNlZW4sIGNvbXB1dGVkLCBmcm9tSW5kZXgsIGNvbXBhcmF0b3IpKSA+IC0xKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gYXJyYXkpIHtcbiAgICAgICAgc3BsaWNlLmNhbGwoc2VlbiwgZnJvbUluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHNwbGljZS5jYWxsKGFycmF5LCBmcm9tSW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVB1bGxBbGw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlUHVsbEFsbC5qc1xuLy8gbW9kdWxlIGlkID0gNzY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gNzY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDc2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDc2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYmFzZUluZGV4T2ZgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mV2l0aChhcnJheSwgdmFsdWUsIGZyb21JbmRleCwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IoYXJyYXlbaW5kZXhdLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mV2l0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mV2l0aC5qc1xuLy8gbW9kdWxlIGlkID0gNzcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNzcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG4gICAgQWt2byBSU1IgaXMgY292ZXJlZCBieSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlLlxuICAgIFNlZSBtb3JlIGRldGFpbHMgaW4gdGhlIGxpY2Vuc2UudHh0IGZpbGUgbG9jYXRlZCBhdCB0aGUgcm9vdCBmb2xkZXIgb2YgdGhlXG4gICAgQWt2byBSU1IgbW9kdWxlLiBGb3IgYWRkaXRpb25hbCBkZXRhaWxzIG9uIHRoZSBHTlUgbGljZW5zZSBwbGVhc2Ugc2VlXG4gICAgPCBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sID4uXG4gKi9cblxuLy8gVGhpcyBpbXBvcnQgaXMgbmVjZXNzYXJ5IHRvIGJlIGFibGUgdG8gdGVzdCBzYWdhcy5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVkdXgtc2FnYS9yZWR1eC1zYWdhL2lzc3Vlcy8yODAjaXNzdWVjb21tZW50LTI5MTEzMzAyM1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5cbmltcG9ydCB7IHRha2VMYXRlc3QsIGNhbGwsIHB1dCwgc2VsZWN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgKiBhcyBjIGZyb20gXCIuL2NvbnN0XCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vbXktcmVzdWx0cy91dGlsc1wiO1xuXG5mdW5jdGlvbiBjYWxsQXhpb3MoY29uZmlnKSB7XG4gICAgcmV0dXJuIGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHsgcmVzcG9uc2UgfSkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvciB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERhdGEodXNlcklkKSB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIHVybDogYC9yZXN0L3YxL3VzZXJfcHJvamVjdHNfYWNjZXNzLyR7dXNlcklkfS9gXG4gICAgfTtcbiAgICByZXR1cm4gY2FsbEF4aW9zKGNvbmZpZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXREYXRhKHVzZXJJZCwgaXNfcmVzdHJpY3RlZCwgdXNlcl9wcm9qZWN0cykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiBcInB1dFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIlgtQ1NSRlRva2VuXCI6IGdldENvb2tpZShcImNzcmZ0b2tlblwiKVxuICAgICAgICB9LFxuICAgICAgICB1cmw6IGAvcmVzdC92MS91c2VyX3Byb2plY3RzX2FjY2Vzcy8ke3VzZXJJZH0vYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcl9wcm9qZWN0czoge1xuICAgICAgICAgICAgICAgIGlzX3Jlc3RyaWN0ZWQsXG4gICAgICAgICAgICAgICAgcHJvamVjdHM6IHVzZXJfcHJvamVjdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGNhbGxBeGlvcyhjb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIGdldFNhZ2EoYWN0aW9uKSB7XG4gICAgY29uc3QgeyB1c2VySWQgfSA9IGFjdGlvbi5kYXRhO1xuICAgIGNvbnN0IHsgcmVzcG9uc2UsIGVycm9yIH0gPSB5aWVsZCBjYWxsKGZldGNoRGF0YSwgdXNlcklkKTtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYy5BUElfR0VUX1NVQ0NFU1MsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYy5BUElfR0VUX0ZBSUxVUkUsIGVycm9yIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJJZCA9IHN0YXRlID0+IHN0YXRlLnVzZXJJZDtcbmV4cG9ydCBjb25zdCBnZXRVc2VyUHJvamVjdHMgPSBzdGF0ZSA9PiBzdGF0ZS51c2VyX3Byb2plY3RzO1xuZXhwb3J0IGNvbnN0IGdldElzUmVzdHJpY3RlZCA9IHN0YXRlID0+IHN0YXRlLmlzX3Jlc3RyaWN0ZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiogcHV0U2FnYShhY3Rpb24pIHtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBjLkFQSV9QVVRfSU5JVCB9KTtcbiAgICBjb25zdCB1c2VySWQgPSB5aWVsZCBzZWxlY3QoZ2V0VXNlcklkKTtcbiAgICBjb25zdCBpc19yZXN0cmljdGVkID0geWllbGQgc2VsZWN0KGdldElzUmVzdHJpY3RlZCk7XG4gICAgY29uc3QgdXNlcl9wcm9qZWN0cyA9IHlpZWxkIHNlbGVjdChnZXRVc2VyUHJvamVjdHMpO1xuXG4gICAgY29uc3QgeyByZXNwb25zZSwgZXJyb3IgfSA9IHlpZWxkIGNhbGwocHV0RGF0YSwgdXNlcklkLCBpc19yZXN0cmljdGVkLCB1c2VyX3Byb2plY3RzKTtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYy5BUElfUFVUX1NVQ0NFU1MsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYy5BUElfUFVUX0ZBSUxVUkUsIGVycm9yIH0pO1xuICAgIH1cbn1cblxuLy8gd2F0Y2hlciBzYWdhOiB3YXRjaGVzIGZvciBhY3Rpb25zIGRpc3BhdGNoZWQgdG8gdGhlIHN0b3JlLCBzdGFydHMgd29ya2VyIHNhZ2FcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hlclNhZ2EoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChjLkFQSV9HRVRfSU5JVCwgZ2V0U2FnYSk7XG4gICAgeWllbGQgdGFrZUxhdGVzdChjLlVQREFURV9QUk9KRUNUX1NFTEVDVElPTiwgcHV0U2FnYSk7XG4gICAgeWllbGQgdGFrZUxhdGVzdChjLlVQREFURV9TRUxFQ1RfQUxMX1BST0pFQ1RTLCBwdXRTYWdhKTtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGMuVVBEQVRFX0lTX1JFU1RSSUNURUQsIHB1dFNhZ2EpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy1zcmMvdXNlci1wcm9qZWN0cy1hY2Nlc3Mvc2FnYXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDc3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvYXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IDc3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNzc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA3Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvY29yZS9BeGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gNzc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9kZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGlkID0gNzgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA3ODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1xuLy8gbW9kdWxlIGlkID0gNzgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDc4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3ODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDc4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSA3ODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDc4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGlkID0gNzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXG4vLyBtb2R1bGUgaWQgPSA3ODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDc5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDc5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IDc5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IDc5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcbi8vIG1vZHVsZSBpZCA9IDc5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==
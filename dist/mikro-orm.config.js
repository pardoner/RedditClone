"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./entities/post");
const PostgreSqlDriver = require("src/mikro-orm/postgresq");
const constants_1 = require("./constants");
const path_1 = __importDefault(require("path"));
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [post_1.Post],
    dbName: 'reddit',
    driver: PostgreSqlDriver,
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map
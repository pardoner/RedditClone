import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import path from "path";


export default {
    migrations: {
        path: path.join(__dirname, './migrations'), 
        pattern: /^[\w-]+\d+\.[tj]s$/, 
    },
    entities: [Post],
    dbName: 'reddit',
    driver: PostgreSqlDriver,
    debug: !__prod__,
};
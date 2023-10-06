import { loadEnv } from 'vite';
import { MongoClient } from "mongodb";
const env = loadEnv("development", process.cwd(), 'VITE')

export default class Connect {

    static instance;
    connection = new MongoClient(env.VITE_URI_MONGO);
    collectionName = "usuarios";
    dbName = "db_atlas";
    db;

    static getInstance() { 

        if(Connect.instance instanceof Connect) return Connect.instance;
        Connect.instance = new Connect;
        return Connect.instance;
    }

    changeCollection(name){
        this.collectionName = name
        return Connect.instance;
    }

    connect(){
        this.db = this.connection.db(this.dbName).collection(this.collectionName);
        return this.db;
    }

}
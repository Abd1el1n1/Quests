import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({name:'Quests'});

export const createTable = () => {
    db.transaction( txn => {
        txn.executeSql('CREATE TABLE IF NOT EXISTS quests (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR(30), descripcion VARCHAR(400))'
        ,[]
        ,() => {
            console.log('Creamos una tabla en Quests');
        },
        error =>{
            console.log('error: ' + error.message);
        }
        );        
    });
};


export const addQuest = (titulo, descripcion) => {
    db.transaction(txn => {
        txn.executeSql('INSERT INTO quests (titulo, descripcion) VALUES (?,?)',
        [titulo,descripcion],
        () => {
            console.log('Insertamos una quest en quests');
        },
        error =>{
            console.log('error: ' + error.message);
        }
        );
    });
}

export const getQuests = () => {
    db.transaction(txn => {
        txn.executeSql('SELECT * FROM quests ORDER BY id DESC',
        [],
        (sqlTxn,res) => {
            console.log('Trajimos quests');
            let len = res.rows.length;
            let quests = [];
            if (len > 0){
                for (let i = 0; i<len; i++){
                    let item = res.rows.item(i);
                    quests.push({titulo:item.titulo, descripcion:item.descripcion });
                }
            }
            return quests;
        },
        error =>{
            console.log('error: ' + error.message);
        }
        );
    });
}
const db = {};
console.log(db);


// ['manna', 'sani', 'sakib', 'rubel', 'manna'];

const addToDb = item => {
    const db = getDb();
    db[item] = 1;
    console.log()
}
const getDb = () => {
    return db;
}
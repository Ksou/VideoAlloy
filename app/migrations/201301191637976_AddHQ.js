migration.up = function(db) {
 migrator.db.execute('ALTER TABLE ' + migrator.table + ' ADD COLUMN isbn INT;');
};

migration.down = function(db) {

};

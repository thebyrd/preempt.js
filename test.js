var db = openDatabase('preempt', '1.0', 'Browser History Cache', 100*1024*1204)

// db.transaction(function (t) {
//   t.executeSql('CREATE TABLE IF NOT EXISTS page (id unique, href, html)')
//   t.executeSql('INSERT INTO page (id, href, html) VALUES (1, "boom", "Hello World")')
  t.executeSql('SELECT * FROM page', [], function (ex, results) {
    var len = results.rows.length;
    console.log(len);
  })
})
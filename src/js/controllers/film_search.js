angular.module('MyFirst.controllers.FilmSearchCrtl', [])

.controller('FilmSearchCrtl', function ($scope, $log, FilmDataService) {

    
   
    /*   
    $scope.searchFilme = angular.fromJson([
            {
                "adult":false,
                "backdrop_path":"/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
                "genre_ids":[18],
                "id":550,
                "original_language":"en",
                "original_title":"Fight Club",
                "overview":"Ein Yuppie findet beim charismatischen Tyler Durden Unterschlupf, nachdem seine Wohnung in die Luft gejagt wird. Ein Gerangel zwischen den beiden entwickelt sich zu einer Schlägerei, die mit der Erkenntnis endet, dass man sich nach einer ordentlichen Portion Prügel einfach besser fühlt. Der \"Fight Club\" ist geboren. Immer mehr Männer versammeln sich, um sich zu schlagen - und gestärkt in den Alltag zu gehen. Wie ein Virus greift das Konzept um sich, doch für Tyler ist der Kampfverein nur die erste Stufe, um die USA in die Knie zu zwingen.",
                "release_date":"1999-10-14",
                "poster_path":"/dXRuldPtua2kJccNTugCix2V6tD.jpg",
                "popularity":5.531079,
                "title":"Fight Club",
                "video":false,
                "vote_average":7.9,
                "vote_count":3791},
            {   
                "adult":false,"backdrop_path":"/qrZssI8koUdRxkYnrOKMRY3m5Fq.jpg","genre_ids":[27],"id":289732,"original_language":"zh","original_title":"Zombie Fight Club","overview":"Als in der taiwanesischen Hauptstadt Taipei ein Zombievirus ausbricht, scheint das Ende aller Tage gekommen zu sein. Alles versinkt im Chaos, so auch ein in der Innenstadt gelegenes Hochhaus. Von den Zombiehorden bedrängt müssen die Bewohner und eine Handvoll Polizisten ums nackte Überleben kämpfen - es werden keine Gefangenen gemacht. Doch dies ist erst der Anfang, schließlich wartet auf alle Beteiligten noch der Zombie Fight Club, ein gnadenloser Arenakampf, bei welchem Menschen gegen Zombies antreten.","release_date":"2014-10-23","poster_path":"/7k9db7pJyTaVbz3G4eshGltivR1.jpg","popularity":1.15677,"title":"Zombie Fight Club","video":false,"vote_average":3.5,"vote_count":2},{"adult":false,"backdrop_path":"/uywB4ZS6iCuc4aCIsAOyhW4sFZJ.jpg","genre_ids":[28,80,18,53],"id":14476,"original_language":"en","original_title":"Clubbed","overview":"Fabrikarbeiter Danny ist einer, der gern nachgibt. In der Arbeit, beim Streit mit der geschiedenen Frau, auf der Straße. Als ihn eines Tages ein paar Rüpel in Gegenwart seiner weinenden Kinder demütigen, beschließt er, sich nicht länger alles gefallen zu lassen. Im Boxstudio trainiert er seinen Körper und knüpft Kontakt zu Türstehern, die ihn freundlich in ihrer Mitte aufnehmen. Nun tankt Danny Selbstbewusstsein und kann es den Rowdies zeigen. Allerdings verwickeln ihn seine neuen Freunde auch in eine handfeste Auseinandersetzung mit der Unterwelt.","release_date":"2009-01-16","poster_path":"/mGR71N18bh26uwtAYZuiKOc79m9.jpg","popularity":0.151465,"title":"The Hooligan Club - Fear and Fight","video":false,"vote_average":7.1,"vote_count":15},{"adult":false,"backdrop_path":null,"genre_ids":[99],"id":259016,"original_language":"en","original_title":"Insane Fight Club","overview":null,"release_date":"2014-03-11","poster_path":"/mLhwBQPV3iATe3L61kbpmxANwL8.jpg","popularity":1.00433,"title":"Insane Fight Club","video":false,"vote_average":0,"vote_count":0},{"adult":false,"backdrop_path":"/5sWZRCsjzH1Dxo6gSBeX4RpAQ4p.jpg","genre_ids":[28,18,80],"id":51021,"original_language":"en","original_title":"Lure: Teen Fight Club","overview":null,"release_date":"2010-11-16","poster_path":"/aRTX5Y52yGbVL6TGnyI4E8jjtz4.jpg","popularity":1.002997,"title":"Lure: Teen Fight Club","video":false,"vote_average":2,"vote_count":1},{"adult":false,"backdrop_path":"/tcoAGvTo96R7Y9ZGVCCz7BZvrvb.jpg","genre_ids":[28,53],"id":104782,"original_language":"en","original_title":"Florence Fight Club","overview":null,"release_date":"2010-01-01","poster_path":"/eQqqu0srTYcclWqylvgpLyU87hV.jpg","popularity":1.001163,"title":"Florence Fight Club","video":false,"vote_average":0,"vote_count":0},{"adult":false,"backdrop_path":null,"genre_ids":[99],"id":151912,"original_language":"de","original_title":"Jurassic Fight Club","overview":"Diese 'History' Dokumentation untersucht die ultimativen Kämpfer der Urgeschichte: Schon seit mehr als einhundert Jahren erforschen Historiker und Wissenschaftler die Urgeschichte. Die Dokumentation zeigt die ultimativen Kämpfer dieser einzigartigen geschichtlichen Periode - gigantische Dinosaurier, die die Erde vor Millionen von Jahren beherrschten. Paläontologen untersuchen die Schlachtfelder der gnadenlosen Giganten und erhalten dabei erstaunliche Erkenntnisse darüber, in wie weit Beweglichkeit, Teamkoordination and der Angriff im richtigen Moment für die Dinosaurier überleben bedeutete. Jede Episode analysiert höchstdetailliert die räuberischen Kämpfe und enthüllt damit eine rücksichtslose Welt, die weitaus kalkulierender - und komplexer war, als bislang angenommen wurde.","release_date":"2008-10-22","poster_path":"/AwECEjjen4eYSDZ3AETXnFG6dgu.jpg","popularity":1.000983,"title":"Jurassic Fight Club","video":false,"vote_average":0,"vote_count":0},{"adult":false,"backdrop_path":null,"genre_ids":[],"id":289100,"original_language":"en","original_title":"Girls Fight Club","overview":null,"release_date":"2009-06-18","poster_path":null,"popularity":1.000869,"title":"Girls Fight Club","video":false,"vote_average":0,"vote_count":0},{"adult":false,"backdrop_path":null,"genre_ids":[],"id":347807,"original_language":"hi","original_title":"Fight Club: Members Only","overview":null,"release_date":"2006-02-17","poster_path":"/wFHeVayFFeXmvH71WHnsErr5mGp.jpg","popularity":1.000456,"title":"Fight Club: Members Only","video":false,"vote_average":0,"vote_count":0},{"adult":false,"backdrop_path":null,"genre_ids":[],"id":295477,"original_language":"da","original_title":"Fight club camp kusse","overview":null,"release_date":"2005-08-12","poster_path":"/5itVi2OcKAkTUK0xtVxueKURb1W.jpg","popularity":1.000448,"title":"Fight club camp kusse","video":false,"vote_average":0,"vote_count":0},{"adult":false,"backdrop_path":null,"genre_ids":[99],"id":209599,"original_language":"en","original_title":"Brooklyn Girls Fight Club","overview":null,"release_date":null,"poster_path":"/luWpP5WSw9JjbWS1J4BMnjkkJCX.jpg","popularity":1.000002,"title":"Brooklyn Girls Fight Club","video":false,"vote_average":3.5,"vote_count":1},{"adult":false,"backdrop_path":"/rsv46SYFz7SxWVbC48uV26Xu1x9.jpg","genre_ids":[28,18,80],"id":219897,"original_language":"de","original_title":"Barrio Brawler","overview":"Der Kampfkünstler Carlos Castillo muss seine Schulden zurück bezahlen, sonst wird sein Kampfkunst-Dojo von der Bank übernommen. Um das Geschäft seines verstorbenen Vaters zu retten, wendet er sich an seinen ihm entfremdeten Halbbruder Ricky. Der kann das nötige Geld zwar von seinem Boss, dem Bandenchef Morales, besorgen, doch müssen die zwei Brüder dafür an dem illegalen „Pit Fight“-Wettbewerb teilnehmen. Carlos gerät dabei immer tiefer in die kriminelle Unterwelt. Außerdem gibt es da noch seine Ex-Frau Vanessa und seinen Sohn Diego, denen er eigentlich beweisen will, dass er als Familienvater auch etwas taugt.","release_date":"2013-08-27","poster_path":"/a6LcyWEH9Jd3dcoz7V3M5pxG6Qo.jpg","popularity":1.000107,"title":"Fight Club 2 - Faustkampf im Barrio","video":false,"vote_average":1.5,"vote_count":2},{"adult":false,"backdrop_path":null,"genre_ids":[99],"id":322772,"original_language":"en","original_title":"Insane Fight Club II - This Time It’s Personal","overview":null,"release_date":"2015-01-21","poster_path":"/84mcV9ky4TSpD7dpHnsx7yBVs64.jpg","popularity":1.009874,"title":"Insane Fight Club II - This Time It’s Personal","video":false,"vote_average":0,"vote_count":0}
    ]);

*/
    this.tuwas = function(){
        $log.log($scope.searchText);
        var res = FilmDataService.findFilmName($scope.searchText);
        res.success(function(data, status){
        $log.log(data);
        var found = angular.fromJson(data.results);
        $log.log(found);
        $scope.searchFilme = found;
        $scope.sfilmCount = $scope.searchFilme.length;
      });
        
         

    };
    /*    
        var jdata = angular.fromJson(data);
        $scope.searchFilme = jdata.results;
    */

  
});

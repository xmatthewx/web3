
/**
 * Need to create and keep track of players or groups of people?
 * Here is a simple demo of the scaffolding.
 */
  


// Version A
// simple functions
// not using this actively

groupCount = 0;
groups = [];

function addGroup(){
    groups.push({ id : groupCount, songs: [] });
    $('span').html(groupCount);
    groupCount += 1;
};

function addSong(groupID){
    groups[groupID].songs.push( { 'songid':'483234987234' })
};

function getSong(groupID,songNumber){
    return groups[groupID].songs[songNumber];
};


// Version B
// app object (like a class)
// same functions, slighly different syntax

app = {

    groupCount : 0,
    groups : [],

    addGroup : function(){
        app.groups.push({ id : app.groupCount, songs: [], timer : app.timer }); // does app.timer work ??
        app.groups.push({ id : app.groupCount, songs: [], }); 
        $('span').html(app.groupCount + 1);
        app.groupCount += 1;
        console.log(app.groups);
    },

    addSong : function(groupID,songID){
        app.groups[groupID].songs.push( { 'songid': songID });
        console.log(app.groups);
    },

    getSong : function(groupID,songNumber){
        return app.groups[groupID].songs[songNumber].songid;
    },

}


$('button').on('click', function(event){
    event.preventDefault();
})

$('#addGroup').on('click',function(){
    app.addGroup();
});
$('#addSong').on('click',function(){
    id = $('#groupID').val();
    song = $('#songName').val();
    app.addSong(id,song);
});
$('#getSong').on('click',function(){
    id = $('#getID').val();
    song = $('#songNumber').val();  
    $('#theSong').val( app.getSong(id,song) );
    // console.log( app.getSong(id,song) );
});

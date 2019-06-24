function toUnderscore( str ) {
    return str.replace( /\.?([A-Z]+)/g, function( x, y ) {
        return "_" + y.toLowerCase();
    } ).replace( /^_/, "" );
}

function toCamelCase( str, upperFirstLetter ) {
    upperFirstLetter = upperFirstLetter || false;

    var camelCased = str.split( '_' ).map( function( v ) {
        return v.substr( 0, 1 ).toUpperCase() + v.substr( 1 ).toLowerCase();
    } ).join( '' );

    if( upperFirstLetter ) {
        return camelCased.substr( 0, 1 ).toUpperCase() + camelCased.substr( 1 );
    }

    return camelCased.substr( 0, 1 ).toLowerCase() + camelCased.substr( 1 );
}

function moveFormToFolderForm( file, fileName, fileDescription ) {
    var formsFolder = DriveApp.getFolderById( '0B1O3HLuw9K0GV2dPa0MwSVlwOUk' );

    var parents = file.getParents();
    while( parents.hasNext() ) {
        var parent = parents.next();

        formsFolder.addFile( file );
        parent.removeFile( file );

        file.setName( fileName );
        file.setDescription( fileDescription );
    }
}
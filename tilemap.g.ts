// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003090909090909020909090900000906010202020202020202020202020002040a000000000c00000000000d0c0002040102020202000202020200020200020401020202020002020202000202020204010202000000020202020000020202040100000c020d020200000c00000002040100020202000202000202020200020401000202020002020002020202000204010c0202020002020c02020d020002020100000c02000202000202000000020401000200020c0202000202020202020401000200020002020000000c0000000b0102020002000d0000020202020202040102020002020c02020202020202020405080800000c00080808080808080807`, img`
. . . . . . . . . . . 2 . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . . . . . . . 2 . 
2 2 2 2 2 . 2 2 2 2 . 2 2 . 2 . 
. . 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
2 2 2 . . . 2 2 2 2 . . 2 2 2 . 
2 . . . 2 . 2 2 . . . . . . 2 . 
2 . 2 2 2 . 2 2 . 2 2 2 2 . 2 . 
2 . 2 . . . 2 2 . 2 2 2 2 . 2 . 
2 . 2 2 2 . 2 2 . 2 2 . 2 . 2 . 
2 . . . 2 . 2 2 . 2 2 . . . 2 . 
2 . 2 . 2 . 2 2 . 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 2 . . . . . . . . 
2 2 2 . 2 . . . . 2 2 2 2 2 2 2 
. . 2 . 2 2 . 2 2 2 . . . . . . 
. . 2 . . . . 2 2 . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.dungeon.stairWest,sprites.dungeon.stairLarge,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

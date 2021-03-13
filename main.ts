scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, assets.tile`myTile1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeScoreBy(-1)
    music.zapped.play()
    tiles.setTileAt(location, assets.tile`myTile2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . d e d e d . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . . . a a a a a . . . . . . 
    . . . . . a a a a a . . . . . . 
    . . . . . d 8 8 8 d . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)

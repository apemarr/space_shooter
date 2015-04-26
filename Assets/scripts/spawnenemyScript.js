#pragma strict
public var enemy : GameObject;
public var spawnTime : float = 2;
function Start () {
InvokeRepeating("addEnemy", spawnTime, spawnTime);
}
function addEnemy() {  
    // Variables to store the X position of the spawn object
    // See image below
    var x1 = transform.position.x - renderer.bounds.size.x/2;
    var x2 = transform.position.x + renderer.bounds.size.x/2;

    // Randomly pick a point within the spawn object
    var spawnPoint = new Vector2(Random.Range(x1, x2), transform.position.y);

    // Create an enemy at the 'spawnPoint' position
    Instantiate(enemy, spawnPoint, Quaternion.identity);
}
function Update () {

}
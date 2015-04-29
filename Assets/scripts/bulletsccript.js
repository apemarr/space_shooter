#pragma strict
public var speed : int = 6;
function Start () {
GetComponent.<Rigidbody2D>().velocity.y = speed;
}

function Update () {

}
function OnBecameInvisible() {  
    // Destroy the bullet 
    Destroy(gameObject);
}

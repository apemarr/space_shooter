#pragma strict
public var speed : int = -5;
function Start () {
rigidbody2D.velocity.y = speed;
rigidbody2D.angularVelocity = Random.Range(-200, 200);
Destroy(gameObject, 3);
}

function Update () {

}
function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;

    // If it collided with a bullet
    if (name == "bullet(Clone)") {
    GameObject.Find("explota").GetComponent.<AudioSource>().Play();
        // Destroy itself (the enemy)
        Destroy(gameObject);
		
        // And destroy the bullet
        Destroy(obj.gameObject);
         
    }
    // If it collided with the spaceship
    if (name == "spaceship") {
    GameObject.Find("choca").GetComponent.<AudioSource>().Play();
        // Destroy itself (the enemy) to keep things simple
        Destroy(gameObject);
    }
}
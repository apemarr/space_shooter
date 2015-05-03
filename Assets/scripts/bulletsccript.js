#pragma strict
GetComponent(UI.Text);
public var speed : int = 6;
var Points : UI.Text;
function Start () {
GetComponent.<Rigidbody2D>().velocity.y = speed;
}

function Update () {



}
function OnBecameInvisible() {  
    // Destroy the bullet 
    Destroy(gameObject);
}

function OnTriggerEnter2D(other:Collider2D){
	if (other.tag=="enemy")
	{
		Points.text=Points.text+100;
	}
}
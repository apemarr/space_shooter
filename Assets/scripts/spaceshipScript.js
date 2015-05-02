#pragma strict
public var bullet : GameObject;
public var lifes : int=3;
function Start () {

}

function Update () {
GetComponent.<Rigidbody2D>().velocity.x = Input.GetAxis("Horizontal") * 10;

if (Input.GetKeyDown("space")) {
       
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
}


function OnTriggerEnter2D(obj : Collider2D) {
 lifes=lifes-1;
 if(lifes<=0){
 GameObject.Find("loose").GetComponent.<AudioSource>().Play();
 Application.LoadLevel("menu");
 }
}
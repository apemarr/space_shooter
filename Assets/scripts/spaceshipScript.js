﻿#pragma strict
public var bullet : GameObject;
function Start () {

}

function Update () {
GetComponent.<Rigidbody2D>().velocity.x = Input.GetAxis("Horizontal") * 10;

if (Input.GetKeyDown("space")) {
       
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
}
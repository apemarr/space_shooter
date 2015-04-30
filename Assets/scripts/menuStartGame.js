#pragma strict
public var Main_Panel:GameObject;
public var Credits_Panel:GameObject;
public var Difficulty_Panel:GameObject;
var easy=false;
var normal=false;
var difficulty:enemyscript;

function EStartGame () {
Application.LoadLevel("mainscene");
difficulty.speed=-5;
}

function NStartGame () {
Application.LoadLevel("mainscene");
difficulty.speed=-10;
}

function HStartGame () {
Application.LoadLevel("mainscene");
difficulty.speed=-15;
}

function Credit (){
Main_Panel.SetActive(false);
Difficulty_Panel.SetActive(false);
}
function BackCredit(){
Credits_Panel.SetActive(false);
Main_Panel.SetActive(true);
}
function ChooseDifficulty()
{
Main_Panel.SetActive(false);
Credits_Panel.SetActive(false);
Difficulty_Panel.SetActive(true);
}
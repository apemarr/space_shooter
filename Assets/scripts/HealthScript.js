#pragma strict
public var Heart : GameObject;
public var Heart2 : GameObject;
public var Heart3 : GameObject;


var spaceshipScript:spaceshipScript;

function GetDamage(){
	if (spaceshipScript.Lifes==2)
		{
			Heart3.SetActive(false);
		}
	else if(spaceshipScript.Lifes==1)
	{
		Heart2.SetActive(false);
	}
	else if (spaceshipScript.Lifes==0)
	{
		Heart.SetActive(false);
	}
	

}


#pragma strict
var pause=false;
public var Canvas:GameObject;
function Start ()
{
	Canvas.SetActive(false);
}
function Update ()
{

	if (Input.GetKeyDown("p"))
	{
	pause=!pause;
		if (pause)
		{
			Time.timeScale=0;
			Canvas.SetActive(true);
		}
		else
		{
			Time.timeScale=1;
			Canvas.SetActive(false);
		}
	
	}
	
}
function ExitGame()
{
	Application.Quit();
}
function ResumeGame()
{
	Time.timeScale=1;
	Canvas.SetActive(false);
	pause=false;
}
function RestartGame()
{
	Application.LoadLevel(Application.loadedLevel);
}
function MainMenu()
{
	Application.LoadLevel("menu");
}
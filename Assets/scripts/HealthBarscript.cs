using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class HealthBarscript : MonoBehaviour {

	public int startingHealth = 100;
	public int currentHealth;
	public Slider HSlider;

	bool isDead;
	bool damaged;
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		//if (damaged) {
		//		} else {
		//		}
		//damaged = false;
	}
	public void TakeDamage (int amount)
	{
		// Set the damaged flag so the screen will flash.
		damaged = true;
		
		// Reduce the current health by the damage amount.
		currentHealth -= amount;
		
		// Set the health bar's value to the current health.
		HSlider.value = currentHealth;

		
		// If the player has lost all it's health and the death flag hasn't been set yet...
		if(currentHealth <= 0 && !isDead)
		{
			// ... it should die.
			Death ();
		}
	}

	void Death ()
	{
		// Set the death flag so this function won't be called again.
		isDead = true;
		Application.LoadLevel("menu");

	}       
}

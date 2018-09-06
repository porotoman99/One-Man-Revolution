// The variables are initialized at an upper level so all functions have access to them
			var stoneBank = 0;
			var branchBank = 0;
			var leafBank = 0;
			var wheatSeedBank = 0;
			var waterBank = 0;
			var berryBank = 0;
			var fungusBank = 0;
			var health = 10;
			var hunger = 10;
			var thirst = 10;
			var stamina = 10;
			var gameTime = 6;
			var gameDay = 1;
			var gameYear = 1;
			var gameSeason = "Spring";
			var waterTurns = 0;
			var berryTurns = 0;
			var pickaxeTier = 0;
			var axeTier = 0;
			var shovelTier = 0;
			var hoeTier = 0;
			var sickleTier = 0;
			var wormBank = 0;
			var sharpStoneBank = 0;
			var smoothBranchBank = 0;
			var ropeBank = 0;
			var leafTarpBank = 0;
			var tinOreBank = 0;
			var tinIngotBank = 0;
			var woodHandleBank = 0;
			var stonePegBank = 0;
// This function decreases the 4 main stats by the appropriate amount for most actions, not including actions where some stat(s) could be replenished
			function action(hu,th,st)
			{
				if (hu == 1)
				{
					hunger = (hunger * 10 - 1) / 10;
					if (hunger < 0)
					{
						health = ((health * 10) + (hunger * 10)) / 10;
						hunger = 0;
					}
				}
				if (st == 1)
				{
					stamina = (stamina * 10 - 5) / 10;
					if (stamina < 0)
					{
						health = ((health * 10) + (stamina * 10)) / 10;
						stamina = 0;
					}
				}
				if (th == 1)
				{
					thirst = (thirst * 10 -5) / 10;
					if (thirst < 0)
					{
						health = ((health * 10) + (thirst * 10)) / 10;
						thirst = 0;
					}
				}
				if ( health <= 0)
				{
					health = 0;
				}
			}
// This function increments all of the time related stats and updates their graphics on the page
			function advanceTime()
			{
				gameTime += 1;
				if (gameTime == 25)
				{
					gameTime = 1;
					gameDay += 1;
					if (gameDay == 91)
					{
						gameSeason = "Summer";
					}
					else if (gameDay == 182)
					{
						gameSeason = "Fall";
					}
					else if (gameDay == 273)
					{
						gameSeason = "Winter";
					}
					else if (gameDay == 366)
					{
						gameSeason = "Spring";
						gameDay = 1
						gameYear += 1;
					}
				}
				if (gameTime == 12)
				{
					document.querySelector(".timeDisp").innerHTML = "12:00 PM";
				}
				else if (gameTime == 24)
				{
					document.querySelector(".timeDisp").innerHTML = "12:00 AM";
				}
				else if (gameTime < 12)
				{
					document.querySelector(".timeDisp").innerHTML = gameTime + ":00 AM";
				}
				else
				{
					document.querySelector(".timeDisp").innerHTML = (gameTime - 12) + ":00 PM";
				}
				document.querySelector(".dayDisp").innerHTML = gameDay;
				document.querySelector(".timeBar").style.right = (100 - gameTime * 4) + "%";
				document.querySelector(".yearDisp").innerHTML = gameYear;
				document.querySelector(".seasonDisp").innerHTML = gameSeason;
			}
// This function updates various graphical elements
			function updateDisp()
			{
// Updates the numbers and graphics for the 4 main stats
				document.querySelector(".healthValue").innerHTML = health;
				document.querySelector(".healthBar").style.right = (100 - health * 10) + "%";
				
				document.querySelector(".hungerValue").innerHTML = hunger;
				document.querySelector(".hungerBar").style.right = (100 - hunger * 10) + "%";
				
				document.querySelector(".thirstValue").innerHTML = thirst;
				document.querySelector(".thirstBar").style.right = (100 - thirst * 10) + "%";
				
				document.querySelector(".staminaValue").innerHTML = stamina;
				document.querySelector(".staminaBar").style.right = (100 - stamina * 10) + "%";
// Updates the values of the inventory items
				document.querySelector(".stoneBank").innerHTML = stoneBank;
				document.querySelector(".leafBank").innerHTML = leafBank;
				document.querySelector(".branchBank").innerHTML = branchBank;
				document.querySelector(".wheatSeedBank").innerHTML = wheatSeedBank;
				document.querySelector(".waterBank").innerHTML = waterBank;
				document.querySelector(".berryBank").innerHTML = berryBank;
				document.querySelector(".fungusBank").innerHTML = fungusBank;
				document.querySelector(".sharpStoneBank").innerHTML = sharpStoneBank;
				document.querySelector(".leafTarpBank").innerHTML = leafTarpBank;
				document.querySelector(".smoothBranchBank").innerHTML = smoothBranchBank;
				document.querySelector(".ropeBank").innerHTML = ropeBank;
// Updates various buttons' disabled status
				if (stoneBank >= 2)
				{
					document.querySelector(".sharpenStoneButton").disabled = false;
				}
				else
				{
					document.querySelector(".sharpenStoneButton").disabled = true;
				}
				if (leafBank >= 5 && ropeBank >= 1)
				{
					document.querySelector(".sewLeavesButton").disabled = false;
				}
				else
				{
					document.querySelector(".sewLeavesButton").disabled = true;
				}
				if (sharpStoneBank >= 1 && branchBank >= 1)
				{
					document.querySelector(".smoothBranchButton").disabled = false;
				}
				else
				{
					document.querySelector(".smoothBranchButton").disabled = true;
				}
				if (branchBank >= 5 && leafBank >= 5)
				{
					document.querySelector(".makeRopeButton").disabled = false;
				}
				else
				{
					document.querySelector(".makeRopeButton").disabled = true;
				}
				if (pickaxeTier == 0)
				{
					if (sharpStoneBank >= 1 && smoothBranchBank >= 1 && ropeBank >= 1)
					{
						document.querySelector(".pickaxeButton").disabled = false;
					}
					else
					{
						document.querySelector(".pickaxeButton").disabled = true;
					}
				}
				else if (pickaxeTier == 1)
				{
					if (tinIngotBank >= 1 && woodHandleBank >= 1 && stonePegBank >= 2)
					{
						document.querySelector(".pickaxeButton").disable = false;
					}
					else
					{
						document.querySelector(".pickaxeButton").disable = true;
					}
				}
				if (axeTier == 0)
				{
					if (sharpStoneBank >= 1 && smoothBranchBank >= 1 && ropeBank >= 1)
					{
						document.querySelector(".axeButton").disabled = false;
					}
					else
					{
						document.querySelector(".axeButton").disabled = true;
					}
				}
				else if (axeTier == 1)
				{
					if (tinIngotBank >= 1 && woodHandleBank >= 1 && stonePegBank >= 2)
					{
						document.querySelector(".axeButton").disable = false;
					}
					else
					{
						document.querySelector(".axeButton").disable = true;
					}
				}
				if (shovelTier == 0)
				{
					if (sharpStoneBank >= 1 && smoothBranchBank >= 1 && ropeBank >= 1)
					{
						document.querySelector(".shovelButton").disabled = false;
					}
					else
					{
						document.querySelector(".shovelButton").disabled = true;
					}
				}
				else if (shovelTier == 1)
				{
					if (tinIngotBank >= 1 && woodHandleBank >= 1 && stonePegBank >= 2)
					{
						document.querySelector(".shovelButton").disable = false;
					}
					else
					{
						document.querySelector(".shovelButton").disable = true;
					}
				}
				if (hoeTier == 0)
				{
					if (sharpStoneBank >= 1 && smoothBranchBank >= 1 && ropeBank >= 1)
					{
						document.querySelector(".hoeButton").disabled = false;
					}
					else
					{
						document.querySelector(".hoeButton").disabled = true;
					}
				}
				else if (hoeTier == 1)
				{
					if (tinIngotBank >= 1 && woodHandleBank >= 1 && stonePegBank >= 2)
					{
						document.querySelector(".hoeButton").disable = false;
					}
					else
					{
						document.querySelector(".hoeButton").disable = true;
					}
				}
				if (sickleTier == 0)
				{
					if (sharpStoneBank >= 1 && smoothBranchBank >= 1 && ropeBank >= 1)
					{
						document.querySelector(".sickleButton").disabled = false;
					}
					else
					{
						document.querySelector(".sickleButton").disabled = true;
					}
				}
				else if (sickleTier == 1)
				{
					if (tinIngotBank >= 1 && woodHandleBank >= 1 && stonePegBank >= 2)
					{
						document.querySelector(".sickleButton").disable = false;
					}
					else
					{
						document.querySelector(".sickleButton").disable = true;
					}
				}
// Checks if the player has died
				if (health <= 0)
				{
					dead();
				}
			}
// This function is carried out when the player dies from any means
			function dead()
			{
				document.querySelector(".deadBox").style.display = "block"
				var buttons = document.getElementsByTagName("button");
				for (var i = 0; i < buttons.length; i++)
				{
					buttons[i].disabled = true;
				}
				window.setTimeout(refreshPage, 5000);
			}
// This function is carried out when the 'Rest' button is clicked
			function rest()
			{
				if (randInt(1,2) == 1)
				{
					action(1,0,0);
				}
				if (randInt (1,2) == 1)
				{
					action(0,1,0);
				}
				stamina = (stamina * 10 + 10) / 10;
				if (stamina > 10)
				{
					stamina = 10;
				}
				if (thirst < 0)
				{
					health = ((health * 10) + (thirst * 10)) / 10;
					thirst = 0;
				}
				health = (health * 10 + 1) / 10;
				if (health > 10)
				{
					health = 10;
				}
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Collect Stones' button is clicked
			function collectStones()
			{
				stoneBank += randInt(1,3);
				if (randInt(1,10) == 1)
				{
					waterTurns += 5;
					document.querySelector(".collectWater").innerHTML = "Collect Water (" + waterTurns + ")";
					document.querySelector(".collectWater").disabled = false;
					waterBank += 10;
					document.querySelector(".drinkWater").disabled = false;
					document.querySelector(".drinkWater").innerHTML = "Drink Water (" + waterBank + ")";
				}
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Collect Water' button is clicked
			function collectWater()
			{
				waterTurns -= 1;
				document.querySelector(".collectWater").innerHTML = "Collect Water (" + waterTurns + ")";
				if (waterTurns == 0)
				{
					document.querySelector(".collectWater").disabled = true;
				}
				waterBank += 10;
				document.querySelector(".drinkWater").disabled = false;
				document.querySelector(".drinkWater").innerHTML = "Drink Water (" + waterBank + ")";
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Drink Water' button is clicked
			function drinkWater()
			{
				waterBank -= 1;
				document.querySelector(".drinkWater").innerHTML = "Drink Water (" + waterBank +")";
				if (waterBank == 0)
				{
					document.querySelector(".drinkWater").disabled = true;
				}
				stamina = (stamina * 10 + 5) / 10;
				if (stamina > 10)
				{
					stamina = 10;
				}
				thirst = (thirst * 10 + 10) / 10;
				if (thirst > 10)
				{
					thirst = 10;
				}
				action(1,0,0)
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Collect Branches' button is clicked
			function collectBranches()
			{
				branchBank += randInt(1,3);
				if (randInt(1,10) == 1)
				{
					fungusBank += 5;
					document.querySelector(".eatFungus").disabled = false;
					document.querySelector(".eatFungus").innerHTML = "Eat Fungus (" + fungusBank + ")";
				}
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Collect Berries' button is clicked
			function collectBerries()
			{
				berryTurns -= 1;
				document.querySelector(".collectBerries").innerHTML = "Collect Berries (" + berryTurns + ")";
				if (berryTurns == 0)
				{
					document.querySelector(".collectBerries").disabled = true;
				}
				berryBank += 3;
				document.querySelector(".eatBerries").disabled = false;
				document.querySelector(".berryBank").innerHTML = berryBank;
				document.querySelector(".eatBerries").innerHTML = "Eat Berries (" + berryBank + ")";
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Eat Berries' button is clicked
			function eatBerries()
			{
				berryBank -= 1;
				document.querySelector(".eatBerries").innerHTML = "Eat Berries (" + berryBank + ")";
				if (berryBank == 0)
				{
					document.querySelector(".eatBerries").disabled = true;
				}
				stamina = (stamina * 10 + 5) /10;
				if (stamina > 10)
				{
					stamina = 10;
				}
				hunger = (hunger * 10 + 5) / 10;
				if (hunger > 10)
				{
					hunger = 10;
				}
				thirst = (thirst * 10 - 1 ) / 10;
				if (thirst < 0)
				{
					health = ((health * 10) + (thirst * 10)) / 10;
					thirst = 0;
				}
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Collect Leaves' button is clicked
			function collectLeaves()
			{
				leafBank += randInt(1,3);
				
				if (randInt(1,10) == 1)
				{
					berryTurns += 3;
					document.querySelector(".collectBerries").innerHTML = "Collect Berries (" + berryTurns + ")";
					document.querySelector(".collectBerries").disabled = false;
					berryBank += 15;
					document.querySelector(".eatBerries").disabled = false;
					document.querySelector(".eatBerries").innerHTML = "Eat Berries (" + berryBank + ")";
				}
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Eat Fungus' button is clicked
			function eatFungus()
			{
				fungusBank -= 1;
				document.querySelector(".eatFungus").innerHTML = "Eat Fungus (" + fungusBank + ")";
				if (fungusBank == 0)
				{
					document.querySelector(".eatFungus").disabled = true;
				}
				stamina = (stamina * 10 + 5) / 10;
				if (stamina > 10)
				{
					stamina = 10;
				}
				hunger = (hunger * 10 + 10) / 10;
				if (hunger > 10)
				{
					hunger = 10;
				}
				health = (health * 10 - 5) / 10;
				if (health < 0)
				{
					health = 0;
				}
				action(0,1,0);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Collect Wheat Seeds' button is clicked
			function collectWheatSeeds()
			{
				wheatSeedBank += randInt(1,3);
				if (randInt(1,20) == 1)
				{
					wormBank += 5;
				}
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function makes it easier to generate random integers and is used frequently in other functions
			function randInt(min,max)
			{
				return Math.floor(Math.random()*(max - min + 1)) + min;
			}
//This function is used to refresh the page after the player dies
			function refreshPage()
			{
				window.location.reload(true);
			}
// This function is carried out when the 'Sharpen Stone' button is clicked
			function sharpenStone()
			{
				stoneBank -= 2;
				sharpStoneBank++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Sew Leaves' button is clicked
			function sewLeaves()
			{
				leafBank -= 5;
				ropeBank--;
				leafTarpBank++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Smooth Branch' button is clicked
			function smoothBranch()
			{
				sharpStoneBank--;
				branchBank--;
				smoothBranchBank++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'Make Rope' button is clicked
			function makeRope()
			{
				branchBank -= 5;
				leafBank -= 5;
				ropeBank++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'X Pickaxe' button is clicked
			function upgradePickaxe()
			{
				if (pickaxeTier == 0)
				{
					sharpStoneBank--;
					smoothBranchBank--;
					ropeBank--;
					document.querySelector(".pickaxeButton").innerHTML = "Tin Pickaxe<hr>Tin Ingot (1)<br>Wooden Handle (1)<br>Stone Peg (2)";
				}
				pickaxeTier++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'X Axe' button is clicked
			function upgradeAxe()
			{
				if (axeTier == 0)
				{
					sharpStoneBank--;
					smoothBranchBank--;
					ropeBank--;
					document.querySelector(".axeButton").innerHTML = "Tin Axe<hr>Tin Ingot (1)<br>Wooden Handle (1)<br>Stone Peg (2)";
				}
				axeTier++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'X Shovel' button is clicked
			function upgradeShovel()
			{
				if (shovelTier == 0)
				{
					sharpStoneBank--;
					smoothBranchBank--;
					ropeBank--;
					document.querySelector(".shovelButton").innerHTML = "Tin Shovel<hr>Tin Ingot (1)<br>Wooden Handle (1)<br>Stone Peg (2)";
				}
				shovelTier++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'X Hoe' button is clicked
			function upgradeHoe()
			{
				if (hoeTier == 0)
				{
					sharpStoneBank--;
					smoothBranchBank--;
					ropeBank--;
					document.querySelector(".hoeButton").innerHTML = "Tin Hoe<hr>Tin Ingot (1)<br>Wooden Handle (1)<br>Stone Peg (2)";
				}
				hoeTier++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// This function is carried out when the 'X Sickle' button is clicked
			function upgradeSickle()
			{
				if (sickleTier == 0)
				{
					sharpStoneBank--;
					smoothBranchBank--;
					ropeBank--;
					document.querySelector(".sickleButton").innerHTML = "Tin Sickle<hr>Tin Ingot (1)<br>Wooden Handle (1)<br>Stone Peg (2)";
				}
				sickleTier++;
				action(1,1,1);
				advanceTime();
				updateDisp();
			}
// TODO
//
// Figure out dialog box
//
// Add an action section for tool-related collecting
//
// Add saving
//
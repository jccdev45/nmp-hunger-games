const dayEventsFatal = [
	{
		event: " (Player1) catches (Player2) off guard and kills (him/her2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "Player1) throws a knife into (Player2)'s head.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"Player1) begs for (Player2) to kill (him/her1). (He/She2) reluctantly obliges, killing (Player1).",
		tributes: 2,
		killer: "(Player2)",
		killed: "(Player1)",
	},
	{
		event: "Player1) and (Player2) work together to drown (Player3).",
		tributes: 3,
		killer: "(Player1), (Player2)",
		killed: "(Player3)",
	},
	{
		event: "Player1) strangles (Player2) after engaging in a fist fight.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "Player1) shoots an arrow into (Player2)'s head.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "Player1) bleeds out due to untreated injuries.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "Player1) cannot handle the circumstances and commits suicide.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "Player1) bashes (Player2)'s head against a rock several times.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) unknowingly eats toxic berries.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) silently snaps (Player2)'s neck.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) taints (Player2)'s food, killing (him/her2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) decapitates (Player2) with a sword.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) dies from an infection.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) spears (Player2) in the abdomen.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) sets (Player2) on fire with a molotov.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) falls into a pit and dies.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) stabs (Player2) while (his/her2) back is turned.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) severely injures (Player2), but puts (him/her2) out of (his/her2) misery.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) severely injures (Player2) and leaves (him/her2) to die.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) bashes (Player2)'s head in with a mace.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) attempts to climb a tree, but falls to (his/her1) death.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) pushes (Player2) off a cliff during a knife fight.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) throws a knife into (Player2)'s chest.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1)'s trap kills (Player2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) kills (Player2) while (he/she2) is resting.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) is unable to convince (Player2) to not kill (him/her1).",
		tributes: 2,
		killer: "(Player2)",
		killed: "(Player1)",
	},
	{
		event:
			"(Player1) convinces (Player2) to not kill (him/her1), only to kill (him/her2) instead.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) falls into a frozen lake and drowns.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event:
			"(Player1), (Player2), and (Player3) start fighting, but (Player2) runs away as (Player1) kills (Player3).",
		tributes: 3,
		killer: "(Player1)",
		killed: "(Player3)",
	},
	{
		event: "(Player1) kills (Player2) with (his/her2) own weapon.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) overpowers (Player2), killing (him/her2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) sets an explosive off, killing (Player2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) sets an explosive off, killing (Player2), and (Player3).",
		tributes: 3,
		killer: "(Player1)",
		killed: "(Player2), (Player3)",
	},
	{
		event:
			"(Player1) sets an explosive off, killing (Player2), (Player3), and (Player4).",
		tributes: 4,
		killer: "(Player1)",
		killed: "(Player2), (Player3), (Player4)",
	},
	{
		event:
			"(Player1) sets an explosive off, killing (Player2), (Player3), (Player4) and (Player5).",
		tributes: 5,
		killer: "(Player1)",
		killed: "(Player2), (Player3), (Player4), (Player5)",
	},
	{
		event: "(Player1) kills (Player2) as (he/she2) tries to run.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) and (Player2) threaten a double suicide. It fails and they die.",
		tributes: 2,
		killer: "none",
		killed: "(Player1), (Player2)",
	},
	{
		event:
			"(Player1), (Player2), (Player3), and (Player4) form a suicide pact, killing themselves.",
		tributes: 4,
		killer: "none",
		killed: "(Player1), (Player2), (Player3), (Player4)",
	},
	{
		event: "(Player1) dies from hypothermia.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) dies from hunger.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) dies from thirst.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) kills (Player2) with a hatchet.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) and (Player2) fight (Player3) and (Player4). (Player1) and (Player2) survive.",
		tributes: 4,
		killer: "(Player1), (Player2)",
		killed: "(Player3), (Player4)",
	},
	{
		event:
			"(Player1) and (Player2) fight (Player3) and (Player4). (Player3) and (Player4) survive.",
		tributes: 4,
		killer: "(Player3), (Player4)",
		killed: "(Player1), (Player2)",
	},
	{
		event: "(Player1) dies trying to escape the arena.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) dies of dysentery.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) accidently detonates a land mine while trying to arm it.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event:
			"(Player1) attacks (Player2), but (Player3) protects (him/her2), killing (Player1).",
		tributes: 3,
		killer: "(Player3)",
		killed: "(Player1)",
	},
	{
		event: "(Player1) ambushes (Player2) and kills (him/her2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) accidently steps on a landmine.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) severely slices (Player2) with a sword.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) strangles (Player2) with a rope.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) kills (Player2) for (his/her2) supplies.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) shoots an arrow at (Player2), but misses and kills (Player3) instead.",
		tributes: 3,
		killer: "(Player1)",
		killed: "(Player3)",
	},
	{
		event:
			"(Player1) shoots a poisonous blow dart into (Player2)'s neck, slowly killing (him/her2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1), (Player2), and (Player3) successfully ambush and kill (Player4), (Player5), and (Player6).",
		tributes: 6,
		killer: "(Player1), (Player2), (Player3)",
		killed: "(Player4), (Player5), (Player6)",
	},
	{
		event:
			"(Player1), (Player2), and (Player3) unsuccessfully ambush (Player4), (Player5), and (Player6), who kill them instead.",
		tributes: 6,
		killer: "(Player4), (Player5), (Player6)",
		killed: "(Player1), (Player2), (Player3)",
	},
	{
		event: "(Player1) stabs (Player2) with a tree branch.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) forces (Player2) to kill (Player3) or (Player4). (He/She2) decides to kill (Player3).",
		tributes: 4,
		killer: "(Player2)",
		killed: "(Player3)",
	},
	{
		event:
			"(Player1) forces (Player2) to kill (Player3) or (Player4). (He/She2) decides to kill (Player4).",
		tributes: 4,
		killer: "(Player2)",
		killed: "(Player4)",
	},
	{
		event:
			"(Player1) forces (Player2) to kill (Player3) or (Player4). (He/She2) refuses to kill, so (Player1) kills (him/her2) instead.",
		tributes: 4,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) poisons (Player2)'s drink, but mistakes it for (his/her1) own and dies.",
		tributes: 2,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) poisons (Player2)'s drink. (He/She2) drinks it and dies.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) stabs (Player2) in the back with a trident.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) attempts to climb a tree, but falls on (Player2), killing them both.",
		tributes: 2,
		killer: "none",
		killed: "(Player1), (Player2)",
	},
	{
		event:
			"(Player1), (Player2), and (Player3) get into a fight. (Player1) triumphantly kills them both.",
		tributes: 3,
		killer: "(Player1)",
		killed: "(Player2), (Player3)",
	},
	{
		event:
			"(Player1), (Player2), and (Player3) get into a fight. (Player2) triumphantly kills them both.",
		tributes: 3,
		killer: "(Player2)",
		killed: "(Player1), (Player3)",
	},
	{
		event:
			"(Player1), (Player2), and (Player3) get into a fight. (Player3) triumphantly kills them both.",
		tributes: 3,
		killer: "(Player3)",
		killed: "(Player1), (Player2)",
	},
	{
		event: "(Player1) kills (Player2) with a sickle.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1), (Player2), (Player3), (Player4), and (Player5) track down and kill (Player6).",
		tributes: 6,
		killer: "(Player1), (Player2), (Player3), (Player4), (Player5)",
		killed: "(Player6)",
	},
	{
		event:
			"(Player1), (Player2), (Player3), and (Player4) track down and kill (Player5).",
		tributes: 5,
		killer: "(Player1), (Player2), (Player3), (Player4)",
		killed: "(Player5)",
	},
	{
		event: "(Player1), (Player2), and (Player3) track down and kill (Player4).",
		tributes: 4,
		killer: "(Player1), (Player2), (Player3)",
		killed: "(Player4)",
	},
	{
		event: "(Player1) and (Player2) track down and kill (Player3).",
		tributes: 3,
		killer: "(Player1), (Player2)",
		killed: "(Player3)",
	},
	{
		event: "(Player1) tracks down and kills (Player2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) repeatedly stabs (Player2) to death with sais.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
];

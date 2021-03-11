const bloodbathEventsFatal = [
	{
		event: "(Player1) steps off (his/her1) podium too soon and blows up.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) throws a knife into (Player2)'s head.",
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
		event: "(Player1) catches (Player2) off guard and kills (him/her2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) and (Player2) work together to drown (Player3).",
		tributes: 3,
		killer: "(Player1), (Player2)",
		killed: "(Player3)",
	},
	{
		event: "(Player1) strangles (Player2) after engaging in a fist fight.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) shoots an arrow into (Player2)'s head.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) cannot handle the circumstances and commits suicide.",
		tributes: 1,
		killer: "none",
		killed: "(Player1)",
	},
	{
		event: "(Player1) bashes (Player2)'s head against a rock several times.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event: "(Player1) snaps (Player2)'s neck.",
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
		event:
			"(Player1) attacks (Player2), but (Player3) protects (him/her2), killing (Player1).",
		tributes: 3,
		killer: "(Player3)",
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
		event: "(Player1) stabs (Player2) with a tree branch.",
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
		event:
			"(Player1) finds (Player2) hiding in the cornucopia and kills (him/her2).",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) finds (Player2) hiding in the cornucopia, but (Player2) kills (him/her1).",
		tributes: 2,
		killer: "(Player2)",
		killed: "(Player1)",
	},
	{
		event: "(Player1) kills (Player2) with a sickle.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) and (Player2) fight for a bag. (Player1) strangles (Player2) with the straps and runs.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
	{
		event:
			"(Player1) and (Player2) fight for a bag. (Player2) strangles (Player1) with the straps and runs.",
		tributes: 2,
		killer: "(Player2)",
		killed: "(Player1)",
	},
	{
		event: "(Player1) repeatedly stabs (Player2) to death with sais.",
		tributes: 2,
		killer: "(Player1)",
		killed: "(Player2)",
	},
];

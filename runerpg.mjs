Hooks.once("init", () => {
  console.log("Rune RPG system initializing");

  // Register actor types explicitly
  CONFIG.Actor.typeLabels = {
    character: "Character"
  };
});

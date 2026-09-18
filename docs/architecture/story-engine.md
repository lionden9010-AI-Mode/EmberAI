# Story engine

The engine owns portable structured state: current scene, branches, player and NPCs, locations, factions, items, rules, Story Cards, memories, events, relationships, timeline, model configuration, and instructions. Providers receive a bounded context assembled from this state; they do not own the story.

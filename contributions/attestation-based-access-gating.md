---
title: "Attestation-Based Access Gating System"
description: "You can use the AttestationStation to create a generic system that allows developers to gate access to product features depending on the attestations that a user has."
lang: "en-US"
type: "Draft Project Idea"
authors: ["@smartcontracts (GitHub) @ OP Labs"]
category: "dev-tooling"
effort: "Medium"
skill-sets: ["Front End Development", "Back End Development", "Full Stack Development", "Smart Contract Development"]
labels: ["Attestations", "Developer Tooling", "Accessibility/Transparency"]
contributions:
  contributors: [""]
  discussion-link: ""
  links: [""]
  execution-status: "not-started"
---

# Attestation-Based Access Gating System

## Summary

The [AttestationStation](https://docs.optimism.io/chain/identity/overview) is a simple and unified way to make attestations on OP Mainnet, OP Goerli, or any other OP Stack-based chain.

You can use the AttestationStation to create a generic system that allows developers to gate access to product features depending on the attestations that a user has. Ideally this looks like some sort of SDK and/or server that allows app developers to specify relatively complex sets of attestations that users need to have before they can access a feature.

## Possible Features

- Allow developers to specify complex attestation-based conditions to unlock features in their products.
- Bonus: A easy to use UI for drag and drop attestation building. 

## Why this is cool

- Developers could have more fine-grained control over who can access their product
- Communities can have complex but programmatic conditions for members

---
title: "Ultra Sound Money as an OP Stack Chain"
description: "Modify the OP Stack chain to constantly keep track of the L1 gas burn and store that information in an L2 smart contract, potentially replacing the Ultra Sound Money website backend with an OP Stack chain Rollup."
lang: "en-US"
type: "Draft Project Idea"
authors: ["@smartcontracts (GitHub) @ OP Labs"]
category: "dapp-idea"
effort: "Large"
skill-sets: ["Protocol Development", "Back End Development", "Full Stack Development"]
labels: ["OP Stack", "Documentation"]
contributions: 
        contributors: [""]
        discussion-link: ""
        links: [""]
        execution-status: "not-started"
---

# Ultra Sound Money as an OP Stack Chain

## Summary

This project aims to leverage the OP Stack chains, without a Sequencer, to index data. In particular, these chains, dubbed "Indexing Chains," can capture various L1 data, such as gas burn information. By doing this, we can potentially replace the Ultra Sound Money website backend with an OP Stack chain Rollup. To do this, you would need to modify the OP Stack chain to constantly keep track of the L1 gas burn and store that information in an L2 smart contract.

## Possible Features

- Implement an Indexing Chain to track L1 gas burn.
- Store the L1 gas burn in an L2 smart contract.
- Replace the Ultra Sound Money website backend with the newly created Indexing Chain.
- Query the L1 gas burn from the L2 smart contract via the USM website.

## Why this is cool

- It offers a novel and efficient way to index L1 data.
- Enhances the robustness and performance of the Ultra Sound Money website backend.
- Showcases the versatility of the OP Stack chains for tasks beyond Sequencer-based operations.
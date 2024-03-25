---
title: "Attestation-Based Challenger"
description: "Originally, Optimism considered introducing an attestation-based challenger module as a pathway towards decentralization. Though focus has shifted towards fault proofs, the attestation-based module remains a fascinating and worthwhile concept. Instead of a multisig, this module would utilize a smart contract that verifies EIP-712 signatures. "
lang: "en-US"
type: "Project Idea"
authors: ["@smartcontracts (GitHub) @ OP Labs"]
category: "protocol-infra"
effort: "Large"
skill-sets: ["Protocol Development", "Full Stack Development", "Smart Contract Development"]
labels: ["Attestations", "Chain Infrastructure", "Smart Contracts", "Protocol"]
contributions: 
        contributors: [""]
        discussion-link: ""
        links: [""]
        execution-status: "not-started"
---

# Attestation-Based Challenger

## Summary

Originally, Optimism considered introducing an attestation-based challenger module as a pathway towards decentralization. Though focus has shifted towards fault proofs, the attestation-based module remains a fascinating and worthwhile concept. Instead of a multisig, this module would utilize a smart contract that verifies EIP-712 signatures. Any participant could call the smart contract with an array of signatures and a proposed output hash for a given L2 block number. If a threshold of signatures approves that output hash for that block number— and if the existing proposed output hash in the L2OutputOracle contract differs from the signed-off proposal—then the original proposed output hash is discarded.

## Possible Features

- Develop a slim server with a simple API route such as /signature/block/N that returns a signature over the correct proposal hash for block N.
- Design the API to be callable by anyone.
- If an incorrect proposal on L1 is detected, the API would be called on various known machines to obtain a threshold of signatures.
- Incorporate a smart contract that accepts a proposed output hash for an L2 block number and a threshold of signatures.
- If the threshold is met, and the proposed hash differs from the existing one in the L2OutputOracle, the existing proposal is removed.

## Why this is cool

- Offer a novel approach towards securing the integrity of L2 block proposals.
- Contribute to the broader ecosystem's understanding of decentralization mechanisms.
- Help test the potential effectiveness of attestation-based challenger modules in a blockchain context.
- Better than multisigs, easier than fault proofs.

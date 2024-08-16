---
title: 'Attestation Data Duplicator'
description: 'One of the primary challenges currently facing the AttestationStation is the need to bootstrap the system with high-quality attestations. Luckily, blockchains already have an enormous amount of useful data that can be converted into attestations.'
lang: 'en-US'
type: 'Project Idea'
authors: ['@smartcontracts (GitHub) @ OP Labs']
category: 'dev-tooling'
effort: 'Large'
skill-sets:
  [
    'Front End Development',
    'Back End Development',
    'Full Stack Development',
    'Smart Contract Development',
  ]
labels:
  [
    'Attestations',
    'Developer Tooling',
    'Accessibility/Transparency',
    'Governance',
  ]
contributions:
  - contributors: ['@kristoferlund (Twitter)']
    discussion-link: 'https://github.com/ethereum-optimism/ecosystem-contributions/discussions/189'
    links: ['https://catts.run', 'https://github.com/c-atts']
    execution-status: 'in-progress-open'
  - contributors:
      [
        '@aagbotemi (GitHub) @ Duplikaat Team',
        '@goodness5 (GitHub) @ Duplikaat Team',
        '@okolievans (GitHub) @ Duplikaat Team',
        '@olorunfemibabs (GitHub) @ Duplikaat Team',
        '@dadsec-dev (GitHub) @ Duplikaat Team',
      ]
    discussion-link: 'https://github.com/ethereum-optimism/ecosystem-contributions/discussions/175'
    links: ['']
    execution-status: 'in-discussion'
---

# Attestation Data Duplicator

## Summary

The [AttestationStation](https://docs.optimism.io/chain/identity/overview) is a central repository for attestations on OP Mainnet. One of the primary challenges currently facing the AttestationStation is the need to bootstrap the system with high-quality attestations. Luckily, blockchains already have an enormous amount of useful data that can be converted into attestations.

Some examples of existing blockchain data that can be converted into productive attestations are:

- Addresses that were part of the initial ETH genesis allocation
- Addresses that have held some NFT for more than X amount of time
- Addresses that have donated to GitCoin rounds
- Addresses that have received POAPs from important events

Converting this information into attestations makes it more accessible to developers and improves the quality of data in the AttestationStation generally. It would be valuable to have a project that can import this data into the AttestationStation in a verifiable way. Here, "verifiable" means that another user can replicate the process that was used to generate the attestations to confirm that all of the attestations were generated properly. That user can then trust that the attestations are correct and can begin to use them in their own applications.

## Possible Features

- Specify queries or scripts that pull blockchain data and convert that data into attestations
- Allow developers to easily reproduce the queries/scripts to verify the attestations
- Consider creating a system that makes it easy to do this for arbitrary queries.
